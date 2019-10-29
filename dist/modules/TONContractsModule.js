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
                }, 'storage { balance { Grams } }');

              case 2:
                accounts = _context2.sent;

                if (!(accounts && accounts.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", {
                  id: params.address,
                  balanceGrams: accounts[0].storage.balance.Grams,
                  imageBase64: null
                });

              case 5:
                return _context2.abrupt("return", {
                  id: null,
                  balanceGrams: null,
                  imageBase64: null
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
                retry = true;

              case 1:
                if (!retry) {
                  _context21.next = 21;
                  break;
                }

                retry = false;
                _context21.next = 5;
                return this.sendMessage(message);

              case 5:
                _context21.prev = 5;
                _context21.next = 8;
                return this.queries.transactions.waitFor({
                  id: {
                    eq: message.messageId
                  },
                  status: {
                    eq: 'Finalized'
                  }
                }, resultFields, 10000);

              case 8:
                transaction = _context21.sent;
                _context21.next = 19;
                break;

              case 11:
                _context21.prev = 11;
                _context21.t0 = _context21["catch"](5);

                if (!(_context21.t0.code && _context21.t0.code === _TONClient.TONClientError.code.WAIT_FOR_TIMEOUT)) {
                  _context21.next = 18;
                  break;
                }

                this.config.log('Timeout, retrying...');
                retry = true;
                _context21.next = 19;
                break;

              case 18:
                throw _context21.t0;

              case 19:
                _context21.next = 1;
                break;

              case 21:
                this.config.log('transaction received', {
                  id: message.messageId,
                  block_id: transaction.block_id,
                  now: "".concat(new Date(transaction.now * 1000), " (").concat(transaction.now, ")")
                });
                return _context21.abrupt("return", transaction);

              case 23:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[5, 11]]);
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
                  addr: {
                    AddrStd: {
                      workchain_id: {
                        eq: 0
                      },
                      address: {
                        eq: params.address
                      }
                    }
                  }
                }, "\n            storage {\n                state {\n                    ...on AccountStorageStateAccountActiveVariant {\n                        AccountActive { split_depth } \n                    }\n                }\n            }\n        ");

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
                  output: null
                });

              case 9:
                _context23.next = 11;
                return Promise.all(outputMessageIds.map(function (id) {
                  return _this2.queries.messages.waitFor({
                    id: {
                      eq: id
                    },
                    status: {
                      eq: 'Finalized'
                    }
                  }, 'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }');
                }));

              case 11:
                _context23.t0 = function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
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
        var removeTypeName, accounts;
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
                return this.queries.accounts.query({
                  id: {
                    eq: params.address
                  }
                }, "\n            storage {\n                state {\n                    ...on AccountStorageStateAccountActiveVariant {\n                        AccountActive {\n                            code\n                            data\n                        }\n                    }\n                    ...on AccountStorageStateAccountUninitVariant {\n                        AccountUninit {\n                            None\n                        }\n                    }\n                }\n            }\n            ");

              case 3:
                accounts = _context28.sent;

                if (!(accounts.length === 0)) {
                  _context28.next = 6;
                  break;
                }

                throw _TONClient.TONClientError.runLocalAccountDoesNotExists(params.functionName, params.address);

              case 6:
                removeTypeName(accounts[0]);
                console.log('>>>', accounts);
                return _context28.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: accounts[0],
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 9:
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
    var ordinary, nodeError, status, reason, vm, action;
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

            ordinary = transaction.description.Ordinary;

            if (ordinary.aborted) {
              _context29.next = 4;
              break;
            }

            return _context29.abrupt("return");

          case 4:
            if (!ordinary.storage_ph) {
              _context29.next = 10;
              break;
            }

            status = ordinary.storage_ph.status_change;

            if (!(status === "Frozen")) {
              _context29.next = 8;
              break;
            }

            throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);

          case 8:
            if (!(status === "Deleted")) {
              _context29.next = 10;
              break;
            }

            throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);

          case 10:
            if (!ordinary.compute_ph) {
              _context29.next = 24;
              break;
            }

            if (!ordinary.compute_ph.Skipped) {
              _context29.next = 20;
              break;
            }

            reason = ordinary.compute_ph.Skipped.reason;

            if (!(reason === 'NoState')) {
              _context29.next = 15;
              break;
            }

            throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);

          case 15:
            if (!(reason === 'BadState')) {
              _context29.next = 17;
              break;
            }

            throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);

          case 17:
            if (!(reason === 'NoGas')) {
              _context29.next = 19;
              break;
            }

            throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);

          case 19:
            throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);

          case 20:
            if (!ordinary.compute_ph.Vm) {
              _context29.next = 24;
              break;
            }

            vm = ordinary.compute_ph.Vm;

            if (vm.success) {
              _context29.next = 24;
              break;
            }

            throw nodeError('VM terminated with exception', vm.exit_code, TONClientTransactionPhase.computeVm);

          case 24:
            if (!ordinary.action) {
              _context29.next = 28;
              break;
            }

            action = ordinary.action;

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

