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
                  _context16.next = 15;
                  break;
                }

                _context16.t0 = "Send node request failed: ";
                _context16.next = 12;
                return response.text();

              case 12:
                _context16.t1 = _context16.sent;
                _context16.t2 = _context16.t0.concat.call(_context16.t0, _context16.t1);
                throw {
                  code: 3004,
                  message: _context16.t2
                };

              case 15:
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
        var transaction, ordinary;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.processMessage(params.message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }');

              case 2:
                transaction = _context18.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context18.next = 6;
                  break;
                }

                throw {
                  code: 3050,
                  message: 'Deploy failed'
                };

              case 6:
                return _context18.abrupt("return", {
                  address: params.address,
                  alreadyDeployed: false
                });

              case 7:
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

        var transaction, ordinary, outputMessageIds, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.processMessage(params.message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs');

              case 2:
                transaction = _context19.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context19.next = 6;
                  break;
                }

                throw {
                  code: 3040,
                  message: 'Run failed'
                };

              case 6:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context19.next = 9;
                  break;
                }

                return _context19.abrupt("return", {
                  output: null
                });

              case 9:
                _context19.next = 11;
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

              case 11:
                _context19.t0 = function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
                };

                externalMessages = _context19.sent.filter(_context19.t0);
                _context19.next = 15;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body
                  });
                }));

              case 15:
                outputs = _context19.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                return _context19.abrupt("return", resultOutput ? {
                  output: resultOutput.output
                } : {
                  output: null
                });

              case 18:
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
                }, "\n            addr {\n                ...on MsgAddressIntAddrNoneVariant {\n                    AddrNone {\n                        None\n                    }\n                }\n                ...on MsgAddressIntAddrStdVariant {\n                    AddrStd {\n                        workchain_id\n                        address\n                    }\n                }\n                ...on MsgAddressIntAddrVarVariant {\n                    AddrVar {\n                        workchain_id\n                        address\n                    }\n                }\n            }\n            storage {\n                state {\n                    ...on AccountStorageStateAccountActiveVariant {\n                        AccountActive {\n                            code\n                            data\n                        }\n                    }\n                }\n            }\n            ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJrZXlQYWlyIiwibWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VJZEJhc2U2NCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJyZXN1bHQiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwiY3JlYXRlU2lnbmVkUGFyYW1zIiwiY2xpZW50UGxhdGZvcm0iLCJUT05DbGllbnQiLCJjb2RlIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJ2YWx1ZSIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJvcmRpbmFyeSIsImRlc2NyaXB0aW9uIiwiT3JkaW5hcnkiLCJhYm9ydGVkIiwiYWxyZWFkeURlcGxveWVkIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBckJBOzs7Ozs7Ozs7Ozs7Ozs7SUEyTHFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0MsTTs7Ozs7Ozt1QkFPSyxLQUFLRixPQUFMLENBQWFHLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQ3BDQyxrQkFBQUEsRUFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0s7QUFBYjtBQURnQyxpQkFBNUIsRUFFVCwrQkFGUyxDOzs7QUFOTkosZ0JBQUFBLFE7O3NCQVNGQSxRQUFRLElB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QkFBQUEsR0FBRyxFQUFFaEIsTUFBTSxDQUFDZ0IsR0FIa0M7QUFJOUNPLGtCQUFBQSxZQUFZLEVBQUV2QixNQUFNLENBQUN1QixZQUp5QjtBQUs5Q0Msa0JBQUFBLEtBQUssRUFBRXhCLE1BQU0sQ0FBQ3dCLEtBTGdDO0FBTTlDTixrQkFBQUEsT0FBTyxFQUFFbEIsTUFBTSxDQUFDa0I7QUFOOEIsaUJBQTNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhXaUM0RSxxQjs7O0FBbVhoRHJHLGtCQUFrQixDQUFDc0csVUFBbkIsR0FBZ0Msb0JBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OQ2xpZW50IH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IHR5cGUgeyBUT05LZXlQYWlyRGF0YSB9IGZyb20gJy4vVE9OQ3J5cHRvTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSVBhcmFtZXRlciA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSUZ1bmN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzaWduZWQ/OiBib29sZWFuLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbiAgICBvdXRwdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQkkgPSB7XG4gICAgJ0FCSSB2ZXJzaW9uJzogbnVtYmVyLFxuICAgIGZ1bmN0aW9uczogVE9OQ29udHJhY3RBQklGdW5jdGlvbltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RQYWNrYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgaW1hZ2VCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRQYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGluY2x1ZGVJbWFnZTogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRSZXN1bHQgPSB7XG4gICAgaWQ6ID9zdHJpbmcsXG4gICAgYmFsYW5jZUdyYW1zOiA/c3RyaW5nLFxuICAgIGltYWdlQmFzZTY0OiA/c3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zID0ge1xuICAgIHBhY2thZ2U6IFRPTkNvbnRyYWN0UGFja2FnZSxcbiAgICBjb25zdHJ1Y3RvclBhcmFtczogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIGJ5dGVzVG9TaWduQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgc2lnblBhcmFtczogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2U7XG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5NZXNzYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyA9IHtcbiAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgc2lnbkJ5dGVzQmFzZTY0OiBzdHJpbmcsXG4gICAgcHVibGljS2V5SGV4OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBjcmVhdGVTaWduZWRQYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgT3JkaW5hcnk6IHtcbiAgICAgICAgICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXR1czogc3RyaW5nLFxuICAgIG91dF9tc2dzOiBzdHJpbmdbXSxcbn1cblxudHlwZSBRQWRkclN0ZCA9IHtcbiAgICBBZGRyU3RkOiB7XG4gICAgICAgIHdvcmtjaGFpbl9pZDogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgfVxufVxuXG50eXBlIFFBZGRyID0gJ0FkZHJOb25lJyB8IFFBZGRyU3RkXG5cblxudHlwZSBRTWVzc2FnZSA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBFeHRPdXRNc2dJbmZvPzoge1xuICAgICAgICAgICAgc3JjOiBRQWRkcixcbiAgICAgICAgICAgIGRzdDogUUFkZHIsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogP3tcbiAgICAgICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIEdyYW1zOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ3N0b3JhZ2UgeyBiYWxhbmNlIHsgR3JhbXMgfSB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLnN0b3JhZ2UuYmFsYW5jZS5HcmFtcyxcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICAvLyBGYWNhZGUgZnVuY3Rpb25zXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxEZXBsb3lKcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBjcmVhdGlvblxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG5cbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWQ6IG1lc3NhZ2UubWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VJZEJhc2U2NDogbWVzc2FnZS5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJvZHlCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiB7XG4gICAgICAgICAgICBlbmNvZGVkOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICAgICAgICAgIGFkZHJlc3NIZXg6IHN0cmluZyxcbiAgICAgICAgfSA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kuZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzc0hleCxcbiAgICAgICAgICAgIHNpZ25QYXJhbXM6IHJlc3VsdC5lbmNvZGVkLFxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZFJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZFJ1bk1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgc2lnblBhcmFtcyxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZW5jb2RlX21lc3NhZ2Vfd2l0aF9zaWduJywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZShwYXJhbXMuY3JlYXRlU2lnbmVkUGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDbGllbnREb2VzTm90Q29uZmlndXJlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RPTiBDbGllbnQgU0RLIGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGZldGNoIH0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcucmVxdWVzdHNVcmwoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHJlY29yZHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwYXJhbXMubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDA0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7YXdhaXQgcmVzcG9uc2UudGV4dCgpfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsIHJlc3VsdEZpZWxkczogc3RyaW5nKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICBpZDogeyBlcTogbWVzc2FnZS5tZXNzYWdlSWQgfSxcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICB9LCByZXN1bHRGaWVsZHMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeSB7IGFib3J0ZWQgfSB9IH0nLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcmRpbmFyeSA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5O1xuICAgICAgICBpZiAob3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6IDMwNTAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0RlcGxveSBmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeSB7IGFib3J0ZWQgfSB9IH0gb3V0X21zZ3MnLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcmRpbmFyeSA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5O1xuICAgICAgICBpZiAob3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6IDMwNDAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1J1biBmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlSWRzID0gdHJhbnNhY3Rpb24ub3V0X21zZ3M7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZUlkcyB8fCBvdXRwdXRNZXNzYWdlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlczogUU1lc3NhZ2VbXSA9IChhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcCgoaWQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcihcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdib2R5IGhlYWRlciB7IC4uLm9uIE1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudCB7IEV4dE91dE1zZ0luZm8geyBjcmVhdGVkX2F0IH0gfSB9JyxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pKSkuZmlsdGVyKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguaGVhZGVyICYmIHguaGVhZGVyLkV4dE91dE1zZ0luZm87XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdE91dHB1dCA/IHsgb3V0cHV0OiByZXN1bHRPdXRwdXQub3V0cHV0IH0gOiB7IG91dHB1dDogbnVsbCB9O1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGVwbG95TWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuSnMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlUnVuTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgICAgICAgICBpZiAob2JqLl9fdHlwZW5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLl9fdHlwZW5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KFxuICAgICAgICAgICAgeyBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSB9LFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgYWRkciB7XG4gICAgICAgICAgICAgICAgLi4ub24gTXNnQWRkcmVzc0ludEFkZHJOb25lVmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgIEFkZHJOb25lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vbmVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLi5vbiBNc2dBZGRyZXNzSW50QWRkclN0ZFZhcmlhbnQge1xuICAgICAgICAgICAgICAgICAgICBBZGRyU3RkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtjaGFpbl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4uLm9uIE1zZ0FkZHJlc3NJbnRBZGRyVmFyVmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgIEFkZHJWYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2NoYWluX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yYWdlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm9uIEFjY291bnRTdG9yYWdlU3RhdGVBY2NvdW50QWN0aXZlVmFyaWFudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBY2NvdW50QWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICApO1xuICAgICAgICByZW1vdmVUeXBlTmFtZShhY2NvdW50c1swXSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuIl19