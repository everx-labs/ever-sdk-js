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

var _TONQueriesModule = _interopRequireDefault(require("./TONQueriesModule"));

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
        var message;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context9.next = 3;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
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
                    messageBodyBase64: message.messageBodyBase64
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
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 3:
                message = _context10.sent;
                return _context10.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 5:
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
        var transaction, retry, messageId, transactionNow;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                transaction = null;
                retry = true;

              case 2:
                if (!retry) {
                  _context25.next = 23;
                  break;
                }

                retry = false;
                _context25.next = 6;
                return this.sendMessage(message, parentSpan);

              case 6:
                messageId = _context25.sent;
                _context25.prev = 7;
                _context25.next = 10;
                return this.queries.transactions.waitFor({
                  in_msg: {
                    eq: messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, 40000, parentSpan);

              case 10:
                transaction = _context25.sent;
                _context25.next = 21;
                break;

              case 13:
                _context25.prev = 13;
                _context25.t0 = _context25["catch"](7);

                if (!(_context25.t0.code && _context25.t0.code === _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT)) {
                  _context25.next = 20;
                  break;
                }

                this.config.log('processMessage. Timeout, retrying...');
                retry = true;
                _context25.next = 21;
                break;

              case 20:
                throw _context25.t0;

              case 21:
                _context25.next = 2;
                break;

              case 23:
                if (transaction) {
                  _context25.next = 25;
                  break;
                }

                throw _TONClient.TONClientError.internalError('transaction is null');

              case 25:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context25.abrupt("return", transaction);

              case 28:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this, [[7, 13]]);
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
                _context35.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context35.sent;
                return _context35.abrupt("return", this.processDeployMessage(message, parentSpan));

              case 5:
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
                _context36.next = 3;
                return this.createRunMessage(params);

              case 3:
                message = _context36.sent;
                return _context36.abrupt("return", this.processRunMessage(message, parentSpan));

              case 5:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImxvZyIsInJlcXVlc3RDb3JlIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsInJlc3VsdCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJjcmVhdGVTaWduZWRQYXJhbXMiLCJnZXRCb2NIYXNoIiwiYm9jQmFzZTY0IiwiaGFzaCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsInRyYW5zYWN0aW9uIiwicmV0cnkiLCJzZW5kTWVzc2FnZSIsInRyYW5zYWN0aW9ucyIsIndhaXRGb3IiLCJpbl9tc2ciLCJzdGF0dXMiLCJjb2RlIiwiVE9OQ2xpZW50RXJyb3IiLCJXQUlUX0ZPUl9USU1FT1VUIiwiaW50ZXJuYWxFcnJvciIsInRyYW5zYWN0aW9uTm93Iiwibm93IiwiYmxvY2tfaWQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJhbHJlYWR5RGVwbG95ZWQiLCJvdXRwdXRNZXNzYWdlcyIsIm91dF9tZXNzYWdlcyIsIm91dHB1dCIsImV4dGVybmFsTWVzc2FnZXMiLCJmaWx0ZXIiLCJ4IiwibXNnX3R5cGUiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsIndhaXRQYXJhbXMiLCJnZXRBY2NvdW50IiwiYWNjb3VudCIsIm1lc3NhZ2VCYXNlNjQiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsIk1hdGgiLCJmbG9vciIsInByb2Nlc3NEZXBsb3lNZXNzYWdlIiwiY3JlYXRlUnVuTWVzc2FnZSIsInByb2Nlc3NSdW5NZXNzYWdlIiwicmVtb3ZlVHlwZU5hbWUiLCJvYmoiLCJfX3R5cGVuYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsInZhbHVlIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJnZSIsImFjY190eXBlIiwidGltZW91dCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsInNvdXJjZSIsIk5PREUiLCJ0cmFuc2FjdGlvbl9pZCIsImFib3J0ZWQiLCJzdGF0dXNfY2hhbmdlIiwiY29tcHV0ZSIsImNvbXB1dGVfdHlwZSIsInJlYXNvbiIsInNraXBwZWRfcmVhc29uIiwic3VjY2VzcyIsImV4aXRfY29kZSIsIm5vX2Z1bmRzIiwidmFsaWQiLCJyZXN1bHRfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFoRUE7Ozs7Ozs7Ozs7Ozs7OztBQWtFTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEsU0FBUyxFQUFFLFdBRHdCO0FBRW5DQyxFQUFBQSxHQUFHLEVBQUUsS0FGOEI7QUFHbkNDLEVBQUFBLE1BQU0sRUFBRTtBQUgyQixDQUFoQzs7QUFNQSxJQUFNQyx5QkFBeUIsR0FBRztBQUNyQ0MsRUFBQUEsT0FBTyxFQUFFLFNBRDRCO0FBRXJDQyxFQUFBQSxjQUFjLEVBQUUsZ0JBRnFCO0FBR3JDQyxFQUFBQSxTQUFTLEVBQUUsV0FIMEI7QUFJckNDLEVBQUFBLE1BQU0sRUFBRSxRQUo2QjtBQUtyQ0MsRUFBQUEsT0FBTyxFQUFFO0FBTDRCLENBQWxDOztBQVFBLElBQU1DLDZCQUE2QixHQUFHO0FBQ3pDQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZ0M7QUFFekNDLEVBQUFBLFFBQVEsRUFBRSxDQUYrQjtBQUd6Q0MsRUFBQUEsS0FBSyxFQUFFO0FBSGtDLENBQXRDOztBQU1BLElBQU1DLHNCQUFzQixHQUFHO0FBQ2xDQyxFQUFBQSxTQUFTLEVBQUUsQ0FEdUI7QUFFbENDLEVBQUFBLE1BQU0sRUFBRSxDQUYwQjtBQUdsQ0MsRUFBQUEsT0FBTyxFQUFFO0FBSHlCLENBQS9COztBQU1BLElBQU1DLFVBQVUsR0FBRztBQUN0QkMsRUFBQUEsUUFBUSxFQUFFLENBRFk7QUFFdEJDLEVBQUFBLEdBQUcsRUFBRSxDQUZpQjtBQUd0QkMsRUFBQUEsV0FBVyxFQUFFLENBSFM7QUFJdEIsV0FBTyxDQUplO0FBS3RCQyxFQUFBQSxPQUFPLEVBQUUsQ0FMYTtBQU10QkMsRUFBQUEsY0FBYyxFQUFFLENBTk07QUFPdEJDLEVBQUFBLGdCQUFnQixFQUFFO0FBUEksQ0FBbkI7O0FBVUEsSUFBTUMsV0FBVyxHQUFHO0FBQ3ZCTixFQUFBQSxRQUFRLEVBQUUsQ0FEYTtBQUV2QkUsRUFBQUEsV0FBVyxFQUFFLENBRlU7QUFHdkJLLEVBQUFBLFNBQVMsRUFBRSxDQUhZO0FBSXZCSixFQUFBQSxPQUFPLEVBQUUsQ0FKYztBQUt2QkssRUFBQUEsa0JBQWtCLEVBQUUsQ0FMRztBQU12QkMsRUFBQUEsT0FBTyxFQUFFLENBTmM7QUFPdkJDLEVBQUFBLGVBQWUsRUFBRSxDQVBNO0FBUXZCQyxFQUFBQSxJQUFJLEVBQUUsQ0FBQztBQVJnQixDQUFwQjs7QUFXQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLFFBQVEsRUFBRSxDQURjO0FBRXhCQyxFQUFBQSxLQUFLLEVBQUUsQ0FGaUI7QUFHeEJDLEVBQUFBLE1BQU0sRUFBRTtBQUhnQixDQUFyQjs7QUFNQSxJQUFNQyx3QkFBd0IsR0FBRztBQUNwQzFCLEVBQUFBLE9BQU8sRUFBRSxDQUQyQjtBQUVwQzJCLEVBQUFBLE1BQU0sRUFBRSxDQUY0QjtBQUdwQ0MsRUFBQUEsVUFBVSxFQUFFLENBSHdCO0FBSXBDQyxFQUFBQSxXQUFXLEVBQUUsQ0FKdUI7QUFLcENDLEVBQUFBLFFBQVEsRUFBRSxDQUwwQjtBQU1wQ0MsRUFBQUEsU0FBUyxFQUFFLENBTnlCO0FBT3BDQyxFQUFBQSxPQUFPLEVBQUUsQ0FQMkI7QUFRcENDLEVBQUFBLFVBQVUsRUFBRTtBQVJ3QixDQUFqQzs7QUFXQSxJQUFNQyxzQkFBc0IsR0FBRztBQUNsQ2xDLEVBQUFBLE9BQU8sRUFBRSxDQUR5QjtBQUVsQzhCLEVBQUFBLFFBQVEsRUFBRSxDQUZ3QjtBQUdsQ0MsRUFBQUEsU0FBUyxFQUFFLENBSHVCO0FBSWxDQyxFQUFBQSxPQUFPLEVBQUU7QUFKeUIsQ0FBL0I7O0FBT0EsSUFBTUcsVUFBVSxHQUFHO0FBQ3RCZCxFQUFBQSxJQUFJLEVBQUUsQ0FEZ0I7QUFFdEJlLEVBQUFBLEtBQUssRUFBRSxDQUZlO0FBR3RCQyxFQUFBQSxLQUFLLEVBQUU7QUFIZSxDQUFuQjs7QUFNQSxJQUFNQyxZQUFZLEdBQUc7QUFDeEJDLEVBQUFBLE1BQU0sRUFBRSxDQURnQjtBQUV4QkMsRUFBQUEsTUFBTSxFQUFFLENBRmdCO0FBR3hCakMsRUFBQUEsTUFBTSxFQUFFO0FBSGdCLENBQXJCOztBQU1BLElBQU1rQyxnQkFBZ0IsR0FBRztBQUM1QkMsRUFBQUEsUUFBUSxFQUFFLENBRGtCO0FBRTVCOUMsRUFBQUEsT0FBTyxFQUFFLENBRm1CO0FBRzVCK0MsRUFBQUEsSUFBSSxFQUFFLENBSHNCO0FBSTVCQyxFQUFBQSxJQUFJLEVBQUUsQ0FKc0I7QUFLNUJDLEVBQUFBLFlBQVksRUFBRSxDQUxjO0FBTTVCQyxFQUFBQSxZQUFZLEVBQUUsQ0FOYztBQU81QkMsRUFBQUEsWUFBWSxFQUFFLENBUGM7QUFRNUJDLEVBQUFBLFlBQVksRUFBRTtBQVJjLENBQXpCOztBQVdBLElBQU1DLDRCQUE0QixHQUFHO0FBQ3hDakQsRUFBQUEsT0FBTyxFQUFFLENBRCtCO0FBRXhDNkIsRUFBQUEsV0FBVyxFQUFFLENBRjJCO0FBR3hDQyxFQUFBQSxRQUFRLEVBQUUsQ0FIOEI7QUFJeENDLEVBQUFBLFNBQVMsRUFBRSxDQUo2QjtBQUt4Q0MsRUFBQUEsT0FBTyxFQUFFO0FBTCtCLENBQXJDOztBQVFBLElBQU1rQixjQUFjLEdBQUc7QUFDMUJYLEVBQUFBLE1BQU0sRUFBRSxDQURrQjtBQUUxQkMsRUFBQUEsTUFBTSxFQUFFLENBRmtCO0FBRzFCakMsRUFBQUEsTUFBTSxFQUFFLENBSGtCO0FBSTFCNEMsRUFBQUEsUUFBUSxFQUFFO0FBSmdCLENBQXZCOztBQU9BLElBQU1DLG9CQUFvQixHQUFHO0FBQ2hDOUMsRUFBQUEsU0FBUyxFQUFFLENBRHFCO0FBRWhDQyxFQUFBQSxNQUFNLEVBQUUsQ0FGd0I7QUFHaENDLEVBQUFBLE9BQU8sRUFBRTtBQUh1QixDQUE3Qjs7QUFNQSxJQUFNNkMsWUFBWSxHQUFHO0FBQ3hCQyxFQUFBQSxPQUFPLEVBQUUsQ0FEZTtBQUV4QkMsRUFBQUEsRUFBRSxFQUFFO0FBRm9CLENBQXJCOztBQUtBLElBQU1DLFdBQVcsR0FBRztBQUN2QnRELEVBQUFBLE9BQU8sRUFBRSxDQURjO0FBRXZCQyxFQUFBQSxRQUFRLEVBQUUsQ0FGYTtBQUd2QkMsRUFBQUEsS0FBSyxFQUFFO0FBSGdCLENBQXBCOztBQU1BLElBQU1xRCxXQUFXLEdBQUc7QUFDdkJDLEVBQUFBLFFBQVEsRUFBRSxDQURhO0FBRXZCQyxFQUFBQSxPQUFPLEVBQUUsQ0FGYztBQUd2QkMsRUFBQUEsRUFBRSxFQUFFO0FBSG1CLENBQXBCOzs7SUFPY0Msa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUdBdVVKLGtCOzs7Ozs7Ozs7Ozs7OztBQWpVVCxxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0MsTSxFQUErQkMsVTs7Ozs7Ozt1QkFDSCxLQUFLSCxPQUFMLENBQWFJLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQzNEQyxrQkFBQUEsRUFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVMLE1BQU0sQ0FBQ007QUFBYjtBQUR1RCxpQkFBNUIsRUFFaEMsU0FGZ0MsRUFFckJDLFNBRnFCLEVBRVZBLFNBRlUsRUFFQ0EsU0FGRCxFQUVZTixVQUZaLEM7OztBQUE3QkMsZ0JBQUFBLFE7O3NCQUdGQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ00sTUFBVCxHQUFrQixDOzs7OztrREFDdkI7QUFDSEosa0JBQUFBLEVBQUUsRUFBRUosTUFBTSxDQUFDTSxPQURSO0FBRUhHLGtCQUFBQSxZQUFZLEVBQUVQLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVE7QUFGdkIsaUI7OztrREFLSjtBQUNITixrQkFBQUEsRUFBRSxFQUFFLElBREQ7QUFFSEssa0JBQUFBLFlBQVksRUFBRTtBQUZYLGlCOzs7Ozs7Ozs7Ozs7Ozs7UUFPWDs7Ozs7OztxREFFYVQsTSxFQUFpQ0MsVTs7Ozs7OztrREFDbkMsS0FBS04sT0FBTCxDQUFhZ0IsS0FBYixDQUFtQixrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUF1QyxrQkFBTUMsSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFDQSw0QkFBQUEsSUFBSSxDQUFDQyxNQUFMLENBQVksUUFBWixFQUFzQmIsTUFBdEI7QUFEMEMsOERBRW5DLE1BQUksQ0FBQ2MsZ0JBQUwsQ0FBc0JkLE1BQXRCLEVBQThCWSxJQUE5QixDQUZtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0pYLFVBSEksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQU9ERCxNLEVBQThCQyxVOzs7Ozs7O2tEQUM3QixLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FBb0Msa0JBQU1DLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN2Q0EsNEJBQUFBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFFBQVosRUFBc0JiLE1BQXRCO0FBRHVDLDhEQUVoQyxNQUFJLENBQUNlLGFBQUwsQ0FBbUJmLE1BQW5CLEVBQTJCWSxJQUEzQixDQUZnQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcEM7O0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0pYLFVBSEksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQU1JRCxNLEVBQW1DQyxVOzs7Ozs7O2tEQUN2QyxLQUFLTixPQUFMLENBQWFnQixLQUFiLENBQW1CLG9CQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQXlDLGtCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNUNBLDRCQUFBQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxRQUFaLEVBQXNCYixNQUF0QjtBQUQ0Qyw4REFFckMsTUFBSSxDQUFDZ0Isa0JBQUwsQ0FBd0JoQixNQUF4QixFQUFnQ1ksSUFBaEMsQ0FGcUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpDOztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdKWCxVQUhJLEM7Ozs7Ozs7Ozs7Ozs7OztRQU1YOzs7Ozs7O3FEQUUwQkQsTTs7Ozs7O0FBQ3RCLHFCQUFLTixNQUFMLENBQVl1QixHQUFaLENBQWdCLHFCQUFoQixFQUF1Q2pCLE1BQXZDOzt1QkFLVSxLQUFLa0IsV0FBTCxDQUFpQiwwQkFBakIsRUFBNkM7QUFDbkRDLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLFdBQU4sQ0FBZW1CLEdBRCtCO0FBRW5EQyxrQkFBQUEsaUJBQWlCLEVBQUVwQixNQUFNLENBQUNvQixpQkFGeUI7QUFHbkRDLGtCQUFBQSxVQUFVLEVBQUVyQixNQUFNLENBQUNxQixVQUhnQztBQUluREMsa0JBQUFBLFdBQVcsRUFBRXRCLE1BQU0sV0FBTixDQUFlc0IsV0FKdUI7QUFLbkRDLGtCQUFBQSxPQUFPLEVBQUV2QixNQUFNLENBQUN1QixPQUxtQztBQU1uREMsa0JBQUFBLFdBQVcsRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTitCLGlCQUE3QyxDOzs7QUFKSkMsZ0JBQUFBLE87a0RBWUM7QUFDSEEsa0JBQUFBLE9BQU8sRUFBRTtBQUNMQyxvQkFBQUEsU0FBUyxFQUFFRCxPQUFPLENBQUNDLFNBRGQ7QUFFTEMsb0JBQUFBLGlCQUFpQixFQUFFRixPQUFPLENBQUNFO0FBRnRCLG1CQUROO0FBS0hyQixrQkFBQUEsT0FBTyxFQUFFbUIsT0FBTyxDQUFDbkI7QUFMZCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVVZTixNOzs7Ozs7QUFDbkIscUJBQUtOLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0Isa0JBQWhCLEVBQW9DakIsTUFBcEM7O3VCQUNzQixLQUFLa0IsV0FBTCxDQUFpQix1QkFBakIsRUFBMEM7QUFDNURaLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FENEM7QUFFNURhLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUZnRDtBQUc1RFMsa0JBQUFBLFlBQVksRUFBRTVCLE1BQU0sQ0FBQzRCLFlBSHVDO0FBSTVEQyxrQkFBQUEsS0FBSyxFQUFFN0IsTUFBTSxDQUFDNkIsS0FKOEM7QUFLNUROLGtCQUFBQSxPQUFPLEVBQUV2QixNQUFNLENBQUN1QjtBQUw0QyxpQkFBMUMsQzs7O0FBQWhCRSxnQkFBQUEsTzttREFPQztBQUNIbkIsa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQURiO0FBRUhhLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUZUO0FBR0hTLGtCQUFBQSxZQUFZLEVBQUU1QixNQUFNLENBQUM0QixZQUhsQjtBQUlISCxrQkFBQUEsT0FBTyxFQUFQQTtBQUpHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUXVCekIsTTs7Ozs7Ozt1QkFJcEIsS0FBS2tCLFdBQUwsQ0FBaUIsMENBQWpCLEVBQTZEO0FBQ25FQyxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxXQUFOLENBQWVtQixHQUQrQztBQUVuRUMsa0JBQUFBLGlCQUFpQixFQUFFcEIsTUFBTSxDQUFDb0IsaUJBRnlDO0FBR25FQyxrQkFBQUEsVUFBVSxFQUFFckIsTUFBTSxDQUFDcUIsVUFIZ0Q7QUFJbkVDLGtCQUFBQSxXQUFXLEVBQUV0QixNQUFNLFdBQU4sQ0FBZXNCLFdBSnVDO0FBS25FUSxrQkFBQUEsWUFBWSxFQUFFOUIsTUFBTSxDQUFDdUIsT0FBUCxVQUxxRDtBQU1uRUMsa0JBQUFBLFdBQVcsRUFBRXhCLE1BQU0sQ0FBQ3dCO0FBTitDLGlCQUE3RCxDOzs7QUFISk8sZ0JBQUFBLE07bURBV0M7QUFDSHpCLGtCQUFBQSxPQUFPLEVBQUV5QixNQUFNLENBQUNDLFVBRGI7QUFFSEMsa0JBQUFBLFVBQVUsRUFBRUYsTUFBTSxDQUFDRztBQUZoQixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQU9vQmxDLE07Ozs7Ozs7dUJBQ0YsS0FBS2tCLFdBQUwsQ0FBaUIsdUNBQWpCLEVBQTBEO0FBQy9FWixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRCtEO0FBRS9FYSxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FGbUU7QUFHL0VTLGtCQUFBQSxZQUFZLEVBQUU1QixNQUFNLENBQUM0QixZQUgwRDtBQUkvRUMsa0JBQUFBLEtBQUssRUFBRTdCLE1BQU0sQ0FBQzZCO0FBSmlFLGlCQUExRCxDOzs7QUFBbkJJLGdCQUFBQSxVO21EQU1DO0FBQ0hkLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQURUO0FBRUhTLGtCQUFBQSxZQUFZLEVBQUU1QixNQUFNLENBQUM0QixZQUZsQjtBQUdISyxrQkFBQUEsVUFBVSxFQUFWQTtBQUhHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUWVqQyxNOzs7OzttREFDZixLQUFLa0IsV0FBTCxDQUFpQixvQ0FBakIsRUFBdURsQixNQUF2RCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS1BBLE07Ozs7Ozs7dUJBRXNCLEtBQUttQyxtQkFBTCxDQUF5Qm5DLE1BQU0sQ0FBQ29DLGtCQUFoQyxDOzs7QUFBaEJYLGdCQUFBQSxPO21EQUNDO0FBQ0huQixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSG1CLGtCQUFBQSxPQUFPLEVBQVBBO0FBRkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFRUHpCLE07Ozs7Ozs7dUJBRXNCLEtBQUttQyxtQkFBTCxDQUF5Qm5DLE1BQU0sQ0FBQ29DLGtCQUFoQyxDOzs7QUFBaEJYLGdCQUFBQSxPO21EQUNDO0FBQ0huQixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRGI7QUFFSGEsa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sQ0FBQ21CLEdBRlQ7QUFHSFMsa0JBQUFBLFlBQVksRUFBRTVCLE1BQU0sQ0FBQzRCLFlBSGxCO0FBSUhILGtCQUFBQSxPQUFPLEVBQVBBO0FBSkcsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTUHpCLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLHNCQUFqQixFQUF5Q2xCLE1BQXpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDbEIsTUFBMUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUlQQSxNOzs7OzttREFFTyxLQUFLa0IsV0FBTCxDQUFpQixvQkFBakIsRUFBdUNsQixNQUF2QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSVBBLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLHVCQUFqQixFQUEwQ2xCLE1BQTFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDbEIsTUFBdkMsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7c0RBRXNCQSxNOzs7OzttREFDWCxLQUFLa0IsV0FBTCxDQUFpQixzQkFBakIsRUFBeUNsQixNQUF6QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBS1BBLE07Ozs7O21EQUVPLEtBQUtrQixXQUFMLENBQWlCLDZCQUFqQixFQUFnRGxCLE1BQWhELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFLUEEsTTs7Ozs7bURBRU8sS0FBS2tCLFdBQUwsQ0FBaUIsOEJBQWpCLEVBQWlEbEIsTUFBakQsQzs7Ozs7Ozs7Ozs7Ozs7O1FBR1g7Ozs7Ozs7c0RBRWtCQSxNLEVBQTRCQyxVOzs7Ozs7Z0NBQy9CRCxNQUFNLENBQUMwQixTOzs7Ozs7Ozt1QkFDUCxLQUFLVyxVQUFMLENBQWdCO0FBQ25CQyxrQkFBQUEsU0FBUyxFQUFFdEMsTUFBTSxDQUFDMkI7QUFEQyxpQkFBaEIsQzs7O2dEQUVIWSxJOzs7QUFIRm5DLGdCQUFBQSxFO0FBSUFvQyxnQkFBQUEsUSxHQUFXQyxNQUFNLENBQUNDLElBQVAsQ0FBWXRDLEVBQVosRUFBZ0IsS0FBaEIsRUFBdUJ1QyxRQUF2QixDQUFnQyxRQUFoQyxDOzt1QkFDWCxLQUFLN0MsT0FBTCxDQUFhOEMsWUFBYixDQUEwQixDQUM1QjtBQUNJeEMsa0JBQUFBLEVBQUUsRUFBRW9DLFFBRFI7QUFFSUssa0JBQUFBLElBQUksRUFBRTdDLE1BQU0sQ0FBQzJCO0FBRmpCLGlCQUQ0QixDQUExQixFQUtIMUIsVUFMRyxDOzs7QUFNTixxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQiw2QkFBaEI7bURBQ09iLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJVXFCLE8sRUFBNkJxQixZLEVBQXNCN0MsVTs7Ozs7O0FBQ2hFOEMsZ0JBQUFBLFcsR0FBNkIsSTtBQUM3QkMsZ0JBQUFBLEssR0FBUSxJOzs7cUJBQ0xBLEs7Ozs7O0FBQ0hBLGdCQUFBQSxLQUFLLEdBQUcsS0FBUjs7dUJBQ3dCLEtBQUtDLFdBQUwsQ0FBaUJ4QixPQUFqQixFQUEwQnhCLFVBQTFCLEM7OztBQUFsQnlCLGdCQUFBQSxTOzs7dUJBRWtCLEtBQUs1QixPQUFMLENBQWFvRCxZQUFiLENBQTBCQyxPQUExQixDQUFrQztBQUNsREMsa0JBQUFBLE1BQU0sRUFBRTtBQUFFL0Msb0JBQUFBLEVBQUUsRUFBRXFCO0FBQU4sbUJBRDBDO0FBRWxEMkIsa0JBQUFBLE1BQU0sRUFBRTtBQUFFaEQsb0JBQUFBLEVBQUUsRUFBRXhCLDRCQUE0QixDQUFDbEI7QUFBbkM7QUFGMEMsaUJBQWxDLEVBR2pCbUYsWUFIaUIsRUFHSCxLQUhHLEVBR0s3QyxVQUhMLEM7OztBQUFwQjhDLGdCQUFBQSxXOzs7Ozs7OztzQkFLSSxjQUFNTyxJQUFOLElBQWMsY0FBTUEsSUFBTixLQUFlQywwQkFBZUQsSUFBZixDQUFvQkUsZ0I7Ozs7O0FBQ2pELHFCQUFLOUQsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixzQ0FBaEI7QUFDQStCLGdCQUFBQSxLQUFLLEdBQUcsSUFBUjs7Ozs7Ozs7Ozs7O29CQU1QRCxXOzs7OztzQkFDS1EsMEJBQWVFLGFBQWYsQ0FBNkIscUJBQTdCLEM7OztBQUVKQyxnQkFBQUEsYyxHQUFpQlgsV0FBVyxDQUFDWSxHQUFaLElBQW1CLEM7QUFDMUMscUJBQUtqRSxNQUFMLENBQVl1QixHQUFaLENBQWdCLHNDQUFoQixFQUF3RDtBQUNwRGIsa0JBQUFBLEVBQUUsRUFBRTJDLFdBQVcsQ0FBQzNDLEVBRG9DO0FBRXBEd0Qsa0JBQUFBLFFBQVEsRUFBRWIsV0FBVyxDQUFDYSxRQUY4QjtBQUdwREQsa0JBQUFBLEdBQUcsWUFBSyxJQUFJRSxJQUFKLENBQVNILGNBQWMsR0FBRyxJQUExQixFQUFnQ0ksV0FBaEMsRUFBTCxlQUF1REosY0FBdkQ7QUFIaUQsaUJBQXhEO21EQUtPWCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBSWdCL0MsTSxFQUFrQ0MsVTs7Ozs7O0FBQ3pELHFCQUFLUCxNQUFMLENBQVl1QixHQUFaLENBQWdCLHNCQUFoQixFQUF3Q2pCLE1BQXhDOzt1QkFDMEIsS0FBSytELGNBQUwsQ0FDdEIvRCxNQUFNLENBQUN5QixPQURlLEVBRXRCdUMsa0JBRnNCLEVBR3RCL0QsVUFIc0IsQzs7O0FBQXBCOEMsZ0JBQUFBLFc7O3VCQUtBa0IsZ0JBQWdCLENBQUNsQixXQUFELEM7OztBQUN0QixxQkFBS3JELE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsMkJBQWhCO21EQUNPO0FBQ0hYLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEYjtBQUVINEQsa0JBQUFBLGVBQWUsRUFBRSxLQUZkO0FBR0huQixrQkFBQUEsV0FBVyxFQUFYQTtBQUhHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUWEvQyxNLEVBQStCQyxVOzs7Ozs7OztBQUNuRCxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixtQkFBaEIsRUFBcUNqQixNQUFyQzs7dUJBQzBCLEtBQUsrRCxjQUFMLENBQ3RCL0QsTUFBTSxDQUFDeUIsT0FEZSxFQUV0QnVDLGtCQUZzQixFQUd0Qi9ELFVBSHNCLEM7OztBQUFwQjhDLGdCQUFBQSxXOzt1QkFLQWtCLGdCQUFnQixDQUFDbEIsV0FBRCxDOzs7QUFDaEJvQixnQkFBQUEsYyxHQUFpQnBCLFdBQVcsQ0FBQ3FCLFk7O3NCQUMvQixDQUFDRCxjQUFELElBQW1CQSxjQUFjLENBQUMzRCxNQUFmLEtBQTBCLEM7Ozs7O21EQUN0QztBQUFFNkQsa0JBQUFBLE1BQU0sRUFBRSxJQUFWO0FBQWdCdEIsa0JBQUFBLFdBQVcsRUFBWEE7QUFBaEIsaUI7OztBQUVMdUIsZ0JBQUFBLGdCLEdBQStCSCxjQUFjLENBQUNJLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRCxFQUFpQjtBQUN4RSx5QkFBT0EsQ0FBQyxDQUFDQyxRQUFGLEtBQWV2SCxZQUFZLENBQUNHLE1BQW5DO0FBQ0gsaUJBRm9DLEM7QUFHckMscUJBQUtxQyxNQUFMLENBQVl1QixHQUFaLENBQWdCLDBDQUFoQjs7dUJBQ3NCeUQsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGdCQUFnQixDQUFDTSxHQUFqQixDQUFxQixVQUFDSixDQUFELEVBQWlCO0FBQ3BFLHlCQUFPLE1BQUksQ0FBQ0ssdUJBQUwsQ0FBNkI7QUFDaEMxRCxvQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FEb0I7QUFFaEMyRCxvQkFBQUEsVUFBVSxFQUFFTixDQUFDLENBQUMzQixJQUFGLElBQVU7QUFGVSxtQkFBN0IsQ0FBUDtBQUlILGlCQUxpQyxDQUFaLEM7OztBQUFoQmtDLGdCQUFBQSxPO0FBTUFDLGdCQUFBQSxZLEdBQWVELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQUNULENBQUQsRUFBMkM7QUFDekUseUJBQU9BLENBQUMsWUFBRCxDQUFXVSxXQUFYLE9BQTZCbEYsTUFBTSxDQUFDNEIsWUFBUCxDQUFvQnNELFdBQXBCLEVBQXBDO0FBQ0gsaUJBRm9CLEM7QUFHckIscUJBQUt4RixNQUFMLENBQVl1QixHQUFaLENBQWdCLHdCQUFoQjttREFDTztBQUNIb0Qsa0JBQUFBLE1BQU0sRUFBRVcsWUFBWSxHQUFHQSxZQUFZLENBQUNYLE1BQWhCLEdBQXlCLElBRDFDO0FBRUh0QixrQkFBQUEsV0FBVyxFQUFYQTtBQUZHLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT1AvQyxNLEVBQ0FtRixVLEVBQ0FsRixVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQix3QkFBaEIsRUFBMENqQixNQUExQzs7dUJBRXNCLEtBQUtvRixVQUFMLENBQWdCcEYsTUFBTSxDQUFDTSxPQUF2QixFQUFnQyxJQUFoQyxFQUFzQzZFLFVBQXRDLEVBQWtEbEYsVUFBbEQsQzs7O0FBQWhCb0YsZ0JBQUFBLE87bURBRUMsS0FBS25FLFdBQUwsQ0FBaUIseUJBQWpCLEVBQTRDO0FBQy9DWixrQkFBQUEsT0FBTyxFQUFFTixNQUFNLENBQUNNLE9BRCtCO0FBRS9DK0Usa0JBQUFBLE9BQU8sRUFBUEEsT0FGK0M7QUFHL0NsRSxrQkFBQUEsR0FBRyxFQUFFbkIsTUFBTSxDQUFDbUIsR0FIbUM7QUFJL0NTLGtCQUFBQSxZQUFZLEVBQUU1QixNQUFNLENBQUM0QixZQUowQjtBQUsvQzBELGtCQUFBQSxhQUFhLEVBQUV0RixNQUFNLENBQUN5QixPQUFQLENBQWVFO0FBTGlCLGlCQUE1QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFTWDs7Ozs7OztzREFJa0IzQixNLEVBQXFDQyxVOzs7Ozs7QUFDbkQscUJBQUtQLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsYUFBaEIsRUFBK0JqQixNQUEvQjs7dUJBRXNCLEtBQUtvRixVQUFMLENBQWdCcEYsTUFBTSxDQUFDTSxPQUF2QixFQUFnQyxJQUFoQyxFQUFzQ04sTUFBTSxDQUFDbUYsVUFBN0MsRUFBeURsRixVQUF6RCxDOzs7QUFBaEJvRixnQkFBQUEsTzs7QUFFTixvQkFBSXJGLE1BQU0sQ0FBQ3VGLGNBQVgsRUFBMkI7QUFDdkJGLGtCQUFBQSxPQUFPLENBQUMzRSxPQUFSLEdBQWtCLEtBQUs4RSxVQUF2QjtBQUNIOzttREFFTSxLQUFLdEUsV0FBTCxDQUFpQixtQkFBakIsRUFBc0M7QUFDekNaLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEeUI7QUFFekMrRSxrQkFBQUEsT0FBTyxFQUFQQSxPQUZ5QztBQUd6Q2xFLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUg2QjtBQUl6Q1Msa0JBQUFBLFlBQVksRUFBRTVCLE1BQU0sQ0FBQzRCLFlBSm9CO0FBS3pDQyxrQkFBQUEsS0FBSyxFQUFFN0IsTUFBTSxDQUFDNkIsS0FMMkI7QUFNekNOLGtCQUFBQSxPQUFPLEVBQUV2QixNQUFNLENBQUN1QjtBQU55QixpQkFBdEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVVVdkIsTSxFQUF3Q0MsVTs7Ozs7O0FBQ3pELHFCQUFLUCxNQUFMLENBQVl1QixHQUFaLENBQWdCLGdCQUFoQixFQUFrQ2pCLE1BQWxDOzt1QkFFc0IsS0FBS3lGLG1CQUFMLENBQXlCekYsTUFBekIsQzs7O0FBQWhCeUIsZ0JBQUFBLE87bURBRUMsS0FBS2lFLGtCQUFMLENBQXdCO0FBQzNCcEYsa0JBQUFBLE9BQU8sRUFBRW1CLE9BQU8sQ0FBQ25CLE9BRFU7QUFFM0JtQixrQkFBQUEsT0FBTyxFQUFFQSxPQUFPLENBQUNBLE9BRlU7QUFHM0I4RCxrQkFBQUEsY0FBYyxFQUFFdkYsTUFBTSxDQUFDdUYsY0FISTtBQUkzQkksa0JBQUFBLFVBQVUsRUFBRTNGLE1BQU0sQ0FBQzJGO0FBSlEsaUJBQXhCLEVBS0oxRixVQUxJLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFTUEQsTSxFQUNBQyxVOzs7Ozs7QUFFQSxxQkFBS1AsTUFBTCxDQUFZdUIsR0FBWixDQUFnQixvQkFBaEIsRUFBc0NqQixNQUF0QztBQUVJcUYsZ0JBQUFBLE8sR0FBb0I7QUFDcEIzRSxrQkFBQUEsT0FBTyxFQUFFLEtBQUs4RSxVQURNO0FBRXBCcEYsa0JBQUFBLEVBQUUsRUFBRUosTUFBTSxDQUFDTSxPQUZTO0FBR3BCc0Ysa0JBQUFBLFNBQVMsRUFBRUMsSUFBSSxDQUFDQyxLQUFMLENBQVdqQyxJQUFJLENBQUNGLEdBQUwsS0FBYSxJQUF4QjtBQUhTLGlCOztvQkFNbkIzRCxNQUFNLENBQUMyRixVOzs7Ozs7dUJBQ1EsS0FBS1AsVUFBTCxDQUFnQnBGLE1BQU0sQ0FBQ00sT0FBdkIsRUFBZ0MsS0FBaEMsRUFBdUNOLE1BQU0sQ0FBQ21GLFVBQTlDLEVBQTBEbEYsVUFBMUQsQzs7O0FBQWhCb0YsZ0JBQUFBLE87OztBQUdKLG9CQUFJckYsTUFBTSxDQUFDdUYsY0FBWCxFQUEyQjtBQUN2QkYsa0JBQUFBLE9BQU8sQ0FBQzNFLE9BQVIsR0FBa0IsS0FBSzhFLFVBQXZCO0FBQ0g7O21EQUVNLEtBQUt0RSxXQUFMLENBQWlCLHVCQUFqQixFQUEwQztBQUM3Q1osa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQ2QjtBQUU3QytFLGtCQUFBQSxPQUFPLEVBQVBBLE9BRjZDO0FBRzdDQyxrQkFBQUEsYUFBYSxFQUFFdEYsTUFBTSxDQUFDeUIsT0FBUCxDQUFlRTtBQUhlLGlCQUExQyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFPWDs7Ozs7OztzREFFcUIzQixNOzs7OzttREFDVixLQUFLa0IsV0FBTCxDQUFpQiwyQkFBakIsRUFBOENsQixNQUE5QyxDOzs7Ozs7Ozs7Ozs7Ozs7UUFHWDs7Ozs7OztzREFFMkJBLE07Ozs7O21EQUNoQixLQUFLa0IsV0FBTCxDQUFpQixrQkFBakIsRUFBcUM7QUFDeENDLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLFdBQU4sQ0FBZW1CLEdBRG9CO0FBRXhDQyxrQkFBQUEsaUJBQWlCLEVBQUVwQixNQUFNLENBQUNvQixpQkFGYztBQUd4Q0Msa0JBQUFBLFVBQVUsRUFBRXJCLE1BQU0sQ0FBQ3FCLFVBSHFCO0FBSXhDQyxrQkFBQUEsV0FBVyxFQUFFdEIsTUFBTSxXQUFOLENBQWVzQixXQUpZO0FBS3hDQyxrQkFBQUEsT0FBTyxFQUFFdkIsTUFBTSxDQUFDdUI7QUFMd0IsaUJBQXJDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFVYXZCLE07Ozs7Ozt1QkFDUCxLQUFLa0IsV0FBTCxDQUFpQixlQUFqQixFQUFrQztBQUMzQ1osa0JBQUFBLE9BQU8sRUFBRU4sTUFBTSxDQUFDTSxPQUQyQjtBQUUzQ2Esa0JBQUFBLEdBQUcsRUFBRW5CLE1BQU0sQ0FBQ21CLEdBRitCO0FBRzNDUyxrQkFBQUEsWUFBWSxFQUFFNUIsTUFBTSxDQUFDNEIsWUFIc0I7QUFJM0NDLGtCQUFBQSxLQUFLLEVBQUU3QixNQUFNLENBQUM2QixLQUo2QjtBQUszQ04sa0JBQUFBLE9BQU8sRUFBRXZCLE1BQU0sQ0FBQ3VCO0FBTDJCLGlCQUFsQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBVU12QixNLEVBQWlDQyxVOzs7Ozs7QUFDcEQscUJBQUtQLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsY0FBaEI7O3VCQUNzQixLQUFLd0UsbUJBQUwsQ0FBeUJ6RixNQUF6QixDOzs7QUFBaEJ5QixnQkFBQUEsTzttREFDQyxLQUFLc0Usb0JBQUwsQ0FBMEJ0RSxPQUExQixFQUFtQ3hCLFVBQW5DLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFJU0QsTSxFQUE4QkMsVTs7Ozs7O0FBQzlDLHFCQUFLUCxNQUFMLENBQVl1QixHQUFaLENBQWdCLFdBQWhCOzt1QkFDc0IsS0FBSytFLGdCQUFMLENBQXNCaEcsTUFBdEIsQzs7O0FBQWhCeUIsZ0JBQUFBLE87bURBQ0MsS0FBS3dFLGlCQUFMLENBQXVCeEUsT0FBdkIsRUFBZ0N4QixVQUFoQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBR01LLE8sRUFBaUJsQyxNLEVBQWMrRyxVLEVBQTJDbEYsVTtZQUM5RWlHLGM7Ozs7O0FBQUFBLGdCQUFBQSxjLGtCQUFlQyxHLEVBQVU7QUFDOUIsc0JBQUlBLEdBQUcsQ0FBQ0MsVUFBUixFQUFvQjtBQUNoQiwyQkFBT0QsR0FBRyxDQUFDQyxVQUFYO0FBQ0g7O0FBQ0RDLGtCQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsR0FBZCxFQUFtQkksT0FBbkIsQ0FBMkIsVUFBQ0MsS0FBRCxFQUFXO0FBQ2xDLHdCQUFJLENBQUMsQ0FBQ0EsS0FBRixJQUFXLHlCQUFPQSxLQUFQLE1BQWlCLFFBQWhDLEVBQTBDO0FBQ3RDTixzQkFBQUEsY0FBYyxDQUFDTSxLQUFELENBQWQ7QUFDSDtBQUNKLG1CQUpEO0FBS0gsaUI7O0FBRUtqQyxnQkFBQUEsTSxHQUE0QjtBQUM5Qm5FLGtCQUFBQSxFQUFFLEVBQUU7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRUM7QUFBTjtBQUQwQixpQjs7QUFHbEMsb0JBQUk2RSxVQUFVLElBQUlBLFVBQVUsQ0FBQ3NCLGFBQTdCLEVBQTRDO0FBQ3hDbEMsa0JBQUFBLE1BQU0sQ0FBQ21DLGFBQVAsR0FBdUI7QUFBRUMsb0JBQUFBLEVBQUUsRUFBRXhCLFVBQVUsQ0FBQ3NCO0FBQWpCLG1CQUF2QjtBQUNIOztBQUNELG9CQUFJckksTUFBSixFQUFZO0FBQ1JtRyxrQkFBQUEsTUFBTSxDQUFDcUMsUUFBUCxHQUFrQjtBQUFFdkcsb0JBQUFBLEVBQUUsRUFBRW5DLFlBQVksQ0FBQ0U7QUFBbkIsbUJBQWxCO0FBQ0g7O0FBRUQscUJBQUtzQixNQUFMLENBQVl1QixHQUFaLENBQWdCLG9CQUFoQixFQUFzQ3NELE1BQXRDOzt1QkFDc0IsS0FBS3pFLE9BQUwsQ0FBYUksUUFBYixDQUFzQmlELE9BQXRCLENBQ2xCb0IsTUFEa0IsRUFFbEIsaUVBRmtCLEVBR2xCWSxVQUFVLElBQUlBLFVBQVUsQ0FBQzBCLE9BSFAsRUFJbEI1RyxVQUprQixDOzs7QUFBaEJvRixnQkFBQUEsTztBQU9OYSxnQkFBQUEsY0FBYyxDQUFDYixPQUFELENBQWQ7QUFDQSxxQkFBSzNGLE1BQUwsQ0FBWXVCLEdBQVosQ0FBZ0IsOEJBQWhCLEVBQWdEb0UsT0FBaEQ7bURBQ09BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHY3JGLE0sRUFBbUNDLFU7Ozs7Ozs7dUJBQ2xDLEtBQUttRixVQUFMLENBQWdCcEYsTUFBTSxDQUFDTSxPQUF2QixFQUFnQyxJQUFoQyxFQUFzQ04sTUFBTSxDQUFDbUYsVUFBN0MsRUFBeURsRixVQUF6RCxDOzs7QUFBaEJvRixnQkFBQUEsTzttREFFQyxLQUFLbkUsV0FBTCxDQUFpQixxQkFBakIsRUFBd0M7QUFDM0NaLGtCQUFBQSxPQUFPLEVBQUVOLE1BQU0sQ0FBQ00sT0FEMkI7QUFFM0MrRSxrQkFBQUEsT0FBTyxFQUFQQSxPQUYyQztBQUczQ2xFLGtCQUFBQSxHQUFHLEVBQUVuQixNQUFNLENBQUNtQixHQUgrQjtBQUkzQ1Msa0JBQUFBLFlBQVksRUFBRTVCLE1BQU0sQ0FBQzRCLFlBSnNCO0FBSzNDQyxrQkFBQUEsS0FBSyxFQUFFN0IsTUFBTSxDQUFDNkIsS0FMNkI7QUFNM0NOLGtCQUFBQSxPQUFPLEVBQUV2QixNQUFNLENBQUN1QjtBQU4yQixpQkFBeEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcmRpQ3VGLHFCOzs7QUFnZWhEckgsa0JBQWtCLENBQUNzSCxVQUFuQixHQUFnQyxvQkFBaEM7O1NBRWU5QyxnQjs7Ozs7OzsrQkFBZixtQkFBZ0NsQixXQUFoQztBQUFBLFFBS2FpRSxTQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLYUEsWUFBQUEsU0FMYixrQkFLdUJ2RixPQUx2QixFQUt3QzZCLElBTHhDLEVBS3NEMkQsS0FMdEQsRUFLcUU7QUFDN0QscUJBQU8sSUFBSTFELHlCQUFKLFdBQ0E5QixPQURBLGVBQ1k2QixJQURaLGtCQUN3QjJELEtBRHhCLEdBRUgzRCxJQUZHLEVBR0hDLDBCQUFlMkQsTUFBZixDQUFzQkMsSUFIbkIsRUFJSDtBQUNJRixnQkFBQUEsS0FBSyxFQUFMQSxLQURKO0FBRUlHLGdCQUFBQSxjQUFjLEVBQUVyRSxXQUFXLENBQUMzQztBQUZoQyxlQUpHLENBQVA7QUFRSCxhQWRMOztBQUFBLGdCQUNTMkMsV0FBVyxDQUFDc0UsT0FEckI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFnQlU3TCxZQUFBQSxPQWhCVixHQWdCb0J1SCxXQUFXLENBQUN2SCxPQWhCaEM7O0FBQUEsaUJBaUJRQSxPQWpCUjtBQUFBO0FBQUE7QUFBQTs7QUFrQmM2SCxZQUFBQSxNQWxCZCxHQWtCdUI3SCxPQUFPLENBQUM4TCxhQWxCL0I7O0FBQUEsa0JBbUJZakUsTUFBTSxLQUFLckUsb0JBQW9CLENBQUM3QyxNQW5CNUM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBb0JrQjZLLFNBQVMsQ0FDWCxzQ0FEVyxFQUVYL0ssc0JBQXNCLENBQUNFLE1BRlosRUFHWFoseUJBQXlCLENBQUNDLE9BSGYsQ0FwQjNCOztBQUFBO0FBQUEsa0JBMEJZNkgsTUFBTSxLQUFLckUsb0JBQW9CLENBQUM1QyxPQTFCNUM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBMkJrQjRLLFNBQVMsQ0FDWCx1Q0FEVyxFQUVYL0ssc0JBQXNCLENBQUNHLE9BRlosRUFHWGIseUJBQXlCLENBQUNDLE9BSGYsQ0EzQjNCOztBQUFBO0FBbUNVK0wsWUFBQUEsT0FuQ1YsR0FtQ29CeEUsV0FBVyxDQUFDd0UsT0FuQ2hDOztBQUFBLGlCQW9DUUEsT0FwQ1I7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBcUNZQSxPQUFPLENBQUNDLFlBQVIsS0FBeUJ2SSxZQUFZLENBQUNDLE9BckNsRDtBQUFBO0FBQUE7QUFBQTs7QUFzQ2tCdUksWUFBQUEsTUF0Q2xCLEdBc0MyQkYsT0FBTyxDQUFDRyxjQXRDbkM7O0FBQUEsa0JBdUNnQkQsTUFBTSxLQUFLckksV0FBVyxDQUFDdEQsT0F2Q3ZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXdDc0JrTCxTQUFTLENBQ1gsOEJBRFcsRUFFWG5MLDZCQUE2QixDQUFDQyxPQUZuQixFQUdYUCx5QkFBeUIsQ0FBQ0UsY0FIZixDQXhDL0I7O0FBQUE7QUFBQSxrQkE4Q2dCZ00sTUFBTSxLQUFLckksV0FBVyxDQUFDckQsUUE5Q3ZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQStDc0JpTCxTQUFTLENBQ1gsMENBRFcsRUFFWG5MLDZCQUE2QixDQUFDRSxRQUZuQixFQUdYUix5QkFBeUIsQ0FBQ0UsY0FIZixDQS9DL0I7O0FBQUE7QUFBQSxrQkFxRGdCZ00sTUFBTSxLQUFLckksV0FBVyxDQUFDcEQsS0FyRHZDO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQXNEc0JnTCxTQUFTLENBQ1gsc0JBRFcsRUFFWG5MLDZCQUE2QixDQUFDRyxLQUZuQixFQUdYVCx5QkFBeUIsQ0FBQ0UsY0FIZixDQXREL0I7O0FBQUE7QUFBQSxrQkE0RGtCdUwsU0FBUyxDQUNYLHlDQURXLEVBRVgsQ0FBQyxDQUZVLEVBR1h6TCx5QkFBeUIsQ0FBQ0UsY0FIZixDQTVEM0I7O0FBQUE7QUFBQSxrQkFrRVk4TCxPQUFPLENBQUNDLFlBQVIsS0FBeUJ2SSxZQUFZLENBQUNFLEVBbEVsRDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkFtRWlCb0ksT0FBTyxDQUFDSSxPQW5FekI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBb0VzQlgsU0FBUyxDQUNYLDhCQURXLEVBRVhPLE9BQU8sQ0FBQ0ssU0FBUixJQUFxQixDQUZWLEVBR1hyTSx5QkFBeUIsQ0FBQ0csU0FIZixDQXBFL0I7O0FBQUE7QUE2RVVDLFlBQUFBLE1BN0VWLEdBNkVtQm9ILFdBQVcsQ0FBQ3BILE1BN0UvQjs7QUFBQSxpQkE4RVFBLE1BOUVSO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdCQStFYUEsTUFBTSxDQUFDZ00sT0EvRXBCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWdGa0JYLFNBQVMsQ0FDWHJMLE1BQU0sQ0FBQ2tNLFFBQVAsR0FDTSwwQ0FETixHQUVPLENBQUNsTSxNQUFNLENBQUNtTSxLQUFSLEdBQWdCLDZCQUFoQixHQUFnRCxxQkFINUMsRUFJWG5NLE1BQU0sQ0FBQ29NLFdBQVAsSUFBc0IsQ0FKWCxFQUtYeE0seUJBQXlCLENBQUNJLE1BTGYsQ0FoRjNCOztBQUFBO0FBQUEsa0JBMEZVcUwsU0FBUyxDQUNYLHFCQURXLEVBRVgsQ0FBQyxDQUZVLEVBR1h6TCx5QkFBeUIsQ0FBQ0ssT0FIZixDQTFGbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlHQSxJQUFNb0ksa0JBQWtCLHFiQUF4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRTWVzc2FnZSxcbiAgICBRVHJhbnNhY3Rpb24sXG4gICAgVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuaW1wb3J0IHRyYWNpbmcsIHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDJcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyhzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuJywgYXN5bmMoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdjb250cmFjdHMucnVuTG9jYWwnLCBhc3luYyhzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcGFyYW1zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3NcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEJvY0hhc2hQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBpZCA9IHBhcmFtcy5tZXNzYWdlSWQgfHxcbiAgICAgICAgICAgIChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSwgcmVzdWx0RmllbGRzOiBzdHJpbmcsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCByZXRyeSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChyZXRyeSkge1xuICAgICAgICAgICAgcmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgIH0sIHJlc3VsdEZpZWxkcywgNDBfMDAwLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgJiYgZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIFRpbWVvdXQsIHJldHJ5aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcigndHJhbnNhY3Rpb24gaXMgbnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlcyA9IHRyYW5zYWN0aW9uLm91dF9tZXNzYWdlcztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlcyB8fCBvdXRwdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCwgdHJhbnNhY3Rpb24gfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gb3V0cHV0TWVzc2FnZXMuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBCZWZvcmUgbWVzc2FnZXMgcGFyc2UnKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gXCIweDEwMDAwMDAwMDAwMDAwXCI7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjUnVuRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnRcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKFwiRGVwbG95IHN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcIlJ1biBzdGFydFwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50KGFkZHJlc3M6IHN0cmluZywgYWN0aXZlOiBib29sLCB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcywgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKFwiZ2V0QWNjb3VudC4gRmlsdGVyXCIsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcImdldEFjY291bnQuIEFjY291bnQgcmVjaWV2ZWRcIiwgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgcGFyYW1zLndhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGlmICghdHJhbnNhY3Rpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9kZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBwaGFzZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBoYXNlLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZFxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24uc3RvcmFnZTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBzdG9yYWdlLnN0YXR1c19jaGFuZ2U7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmZyb3plbikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlID0gdHJhbnNhY3Rpb24uY29tcHV0ZTtcbiAgICBpZiAoY29tcHV0ZSkge1xuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS5za2lwcGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSBjb21wdXRlLnNraXBwZWRfcmVhc29uO1xuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9TdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIG5vIGNvZGUgYW5kIGRhdGEnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLmJhZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgYmFkIHN0YXRlOiBmcm96ZW4gb3IgZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLmJhZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vR2FzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0NvbXB1dGUgcGhhc2Ugc2tpcHBlZCBieSB1bmtub3duIHJlYXNvbicsXG4gICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24uYWN0aW9uO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgIGFjdGlvbi5ub19mdW5kc1xuICAgICAgICAgICAgICAgICAgICA/ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICA6ICghYWN0aW9uLnZhbGlkID8gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCcgOiAnQWN0aW9uIHBoYXNlIGZhaWxlZCcpLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5yZXN1bHRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAnVHJhbnNhY3Rpb24gYWJvcnRlZCcsXG4gICAgICAgIC0xLFxuICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnVua25vd25cbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBpbl9tc2dcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgaW5fbXNnXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBsdFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICAgIH1cbiAgICBvdXRfbWVzc2FnZXMge1xuICAgICAgICBpZFxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICBib2R5XG4gICAgfVxuICAgYDtcbiJdfQ==