var transactionDetails = "\n    id\n    status\n    out_msgs\n    block_id\n    now\n    description {\n    \t...on TransactionDescriptionOrdinaryVariant {\n        Ordinary {\n          aborted\n          storage_ph {\n            status_change\n          }\n          compute_ph {\n            ...on TrComputePhaseSkippedVariant {\n              Skipped {reason}\n            }\n            ...on TrComputePhaseVmVariant {\n              Vm {\n                success\n                exit_code\n              }\n            }\n          }\n          action {\n            success\n            valid\n            result_code\n            no_funds\n          }\n        }\n      }\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsImxvZyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwia2V5UGFpciIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlSWRCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiVE9OQ2xpZW50RXJyb3IiLCJjbGllbnREb2VzTm90Q29uZmlndXJlZCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwidmFsdWUiLCJyZXNwb25zZSIsInN0YXR1cyIsInRleHQiLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJyZXN1bHRGaWVsZHMiLCJyZXRyeSIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsInRyYW5zYWN0aW9uIiwiY29kZSIsIldBSVRfRk9SX1RJTUVPVVQiLCJibG9ja19pZCIsIm5vdyIsIkRhdGUiLCJwcm9jZXNzTWVzc2FnZSIsInRyYW5zYWN0aW9uRGV0YWlscyIsImNoZWNrVHJhbnNhY3Rpb24iLCJhZGRyIiwiQWRkclN0ZCIsIndvcmtjaGFpbl9pZCIsImFscmVhZHlEZXBsb3llZCIsIm91dHB1dE1lc3NhZ2VJZHMiLCJvdXRfbXNncyIsIm91dHB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJtZXNzYWdlcyIsIngiLCJoZWFkZXIiLCJFeHRPdXRNc2dJbmZvIiwiZXh0ZXJuYWxNZXNzYWdlcyIsImZpbHRlciIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJmaW5kIiwidG9Mb3dlckNhc2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwicHJvY2Vzc0RlcGxveU1lc3NhZ2UiLCJjcmVhdGVSdW5NZXNzYWdlIiwicHJvY2Vzc1J1bk1lc3NhZ2UiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwicnVuTG9jYWxBY2NvdW50RG9lc05vdEV4aXN0cyIsImNvbnNvbGUiLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJjb21wdXRlU2tpcHBlZCIsImNvbXB1dGVWbSIsImFjdGlvbiIsInVua25vd24iLCJUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyIsIm5vU3RhdGUiLCJiYWRTdGF0ZSIsIm5vR2FzIiwiVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyIsInVuY2hhbmdlZCIsImZyb3plbiIsImRlbGV0ZWQiLCJub2RlRXJyb3IiLCJwaGFzZSIsInNvdXJjZSIsIk5PREUiLCJ0cmFuc2FjdGlvbl9pZCIsIm9yZGluYXJ5IiwiZGVzY3JpcHRpb24iLCJPcmRpbmFyeSIsImFib3J0ZWQiLCJzdG9yYWdlX3BoIiwic3RhdHVzX2NoYW5nZSIsImNvbXB1dGVfcGgiLCJTa2lwcGVkIiwicmVhc29uIiwiVm0iLCJ2bSIsInN1Y2Nlc3MiLCJleGl0X2NvZGUiLCJub19mdW5kcyIsInZhbGlkIiwicmVzdWx0X2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUNBOztBQUVBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7O0lBMFFxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIscUJBQUtDLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJHLDRCQUF2QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR09DLE07Ozs7Ozs7dUJBT0ssS0FBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUNwQ0Msa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLO0FBQWI7QUFEZ0MsaUJBQTVCLEVBRVQsK0JBRlMsQzs7O0FBTk5KLGdCQUFBQSxROztzQkFTRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hILGtCQUFBQSxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ssT0FEUjtBQUVIRSxrQkFBQUEsWUFBWSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCQyxLQUZ2QztBQUdIQyxrQkFBQUEsV0FBVyxFQUFFO0FBSFYsaUI7OztrREFNSjtBQUNIUixrQkFBQUEsRUFBRSxFQUFFLElBREQ7QUFFSEksa0JBQUFBLFlBQVksRUFBRSxJQUZYO0FBR0hJLGtCQUFBQSxXQUFXLEVBQUU7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LENBQUNmLE1BOUVoQzs7QUFBQSxnQkErRWFBLE1BQU0sQ0FBQzBCLE9BL0VwQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFnRmtCaEIsU0FBUyxDQUNYVixNQUFNLENBQUM0QixRQUFQLEdBQ00sMENBRE4sR0FFTyxDQUFDNUIsTUFBTSxDQUFDNkIsS0FBUixHQUFnQiw2QkFBaEIsR0FBZ0QscUJBSDVDLEVBSVg3QixNQUFNLENBQUM4QixXQUpJLEVBS1hqQyx5QkFBeUIsQ0FBQ0csTUFMZixDQWhGM0I7O0FBQUE7QUFBQSxrQkEwRlVVLFNBQVMsQ0FDWCxxQkFEVyxFQUVYLENBQUMsQ0FGVSxFQUdYYix5QkFBeUIsQ0FBQ0ksT0FIZixDQTFGbkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQWlHQSxJQUFNM0Msa0JBQWtCLG9xQkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgeyBUT05DbGllbnQsIFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OS2V5UGFpckRhdGEgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSVBhcmFtZXRlciA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSURhdGFJdGVtID0ge1xuICAgIGtleTogbnVtYmVyLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbiAgICBvdXRwdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklFdmVudCA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQkkgPSB7XG4gICAgJ0FCSSB2ZXJzaW9uJzogbnVtYmVyLFxuICAgIHNldFRpbWU/OiBib29sZWFuLFxuICAgIGZ1bmN0aW9uczogVE9OQ29udHJhY3RBQklGdW5jdGlvbltdLFxuICAgIGV2ZW50czogVE9OQ29udHJhY3RBQklFdmVudFtdLFxuICAgIGRhdGE6IFRPTkNvbnRyYWN0QUJJRGF0YUl0ZW1bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0UGFja2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBpbmNsdWRlSW1hZ2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUmVzdWx0ID0ge1xuICAgIGlkOiA/c3RyaW5nLFxuICAgIGJhbGFuY2VHcmFtczogP3N0cmluZyxcbiAgICBpbWFnZUJhc2U2NDogP3N0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVBhcmFtcyA9IHtcbiAgICBwYWNrYWdlOiBUT05Db250cmFjdFBhY2thZ2UsXG4gICAgY29uc3RydWN0b3JQYXJhbXM6IGFueSxcbiAgICBpbml0UGFyYW1zPzogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIGJ5dGVzVG9TaWduQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgc2lnblBhcmFtczogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2U7XG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyA9IHtcbiAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgc2lnbkJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuUmVzdWx0ID0ge1xuICAgIG91dHB1dDogYW55LFxuICAgIHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb25cbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zID0ge1xuICAgIGFiaT86IFRPTkNvbnRyYWN0QUJJLFxuICAgIGluaXRQYXJhbXM/OiBhbnksXG4gICAgaW1hZ2VCYXNlNjQ/OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cblxudHlwZSBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQgPSB7XG4gICAgaW1hZ2VCYXNlNjQ/OiBzdHJpbmcsXG4gICAgYWNjb3VudElkPzogc3RyaW5nLFxuICAgIGRhdGFCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMgPSB7XG4gICAgaW1hZ2VCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQgPSB7XG4gICAgY29kZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgcGFyYW1zOiBhbnksXG4gICAgaW50ZXJuYWw/OiBib29sZWFuLFxuICAgIGtleVBhaXI/OiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQgPSB7XG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0ID0ge1xuICAgIGlkOiBudW1iZXIsXG59XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgT3JkaW5hcnk6IHtcbiAgICAgICAgICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgICAgICAgICBzdG9yYWdlX3BoOiB7XG4gICAgICAgICAgICAgICAgc3RhdHVzX2NoYW5nZTogc3RyaW5nO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXB1dGVfcGg6IHtcbiAgICAgICAgICAgICAgICBWbToge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICBleGl0X2NvZGU6IG51bWJlcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFNraXBwZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgICAgICB2YWxpZDogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICBub19mdW5kczogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBib29sZWFuO1xuICAgICAgICAgICAgICAgIHJlc3VsdF9jb2RlOiBudW1iZXI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwocGFyYW1zOiBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHJlc3VsdC5lbmNvZGVkLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtcyxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXMuY3JlYXRlU2lnbmVkUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuaW1hZ2UuY29kZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0RGVwbG95RGF0YShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldERlcGxveURhdGFQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEZ1bmN0aW9uSWRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5mdW5jdGlvbi5pZCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsaWVudERvZXNOb3RDb25maWd1cmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdyZXF1ZXN0IHBvc3RlZCcpO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZChhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsIHJlc3VsdEZpZWxkczogc3RyaW5nKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiBRVHJhbnNhY3Rpb247XG4gICAgICAgIGxldCByZXRyeSA9IHRydWU7XG4gICAgICAgIHdoaWxlKHJldHJ5KSB7XG4gICAgICAgICAgICByZXRyeSA9IGZhbHNlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogbWVzc2FnZS5tZXNzYWdlSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiAnRmluYWxpemVkJyB9LFxuICAgICAgICAgICAgICAgIH0sIHJlc3VsdEZpZWxkcywgMTBfMDAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgJiYgZXJyb3IuY29kZSA9PT0gVE9OQ2xpZW50RXJyb3IuY29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnVGltZW91dCwgcmV0cnlpbmcuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0cnkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3RyYW5zYWN0aW9uIHJlY2VpdmVkJywge1xuICAgICAgICAgICAgaWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgYmxvY2tfaWQ6IHRyYW5zYWN0aW9uLmJsb2NrX2lkLFxuICAgICAgICAgICAgbm93OiBgJHtuZXcgRGF0ZSh0cmFuc2FjdGlvbi5ub3cgKiAxMDAwKX0gKCR7dHJhbnNhY3Rpb24ubm93fSlgLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRyYW5zYWN0aW9uO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGFkZHI6IHsgQWRkclN0ZDogeyB3b3JrY2hhaW5faWQ6IHsgZXE6IDAgfSwgYWRkcmVzczogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSB9IH1cbiAgICAgICAgfSwgYFxuICAgICAgICAgICAgc3RvcmFnZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICAuLi5vbiBBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudEFjdGl2ZVZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudEFjdGl2ZSB7IHNwbGl0X2RlcHRoIH0gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIGApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VJZHMgPSB0cmFuc2FjdGlvbi5vdXRfbXNncztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlSWRzIHx8IG91dHB1dE1lc3NhZ2VJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gKGF3YWl0IFByb21pc2UuYWxsKG91dHB1dE1lc3NhZ2VJZHMubWFwKChpZCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5tZXNzYWdlcy53YWl0Rm9yKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogJ0ZpbmFsaXplZCcgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IGhlYWRlciB7IC4uLm9uIE1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudCB7IEV4dE91dE1zZ0luZm8geyBjcmVhdGVkX2F0IH0gfSB9JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguaGVhZGVyICYmIHguaGVhZGVyLkV4dE91dE1zZ0luZm87XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG91dHB1dDogcmVzdWx0T3V0cHV0ID8gcmVzdWx0T3V0cHV0Lm91dHB1dCA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2FjdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSdW5NZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoXG4gICAgICAgICAgICB7IGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBzdG9yYWdlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9uIEFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50QWN0aXZlVmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50QWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC4uLm9uIEFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50VW5pbml0VmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50VW5pbml0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb25lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgICk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMocGFyYW1zLmZ1bmN0aW9uTmFtZSwgcGFyYW1zLmFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnRzWzBdKTtcbiAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGFjY291bnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDJcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbikge1xuICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgaWYgKCFvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGAke21lc3NhZ2V9ICgke2NvZGV9KSBhdCAke3BoYXNlfWAsXG4gICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGhhc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkXG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGlmIChvcmRpbmFyeS5zdG9yYWdlX3BoKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG9yZGluYXJ5LnN0b3JhZ2VfcGguc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCJGcm96ZW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBmcm96ZW4gZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZnJvemVuLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2Uuc3RvcmFnZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBcIkRlbGV0ZWRcIikge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJyxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmRlbGV0ZWQsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yZGluYXJ5LmNvbXB1dGVfcGgpIHtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmNvbXB1dGVfcGguU2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gb3JkaW5hcnkuY29tcHV0ZV9waC5Ta2lwcGVkLnJlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdOb1N0YXRlJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ0FjY291bnQgaGFzIG5vIGNvZGUgYW5kIGRhdGEnLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVTa2lwcGVkXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdCYWRTdGF0ZScpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gJ05vR2FzJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ05vIGdhcyB0byBleGVjdXRlIFZNJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9HYXMsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yZGluYXJ5LmNvbXB1dGVfcGguVm0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZtID0gb3JkaW5hcnkuY29tcHV0ZV9waC5WbTtcbiAgICAgICAgICAgIGlmICghdm0uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICB2bS5leGl0X2NvZGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVZtXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmRpbmFyeS5hY3Rpb24pIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gb3JkaW5hcnkuYWN0aW9uO1xuICAgICAgICBpZiAoIWFjdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgYWN0aW9uLm5vX2Z1bmRzXG4gICAgICAgICAgICAgICAgICAgID8gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIDogKCFhY3Rpb24udmFsaWQgPyAnT3V0Ym91bmQgbWVzc2FnZSBpcyBpbnZhbGlkJyA6ICdBY3Rpb24gcGhhc2UgZmFpbGVkJyksXG4gICAgICAgICAgICAgICAgYWN0aW9uLnJlc3VsdF9jb2RlLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAnVHJhbnNhY3Rpb24gYWJvcnRlZCcsXG4gICAgICAgIC0xLFxuICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnVua25vd25cbiAgICApO1xufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBzdGF0dXNcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgZGVzY3JpcHRpb24ge1xuICAgIFx0Li4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7XG4gICAgICAgIE9yZGluYXJ5IHtcbiAgICAgICAgICBhYm9ydGVkXG4gICAgICAgICAgc3RvcmFnZV9waCB7XG4gICAgICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB1dGVfcGgge1xuICAgICAgICAgICAgLi4ub24gVHJDb21wdXRlUGhhc2VTa2lwcGVkVmFyaWFudCB7XG4gICAgICAgICAgICAgIFNraXBwZWQge3JlYXNvbn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLm9uIFRyQ29tcHV0ZVBoYXNlVm1WYXJpYW50IHtcbiAgICAgICAgICAgICAgVm0ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24ge1xuICAgICAgICAgICAgc3VjY2Vzc1xuICAgICAgICAgICAgdmFsaWRcbiAgICAgICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgICAgICBub19mdW5kc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcdH0gICAgXG4gICBgO1xuIl19