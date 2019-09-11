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
    key: "processMessage",
    value: function () {
      var _processMessage = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params, resultFields) {
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

                _context13.t0 = "Post message failed: ";
                _context13.next = 12;
                return response.text();

              case 12:
                _context13.t1 = _context13.sent;
                _context13.t2 = _context13.t0.concat.call(_context13.t0, _context13.t1);
                throw {
                  code: 'ContractsPostMessageFailed',
                  message: _context13.t2
                };

              case 15:
                _context13.next = 17;
                return this.queries.transactions.waitFor({
                  id: {
                    eq: params.messageId
                  },
                  status: {
                    "in": ['Preliminary', 'Proposed', 'Finalized']
                  }
                }, resultFields);

              case 17:
                return _context13.abrupt("return", _context13.sent);

              case 18:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function processMessage(_x12, _x13) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "deployNative",
    value: function () {
      var _deployNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function deployNative(_x14) {
        return _deployNative.apply(this, arguments);
      }

      return deployNative;
    }()
  }, {
    key: "runNative",
    value: function () {
      var _runNative = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context15.abrupt("return", _context15.sent);

              case 3:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function runNative(_x15) {
        return _runNative.apply(this, arguments);
      }

      return runNative;
    }()
  }, {
    key: "deployJs",
    value: function () {
      var _deployJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        var message, transaction, ordinary;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.createDeployMessage(params);

              case 2:
                message = _context16.sent;
                _context16.next = 5;
                return this.sendGrams({
                  fromAccount: '',
                  toAccount: message.address,
                  amount: 1000000000
                });

              case 5:
                _context16.next = 7;
                return this.processMessage(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }');

              case 7:
                transaction = _context16.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context16.next = 11;
                  break;
                }

                throw {
                  code: 3050,
                  message: "Deploy failed"
                };

              case 11:
                return _context16.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: false
                });

              case 12:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function deployJs(_x16) {
        return _deployJs.apply(this, arguments);
      }

      return deployJs;
    }()
  }, {
    key: "runJs",
    value: function () {
      var _runJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
        var _this2 = this;

        var message, transaction, ordinary, outputMessageIds, outputMessages, externalMessage;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.createRunMessage(params);

              case 2:
                message = _context17.sent;
                _context17.next = 5;
                return this.processMessage(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs');

              case 5:
                transaction = _context17.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context17.next = 9;
                  break;
                }

                throw {
                  code: 3040,
                  message: 'Run failed'
                };

              case 9:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context17.next = 12;
                  break;
                }

                return _context17.abrupt("return", {
                  output: null
                });

              case 12:
                _context17.next = 14;
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
                outputMessages = _context17.sent;
                externalMessage = outputMessages.find(function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
                });

                if (externalMessage) {
                  _context17.next = 18;
                  break;
                }

                return _context17.abrupt("return", {
                  output: null
                });

              case 18:
                return _context17.abrupt("return", this.decodeRunOutput({
                  abi: params.abi,
                  functionName: params.functionName,
                  bodyBase64: externalMessage.body
                }));

              case 19:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function runJs(_x17) {
        return _runJs.apply(this, arguments);
      }

      return runJs;
    }()
  }, {
    key: "runLocalJs",
    value: function () {
      var _runLocalJs = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(params) {
        var accounts;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return _TONClient.TONClient.shared.queries.select("RETURN DOCUMENT(\"accounts/" + params.address + "\")", {});

              case 2:
                accounts = _context18.sent;
                return _context18.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: accounts[0],
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function runLocalJs(_x18) {
        return _runLocalJs.apply(this, arguments);
      }

      return runLocalJs;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJkZXBsb3lKcyIsInJ1bkpzIiwicnVuTG9jYWxKcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWJpIiwiY29uc3RydWN0b3JQYXJhbXMiLCJrZXlQYWlyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJjcmVhdGVTZW5kR3JhbXNNZXNzYWdlIiwibWVzc2FnZSIsInByb2Nlc3NNZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJkZXNjcmlwdGlvbiIsIk9yZGluYXJ5IiwiYWJvcnRlZCIsImNvZGUiLCJyZXN1bHRGaWVsZHMiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwibWVzc2FnZUlkQmFzZTY0IiwidmFsdWUiLCJtZXNzYWdlQm9keUJhc2U2NCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInRyYW5zYWN0aW9ucyIsIndhaXRGb3IiLCJtZXNzYWdlSWQiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwic2VuZEdyYW1zIiwiZnJvbUFjY291bnQiLCJ0b0FjY291bnQiLCJhbW91bnQiLCJvcmRpbmFyeSIsImFscmVhZHlEZXBsb3llZCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJvdXRwdXRNZXNzYWdlSWRzIiwib3V0X21zZ3MiLCJvdXRwdXQiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwibWVzc2FnZXMiLCJvdXRwdXRNZXNzYWdlcyIsImV4dGVybmFsTWVzc2FnZSIsImZpbmQiLCJ4IiwiaGVhZGVyIiwiRXh0T3V0TXNnSW5mbyIsImRlY29kZVJ1bk91dHB1dCIsImJvZHlCYXNlNjQiLCJzaGFyZWQiLCJzZWxlY3QiLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUVBOztBQUNBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7O0lBNEpxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIscUJBQUtDLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJHLDRCQUF2QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR09DLE07Ozs7Ozs7dUJBT0ssS0FBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUNwQ0Msa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLO0FBQWI7QUFEZ0MsaUJBQTVCLEVBRVQsK0JBRlMsQzs7O0FBTk5KLGdCQUFBQSxROztzQkFTRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hILGtCQUFBQSxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ssT0FEUjtBQUVIRSxrQkFBQUEsWUFBWSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCQyxLQUZ2QztBQUdIQyxrQkFBQUEsV0FBVyxFQUFFO0FBSFYsaUI7OztrREFNSjtB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QVYsaUI7OzttREFFSixLQUFLVyxlQUFMLENBQXFCO0FBQ3hCN0Qsa0JBQUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBRFk7QUFFeEJHLGtCQUFBQSxZQUFZLEVBQUVuQixNQUFNLENBQUNtQixZQUZHO0FBR3hCMkQsa0JBQUFBLFVBQVUsRUFBRU4sZUFBZSxDQUFDOUI7QUFISixpQkFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQU9NMUMsTTs7Ozs7Ozt1QkFDVStCLHFCQUFVZ0QsTUFBVixDQUFpQmpGLE9BQWpCLENBQXlCa0YsTUFBekIsQ0FDbkIsZ0NBQWdDaEYsTUFBTSxDQUFDSyxPQUF2QyxHQUFpRCxLQUQ5QixFQUNxQyxFQURyQyxDOzs7QUFBakJKLGdCQUFBQSxRO21EQUdDLEtBQUtjLGNBQUwsQ0FBb0IscUJBQXBCLEVBQTJDO0FBQzlDVixrQkFBQUEsT0FBTyxFQUFFTCxNQUFNLENBQUNLLE9BRDhCO0FBRTlDNEUsa0JBQUFBLE9BQU8sRUFBRWhGLFFBQVEsQ0FBQyxDQUFELENBRjZCO0FBRzlDZSxrQkFBQUEsR0FBRyxFQUFFaEIsTUFBTSxDQUFDZ0IsR0FIa0M7QUFJOUNHLGtCQUFBQSxZQUFZLEVBQUVuQixNQUFNLENBQUNtQixZQUp5QjtBQUs5Q0Msa0JBQUFBLEtBQUssRUFBRXBCLE1BQU0sQ0FBQ29CLEtBTGdDO0FBTTlDRixrQkFBQUEsT0FBTyxFQUFFbEIsTUFBTSxDQUFDa0I7QUFOOEIsaUJBQTNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWpPaUNnRSxxQjs7O0FBNE9oRHpGLGtCQUFrQixDQUFDMEYsVUFBbkIsR0FBZ0Msb0JBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OQ2xpZW50IH0gZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IHR5cGUgeyBUT05LZXlQYWlyRGF0YSB9IGZyb20gJy4vVE9OQ3J5cHRvTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSVBhcmFtZXRlciA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSUZ1bmN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzaWduZWQ/OiBib29sZWFuLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbiAgICBvdXRwdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQkkgPSB7XG4gICAgJ0FCSSB2ZXJzaW9uJzogbnVtYmVyLFxuICAgIGZ1bmN0aW9uczogVE9OQ29udHJhY3RBQklGdW5jdGlvbltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RQYWNrYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgaW1hZ2VCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRQYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGluY2x1ZGVJbWFnZTogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRSZXN1bHQgPSB7XG4gICAgaWQ6ID9zdHJpbmcsXG4gICAgYmFsYW5jZUdyYW1zOiA/c3RyaW5nLFxuICAgIGltYWdlQmFzZTY0OiA/c3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zID0ge1xuICAgIHBhY2thZ2U6IFRPTkNvbnRyYWN0UGFja2FnZSxcbiAgICBjb25zdHJ1Y3RvclBhcmFtczogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5SZXN1bHQgPSB7XG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zID0ge1xuICAgIGZyb21BY2NvdW50OiBzdHJpbmcsXG4gICAgdG9BY2NvdW50OiBzdHJpbmcsXG4gICAgYW1vdW50OiBudW1iZXIsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIE9yZGluYXJ5OiB7XG4gICAgICAgICAgICBhYm9ydGVkOiBib29sZWFuLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveUpzKHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuSnMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5Mb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucnVuTG9jYWxKcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRHcmFtcyhwYXJhbXM6IFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNlbmRHcmFtc01lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnl7IGFib3J0ZWQgfSB9IH0nLFxuICAgICAgICApO1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDb250cmFjdHNTZW5kR3JhbXNGYWlsZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZW5kIEdyYW1zIEZhaWxlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlU2VuZEdyYW1zTWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5zZW5kLmdyYW1zLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZUlucHV0TWVzc2FnZUJvZHkocGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zKVxuICAgICAgICA6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD5cbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcylcbiAgICAgICAgOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ2xpZW50RG9lc05vdENvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUT04gQ2xpZW50IFNESyBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbeyBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQgfV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDb250cmFjdHNQb3N0TWVzc2FnZUZhaWxlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFBvc3QgbWVzc2FnZSBmYWlsZWQ6ICR7YXdhaXQgcmVzcG9uc2UudGV4dCgpfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5tZXNzYWdlSWQgfSxcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICB9LCByZXN1bHRGaWVsZHMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3lKcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZEdyYW1zKHtcbiAgICAgICAgICAgIGZyb21BY2NvdW50OiAnJyxcbiAgICAgICAgICAgIHRvQWNjb3VudDogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYW1vdW50OiAxMDAwMDAwMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDUwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEZXBsb3kgZmFpbGVkYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW5KcyhwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAnaWQgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5IHsgYWJvcnRlZCB9IH0gfSBvdXRfbXNncycsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgICAgIGlmIChvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogMzA0MCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUnVuIGZhaWxlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VJZHMgPSB0cmFuc2FjdGlvbi5vdXRfbXNncztcbiAgICAgICAgaWYgKCFvdXRwdXRNZXNzYWdlSWRzIHx8IG91dHB1dE1lc3NhZ2VJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlczogUU1lc3NhZ2VbXSA9IGF3YWl0IFByb21pc2UuYWxsKG91dHB1dE1lc3NhZ2VJZHMubWFwKGlkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgaWQ6IHsgZXE6IGlkIH0sXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgICAgICB9LCAnYm9keSBoZWFkZXIgeyAuLi5vbiBNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnQgeyBFeHRPdXRNc2dJbmZvIHsgY3JlYXRlZF9hdCB9IH0gfScpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZSA9IG91dHB1dE1lc3NhZ2VzLmZpbmQoKHg6IFFNZXNzYWdlKSA9PiB4LmhlYWRlciAmJiB4LmhlYWRlci5FeHRPdXRNc2dJbmZvKTtcbiAgICAgICAgaWYgKCFleHRlcm5hbE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZVJ1bk91dHB1dCh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBib2R5QmFzZTY0OiBleHRlcm5hbE1lc3NhZ2UuYm9keSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuTG9jYWxKcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgVE9OQ2xpZW50LnNoYXJlZC5xdWVyaWVzLnNlbGVjdChcbiAgICAgICAgICAgIFwiUkVUVVJOIERPQ1VNRU5UKFxcXCJhY2NvdW50cy9cIiArIHBhcmFtcy5hZGRyZXNzICsgXCJcXFwiKVwiLCB7fSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG4iXX0=