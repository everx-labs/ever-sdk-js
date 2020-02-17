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
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params) {
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

      function parseMessage(_x24) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
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

      function decodeRunOutput(_x25) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
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

      function decodeInputMessageBody(_x26) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
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

      function decodeOutputMessageBody(_x27) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(params, parentSpan) {
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

      function sendMessage(_x28, _x29) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(message, resultFields, parentSpan) {
        var messageId, transaction, transactionNow;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                messageId = _context26.sent;
                _context26.next = 5;
                return this.queries.transactions.waitFor({
                  in_msg: {
                    eq: messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, 40000, parentSpan);

              case 5:
                transaction = _context26.sent;
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context26.abrupt("return", transaction);

              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function processMessage(_x30, _x31, _x32) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params, parentSpan) {
        var transaction;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context27.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan);

              case 3:
                transaction = _context27.sent;
                _context27.next = 6;
                return checkTransaction(transaction);

              case 6:
                this.config.log('processDeployMessage. End');
                return _context27.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 8:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function processDeployMessage(_x33, _x34) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params, parentSpan) {
        var _this5 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context28.next = 3;
                return this.processMessage(params.message, transactionDetails, parentSpan);

              case 3:
                transaction = _context28.sent;
                _context28.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context28.next = 9;
                  break;
                }

                return _context28.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context28.next = 13;
                return Promise.all(externalMessages.map(function (x) {
                  return _this5.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 13:
                outputs = _context28.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context28.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 17:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function processRunMessage(_x35, _x36) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context29.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context29.sent;
                return _context29.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function processRunMessageLocal(_x37, _x38, _x39) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee30(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context30.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context30.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context30.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function calcRunFees(_x40, _x41) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee31(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context31.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context31.sent;
                return _context31.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function calcDeployFees(_x42, _x43) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee32(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context32.next = 6;
                  break;
                }

                _context32.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context32.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context32.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function calcMsgProcessFees(_x44, _x45) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee33(params) {
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function convertAddress(_x46) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee34(params) {
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                return _context34.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function internalDeployNative(_x47) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee35(params) {
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context35.abrupt("return", _context35.sent);

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function internalRunNative(_x48) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee36(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                this.config.log("Deploy start");
                _context36.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context36.sent;
                return _context36.abrupt("return", this.processDeployMessage(message, parentSpan));

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function internalDeployJs(_x49, _x50) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee37(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                this.config.log("Run start");
                _context37.next = 3;
                return this.createRunMessage(params);

              case 3:
                message = _context37.sent;
                return _context37.abrupt("return", this.processRunMessage(message, parentSpan));

              case 5:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      function internalRunJs(_x51, _x52) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee38(address, active, waitParams, parentSpan) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
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
                _context38.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);

              case 7:
                account = _context38.sent;
                removeTypeName(account);
                this.config.log("getAccount. Account recieved", account);
                return _context38.abrupt("return", account);

              case 11:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      function getAccount(_x53, _x54, _x55, _x56) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee39(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 2:
                account = _context39.sent;
                return _context39.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      function internalRunLocalJs(_x57, _x58) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x59) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee40(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            nodeError = function _ref5(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context40.next = 3;
              break;
            }

            return _context40.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context40.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context40.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context40.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context40.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context40.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context40.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context40.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context40.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context40.next = 24;
              break;
            }

            if (compute.success) {
              _context40.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context40.next = 28;
              break;
            }

            if (action.success) {
              _context40.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwicGFyZW50U3BhbiIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJ0cmFjZSIsInNwYW4iLCJzZXRUYWciLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImxvZyIsInJlcXVlc3RDb3JlIiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwiaW1hZ2VCYXNlNjQiLCJrZXlQYWlyIiwid29ya2NoYWluSWQiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUJvZHlCYXNlNjQiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsInJlc3VsdCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJjcmVhdGVTaWduZWRQYXJhbXMiLCJnZXRCb2NIYXNoIiwiYm9jQmFzZTY0IiwiaGFzaCIsImlkQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwicG9zdFJlcXVlc3RzIiwiYm9keSIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsImluX21zZyIsInN0YXR1cyIsInRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb25Ob3ciLCJub3ciLCJibG9ja19pZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwiY2hlY2tUcmFuc2FjdGlvbiIsImFscmVhZHlEZXBsb3llZCIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsImZpbHRlciIsIngiLCJtc2dfdHlwZSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJkZWNvZGVPdXRwdXRNZXNzYWdlQm9keSIsImJvZHlCYXNlNjQiLCJvdXRwdXRzIiwicmVzdWx0T3V0cHV0IiwiZmluZCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImdldEFjY291bnQiLCJhY2NvdW50IiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwicHJvY2Vzc0RlcGxveU1lc3NhZ2UiLCJjcmVhdGVSdW5NZXNzYWdlIiwicHJvY2Vzc1J1bk1lc3NhZ2UiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImdlIiwiYWNjX3R5cGUiLCJ0aW1lb3V0IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIm5vZGVFcnJvciIsImNvZGUiLCJwaGFzZSIsIlRPTkNsaWVudEVycm9yIiwic291cmNlIiwiTk9ERSIsInRyYW5zYWN0aW9uX2lkIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJzdWNjZXNzIiwiZXhpdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCIsInJlc3VsdF9jb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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QUFNLENBQUM2TCxPQS9FcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBZ0ZrQmIsU0FBUyxDQUNYaEwsTUFBTSxDQUFDK0wsUUFBUCxHQUNNLDBDQUROLEdBRU8sQ0FBQy9MLE1BQU0sQ0FBQ2dNLEtBQVIsR0FBZ0IsNkJBQWhCLEdBQWdELHFCQUg1QyxFQUlYaE0sTUFBTSxDQUFDaU0sV0FBUCxJQUFzQixDQUpYLEVBS1hyTSx5QkFBeUIsQ0FBQ0ksTUFMZixDQWhGM0I7O0FBQUE7QUFBQSxrQkEwRlVnTCxTQUFTLENBQ1gscUJBRFcsRUFFWCxDQUFDLENBRlUsRUFHWHBMLHlCQUF5QixDQUFDSyxPQUhmLENBMUZuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUdBLElBQU0rSCxrQkFBa0IscWJBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdFRyYW5zYWN0aW9uRmVlcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZVxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IFRPTkNsaWVudCwgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcbmltcG9ydCB0cmFjaW5nLCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiBcImNvbXB1dGVWbVwiLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMlxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ2JhbGFuY2UnLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgaWYgKGFjY291bnRzICYmIGFjY291bnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5kZXBsb3knLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCBwYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvY1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvY1xuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBpZCA9IHBhcmFtcy5tZXNzYWdlSWQgfHxcbiAgICAgICAgICAgIChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnBvc3RSZXF1ZXN0cyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgIH0sIHJlc3VsdEZpZWxkcywgNDBfMDAwLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzTWVzc2FnZS4gdHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXMgPSB0cmFuc2FjdGlvbi5vdXRfbWVzc2FnZXM7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZXMgfHwgb3V0cHV0TWVzc2FnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwsIHRyYW5zYWN0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IG91dHB1dE1lc3NhZ2VzLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4Lm1zZ190eXBlID09PSBRTWVzc2FnZVR5cGUuZXh0T3V0O1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gQmVmb3JlIG1lc3NhZ2VzIHBhcnNlJyk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbE1lc3NhZ2VzLm1hcCgoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHtcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICAgICAgYm9keUJhc2U2NDogeC5ib2R5IHx8ICcnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgcmVzdWx0T3V0cHV0ID0gb3V0cHV0cy5maW5kKCh4OiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5mdW5jdGlvbi50b0xvd2VyQ2FzZSgpID09PSBwYXJhbXMuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlTG9jYWwoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZlZSBjYWxjdWxhdGlvblxuXG4gICAgYmlnQmFsYW5jZSA9IFwiMHgxMDAwMDAwMDAwMDAwMFwiO1xuXG4gICAgYXN5bmMgY2FsY1J1bkZlZXMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5mZWUnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGNhbGNEZXBsb3lGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY0RlcGxveUZlZVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjRGVwbG95RmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGNNc2dQcm9jZXNzRmVlcyh7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBlbXVsYXRlQmFsYW5jZTogcGFyYW1zLmVtdWxhdGVCYWxhbmNlLFxuICAgICAgICAgICAgbmV3QWNjb3VudDogcGFyYW1zLm5ld0FjY291bnRcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNNc2dQcm9jZXNzRmVlcycsIHBhcmFtcyk7XG5cbiAgICAgICAgbGV0IGFjY291bnQ6IFFBY2NvdW50ID0ge1xuICAgICAgICAgICAgYmFsYW5jZTogdGhpcy5iaWdCYWxhbmNlLFxuICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbGFzdF9wYWlkOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghcGFyYW1zLm5ld0FjY291bnQpIHtcbiAgICAgICAgICAgIGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIGZhbHNlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGRyZXNzIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGNvbnZlcnRBZGRyZXNzKHBhcmFtczogVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcIkRlcGxveSBzdGFydFwiKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGVwbG95TWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKFwiUnVuIHN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSdW5NZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaWx0ZXI6IHsgW3N0cmluZ106IGFueSB9ID0ge1xuICAgICAgICAgICAgaWQ6IHsgZXE6IGFkZHJlc3MgfVxuICAgICAgICB9O1xuICAgICAgICBpZiAod2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQpIHtcbiAgICAgICAgICAgIGZpbHRlci5sYXN0X3RyYW5zX2x0ID0geyBnZTogd2FpdFBhcmFtcy50cmFuc2FjdGlvbkx0IH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgZmlsdGVyLmFjY190eXBlID0geyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKFwiZ2V0QWNjb3VudC4gRmlsdGVyXCIsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZyhcImdldEFjY291bnQuIEFjY291bnQgcmVjaWV2ZWRcIiwgYWNjb3VudCk7XG4gICAgICAgIHJldHVybiBhY2NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24pIHtcbiAgICBpZiAoIXRyYW5zYWN0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vZGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgcGhhc2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYCR7bWVzc2FnZX0gKCR7Y29kZX0pIGF0ICR7cGhhc2V9YCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl9pZDogdHJhbnNhY3Rpb24uaWRcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLnN0b3JhZ2U7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc3RvcmFnZS5zdGF0dXNfY2hhbmdlO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5mcm96ZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZnJvemVuIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmZyb3plbixcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5iYWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIGJhZCBzdGF0ZTogZnJvemVuIG9yIGRlbGV0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5iYWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub0dhcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUudm0pIHtcbiAgICAgICAgICAgIGlmICghY29tcHV0ZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVk0gdGVybWluYXRlZCB3aXRoIGV4Y2VwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGUuZXhpdF9jb2RlIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUgfHwgMCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgJ1RyYW5zYWN0aW9uIGFib3J0ZWQnLFxuICAgICAgICAtMSxcbiAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duXG4gICAgKTtcbn1cblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgaW5fbXNnXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIGluX21zZ1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgbHRcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgICB9XG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgbXNnX3R5cGVcbiAgICAgICAgYm9keVxuICAgIH1cbiAgIGA7XG4iXX0=