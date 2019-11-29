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
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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
                }, 'balance');

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
                    messageIdBase64: message.messageIdBase64,
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
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                return _context17.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function decodeRunOutput(_x16) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                return _context18.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function decodeInputMessageBody(_x17) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function decodeOutputMessageBody(_x18) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessageRest",
    value: function () {
      var _sendMessageRest = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(params) {
        var clientPlatform, fetch, url, response;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context20.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.clientDoesNotConfigured();

              case 3:
                fetch = clientPlatform.fetch;
                url = this.config.requestsUrl();
                _context20.next = 7;
                return fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  cache: 'no-cache',
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  redirect: 'follow',
                  referrer: 'no-referrer',
                  body: JSON.stringify({
                    records: [{
                      key: params.messageIdBase64,
                      value: params.messageBodyBase64
                    }]
                  })
                });

              case 7:
                response = _context20.sent;
                this.config.log('request posted');

                if (!(response.status !== 200)) {
                  _context20.next = 15;
                  break;
                }

                _context20.t0 = _TONClient.TONClientError;
                _context20.next = 13;
                return response.text();

              case 13:
                _context20.t1 = _context20.sent;
                throw _context20.t0.sendNodeRequestFailed.call(_context20.t0, _context20.t1);

              case 15:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function sendMessageRest(_x19) {
        return _sendMessageRest.apply(this, arguments);
      }

      return sendMessageRest;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.queries.postRequests([{
                  id: params.messageIdBase64,
                  body: params.messageBodyBase64
                }]);

              case 2:
                this.config.log('request posted');

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function sendMessage(_x20) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(message, resultFields) {
        var transaction, retry;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                transaction = null;
                retry = true;

              case 2:
                if (!retry) {
                  _context22.next = 22;
                  break;
                }

                retry = false;
                _context22.next = 6;
                return this.sendMessageRest(message);

              case 6:
                _context22.prev = 6;
                _context22.next = 9;
                return this.queries.transactions.waitFor({
                  in_msg: {
                    eq: message.messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, 10000);

              case 9:
                transaction = _context22.sent;
                _context22.next = 20;
                break;

              case 12:
                _context22.prev = 12;
                _context22.t0 = _context22["catch"](6);

                if (!(_context22.t0.code && _context22.t0.code === _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT)) {
                  _context22.next = 19;
                  break;
                }

                this.config.log('Timeout, retrying...');
                retry = true;
                _context22.next = 20;
                break;

              case 19:
                throw _context22.t0;

              case 20:
                _context22.next = 2;
                break;

              case 22:
                if (transaction) {
                  _context22.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.internalError('transaction is null');

              case 24:
                this.config.log('transaction received', {
                  id: transaction.id,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transaction.now * 1000).toISOString(), " (").concat(transaction.now, ")")
                });
                return _context22.abrupt("return", transaction);

              case 26:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this, [[6, 12]]);
      }));

      function processMessage(_x21, _x22) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
        var transaction;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context23.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context23.sent;
                _context23.next = 6;
                return checkTransaction(transaction);

              case 6:
                _context23.next = 8;
                return this.queries.accounts.waitFor({
                  id: {
                    eq: params.address
                  },
                  acc_type: {
                    eq: QAccountType.active
                  }
                }, 'id');

              case 8:
                return _context23.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false
                });

              case 9:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function processDeployMessage(_x23) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        var _this2 = this;

        var transaction, outputMessageIds, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context24.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context24.sent;
                _context24.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context24.next = 9;
                  break;
                }

                return _context24.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                _context24.next = 11;
                return Promise.all(outputMessageIds.map(function (id) {
                  return _this2.queries.messages.waitFor({
                    id: {
                      eq: id
                    },
                    status: {
                      eq: QMessageProcessingStatus.finalized
                    }
                  }, 'body msg_type');
                }));

              case 11:
                _context24.t0 = function (x) {
                  return x.msg_type === QMessageType.extOut;
                };

                externalMessages = _context24.sent.filter(_context24.t0);
                _context24.next = 15;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body
                  });
                }));

              case 15:
                outputs = _context24.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                return _context24.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 18:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function processRunMessage(_x24) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function convertAddress(_x25) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(params) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function internalDeployNative(_x26) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params) {
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context27.abrupt("return", _context27.sent);

              case 3:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function internalRunNative(_x27) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params) {
        var message;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context28.sent;
                return _context28.abrupt("return", this.processDeployMessage(message));

              case 4:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function internalDeployJs(_x28) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(params) {
        var message;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context29.sent;
                return _context29.abrupt("return", this.processRunMessage(message));

              case 4:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      function internalRunJs(_x29) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee30(params) {
        var removeTypeName, account;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
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

                _context30.next = 3;
                return this.queries.accounts.waitFor({
                  id: {
                    eq: params.address
                  },
                  acc_type: {
                    eq: QAccountType.active
                  }
                }, 'code data');

              case 3:
                account = _context30.sent;
                removeTypeName(account);
                return _context30.abrupt("return", this.requestCore('contracts.run.local', {
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

      function internalRunLocalJs(_x30) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x31) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee31(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) {
        switch (_context31.prev = _context31.next) {
          case 0:
            nodeError = function _ref2(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context31.next = 3;
              break;
            }

            return _context31.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context31.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context31.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context31.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context31.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context31.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context31.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context31.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context31.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context31.next = 24;
              break;
            }

            if (compute.success) {
              _context31.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context31.next = 28;
              break;
            }

            if (action.success) {
              _context31.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context31.stop();
        }
      }
    }, _callee31);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    tr_type\n    status\n    out_msgs\n    block_id\n    now\n    aborted\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n  \t}\n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwiYWNjb3VudHMiLCJxdWVyeSIsImlkIiwiZXEiLCJhZGRyZXNzIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwibG9nIiwicmVxdWVzdENvcmUiLCJhYmkiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlSWRCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiVE9OQ2xpZW50RXJyb3IiLCJjbGllbnREb2VzTm90Q29uZmlndXJlZCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwidmFsdWUiLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJwb3N0UmVxdWVzdHMiLCJyZXN1bHRGaWVsZHMiLCJ0cmFuc2FjdGlvbiIsInJldHJ5Iiwic2VuZE1lc3NhZ2VSZXN0IiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsImluX21zZyIsImNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwiaW50ZXJuYWxFcnJvciIsImJsb2NrX2lkIiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHJvY2Vzc01lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJjaGVja1RyYW5zYWN0aW9uIiwiYWNjX3R5cGUiLCJhbHJlYWR5RGVwbG95ZWQiLCJvdXRwdXRNZXNzYWdlSWRzIiwib3V0X21zZ3MiLCJvdXRwdXQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwibWVzc2FnZXMiLCJ4IiwibXNnX3R5cGUiLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIm5vZGVFcnJvciIsInBoYXNlIiwic291cmNlIiwiTk9ERSIsInRyYW5zYWN0aW9uX2lkIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJzdWNjZXNzIiwiZXhpdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCIsInJlc3VsdF9jb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTs7QUFDQTs7QUFD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LENBQUMsQ0FGVSxFQUdYcEwseUJBQXlCLENBQUNLLE9BSGYsQ0ExRm5COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFpR0EsSUFBTTZJLGtCQUFrQiw4VUFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDJcbn07XG5cbmV4cG9ydCBjb25zdCBRSW5Nc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGlocjogMSxcbiAgICBpbW1lZGlhdGVseTogMixcbiAgICBmaW5hbDogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRpc2NhcmRlZEZpbmFsOiA1LFxuICAgIGRpc2NhcmRlZFRyYW5zaXQ6IDYsXG59O1xuXG5leHBvcnQgY29uc3QgUU91dE1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaW1tZWRpYXRlbHk6IDEsXG4gICAgb3V0TXNnTmV3OiAyLFxuICAgIHRyYW5zaXQ6IDMsXG4gICAgZGVxdWV1ZUltbWVkaWF0ZWx5OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxuICAgIG5vbmU6IC0xLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQmxvY2tQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJvcG9zZWQ6IDEsXG4gICAgZmluYWxpemVkOiAyLFxuICAgIHJlZnVzZWQ6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUVNwbGl0VHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIHNwbGl0OiAyLFxuICAgIG1lcmdlOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXMgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG4gICAgbm9uRXhpc3Q6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTa2lwUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUJvdW5jZVR5cGUgPSB7XG4gICAgbmVnRnVuZHM6IDAsXG4gICAgbm9GdW5kczogMSxcbiAgICBvazogMixcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ29udHJhY3RzTW9kdWxlIGV4dGVuZHMgVE9OTW9kdWxlIGltcGxlbWVudHMgVE9OQ29udHJhY3RzIHtcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcblxuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZChwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICB9LCAnYmFsYW5jZScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2VSZXN0KHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xpZW50RG9lc05vdENvbmZpZ3VyZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGZldGNoIH0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcucmVxdWVzdHNVcmwoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwYXJhbXMubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3JlcXVlc3QgcG9zdGVkJyk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKGF3YWl0IHJlc3BvbnNlLnRleHQoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3JlcXVlc3QgcG9zdGVkJyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsIHJlc3VsdEZpZWxkczogc3RyaW5nKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKHJldHJ5KSB7XG4gICAgICAgICAgICByZXRyeSA9IGZhbHNlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZVJlc3QobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0RmllbGRzLCAxMF8wMDApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdUaW1lb3V0LCByZXRyeWluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICByZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ3RyYW5zYWN0aW9uIGlzIG51bGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3RyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbi5ub3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbi5ub3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9XG4gICAgICAgIH0sICdpZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VJZHMgPSB0cmFuc2FjdGlvbi5vdXRfbXNncztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlSWRzIHx8IG91dHB1dE1lc3NhZ2VJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwsIHRyYW5zYWN0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IChhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IG1zZ190eXBlJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MocGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGVwbG95TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29kZSBkYXRhJ1xuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24pIHtcbiAgICBpZiAoIXRyYW5zYWN0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vZGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgcGhhc2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYCR7bWVzc2FnZX0gKCR7Y29kZX0pIGF0ICR7cGhhc2V9YCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl9pZDogdHJhbnNhY3Rpb24uaWRcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLnN0b3JhZ2U7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc3RvcmFnZS5zdGF0dXNfY2hhbmdlO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5mcm96ZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZnJvemVuIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmZyb3plbixcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5iYWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIGJhZCBzdGF0ZTogZnJvemVuIG9yIGRlbGV0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5iYWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcFJlYXNvbi5ub0dhcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUudm0pIHtcbiAgICAgICAgICAgIGlmICghY29tcHV0ZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnVk0gdGVybWluYXRlZCB3aXRoIGV4Y2VwdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGUuZXhpdF9jb2RlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSB0cmFuc2FjdGlvbi5hY3Rpb247XG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgICBpZiAoIWFjdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgYWN0aW9uLm5vX2Z1bmRzXG4gICAgICAgICAgICAgICAgICAgID8gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIDogKCFhY3Rpb24udmFsaWQgPyAnT3V0Ym91bmQgbWVzc2FnZSBpcyBpbnZhbGlkJyA6ICdBY3Rpb24gcGhhc2UgZmFpbGVkJyksXG4gICAgICAgICAgICAgICAgYWN0aW9uLnJlc3VsdF9jb2RlLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAnVHJhbnNhY3Rpb24gYWJvcnRlZCcsXG4gICAgICAgIC0xLFxuICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnVua25vd25cbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICB0cl90eXBlXG4gICAgc3RhdHVzXG4gICAgb3V0X21zZ3NcbiAgICBibG9ja19pZFxuICAgIG5vd1xuICAgIGFib3J0ZWRcbiAgICBzdG9yYWdlIHtcbiAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgIH1cbiAgICBjb21wdXRlIHtcbiAgICAgICAgY29tcHV0ZV90eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgXHR9XG4gICBgO1xuIl19