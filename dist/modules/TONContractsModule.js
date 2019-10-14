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
                }, "\n            storage {\n                state {\n                    ...on AccountStorageStateAccountActiveVariant {\n                        AccountActive {\n                            code\n                            data\n                        }\n                    }\n                }\n            }\n            ");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJpbnRlcm5hbERlcGxveUpzIiwiaW50ZXJuYWxSdW5KcyIsImludGVybmFsUnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJrZXlQYWlyIiwibWVzc2FnZSIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VJZEJhc2U2NCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJyZXN1bHQiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwiY3JlYXRlU2lnbmVkUGFyYW1zIiwiY2xpZW50UGxhdGZvcm0iLCJUT05DbGllbnQiLCJjb2RlIiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJ2YWx1ZSIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJvcmRpbmFyeSIsImRlc2NyaXB0aW9uIiwiT3JkaW5hcnkiLCJhYm9ydGVkIiwiYWxyZWFkeURlcGxveWVkIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJleHRlcm5hbE1lc3NhZ2VzIiwiZmlsdGVyIiwiZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkiLCJib2R5QmFzZTY0Iiwib3V0cHV0cyIsInJlc3VsdE91dHB1dCIsImZpbmQiLCJ0b0xvd2VyQ2FzZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwib2JqIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBckJBOzs7Ozs7Ozs7Ozs7Ozs7SUEyTHFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0MsTTs7Ozs7Ozt1QkFPSyxLQUFLRixPQUFMLENBQWFHLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQ3BDQyxrQkFBQUEsRUFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0s7QUFBYjtBQURnQyxpQkFBNUIsRUFFVCwrQkFGUyxDOzs7QUFOTkosZ0JBQUFBLFE7O3NCQVNGQSxRQUFRLElB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QUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBSGtDO0FBSTlDTyxrQkFBQUEsWUFBWSxFQUFFdkIsTUFBTSxDQUFDdUIsWUFKeUI7QUFLOUNDLGtCQUFBQSxLQUFLLEVBQUV4QixNQUFNLENBQUN3QixLQUxnQztBQU05Q04sa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBTjhCLGlCQUEzQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFyVmlDNEUscUI7OztBQWdXaERyRyxrQkFBa0IsQ0FBQ3NHLFVBQW5CLEdBQWdDLG9CQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB7IFRPTkNsaWVudCB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OS2V5UGFpckRhdGEgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklQYXJhbWV0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklGdW5jdGlvbiA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc2lnbmVkPzogYm9vbGVhbixcbiAgICBpbnB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG4gICAgb3V0cHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJID0ge1xuICAgICdBQkkgdmVyc2lvbic6IG51bWJlcixcbiAgICBmdW5jdGlvbnM6IFRPTkNvbnRyYWN0QUJJRnVuY3Rpb25bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0UGFja2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBpbmNsdWRlSW1hZ2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUmVzdWx0ID0ge1xuICAgIGlkOiA/c3RyaW5nLFxuICAgIGJhbGFuY2VHcmFtczogP3N0cmluZyxcbiAgICBpbWFnZUJhc2U2NDogP3N0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVBhcmFtcyA9IHtcbiAgICBwYWNrYWdlOiBUT05Db250cmFjdFBhY2thZ2UsXG4gICAgY29uc3RydWN0b3JQYXJhbXM6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVJlc3VsdCA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWxyZWFkeURlcGxveWVkOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlID0ge1xuICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHN0cmluZyxcbiAgICBieXRlc1RvU2lnbkJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TWVzc2FnZSA9IHtcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduUGFyYW1zOiBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbn1cblxudHlwZSBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIHNpZ25QYXJhbXM6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlO1xufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuTWVzc2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZTtcbn1cblxudHlwZSBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMgPSB7XG4gICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHNpZ25CeXRlc0Jhc2U2NDogc3RyaW5nLFxuICAgIHB1YmxpY0tleUhleDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgY3JlYXRlU2lnbmVkUGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5SZXN1bHQgPSB7XG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIE9yZGluYXJ5OiB7XG4gICAgICAgICAgICBhYm9ydGVkOiBib29sZWFuLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgLy8gRmFjYWRlIGZ1bmN0aW9uc1xuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWwocGFyYW1zOiBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxuXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlSWRCYXNlNjQ6IG1lc3NhZ2UubWVzc2FnZUlkQmFzZTY0LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzc1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1xuICAgICAgICAgICAgZW5jb2RlZDogVE9OQ29udHJhY3RVbnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzSGV4OiBzdHJpbmcsXG4gICAgICAgIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95LmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiByZXN1bHQuZW5jb2RlZCxcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWRSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIHNpZ25QYXJhbXMsXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtc1xuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2UocGFyYW1zLmNyZWF0ZVNpZ25lZFBhcmFtcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXNcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHBhcmFtcy5jcmVhdGVTaWduZWRQYXJhbXMpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBzZW5kTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ2xpZW50RG9lc05vdENvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUT04gQ2xpZW50IFNESyBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogMzAwNCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgU2VuZCBub2RlIHJlcXVlc3QgZmFpbGVkOiAke2F3YWl0IHJlc3BvbnNlLnRleHQoKX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UobWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlLCByZXN1bHRGaWVsZHM6IHN0cmluZyk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IG1lc3NhZ2UubWVzc2FnZUlkIH0sXG4gICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgfSwgcmVzdWx0RmllbGRzKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NEZXBsb3lNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDUwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdEZXBsb3kgZmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHByb2Nlc3NSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9IG91dF9tc2dzJyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDQwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSdW4gZmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSAoYXdhaXQgUHJvbWlzZS5hbGwob3V0cHV0TWVzc2FnZUlkcy5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLm1lc3NhZ2VzLndhaXRGb3IoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnYm9keSBoZWFkZXIgeyAuLi5vbiBNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnQgeyBFeHRPdXRNc2dJbmZvIHsgY3JlYXRlZF9hdCB9IH0gfScsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSkpLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmhlYWRlciAmJiB4LmhlYWRlci5FeHRPdXRNc2dJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRPdXRwdXQgPyB7IG91dHB1dDogcmVzdWx0T3V0cHV0Lm91dHB1dCB9IDogeyBvdXRwdXQ6IG51bGwgfTtcbiAgICB9XG5cbiAgICAvLyBJbnRlcm5hbHNcblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5OYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0RlcGxveU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc1J1bk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMocGFyYW1zOiBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVUeXBlTmFtZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeShcbiAgICAgICAgICAgIHsgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIHN0b3JhZ2Uge1xuICAgICAgICAgICAgICAgIHN0YXRlIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ub24gQWNjb3VudFN0b3JhZ2VTdGF0ZUFjY291bnRBY3RpdmVWYXJpYW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnRBY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgICk7XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnRzWzBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG4iXX0=