"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports["default"] = exports.QOutMsgType = exports.QInMsgType = exports.QBounceType = exports.QComputeType = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QMessageProcessingStatus = exports.QMessageType = exports.QAccountType = exports.QSkipReason = exports.QAccountStatusChange = exports.QAccountStatus = exports.TONAddressStringVariant = void 0;

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
var QAccountStatus = {
  uninit: 0,
  frozen: 1,
  active: 2,
  nonExist: 3
};
exports.QAccountStatus = QAccountStatus;
var QAccountStatusChange = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
exports.QAccountStatusChange = QAccountStatusChange;
var QSkipReason = {
  noState: 0,
  badState: 1,
  noGas: 2
};
exports.QSkipReason = QSkipReason;
var QAccountType = {
  uninit: 0,
  active: 1,
  frozen: 2
};
exports.QAccountType = QAccountType;
var QMessageType = {
  internal: 0,
  extIn: 2,
  extOut: 3
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
var QComputeType = {
  skipped: 0,
  vm: 1
};
exports.QComputeType = QComputeType;
var QBounceType = {
  negFunds: 0,
  noFunds: 1,
  ok: 2
};
exports.QBounceType = QBounceType;
var QInMsgType = {
  external: 0,
  ihr: 1,
  immediatelly: 2,
  "final": 3,
  transit: 4,
  discardedFinal: 5,
  discardedTransit: 6
};
exports.QInMsgType = QInMsgType;
var QOutMsgType = {
  none: 0,
  external: 1,
  immediately: 2,
  outMsgNew: 3,
  transit: 4,
  dequeue: 5,
  transitRequired: 6
};
exports.QOutMsgType = QOutMsgType;

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
                return this.requestLibrary('contracts.deploy.message', {
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
                return this.requestLibrary('contracts.run.message', {
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
                return this.requestLibrary('contracts.deploy.encode_unsigned_message', {
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
                return this.requestLibrary('contracts.run.encode_unsigned_message', {
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
                return _context10.abrupt("return", this.requestLibrary('contracts.encode_message_with_sign', params));

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
                return _context13.abrupt("return", this.requestLibrary('contracts.image.code', params));

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
                return _context14.abrupt("return", this.requestLibrary('contracts.deploy.data', params));

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
                return _context15.abrupt("return", this.requestLibrary('contracts.run.body', params));

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
                return _context16.abrupt("return", this.requestLibrary('contracts.function.id', params));

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
                return _context17.abrupt("return", this.requestLibrary('contracts.run.output', params));

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
                return _context18.abrupt("return", this.requestLibrary('contracts.run.unknown.input', params));

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
                return _context19.abrupt("return", this.requestLibrary('contracts.run.unknown.output', params));

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
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
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

      function sendMessage(_x19) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(message, resultFields) {
        var transaction, retry;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                transaction = null;
                retry = true;

              case 2:
                if (!retry) {
                  _context21.next = 22;
                  break;
                }

                retry = false;
                _context21.next = 6;
                return this.sendMessage(message);

              case 6:
                _context21.prev = 6;
                _context21.next = 9;
                return this.queries.transactions.waitFor({
                  in_msg: {
                    eq: message.messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                }, resultFields, 10000);

              case 9:
                transaction = _context21.sent;
                _context21.next = 20;
                break;

              case 12:
                _context21.prev = 12;
                _context21.t0 = _context21["catch"](6);

                if (!(_context21.t0.code && _context21.t0.code === _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT)) {
                  _context21.next = 19;
                  break;
                }

                this.config.log('Timeout, retrying...');
                retry = true;
                _context21.next = 20;
                break;

              case 19:
                throw _context21.t0;

              case 20:
                _context21.next = 2;
                break;

              case 22:
                if (transaction) {
                  _context21.next = 24;
                  break;
                }

                throw _TONClient.TONClientError.internalError('transaction is null');

              case 24:
                this.config.log('transaction received', {
                  id: message.messageId,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transaction.now * 1000).toISOString(), " (").concat(transaction.now, ")")
                });
                return _context21.abrupt("return", transaction);

              case 26:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[6, 12]]);
      }));

      function processMessage(_x20, _x21) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
        var transaction;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                this.config.log('processDeployMessage', params);
                _context22.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context22.sent;
                _context22.next = 6;
                return checkTransaction(transaction);

              case 6:
                _context22.next = 8;
                return this.queries.accounts.waitFor({
                  id: {
                    eq: params.address
                  },
                  acc_type: {
                    eq: QAccountType.active
                  }
                }, 'id');

              case 8:
                return _context22.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false
                });

              case 9:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function processDeployMessage(_x22) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
        var _this2 = this;

        var transaction, outputMessageIds, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.config.log('processRunMessage', params);
                _context23.next = 3;
                return this.processMessage(params.message, transactionDetails);

              case 3:
                transaction = _context23.sent;
                _context23.next = 6;
                return checkTransaction(transaction);

              case 6:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context23.next = 9;
                  break;
                }

                return _context23.abrupt("return", {
                  output: null,
                  transaction: transaction
                });

              case 9:
                _context23.next = 11;
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
                _context23.t0 = function (x) {
                  console.log('>>>', x);
                  return x.msg_type === QMessageType.extOut;
                };

                externalMessages = _context23.sent.filter(_context23.t0);
                _context23.next = 15;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body
                  });
                }));

              case 15:
                outputs = _context23.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                return _context23.abrupt("return", {
                  output: resultOutput ? resultOutput.output : null,
                  transaction: transaction
                });

              case 18:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function processRunMessage(_x23) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestLibrary('contracts.address.convert', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function convertAddress(_x24) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function internalDeployNative(_x25) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(params) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context26.abrupt("return", _context26.sent);

              case 3:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function internalRunNative(_x26) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params) {
        var message;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context27.sent;
                return _context27.abrupt("return", this.processDeployMessage(message));

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function internalDeployJs(_x27) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params) {
        var message;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context28.sent;
                return _context28.abrupt("return", this.processRunMessage(message));

              case 4:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function internalRunJs(_x28) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(params) {
        var removeTypeName, account;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
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

                _context29.next = 3;
                return this.queries.accounts.waitFor({
                  id: {
                    eq: params.address
                  },
                  acc_type: {
                    eq: QAccountType.active
                  }
                }, 'code data');

              case 3:
                account = _context29.sent;
                removeTypeName(account);
                return _context29.abrupt("return", this.requestLibrary('contracts.run.local', {
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

      function internalRunLocalJs(_x29) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
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

function checkTransaction(_x30) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee30(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            nodeError = function _ref2(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context30.next = 3;
              break;
            }

            return _context30.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context30.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context30.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context30.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context30.next = 24;
              break;
            }

            if (!(compute.compute_type === QComputeType.skipped)) {
              _context30.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkipReason.noState)) {
              _context30.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkipReason.badState)) {
              _context30.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkipReason.noGas)) {
              _context30.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.compute_type === QComputeType.vm)) {
              _context30.next = 24;
              break;
            }

            if (compute.success) {
              _context30.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context30.next = 28;
              break;
            }

            if (action.success) {
              _context30.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    tr_type\n    status\n    out_msgs\n    block_id\n    now\n    aborted\n    storage {\n        status_change\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlFBY2NvdW50U3RhdHVzIiwidW5pbml0IiwiZnJvemVuIiwiYWN0aXZlIiwibm9uRXhpc3QiLCJRQWNjb3VudFN0YXR1c0NoYW5nZSIsInVuY2hhbmdlZCIsImRlbGV0ZWQiLCJRU2tpcFJlYXNvbiIsIm5vU3RhdGUiLCJiYWRTdGF0ZSIsIm5vR2FzIiwiUUFjY291bnRUeXBlIiwiUU1lc3NhZ2VUeXBlIiwiaW50ZXJuYWwiLCJleHRJbiIsImV4dE91dCIsIlFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyIsInVua25vd24iLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5Iiwic3RvcmFnZSIsInRpY2siLCJ0b2NrIiwic3BsaXRQcmVwYXJlIiwic3BsaXRJbnN0YWxsIiwibWVyZ2VQcmVwYXJlIiwibWVyZ2VJbnN0YWxsIiwiUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyIsIlFDb21wdXRlVHlwZSIsInNraXBwZWQiLCJ2bSIsIlFCb3VuY2VUeXBlIiwibmVnRnVuZHMiLCJub0Z1bmRzIiwib2siLCJRSW5Nc2dUeXBlIiwiZXh0ZXJuYWwiLCJpaHIiLCJpbW1lZGlhdGVsbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJub25lIiwiaW1tZWRpYXRlbHkiLCJvdXRNc2dOZXciLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwiYWNjb3VudHMiLCJxdWVyeSIsImlkIiwiZXEiLCJhZGRyZXNzIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwibG9nIiwicmVxdWVzdExpYnJhcnkiLCJhYmkiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlSWRCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiVE9OQ2xpZW50RXJyb3IiLCJjbGllbnREb2VzTm90Q29uZmlndXJlZCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwidmFsdWUiLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJyZXN1bHRGaWVsZHMiLCJ0cmFuc2FjdGlvbiIsInJldHJ5Iiwic2VuZE1lc3NhZ2UiLCJ0cmFuc2FjdGlvbnMiLCJ3YWl0Rm9yIiwiaW5fbXNnIiwiY29kZSIsIldBSVRfRk9SX1RJTUVPVVQiLCJpbnRlcm5hbEVycm9yIiwiYmxvY2tfaWQiLCJub3ciLCJEYXRlIiwidG9JU09TdHJpbmciLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJhY2NfdHlwZSIsImFscmVhZHlEZXBsb3llZCIsIm91dHB1dE1lc3NhZ2VJZHMiLCJvdXRfbXNncyIsIm91dHB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJtZXNzYWdlcyIsIngiLCJjb25zb2xlIiwibXNnX3R5cGUiLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJjb21wdXRlU2tpcHBlZCIsImNvbXB1dGVWbSIsImFjdGlvbiIsIlRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzIiwiVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyIsIm5vZGVFcnJvciIsInBoYXNlIiwic291cmNlIiwiTk9ERSIsInRyYW5zYWN0aW9uX2lkIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwiY29tcHV0ZV90eXBlIiwicmVhc29uIiwic2tpcHBlZF9yZWFzb24iLCJzdWNjZXNzIiwiZXhpdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCIsInJlc3VsdF9jb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFyQkE7Ozs7Ozs7Ozs7Ozs7OztBQXNOTyxJQUFNQSx1QkFBdUIsR0FBRztBQUNuQ0MsRUFBQUEs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LENBQUNFLFNBSGYsQ0FwRS9COztBQUFBO0FBNkVVQyxZQUFBQSxNQTdFVixHQTZFbUJwRCxXQUFXLENBQUNvRCxNQTdFL0I7O0FBQUEsaUJBOEVRQSxNQTlFUjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnQkErRWFBLE1BQU0sQ0FBQ2MsT0EvRXBCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWdGa0JYLFNBQVMsQ0FDWEgsTUFBTSxDQUFDZ0IsUUFBUCxHQUNNLDBDQUROLEdBRU8sQ0FBQ2hCLE1BQU0sQ0FBQ2lCLEtBQVIsR0FBZ0IsNkJBQWhCLEdBQWdELHFCQUg1QyxFQUlYakIsTUFBTSxDQUFDa0IsV0FKSSxFQUtYckIseUJBQXlCLENBQUNHLE1BTGYsQ0FoRjNCOztBQUFBO0FBQUEsa0JBMEZVRyxTQUFTLENBQ1gscUJBRFcsRUFFWCxDQUFDLENBRlUsRUFHWE4seUJBQXlCLENBQUN4SixPQUhmLENBMUZuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUdBLElBQU1xSCxrQkFBa0Isa1ZBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklQYXJhbWV0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklEYXRhSXRlbSA9IHtcbiAgICBrZXk6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSUZ1bmN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbnB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG4gICAgb3V0cHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRXZlbnQgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJID0ge1xuICAgICdBQkkgdmVyc2lvbic6IG51bWJlcixcbiAgICBzZXRUaW1lPzogYm9vbGVhbixcbiAgICBmdW5jdGlvbnM6IFRPTkNvbnRyYWN0QUJJRnVuY3Rpb25bXSxcbiAgICBldmVudHM6IFRPTkNvbnRyYWN0QUJJRXZlbnRbXSxcbiAgICBkYXRhOiBUT05Db250cmFjdEFCSURhdGFJdGVtW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAgaW5pdFBhcmFtcz86IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbiAgICB3b3JrY2hhaW5JZD86IG51bWJlcixcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVJlc3VsdCA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWxyZWFkeURlcGxveWVkOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlID0ge1xuICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHN0cmluZyxcbiAgICBieXRlc1RvU2lnbkJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TWVzc2FnZSA9IHtcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduUGFyYW1zOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbn1cblxudHlwZSBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZTtcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbiAgICB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyA9IHtcbiAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICBpbml0UGFyYW1zPzogYW55LFxuICAgIGltYWdlQmFzZTY0Pzogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG5cbnR5cGUgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0ID0ge1xuICAgIGltYWdlQmFzZTY0Pzogc3RyaW5nLFxuICAgIGFjY291bnRJZD86IHN0cmluZyxcbiAgICBkYXRhQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zID0ge1xuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0ID0ge1xuICAgIGNvZGVCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0ID0ge1xuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIGlucHV0OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCA9IHtcbiAgICBpZDogbnVtYmVyLFxufVxuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgdHlwZSBUT05BZGRyZXNzU3RyaW5nVmFyaWFudFR5cGUgPSAkS2V5czx0eXBlb2YgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQ+O1xuXG50eXBlIFRPTkNvbnRyYWN0QWRkcmVzc0Jhc2U2NFBhcmFtcyA9IHtcbiAgICB1cmw6IGJvb2xlYW4sXG4gICAgdGVzdDogYm9vbGVhbixcbiAgICBib3VuY2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY29udmVydFRvOiBUT05BZGRyZXNzU3RyaW5nVmFyaWFudFR5cGUsXG4gICAgYmFzZTY0UGFyYW1zPzogVE9OQ29udHJhY3RBZGRyZXNzQmFzZTY0UGFyYW1zLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxufVxuXG50eXBlIFFPdGhlckN1cnJlbmN5Q29sbGVjdGlvbiA9IHtcbiAgICBjdXJyZW5jeTogbnVtYmVyLFxuICAgIHZhbHVlOiBzdHJpbmcsXG59W11cblxuXG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGFjdGl2ZTogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDIsXG4gICAgZXh0T3V0OiAzLFxufTtcblxuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25UeXBlID0ge1xuICAgIG9yZGluYXJ5OiAwLFxuICAgIHN0b3JhZ2U6IDEsXG4gICAgdGljazogMixcbiAgICB0b2NrOiAzLFxuICAgIHNwbGl0UHJlcGFyZTogNCxcbiAgICBzcGxpdEluc3RhbGw6IDUsXG4gICAgbWVyZ2VQcmVwYXJlOiA2LFxuICAgIG1lcmdlSW5zdGFsbDogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcHJlbGltaW5hcnk6IDEsXG4gICAgcHJvcG9zZWQ6IDIsXG4gICAgZmluYWxpemVkOiAzLFxuICAgIHJlZnVzZWQ6IDQsXG59O1xuXG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbGx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBub25lOiAwLFxuICAgIGV4dGVybmFsOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIG91dE1zZ05ldzogMyxcbiAgICB0cmFuc2l0OiA0LFxuICAgIGRlcXVldWU6IDUsXG4gICAgdHJhbnNpdFJlcXVpcmVkOiA2LFxufTtcblxuZXhwb3J0IHR5cGUgUUFjY291bnQgPSB7XG4gICAgYWNjX3R5cGU6IG51bWJlcixcbiAgICBhZGRyOiBzdHJpbmcsXG4gICAgbGFzdF9wYWlkOiBzdHJpbmcsXG4gICAgZHVlX3BheW1lbnQ6IHN0cmluZyxcbiAgICBsYXN0X3RyYW5zX2x0OiBzdHJpbmcsXG4gICAgYmFsYW5jZTogc3RyaW5nLFxuICAgIHNwbGl0X2RlcHRoOiBudW1iZXIsXG4gICAgdGljazogYm9vbGVhbixcbiAgICB0b2NrOiBib29sZWFuLFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgbGlicmFyeTogc3RyaW5nLFxuXG59XG5cbmV4cG9ydCB0eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHRyX3R5cGU6IG51bWJlcixcbiAgICBzdGF0dXM6IG51bWJlcixcbiAgICBibG9ja19pZDogc3RyaW5nLFxuICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgbm93OiBudW1iZXIsXG4gICAgc3RvcmFnZToge1xuICAgICAgICBzdGF0dXNfY2hhbmdlOiBudW1iZXIsXG4gICAgfSxcbiAgICBjb21wdXRlOiB7XG4gICAgICAgIGNvbXB1dGVfdHlwZTogbnVtYmVyLFxuICAgICAgICBzdWNjZXNzOiBib29sZWFuLFxuICAgICAgICBleGl0X2NvZGU6IG51bWJlcixcbiAgICAgICAgc2tpcHBlZF9yZWFzb246IG51bWJlcixcbiAgICB9LFxuICAgIGFjdGlvbjoge1xuICAgICAgICB2YWxpZDogYm9vbGVhbixcbiAgICAgICAgbm9fZnVuZHM6IGJvb2xlYW4sXG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4sXG4gICAgICAgIHJlc3VsdF9jb2RlOiBudW1iZXIsXG4gICAgfTtcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbmV4cG9ydCB0eXBlIFFNZXNzYWdlID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbXNnX3R5cGU6IG51bWJlcixcbiAgICBzdGF0dXM6IG51bWJlcixcbiAgICBzcmM6IHN0cmluZyxcbiAgICBkc3Q6IHN0cmluZyxcbiAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZEJhc2U2NDogbWVzc2FnZS5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHJlc3VsdC5lbmNvZGVkLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtcyxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXMuY3JlYXRlU2lnbmVkUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsaWVudERvZXNOb3RDb25maWd1cmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdyZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsIHJlc3VsdEZpZWxkczogc3RyaW5nKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKHJldHJ5KSB7XG4gICAgICAgICAgICByZXRyeSA9IGZhbHNlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2UubWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICB9LCByZXN1bHRGaWVsZHMsIDEwXzAwMCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlICYmIGVycm9yLmNvZGUgPT09IFRPTkNsaWVudEVycm9yLmNvZGUuV0FJVF9GT1JfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1RpbWVvdXQsIHJldHJ5aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHJ5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcigndHJhbnNhY3Rpb24gaXMgbnVsbCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygndHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICBpZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uLm5vdyAqIDEwMDApLnRvSVNPU3RyaW5nKCl9ICgke3RyYW5zYWN0aW9uLm5vd30pYCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcih7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH1cbiAgICAgICAgfSwgJ2lkJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCwgdHJhbnNhY3Rpb24gfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gKGF3YWl0IFByb21pc2UuYWxsKG91dHB1dE1lc3NhZ2VJZHMubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5tZXNzYWdlcy53YWl0Rm9yKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUU1lc3NhZ2VQcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ2JvZHkgbXNnX3R5cGUnLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkpKS5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+JywgeCk7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG91dHB1dHMgPSBhd2FpdCBQcm9taXNlLmFsbChleHRlcm5hbE1lc3NhZ2VzLm1hcCgoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHtcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICAgICAgYm9keUJhc2U2NDogeC5ib2R5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgcmVzdWx0T3V0cHV0ID0gb3V0cHV0cy5maW5kKCh4OiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5mdW5jdGlvbi50b0xvd2VyQ2FzZSgpID09PSBwYXJhbXMuZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3V0cHV0OiByZXN1bHRPdXRwdXQgPyByZXN1bHRPdXRwdXQub3V0cHV0IDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSdW5NZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb2RlIGRhdGEnXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDJcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGlmICghdHJhbnNhY3Rpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9kZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBwaGFzZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBoYXNlLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZFxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24uc3RvcmFnZTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBzdG9yYWdlLnN0YXR1c19jaGFuZ2U7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmZyb3plbikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlID0gdHJhbnNhY3Rpb24uY29tcHV0ZTtcbiAgICBpZiAoY29tcHV0ZSkge1xuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS5za2lwcGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSBjb21wdXRlLnNraXBwZWRfcmVhc29uO1xuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24ubm9TdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIG5vIGNvZGUgYW5kIGRhdGEnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLmJhZFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgYmFkIHN0YXRlOiBmcm96ZW4gb3IgZGVsZXRlZCcsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLmJhZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vR2FzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0NvbXB1dGUgcGhhc2Ugc2tpcHBlZCBieSB1bmtub3duIHJlYXNvbicsXG4gICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcHV0ZS5jb21wdXRlX3R5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5hY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93blxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICBjb21wdXRlX3R5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICBcdH0gICAgXG4gICBgO1xuIl19