"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports["default"] = exports.TONAddressStringVariant = void 0;

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
var QMessageProcessing = {
  unknown: 0,
  queued: 1,
  processing: 2,
  preliminary: 3,
  proposed: 4,
  finalized: 5,
  refused: 6,
  transiting: 7
};
var QTransactionProcessing = {
  unknown: 0,
  preliminary: 1,
  proposed: 2,
  finalized: 3,
  refused: 4
};
var QAccountType = {
  uninit: 0,
  active: 1,
  frozen: 2
};
var QAccountStatusChange = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
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
var QComputeType = {
  skipped: 0,
  vm: 1
};
var QSkippedReason = {
  noState: 0,
  badState: 1,
  noGas: 2
};
var QMessageType = {
  internal: 0,
  extIn: 1,
  extOut: 2
};

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
                }, 'balance { grams }');

              case 2:
                accounts = _context2.sent;

                if (!(accounts && accounts.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", {
                  id: params.address,
                  balanceGrams: accounts[0].balance.grams
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
                    eq: QTransactionProcessing.finalized
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
                      eq: QMessageProcessing.finalized
                    }
                  }, 'body msg_type');
                }));

              case 11:
                _context23.t0 = function (x) {
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

            if (!(compute.type === QComputeType.skipped)) {
              _context30.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkippedReason.noState)) {
              _context30.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkippedReason.badState)) {
              _context30.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkippedReason.noGas)) {
              _context30.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.type === QComputeType.vm)) {
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

var transactionDetails = "\n    id\n    tr_type\n    status\n    out_msgs\n    block_id\n    now\n    aborted\n    storage {\n        status_change\n    }\n    compute {\n        type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlFNZXNzYWdlUHJvY2Vzc2luZyIsInVua25vd24iLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUVRyYW5zYWN0aW9uUHJvY2Vzc2luZyIsIlFBY2NvdW50VHlwZSIsInVuaW5pdCIsImFjdGl2ZSIsImZyb3plbiIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwidW5jaGFuZ2VkIiwiZGVsZXRlZCIsIlFUcmFuc2FjdGlvblR5cGUiLCJvcmRpbmFyeSIsInN0b3JhZ2UiLCJ0aWNrIiwidG9jayIsInNwbGl0UHJlcGFyZSIsInNwbGl0SW5zdGFsbCIsIm1lcmdlUHJlcGFyZSIsIm1lcmdlSW5zdGFsbCIsIlFDb21wdXRlVHlwZSIsInNraXBwZWQiLCJ2bSIsIlFTa2lwcGVkUmVhc29uIiwibm9TdGF0ZSIsImJhZFN0YXRlIiwibm9HYXMiLCJRTWVzc2FnZVR5cGUiLCJpbnRlcm5hbCIsImV4dEluIiwiZXh0T3V0IiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwicGFyYW1zIiwiYWNjb3VudHMiLCJxdWVyeSIsImlkIiwiZXEiLCJhZGRyZXNzIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsImdyYW1zIiwiaW50ZXJuYWxEZXBsb3lKcyIsImludGVybmFsUnVuSnMiLCJpbnRlcm5hbFJ1bkxvY2FsSnMiLCJsb2ciLCJyZXF1ZXN0TGlicmFyeSIsImFiaSIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VJZEJhc2U2NCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJyZXN1bHQiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwiY3JlYXRlU2lnbmVkUGFyYW1zIiwiY2xpZW50UGxhdGZvcm0iLCJUT05DbGllbnQiLCJUT05DbGllbnRFcnJvciIsImNsaWVudERvZXNOb3RDb25maWd1cmVkIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJ2YWx1ZSIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInNlbmROb2RlUmVxdWVzdEZhaWxlZCIsInJlc3VsdEZpZWxkcyIsInRyYW5zYWN0aW9uIiwicmV0cnkiLCJzZW5kTWVzc2FnZSIsInRyYW5zYWN0aW9ucyIsIndhaXRGb3IiLCJpbl9tc2ciLCJjb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsImludGVybmFsRXJyb3IiLCJibG9ja19pZCIsIm5vdyIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwiY2hlY2tUcmFuc2FjdGlvbiIsImFjY190eXBlIiwiYWxyZWFkeURlcGxveWVkIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwieCIsIm1zZ190eXBlIiwiZXh0ZXJuYWxNZXNzYWdlcyIsImZpbHRlciIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJmaW5kIiwidG9Mb3dlckNhc2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwicHJvY2Vzc0RlcGxveU1lc3NhZ2UiLCJjcmVhdGVSdW5NZXNzYWdlIiwicHJvY2Vzc1J1bk1lc3NhZ2UiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYWNjb3VudCIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiLCJUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJub2RlRXJyb3IiLCJwaGFzZSIsInNvdXJjZSIsIk5PREUiLCJ0cmFuc2FjdGlvbl9pZCIsImFib3J0ZWQiLCJzdGF0dXNfY2hhbmdlIiwiY29tcHV0ZSIsInR5cGUiLCJyZWFzb24iLCJza2lwcGVkX3JlYXNvbiIsInN1Y2Nlc3MiLCJleGl0X2NvZGUiLCJub19mdW5kcyIsInZhbGlkIiwicmVzdWx0X2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7O0FBc05PLElBQU1BLHVCQUF1QixHQUFHO0FBQ25DQyxFQUFBQSxTQUFTLEVBQUUsV0FEd0I7QUFFbkNDLEVBQUFBLEdBQUcsRUFBRSxLQUY4QjtBQUduQ0MsRUFBQUEsTUFBTSxFQUFFO0FBSDJCLENBQWhDOztBQTRCUCxJQUFNQyxrQkFBa0IsR0FBRztBQUN2QkMsRUFBQUEsT0FBTyxFQUFFLENBRGM7QUFFdkJDLEVBQUFBLE1BQU0sRUFBRSxDQUZlO0FBR3ZCQyxFQUFBQSxVQUFVLEVBQUUsQ0FIVztBQUl2QkMsRUFBQUEsV0FBVyxFQUFFLENBSlU7QUFLdkJDLEVBQUFBLFFBQVEsRUFBRSxDQUxhO0FBTXZCQyxF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QUFBQSxnQkErRWFBLE1BQU0sQ0FBQ2MsT0EvRXBCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQWdGa0JYLFNBQVMsQ0FDWEgsTUFBTSxDQUFDZ0IsUUFBUCxHQUNNLDBDQUROLEdBRU8sQ0FBQ2hCLE1BQU0sQ0FBQ2lCLEtBQVIsR0FBZ0IsNkJBQWhCLEdBQWdELHFCQUg1QyxFQUlYakIsTUFBTSxDQUFDa0IsV0FKSSxFQUtYckIseUJBQXlCLENBQUNHLE1BTGYsQ0FoRjNCOztBQUFBO0FBQUEsa0JBMEZVRyxTQUFTLENBQ1gscUJBRFcsRUFFWCxDQUFDLENBRlUsRUFHWE4seUJBQXlCLENBQUN0SixPQUhmLENBMUZuQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBaUdBLElBQU1vSCxrQkFBa0IsMFVBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklQYXJhbWV0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklEYXRhSXRlbSA9IHtcbiAgICBrZXk6IG51bWJlcixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSUZ1bmN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBpbnB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG4gICAgb3V0cHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRXZlbnQgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJID0ge1xuICAgICdBQkkgdmVyc2lvbic6IG51bWJlcixcbiAgICBzZXRUaW1lPzogYm9vbGVhbixcbiAgICBmdW5jdGlvbnM6IFRPTkNvbnRyYWN0QUJJRnVuY3Rpb25bXSxcbiAgICBldmVudHM6IFRPTkNvbnRyYWN0QUJJRXZlbnRbXSxcbiAgICBkYXRhOiBUT05Db250cmFjdEFCSURhdGFJdGVtW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAgaW5pdFBhcmFtcz86IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbiAgICB3b3JrY2hhaW5JZD86IG51bWJlcixcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVJlc3VsdCA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWxyZWFkeURlcGxveWVkOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlID0ge1xuICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHN0cmluZyxcbiAgICBieXRlc1RvU2lnbkJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TWVzc2FnZSA9IHtcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduUGFyYW1zOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbn1cblxudHlwZSBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZTtcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbiAgICB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyA9IHtcbiAgICBhYmk/OiBUT05Db250cmFjdEFCSSxcbiAgICBpbml0UGFyYW1zPzogYW55LFxuICAgIGltYWdlQmFzZTY0Pzogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG5cbnR5cGUgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0ID0ge1xuICAgIGltYWdlQmFzZTY0Pzogc3RyaW5nLFxuICAgIGFjY291bnRJZD86IHN0cmluZyxcbiAgICBkYXRhQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUGFyYW1zID0ge1xuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0ID0ge1xuICAgIGNvZGVCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIHBhcmFtczogYW55LFxuICAgIGludGVybmFsPzogYm9vbGVhbixcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0ID0ge1xuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIGlucHV0OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCA9IHtcbiAgICBpZDogbnVtYmVyLFxufVxuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgdHlwZSBUT05BZGRyZXNzU3RyaW5nVmFyaWFudFR5cGUgPSAkS2V5czx0eXBlb2YgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQ+O1xuXG50eXBlIFRPTkNvbnRyYWN0QWRkcmVzc0Jhc2U2NFBhcmFtcyA9IHtcbiAgICB1cmw6IGJvb2xlYW4sXG4gICAgdGVzdDogYm9vbGVhbixcbiAgICBib3VuY2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY29udmVydFRvOiBUT05BZGRyZXNzU3RyaW5nVmFyaWFudFR5cGUsXG4gICAgYmFzZTY0UGFyYW1zPzogVE9OQ29udHJhY3RBZGRyZXNzQmFzZTY0UGFyYW1zLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxufVxuXG50eXBlIFFDdXJyZW5jeUNvbGxlY3Rpb24gPSB7XG4gICAgZ3JhbXM6IHN0cmluZyxcbn1cblxuY29uc3QgUU1lc3NhZ2VQcm9jZXNzaW5nID0ge1xuICAgIHVua25vd246IDAsXG4gICAgcXVldWVkOiAxLFxuICAgIHByb2Nlc3Npbmc6IDIsXG4gICAgcHJlbGltaW5hcnk6IDMsXG4gICAgcHJvcG9zZWQ6IDQsXG4gICAgZmluYWxpemVkOiA1LFxuICAgIHJlZnVzZWQ6IDYsXG4gICAgdHJhbnNpdGluZzogNyxcbn07XG5cbmNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmcgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmNvbnN0IFFBY2NvdW50VHlwZSA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMlxufTtcblxuY29uc3QgUUFjY291bnRTdGF0dXNDaGFuZ2UgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxudHlwZSBRQWNjb3VudCA9IHtcbiAgICBhY2NfdHlwZTogbnVtYmVyLFxuICAgIGFkZHI6IHN0cmluZyxcbiAgICBsYXN0X3BhaWQ6IHN0cmluZyxcbiAgICBkdWVfcGF5bWVudDogc3RyaW5nLFxuICAgIGxhc3RfdHJhbnNfbHQ6IHN0cmluZyxcbiAgICBiYWxhbmNlOiBRQ3VycmVuY3lDb2xsZWN0aW9uLFxuICAgIHNwbGl0X2RlcHRoOiBudW1iZXIsXG4gICAgdGljazogYm9vbGVhbixcbiAgICB0b2NrOiBib29sZWFuLFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICBkYXRhOiBzdHJpbmcsXG4gICAgbGlicmFyeTogc3RyaW5nLFxuXG59XG5cbmNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3XG59O1xuXG5jb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmNvbnN0IFFTa2lwcGVkUmVhc29uID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHRyX3R5cGU6IG51bWJlcixcbiAgICBzdGF0dXM6IG51bWJlcixcbiAgICBibG9ja19pZDogc3RyaW5nLFxuICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgbm93OiBudW1iZXIsXG4gICAgc3RvcmFnZToge1xuICAgICAgICBzdGF0dXNfY2hhbmdlOiBudW1iZXIsXG4gICAgfSxcbiAgICBjb21wdXRlOiB7XG4gICAgICAgIHR5cGU6IG51bWJlcixcbiAgICAgICAgc3VjY2VzczogYm9vbGVhbixcbiAgICAgICAgZXhpdF9jb2RlOiBudW1iZXIsXG4gICAgICAgIHNraXBwZWRfcmVhc29uOiBudW1iZXIsXG4gICAgfSxcbiAgICBhY3Rpb246IHtcbiAgICAgICAgdmFsaWQ6IGJvb2xlYW4sXG4gICAgICAgIG5vX2Z1bmRzOiBib29sZWFuLFxuICAgICAgICBzdWNjZXNzOiBib29sZWFuLFxuICAgICAgICByZXN1bHRfY29kZTogbnVtYmVyLFxuICAgIH07XG4gICAgb3V0X21zZ3M6IHN0cmluZ1tdLFxufVxuXG5jb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyXG59O1xuXG50eXBlIFFNZXNzYWdlID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbXNnX3R5cGU6IG51bWJlcixcbiAgICBzdGF0dXM6IG51bWJlcixcbiAgICBzcmM6IHN0cmluZyxcbiAgICBkc3Q6IHN0cmluZyxcbiAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgYm9keTogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlIHsgZ3JhbXMgfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5iYWxhbmNlLmdyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICBiYWxhbmNlR3JhbXM6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbGllbnREb2VzTm90Q29uZmlndXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLCByZXN1bHRGaWVsZHM6IHN0cmluZyk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCByZXRyeSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChyZXRyeSkge1xuICAgICAgICAgICAgcmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmcuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0RmllbGRzLCAxMF8wMDApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdUaW1lb3V0LCByZXRyeWluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICByZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ3RyYW5zYWN0aW9uIGlzIG51bGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3RyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbi5ub3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbi5ub3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9XG4gICAgICAgIH0sICdpZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VJZHMgPSB0cmFuc2FjdGlvbi5vdXRfbXNncztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlSWRzIHx8IG91dHB1dE1lc3NhZ2VJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwsIHRyYW5zYWN0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IChhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFNZXNzYWdlUHJvY2Vzc2luZy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IG1zZ190eXBlJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEFkZHJlc3MgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgY29udmVydEFkZHJlc3MocGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuYWRkcmVzcy5jb252ZXJ0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGVwbG95TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICAgICAgYWNjX3R5cGU6IHsgZXE6IFFBY2NvdW50VHlwZS5hY3RpdmUgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29kZSBkYXRhJ1xuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiBcImNvbXB1dGVWbVwiLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMgPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMlxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyXG59O1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb24pIHtcbiAgICBpZiAoIXRyYW5zYWN0aW9uLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vZGVFcnJvcihtZXNzYWdlOiBzdHJpbmcsIGNvZGU6IG51bWJlciwgcGhhc2U6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgYCR7bWVzc2FnZX0gKCR7Y29kZX0pIGF0ICR7cGhhc2V9YCxcbiAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuTk9ERSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbl9pZDogdHJhbnNhY3Rpb24uaWRcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmFnZSA9IHRyYW5zYWN0aW9uLnN0b3JhZ2U7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gc3RvcmFnZS5zdGF0dXNfY2hhbmdlO1xuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5mcm96ZW4pIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQWNjb3VudCB3YXMgZnJvemVuIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmZyb3plbixcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZGVsZXRlZCkge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUudHlwZSA9PT0gUUNvbXB1dGVUeXBlLnNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IGNvbXB1dGUuc2tpcHBlZF9yZWFzb247XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcHBlZFJlYXNvbi5ub1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBwZWRSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBwZWRSZWFzb24ubm9HYXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdObyBnYXMgdG8gZXhlY3V0ZSBWTScsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vR2FzLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJyxcbiAgICAgICAgICAgICAgICAtMSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLnR5cGUgPT09IFFDb21wdXRlVHlwZS52bSkge1xuICAgICAgICAgICAgaWYgKCFjb21wdXRlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcHV0ZS5leGl0X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IHRyYW5zYWN0aW9uLmFjdGlvbjtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICBhY3Rpb24ubm9fZnVuZHNcbiAgICAgICAgICAgICAgICAgICAgPyAnVG9vIGxvdyBiYWxhbmNlIHRvIHNlbmQgb3V0Ym91bmQgbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgOiAoIWFjdGlvbi52YWxpZCA/ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnIDogJ0FjdGlvbiBwaGFzZSBmYWlsZWQnKSxcbiAgICAgICAgICAgICAgICBhY3Rpb24ucmVzdWx0X2NvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5hY3Rpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICdUcmFuc2FjdGlvbiBhYm9ydGVkJyxcbiAgICAgICAgLTEsXG4gICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UudW5rbm93blxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgfVxuICAgIGNvbXB1dGUge1xuICAgICAgICB0eXBlXG4gICAgICAgIHNraXBwZWRfcmVhc29uXG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgZXhpdF9jb2RlXG4gICAgfVxuICAgIGFjdGlvbiB7XG4gICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgdmFsaWRcbiAgICAgICAgcmVzdWx0X2NvZGVcbiAgICAgICAgbm9fZnVuZHNcbiAgXHR9ICAgIFxuICAgYDtcbiJdfQ==