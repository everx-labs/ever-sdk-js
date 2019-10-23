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
                transaction_id: transaction.id
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
              _context25.next = 32;
              break;
            }

            if (!ordinary.compute_ph.Skipped) {
              _context25.next = 25;
              break;
            }

            reason = ordinary.compute_ph.Skipped.reason;
            error.data.phase = _TONClient.TONClientTransactionPhase.computeSkipped;
            error.message = 'Compute phase skipped by unknown reason';

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

          case 25:
            if (!ordinary.compute_ph.Vm) {
              _context25.next = 32;
              break;
            }

            vm = ordinary.compute_ph.Vm;

            if (vm.success) {
              _context25.next = 32;
              break;
            }

            error.data.phase = _TONClient.TONClientTransactionPhase.computeVm;
            error.message = 'VM terminated with exception';
            error.code = vm.exit_code;
            throw error;

          case 32:
            if (!ordinary.action) {
              _context25.next = 41;
              break;
            }

            action = ordinary.action;

            if (action.success) {
              _context25.next = 41;
              break;
            }

            error.data.phase = _TONClient.TONClientTransactionPhase.action;
            error.code = action.result_code;
            error.message = "Action phase failed";

            if (action.no_funds) {
              error.message = 'Too low balance to send outbound message';
            }

            if (!action.valid) {
              error.message = 'Outbound message is invalid';
            }

            throw error;

          case 41:
            throw error;

          case 42:
          case "end":
            return _context25.stop();
        }
      }
    }, _callee25);
  }));
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = "\n    id\n    status\n    out_msgs\n    description {\n    \t...on TransactionDescriptionOrdinaryVariant {\n        Ordinary {\n          aborted\n          storage_ph {\n            status_change\n          }\n          compute_ph {\n            ...on TrComputePhaseSkippedVariant {\n              Skipped {reason}\n            }\n            ...on TrComputePhaseVmVariant {\n              Vm {\n                success\n                exit_code\n              }\n            }\n          }\n          action {\n            success\n            valid\n            result_code\n            no_funds\n          }\n        }\n      }\n  \t}    \n   ";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJpbml0UGFyYW1zIiwia2V5UGFpciIsIm1lc3NhZ2UiLCJtZXNzYWdlSWQiLCJtZXNzYWdlSWRCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwicHVibGljS2V5SGV4IiwicmVzdWx0IiwiYWRkcmVzc0hleCIsInNpZ25QYXJhbXMiLCJlbmNvZGVkIiwiY3JlYXRlU2lnbmVkTWVzc2FnZSIsImNyZWF0ZVNpZ25lZFBhcmFtcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50Iiwic291cmNlIiwiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJjbGllbnQiLCJjb2RlIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJ2YWx1ZSIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwidHJhbnNhY3Rpb24iLCJjaGVja1RyYW5zYWN0aW9uIiwiYWxyZWFkeURlcGxveWVkIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSIsIm9yZGluYXJ5IiwiZGVzY3JpcHRpb24iLCJPcmRpbmFyeSIsImFib3J0ZWQiLCJlcnJvciIsIm5vZGUiLCJkYXRhIiwicGhhc2UiLCJUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlIiwidW5rbm93biIsInRyYW5zYWN0aW9uX2lkIiwic3RvcmFnZV9waCIsInN0YXR1c19jaGFuZ2UiLCJUT05DbGllbnRTdG9yYWdlU3RhdHVzIiwiZnJvemVuIiwiZGVsZXRlZCIsImNvbXB1dGVfcGgiLCJTa2lwcGVkIiwicmVhc29uIiwiY29tcHV0ZVNraXBwZWQiLCJUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyIsIm5vU3RhdGUiLCJiYWRTdGF0ZSIsIm5vR2FzIiwiVm0iLCJ2bSIsInN1Y2Nlc3MiLCJjb21wdXRlVm0iLCJleGl0X2NvZGUiLCJhY3Rpb24iLCJyZXN1bHRfY29kZSIsIm5vX2Z1bmRzIiwidmFsaWQiXSwibWFwcGluZ3Mi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LFlBQUFBLEtBQUssQ0FBQ2hFLElBQU4sR0FBYXFGLEVBQUUsQ0FBQ0csU0FBaEI7QUF4RGhCLGtCQXlEc0J4QixLQXpEdEI7O0FBQUE7QUFBQSxpQkE4RFFKLFFBQVEsQ0FBQzZCLE1BOURqQjtBQUFBO0FBQUE7QUFBQTs7QUErRGNBLFlBQUFBLE1BL0RkLEdBK0R1QjdCLFFBQVEsQ0FBQzZCLE1BL0RoQzs7QUFBQSxnQkFnRWFBLE1BQU0sQ0FBQ0gsT0FoRXBCO0FBQUE7QUFBQTtBQUFBOztBQWlFWXRCLFlBQUFBLEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxLQUFYLEdBQW1CQyxxQ0FBMEJxQixNQUE3QztBQUNBekIsWUFBQUEsS0FBSyxDQUFDaEUsSUFBTixHQUFheUYsTUFBTSxDQUFDQyxXQUFwQjtBQUNBMUIsWUFBQUEsS0FBSyxDQUFDbEYsT0FBTixHQUFnQixxQkFBaEI7O0FBQ0EsZ0JBQUkyRyxNQUFNLENBQUNFLFFBQVgsRUFBcUI7QUFDakIzQixjQUFBQSxLQUFLLENBQUNsRixPQUFOLEdBQWdCLDBDQUFoQjtBQUNIOztBQUNELGdCQUFJLENBQUMyRyxNQUFNLENBQUNHLEtBQVosRUFBbUI7QUFDZjVCLGNBQUFBLEtBQUssQ0FBQ2xGLE9BQU4sR0FBZ0IsNkJBQWhCO0FBQ0g7O0FBekViLGtCQTBFa0JrRixLQTFFbEI7O0FBQUE7QUFBQSxrQkE4RVVBLEtBOUVWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFpRkEsSUFBTXZDLGtCQUFrQiw2b0JBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgXG4gICAgVE9OQ2xpZW50LCBcbiAgICBUT05DbGllbnRFcnJvclNvdXJjZSxcbiAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLFxuICAgIFRPTkNsaWVudFN0b3JhZ2VQaGFzZVN0YXR1c1xufSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNpZ25lZD86IGJvb2xlYW4sXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxuICAgIG91dHB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSSA9IHtcbiAgICAnQUJJIHZlcnNpb24nOiBudW1iZXIsXG4gICAgZnVuY3Rpb25zOiBUT05Db250cmFjdEFCSUZ1bmN0aW9uW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG4gICAgaW1hZ2VCYXNlNjQ6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAgaW5pdFBhcmFtcz86IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVJlc3VsdCA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWxyZWFkeURlcGxveWVkOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlID0ge1xuICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHN0cmluZyxcbiAgICBieXRlc1RvU2lnbkJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TWVzc2FnZSA9IHtcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduUGFyYW1zOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbn1cblxudHlwZSBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZTtcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5SZXN1bHQgPSB7XG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIE9yZGluYXJ5OiB7XG4gICAgICAgICAgICBhYm9ydGVkOiBib29sZWFuLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwocGFyYW1zOiBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxuXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZEJhc2U2NDogbWVzc2FnZS5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLmtleVBhaXIucHVibGljLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczogcmVzdWx0LmVuY29kZWQsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBzaWduUGFyYW1zID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRNZXNzYWdlUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXMuY3JlYXRlU2lnbmVkUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcGFyc2luZ1xuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgc291cmNlOiBUT05DbGllbnRFcnJvclNvdXJjZS5jbGllbnQsXG4gICAgICAgICAgICAgICAgY29kZTogJ0NsaWVudERvZXNOb3RDb25maWd1cmVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVE9OIENsaWVudCBTREsgZG9lcyBub3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIHNvdXJjZTogVE9OQ2xpZW50RXJyb3JTb3VyY2UuY2xpZW50LFxuICAgICAgICAgICAgICAgIGNvZGU6IDMwMDQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHthd2FpdCByZXNwb25zZS50ZXh0KCl9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSwgcmVzdWx0RmllbGRzOiBzdHJpbmcpOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBtZXNzYWdlLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgIH0sIHJlc3VsdEZpZWxkcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCBjaGVja1RyYW5zYWN0aW9uKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSAoYXdhaXQgUHJvbWlzZS5hbGwob3V0cHV0TWVzc2FnZUlkcy5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLm1lc3NhZ2VzLndhaXRGb3IoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnYm9keSBoZWFkZXIgeyAuLi5vbiBNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnQgeyBFeHRPdXRNc2dJbmZvIHsgY3JlYXRlZF9hdCB9IH0gfScsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSkpLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmhlYWRlciAmJiB4LmhlYWRlci5FeHRPdXRNc2dJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRPdXRwdXQgPyB7IG91dHB1dDogcmVzdWx0T3V0cHV0Lm91dHB1dCB9IDogeyBvdXRwdXQ6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGVwbG95TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KFxuICAgICAgICAgICAgeyBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgc3RvcmFnZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUge1xuICAgICAgICAgICAgICAgICAgICAuLi5vbiBBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudEFjdGl2ZVZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudEFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuLi5vbiBBY2NvdW50U3RvcmFnZVN0YXRlQWNjb3VudFVuaW5pdFZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudFVuaW5pdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50c1swXSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfSAgICBcbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbikge1xuICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgaWYgKCFvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSB7XG4gICAgICAgIHNvdXJjZTogVE9OQ2xpZW50RXJyb3JTb3VyY2Uubm9kZSxcbiAgICAgICAgY29kZTogLTEsXG4gICAgICAgIG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWJvcnRlZFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBwaGFzZTogVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG9yZGluYXJ5LnN0b3JhZ2VfcGgpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gb3JkaW5hcnkuc3RvcmFnZV9waC5zdGF0dXNfY2hhbmdlO1xuICAgICAgICBpZiAoc3RhdHVzID09IFwiRnJvemVuXCIpIHtcbiAgICAgICAgICAgIGVycm9yLmNvZGUgPSBUT05DbGllbnRTdG9yYWdlU3RhdHVzLmZyb3plbjtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnQWNjb3VudCB3YXMgZnJvemVuIGR1ZSBzdG9yYWdlIHBoYXNlJztcbiAgICAgICAgICAgIGVycm9yLmRhdGEucGhhc2UgPSBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09IFwiRGVsZXRlZFwiKSB7XG4gICAgICAgICAgICBlcnJvci5jb2RlID0gVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5kZWxldGVkO1xuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdBY2NvdW50IHdhcyBkZWxldGVkIGR1ZSBzdG9yYWdlIHBoYXNlJztcbiAgICAgICAgICAgIGVycm9yLmRhdGEucGhhc2UgPSBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvcmRpbmFyeS5jb21wdXRlX3BoKSB7XG4gICAgICAgIGlmIChvcmRpbmFyeS5jb21wdXRlX3BoLlNraXBwZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlYXNvbiA9IG9yZGluYXJ5LmNvbXB1dGVfcGguU2tpcHBlZC5yZWFzb247XG4gICAgICAgICAgICBlcnJvci5kYXRhLnBoYXNlID0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZDtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnQ29tcHV0ZSBwaGFzZSBza2lwcGVkIGJ5IHVua25vd24gcmVhc29uJztcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT0gJ05vU3RhdGUnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuY29kZSA9IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vU3RhdGU7XG4gICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSA9ICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT0gJ0JhZFN0YXRlJykge1xuICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5iYWRTdGF0ZTtcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ0FjY291bnQgaGFzIGJhZCBzdGF0ZTogZnJvemVuIG9yIGRlbGV0ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PSAnTm9HYXMnKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IuY29kZSA9IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzLm5vR2FzO1xuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yZGluYXJ5LmNvbXB1dGVfcGguVm0pIHtcbiAgICAgICAgICAgIGNvbnN0IHZtID0gb3JkaW5hcnkuY29tcHV0ZV9waC5WbTtcbiAgICAgICAgICAgIGlmICghdm0uc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGVycm9yLmRhdGEucGhhc2UgPSBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbTtcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nO1xuICAgICAgICAgICAgICAgIGVycm9yLmNvZGUgPSB2bS5leGl0X2NvZGU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3JkaW5hcnkuYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IG9yZGluYXJ5LmFjdGlvbjtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgZXJyb3IuZGF0YS5waGFzZSA9IFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uO1xuICAgICAgICAgICAgZXJyb3IuY29kZSA9IGFjdGlvbi5yZXN1bHRfY29kZTtcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgPSBcIkFjdGlvbiBwaGFzZSBmYWlsZWRcIjtcbiAgICAgICAgICAgIGlmIChhY3Rpb24ubm9fZnVuZHMpIHtcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ1RvbyBsb3cgYmFsYW5jZSB0byBzZW5kIG91dGJvdW5kIG1lc3NhZ2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3Rpb24udmFsaWQpIHtcbiAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlID0gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IGVycm9yXG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIHN0YXR1c1xuICAgIG91dF9tc2dzXG4gICAgZGVzY3JpcHRpb24ge1xuICAgIFx0Li4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7XG4gICAgICAgIE9yZGluYXJ5IHtcbiAgICAgICAgICBhYm9ydGVkXG4gICAgICAgICAgc3RvcmFnZV9waCB7XG4gICAgICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbXB1dGVfcGgge1xuICAgICAgICAgICAgLi4ub24gVHJDb21wdXRlUGhhc2VTa2lwcGVkVmFyaWFudCB7XG4gICAgICAgICAgICAgIFNraXBwZWQge3JlYXNvbn1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLm9uIFRyQ29tcHV0ZVBoYXNlVm1WYXJpYW50IHtcbiAgICAgICAgICAgICAgVm0ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBhY3Rpb24ge1xuICAgICAgICAgICAgc3VjY2Vzc1xuICAgICAgICAgICAgdmFsaWRcbiAgICAgICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgICAgICBub19mdW5kc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICBcdH0gICAgXG4gICBgXG4iXX0=