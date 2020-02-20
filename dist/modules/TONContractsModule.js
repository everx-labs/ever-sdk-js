"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireWildcard(require("./TONQueriesModule"));

var _opentracing = _interopRequireWildcard(require("opentracing"));

/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */
var TONAddressStringVariant = {
  AccountId: 'AccountId',
  Hex: 'Hex',
  Base64: 'Base64'
};
exports.TONAddressStringVariant = TONAddressStringVariant;
var TONClientTransactionPhase = {
  storage: 'storage',
  computeSkipped: 'computeSkipped',
  computeVm: "computeVm",
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

var TONContractsModule =
/*#__PURE__*/
function (_TONModule) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bigBalance", "0x10000000000000");
    return _this;
  }

  (0, _createClass2["default"])(TONContractsModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
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
      var _load = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(params, parentSpan) {
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
      var _deploy = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(params, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('contracts.deploy',
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee3(span) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            span.setTag('params', params);
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
      var _run = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(params, parentSpan) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('contracts.run',
                /*#__PURE__*/
                function () {
                  var _ref2 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee5(span) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            span.setTag('params', params);
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
      var _runLocal = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(params, parentSpan) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('contracts.runLocal',
                /*#__PURE__*/
                function () {
                  var _ref3 = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee7(span) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            span.setTag('params', params);
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
      var _createDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(params) {
        var _params$constructorHe;

        var message;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context9.next = 3;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 3:
                message = _context9.sent;
                return _context9.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageBodyBase64: message.messageBodyBase64,
                    expire: (_params$constructorHe = params.constructorHeader) === null || _params$constructorHe === void 0 ? void 0 : _params$constructorHe.expire
                  },
                  address: message.address
                });

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createDeployMessage(_x12) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(params) {
        var _params$header;

        var message;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.config.log('createRunMessage', params);
                _context10.next = 3;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 3:
                message = _context10.sent;
                message.expire = (_params$header = params.header) === null || _params$header === void 0 ? void 0 : _params$header.expire;
                return _context10.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createRunMessage(_x13) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(params) {
        var result;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.requestCore('contracts.deploy.encode_unsigned_message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  publicKeyHex: params.keyPair["public"],
                  workchainId: params.workchainId
                });

              case 2:
                result = _context11.sent;
                return _context11.abrupt("return", {
                  address: result.addressHex,
                  signParams: result.encoded
                });

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createUnsignedDeployMessage(_x14) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(params) {
        var signParams;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input
                });

              case 2:
                signParams = _context12.sent;
                return _context12.abrupt("return", {
                  abi: params.abi,
                  functionName: params.functionName,
                  signParams: signParams
                });

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createUnsignedRunMessage(_x15) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
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

      function createSignedMessage(_x16) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        var message;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.createSignedMessage(params.createSignedParams);

              case 2:
                message = _context14.sent;
                return _context14.abrupt("return", {
                  address: params.address,
                  message: message
                });

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createSignedDeployMessage(_x17) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        var message;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.createSignedMessage(params.createSignedParams);

              case 2:
                message = _context15.sent;
                return _context15.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createSignedRunMessage(_x18) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
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

      function getCodeFromImage(_x19) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
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

      function getDeployData(_x20) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
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

      function createRunBody(_x21) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(params) {
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

      function getFunctionId(_x22) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(params) {
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

      function getBocHash(_x23) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function decodeRunOutput(_x24) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function decodeInputMessageBody(_x25) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function decodeOutputMessageBody(_x26) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params, parentSpan) {
        var id, idBase64;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.t0 = params.messageId;

                if (_context24.t0) {
                  _context24.next = 5;
                  break;
                }

                _context24.next = 4;
                return this.getBocHash({
                  bocBase64: params.messageBodyBase64
                });

              case 4:
                _context24.t0 = _context24.sent.hash;

              case 5:
                id = _context24.t0;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context24.next = 9;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 9:
                this.config.log('sendMessage. Request posted');
                return _context24.abrupt("return", id);

              case 11:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function sendMessage(_x27, _x28) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(message, resultFields, parentSpan) {
        var messageId, timeout, promises, expire, transaction, transactionNow;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                messageId = _context25.sent;
                timeout = _TONQueriesModule.DEFAULT_TIMEOUT;
                promises = [];

                if (!message.expire) {
                  _context25.next = 11;
                  break;
                }

                expire = message.expire; // calculate timeout according to `expire` value (in seconds)
                // add default timeout as master block validation time

                timeout = expire * 1000 - Date.now() + _TONQueriesModule.DEFAULT_TIMEOUT;

                if (!(timeout <= 0)) {
                  _context25.next = 10;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed("Message already expired");

              case 10:
                // wait for block, produced after `expire` to guarantee that message is rejected
                promises.push(this.queries.blocks.waitFor({
                  workchain_id: {
                    eq: -1
                  },
                  master: {
                    shard_hashes: {
                      all: {
                        descr: {
                          gen_utime: {
                            ge: expire
                          }
                        }
                      }
                    }
                  }
                }, 'id', timeout, parentSpan));

              case 11:
                // wait for message processing transaction with inreased timeout - to make block waiting end first
                promises.push(this.queries.transactions.waitFor({
                  in_msg: {
                    eq: messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, timeout, parentSpan));
                _context25.next = 14;
                return Promise.race(promises);

              case 14:
                transaction = _context25.sent;

                if (!((transaction === null || transaction === void 0 ? void 0 : transaction.in_msg) !== messageId)) {
                  _context25.next = 17;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired();

              case 17:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context25.abrupt("return", transaction);

              case 20:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function processMessage(_x29, _x30, _x31) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(params, parentSpan) {
        var transaction;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context26.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan);

              case 3:
                transaction = _context26.sent;
                _context26.next = 6;
                return checkTransaction(transaction);

              case 6:
                this.config.log('processDeployMessage. End');
                return _context26.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 8:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function processDeployMessage(_x32, _x33) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params, parentSpan) {
        var _this5 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context27.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan);

              case 3:
                transaction = _context27.sent;
                _context27.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context27.next = 9;
                  break;
                }

                return _context27.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context27.next = 13;
                return Promise.all(externalMessages.map(function (x) {
                  return _this5.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 13:
                outputs = _context27.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context27.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 17:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function processRunMessage(_x34, _x35) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context28.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context28.sent;
                return _context28.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function processRunMessageLocal(_x36, _x37, _x38) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context29.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context29.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context29.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function calcRunFees(_x39, _x40) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee30(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context30.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context30.sent;
                return _context30.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function calcDeployFees(_x41, _x42) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee31(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context31.next = 6;
                  break;
                }

                _context31.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context31.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context31.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function calcMsgProcessFees(_x43, _x44) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee32(params) {
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                return _context32.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function convertAddress(_x45) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee33(params) {
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function internalDeployNative(_x46) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee34(params) {
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context34.abrupt("return", _context34.sent);

              case 3:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function internalRunNative(_x47) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "makeHeader",
    value: function makeHeader(abi, userHeader) {
      var _this$config$data;

      var timeout = ((_this$config$data = this.config.data) === null || _this$config$data === void 0 ? void 0 : _this$config$data.transactionTimeout) || 0;

      if (abi.header && abi.header.includes("expire") && timeout > 0) {
        var header = userHeader || {};
        header.expire = Math.floor((Date.now() + timeout) / 1000) + 1;
        return header;
      } else {
        return userHeader;
      }
    }
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee35(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                this.config.log("Deploy start");
                params.constructorHeader = this.makeHeader(params["package"].abi, params.constructorHeader);
                _context35.next = 4;
                return this.createDeployMessage(params);

              case 4:
                message = _context35.sent;
                return _context35.abrupt("return", this.processDeployMessage(message, parentSpan));

              case 6:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function internalDeployJs(_x48, _x49) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee36(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                this.config.log("Run start");
                params.header = this.makeHeader(params.abi, params.header);
                _context36.next = 4;
                return this.createRunMessage(params);

              case 4:
                message = _context36.sent;
                return _context36.abrupt("return", this.processRunMessage(message, parentSpan));

              case 6:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function internalRunJs(_x50, _x51) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee37(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                removeTypeName = function _ref4(obj) {
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

                this.config.log("getAccount. Filter", filter);
                _context37.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context37.sent;
                removeTypeName(account);
                this.config.log("getAccount. Account recieved", account);
                return _context37.abrupt("return", account);

              case 11:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function getAccount(_x52, _x53, _x54, _x55) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee38(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context38.sent;
                return _context38.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function internalRunLocalJs(_x56, _x57) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x58) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee39(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee39$(_context39) {
      while (1) {
        switch (_context39.prev = _context39.next) {
          case 0:
            nodeError = function _ref5(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context39.next = 3;
              break;
            }

            return _context39.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context39.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context39.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context39.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context39.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context39.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context39.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context39.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context39.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context39.next = 24;
              break;
            }

            if (compute.success) {
              _context39.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context39.next = 28;
              break;
            }

            if (action.success) {
              _context39.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context39.stop();
        }
      }
    }, _callee39);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImxvZyIsInJlcXVlc3RDb3JlIiwiYWJpIiwiY29uc3RydWN0b3JIZWFkZXIiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImV4cGlyZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJwb3N0UmVxdWVzdHMiLCJib2R5IiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJ0aW1lb3V0IiwiREVGQVVMVF9USU1FT1VUIiwicHJvbWlzZXMiLCJEYXRlIiwibm93IiwiVE9OQ2xpZW50RXJyb3IiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJwdXNoIiwiYmxvY2tzIiwid2FpdEZvciIsIndvcmtjaGFpbl9pZCIsIm1hc3RlciIsInNoYXJkX2hhc2hlcyIsImFsbCIsImRlc2NyIiwiZ2VuX3V0aW1lIiwiZ2UiLCJ0cmFuc2FjdGlvbnMiLCJpbl9tc2ciLCJzdGF0dXMiLCJQcm9taXNlIiwicmFjZSIsInRyYW5zYWN0aW9uIiwibWVzc2FnZUV4cGlyZWQiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJhbHJlYWR5RGVwbG95ZWQiLCJvdXRwdXRNZXNzYWdlcyIsIm91dF9tZXNzYWdlcyIsIm91dHB1dCIsImV4dGVybmFsTWVzc2FnZXMiLCJmaWx0ZXIiLCJ4IiwibXNnX3R5cGUiLCJtYXAiLCJkZWNvZGVPdXRwdXRNZXNzYWdlQm9keSIsImJvZHlCYXNlNjQiLCJvdXRwdXRzIiwicmVzdWx0T3V0cHV0IiwiZmluZCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImdldEFjY291bnQiLCJhY2NvdW50IiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwidXNlckhlYWRlciIsImRhdGEiLCJ0cmFuc2FjdGlvblRpbWVvdXQiLCJpbmNsdWRlcyIsIm1ha2VIZWFkZXIiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ2YWx1ZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiYWNjX3R5cGUiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIiwibm9kZUVycm9yIiwiY29kZSIsInBoYXNlIiwic291cmNlIiwiTk9ERSIsInRyYW5zYWN0aW9uX2lkIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJzdWNjZXNzIiwiZXhpdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCIsInJlc3VsdF9jb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkRBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQWpFQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUVPLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQU1BLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFHckNDLEVBQUFBLFNBQVMsRUFBRSxXQUgwQjtBQUlyQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSjZCO0FBS3JDQyxFQUFBQSxPQUFPLEVBQUU7QUFMNEIsQ0FBbEM7O0FBUUEsSUFBTUMsNkJBQTZCLEdBQUc7QUFDekNDLEVBQUFBLE9BQU8sRUFBRSxDQURnQztBQUV6Q0MsRUFBQUEsUUFBUSxFQUFFLENBRitCO0FBR3pDQyxFQUFBQSxLQUFLLEVBQUU7QUFIa0MsQ0FBdEM7O0FBTUEsSUFBTUMsc0JBQXNCLEdBQUc7QUFDbENDLEVBQUFBLFNBQVMsRUFBRSxDQUR1QjtBQUVsQ0MsRUFBQUEsTUFBTSxFQUFFLENBRjBCO0FBR2xDQyxFQUFBQSxPQUFPLEVBQUU7QUFIeUIsQ0FBL0I7O0FBTUEsSUFBTUMsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEWTtBQUV0QkMsRUFBQUEsR0FBRyxFQUFFLENBRmlCO0FBR3RCQyxFQUFBQSxXQUFXLEVBQUUsQ0FIUztBQUl0QixXQUFPLENBSmU7QUFLdEJDLEVBQUFBLE9BQU8sRUFBRSxDQUxhO0FBTXRCQyxFQUFBQSxjQUFjLEVBQUUsQ0FOTTtBQU90QkMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFQSSxDQUFuQjs7QUFVQSxJQUFNQyxXQUFXLEdBQUc7QUFDdkJOLEVBQUFBLFFBQVEsRUFBRSxDQURhO0FBRXZCRSxFQUFBQSxXQUFXLEVBQUUsQ0FGVTtBQUd2QkssRUFBQUEsU0FBUyxFQUFFLENBSFk7QUFJdkJKLEVBQUFBLE9BQU8sRUFBRSxDQUpjO0FBS3ZCSyxFQUFBQSxrQkFBa0IsRUFBRSxDQUxHO0FBTXZCQyxFQUFBQSxPQUFPLEVBQUUsQ0FOYztBQU92QkMsRUFBQUEsZUFBZSxFQUFFLENBUE07QUFRdkJDLEVBQUFBLElBQUksRUFBRSxDQUFDO0FBUmdCLENBQXBCOztBQVdBLElBQU1DLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsUUFBUSxFQUFFLENBRGM7QUFFeEJDLEVBQUFBLEtBQUssRUFBRSxDQUZpQjtBQUd4QkMsRUFBQUEsTUFBTSxFQUFFO0FBSGdCLENBQXJCOztBQU1BLElBQU1DLHdCQUF3QixHQUFHO0FBQ3BDMUIsRUFBQUEsT0FBTyxFQUFFLENBRDJCO0FBRXBDMkIsRUFBQUEsTUFBTSxFQUFFLENBRjRCO0FBR3BDQyxFQUFBQSxVQUFVLEVBQUUsQ0FId0I7QUFJcENDLEVBQUFBLFdBQVcsRUFBRSxDQUp1QjtBQUtwQ0MsRUFBQUEsUUFBUSxFQUFFLENBTDBCO0FBTXBDQyxFQUFBQSxTQUFTLEVBQUUsQ0FOeUI7QUFPcENDLEVBQUFBLE9BQU8sRUFBRSxDQVAyQjtBQVFwQ0MsRUFBQUEsVUFBVSxFQUFFO0FBUndCLENBQWpDOztBQVdBLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDbEMsRUFBQUEsT0FBTyxFQUFFLENBRHlCO0FBRWxDOEIsRUFBQUEsUUFBUSxFQUFFLENBRndCO0FBR2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FIdUI7QUFJbENDLEVBQUFBLE9BQU8sRUFBRTtBQUp5QixDQUEvQjs7QUFPQSxJQUFNRyxVQUFVLEdBQUc7QUFDdEJkLEVBQUFBLElBQUksRUFBRSxDQURnQjtBQUV0QmUsRUFBQUEsS0FBSyxFQUFFLENBRmU7QUFHdEJDLEVBQUFBLEtBQUssRUFBRTtBQUhlLENBQW5COztBQU1BLElBQU1DLFlBQVksR0FBRztBQUN4QkMsRUFBQUEsTUFBTSxFQUFFLENBRGdCO0FBRXhCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGZ0I7QUFHeEJqQyxFQUFBQSxNQUFNLEVBQUU7QUFIZ0IsQ0FBckI7O0FBTUEsSUFBTWtDLGdCQUFnQixHQUFHO0FBQzVCQyxFQUFBQSxRQUFRLEVBQUUsQ0FEa0I7QUFFNUI5QyxFQUFBQSxPQUFPLEVBQUUsQ0FGbUI7QUFHNUIrQyxFQUFBQSxJQUFJLEVBQUUsQ0FIc0I7QUFJNUJDLEVBQUFBLElBQUksRUFBRSxDQUpzQjtBQUs1QkMsRUFBQUEsWUFBWSxFQUFFLENBTGM7QUFNNUJDLEVBQUFBLFlBQVksRUFBRSxDQU5jO0FBTzVCQyxFQUFBQSxZQUFZLEVBQUUsQ0FQYztBQVE1QkMsRUFBQUEsWUFBWSxFQUFFO0FBUmMsQ0FBekI7O0FBV0EsSUFBTUMsNEJBQTRCLEdBQUc7QUFDeENqRCxFQUFBQSxPQUFPLEVBQUUsQ0FEK0I7QUFFeEM2QixFQUFBQSxXQUFXLEVBQUUsQ0FGMkI7QUFHeENDLEVBQUFBLFFBQVEsRUFBRSxDQUg4QjtBQUl4Q0MsRUFBQUEsU0FBUyxFQUFFLENBSjZCO0FBS3hDQyxFQUFBQSxPQUFPLEVBQUU7QUFMK0IsQ0FBckM7O0FBUUEsSUFBTWtCLGNBQWMsR0FBRztBQUMxQlgsRUFBQUEsTUFBTSxFQUFFLENBRGtCO0FBRTFCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGa0I7QUFHMUJqQyxFQUFBQSxNQUFNLEVBQUUsQ0FIa0I7QUFJMUI0QyxFQUFBQSxRQUFRLEVBQUU7QUFKZ0IsQ0FBdkI7O0FBT0EsSUFBTUMsb0JBQW9CLEdBQUc7QUFDaEM5QyxFQUFBQSxTQUFTLEVBQUUsQ0FEcUI7QUFFaENDLEVBQUFBLE1BQU0sRUFBRSxDQUZ3QjtBQUdoQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHVCLENBQTdCOztBQU1BLElBQU02QyxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRSxDQURlO0FBRXhCQyxFQUFBQSxFQUFFLEVBQUU7QUFGb0IsQ0FBckI7O0FBS0EsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCdEQsRUFBQUEsT0FBTyxFQUFFLENBRGM7QUFFdkJDLEVBQUFBLFFBQVEsRUFBRSxDQUZhO0FBR3ZCQyxFQUFBQSxLQUFLLEVBQUU7QUFIZ0IsQ0FBcEI7O0FBTUEsSUFBTXFELFdBQVcsR0FBRztBQUN2QkMsRUFBQUEsUUFBUSxFQUFFLENBRGE7QUFFdkJDLEVBQUFBLE9BQU8sRUFBRSxDQUZjO0FBR3ZCQyxFQUFBQSxFQUFFLEVBQUU7QUFIbUIsQ0FBcEI7OztJQU9jQyxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FnWEosa0I7Ozs7Ozs7Ozs7Ozs7O0FBMVdULHFCQUFLQyxNQUFMLEdBQWMsS0FBS0MsT0FBTCxDQUFhQyxTQUFiLENBQXVCQywyQkFBdkIsQ0FBZDtBQUNBLHFCQUFLQyxPQUFMLEdBQWUsS0FBS0gsT0FBTCxDQUFhQyxTQUFiLENBQXVCRyw0QkFBdkIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUlBQyxNLEVBQ0FDLFU7Ozs7Ozs7dUJBRW1DLEtBQUtILE9BQUwsQ0FBYUksUUFBYixDQUFzQkMsS0FBdEIsQ0FBNEI7QUFDM0RDLGtCQUFBQSxFQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRUwsTUFBTSxDQUFDTTtBQUFiO0FBRHVELGlCQUE1QixFQUVoQyxTQUZnQyxFQUVyQkMsU0FGcUIsRUFFVkEsU0FGVSxFQUVDQSxTQUZELEVBRVlOLFVBRlosQzs7O0FBQTdCQyxnQkFBQUEsUTs7c0JBR0ZBLFFBQVEsSUFBSUEsUUFBUSxDQUFDTSxNQUFULEdBQWtCLEM7Ozs7O2tEQUN2QjtBQUNISixrQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNNLE9BRFI7QUFFSEcsa0JBQUFBLFlBQVksRUFBRVAsUUFBUSxDQUFDLENBQUQsQ0FBUixDQUFZUTtBQUZ2QixpQjs7O2tEQUtKO0FBQ0hOLGtCQUFBQSxFQUFFLEVBQUUsSUFERDtBQUVISyxrQkFBQUEsWUFBWSxFQUFFO0FBRlgsaUI7Ozs7Ozs7Ozs7Ozs7OztRQU9YOzs7Ozs7O3FEQUdJVCxNLEVBQ0FDLFU7Ozs7Ozs7a0RBRU8sS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUF1QyxrQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDQSw0QkFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksUUFBWixFQUFzQmIsTUFBdEI7QUFEMEMsOERBRW5DLE1BQUksQ0FBQ2MsZ0JBQUwsQ0FBc0JkLE1BQXRCLEVBQThCWSxJQUE5QixDQUZtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0pYLFVBSEksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQVFQRCxNLEVBQ0FDLFU7Ozs7Ozs7a0RBRU8sS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixlQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQW9DLGtCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLDRCQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxRQUFaLEVBQXNCYixNQUF0QjtBQUR1Qyw4REFFaEMsTUFBSSxDQUFDZSxhQUFMLENBQW1CZixNQUFuQixFQUEyQlksSUFBM0IsQ0FGZ0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFPUEQsTSxFQUNBQyxVOzs7Ozs7O2tEQUVPLEtBQUtOLE9BQUwsQ0FBYWdCLEtBQWIsQ0FBbUIsb0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBeUMsa0JBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUM1Q0EsNEJBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFFBQVosRUFBc0JiLE1BQXRCO0FBRDRDLDhEQUVyQyxNQUFJLENBQUNnQixrQkFBTCxDQUF3QmhCLE1BQXhCLEVBQWdDWSxJQUFoQyxDQUZxQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBekM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0pYLFVBSEksQzs7Ozs7Ozs7Ozs7Ozs7O1FBTVg7Ozs7Ozs7cURBRTBCRCxNOzs7Ozs7OztBQUN0QixxQkFBS04sTUFBTCxDQUFZdUIsR0FBWixDQUFnQixxQkFBaEIsRUFBdUNqQixNQUF2Qzs7dUJBS1UsS0FBS2tCLFdBQUwsQ0FBaUIsMEJBQWpCLEVBQTZDO0FBQ25EQyxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxXQUFOLENBQWVtQixHQUQrQjtBQUVuREMsa0JBQUFBLGlCQUFpQixFQUFFcEIsTUFBTSxDQUFDb0IsaUJBRnlCO0FBR25EQyxrQkFBQUEsaUJBQWlCLEVBQUVyQixNQUFNLENBQUNxQixpQkFIeUI7QUFJbkRDLGtCQUFBQSxVQUFVLEVBQUV0QixNQUFNLENBQUNzQixVQUpnQztBQUtuREMsa0JBQUFBLFdBQVcsRUFBRXZCLE1BQU0sV0FBTixDQUFldUIsV0FMdUI7QUFNbkRDLGtCQUFBQSxPQUFPLEVBQUV4QixNQUFNLENBQUN3QixPQU5tQztBQU9uREMsa0JBQUFBLFdBQVcsRUFBRXpCLE1BQU0sQ0FBQ3lCO0FBUCtCLGlCQUE3QyxDOzs7QUFKSkMsZ0JBQUFBLE87a0RBYUM7QUFDSEEsa0JBQUFBLE9BQU8sRUFBRTtBQUNMQyxvQkFBQUEsU0FBUyxFQUFFRCxPQUFPLENBQUNDLFNBRGQ7QUFFTEMsb0JBQUFBLGlCQUFpQixFQUFFRixPQUFPLENBQUNFLGlCQUZ0QjtBQUdMQyxvQkFBQUEsTUFBTSwyQkFBRTdCLE1BQU0sQ0FBQ29CLGlCQUFULDBEQUFFLHNCQUEwQlM7QUFIN0IsbUJBRE47QUFNSHZCLGtCQUFBQSxPQUFPLEVBQUVvQixPQUFPLENBQUNwQjtBQU5kLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBV1lOLE07Ozs7Ozs7O0FBQ25CLHFCQUFLTixNQUFMLENBQVl1QixHQUFaLENBQWdCLGtCQUFoQixFQUFvQ2pCLE1BQXBDOzt1QkFDc0IsS0FBS2tCLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDO0FBQzVEWixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRDRDO0FBRTVEYSxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FGZ0Q7QUFHNURXLGtCQUFBQSxZQUFZLEVBQUU5QixNQUFNLENBQUM4QixZQUh1QztBQUk1REMsa0JBQUFBLE1BQU0sRUFBRS9CLE1BQU0sQ0FBQytCLE1BSjZDO0FBSzVEQyxrQkFBQUEsS0FBSyxFQUFFaEMsTUFBTSxDQUFDZ0MsS0FMOEM7QUFNNURSLGtCQUFBQSxPQUFPLEVBQUV4QixNQUFNLENBQUN3QjtBQU40QyxpQkFBMUMsQzs7O0FBQWhCRSxnQkFBQUEsTztBQVFOQSxnQkFBQUEsT0FBTyxDQUFDRyxNQUFSLHFCQUFpQjdCLE1BQU0sQ0FBQytCLE1BQXhCLG1EQUFpQixlQUFlRixNQUFoQzttREFDTztBQUNIdkIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQURiO0FBRUhhLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUZUO0FBR0hXLGtCQUFBQSxZQUFZLEVBQUU5QixNQUFNLENBQUM4QixZQUhsQjtBQUlISixrQkFBQUEsT0FBTyxFQUFQQTtBQUpHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBU1AxQixNOzs7Ozs7O3VCQUtVLEtBQUtrQixXQUFMLENBQWlCLDBDQUFqQixFQUE2RDtBQUNuRUMsa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sV0FBTixDQUFlbUIsR0FEK0M7QUFFbkVDLGtCQUFBQSxpQkFBaUIsRUFBRXBCLE1BQU0sQ0FBQ29CLGlCQUZ5QztBQUduRUMsa0JBQUFBLGlCQUFpQixFQUFFckIsTUFBTSxDQUFDcUIsaUJBSHlDO0FBSW5FQyxrQkFBQUEsVUFBVSxFQUFFdEIsTUFBTSxDQUFDc0IsVUFKZ0Q7QUFLbkVDLGtCQUFBQSxXQUFXLEVBQUV2QixNQUFNLFdBQU4sQ0FBZXVCLFdBTHVDO0FBTW5FVSxrQkFBQUEsWUFBWSxFQUFFakMsTUFBTSxDQUFDd0IsT0FBUCxVQU5xRDtBQU9uRUMsa0JBQUFBLFdBQVcsRUFBRXpCLE1BQU0sQ0FBQ3lCO0FBUCtDLGlCQUE3RCxDOzs7QUFISlMsZ0JBQUFBLE07bURBWUM7QUFDSDVCLGtCQUFBQSxPQUFPLEVBQUU0QixNQUFNLENBQUNDLFVBRGI7QUFFSEMsa0JBQUFBLFVBQVUsRUFBRUYsTUFBTSxDQUFDRztBQUZoQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQU9vQnJDLE07Ozs7Ozs7dUJBQ0YsS0FBS2tCLFdBQUwsQ0FBaUIsdUNBQWpCLEVBQTBEO0FBQy9FWixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRCtEO0FBRS9FYSxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FGbUU7QUFHL0VXLGtCQUFBQSxZQUFZLEVBQUU5QixNQUFNLENBQUM4QixZQUgwRDtBQUkvRUMsa0JBQUFBLE1BQU0sRUFBRS9CLE1BQU0sQ0FBQytCLE1BSmdFO0FBSy9FQyxrQkFBQUEsS0FBSyxFQUFFaEMsTUFBTSxDQUFDZ0M7QUFMaUUsaUJBQTFELEM7OztBQUFuQkksZ0JBQUFBLFU7bURBT0M7QUFDSGpCLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQURUO0FBRUhXLGtCQUFBQSxZQUFZLEVBQUU5QixNQUFNLENBQUM4QixZQUZsQjtBQUdITSxrQkFBQUEsVUFBVSxFQUFWQTtBQUhHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUWVwQyxNOzs7OzttREFDZixLQUFLa0IsV0FBTCxDQUFpQixvQ0FBakIsRUFBdURsQixNQUF2RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS1BBLE07Ozs7Ozs7dUJBRXNCLEtBQUtzQyxtQkFBTCxDQUF5QnRDLE1BQU0sQ0FBQ3VDLGtCQUFoQyxDOzs7QUFBaEJiLGdCQUFBQSxPO21EQUNDO0FBQ0hwQixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSG9CLGtCQUFBQSxPQUFPLEVBQVBBO0FBRkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFRUDFCLE07Ozs7Ozs7dUJBRXNCLEtBQUtzQyxtQkFBTCxDQUF5QnRDLE1BQU0sQ0FBQ3VDLGtCQUFoQyxDOzs7QUFBaEJiLGdCQUFBQSxPO21EQUNDO0FBQ0hwQixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSGEsa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sQ0FBQ21CLEdBRlQ7QUFHSFcsa0JBQUFBLFlBQVksRUFBRTlCLE1BQU0sQ0FBQzhCLFlBSGxCO0FBSUhKLGtCQUFBQSxPQUFPLEVBQVBBO0FBSkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTUDFCLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLHNCQUFqQixFQUF5Q2xCLE1BQXpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDbEIsTUFBMUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUlQQSxNOzs7OzttREFFTyxLQUFLa0IsV0FBTCxDQUFpQixvQkFBakIsRUFBdUNsQixNQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSVBBLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLHVCQUFqQixFQUEwQ2xCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDbEIsTUFBdkMsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7c0RBRXNCQSxNOzs7OzttREFDWCxLQUFLa0IsV0FBTCxDQUFpQixzQkFBakIsRUFBeUNsQixNQUF6QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS1BBLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLDZCQUFqQixFQUFnRGxCLE1BQWhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsOEJBQWpCLEVBQWlEbEIsTUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7c0RBRWtCQSxNLEVBQTRCQyxVOzs7Ozs7Z0NBQy9CRCxNQUFNLENBQUMyQixTOzs7Ozs7Ozt1QkFDUCxLQUFLYSxVQUFMLENBQWdCO0FBQ25CQyxrQkFBQUEsU0FBUyxFQUFFekMsTUFBTSxDQUFDNEI7QUFEQyxpQkFBaEIsQzs7O2dEQUVIYyxJOzs7QUFIRnRDLGdCQUFBQSxFO0FBSUF1QyxnQkFBQUEsUSxHQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWXpDLEVBQVosRUFBZ0IsS0FBaEIsRUFBdUIwQyxRQUF2QixDQUFnQyxRQUFoQyxDOzt1QkFDWCxLQUFLaEQsT0FBTCxDQUFhaUQsWUFBYixDQUEwQixDQUM1QjtBQUNJM0Msa0JBQUFBLEVBQUUsRUFBRXVDLFFBRFI7QUFFSUssa0JBQUFBLElBQUksRUFBRWhELE1BQU0sQ0FBQzRCO0FBRmpCLGlCQUQ0QixDQUExQixFQUtIM0IsVUFMRyxDOzs7QUFNTixxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQiw2QkFBaEI7bURBQ09iLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUHNCLE8sRUFDQXVCLFksRUFDQWhELFU7Ozs7Ozs7dUJBR3dCLEtBQUtpRCxXQUFMLENBQWlCeEIsT0FBakIsRUFBMEJ6QixVQUExQixDOzs7QUFBbEIwQixnQkFBQUEsUztBQUVGd0IsZ0JBQUFBLE8sR0FBVUMsaUM7QUFDVkMsZ0JBQUFBLFEsR0FBVyxFOztxQkFDWDNCLE9BQU8sQ0FBQ0csTTs7Ozs7QUFDRkEsZ0JBQUFBLE0sR0FBU0gsT0FBTyxDQUFDRyxNLEVBQ3ZCO0FBQ0E7O0FBQ0FzQixnQkFBQUEsT0FBTyxHQUFHdEIsTUFBTSxHQUFHLElBQVQsR0FBZ0J5QixJQUFJLENBQUNDLEdBQUwsRUFBaEIsR0FBNkJILGlDQUF2Qzs7c0JBRUlELE9BQU8sSUFBSSxDOzs7OztzQkFDTEssMEJBQWVDLHFCQUFmLENBQXFDLHlCQUFyQyxDOzs7QUFFVjtBQUNBSixnQkFBQUEsUUFBUSxDQUFDSyxJQUFULENBQ0ksS0FBSzVELE9BQUwsQ0FBYTZELE1BQWIsQ0FBb0JDLE9BQXBCLENBQTRCO0FBQ3BCQyxrQkFBQUEsWUFBWSxFQUFFO0FBQUV4RCxvQkFBQUEsRUFBRSxFQUFFLENBQUM7QUFBUCxtQkFETTtBQUVwQnlELGtCQUFBQSxNQUFNLEVBQUU7QUFBRUMsb0JBQUFBLFlBQVksRUFBRTtBQUFFQyxzQkFBQUEsR0FBRyxFQUFFO0FBQUVDLHdCQUFBQSxLQUFLLEVBQUU7QUFBRUMsMEJBQUFBLFNBQVMsRUFBRztBQUFFQyw0QkFBQUEsRUFBRSxFQUFFdEM7QUFBTjtBQUFkO0FBQVQ7QUFBUDtBQUFoQjtBQUZZLGlCQUE1QixFQUdPLElBSFAsRUFHYXNCLE9BSGIsRUFHc0JsRCxVQUh0QixDQURKOzs7QUFPSjtBQUNBb0QsZ0JBQUFBLFFBQVEsQ0FBQ0ssSUFBVCxDQUNJLEtBQUs1RCxPQUFMLENBQWFzRSxZQUFiLENBQTBCUixPQUExQixDQUFrQztBQUMxQlMsa0JBQUFBLE1BQU0sRUFBRTtBQUFFaEUsb0JBQUFBLEVBQUUsRUFBRXNCO0FBQU4sbUJBRGtCO0FBRTFCMkMsa0JBQUFBLE1BQU0sRUFBRTtBQUFFakUsb0JBQUFBLEVBQUUsRUFBRXhCLDRCQUE0QixDQUFDbEI7QUFBbkM7QUFGa0IsaUJBQWxDLEVBR09zRixZQUhQLEVBR3FCRSxPQUhyQixFQUc4QmxELFVBSDlCLENBREo7O3VCQU1zQ3NFLE9BQU8sQ0FBQ0MsSUFBUixDQUFhbkIsUUFBYixDOzs7QUFBbENvQixnQkFBQUEsVzs7c0JBRUEsQ0FBQUEsV0FBVyxTQUFYLElBQUFBLFdBQVcsV0FBWCxZQUFBQSxXQUFXLENBQUVKLE1BQWIsTUFBd0IxQyxTOzs7OztzQkFDbEI2QiwwQkFBZWtCLGNBQWYsRTs7O0FBRUpDLGdCQUFBQSxjLEdBQWlCRixXQUFXLENBQUNsQixHQUFaLElBQW1CLEM7QUFDMUMscUJBQUs3RCxNQUFMLENBQVl1QixHQUFaLENBQWdCLHNDQUFoQixFQUF3RDtBQUNwRGIsa0JBQUFBLEVBQUUsRUFBRXFFLFdBQVcsQ0FBQ3JFLEVBRG9DO0FBRXBEd0Usa0JBQUFBLFFBQVEsRUFBRUgsV0FBVyxDQUFDRyxRQUY4QjtBQUdwRHJCLGtCQUFBQSxHQUFHLFlBQUssSUFBSUQsSUFBSixDQUFTcUIsY0FBYyxHQUFHLElBQTFCLEVBQWdDRSxXQUFoQyxFQUFMLGVBQXVERixjQUF2RDtBQUhpRCxpQkFBeEQ7bURBS09GLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLUHpFLE0sRUFDQUMsVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0Isc0JBQWhCLEVBQXdDakIsTUFBeEM7O3VCQUMwQixLQUFLOEUsY0FBTCxDQUN0QjlFLE1BQU0sQ0FBQzBCLE9BRGUsRUFFdEJxRCxrQkFGc0IsRUFHdEI5RSxVQUhzQixDOzs7QUFBcEJ3RSxnQkFBQUEsVzs7dUJBS0FPLGdCQUFnQixDQUFDUCxXQUFELEM7OztBQUN0QixxQkFBSy9FLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsMkJBQWhCO21EQUNPO0FBQ0hYLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEYjtBQUVIMkUsa0JBQUFBLGVBQWUsRUFBRSxLQUZkO0FBR0hSLGtCQUFBQSxXQUFXLEVBQVhBO0FBSEcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTUHpFLE0sRUFDQUMsVTs7Ozs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixtQkFBaEIsRUFBcUNqQixNQUFyQzs7dUJBQzBCLEtBQUs4RSxjQUFMLENBQ3RCOUUsTUFBTSxDQUFDMEIsT0FEZSxFQUV0QnFELGtCQUZzQixFQUd0QjlFLFVBSHNCLEM7OztBQUFwQndFLGdCQUFBQSxXOzt1QkFLQU8sZ0JBQWdCLENBQUNQLFdBQUQsQzs7O0FBQ2hCUyxnQkFBQUEsYyxHQUFpQlQsV0FBVyxDQUFDVSxZOztzQkFDL0IsQ0FBQ0QsY0FBRCxJQUFtQkEsY0FBYyxDQUFDMUUsTUFBZixLQUEwQixDOzs7OzttREFDdEM7QUFBRTRFLGtCQUFBQSxNQUFNLEVBQUUsSUFBVjtBQUFnQlgsa0JBQUFBLFdBQVcsRUFBWEE7QUFBaEIsaUI7OztBQUVMWSxnQkFBQUEsZ0IsR0FBK0JILGNBQWMsQ0FBQ0ksTUFBZixDQUFzQixVQUFDQyxDQUFELEVBQWlCO0FBQ3hFLHlCQUFPQSxDQUFDLENBQUNDLFFBQUYsS0FBZXRJLFlBQVksQ0FBQ0csTUFBbkM7QUFDSCxpQkFGb0MsQztBQUdyQyxxQkFBS3FDLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsMENBQWhCOzt1QkFDc0JzRCxPQUFPLENBQUNQLEdBQVIsQ0FBWXFCLGdCQUFnQixDQUFDSSxHQUFqQixDQUFxQixVQUFDRixDQUFELEVBQWlCO0FBQ3BFLHlCQUFPLE1BQUksQ0FBQ0csdUJBQUwsQ0FBNkI7QUFDaEN2RSxvQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FEb0I7QUFFaEN3RSxvQkFBQUEsVUFBVSxFQUFFSixDQUFDLENBQUN2QyxJQUFGLElBQVU7QUFGVSxtQkFBN0IsQ0FBUDtBQUlILGlCQUxpQyxDQUFaLEM7OztBQUFoQjRDLGdCQUFBQSxPO0FBTUFDLGdCQUFBQSxZLEdBQWVELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQUNQLENBQUQsRUFBMkM7QUFDekUseUJBQU9BLENBQUMsWUFBRCxDQUFXUSxXQUFYLE9BQTZCL0YsTUFBTSxDQUFDOEIsWUFBUCxDQUFvQmlFLFdBQXBCLEVBQXBDO0FBQ0gsaUJBRm9CLEM7QUFHckIscUJBQUtyRyxNQUFMLENBQVl1QixHQUFaLENBQWdCLHdCQUFoQjttREFDTztBQUNIbUUsa0JBQUFBLE1BQU0sRUFBRVMsWUFBWSxHQUFHQSxZQUFZLENBQUNULE1BQWhCLEdBQXlCLElBRDFDO0FBRUhYLGtCQUFBQSxXQUFXLEVBQVhBO0FBRkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFPUHpFLE0sRUFDQWdHLFUsRUFDQS9GLFU7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl1QixHQUFaLENBQWdCLHdCQUFoQixFQUEwQ2pCLE1BQTFDOzt1QkFFc0IsS0FBS2lHLFVBQUwsQ0FBZ0JqRyxNQUFNLENBQUNNLE9BQXZCLEVBQWdDLElBQWhDLEVBQXNDMEYsVUFBdEMsRUFBa0QvRixVQUFsRCxDOzs7QUFBaEJpRyxnQkFBQUEsTzttREFFQyxLQUFLaEYsV0FBTCxDQUFpQix5QkFBakIsRUFBNEM7QUFDL0NaLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEK0I7QUFFL0M0RixrQkFBQUEsT0FBTyxFQUFQQSxPQUYrQztBQUcvQy9FLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUhtQztBQUkvQ1csa0JBQUFBLFlBQVksRUFBRTlCLE1BQU0sQ0FBQzhCLFlBSjBCO0FBSy9DcUUsa0JBQUFBLGFBQWEsRUFBRW5HLE1BQU0sQ0FBQzBCLE9BQVAsQ0FBZUU7QUFMaUIsaUJBQTVDLEM7Ozs7Ozs7Ozs7Ozs7OztRQVNYOzs7Ozs7O3NEQUtJNUIsTSxFQUNBQyxVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixhQUFoQixFQUErQmpCLE1BQS9COzt1QkFFc0IsS0FBS2lHLFVBQUwsQ0FBZ0JqRyxNQUFNLENBQUNNLE9BQXZCLEVBQWdDLElBQWhDLEVBQXNDTixNQUFNLENBQUNnRyxVQUE3QyxFQUF5RC9GLFVBQXpELEM7OztBQUFoQmlHLGdCQUFBQSxPOztBQUVOLG9CQUFJbEcsTUFBTSxDQUFDb0csY0FBWCxFQUEyQjtBQUN2QkYsa0JBQUFBLE9BQU8sQ0FBQ3hGLE9BQVIsR0FBa0IsS0FBSzJGLFVBQXZCO0FBQ0g7O21EQUVNLEtBQUtuRixXQUFMLENBQWlCLG1CQUFqQixFQUFzQztBQUN6Q1osa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUR5QjtBQUV6QzRGLGtCQUFBQSxPQUFPLEVBQVBBLE9BRnlDO0FBR3pDL0Usa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sQ0FBQ21CLEdBSDZCO0FBSXpDVyxrQkFBQUEsWUFBWSxFQUFFOUIsTUFBTSxDQUFDOEIsWUFKb0I7QUFLekNFLGtCQUFBQSxLQUFLLEVBQUVoQyxNQUFNLENBQUNnQyxLQUwyQjtBQU16Q1Isa0JBQUFBLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTnlCLGlCQUF0QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBV1B4QixNLEVBQ0FDLFU7Ozs7OztBQUVBLHFCQUFLUCxNQUFMLENBQVl1QixHQUFaLENBQWdCLGdCQUFoQixFQUFrQ2pCLE1BQWxDOzt1QkFFc0IsS0FBS3NHLG1CQUFMLENBQXlCdEcsTUFBekIsQzs7O0FBQWhCMEIsZ0JBQUFBLE87bURBRUMsS0FBSzZFLGtCQUFMLENBQXdCO0FBQzNCakcsa0JBQUFBLE9BQU8sRUFBRW9CLE9BQU8sQ0FBQ3BCLE9BRFU7QUFFM0JvQixrQkFBQUEsT0FBTyxFQUFFQSxPQUFPLENBQUNBLE9BRlU7QUFHM0IwRSxrQkFBQUEsY0FBYyxFQUFFcEcsTUFBTSxDQUFDb0csY0FISTtBQUkzQkksa0JBQUFBLFVBQVUsRUFBRXhHLE1BQU0sQ0FBQ3dHO0FBSlEsaUJBQXhCLEVBS0p2RyxVQUxJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTUEQsTSxFQUNBQyxVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixvQkFBaEIsRUFBc0NqQixNQUF0QztBQUVJa0csZ0JBQUFBLE8sR0FBb0I7QUFDcEJ4RixrQkFBQUEsT0FBTyxFQUFFLEtBQUsyRixVQURNO0FBRXBCakcsa0JBQUFBLEVBQUUsRUFBRUosTUFBTSxDQUFDTSxPQUZTO0FBR3BCbUcsa0JBQUFBLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdyRCxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QjtBQUhTLGlCOztvQkFNbkJ2RCxNQUFNLENBQUN3RyxVOzs7Ozs7dUJBQ1EsS0FBS1AsVUFBTCxDQUFnQmpHLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsS0FBaEMsRUFBdUNOLE1BQU0sQ0FBQ2dHLFVBQTlDLEVBQTBEL0YsVUFBMUQsQzs7O0FBQWhCaUcsZ0JBQUFBLE87OztBQUdKLG9CQUFJbEcsTUFBTSxDQUFDb0csY0FBWCxFQUEyQjtBQUN2QkYsa0JBQUFBLE9BQU8sQ0FBQ3hGLE9BQVIsR0FBa0IsS0FBSzJGLFVBQXZCO0FBQ0g7O21EQUVNLEtBQUtuRixXQUFMLENBQWlCLHVCQUFqQixFQUEwQztBQUM3Q1osa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQ2QjtBQUU3QzRGLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjZDO0FBRzdDQyxrQkFBQUEsYUFBYSxFQUFFbkcsTUFBTSxDQUFDMEIsT0FBUCxDQUFlRTtBQUhlLGlCQUExQyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFPWDs7Ozs7OztzREFFcUI1QixNOzs7OzttREFDVixLQUFLa0IsV0FBTCxDQUFpQiwyQkFBakIsRUFBOENsQixNQUE5QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFHWDs7Ozs7OztzREFFMkJBLE07Ozs7O21EQUNoQixLQUFLa0IsV0FBTCxDQUFpQixrQkFBakIsRUFBcUM7QUFDeENDLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLFdBQU4sQ0FBZW1CLEdBRG9CO0FBRXhDQyxrQkFBQUEsaUJBQWlCLEVBQUVwQixNQUFNLENBQUNvQixpQkFGYztBQUd4Q0Msa0JBQUFBLGlCQUFpQixFQUFFckIsTUFBTSxDQUFDcUIsaUJBSGM7QUFJeENDLGtCQUFBQSxVQUFVLEVBQUV0QixNQUFNLENBQUNzQixVQUpxQjtBQUt4Q0Msa0JBQUFBLFdBQVcsRUFBRXZCLE1BQU0sV0FBTixDQUFldUIsV0FMWTtBQU14Q0Msa0JBQUFBLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTndCLGlCQUFyQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBV2F4QixNOzs7Ozs7dUJBQ1AsS0FBS2tCLFdBQUwsQ0FBaUIsZUFBakIsRUFBa0M7QUFDM0NaLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEMkI7QUFFM0NhLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUYrQjtBQUczQ1csa0JBQUFBLFlBQVksRUFBRTlCLE1BQU0sQ0FBQzhCLFlBSHNCO0FBSTNDQyxrQkFBQUEsTUFBTSxFQUFFL0IsTUFBTSxDQUFDK0IsTUFKNEI7QUFLM0NDLGtCQUFBQSxLQUFLLEVBQUVoQyxNQUFNLENBQUNnQyxLQUw2QjtBQU0zQ1Isa0JBQUFBLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTjJCLGlCQUFsQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBVU5MLEcsRUFBcUJ5RixVLEVBQXVCO0FBQUE7O0FBQ25ELFVBQU16RCxPQUFPLEdBQUcsMkJBQUt6RCxNQUFMLENBQVltSCxJQUFaLHdFQUFrQkMsa0JBQWxCLEtBQXdDLENBQXhEOztBQUNBLFVBQUkzRixHQUFHLENBQUNZLE1BQUosSUFBY1osR0FBRyxDQUFDWSxNQUFKLENBQVdnRixRQUFYLENBQW9CLFFBQXBCLENBQWQsSUFBK0M1RCxPQUFPLEdBQUcsQ0FBN0QsRUFBK0Q7QUFDM0QsWUFBSXBCLE1BQU0sR0FBRzZFLFVBQVUsSUFBSSxFQUEzQjtBQUNBN0UsUUFBQUEsTUFBTSxDQUFDRixNQUFQLEdBQWdCNkUsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ3JELElBQUksQ0FBQ0MsR0FBTCxLQUFhSixPQUFkLElBQXlCLElBQXBDLElBQTRDLENBQTVEO0FBQ0EsZUFBT3BCLE1BQVA7QUFDSCxPQUpELE1BSU87QUFDSCxlQUFPNkUsVUFBUDtBQUNIO0FBQ0o7Ozs7OztzREFHRzVHLE0sRUFDQUMsVTs7Ozs7O0FBRUEscUJBQUtQLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsY0FBaEI7QUFDQWpCLGdCQUFBQSxNQUFNLENBQUNvQixpQkFBUCxHQUEyQixLQUFLNEYsVUFBTCxDQUFnQmhILE1BQU0sV0FBTixDQUFlbUIsR0FBL0IsRUFBb0NuQixNQUFNLENBQUNvQixpQkFBM0MsQ0FBM0I7O3VCQUNzQixLQUFLa0YsbUJBQUwsQ0FBeUJ0RyxNQUF6QixDOzs7QUFBaEIwQixnQkFBQUEsTzttREFDQyxLQUFLdUYsb0JBQUwsQ0FBMEJ2RixPQUExQixFQUFtQ3pCLFVBQW5DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLUEQsTSxFQUNBQyxVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixXQUFoQjtBQUNBakIsZ0JBQUFBLE1BQU0sQ0FBQytCLE1BQVAsR0FBZ0IsS0FBS2lGLFVBQUwsQ0FBZ0JoSCxNQUFNLENBQUNtQixHQUF2QixFQUE0Qm5CLE1BQU0sQ0FBQytCLE1BQW5DLENBQWhCOzt1QkFDc0IsS0FBS21GLGdCQUFMLENBQXNCbEgsTUFBdEIsQzs7O0FBQWhCMEIsZ0JBQUFBLE87bURBQ0MsS0FBS3lGLGlCQUFMLENBQXVCekYsT0FBdkIsRUFBZ0N6QixVQUFoQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSVBLLE8sRUFDQWxDLE0sRUFDQTRILFUsRUFDQS9GLFU7WUFFU21ILGM7Ozs7O0FBQUFBLGdCQUFBQSxjLGtCQUFlQyxHLEVBQVU7QUFDOUIsc0JBQUlBLEdBQUcsQ0FBQ0MsVUFBUixFQUFvQjtBQUNoQiwyQkFBT0QsR0FBRyxDQUFDQyxVQUFYO0FBQ0g7O0FBQ0RDLGtCQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsR0FBZCxFQUFtQkksT0FBbkIsQ0FBMkIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLHdCQUFJLENBQUMsQ0FBQ0EsS0FBRixJQUFXLHlCQUFPQSxLQUFQLE1BQWlCLFFBQWhDLEVBQTBDO0FBQ3RDTixzQkFBQUEsY0FBYyxDQUFDTSxLQUFELENBQWQ7QUFDSDtBQUNKLG1CQUpEO0FBS0gsaUI7O0FBRUtwQyxnQkFBQUEsTSxHQUE0QjtBQUM5QmxGLGtCQUFBQSxFQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRUM7QUFBTjtBQUQwQixpQjs7QUFHbEMsb0JBQUkwRixVQUFVLElBQUlBLFVBQVUsQ0FBQzJCLGFBQTdCLEVBQTRDO0FBQ3hDckMsa0JBQUFBLE1BQU0sQ0FBQ3NDLGFBQVAsR0FBdUI7QUFBRXpELG9CQUFBQSxFQUFFLEVBQUU2QixVQUFVLENBQUMyQjtBQUFqQixtQkFBdkI7QUFDSDs7QUFDRCxvQkFBSXZKLE1BQUosRUFBWTtBQUNSa0gsa0JBQUFBLE1BQU0sQ0FBQ3VDLFFBQVAsR0FBa0I7QUFBRXhILG9CQUFBQSxFQUFFLEVBQUVuQyxZQUFZLENBQUNFO0FBQW5CLG1CQUFsQjtBQUNIOztBQUVELHFCQUFLc0IsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixvQkFBaEIsRUFBc0NxRSxNQUF0Qzs7dUJBQ3NCLEtBQUt4RixPQUFMLENBQWFJLFFBQWIsQ0FBc0IwRCxPQUF0QixDQUNsQjBCLE1BRGtCLEVBRWxCLGlFQUZrQixFQUdsQlUsVUFBVSxJQUFJQSxVQUFVLENBQUM3QyxPQUhQLEVBSWxCbEQsVUFKa0IsQzs7O0FBQWhCaUcsZ0JBQUFBLE87QUFPTmtCLGdCQUFBQSxjQUFjLENBQUNsQixPQUFELENBQWQ7QUFDQSxxQkFBS3hHLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsOEJBQWhCLEVBQWdEaUYsT0FBaEQ7bURBQ09BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUGxHLE0sRUFDQUMsVTs7Ozs7Ozt1QkFFc0IsS0FBS2dHLFVBQUwsQ0FBZ0JqRyxNQUFNLENBQUNNLE9BQXZCLEVBQWdDLElBQWhDLEVBQXNDTixNQUFNLENBQUNnRyxVQUE3QyxFQUF5RC9GLFVBQXpELEM7OztBQUFoQmlHLGdCQUFBQSxPO21EQUVDLEtBQUtoRixXQUFMLENBQWlCLHFCQUFqQixFQUF3QztBQUMzQ1osa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQyQjtBQUUzQzRGLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjJDO0FBRzNDL0Usa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sQ0FBQ21CLEdBSCtCO0FBSTNDVyxrQkFBQUEsWUFBWSxFQUFFOUIsTUFBTSxDQUFDOEIsWUFKc0I7QUFLM0NFLGtCQUFBQSxLQUFLLEVBQUVoQyxNQUFNLENBQUNnQyxLQUw2QjtBQU0zQ1Isa0JBQUFBLE9BQU8sRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTjJCLGlCQUF4QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFoaUJpQ3NHLHFCOzs7QUEyaUJoRHJJLGtCQUFrQixDQUFDc0ksVUFBbkIsR0FBZ0Msb0JBQWhDOztTQUVlL0MsZ0I7Ozs7Ozs7K0JBQWYsbUJBQWdDUCxXQUFoQztBQUFBLFFBS2F1RCxTQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLYUEsWUFBQUEsU0FMYixrQkFLdUJ0RyxPQUx2QixFQUt3Q3VHLElBTHhDLEVBS3NEQyxLQUx0RCxFQUtxRTtBQUM3RCxxQkFBTyxJQUFJMUUseUJBQUosV0FDQTlCLE9BREEsZUFDWXVHLElBRFosa0JBQ3dCQyxLQUR4QixHQUVIRCxJQUZHLEVBR0h6RSwwQkFBZTJFLE1BQWYsQ0FBc0JDLElBSG5CLEVBSUg7QUFDSUYsZ0JBQUFBLEtBQUssRUFBTEEsS0FESjtBQUVJRyxnQkFBQUEsY0FBYyxFQUFFNUQsV0FBVyxDQUFDckU7QUFGaEMsZUFKRyxDQUFQO0FBUUgsYUFkTDs7QUFBQSxnQkFDU3FFLFdBQVcsQ0FBQzZELE9BRHJCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBZ0JVOU0sWUFBQUEsT0FoQlYsR0FnQm9CaUosV0FBVyxDQUFDakosT0FoQmhDOztBQUFBLGlCQWlCUUEsT0FqQlI7QUFBQTtBQUFBO0FBQUE7O0FBa0JjOEksWUFBQUEsTUFsQmQsR0FrQnVCOUksT0FBTyxDQUFDK00sYUFsQi9COztBQUFBLGtCQW1CWWpFLE1BQU0sS0FBS3RGLG9CQUFvQixDQUFDN0MsTUFuQjVDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQW9Ca0I2TCxTQUFTLENBQ1gsc0NBRFcsRUFFWC9MLHNCQUFzQixDQUFDRSxNQUZaLEVBR1haLHlCQUF5QixDQUFDQyxPQUhmLENBcEIzQjs7QUFBQTtBQUFBLGtCQTBCWThJLE1BQU0sS0FBS3RGLG9CQUFvQixDQUFDNUMsT0ExQjVDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQTJCa0I0TCxTQUFTLENBQ1gsdUNBRFcsRUFFWC9MLHNCQUFzQixDQUFDRyxPQUZaLEVBR1hiLHlCQUF5QixDQUFDQyxPQUhmLENBM0IzQjs7QUFBQTtBQW1DVWdOLFlBQUFBLE9BbkNWLEdBbUNvQi9ELFdBQVcsQ0FBQytELE9BbkNoQzs7QUFBQSxpQkFvQ1FBLE9BcENSO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXFDWUEsT0FBTyxDQUFDQyxZQUFSLEtBQXlCeEosWUFBWSxDQUFDQyxPQXJDbEQ7QUFBQTtBQUFBO0FBQUE7O0FBc0NrQndKLFlBQUFBLE1BdENsQixHQXNDMkJGLE9BQU8sQ0FBQ0csY0F0Q25DOztBQUFBLGtCQXVDZ0JELE1BQU0sS0FBS3RKLFdBQVcsQ0FBQ3RELE9BdkN2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkF3Q3NCa00sU0FBUyxDQUNYLDhCQURXLEVBRVhuTSw2QkFBNkIsQ0FBQ0MsT0FGbkIsRUFHWFAseUJBQXlCLENBQUNFLGNBSGYsQ0F4Qy9COztBQUFBO0FBQUEsa0JBOENnQmlOLE1BQU0sS0FBS3RKLFdBQVcsQ0FBQ3JELFFBOUN2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkErQ3NCaU0sU0FBUyxDQUNYLDBDQURXLEVBRVhuTSw2QkFBNkIsQ0FBQ0UsUUFGbkIsRUFHWFIseUJBQXlCLENBQUNFLGNBSGYsQ0EvQy9COztBQUFBO0FBQUEsa0JBcURnQmlOLE1BQU0sS0FBS3RKLFdBQVcsQ0FBQ3BELEtBckR2QztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFzRHNCZ00sU0FBUyxDQUNYLHNCQURXLEVBRVhuTSw2QkFBNkIsQ0FBQ0csS0FGbkIsRUFHWFQseUJBQXlCLENBQUNFLGNBSGYsQ0F0RC9COztBQUFBO0FBQUEsa0JBNERrQnVNLFNBQVMsQ0FDWCx5Q0FEVyxFQUVYLENBQUMsQ0FGVSxFQUdYek0seUJBQXlCLENBQUNFLGNBSGYsQ0E1RDNCOztBQUFBO0FBQUEsa0JBa0VZK00sT0FBTyxDQUFDQyxZQUFSLEtBQXlCeEosWUFBWSxDQUFDRSxFQWxFbEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBbUVpQnFKLE9BQU8sQ0FBQ0ksT0FuRXpCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQW9Fc0JaLFNBQVMsQ0FDWCw4QkFEVyxFQUVYUSxPQUFPLENBQUNLLFNBQVIsSUFBcUIsQ0FGVixFQUdYdE4seUJBQXlCLENBQUNHLFNBSGYsQ0FwRS9COztBQUFBO0FBNkVVQyxZQUFBQSxNQTdFVixHQTZFbUI4SSxXQUFXLENBQUM5SSxNQTdFL0I7O0FBQUEsaUJBOEVRQSxNQTlFUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkErRWFBLE1BQU0sQ0FBQ2lOLE9BL0VwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFnRmtCWixTQUFTLENBQ1hyTSxNQUFNLENBQUNtTixRQUFQLEdBQ00sMENBRE4sR0FFTyxDQUFDbk4sTUFBTSxDQUFDb04sS0FBUixHQUFnQiw2QkFBaEIsR0FBZ0QscUJBSDVDLEVBSVhwTixNQUFNLENBQUNxTixXQUFQLElBQXNCLENBSlgsRUFLWHpOLHlCQUF5QixDQUFDSSxNQUxmLENBaEYzQjs7QUFBQTtBQUFBLGtCQTBGVXFNLFNBQVMsQ0FDWCxxQkFEVyxFQUVYLENBQUMsQ0FGVSxFQUdYek0seUJBQXlCLENBQUNLLE9BSGYsQ0ExRm5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFpR0EsSUFBTW1KLGtCQUFrQixxYkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZVxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUsIHsgREVGQVVMVF9USU1FT1VUIH0gZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcbmltcG9ydCB0cmFjaW5nLCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiBcImNvbXB1dGVWbVwiLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMlxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ2JhbGFuY2UnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyhzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bicsIGFzeW5jKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCBwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCBwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICBleHBpcmU6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLmhlYWRlcj8uZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczogcmVzdWx0LmVuY29kZWQsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXMuY3JlYXRlU2lnbmVkUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRCb2NIYXNoUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSwgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJhbXMubWVzc2FnZUlkIHx8XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgIGNvbnN0IGlkQmFzZTY0ID0gQnVmZmVyLmZyb20oaWQsICdoZXgnKS50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sIHBhcmVudFNwYW4pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlLiBSZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICBsZXQgdGltZW91dCA9IERFRkFVTFRfVElNRU9VVDtcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XG4gICAgICAgIGlmIChtZXNzYWdlLmV4cGlyZSkge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGltZW91dCBhY2NvcmRpbmcgdG8gYGV4cGlyZWAgdmFsdWUgKGluIHNlY29uZHMpXG4gICAgICAgICAgICAvLyBhZGQgZGVmYXVsdCB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgIHRpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIERFRkFVTFRfVElNRU9VVDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRpbWVvdXQgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChcIk1lc3NhZ2UgYWxyZWFkeSBleHBpcmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogeyBlcTogLTEgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBzaGFyZF9oYXNoZXM6IHsgYWxsOiB7IGRlc2NyOiB7IGdlbl91dGltZSA6IHsgZ2U6IGV4cGlyZSB9IH0gfSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sICdpZCcsIHRpbWVvdXQsIHBhcmVudFNwYW4pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdhaXQgZm9yIG1lc3NhZ2UgcHJvY2Vzc2luZyB0cmFuc2FjdGlvbiB3aXRoIGlucmVhc2VkIHRpbWVvdXQgLSB0byBtYWtlIGJsb2NrIHdhaXRpbmcgZW5kIGZpcnN0XG4gICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0RmllbGRzLCB0aW1lb3V0LCBwYXJlbnRTcGFuKSk7XG4gICAgICAgIFxuICAgICAgICBsZXQgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbiA9IGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgIFxuICAgICAgICBpZiAodHJhbnNhY3Rpb24/LmluX21zZyAhPT0gbWVzc2FnZUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsLCB0cmFuc2FjdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSB8fCAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHJlc3VsdE91dHB1dCA/IHJlc3VsdE91dHB1dC5vdXRwdXQgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZUxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZUxvY2FsJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCB3YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSBcIjB4MTAwMDAwMDAwMDAwMDBcIjtcblxuICAgIGFzeW5jIGNhbGNSdW5GZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY0RlcGxveUZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjTXNnUHJvY2Vzc0ZlZXMoe1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlLFxuICAgICAgICAgICAgZW11bGF0ZUJhbGFuY2U6IHBhcmFtcy5lbXVsYXRlQmFsYW5jZSxcbiAgICAgICAgICAgIG5ld0FjY291bnQ6IHBhcmFtcy5uZXdBY2NvdW50XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNNc2dQcm9jZXNzRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXBhcmFtcy5uZXdBY2NvdW50KSB7XG4gICAgICAgICAgICBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCBmYWxzZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlSGVhZGVyKGFiaTogVE9OQ29udHJhY3RBQkksIHVzZXJIZWFkZXI/OiBhbnkpOiBhbnkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gdGhpcy5jb25maWcuZGF0YT8udHJhbnNhY3Rpb25UaW1lb3V0IHx8IDA7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoXCJleHBpcmVcIikgJiYgdGltZW91dCA+IDApe1xuICAgICAgICAgICAgbGV0IGhlYWRlciA9IHVzZXJIZWFkZXIgfHwge307XG4gICAgICAgICAgICBoZWFkZXIuZXhwaXJlID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSArIHRpbWVvdXQpIC8gMTAwMCkgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coXCJEZXBsb3kgc3RhcnRcIik7XG4gICAgICAgIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlciA9IHRoaXMubWFrZUhlYWRlcihwYXJhbXMucGFja2FnZS5hYmksIHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcik7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0RlcGxveU1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcIlJ1biBzdGFydFwiKTtcbiAgICAgICAgcGFyYW1zLmhlYWRlciA9IHRoaXMubWFrZUhlYWRlcihwYXJhbXMuYWJpLCBwYXJhbXMuaGVhZGVyKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgIGFjdGl2ZTogYm9vbCxcbiAgICAgICAgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH1cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0KSB7XG4gICAgICAgICAgICBmaWx0ZXIubGFzdF90cmFuc19sdCA9IHsgZ2U6IHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGZpbHRlci5hY2NfdHlwZSA9IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcImdldEFjY291bnQuIEZpbHRlclwiLCBmaWx0ZXIpO1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3IoXG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAnaWQgY29kZSBkYXRhIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gbGFzdF9wYWlkJyxcbiAgICAgICAgICAgIHdhaXRQYXJhbXMgJiYgd2FpdFBhcmFtcy50aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhblxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coXCJnZXRBY2NvdW50LiBBY2NvdW50IHJlY2lldmVkXCIsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGAke21lc3NhZ2V9ICgke2NvZGV9KSBhdCAke3BoYXNlfWAsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhhc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW4sXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZGVsZXRlZCBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5kZWxldGVkLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGUgPSB0cmFuc2FjdGlvbi5jb21wdXRlO1xuICAgIGlmIChjb21wdXRlKSB7XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9HYXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBnYXMgdG8gZXhlY3V0ZSBWTScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vR2FzLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0cmFuc2FjdGlvbi5hY3Rpb247XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgYWN0aW9uLm5vX2Z1bmRzXG4gICAgICAgICAgICAgICAgICAgID8gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIDogKCFhY3Rpb24udmFsaWQgPyAnT3V0Ym91bmQgbWVzc2FnZSBpcyBpbnZhbGlkJyA6ICdBY3Rpb24gcGhhc2UgZmFpbGVkJyksXG4gICAgICAgICAgICAgICAgYWN0aW9uLnJlc3VsdF9jb2RlIHx8IDAsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5hY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93blxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICB9XG4gICBgO1xuIl19