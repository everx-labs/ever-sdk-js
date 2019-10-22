"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONModule2 = require("../TONModule");

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
                _context6.next = 2;
                return this.requestLibrary('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                });

              case 2:
                message = _context6.sent;
                return _context6.abrupt("return", {
                  message: {
                    messageId: message.messageId,
                    messageIdBase64: message.messageIdBase64,
                    messageBodyBase64: message.messageBodyBase64
                  },
                  address: message.address
                });

              case 4:
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
                _context7.next = 2;
                return this.requestLibrary('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                message = _context7.sent;
                return _context7.abrupt("return", {
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 4:
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
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.requestLibrary('contracts.run.output', params));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function decodeRunOutput(_x12) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.requestLibrary('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function decodeInputMessageBody(_x13) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.requestLibrary('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function decodeOutputMessageBody(_x14) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        var clientPlatform, fetch, url, response;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context16.next = 3;
                  break;
                }

                throw {
                  source: _TONClient.TONClientErrorSource.client,
                  code: 'ClientDoesNotConfigured',
                  message: 'TON Client SDK does not configured'
                };

              case 3:
                fetch = clientPlatform.fetch;
                url = this.config.requestsUrl();
                _context16.next = 7;
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
                response = _context16.sent;

                if (!(response.status !== 200)) {
                  _context16.next = 16;
                  break;
                }

                _context16.t0 = _TONClient.TONClientErrorSource.client;
                _context16.t1 = "Send node request failed: ";
                _context16.next = 13;
                return response.text();

              case 13:
                _context16.t2 = _context16.sent;
                _context16.t3 = _context16.t1.concat.call(_context16.t1, _context16.t2);
                throw {
                  source: _context16.t0,
                  code: 3004,
                  message: _context16.t3
                };

              case 16:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function sendMessage(_x15) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(message, resultFields) {
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.sendMessage(message);

              case 2:
                return _context17.abrupt("return", this.queries.transactions.waitFor({
                  id: {
                    eq: message.messageId
                  },
                  status: {
                    "in": ['Preliminary', 'Proposed', 'Finalized']
                  }
                }, resultFields));

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function processMessage(_x16, _x17) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
        var transaction;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.processMessage(params.message, transactionDetails);

              case 2:
                transaction = _context18.sent;
                _context18.next = 5;
                return checkTransaction(transaction);

              case 5:
                return _context18.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false
                });

              case 6:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function processDeployMessage(_x18) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(params) {
        var _this2 = this;

        var transaction, outputMessageIds, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.processMessage(params.message, transactionDetails);

              case 2:
                transaction = _context19.sent;
                _context19.next = 5;
                return checkTransaction(transaction);

              case 5:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context19.next = 8;
                  break;
                }

                return _context19.abrupt("return", {
                  output: null
                });

              case 8:
                _context19.next = 10;
                return Promise.all(outputMessageIds.map(function (id) {
                  return _this2.queries.messages.waitFor({
                    id: {
                      eq: id
                    },
                    status: {
                      "in": ['Preliminary', 'Proposed', 'Finalized']
                    }
                  }, 'body header { ...on MessageHeaderExtOutMsgInfoVariant { ExtOutMsgInfo { created_at } } }');
                }));

              case 10:
                _context19.t0 = function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
                };

                externalMessages = _context19.sent.filter(_context19.t0);
                _context19.next = 14;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body
                  });
                }));

              case 14:
                outputs = _context19.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                return _context19.abrupt("return", resultOutput ? {
                  output: resultOutput.output
                } : {
                  output: null
                });

              case 17:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function processRunMessage(_x19) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function internalDeployNative(_x20) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context21.abrupt("return", _context21.sent);

              case 3:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function internalRunNative(_x21) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(params) {
        var message;
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context22.sent;
                return _context22.abrupt("return", this.processDeployMessage(message));

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function internalDeployJs(_x22) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(params) {
        var message;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context23.sent;
                return _context23.abrupt("return", this.processRunMessage(message));

              case 4:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function internalRunJs(_x23) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(params) {
        var removeTypeName, accounts;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
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

                _context24.next = 3;
                return this.queries.accounts.query({
                  id: {
                    eq: params.address
                  }
                }, "\n            storage {\n                state {\n                    ...on AccountStorageStateAccountActiveVariant {\n                        AccountActive {\n                            code\n                            data\n                        }\n                    }\n                    ...on AccountStorageStateAccountUninitVariant {\n                        AccountUninit {\n                            None\n                        }\n                    }\n                }\n            }\n            ");

              case 3:
                accounts = _context24.sent;
                removeTypeName(accounts[0]);
                return _context24.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: accounts[0],
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function internalRunLocalJs(_x24) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x25) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee25(transaction) {
    var ordinary, error, status, reason, vm, action;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) {
        switch (_context25.prev = _context25.next) {
          case 0:
            ordinary = transaction.description.Ordinary;

            if (ordinary.aborted) {
              _context25.next = 3;
              break;
            }

            return _context25.abrupt("return");

          case 3:
            error = {
              source: _TONClient.TONClientErrorSource.node,
              code: -1,
              message: "Transaction aborted",
              data: {
                phase: _TONClient.TONClientTransactionPhase.unknown,
                transactionId: transaction.id
              }
            };

            if (!ordinary.storage_ph) {
              _context25.next = 16;
              break;
            }

            status = ordinary.storage_ph.status_change;

            if (!(status == "Frozen")) {
              _context25.next = 11;
              break;
            }

            error.code = TONClientStorageStatus.frozen;
            error.message = 'Account was frozen due storage phase';
            error.data.phase = _TONClient.TONClientTransactionPhase.storage;
            throw error;

          case 11:
            if (!(status == "Deleted")) {
              _context25.next = 16;
              break;
            }

            error.code = TONClientStorageStatus.deleted;
            error.message = 'Account was deleted due storage phase';
            error.data.phase = _TONClient.TONClientTransactionPhase.storage;
            throw error;

          case 16:
            if (!ordinary.compute_ph) {
              _context25.next = 31;
              break;
            }

            if (!ordinary.compute_ph.Skipped) {
              _context25.next = 24;
              break;
            }

            reason = ordinary.compute_ph.Skipped.reason;
            error.data.phase = _TONClient.TONClientTransactionPhase.computeSkipped;

            if (reason == 'NoState') {
              error.code = TONClientComputeSkippedStatus.noState;
              error.message = 'Account has no code and data';
            }

            if (reason == 'BadState') {
              error.code = TONClientComputeSkippedStatus.badState;
              error.message = 'Account has bad state: frozen or deleted';
            }

            if (reason == 'NoGas') {
              error.code = TONClientComputeSkippedStatus.noGas;
              error.message = 'No gas to execute VM';
            }

            throw error;

          case 24:
            if (!ordinary.compute_ph.Vm) {
              _context25.next = 31;
              break;
            }

            vm = ordinary.compute_ph.Vm;

            if (vm.success) {
              _context25.next = 31;
              break;
            }

            error.data.phase = _TONClient.TONClientTransactionPhase.computeVm;
            error.message = 'VM terminated with exception';
            error.code = vm.exit_code;
            throw error;

          case 31:
            if (!ordinary.action) {
              _context25.next = 39;
              break;
            }

            action = ordinary.action;

            if (action.success) {
              _context25.next = 39;
              break;
            }

            error.data.phase = _TONClient.TONClientTransactionPhase.action;
            error.code = action.result_code;

            if (action.no_funds) {
              error.message = 'Too low balance to send outbound message';
            }

            if (!action.valid) {
              error.message = 'Outbound message is invalid';
            }

            throw error;

          case 39:
            throw error;

          case 40:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    status\n    out_msgs\n    description {\n    \t...on TransactionDescriptionOrdinaryVariant {\n        Ordinary {\n          aborted\n          storage_ph {\n            status_change\n          }\n          compute_ph {\n            ...on TrComputePhaseSkippedVariant {\n              Skipped {reason}\n            }\n            ...on TrComputePhaseVmVariant {\n              Vm {\n                success\n                exit_code\n              }\n            }\n          }\n          action {\n            success\n            valid\n            result_code\n            no_funds\n          }\n        }\n      }\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwia2V5UGFpciIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlSWRCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50Iiwic291cmNlIiwiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJjbGllbnQiLCJjb2RlIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJ2YWx1ZSIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwidHJhbnNhY3Rpb24iLCJjaGVja1RyYW5zYWN0aW9uIiwiYWxyZWFkeURlcGxveWVkIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIm9yZGluYXJ5IiwiZGVzY3JpcHRpb24iLCJPcmRpbmFyeSIsImFib3J0ZWQiLCJlcnJvciIsIm5vZGUiLCJkYXRhIiwicGhhc2UiLCJUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlIiwidW5rbm93biIsInRyYW5zYWN0aW9uSWQiLCJzdG9yYWdlX3BoIiwic3RhdHVzX2NoYW5nZSIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJmcm96ZW4iLCJkZWxldGVkIiwiY29tcHV0ZV9waCIsIlNraXBwZWQiLCJyZWFzb24iLCJjb21wdXRlU2tpcHBlZCIsIlRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzIiwibm9TdGF0ZSIsImJhZFN0YXRlIiwibm9HYXMiLCJWbSIsInZtIiwic3VjY2VzcyIsImNvbXB1dGVWbSIsImV4aXRfY29kZSIsImFjdGlvbiIsInJlc3VsdF9jb2RlIiwibm9fZnVuZHMiLCJ2YWxpZCJdLCJtYXBwaW5ncyI6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QWhCO0FBdkRoQixrQkF3RHNCeEIsS0F4RHRCOztBQUFBO0FBQUEsaUJBNkRRSixRQUFRLENBQUM2QixNQTdEakI7QUFBQTtBQUFBO0FBQUE7O0FBOERjQSxZQUFBQSxNQTlEZCxHQThEdUI3QixRQUFRLENBQUM2QixNQTlEaEM7O0FBQUEsZ0JBK0RhQSxNQUFNLENBQUNILE9BL0RwQjtBQUFBO0FBQUE7QUFBQTs7QUFnRVl0QixZQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBV0MsS0FBWCxHQUFtQkMscUNBQTBCcUIsTUFBN0M7QUFDQXpCLFlBQUFBLEtBQUssQ0FBQ2hFLElBQU4sR0FBYXlGLE1BQU0sQ0FBQ0MsV0FBcEI7O0FBQ0EsZ0JBQUlELE1BQU0sQ0FBQ0UsUUFBWCxFQUFxQjtBQUNqQjNCLGNBQUFBLEtBQUssQ0FBQ2xGLE9BQU4sR0FBZ0IsMENBQWhCO0FBQ0g7O0FBQ0QsZ0JBQUksQ0FBQzJHLE1BQU0sQ0FBQ0csS0FBWixFQUFtQjtBQUNmNUIsY0FBQUEsS0FBSyxDQUFDbEYsT0FBTixHQUFnQiw2QkFBaEI7QUFDSDs7QUF2RWIsa0JBd0VrQmtGLEtBeEVsQjs7QUFBQTtBQUFBLGtCQTRFVUEsS0E1RVY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQStFQSxJQUFNdkMsa0JBQWtCLDZvQkFBeEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgeyBcbiAgICBUT05DbGllbnQsIFxuICAgIFRPTkNsaWVudEVycm9yU291cmNlLFxuICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UsXG4gICAgVE9OQ2xpZW50U3RvcmFnZVBoYXNlU3RhdHVzXG59IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OS2V5UGFpckRhdGEgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklQYXJhbWV0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklGdW5jdGlvbiA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc2lnbmVkPzogYm9vbGVhbixcbiAgICBpbnB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG4gICAgb3V0cHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJID0ge1xuICAgICdBQkkgdmVyc2lvbic6IG51bWJlcixcbiAgICBmdW5jdGlvbnM6IFRPTkNvbnRyYWN0QUJJRnVuY3Rpb25bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0UGFja2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBpbmNsdWRlSW1hZ2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUmVzdWx0ID0ge1xuICAgIGlkOiA/c3RyaW5nLFxuICAgIGJhbGFuY2VHcmFtczogP3N0cmluZyxcbiAgICBpbWFnZUJhc2U2NDogP3N0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVBhcmFtcyA9IHtcbiAgICBwYWNrYWdlOiBUT05Db250cmFjdFBhY2thZ2UsXG4gICAgY29uc3RydWN0b3JQYXJhbXM6IGFueSxcbiAgICBpbml0UGFyYW1zPzogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIGJ5dGVzVG9TaWduQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgc2lnblBhcmFtczogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2U7XG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyA9IHtcbiAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgc2lnbkJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgT3JkaW5hcnk6IHtcbiAgICAgICAgICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXR1czogc3RyaW5nLFxuICAgIG91dF9tc2dzOiBzdHJpbmdbXSxcbn1cblxudHlwZSBRQWRkclN0ZCA9IHtcbiAgICBBZGRyU3RkOiB7XG4gICAgICAgIHdvcmtjaGFpbl9pZDogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgfVxufVxuXG50eXBlIFFBZGRyID0gJ0FkZHJOb25lJyB8IFFBZGRyU3RkXG5cblxudHlwZSBRTWVzc2FnZSA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBFeHRPdXRNc2dJbmZvPzoge1xuICAgICAgICAgICAgc3JjOiBRQWRkcixcbiAgICAgICAgICAgIGRzdDogUUFkZHIsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogP3tcbiAgICAgICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIEdyYW1zOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ3N0b3JhZ2UgeyBiYWxhbmNlIHsgR3JhbXMgfSB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLnN0b3JhZ2UuYmFsYW5jZS5HcmFtcyxcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG5cbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZDogbWVzc2FnZS5tZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3NcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IFRPTkNsaWVudEVycm9yU291cmNlLmNsaWVudCxcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ2xpZW50RG9lc05vdENvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUT04gQ2xpZW50IFNESyBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBUT05DbGllbnRFcnJvclNvdXJjZS5jbGllbnQsXG4gICAgICAgICAgICAgICAgY29kZTogMzAwNCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke2F3YWl0IHJlc3BvbnNlLnRleHQoKX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLCByZXN1bHRGaWVsZHM6IHN0cmluZyk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IG1lc3NhZ2UubWVzc2FnZUlkIH0sXG4gICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgfSwgcmVzdWx0RmllbGRzKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlSWRzID0gdHJhbnNhY3Rpb24ub3V0X21zZ3M7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZUlkcyB8fCBvdXRwdXRNZXNzYWdlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IChhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IGhlYWRlciB7IC4uLm9uIE1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudCB7IEV4dE91dE1zZ0luZm8geyBjcmVhdGVkX2F0IH0gfSB9JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguaGVhZGVyICYmIHguaGVhZGVyLkV4dE91dE1zZ0luZm87XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdE91dHB1dCA/IHsgb3V0cHV0OiByZXN1bHRPdXRwdXQub3V0cHV0IH0gOiB7IG91dHB1dDogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NEZXBsb3lNZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NSdW5NZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlVHlwZU5hbWUob2JqOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChvYmouX190eXBlbmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVHlwZU5hbWUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoXG4gICAgICAgICAgICB7IGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9IH0sXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICBzdG9yYWdlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9uIEFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50QWN0aXZlVmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50QWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC4uLm9uIEFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50VW5pbml0VmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50VW5pbml0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb25lXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnRzWzBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9ICAgIFxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuXG5hc3luYyBmdW5jdGlvbiBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKSB7XG4gICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICBpZiAoIW9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlcnJvciA9IHtcbiAgICAgICAgc291cmNlOiBUT05DbGllbnRFcnJvclNvdXJjZS5ub2RlLFxuICAgICAgICBjb2RlOiAtMSxcbiAgICAgICAgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiBhYm9ydGVkXCIsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHBoYXNlOiBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnVua25vd24sXG4gICAgICAgICAgICB0cmFuc2FjdGlvbklkOiB0cmFuc2FjdGlvbi5pZFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGlmIChvcmRpbmFyeS5zdG9yYWdlX3BoKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IG9yZGluYXJ5LnN0b3JhZ2VfcGguc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIkZyb3plblwiKSB7XG4gICAgICAgICAgICBlcnJvci5jb2RlID0gVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW47XG4gICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZSc7XG4gICAgICAgICAgICBlcnJvci5kYXRhLnBoYXNlID0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIkRlbGV0ZWRcIikge1xuICAgICAgICAgICAgZXJyb3IuY29kZSA9IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZDtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnQWNjb3VudCB3YXMgZGVsZXRlZCBkdWUgc3RvcmFnZSBwaGFzZSc7XG4gICAgICAgICAgICBlcnJvci5kYXRhLnBoYXNlID0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JkaW5hcnkuY29tcHV0ZV9waCkge1xuICAgICAgICBpZiAob3JkaW5hcnkuY29tcHV0ZV9waC5Ta2lwcGVkKSB7XG4gICAgICAgICAgICBjb25zdCByZWFzb24gPSBvcmRpbmFyeS5jb21wdXRlX3BoLlNraXBwZWQucmVhc29uO1xuICAgICAgICAgICAgZXJyb3IuZGF0YS5waGFzZSA9IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQ7XG4gICAgICAgICAgICBpZiAocmVhc29uID09ICdOb1N0YXRlJykge1xuICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub1N0YXRlO1xuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnQWNjb3VudCBoYXMgbm8gY29kZSBhbmQgZGF0YSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVhc29uID09ICdCYWRTdGF0ZScpIHtcbiAgICAgICAgICAgICAgICBlcnJvci5jb2RlID0gVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGU7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT0gJ05vR2FzJykge1xuICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcztcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ05vIGdhcyB0byBleGVjdXRlIFZNJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRpbmFyeS5jb21wdXRlX3BoLlZtKSB7XG4gICAgICAgICAgICBjb25zdCB2bSA9IG9yZGluYXJ5LmNvbXB1dGVfcGguVm07XG4gICAgICAgICAgICBpZiAoIXZtLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBlcnJvci5kYXRhLnBoYXNlID0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm07XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdWTSB0ZXJtaW5hdGVkIHdpdGggZXhjZXB0aW9uJztcbiAgICAgICAgICAgICAgICBlcnJvci5jb2RlID0gdm0uZXhpdF9jb2RlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9yZGluYXJ5LmFjdGlvbikge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBvcmRpbmFyeS5hY3Rpb247XG4gICAgICAgIGlmICghYWN0aW9uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGVycm9yLmRhdGEucGhhc2UgPSBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmFjdGlvbjtcbiAgICAgICAgICAgIGVycm9yLmNvZGUgPSBhY3Rpb24ucmVzdWx0X2NvZGU7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLm5vX2Z1bmRzKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYWN0aW9uLnZhbGlkKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdPdXRib3VuZCBtZXNzYWdlIGlzIGludmFsaWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvclxufVxuXG5jb25zdCB0cmFuc2FjdGlvbkRldGFpbHMgPSBgXG4gICAgaWRcbiAgICBzdGF0dXNcbiAgICBvdXRfbXNnc1xuICAgIGRlc2NyaXB0aW9uIHtcbiAgICBcdC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQge1xuICAgICAgICBPcmRpbmFyeSB7XG4gICAgICAgICAgYWJvcnRlZFxuICAgICAgICAgIHN0b3JhZ2VfcGgge1xuICAgICAgICAgICAgc3RhdHVzX2NoYW5nZVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb21wdXRlX3BoIHtcbiAgICAgICAgICAgIC4uLm9uIFRyQ29tcHV0ZVBoYXNlU2tpcHBlZFZhcmlhbnQge1xuICAgICAgICAgICAgICBTa2lwcGVkIHtyZWFzb259XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLi5vbiBUckNvbXB1dGVQaGFzZVZtVmFyaWFudCB7XG4gICAgICAgICAgICAgIFZtIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzXG4gICAgICAgICAgICAgICAgZXhpdF9jb2RlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYWN0aW9uIHtcbiAgICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgICAgIHZhbGlkXG4gICAgICAgICAgICByZXN1bHRfY29kZVxuICAgICAgICAgICAgbm9fZnVuZHNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXHR9ICAgIFxuICAgYFxuIl19