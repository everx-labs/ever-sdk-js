"use strict";

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
var _require = require('opentracing'),
    FORMAT_TEXT_MAP = _require.FORMAT_TEXT_MAP;

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
      _regenerator["default"].mark(function _callee2(params) {
        var span, accounts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                span = this.config.tracer.startSpan('TONContractsModule.js:load');
                _context2.next = 3;
                return this.queries.accounts.query({
                  id: {
                    eq: params.address
                  }
                }, 'balance', span);

              case 3:
                accounts = _context2.sent;

                if (!(accounts && accounts.length > 0)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return span.finish();

              case 7:
                return _context2.abrupt("return", {
                  id: params.address,
                  balanceGrams: accounts[0].balance
                });

              case 8:
                _context2.next = 10;
                return span.finish();

              case 10:
                return _context2.abrupt("return", {
                  id: null,
                  balanceGrams: null
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }() // Facade functions

  }, {
    key: "deploy",
    value: function () {
      var _deploy = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(params) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", this.internalDeployJs(params));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deploy(_x2) {
        return _deploy.apply(this, arguments);
      }

      return deploy;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(params) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.internalRunJs(params));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function run(_x3) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "runLocal",
    value: function () {
      var _runLocal = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(params) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.internalRunLocalJs(params));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function runLocal(_x4) {
        return _runLocal.apply(this, arguments);
      }

      return runLocal;
    }() // Message creation

  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(params) {
        var message;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context6.next = 3;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 3:
                message = _context6.sent;
                return _context6.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageBodyBase64: message.messageBodyBase64
                  },
                  address: message.address
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function createDeployMessage(_x5) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(params) {
        var message;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.config.log('createRunMessage', params);
                _context7.next = 3;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 3:
                message = _context7.sent;
                return _context7.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function createRunMessage(_x6) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(params) {
        var result;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.requestCore('contracts.deploy.encode_unsigned_message', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  publicKeyHex: params.keyPair["public"],
                  workchainId: params.workchainId
                });

              case 2:
                result = _context8.sent;
                return _context8.abrupt("return", {
                  address: result.addressHex,
                  signParams: result.encoded
                });

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function createUnsignedDeployMessage(_x7) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(params) {
        var signParams;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input
                });

              case 2:
                signParams = _context9.sent;
                return _context9.abrupt("return", {
                  abi: params.abi,
                  functionName: params.functionName,
                  signParams: signParams
                });

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createUnsignedRunMessage(_x8) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(params) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.requestCore('contracts.encode_message_with_sign', params));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function createSignedMessage(_x9) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(params) {
        var message;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.createSignedMessage(params.createSignedParams);

              case 2:
                message = _context11.sent;
                return _context11.abrupt("return", {
                  address: params.address,
                  message: message
                });

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function createSignedDeployMessage(_x10) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(params) {
        var message;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.createSignedMessage(params.createSignedParams);

              case 2:
                message = _context12.sent;
                return _context12.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createSignedRunMessage(_x11) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.requestCore('contracts.image.code', params));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getCodeFromImage(_x12) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.requestCore('contracts.deploy.data', params));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getDeployData(_x13) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.requestCore('contracts.run.body', params));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createRunBody(_x14) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.requestCore('contracts.function.id', params));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getFunctionId(_x15) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.requestCore('contracts.boc.hash', params));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getBocHash(_x16) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function decodeRunOutput(_x17) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function decodeInputMessageBody(_x18) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function decodeOutputMessageBody(_x19) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessageRest",
    value: function () {
      var _sendMessageRest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params, rootSpan) {
        var clientPlatform, span, fetch, url, id, idBase64, tracerHeaders, response;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context21.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.clientDoesNotConfigured();

              case 3:
                _context21.next = 5;
                return this.config.tracer.startSpan('TONContractsModule.js:sendMessageRest', {
                  childOf: rootSpan
                });

              case 5:
                span = _context21.sent;
                fetch = clientPlatform.fetch;
                url = this.config.requestsUrl();
                _context21.t0 = params.messageId;

                if (_context21.t0) {
                  _context21.next = 13;
                  break;
                }

                _context21.next = 12;
                return this.getBocHash({
                  bocBase64: params.messageBodyBase64
                });

              case 12:
                _context21.t0 = _context21.sent.hash;

              case 13:
                id = _context21.t0;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                tracerHeaders = this.config.tracer.inject(span, FORMAT_TEXT_MAP, {
                  'Content-Type': 'application/json'
                });
                _context21.next = 18;
                return fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  credentials: 'same-origin',
                  tracerHeaders: tracerHeaders,
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  redirect: 'follow',
                  referrer: 'no-referrer',
                  body: JSON.stringify({
                    records: [{
                      key: idBase64,
                      value: params.messageBodyBase64
                    }]
                  })
                });

              case 18:
                response = _context21.sent;
                this.config.log('sendMessageRest. request posted');

                if (!(response.status !== 200)) {
                  _context21.next = 30;
                  break;
                }

                _context21.next = 23;
                return span.log({
                  event: 'send node request',
                  value: 'failed'
                });

              case 23:
                _context21.next = 25;
                return span.finish();

              case 25:
                _context21.t1 = _TONClient.TONClientError;
                _context21.next = 28;
                return response.text();

              case 28:
                _context21.t2 = _context21.sent;
                throw _context21.t1.sendNodeRequestFailed.call(_context21.t1, _context21.t2);

              case 30:
                _context21.next = 32;
                return span.finish();

              case 32:
                return _context21.abrupt("return", id);

              case 33:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function sendMessageRest(_x20, _x21) {
        return _sendMessageRest.apply(this, arguments);
      }

      return sendMessageRest;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
        var id, idBase64, span;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.t0 = params.messageId;

                if (_context22.t0) {
                  _context22.next = 5;
                  break;
                }

                _context22.next = 4;
                return this.getBocHash({
                  bocBase64: params.messageBodyBase64
                });

              case 4:
                _context22.t0 = _context22.sent.hash;

              case 5:
                id = _context22.t0;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context22.next = 9;
                return this.config.tracer.startSpan('TONContractsModule.js:sendMessage');

              case 9:
                span = _context22.sent;
                _context22.next = 12;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], span);

              case 12:
                this.config.log('sendMessage. Request posted');
                _context22.next = 15;
                return span.finish();

              case 15:
                return _context22.abrupt("return", id);

              case 16:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function sendMessage(_x22) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(message, resultFields) {
        var transaction, span, retry, messageId, transactionNow;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                transaction = null;
                _context23.next = 3;
                return this.config.tracer.startSpan('TONContractsModule.js:processMessage');

              case 3:
                span = _context23.sent;
                retry = true;

              case 5:
                if (!retry) {
                  _context23.next = 28;
                  break;
                }

                retry = false;
                this.config.log('processMessage. Before send');
                _context23.next = 10;
                return this.sendMessage(message, span);

              case 10:
                messageId = _context23.sent;
                this.config.log('processMessage. After send');
                _context23.prev = 12;
                _context23.next = 15;
                return this.queries.transactions.waitFor({
                  in_msg: {
                    eq: messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, 40000);

              case 15:
                transaction = _context23.sent;
                _context23.next = 26;
                break;

              case 18:
                _context23.prev = 18;
                _context23.t0 = _context23["catch"](12);

                if (!(_context23.t0.code && _context23.t0.code === _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT)) {
                  _context23.next = 25;
                  break;
                }

                this.config.log('processMessage. Timeout, retrying...');
                retry = true;
                _context23.next = 26;
                break;

              case 25:
                throw _context23.t0;

              case 26:
                _context23.next = 5;
                break;

              case 28:
                if (transaction) {
                  _context23.next = 30;
                  break;
                }

                throw _TONClient.TONClientError.internalError('transaction is null');

              case 30:
                transactionNow = transaction.now || 0;
                this.config.log('processMessage. transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                return _context23.abrupt("return", transaction);

              case 33:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this, [[12, 18]]);
      }));

      function processMessage(_x23, _x24) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        var transaction;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context24.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context24.sent;
                _context24.next = 6;
                return checkTransaction(transaction);

              case 6:
                this.config.log('processDeployMessage. End');
                return _context24.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false,
                  transaction: transaction
                });

              case 8:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function processDeployMessage(_x25) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(params) {
        var _this2 = this;

        var transaction, outputMessages, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context25.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context25.sent;
                _context25.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessages = transaction.out_messages;

                if (!(!outputMessages || outputMessages.length === 0)) {
                  _context25.next = 9;
                  break;
                }

                return _context25.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                externalMessages = outputMessages.filter(function (x) {
                  return x.msg_type === QMessageType.extOut;
                });
                this.config.log('processRunMessage. Before messages parse');
                _context25.next = 13;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body || ''
                  });
                }));

              case 13:
                outputs = _context25.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                this.config.log('processRunMessage. End');
                return _context25.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 17:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function processRunMessage(_x26) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(params, waitParams) {
        var account;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context26.next = 3;
                return this.getAccount(params.address, true, waitParams);

              case 3:
                account = _context26.sent;
                return _context26.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function processRunMessageLocal(_x27, _x28) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params) {
        var account;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context27.next = 3;
                return this.getAccount(params.address, true, params.waitParams);

              case 3:
                account = _context27.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context27.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function calcRunFees(_x29) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params) {
        var message;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context28.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context28.sent;
                return _context28.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }));

              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function calcDeployFees(_x30) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(params) {
        var account;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context29.next = 6;
                  break;
                }

                _context29.next = 5;
                return this.getAccount(params.address, false, params.waitParams);

              case 5:
                account = _context29.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context29.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function calcMsgProcessFees(_x31) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee30(params) {
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                return _context30.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function convertAddress(_x32) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee31(params) {
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function internalDeployNative(_x33) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee32(params) {
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context32.abrupt("return", _context32.sent);

              case 3:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function internalRunNative(_x34) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee33(params) {
        var message;
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                this.config.log("Deploy start");
                _context33.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context33.sent;
                return _context33.abrupt("return", this.processDeployMessage(message));

              case 5:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function internalDeployJs(_x35) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee34(params) {
        var message;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                this.config.log("Run start");
                _context34.next = 3;
                return this.createRunMessage(params);

              case 3:
                message = _context34.sent;
                return _context34.abrupt("return", this.processRunMessage(message));

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function internalRunJs(_x36) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee35(address, active, waitParams) {
        var removeTypeName, filter, account;
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                removeTypeName = function _ref(obj) {
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
                _context35.next = 7;
                return this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout);

              case 7:
                account = _context35.sent;
                removeTypeName(account);
                this.config.log("getAccount. Account recieved", account);
                return _context35.abrupt("return", account);

              case 11:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function getAccount(_x37, _x38, _x39) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee36(params) {
        var account;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return this.getAccount(params.address, true, params.waitParams);

              case 2:
                account = _context36.sent;
                return _context36.abrupt("return", this.requestCore('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function internalRunLocalJs(_x40) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x41) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee37(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee37$(_context37) {
      while (1) {
        switch (_context37.prev = _context37.next) {
          case 0:
            nodeError = function _ref2(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context37.next = 3;
              break;
            }

            return _context37.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context37.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context37.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context37.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context37.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context37.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context37.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context37.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context37.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context37.next = 24;
              break;
            }

            if (compute.success) {
              _context37.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context37.next = 28;
              break;
            }

            if (action.success) {
              _context37.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context37.stop();
        }
      }
    }, _callee37);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n    }\n    out_messages {\n        id\n        msg_type\n        body\n    }\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRk9STUFUX1RFWFRfTUFQIiwiVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQiLCJBY2NvdW50SWQiLCJIZXgiLCJCYXNlNjQiLCJUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlIiwic3RvcmFnZSIsImNvbXB1dGVTa2lwcGVkIiwiY29tcHV0ZVZtIiwiYWN0aW9uIiwidW5rbm93biIsIlRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzIiwibm9TdGF0ZSIsImJhZFN0YXRlIiwibm9HYXMiLCJUT05DbGllbnRTdG9yYWdlU3RhdHVzIiwidW5jaGFuZ2VkIiwiZnJvemVuIiwiZGVsZXRlZCIsIlFJbk1zZ1R5cGUiLCJleHRlcm5hbCIsImlociIsImltbWVkaWF0ZWx5IiwidHJhbnNpdCIsImRpc2NhcmRlZEZpbmFsIiwiZGlzY2FyZGVkVHJhbnNpdCIsIlFPdXRNc2dUeXBlIiwib3V0TXNnTmV3IiwiZGVxdWV1ZUltbWVkaWF0ZWx5IiwiZGVxdWV1ZSIsInRyYW5zaXRSZXF1aXJlZCIsIm5vbmUiLCJRTWVzc2FnZVR5cGUiLCJpbnRlcm5hbCIsImV4dEluIiwiZXh0T3V0IiwiUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzIiwicXVldWVkIiwicHJvY2Vzc2luZyIsInByZWxpbWluYXJ5IiwicHJvcG9zZWQiLCJmaW5hbGl6ZWQiLCJyZWZ1c2VkIiwidHJhbnNpdGluZyIsIlFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMiLCJRU3BsaXRUeXBlIiwic3BsaXQiLCJtZXJnZSIsIlFBY2NvdW50VHlwZSIsInVuaW5pdCIsImFjdGl2ZSIsIlFUcmFuc2FjdGlvblR5cGUiLCJvcmRpbmFyeSIsInRpY2siLCJ0b2NrIiwic3BsaXRQcmVwYXJlIiwic3BsaXRJbnN0YWxsIiwibWVyZ2VQcmVwYXJlIiwibWVyZ2VJbnN0YWxsIiwiUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyIsIlFBY2NvdW50U3RhdHVzIiwibm9uRXhpc3QiLCJRQWNjb3VudFN0YXR1c0NoYW5nZSIsIlFDb21wdXRlVHlwZSIsInNraXBwZWQiLCJ2bSIsIlFTa2lwUmVhc29uIiwiUUJvdW5jZVR5cGUiLCJuZWdGdW5kcyIsIm5vRnVuZHMiLCJvayIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsInNwYW4iLCJ0cmFjZXIiLCJzdGFydFNwYW4iLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJmaW5pc2giLCJiYWxhbmNlR3JhbXMiLCJiYWxhbmNlIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJsb2ciLCJyZXF1ZXN0Q29yZSIsImFiaSIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJyZXN1bHQiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwiY3JlYXRlU2lnbmVkUGFyYW1zIiwicm9vdFNwYW4iLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsIlRPTkNsaWVudEVycm9yIiwiY2xpZW50RG9lc05vdENvbmZpZ3VyZWQiLCJjaGlsZE9mIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJ0cmFjZXJIZWFkZXJzIiwiaW5qZWN0IiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZWZlcnJlciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVjb3JkcyIsImtleSIsInZhbHVlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJldmVudCIsInRleHQiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJwb3N0UmVxdWVzdHMiLCJyZXN1bHRGaWVsZHMiLCJ0cmFuc2FjdGlvbiIsInJldHJ5Iiwic2VuZE1lc3NhZ2UiLCJ0cmFuc2FjdGlvbnMiLCJ3YWl0Rm9yIiwiaW5fbXNnIiwiY29kZSIsIldBSVRfRk9SX1RJTUVPVVQiLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25Ob3ciLCJub3ciLCJibG9ja19pZCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwiY2hlY2tUcmFuc2FjdGlvbiIsImFscmVhZHlEZXBsb3llZCIsIm91dHB1dE1lc3NhZ2VzIiwib3V0X21lc3NhZ2VzIiwib3V0cHV0IiwiZXh0ZXJuYWxNZXNzYWdlcyIsImZpbHRlciIsIngiLCJtc2dfdHlwZSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJkZWNvZGVPdXRwdXRNZXNzYWdlQm9keSIsImJvZHlCYXNlNjQiLCJvdXRwdXRzIiwicmVzdWx0T3V0cHV0IiwiZmluZCIsInRvTG93ZXJDYXNlIiwid2FpdFBhcmFtcyIsImdldEFjY291bnQiLCJhY2NvdW50IiwibWVzc2FnZUJhc2U2NCIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiTWF0aCIsImZsb29yIiwicHJvY2Vzc0RlcGxveU1lc3NhZ2UiLCJjcmVhdGVSdW5NZXNzYWdlIiwicHJvY2Vzc1J1bk1lc3NhZ2UiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJnZSIsImFjY190eXBlIiwidGltZW91dCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJub2RlRXJyb3IiLCJwaGFzZSIsInNvdXJjZSIsIk5PREUiLCJ0cmFuc2FjdGlvbl9pZCIsImFib3J0ZWQiLCJzdGF0dXNfY2hhbmdlIiwiY29tcHV0ZSIsImNvbXB1dGVfdHlwZSIsInJlYXNvbiIsInNraXBwZWRfcmVhc29uIiwic3VjY2VzcyIsImV4aXRfY29kZSIsIm5vX2Z1bmRzIiwidmFsaWQiLCJyZXN1bHRfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBL0RBOzs7Ozs7Ozs7Ozs7Ozs7ZUFnRTRCQSxPQUFPLENBQUMsYUFBRCxDO0lBQTNCQyxlLFlBQUFBLGU7O0FBRUQsSUFBTUMsdUJBQXVCLEdBQUc7QUFDbkNDLEVBQUFBLFNBQVMsRUFBRSxXQUR3QjtBQUVuQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRjhCO0FBR25DQyxFQUFBQSxNQUFNLEVBQUU7QUFIMkIsQ0FBaEM7O0FBTUEsSUFBTUMseUJBQXlCLEdBQUc7QUFDckNDLEVBQUFBLE9BQU8sRUFBRSxTQUQ0QjtBQUVyQ0MsRUFBQUEsY0FBYyxFQUFFLGdCQUZxQjtBQUdyQ0MsRUFBQUEsU0FBUyxFQUFFLFdBSDBCO0FBSXJDQyxFQUFBQSxNQUFNLEVBQUUsUUFKNkI7QUFLckNDLEVBQUFBLE9BQU8sRUFBRTtBQUw0QixDQUFsQzs7QUFRQSxJQUFNQyw2QkFBNkIsR0FBRztBQUN6Q0MsRUFBQUEsT0FBTyxFQUFFLENBRGdDO0FBRXpDQyxFQUFBQSxRQUFRLEVBQUUsQ0FGK0I7QUFHekNDLEVBQUFBLEtBQUssRUFBRTtBQUhrQyxDQUF0Qzs7QUFNQSxJQUFNQyxzQkFBc0IsR0FBRztBQUNsQ0MsRUFBQUEsU0FBUyxFQUFFLENBRHVCO0FBRWxDQyxFQUFB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Rm5CLEVBR1hULHlCQUF5QixDQUFDRSxjQUhmLENBdEQvQjs7QUFBQTtBQUFBLGtCQTREa0IrTSxTQUFTLENBQ1gseUNBRFcsRUFFWCxDQUFDLENBRlUsRUFHWGpOLHlCQUF5QixDQUFDRSxjQUhmLENBNUQzQjs7QUFBQTtBQUFBLGtCQWtFWXNOLE9BQU8sQ0FBQ0MsWUFBUixLQUF5Qi9KLFlBQVksQ0FBQ0UsRUFsRWxEO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdCQW1FaUI0SixPQUFPLENBQUNJLE9BbkV6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFvRXNCWCxTQUFTLENBQ1gsOEJBRFcsRUFFWE8sT0FBTyxDQUFDSyxTQUFSLElBQXFCLENBRlYsRUFHWDdOLHlCQUF5QixDQUFDRyxTQUhmLENBcEUvQjs7QUFBQTtBQTZFVUMsWUFBQUEsTUE3RVYsR0E2RW1CK0ksV0FBVyxDQUFDL0ksTUE3RS9COztBQUFBLGlCQThFUUEsTUE5RVI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsZ0JBK0VhQSxNQUFNLENBQUN3TixPQS9FcEI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBZ0ZrQlgsU0FBUyxDQUNYN00sTUFBTSxDQUFDME4sUUFBUCxHQUNNLDBDQUROLEdBRU8sQ0FBQzFOLE1BQU0sQ0FBQzJOLEtBQVIsR0FBZ0IsNkJBQWhCLEdBQWdELHFCQUg1QyxFQUlYM04sTUFBTSxDQUFDNE4sV0FBUCxJQUFzQixDQUpYLEVBS1hoTyx5QkFBeUIsQ0FBQ0ksTUFMZixDQWhGM0I7O0FBQUE7QUFBQSxrQkEwRlU2TSxTQUFTLENBQ1gscUJBRFcsRUFFWCxDQUFDLENBRlUsRUFHWGpOLHlCQUF5QixDQUFDSyxPQUhmLENBMUZuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUdBLElBQU02SixrQkFBa0IscWJBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gQGZsb3dcblxuaW1wb3J0IHR5cGUge1xuICAgIFFBY2NvdW50LFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RUcmFuc2FjdGlvbkZlZXMsXG4gICAgVE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1blJlc3VsdCxcbiAgICBUT05Db250cmFjdHMsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2Vcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5jb25zdCB7IEZPUk1BVF9URVhUX01BUCB9ID0gcmVxdWlyZSgnb3BlbnRyYWNpbmcnKTtcblxuZXhwb3J0IGNvbnN0IFRPTkFkZHJlc3NTdHJpbmdWYXJpYW50ID0ge1xuICAgIEFjY291bnRJZDogJ0FjY291bnRJZCcsXG4gICAgSGV4OiAnSGV4JyxcbiAgICBCYXNlNjQ6ICdCYXNlNjQnLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UgPSB7XG4gICAgc3RvcmFnZTogJ3N0b3JhZ2UnLFxuICAgIGNvbXB1dGVTa2lwcGVkOiAnY29tcHV0ZVNraXBwZWQnLFxuICAgIGNvbXB1dGVWbTogXCJjb21wdXRlVm1cIixcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJ1xufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDJcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMlxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTkNvbnRyYWN0c01vZHVsZS5qczpsb2FkJyk7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScsIHNwYW4pO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGJhbGFuY2VHcmFtczogYWNjb3VudHNbMF0uYmFsYW5jZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwocGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3NcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Qm9jSGFzaChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldEJvY0hhc2hQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmJvYy5oYXNoJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlUmVzdChwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSwgcm9vdFNwYW46IGFueSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzcGFuID0gYXdhaXQgdGhpcy5jb25maWcudHJhY2VyLnN0YXJ0U3BhbignVE9OQ29udHJhY3RzTW9kdWxlLmpzOnNlbmRNZXNzYWdlUmVzdCcsIHsgY2hpbGRPZjogcm9vdFNwYW4gfSk7XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCBpZCA9IHBhcmFtcy5tZXNzYWdlSWQgfHxcbiAgICAgICAgICAgIChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3QgdHJhY2VySGVhZGVycyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICB0cmFjZXJIZWFkZXJzLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGlkQmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3NlbmRNZXNzYWdlUmVzdC4gcmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICBhd2FpdCBzcGFuLmxvZyh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6ICdzZW5kIG5vZGUgcmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWlsZWQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBzcGFuLmZpbmlzaCgpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCBpZCA9IHBhcmFtcy5tZXNzYWdlSWQgfHxcbiAgICAgICAgICAgIChhd2FpdCB0aGlzLmdldEJvY0hhc2goe1xuICAgICAgICAgICAgICAgIGJvY0Jhc2U2NDogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgICAgICB9KSkuaGFzaDtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGF3YWl0IHRoaXMuY29uZmlnLnRyYWNlci5zdGFydFNwYW4oJ1RPTkNvbnRyYWN0c01vZHVsZS5qczpzZW5kTWVzc2FnZScpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLCBzcGFuKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgYXdhaXQgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLCByZXN1bHRGaWVsZHM6IHN0cmluZyk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBhd2FpdCB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05Db250cmFjdHNNb2R1bGUuanM6cHJvY2Vzc01lc3NhZ2UnKTtcbiAgICAgICAgbGV0IHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKHJldHJ5KSB7XG4gICAgICAgICAgICByZXRyeSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzTWVzc2FnZS4gQmVmb3JlIHNlbmQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgc3Bhbik7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NNZXNzYWdlLiBBZnRlciBzZW5kJyk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgIH0sIHJlc3VsdEZpZWxkcywgNDBfMDAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgJiYgZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIFRpbWVvdXQsIHJldHJ5aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcigndHJhbnNhY3Rpb24gaXMgbnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc01lc3NhZ2UuIHRyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbk5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uTm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlcyA9IHRyYW5zYWN0aW9uLm91dF9tZXNzYWdlcztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlcyB8fCBvdXRwdXRNZXNzYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCwgdHJhbnNhY3Rpb24gfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gb3V0cHV0TWVzc2FnZXMuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlLiBCZWZvcmUgbWVzc2FnZXMgcGFyc2UnKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHkgfHwgJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEVuZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSwgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbCcsIHBhcmFtcyk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgdHJ1ZSwgd2FpdFBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwubXNnJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZUJhc2U2NDogcGFyYW1zLm1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRmVlIGNhbGN1bGF0aW9uXG5cbiAgICBiaWdCYWxhbmNlID0gXCIweDEwMDAwMDAwMDAwMDAwXCI7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY1J1bkZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHBhcmFtcy53YWl0UGFyYW1zKTtcblxuICAgICAgICBpZiAocGFyYW1zLmVtdWxhdGVCYWxhbmNlKSB7XG4gICAgICAgICAgICBhY2NvdW50LmJhbGFuY2UgPSB0aGlzLmJpZ0JhbGFuY2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY0RlcGxveUZlZXMocGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjTXNnUHJvY2Vzc0ZlZXMocGFyYW1zOiBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RDYWxjRmVlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY2FsY01zZ1Byb2Nlc3NGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBsZXQgYWNjb3VudDogUUFjY291bnQgPSB7XG4gICAgICAgICAgICBiYWxhbmNlOiB0aGlzLmJpZ0JhbGFuY2UsXG4gICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBsYXN0X3BhaWQ6IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MocGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKFwiRGVwbG95IHN0YXJ0XCIpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coXCJSdW4gc3RhcnRcIik7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1J1bk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChhZGRyZXNzOiBzdHJpbmcsIGFjdGl2ZTogYm9vbCwgd2FpdFBhcmFtcz86IFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMpOiBQcm9taXNlPFFBY2NvdW50PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbHRlcjogeyBbc3RyaW5nXTogYW55IH0gPSB7XG4gICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coXCJnZXRBY2NvdW50LiBGaWx0ZXJcIiwgZmlsdGVyKTtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy53YWl0Rm9yKFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgJ2lkIGNvZGUgZGF0YSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudGltZW91dFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coXCJnZXRBY2NvdW50LiBBY2NvdW50IHJlY2lldmVkXCIsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zOiBUT05Db250cmFjdFJ1bkxvY2FsUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGAke21lc3NhZ2V9ICgke2NvZGV9KSBhdCAke3BoYXNlfWAsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhhc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW4sXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZGVsZXRlZCBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5kZWxldGVkLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGUgPSB0cmFuc2FjdGlvbi5jb21wdXRlO1xuICAgIGlmIChjb21wdXRlKSB7XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9HYXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBnYXMgdG8gZXhlY3V0ZSBWTScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vR2FzLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0cmFuc2FjdGlvbi5hY3Rpb247XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgYWN0aW9uLm5vX2Z1bmRzXG4gICAgICAgICAgICAgICAgICAgID8gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIDogKCFhY3Rpb24udmFsaWQgPyAnT3V0Ym91bmQgbWVzc2FnZSBpcyBpbnZhbGlkJyA6ICdBY3Rpb24gcGhhc2UgZmFpbGVkJyksXG4gICAgICAgICAgICAgICAgYWN0aW9uLnJlc3VsdF9jb2RlIHx8IDAsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5hY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93blxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICB9XG4gICBgO1xuIl19