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
                return _context3.abrupt("return", this.deploy_js(params));

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
                return _context4.abrupt("return", this.run_js(params));

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
    key: "run_local",
    value: function () {
      var _run_local = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(params) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.run_local_js(params));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function run_local(_x4) {
        return _run_local.apply(this, arguments);
      }

      return run_local;
    }()
  }, {
    key: "create_deploy_message",
    value: function () {
      var _create_deploy_message = (0, _asyncToGenerator2["default"])(
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

      function create_deploy_message(_x5) {
        return _create_deploy_message.apply(this, arguments);
      }

      return create_deploy_message;
    }()
  }, {
    key: "create_run_message",
    value: function () {
      var _create_run_message = (0, _asyncToGenerator2["default"])(
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

      function create_run_message(_x6) {
        return _create_run_message.apply(this, arguments);
      }

      return create_run_message;
    }()
  }, {
    key: "send_grams",
    value: function () {
      var _send_grams = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(params) {
        var message, transaction;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.create_send_grams_message(params);

              case 2:
                message = _context8.sent;
                _context8.next = 5;
                return this.process_message(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary{ aborted } } }');

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

      function send_grams(_x7) {
        return _send_grams.apply(this, arguments);
      }

      return send_grams;
    }()
  }, {
    key: "create_send_grams_message",
    value: function () {
      var _create_send_grams_message = (0, _asyncToGenerator2["default"])(
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

      function create_send_grams_message(_x8) {
        return _create_send_grams_message.apply(this, arguments);
      }

      return create_send_grams_message;
    }()
  }, {
    key: "decode_run_output",
    value: function () {
      var _decode_run_output = (0, _asyncToGenerator2["default"])(
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

      function decode_run_output(_x9) {
        return _decode_run_output.apply(this, arguments);
      }

      return decode_run_output;
    }()
  }, {
    key: "decode_unknown_run_input",
    value: function () {
      var _decode_unknown_run_input = (0, _asyncToGenerator2["default"])(
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

      function decode_unknown_run_input(_x10) {
        return _decode_unknown_run_input.apply(this, arguments);
      }

      return decode_unknown_run_input;
    }()
  }, {
    key: "process_message",
    value: function () {
      var _process_message = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(params, resultFields) {
        var clientPlatform, fetch, url, response;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                clientPlatform = _TONClient.TONClient.clientPlatform;

                if (clientPlatform) {
                  _context12.next = 3;
                  break;
                }

                throw {
                  code: 'ClientDoesNotConfigured',
                  message: 'TON Client SDK does not configured'
                };

              case 3:
                fetch = clientPlatform.fetch;
                url = this.config.requestsUrl();
                _context12.next = 7;
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
                response = _context12.sent;

                if (!(response.status !== 200)) {
                  _context12.next = 15;
                  break;
                }

                _context12.t0 = "Post message failed: ";
                _context12.next = 12;
                return response.text();

              case 12:
                _context12.t1 = _context12.sent;
                _context12.t2 = _context12.t0.concat.call(_context12.t0, _context12.t1);
                throw {
                  code: 'ContractsPostMessageFailed',
                  message: _context12.t2
                };

              case 15:
                _context12.next = 17;
                return this.queries.transactions.waitFor({
                  id: {
                    eq: params.messageId
                  },
                  status: {
                    "in": ['Preliminary', 'Proposed', 'Finalized']
                  }
                }, resultFields);

              case 17:
                return _context12.abrupt("return", _context12.sent);

              case 18:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function process_message(_x11, _x12) {
        return _process_message.apply(this, arguments);
      }

      return process_message;
    }()
  }, {
    key: "deploy_native",
    value: function () {
      var _deploy_native = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(params) {
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                return _context13.abrupt("return", this.requestLibrary('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorParams: params.constructorParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function deploy_native(_x13) {
        return _deploy_native.apply(this, arguments);
      }

      return deploy_native;
    }()
  }, {
    key: "run_native",
    value: function () {
      var _run_native = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(params) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.requestLibrary('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 2:
                return _context14.abrupt("return", _context14.sent);

              case 3:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function run_native(_x14) {
        return _run_native.apply(this, arguments);
      }

      return run_native;
    }()
  }, {
    key: "deploy_js",
    value: function () {
      var _deploy_js = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(params) {
        var message, transaction, ordinary;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.create_deploy_message(params);

              case 2:
                message = _context15.sent;
                _context15.next = 5;
                return this.send_grams({
                  fromAccount: '',
                  toAccount: message.address,
                  amount: 1000000000
                });

              case 5:
                _context15.next = 7;
                return this.process_message(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }');

              case 7:
                transaction = _context15.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context15.next = 11;
                  break;
                }

                throw {
                  code: 3050,
                  message: "Deploy failed"
                };

              case 11:
                return _context15.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: false
                });

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function deploy_js(_x15) {
        return _deploy_js.apply(this, arguments);
      }

      return deploy_js;
    }()
  }, {
    key: "run_js",
    value: function () {
      var _run_js = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(params) {
        var _this2 = this;

        var message, transaction, ordinary, outputMessageIds, outputMessages, externalMessage;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.create_run_message(params);

              case 2:
                message = _context16.sent;
                _context16.next = 5;
                return this.process_message(message, 'id status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs');

              case 5:
                transaction = _context16.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context16.next = 9;
                  break;
                }

                throw {
                  code: 3040,
                  message: 'Run failed'
                };

              case 9:
                outputMessageIds = transaction.out_msgs;

                if (!(!outputMessageIds || outputMessageIds.length === 0)) {
                  _context16.next = 12;
                  break;
                }

                return _context16.abrupt("return", {
                  output: null
                });

              case 12:
                _context16.next = 14;
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
                outputMessages = _context16.sent;
                externalMessage = outputMessages.find(function (x) {
                  return x.header && x.header.ExtOutMsgInfo;
                });

                if (externalMessage) {
                  _context16.next = 18;
                  break;
                }

                return _context16.abrupt("return", {
                  output: null
                });

              case 18:
                return _context16.abrupt("return", this.decode_run_output({
                  abi: params.abi,
                  functionName: params.functionName,
                  bodyBase64: externalMessage.body
                }));

              case 19:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function run_js(_x16) {
        return _run_js.apply(this, arguments);
      }

      return run_js;
    }()
  }, {
    key: "run_local_js",
    value: function () {
      var _run_local_js = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(params) {
        var accounts;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _TONClient.TONClient.shared.queries.select("RETURN DOCUMENT(\"accounts/" + params.address + "\")", {});

              case 2:
                accounts = _context17.sent;
                return _context17.abrupt("return", this.requestLibrary('contracts.run.local', {
                  address: params.address,
                  account: accounts[0],
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function run_local_js(_x17) {
        return _run_local_js.apply(this, arguments);
      }

      return run_local_js;
    }()
  }]);
  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJkZXBsb3lfanMiLCJydW5fanMiLCJydW5fbG9jYWxfanMiLCJyZXF1ZXN0TGlicmFyeSIsImFiaSIsImNvbnN0cnVjdG9yUGFyYW1zIiwia2V5UGFpciIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwiY3JlYXRlX3NlbmRfZ3JhbXNfbWVzc2FnZSIsIm1lc3NhZ2UiLCJwcm9jZXNzX21lc3NhZ2UiLCJ0cmFuc2FjdGlvbiIsImRlc2NyaXB0aW9uIiwiT3JkaW5hcnkiLCJhYm9ydGVkIiwiY29kZSIsInJlc3VsdEZpZWxkcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJtZXNzYWdlSWRCYXNlNjQiLCJ2YWx1ZSIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0ZXh0IiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsIm1lc3NhZ2VJZCIsImNyZWF0ZV9kZXBsb3lfbWVzc2FnZSIsInNlbmRfZ3JhbXMiLCJmcm9tQWNjb3VudCIsInRvQWNjb3VudCIsImFtb3VudCIsIm9yZGluYXJ5IiwiYWxyZWFkeURlcGxveWVkIiwiY3JlYXRlX3J1bl9tZXNzYWdlIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwib3V0cHV0TWVzc2FnZXMiLCJleHRlcm5hbE1lc3NhZ2UiLCJmaW5kIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJkZWNvZGVfcnVuX291dHB1dCIsImJvZHlCYXNlNjQiLCJzaGFyZWQiLCJzZWxlY3QiLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQUNBOztBQUVBOztBQUNBOztBQXJCQTs7Ozs7Ozs7Ozs7Ozs7O0lBNEpxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIscUJBQUtDLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJHLDRCQUF2QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR09DLE07Ozs7Ozs7dUJBT0ssS0FBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUNwQ0Msa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLO0FBQWI7QUFEZ0MsaUJBQTVCLEVBRVQsK0JBRlMsQzs7O0FBTk5KLGdCQUFBQSxROztzQkFTRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hILGtCQUFBQSxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ssT0FEUjtBQUVIRSxrQkFBQUEsWUFBWSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCQyxLQUZ2QztBQUdIQyxrQkFBQUEsV0FBVyxFQUFFO0FB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QUFNLENBQUNnQixHQURjO0FBRTFCRyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFGSztBQUcxQjJELGtCQUFBQSxVQUFVLEVBQUVOLGVBQWUsQ0FBQzlCO0FBSEYsaUJBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFPUTFDLE07Ozs7Ozs7dUJBQ1ErQixxQkFBVWdELE1BQVYsQ0FBaUJqRixPQUFqQixDQUF5QmtGLE1BQXpCLENBQ25CLGdDQUFnQ2hGLE1BQU0sQ0FBQ0ssT0FBdkMsR0FBaUQsS0FEOUIsRUFDcUMsRUFEckMsQzs7O0FBQWpCSixnQkFBQUEsUTttREFHQyxLQUFLYyxjQUFMLENBQW9CLHFCQUFwQixFQUEyQztBQUM5Q1Ysa0JBQUFBLE9BQU8sRUFBRUwsTUFBTSxDQUFDSyxPQUQ4QjtBQUU5QzRFLGtCQUFBQSxPQUFPLEVBQUVoRixRQUFRLENBQUMsQ0FBRCxDQUY2QjtBQUc5Q2Usa0JBQUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBSGtDO0FBSTlDRyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFKeUI7QUFLOUNDLGtCQUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNvQixLQUxnQztBQU05Q0Ysa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBTjhCLGlCQUEzQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6TmlDZ0UscUI7OztBQW9PaER6RixrQkFBa0IsQ0FBQzBGLFVBQW5CLEdBQWdDLG9CQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB7IFRPTkNsaWVudCB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCB0eXBlIHsgVE9OS2V5UGFpckRhdGEgfSBmcm9tICcuL1RPTkNyeXB0b01vZHVsZSc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSAnLi9UT05RdWVyaWVzTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklQYXJhbWV0ZXIgPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQklGdW5jdGlvbiA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgc2lnbmVkPzogYm9vbGVhbixcbiAgICBpbnB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG4gICAgb3V0cHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJID0ge1xuICAgICdBQkkgdmVyc2lvbic6IG51bWJlcixcbiAgICBmdW5jdGlvbnM6IFRPTkNvbnRyYWN0QUJJRnVuY3Rpb25bXSxcbn07XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0UGFja2FnZSA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGltYWdlQmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBpbmNsdWRlSW1hZ2U6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2FkUmVzdWx0ID0ge1xuICAgIGlkOiA/c3RyaW5nLFxuICAgIGJhbGFuY2VHcmFtczogP3N0cmluZyxcbiAgICBpbWFnZUJhc2U2NDogP3N0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVBhcmFtcyA9IHtcbiAgICBwYWNrYWdlOiBUT05Db250cmFjdFBhY2thZ2UsXG4gICAgY29uc3RydWN0b3JQYXJhbXM6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveVJlc3VsdCA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWxyZWFkeURlcGxveWVkOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcjogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI/OiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlY29kZVVua25vd25SdW5QYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5SZXN1bHQgPSB7XG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3RVbmtub3duUnVuUmVzdWx0ID0ge1xuICAgIGZ1bmN0aW9uOiBzdHJpbmcsXG4gICAgb3V0cHV0OiBhbnksXG59XG5cbnR5cGUgVE9OQ29udHJhY3RTZW5kR3JhbXNQYXJhbXMgPSB7XG4gICAgZnJvbUFjY291bnQ6IHN0cmluZyxcbiAgICB0b0FjY291bnQ6IHN0cmluZyxcbiAgICBhbW91bnQ6IG51bWJlcixcbn1cblxudHlwZSBUT05Db250cmFjdE1lc3NhZ2UgPSB7XG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdERlcGxveU1lc3NhZ2UgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgUVRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgT3JkaW5hcnk6IHtcbiAgICAgICAgICAgIGFib3J0ZWQ6IGJvb2xlYW4sXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0YXR1czogc3RyaW5nLFxuICAgIG91dF9tc2dzOiBzdHJpbmdbXSxcbn1cblxudHlwZSBRQWRkclN0ZCA9IHtcbiAgICBBZGRyU3RkOiB7XG4gICAgICAgIHdvcmtjaGFpbl9pZDogbnVtYmVyLFxuICAgICAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgfVxufVxuXG50eXBlIFFBZGRyID0gJ0FkZHJOb25lJyB8IFFBZGRyU3RkXG5cblxudHlwZSBRTWVzc2FnZSA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBFeHRPdXRNc2dJbmZvPzoge1xuICAgICAgICAgICAgc3JjOiBRQWRkcixcbiAgICAgICAgICAgIGRzdDogUUFkZHIsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogP3tcbiAgICAgICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIEdyYW1zOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ3N0b3JhZ2UgeyBiYWxhbmNlIHsgR3JhbXMgfSB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLnN0b3JhZ2UuYmFsYW5jZS5HcmFtcyxcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95X2pzKHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuX2pzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuX2xvY2FsKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5ydW5fbG9jYWxfanMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVfZGVwbG95X21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVfcnVuX21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZF9ncmFtcyhwYXJhbXM6IFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAnaWQgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5eyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ29udHJhY3RzU2VuZEdyYW1zRmFpbGVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2VuZCBHcmFtcyBGYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFNlbmRHcmFtc1BhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuc2VuZC5ncmFtcy5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNvZGVfcnVuX291dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZV91bmtub3duX3J1bl9pbnB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlVW5rbm93blJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbmtub3duUnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDbGllbnREb2VzTm90Q29uZmlndXJlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RPTiBDbGllbnQgU0RLIGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGZldGNoIH0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcucmVxdWVzdHNVcmwoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHJlY29yZHM6IFt7IGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCwgdmFsdWU6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCB9XSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NvbnRyYWN0c1Bvc3RNZXNzYWdlRmFpbGVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9zdCBtZXNzYWdlIGZhaWxlZDogJHthd2FpdCByZXNwb25zZS50ZXh0KCl9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICBpZDogeyBlcTogcGFyYW1zLm1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgc3RhdHVzOiB7IGluOiBbJ1ByZWxpbWluYXJ5JywgJ1Byb3Bvc2VkJywgJ0ZpbmFsaXplZCddIH0sXG4gICAgICAgIH0sIHJlc3VsdEZpZWxkcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95X25hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHJ1bl9uYXRpdmUocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4nLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVwbG95X2pzKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZV9kZXBsb3lfbWVzc2FnZShwYXJhbXMpO1xuICAgICAgICBhd2FpdCB0aGlzLnNlbmRfZ3JhbXMoe1xuICAgICAgICAgICAgZnJvbUFjY291bnQ6ICcnLFxuICAgICAgICAgICAgdG9BY2NvdW50OiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbW91bnQ6IDEwMDAwMDAwMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc19tZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDUwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEZXBsb3kgZmFpbGVkYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW5fanMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlX3J1bl9tZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeSB7IGFib3J0ZWQgfSB9IH0gb3V0X21zZ3MnLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcmRpbmFyeSA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5O1xuICAgICAgICBpZiAob3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6IDMwNDAsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1J1biBmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlSWRzID0gdHJhbnNhY3Rpb24ub3V0X21zZ3M7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZUlkcyB8fCBvdXRwdXRNZXNzYWdlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXM6IFFNZXNzYWdlW10gPSBhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcChpZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLm1lc3NhZ2VzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICAgICAgfSwgJ2JvZHkgaGVhZGVyIHsgLi4ub24gTWVzc2FnZUhlYWRlckV4dE91dE1zZ0luZm9WYXJpYW50IHsgRXh0T3V0TXNnSW5mbyB7IGNyZWF0ZWRfYXQgfSB9IH0nKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2UgPSBvdXRwdXRNZXNzYWdlcy5maW5kKCh4OiBRTWVzc2FnZSkgPT4geC5oZWFkZXIgJiYgeC5oZWFkZXIuRXh0T3V0TXNnSW5mbyk7XG4gICAgICAgIGlmICghZXh0ZXJuYWxNZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVfcnVuX291dHB1dCh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBib2R5QmFzZTY0OiBleHRlcm5hbE1lc3NhZ2UuYm9keSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuX2xvY2FsX2pzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBUT05DbGllbnQuc2hhcmVkLnF1ZXJpZXMuc2VsZWN0KFxuICAgICAgICAgICAgXCJSRVRVUk4gRE9DVU1FTlQoXFxcImFjY291bnRzL1wiICsgcGFyYW1zLmFkZHJlc3MgKyBcIlxcXCIpXCIsIHt9KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5sb2NhbCcsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudHNbMF0sXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcbiJdfQ==