"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports["default"] = void 0;

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
                  keyPair: params.keyPair
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
                  publicKeyHex: params.keyPair["public"]
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
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function internalDeployNative(_x24) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context25.abrupt("return", _context25.sent);

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function internalRunNative(_x25) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(params) {
        var message;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context26.sent;
                return _context26.abrupt("return", this.processDeployMessage(message));

              case 4:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function internalDeployJs(_x26) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(params) {
        var message;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context27.sent;
                return _context27.abrupt("return", this.processRunMessage(message));

              case 4:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function internalRunJs(_x27) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(params) {
        var removeTypeName, account;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
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

                _context28.next = 3;
                return this.queries.accounts.waitFor({
                  id: {
                    eq: params.address
                  },
                  acc_type: {
                    eq: QAccountType.active
                  }
                }, 'code data');

              case 3:
                account = _context28.sent;
                removeTypeName(account);
                return _context28.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      function internalRunLocalJs(_x28) {
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

function checkTransaction(_x29) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee29(transaction) {
    var nodeError, storage, status, compute, reason, action;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) {
        switch (_context29.prev = _context29.next) {
          case 0:
            nodeError = function _ref2(message, code, phase) {
              return new _TONClient.TONClientError("".concat(message, " (").concat(code, ") at ").concat(phase), code, _TONClient.TONClientError.source.NODE, {
                phase: phase,
                transaction_id: transaction.id
              });
            };

            if (transaction.aborted) {
              _context29.next = 3;
              break;
            }

            return _context29.abrupt("return");

          case 3:
            storage = transaction.storage;

            if (!storage) {
              _context29.next = 10;
              break;
            }

            status = storage.status_change;

            if (!(status === QAccountStatusChange.frozen)) {
              _context29.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === QAccountStatusChange.deleted)) {
              _context29.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            compute = transaction.compute;

            if (!compute) {
              _context29.next = 24;
              break;
            }

            if (!(compute.type === QComputeType.skipped)) {
              _context29.next = 21;
              break;
            }

            reason = compute.skipped_reason;

            if (!(reason === QSkippedReason.noState)) {
              _context29.next = 16;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 16:
            if (!(reason === QSkippedReason.badState)) {
              _context29.next = 18;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 18:
            if (!(reason === QSkippedReason.noGas)) {
              _context29.next = 20;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 20:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 21:
            if (!(compute.type === QComputeType.vm)) {
              _context29.next = 24;
              break;
            }

            if (compute.success) {
              _context29.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', compute.exit_code, TONClientTransactionPhase.computeVm);

          case 24:
            action = transaction.action;

            if (!action) {
              _context29.next = 28;
              break;
            }

            if (action.success) {
              _context29.next = 28;
              break;
            }

            throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code, TONClientTransactionPhase.action);

          case 28:
            throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);

          case 29:
          case "end":
            return _context29.stop();
        }
      }
    }, _callee29);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    tr_type\n    status\n    out_msgs\n    block_id\n    now\n    aborted\n    storage {\n        status_change\n    }\n    compute {\n        type\n        skipped_reason\n        success\n        exit_code\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJRTWVzc2FnZVByb2Nlc3NpbmciLCJ1bmtub3duIiwicXVldWVkIiwicHJvY2Vzc2luZyIsInByZWxpbWluYXJ5IiwicHJvcG9zZWQiLCJmaW5hbGl6ZWQiLCJyZWZ1c2VkIiwidHJhbnNpdGluZyIsIlFUcmFuc2FjdGlvblByb2Nlc3NpbmciLCJRQWNjb3VudFR5cGUiLCJ1bmluaXQiLCJhY3RpdmUiLCJmcm96ZW4iLCJRQWNjb3VudFN0YXR1c0NoYW5nZSIsInVuY2hhbmdlZCIsImRlbGV0ZWQiLCJRVHJhbnNhY3Rpb25UeXBlIiwib3JkaW5hcnkiLCJzdG9yYWdlIiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRQ29tcHV0ZVR5cGUiLCJza2lwcGVkIiwidm0iLCJRU2tpcHBlZFJlYXNvbiIsIm5vU3RhdGUiLCJiYWRTdGF0ZSIsIm5vR2FzIiwiUU1lc3NhZ2VUeXBlIiwiaW50ZXJuYWwiLCJleHRJbiIsImV4dE91dCIsIlRPTkNvbnRyYWN0c01vZHVsZSIsImNvbmZpZyIsImNvbnRleHQiLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsInBhcmFtcyIsImFjY291bnRzIiwicXVlcnkiLCJpZCIsImVxIiwiYWRkcmVzcyIsImxlbmd0aCIsImJhbGFuY2VHcmFtcyIsImJhbGFuY2UiLCJncmFtcyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwibG9nIiwicmVxdWVzdExpYnJhcnkiLCJhYmkiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJtZXNzYWdlIiwibWVzc2FnZUlkIiwibWVzc2FnZUlkQmFzZTY0IiwibWVzc2FnZUJvZHlCYXNlNjQiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsInB1YmxpY0tleUhleCIsInJlc3VsdCIsImFkZHJlc3NIZXgiLCJzaWduUGFyYW1zIiwiZW5jb2RlZCIsImNyZWF0ZVNpZ25lZE1lc3NhZ2UiLCJjcmVhdGVTaWduZWRQYXJhbXMiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsIlRPTkNsaWVudEVycm9yIiwiY2xpZW50RG9lc05vdENvbmZpZ3VyZWQiLCJmZXRjaCIsInVybCIsInJlcXVlc3RzVXJsIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwicmVkaXJlY3QiLCJyZWZlcnJlciIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVjb3JkcyIsImtleSIsInZhbHVlIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0ZXh0Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwicmVzdWx0RmllbGRzIiwidHJhbnNhY3Rpb24iLCJyZXRyeSIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsImluX21zZyIsImNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwiaW50ZXJuYWxFcnJvciIsImJsb2NrX2lkIiwibm93IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwicHJvY2Vzc01lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJjaGVja1RyYW5zYWN0aW9uIiwiYWNjX3R5cGUiLCJhbHJlYWR5RGVwbG95ZWQiLCJvdXRwdXRNZXNzYWdlSWRzIiwib3V0X21zZ3MiLCJvdXRwdXQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwibWVzc2FnZXMiLCJ4IiwibXNnX3R5cGUiLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJjb21wdXRlU2tpcHBlZCIsImNvbXB1dGVWbSIsImFjdGlvbiIsIlRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzIiwiVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyIsIm5vZGVFcnJvciIsInBoYXNlIiwic291cmNlIiwiTk9ERSIsInRyYW5zYWN0aW9uX2lkIiwiYWJvcnRlZCIsInN0YXR1c19jaGFuZ2UiLCJjb21wdXRlIiwidHlwZSIsInJlYXNvbiIsInNraXBwZWRfcmVhc29uIiwic3VjY2VzcyIsImV4aXRfY29kZSIsIm5vX2Z1bmRzIiwidmFsaWQiLCJyZXN1bHRfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBckJBOzs7Ozs7Ozs7Ozs7Ozs7QUF5TkEsSUFBTUEsa0JBQWtCLEdBQUc7QUFDdkJDLEVBQUFBLE9BQU8sRUFBRSxDQURjO0FBRXZCQyxFQUFBQSxNQUFNLEVBQUUsQ0FGZTtBQUd2QkMsRUFBQUEsVUFBVSxFQUFFLENBSFc7QUFJdkJDLEVBQUFBLFdBQVcsRUFBRSxDQUpVO0FBS3ZCQyxFQUFBQSxRQUFRLEVBQUUsQ0FMYTtBQU12QkMsRUFBQUEsU0FBUyxFQUFFLENBTlk7QUFPdkJDLEVBQUFBLE9BQU8sRUFBRSxDQVBjO0FBUXZCQyxFQUFBQSxVQUFVLEVBQUU7QUFSVyxDQUEzQjtBQVdBLElBQU1DLHNCQUFzQixHQUFHO0FBQzNCUixFQUFBQSxPQUFPLEVBQUUsQ0FEa0I7QUFFM0JHLEVBQUFBLFdBQVcsRUFBRSxDQUZjO0FBRzNCQyxFQUFBQSxRQUFRLEVBQUUs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LCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OS2V5UGFpckRhdGEgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSVBhcmFtZXRlciA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSURhdGFJdGVtID0ge1xuICAgIGtleTogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbiAgICBvdXRwdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklFdmVudCA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQkkgPSB7XG4gICAgJ0FCSSB2ZXJzaW9uJzogbnVtYmVyLFxuICAgIHNldFRpbWU/OiBib29sZWFuLFxuICAgIGZ1bmN0aW9uczogVE9OQ29udHJhY3RBQklGdW5jdGlvbltdLFxuICAgIGV2ZW50czogVE9OQ29udHJhY3RBQklFdmVudFtdLFxuICAgIGRhdGE6IFRPTkNvbnRyYWN0QUJJRGF0YUl0ZW1bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0UGFja2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBpbmNsdWRlSW1hZ2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUmVzdWx0ID0ge1xuICAgIGlkOiA/c3RyaW5nLFxuICAgIGJhbGFuY2VHcmFtczogP3N0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVBhcmFtcyA9IHtcbiAgICBwYWNrYWdlOiBUT05Db250cmFjdFBhY2thZ2UsXG4gICAgY29uc3RydWN0b3JQYXJhbXM6IGFueSxcbiAgICBpbml0UGFyYW1zPzogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIGJ5dGVzVG9TaWduQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgc2lnblBhcmFtczogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2U7XG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyA9IHtcbiAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgc2lnbkJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuUmVzdWx0ID0ge1xuICAgIG91dHB1dDogYW55LFxuICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb25cbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zID0ge1xuICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgIGluaXRQYXJhbXM/OiBhbnksXG4gICAgaW1hZ2VCYXNlNjQ/OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cblxudHlwZSBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQgPSB7XG4gICAgaW1hZ2VCYXNlNjQ/OiBzdHJpbmcsXG4gICAgYWNjb3VudElkPzogc3RyaW5nLFxuICAgIGRhdGFCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMgPSB7XG4gICAgaW1hZ2VCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQgPSB7XG4gICAgY29kZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxuICAgIGtleVBhaXI/OiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQgPSB7XG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0ID0ge1xuICAgIGlkOiBudW1iZXIsXG59XG5cbnR5cGUgUUN1cnJlbmN5Q29sbGVjdGlvbiA9IHtcbiAgICBncmFtczogc3RyaW5nLFxufVxuXG5jb25zdCBRTWVzc2FnZVByb2Nlc3NpbmcgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyXG59O1xuXG5jb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG50eXBlIFFBY2NvdW50ID0ge1xuICAgIGFjY190eXBlOiBudW1iZXIsXG4gICAgYWRkcjogc3RyaW5nLFxuICAgIGxhc3RfcGFpZDogc3RyaW5nLFxuICAgIGR1ZV9wYXltZW50OiBzdHJpbmcsXG4gICAgbGFzdF90cmFuc19sdDogc3RyaW5nLFxuICAgIGJhbGFuY2U6IFFDdXJyZW5jeUNvbGxlY3Rpb24sXG4gICAgc3BsaXRfZGVwdGg6IG51bWJlcixcbiAgICB0aWNrOiBib29sZWFuLFxuICAgIHRvY2s6IGJvb2xlYW4sXG4gICAgY29kZTogc3RyaW5nLFxuICAgIGRhdGE6IHN0cmluZyxcbiAgICBsaWJyYXJ5OiBzdHJpbmcsXG5cbn1cblxuY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDdcbn07XG5cbmNvbnN0IFFDb21wdXRlVHlwZSA9IHtcbiAgICBza2lwcGVkOiAwLFxuICAgIHZtOiAxLFxufTtcblxuY29uc3QgUVNraXBwZWRSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgdHJfdHlwZTogbnVtYmVyLFxuICAgIHN0YXR1czogbnVtYmVyLFxuICAgIGJsb2NrX2lkOiBzdHJpbmcsXG4gICAgYWJvcnRlZDogYm9vbGVhbixcbiAgICBub3c6IG51bWJlcixcbiAgICBzdG9yYWdlOiB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2U6IG51bWJlcixcbiAgICB9LFxuICAgIGNvbXB1dGU6IHtcbiAgICAgICAgdHlwZTogbnVtYmVyLFxuICAgICAgICBzdWNjZXNzOiBib29sZWFuLFxuICAgICAgICBleGl0X2NvZGU6IG51bWJlcixcbiAgICAgICAgc2tpcHBlZF9yZWFzb246IG51bWJlcixcbiAgICB9LFxuICAgIGFjdGlvbjoge1xuICAgICAgICB2YWxpZDogYm9vbGVhbixcbiAgICAgICAgbm9fZnVuZHM6IGJvb2xlYW4sXG4gICAgICAgIHN1Y2Nlc3M6IGJvb2xlYW4sXG4gICAgICAgIHJlc3VsdF9jb2RlOiBudW1iZXIsXG4gICAgfTtcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbmNvbnN0IFFNZXNzYWdlVHlwZSA9IHtcbiAgICBpbnRlcm5hbDogMCxcbiAgICBleHRJbjogMSxcbiAgICBleHRPdXQ6IDJcbn07XG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBtc2dfdHlwZTogbnVtYmVyLFxuICAgIHN0YXR1czogbnVtYmVyLFxuICAgIHNyYzogc3RyaW5nLFxuICAgIGRzdDogc3RyaW5nLFxuICAgIGNyZWF0ZWRfYXQ6IG51bWJlcixcbiAgICBib2R5OiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogUUFjY291bnRbXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ2JhbGFuY2UgeyBncmFtcyB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UuZ3JhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbERlcGxveUpzKHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5KcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZURlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlOiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3NcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kuZGF0YScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlUnVuQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbGllbnREb2VzTm90Q29uZmlndXJlZCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5zZW5kTm9kZVJlcXVlc3RGYWlsZWQoYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLCByZXN1bHRGaWVsZHM6IHN0cmluZyk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCByZXRyeSA9IHRydWU7XG4gICAgICAgIHdoaWxlIChyZXRyeSkge1xuICAgICAgICAgICAgcmV0cnkgPSBmYWxzZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgaW5fbXNnOiB7IGVxOiBtZXNzYWdlLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmcuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgfSwgcmVzdWx0RmllbGRzLCAxMF8wMDApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuY29kZSAmJiBlcnJvci5jb2RlID09PSBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWcubG9nKCdUaW1lb3V0LCByZXRyeWluZy4uLicpO1xuICAgICAgICAgICAgICAgICAgICByZXRyeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludGVybmFsRXJyb3IoJ3RyYW5zYWN0aW9uIGlzIG51bGwnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3RyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbi5ub3cgKiAxMDAwKS50b0lTT1N0cmluZygpfSAoJHt0cmFuc2FjdGlvbi5ub3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9XG4gICAgICAgIH0sICdpZCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VJZHMgPSB0cmFuc2FjdGlvbi5vdXRfbXNncztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlSWRzIHx8IG91dHB1dE1lc3NhZ2VJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwsIHRyYW5zYWN0aW9uIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IChhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFNZXNzYWdlUHJvY2Vzc2luZy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IG1zZ190eXBlJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHgubXNnX3R5cGUgPT09IFFNZXNzYWdlVHlwZS5leHRPdXQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSdW5NZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBhY2NfdHlwZTogeyBlcTogUUFjY291bnRUeXBlLmFjdGl2ZSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjb2RlIGRhdGEnXG4gICAgICAgICk7XG5cbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDJcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGlmICghdHJhbnNhY3Rpb24uYWJvcnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbm9kZUVycm9yKG1lc3NhZ2U6IHN0cmluZywgY29kZTogbnVtYmVyLCBwaGFzZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5OT0RFLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBoYXNlLFxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uX2lkOiB0cmFuc2FjdGlvbi5pZFxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yYWdlID0gdHJhbnNhY3Rpb24uc3RvcmFnZTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSBzdG9yYWdlLnN0YXR1c19jaGFuZ2U7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IFFBY2NvdW50U3RhdHVzQ2hhbmdlLmZyb3plbikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2VcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlID0gdHJhbnNhY3Rpb24uY29tcHV0ZTtcbiAgICBpZiAoY29tcHV0ZSkge1xuICAgICAgICBpZiAoY29tcHV0ZS50eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwcGVkUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcHBlZFJlYXNvbi5iYWRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIGJhZCBzdGF0ZTogZnJvemVuIG9yIGRlbGV0ZWQnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5iYWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09PSBRU2tpcHBlZFJlYXNvbi5ub0dhcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXB1dGUudHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24uYWN0aW9uO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgIGFjdGlvbi5ub19mdW5kc1xuICAgICAgICAgICAgICAgICAgICA/ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICA6ICghYWN0aW9uLnZhbGlkID8gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCcgOiAnQWN0aW9uIHBoYXNlIGZhaWxlZCcpLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5yZXN1bHRfY29kZSxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgJ1RyYW5zYWN0aW9uIGFib3J0ZWQnLFxuICAgICAgICAtMSxcbiAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duXG4gICAgKTtcbn1cblxuY29uc3QgdHJhbnNhY3Rpb25EZXRhaWxzID0gYFxuICAgIGlkXG4gICAgdHJfdHlwZVxuICAgIHN0YXR1c1xuICAgIG91dF9tc2dzXG4gICAgYmxvY2tfaWRcbiAgICBub3dcbiAgICBhYm9ydGVkXG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIHR5cGVcbiAgICAgICAgc2tpcHBlZF9yZWFzb25cbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBleGl0X2NvZGVcbiAgICB9XG4gICAgYWN0aW9uIHtcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICB2YWxpZFxuICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICBub19mdW5kc1xuICBcdH0gICAgXG4gICBgO1xuIl19