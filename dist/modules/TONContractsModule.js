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

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

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

  function TONContractsModule() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TONContractsModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TONContractsModule)).call.apply(_getPrototypeOf2, [this].concat(args)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwicmVtb3ZlUHJvcHMiLCJvYmoiLCJwYXRocyIsInJlc3VsdCIsImZvckVhY2giLCJwYXRoIiwiZG90UG9zIiwiaW5kZXhPZiIsIm5hbWUiLCJzdWJzdHIiLCJjaGlsZCIsInJlZHVjZWRDaGlsZCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInBhcmVudFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwidHJhY2UiLCJzcGFuIiwic2V0VGFnIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJjb3JlUGFyYW1zIiwiY29kZUJhc2U2NCIsImRhdGFCYXNlNjQiLCJUT05DbGllbnRFcnJvciIsImFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsIiwiZ2V0QWNjb3VudCIsImFjY291bnQiLCJjb2RlIiwiZGF0YSIsInJlcXVlc3RDb3JlIiwiY29ucyIsIml0ZW0iLCJpbnZhbGlkQ29ucyIsInB1c2giLCJyZXRyeUluZGV4IiwibG9nIiwiY29uc3RydWN0b3JIZWFkZXIiLCJtYWtlRXhwaXJlSGVhZGVyIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJleHBpcmUiLCJoZWFkZXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZE1lc3NhZ2UiLCJ1bnNpZ25lZEJ5dGVzQmFzZTY0Iiwic2lnbkJ5dGVzQmFzZTY0IiwiZ2V0Qm9jSGFzaCIsImJvY0Jhc2U2NCIsImhhc2giLCJpZEJhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsInBvc3RSZXF1ZXN0cyIsImJvZHkiLCJyZXN1bHRGaWVsZHMiLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwic2VuZE1lc3NhZ2UiLCJwcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwiZ2V0U2VydmVySW5mbyIsInNlcnZlckluZm8iLCJvcGVyYXRpb25JZCIsInN1cHBvcnRzT3BlcmF0aW9uSWQiLCJnZW5lcmF0ZU9wZXJhdGlvbklkIiwidHJhbnNhY3Rpb24iLCJ3YWl0RXhwaXJlZCIsImJsb2NrcyIsIndhaXRGb3IiLCJmaWx0ZXIiLCJtYXN0ZXIiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJ0aW1lb3V0IiwiYmxvY2siLCJ0cmFuc2FjdGlvbl9pZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbl9tc2ciLCJzdGF0dXMiLCJyYWNlIiwiZmluaXNoT3BlcmF0aW9ucyIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiYWNjX3R5cGUiLCJhbHJlYWR5RGVwbG95ZWQiLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJvdXRwdXRNZXNzYWdlcyIsIm91dF9tZXNzYWdlcyIsIm91dHB1dCIsImV4dGVybmFsTWVzc2FnZXMiLCJ4IiwibXNnX3R5cGUiLCJhbGwiLCJtYXAiLCJkZWNvZGVPdXRwdXRNZXNzYWdlQm9keSIsImJvZHlCYXNlNjQiLCJvdXRwdXRzIiwicmVzdWx0T3V0cHV0IiwidG9Mb3dlckNhc2UiLCJ3YWl0UGFyYW1zIiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwidXNlckhlYWRlciIsIm1lc3NhZ2VFeHBpcmF0aW9uVGltZW91dCIsImluY2x1ZGVzIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwiaXNNZXNzYWdlRXhwaXJlZCIsInJldHJ5Q2FsbCIsInByb2Nlc3NEZXBsb3lNZXNzYWdlIiwiY3JlYXRlUnVuTWVzc2FnZSIsInByb2Nlc3NSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTUVTU0FHRV9FWFBJUkVEIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJhYm9ydGVkIiwic3RhdHVzX2NoYW5nZSIsImNvbXB1dGUiLCJjb21wdXRlX3R5cGUiLCJyZWFzb24iLCJza2lwcGVkX3JlYXNvbiIsInN1Y2Nlc3MiLCJleGl0X2NvZGUiLCJub19mdW5kcyIsInZhbGlkIiwicmVzdWx0X2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFnREE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFT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QXBGL0I7O0FBQUEsaUJBcUZRQSxNQXJGUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFzRmFBLE1BQU0sQ0FBQ3dQLE9BdEZwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkF1RmtCYixTQUFTLENBQ1gzTyxNQUFNLENBQUMwUCxRQUFQLEdBQ00sMENBRE4sR0FFTyxDQUFDMVAsTUFBTSxDQUFDMlAsS0FBUixHQUFnQiw2QkFBaEIsR0FBZ0QscUJBSDVDLEVBSVgzUCxNQUFNLENBQUM0UCxXQUFQLElBQXNCLENBSlgsRUFLWGhRLHlCQUF5QixDQUFDSSxNQUxmLENBdkYzQjs7QUFBQTtBQUFBLGtCQWlHVTJPLFNBQVMsQ0FDWCxxQkFEVyxFQUVYLENBQUMsQ0FGVSxFQUdYL08seUJBQXlCLENBQUNLLE9BSGYsQ0FqR25COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUF3R0EsSUFBTTRMLGtCQUFrQix5ZEFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0LFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BzKG9iajoge30sIHBhdGhzOiBzdHJpbmdbXSk6IHt9IHtcbiAgICBsZXQgcmVzdWx0ID0gb2JqO1xuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgZG90UG9zID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3RQb3MgPCAwKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgZG90UG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVzdWx0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkdWNlZENoaWxkID0gcmVtb3ZlUHJvcHMoY2hpbGQsIFtwYXRoLnN1YnN0cihkb3RQb3MgKyAxKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWR1Y2VkQ2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcmVkdWNlZENoaWxkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5HZXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkdldFJlc3VsdD4ge1xuICAgICAgICBsZXQgY29yZVBhcmFtczogVE9OQ29udHJhY3RSdW5HZXRQYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgIGlmICghcGFyYW1zLmNvZGVCYXNlNjQgfHwgIXBhcmFtcy5kYXRhQmFzZTY0KSB7XG4gICAgICAgICAgICBpZiAoIXBhcmFtcy5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnQ6IGFueSA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSk7XG4gICAgICAgICAgICBhY2NvdW50LmNvZGVCYXNlNjQgPSBhY2NvdW50LmNvZGU7XG4gICAgICAgICAgICBhY2NvdW50LmRhdGFCYXNlNjQgPSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBkZWxldGUgYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuZGF0YTtcbiAgICAgICAgICAgIGNvcmVQYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYWNjb3VudCxcbiAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCd0dm0uZ2V0JywgY29yZVBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXJyYXlGcm9tQ09OUyhjb25zOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBpdGVtID0gY29ucztcbiAgICAgICAgd2hpbGUgKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmICghaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQ29ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaXRlbVswXSk7XG4gICAgICAgICAgICBpdGVtID0gaXRlbVsxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IGhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogY29uc3RydWN0b3JIZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnNpZ25QYXJhbXMsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGV4cGlyZTogaGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGlkID0gcGFyYW1zLm1lc3NhZ2VJZFxuICAgICAgICAgICAgfHwgKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2s6IFFCbG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2luX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uX2lkID0gYmxvY2suaW5fbXNnX2Rlc2NyXG4gICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbl9pZCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKCdJbnZhbGlkIGJsb2NrIHJlY2VpdmVkOiBubyB0cmFuc2FjdGlvbiBJRCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uX2lkIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvblxuICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRGaWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCBhY2NvdW50IGlzIGFscmVhZHkgZGVwbG95ZWRcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoYWNjb3VudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlcyA9IHRyYW5zYWN0aW9uLm91dF9tZXNzYWdlcztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlcyB8fCBvdXRwdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3V0cHV0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gb3V0cHV0TWVzc2FnZXMuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBCZWZvcmUgbWVzc2FnZXMgcGFyc2UnKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gJzB4MTAwMDAwMDAwMDAwMDAnO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnQsXG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApLFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJIZWFkZXI7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0RlcGxveU1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjZWl2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgUkVQTEFZX1BST1RFQ1RJT04gPSA1MjtcbiAgICAgICAgY29uc3QgTUVTU0FHRV9FWFBJUkVEID0gNTc7XG4gICAgICAgIGNvbnN0IGlzTm9kZVNFTWVzc2FnZUV4cGlyZWQgPSBwaGFzZSA9PT0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICYmIChjb2RlID09PSBNRVNTQUdFX0VYUElSRUQgfHwgY29kZSA9PT0gUkVQTEFZX1BST1RFQ1RJT04pO1xuICAgICAgICByZXR1cm4gaXNOb2RlU0VNZXNzYWdlRXhwaXJlZFxuICAgICAgICAgICAgPyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpXG4gICAgICAgICAgICA6IG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW4sXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vR2FzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24uYWN0aW9uO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgIGFjdGlvbi5ub19mdW5kc1xuICAgICAgICAgICAgICAgICAgICA/ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICA6ICghYWN0aW9uLnZhbGlkID8gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCcgOiAnQWN0aW9uIHBoYXNlIGZhaWxlZCcpLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5yZXN1bHRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgJ1RyYW5zYWN0aW9uIGFib3J0ZWQnLFxuICAgICAgICAtMSxcbiAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duLFxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICB9XG4gICBgO1xuIl19