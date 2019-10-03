"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
    }()
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
                return _context3.abrupt("return", this.deployJs(params));

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
                return _context4.abrupt("return", this.runJs(params));

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
                return _context5.abrupt("return", this.runLocalJs(params));

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
    }()
  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(params) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.requestLibrary('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
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
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.requestLibrary('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
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
    key: "sendGrams",
    value: function () {
      var _sendGrams = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(params) {
        var message, transaction;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.createSendGramsMessage(params);

              case 2:
                message = _context8.sent;
                _context8.next = 5;
                return this.processMessage(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary{ aborted } } }');

              case 5:
                transaction = _context8.sent;

                if (!transaction.description.Ordinary.aborted) {
                  _context8.next = 8;
                  break;
                }

                throw {
                  code: 'ContractsSendGramsFailed',
                  message: 'Send Grams Failed'
                };

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function sendGrams(_x7) {
        return _sendGrams.apply(this, arguments);
      }

      return sendGrams;
    }()
  }, {
    key: "createSendGramsMessage",
    value: function () {
      var _createSendGramsMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(params) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.requestLibrary('contracts.send.grams.message', params));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function createSendGramsMessage(_x8) {
        return _createSendGramsMessage.apply(this, arguments);
      }

      return createSendGramsMessage;
    }()
  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(params) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.requestLibrary('contracts.run.output', params));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function decodeRunOutput(_x9) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(params) {
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                return _context11.abrupt("return", this.requestLibrary('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function decodeInputMessageBody(_x10) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(params) {
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.requestLibrary('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function decodeOutputMessageBody(_x11) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        var clientPlatform, fetch, url, response;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context13.next = 3;
                  break;
                }

                throw {
                  code: 'ClientDoesNotConfigured',
                  message: 'TON Client SDK does not configured'
                };

              case 3:
                fetch = clientPlatform.fetch;
                url = this.config.requestsUrl();
                _context13.next = 7;
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
                response = _context13.sent;

                if (!(response.status !== 200)) {
                  _context13.next = 15;
                  break;
                }

                _context13.t0 = "Send node request failed: ";
                _context13.next = 12;
                return response.text();

              case 12:
                _context13.t1 = _context13.sent;
                _context13.t2 = _context13.t0.concat.call(_context13.t0, _context13.t1);
                throw {
                  code: 3004,
                  message: _context13.t2
                };

              case 15:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function sendMessage(_x12) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params, resultFields) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.sendMessage(params);

              case 2:
                return _context14.abrupt("return", this.queries.transactions.waitFor({
                  id: {
                    eq: params.messageId
                  },
                  status: {
                    "in": ['Preliminary', 'Proposed', 'Finalized']
                  }
                }, resultFields));

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function processMessage(_x13, _x14) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "deployNative",
    value: function () {
      var _deployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function deployNative(_x15) {
        return _deployNative.apply(this, arguments);
      }

      return deployNative;
    }()
  }, {
    key: "runNative",
    value: function () {
      var _runNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context16.abrupt("return", _context16.sent);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function runNative(_x16) {
        return _runNative.apply(this, arguments);
      }

      return runNative;
    }()
  }, {
    key: "deployJs",
    value: function () {
      var _deployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
        var message, transaction, ordinary;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context17.sent;
                _context17.next = 5;
                return this.sendGrams({
                  fromAccount: '',
                  toAccount: message.address,
                  amount: 1000000000
                });

              case 5:
                _context17.next = 7;
                return this.processMessage(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }');

              case 7:
                transaction = _context17.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context17.next = 11;
                  break;
                }

                throw {
                  code: 3050,
                  message: 'Deploy failed'
                };

              case 11:
                return _context17.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: false
                });

              case 12:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function deployJs(_x17) {
        return _deployJs.apply(this, arguments);
      }

      return deployJs;
    }()
  }, {
    key: "runJs",
    value: function () {
      var _runJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
        var _this2 = this;

        var message, transaction, ordinary, outputMessageIds, externalMessages, outputs, resultOutput;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context18.sent;
                _context18.next = 5;
                return this.processMessage(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs');

              case 5:
                transaction = _context18.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context18.next = 9;
                  break;
                }

                throw {
                  code: 3040,
                  message: 'Run failed'
                };

              case 9:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context18.next = 12;
                  break;
                }

                return _context18.abrupt("return", {
                  output: null
                });

              case 12:
                _context18.next = 14;
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

              case 14:
                _context18.t0 = function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
                };

                externalMessages = _context18.sent.filter(_context18.t0);
                _context18.next = 18;
                return Promise.all(externalMessages.map(function (x) {
                  return _this2.decodeOutputMessageBody({
                    abi: params.abi,
                    bodyBase64: x.body
                  });
                }));

              case 18:
                outputs = _context18.sent;
                resultOutput = outputs.find(function (x) {
                  return x["function"].toLowerCase() === params.functionName.toLowerCase();
                });
                return _context18.abrupt("return", resultOutput ? {
                  output: resultOutput.output
                } : {
                  output: null
                });

              case 21:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function runJs(_x18) {
        return _runJs.apply(this, arguments);
      }

      return runJs;
    }()
  }, {
    key: "runLocalJs",
    value: function () {
      var _runLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(params) {
        var accounts;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.queries.select('RETURN DOCUMENT("accounts/' + params.address + '")', {});

              case 2:
                accounts = _context19.sent;
                return _context19.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: accounts[0],
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function runLocalJs(_x19) {
        return _runLocalJs.apply(this, arguments);
      }

      return runLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJkZXBsb3lKcyIsInJ1bkpzIiwicnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJrZXlQYWlyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJjcmVhdGVTZW5kR3JhbXNNZXNzYWdlIiwibWVzc2FnZSIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJkZXNjcmlwdGlvbiIsIk9yZGluYXJ5IiwiYWJvcnRlZCIsImNvZGUiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwibWVzc2FnZUlkQmFzZTY0IiwidmFsdWUiLCJtZXNzYWdlQm9keUJhc2U2NCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsIm1lc3NhZ2VJZCIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJzZW5kR3JhbXMiLCJmcm9tQWNjb3VudCIsInRvQWNjb3VudCIsImFtb3VudCIsIm9yZGluYXJ5IiwiYWxyZWFkeURlcGxveWVkIiwiY3JlYXRlUnVuTWVzc2FnZSIsIm91dHB1dE1lc3NhZ2VJZHMiLCJvdXRfbXNncyIsIm91dHB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJtZXNzYWdlcyIsIngiLCJoZWFkZXIiLCJFeHRPdXRNc2dJbmZvIiwiZXh0ZXJuYWxNZXNzYWdlcyIsImZpbHRlciIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsIm91dHB1dHMiLCJyZXN1bHRPdXRwdXQiLCJmaW5kIiwidG9Mb3dlckNhc2UiLCJzZWxlY3QiLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUVBOztBQUNBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7O0lBNEpxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIscUJBQUtDLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJHLDRCQUF2QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR09DLE07Ozs7Ozs7dUJBT0ssS0FBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUNwQ0Msa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLO0FBQWI7QUFEZ0MsaUJBQTVCLEVBRVQsK0JBRlMsQzs7O0FBTk5KLGdCQUFBQSxROztzQkFTRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hILGtCQUFBQSxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ssT0FEUjtBQUVIRSxrQkFBQUEsWUFBWSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCQyxL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S0FBSyxFQUFFcEIsTUFBTSxDQUFDb0IsS0FMZ0M7QUFNOUNGLGtCQUFBQSxPQUFPLEVBQUVsQixNQUFNLENBQUNrQjtBQU44QixpQkFBM0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaFBpQ21FLHFCOzs7QUEyUGhENUYsa0JBQWtCLENBQUM2RixVQUFuQixHQUFnQyxvQkFBaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAxOSBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNpZ25lZD86IGJvb2xlYW4sXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxuICAgIG91dHB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSSA9IHtcbiAgICAnQUJJIHZlcnNpb24nOiBudW1iZXIsXG4gICAgZnVuY3Rpb25zOiBUT05Db250cmFjdEFCSUZ1bmN0aW9uW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG4gICAgaW1hZ2VCYXNlNjQ6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAga2V5UGFpcjogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFscmVhZHlEZXBsb3llZDogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3RTZW5kR3JhbXNQYXJhbXMgPSB7XG4gICAgZnJvbUFjY291bnQ6IHN0cmluZyxcbiAgICB0b0FjY291bnQ6IHN0cmluZyxcbiAgICBhbW91bnQ6IG51bWJlcixcbn1cblxudHlwZSBUT05Db250cmFjdE1lc3NhZ2UgPSB7XG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgT3JkaW5hcnk6IHtcbiAgICAgICAgICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXR1czogc3RyaW5nLFxuICAgIG91dF9tc2dzOiBzdHJpbmdbXSxcbn1cblxudHlwZSBRQWRkclN0ZCA9IHtcbiAgICBBZGRyU3RkOiB7XG4gICAgICAgIHdvcmtjaGFpbl9pZDogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgfVxufVxuXG50eXBlIFFBZGRyID0gJ0FkZHJOb25lJyB8IFFBZGRyU3RkXG5cblxudHlwZSBRTWVzc2FnZSA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBFeHRPdXRNc2dJbmZvPzoge1xuICAgICAgICAgICAgc3JjOiBRQWRkcixcbiAgICAgICAgICAgIGRzdDogUUFkZHIsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogP3tcbiAgICAgICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIEdyYW1zOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ3N0b3JhZ2UgeyBiYWxhbmNlIHsgR3JhbXMgfSB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLnN0b3JhZ2UuYmFsYW5jZS5HcmFtcyxcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95SnMocGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bihwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5KcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5ydW5Mb2NhbEpzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3kubWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZEdyYW1zKHBhcmFtczogVE9OQ29udHJhY3RTZW5kR3JhbXNQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2VuZEdyYW1zTWVzc2FnZShwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeXsgYWJvcnRlZCB9IH0gfScsXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NvbnRyYWN0c1NlbmRHcmFtc0ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlbmQgR3JhbXMgRmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVTZW5kR3JhbXNNZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RTZW5kR3JhbXNQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnNlbmQuZ3JhbXMubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVjb2RlUnVuT3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNvZGVPdXRwdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NsaWVudERvZXNOb3RDb25maWd1cmVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVE9OIENsaWVudCBTREsgZG9lcyBub3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6IDMwMDQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFNlbmQgbm9kZSByZXF1ZXN0IGZhaWxlZDogJHthd2FpdCByZXNwb25zZS50ZXh0KCl9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgIH0sIHJlc3VsdEZpZWxkcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95TmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveUpzKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kR3JhbXMoe1xuICAgICAgICAgICAgZnJvbUFjY291bnQ6ICcnLFxuICAgICAgICAgICAgdG9BY2NvdW50OiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbW91bnQ6IDEwMDAwMDAwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeSB7IGFib3J0ZWQgfSB9IH0nLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcmRpbmFyeSA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5O1xuICAgICAgICBpZiAob3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6IDMwNTAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0RlcGxveSBmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bkpzKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9IG91dF9tc2dzJyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDQwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSdW4gZmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSAoYXdhaXQgUHJvbWlzZS5hbGwob3V0cHV0TWVzc2FnZUlkcy5tYXAoKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLm1lc3NhZ2VzLndhaXRGb3IoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnYm9keSBoZWFkZXIgeyAuLi5vbiBNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnQgeyBFeHRPdXRNc2dJbmZvIHsgY3JlYXRlZF9hdCB9IH0gfScsXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSkpLmZpbHRlcigoeDogUU1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmhlYWRlciAmJiB4LmhlYWRlci5FeHRPdXRNc2dJbmZvO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGF3YWl0IFByb21pc2UuYWxsKGV4dGVybmFsTWVzc2FnZXMubWFwKCh4OiBRTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoe1xuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgICAgICBib2R5QmFzZTY0OiB4LmJvZHksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCByZXN1bHRPdXRwdXQgPSBvdXRwdXRzLmZpbmQoKHg6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB4LmZ1bmN0aW9uLnRvTG93ZXJDYXNlKCkgPT09IHBhcmFtcy5mdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRPdXRwdXQgPyB7IG91dHB1dDogcmVzdWx0T3V0cHV0Lm91dHB1dCB9IDogeyBvdXRwdXQ6IG51bGwgfTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbEpzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuc2VsZWN0KFxuICAgICAgICAgICAgJ1JFVFVSTiBET0NVTUVOVChcImFjY291bnRzLycgKyBwYXJhbXMuYWRkcmVzcyArICdcIiknLCB7fSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG4iXX0=