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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiaWQiLCJlcSIsImFkZHJlc3MiLCJsZW5ndGgiLCJiYWxhbmNlR3JhbXMiLCJzdG9yYWdlIiwiYmFsYW5jZSIsIkdyYW1zIiwiaW1hZ2VCYXNlNjQiLCJkZXBsb3lfanMiLCJydW5fanMiLCJydW5fbG9jYWxfanMiLCJyZXF1ZXN0TGlicmFyeSIsImFiaSIsImNvbnN0cnVjdG9yUGFyYW1zIiwia2V5UGFpciIsImZ1bmN0aW9uTmFtZSIsImlucHV0IiwiY3JlYXRlX3NlbmRfZ3JhbXNfbWVzc2FnZSIsIm1lc3NhZ2UiLCJwcm9jZXNzX21lc3NhZ2UiLCJ0cmFuc2FjdGlvbiIsImRlc2NyaXB0aW9uIiwiT3JkaW5hcnkiLCJhYm9ydGVkIiwiY29kZSIsInJlc3VsdEZpZWxkcyIsImNsaWVudFBsYXRmb3JtIiwiVE9OQ2xpZW50IiwiZmV0Y2giLCJ1cmwiLCJyZXF1ZXN0c1VybCIsIm1ldGhvZCIsIm1vZGUiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsInJlZGlyZWN0IiwicmVmZXJyZXIiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlY29yZHMiLCJrZXkiLCJtZXNzYWdlSWRCYXNlNjQiLCJ2YWx1ZSIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ0ZXh0IiwidHJhbnNhY3Rpb25zIiwid2FpdEZvciIsIm1lc3NhZ2VJZCIsImNyZWF0ZV9kZXBsb3lfbWVzc2FnZSIsInNlbmRfZ3JhbXMiLCJmcm9tQWNjb3VudCIsInRvQWNjb3VudCIsImFtb3VudCIsIm9yZGluYXJ5IiwiYWxyZWFkeURlcGxveWVkIiwiY3JlYXRlX3J1bl9tZXNzYWdlIiwib3V0cHV0TWVzc2FnZUlkcyIsIm91dF9tc2dzIiwib3V0cHV0IiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1lc3NhZ2VzIiwib3V0cHV0TWVzc2FnZXMiLCJleHRlcm5hbE1lc3NhZ2UiLCJmaW5kIiwieCIsImhlYWRlciIsIkV4dE91dE1zZ0luZm8iLCJkZWNvZGVfcnVuX291dHB1dCIsImJvZHlCYXNlNjQiLCJzaGFyZWQiLCJzZWxlY3QiLCJhY2NvdW50IiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0lBdUlxQkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWIscUJBQUtDLE1BQUwsR0FBYyxLQUFLQyxPQUFMLENBQWFDLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EscUJBQUtDLE9BQUwsR0FBZSxLQUFLSCxPQUFMLENBQWFDLFNBQWIsQ0FBdUJHLDRCQUF2QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR09DLE07Ozs7Ozs7dUJBT0ssS0FBS0YsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxLQUF0QixDQUE0QjtBQUNwQ0Msa0JBQUFBLEVBQUUsRUFBRTtBQUFFQyxvQkFBQUEsRUFBRSxFQUFFSixNQUFNLENBQUNLO0FBQWI7QUFEZ0MsaUJBQTVCLEVBRVQsK0JBRlMsQzs7O0FBTk5KLGdCQUFBQSxROztzQkFTRkEsUUFBUSxJQUFJQSxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQzs7Ozs7a0RBQ3ZCO0FBQ0hILGtCQUFBQSxFQUFFLEVBQUVILE1BQU0sQ0FBQ0ssT0FEUjtBQUVIRSxrQkFBQUEsWUFBWSxFQUFFTixRQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlPLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCQyxLQUZ2QztBQUdIQyxrQkFBQUEsV0FBVyxFQUFFO0FBSFYsaUI7OztrREFNSjtBQUNIUixrQkFBQUEsRUFBRSxFQUFFLElBREQ7QUFFSEksa0JBQUFBLFlBQVksRUFBRSxJQUZYO0FBR0hJLGtCQUFBQSxXQUFXLEVBQUU7QUFIVixpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQVFFWCxNOzs7OztrREFDRixLQUFLWSxTQUFMLENBQWVaLE1BQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUlEQSxNOzs7OztrREFDQyxLQUFLYSxNQUFMLENBQVliLE1BQVosQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUdLQSxNOzs7OztrREFFTCxLQUFLYyxZQUFMLENBQWtCZCxNQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBR2lCQSxNOzs7OztrREFDakIsS0FBS2UsY0FBTCxDQUFvQiwwQkFBcEIsRUFBZ0Q7QUFDbkRDLGtCQUFBQSxHQUFHLEVBQUVoQixNQUFNLFdBQU4sQ0FBZWdCLEdBRCtCO0FBRW5EQyxrQkFBQUEsaUJBQWlCLEVBQUVqQixNQUFNLENBQUNpQixpQkFGeUI7QUFHbkROLGtCQUFBQSxXQUFXLEVBQUVYLE1BQU0sV0FBTixDQUFlVyxXQUh1QjtBQUluRE8sa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBSm1DLGlCQUFoRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBU2NsQixNOzs7OztrREFDZCxLQUFLZSxjQUFMLENBQW9CLHVCQUFwQixFQUE2QztBQUNoRFYsa0JBQUFBLE9BQU8sRUFBRUwsTUFBTSxDQUFDSyxPQURnQztBQUVoRFcsa0JBQUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBRm9DO0FBR2hERyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFIMkI7QUFJaERDLGtCQUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNvQixLQUprQztBQUtoREYsa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBTGdDLGlCQUE3QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cURBU01sQixNOzs7Ozs7O3VCQUNTLEtBQUtxQix5QkFBTCxDQUErQnJCLE1BQS9CLEM7OztBQUFoQnNCLGdCQUFBQSxPOzt1QkFDb0IsS0FBS0MsZUFBTCxDQUN0QkQsT0FEc0IsRUFFdEIsK0ZBRnNCLEM7OztBQUFwQkUsZ0JBQUFBLFc7O3FCQUlGQSxXQUFXLENBQUNDLFdBQVosQ0FBd0JDLFFBQXhCLENBQWlDQyxPOzs7OztzQkFDM0I7QUFDRkMsa0JBQUFBLElBQUksRUFBRSwwQkFESjtBQUVGTixrQkFBQUEsT0FBTyxFQUFFO0FBRlAsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFPa0J0QixNOzs7OztrREFDckIsS0FBS2UsY0FBTCxDQUFvQiw4QkFBcEIsRUFBb0RmLE1BQXBELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHYUEsTTs7Ozs7bURBQ2IsS0FBS2UsY0FBTCxDQUFvQixzQkFBcEIsRUFBNENmLE1BQTVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHb0JBLE07Ozs7O21EQUNwQixLQUFLZSxjQUFMLENBQW9CLDZCQUFwQixFQUFtRGYsTUFBbkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUlQQSxNLEVBQ0E2QixZOzs7Ozs7QUFFUUMsZ0JBQUFBLGMsR0FBbUJDLG9CLENBQW5CRCxjOztvQkFDSEEsYzs7Ozs7c0JBQ0s7QUFDRkYsa0JBQUFBLElBQUksRUFBRSx5QkFESjtBQUVGTixrQkFBQUEsT0FBTyxFQUFFO0FBRlAsaUI7OztBQUtGVSxnQkFBQUEsSyxHQUFVRixjLENBQVZFLEs7QUFDRkMsZ0JBQUFBLEcsR0FBTSxLQUFLdkMsTUFBTCxDQUFZd0MsV0FBWixFOzt1QkFDV0YsS0FBSyxDQUFDQyxHQUFELEVBQU07QUFDOUJFLGtCQUFBQSxNQUFNLEVBQUUsTUFEc0I7QUFFOUJDLGtCQUFBQSxJQUFJLEVBQUUsTUFGd0I7QUFHOUJDLGtCQUFBQSxLQUFLLEVBQUUsVUFIdUI7QUFJOUJDLGtCQUFBQSxXQUFXLEVBQUUsYUFKaUI7QUFLOUJDLGtCQUFBQSxPQUFPLEVBQUU7QUFDTCxvQ0FBZ0I7QUFEWCxtQkFMcUI7QUFROUJDLGtCQUFBQSxRQUFRLEVBQUUsUUFSb0I7QUFTOUJDLGtCQUFBQSxRQUFRLEVBQUUsYUFUb0I7QUFVOUJDLGtCQUFBQSxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCQyxvQkFBQUEsT0FBTyxFQUFFLENBQUM7QUFBRUMsc0JBQUFBLEdBQUcsRUFBRTlDLE1BQU0sQ0FBQytDLGVBQWQ7QUFBK0JDLHNCQUFBQSxLQUFLLEVBQUVoRCxNQUFNLENBQUNpRDtBQUE3QyxxQkFBRDtBQURRLG1CQUFmO0FBVndCLGlCQUFOLEM7OztBQUF0QkMsZ0JBQUFBLFE7O3NCQWNGQSxRQUFRLENBQUNDLE1BQVQsS0FBb0IsRzs7Ozs7Ozt1QkFHdUJELFFBQVEsQ0FBQ0UsSUFBVCxFOzs7Ozs7QUFEdkN4QixrQkFBQUEsSSxFQUFNLDRCO0FBQ05OLGtCQUFBQSxPOzs7Ozt1QkFHSyxLQUFLeEIsT0FBTCxDQUFhdUQsWUFBYixDQUEwQkMsT0FBMUIsQ0FBa0M7QUFDM0NuRCxrQkFBQUEsRUFBRSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ3VEO0FBQWIsbUJBRHVDO0FBRTNDSixrQkFBQUEsTUFBTSxFQUFFO0FBQUUsMEJBQUksQ0FBQyxhQUFELEVBQWdCLFVBQWhCLEVBQTRCLFdBQTVCO0FBQU47QUFGbUMsaUJBQWxDLEVBR1Z0QixZQUhVLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFNRzdCLE07Ozs7O21EQUNULEtBQUtlLGNBQUwsQ0FBb0Isa0JBQXBCLEVBQXdDO0FBQzNDQyxrQkFBQUEsR0FBRyxFQUFFaEIsTUFBTSxXQUFOLENBQWVnQixHQUR1QjtBQUUzQ0Msa0JBQUFBLGlCQUFpQixFQUFFakIsTUFBTSxDQUFDaUIsaUJBRmlCO0FBRzNDTixrQkFBQUEsV0FBVyxFQUFFWCxNQUFNLFdBQU4sQ0FBZVcsV0FIZTtBQUkzQ08sa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBSjJCLGlCQUF4QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBU01sQixNOzs7Ozs7dUJBQ0EsS0FBS2UsY0FBTCxDQUFvQixlQUFwQixFQUFxQztBQUM5Q1Ysa0JBQUFBLE9BQU8sRUFBRUwsTUFBTSxDQUFDSyxPQUQ4QjtBQUU5Q1csa0JBQUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBRmtDO0FBRzlDRyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFIeUI7QUFJOUNDLGtCQUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNvQixLQUpnQztBQUs5Q0Ysa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBTDhCLGlCQUFyQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBU0RsQixNOzs7Ozs7O3VCQUNVLEtBQUt3RCxxQkFBTCxDQUEyQnhELE1BQTNCLEM7OztBQUFoQnNCLGdCQUFBQSxPOzt1QkFDQSxLQUFLbUMsVUFBTCxDQUFnQjtBQUNsQkMsa0JBQUFBLFdBQVcsRUFBRSxFQURLO0FBRWxCQyxrQkFBQUEsU0FBUyxFQUFFckMsT0FBTyxDQUFDakIsT0FGRDtBQUdsQnVELGtCQUFBQSxNQUFNLEVBQUU7QUFIVSxpQkFBaEIsQzs7Ozt1QkFLb0IsS0FBS3JDLGVBQUwsQ0FDdEJELE9BRHNCLEVBRXRCLGdHQUZzQixDOzs7QUFBcEJFLGdCQUFBQSxXO0FBSUFxQyxnQkFBQUEsUSxHQUFXckMsV0FBVyxDQUFDQyxXQUFaLENBQXdCQyxROztxQkFDckNtQyxRQUFRLENBQUNsQyxPOzs7OztzQkFDSDtBQUNGQyxrQkFBQUEsSUFBSSxFQUFFLElBREo7QUFFRk4sa0JBQUFBLE9BQU87QUFGTCxpQjs7O21EQUtIO0FBQ0hqQixrQkFBQUEsT0FBTyxFQUFFaUIsT0FBTyxDQUFDakIsT0FEZDtBQUVIeUQsa0JBQUFBLGVBQWUsRUFBRTtBQUZkLGlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT0U5RCxNOzs7Ozs7Ozs7dUJBQ2EsS0FBSytELGtCQUFMLENBQXdCL0QsTUFBeEIsQzs7O0FBQWhCc0IsZ0JBQUFBLE87O3VCQUNvQixLQUFLQyxlQUFMLENBQ3RCRCxPQURzQixFQUV0Qix5R0FGc0IsQzs7O0FBQXBCRSxnQkFBQUEsVztBQUlBcUMsZ0JBQUFBLFEsR0FBV3JDLFdBQVcsQ0FBQ0MsV0FBWixDQUF3QkMsUTs7cUJBQ3JDbUMsUUFBUSxDQUFDbEMsTzs7Ozs7c0JBQ0g7QUFDRkMsa0JBQUFBLElBQUksRUFBRSxJQURKO0FBRUZOLGtCQUFBQSxPQUFPLEVBQUU7QUFGUCxpQjs7O0FBS0owQyxnQkFBQUEsZ0IsR0FBbUJ4QyxXQUFXLENBQUN5QyxROztzQkFDakMsQ0FBQ0QsZ0JBQUQsSUFBcUJBLGdCQUFnQixDQUFDMUQsTUFBakIsS0FBNEIsQzs7Ozs7bURBQzFDO0FBQUU0RCxrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUI7Ozs7dUJBRThCQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUosZ0JBQWdCLENBQUNLLEdBQWpCLENBQXFCLFVBQUFsRSxFQUFFLEVBQUk7QUFDNUUseUJBQU8sTUFBSSxDQUFDTCxPQUFMLENBQWF3RSxRQUFiLENBQXNCaEIsT0FBdEIsQ0FBOEI7QUFDakNuRCxvQkFBQUEsRUFBRSxFQUFFO0FBQUVDLHNCQUFBQSxFQUFFLEVBQUVEO0FBQU4scUJBRDZCO0FBRWpDZ0Qsb0JBQUFBLE1BQU0sRUFBRTtBQUFFLDRCQUFJLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixXQUE1QjtBQUFOO0FBRnlCLG1CQUE5QixFQUdKLDBGQUhJLENBQVA7QUFJSCxpQkFMb0QsQ0FBWixDOzs7QUFBbkNvQixnQkFBQUEsYztBQU1BQyxnQkFBQUEsZSxHQUFrQkQsY0FBYyxDQUFDRSxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSx5QkFBaUJBLENBQUMsQ0FBQ0MsTUFBRixJQUFZRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsYUFBdEM7QUFBQSxpQkFBcEIsQzs7b0JBQ25CSixlOzs7OzttREFDTTtBQUFFTixrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUI7OzttREFFSixLQUFLVyxpQkFBTCxDQUF1QjtBQUMxQjdELGtCQUFBQSxHQUFHLEVBQUVoQixNQUFNLENBQUNnQixHQURjO0FBRTFCRyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFGSztBQUcxQjJELGtCQUFBQSxVQUFVLEVBQUVOLGVBQWUsQ0FBQzlCO0FBSEYsaUJBQXZCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFPUTFDLE07Ozs7Ozs7dUJBQ1ErQixxQkFBVWdELE1BQVYsQ0FBaUJqRixPQUFqQixDQUF5QmtGLE1BQXpCLENBQ25CLGdDQUFnQ2hGLE1BQU0sQ0FBQ0ssT0FBdkMsR0FBaUQsS0FEOUIsRUFDcUMsRUFEckMsQzs7O0FBQWpCSixnQkFBQUEsUTttREFHQyxLQUFLYyxjQUFMLENBQW9CLHFCQUFwQixFQUEyQztBQUM5Q1Ysa0JBQUFBLE9BQU8sRUFBRUwsTUFBTSxDQUFDSyxPQUQ4QjtBQUU5QzRFLGtCQUFBQSxPQUFPLEVBQUVoRixRQUFRLENBQUMsQ0FBRCxDQUY2QjtBQUc5Q2Usa0JBQUFBLEdBQUcsRUFBRWhCLE1BQU0sQ0FBQ2dCLEdBSGtDO0FBSTlDRyxrQkFBQUEsWUFBWSxFQUFFbkIsTUFBTSxDQUFDbUIsWUFKeUI7QUFLOUNDLGtCQUFBQSxLQUFLLEVBQUVwQixNQUFNLENBQUNvQixLQUxnQztBQU05Q0Ysa0JBQUFBLE9BQU8sRUFBRWxCLE1BQU0sQ0FBQ2tCO0FBTjhCLGlCQUEzQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF6TmlDZ0UscUI7OztBQW9PaER6RixrQkFBa0IsQ0FBQzBGLFVBQW5CLEdBQWdDLG9CQUFoQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBUT05DbGllbnQgfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNpZ25lZD86IGJvb2xlYW4sXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxuICAgIG91dHB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSSA9IHtcbiAgICAnQUJJIHZlcnNpb24nOiBudW1iZXIsXG4gICAgZnVuY3Rpb25zOiBUT05Db250cmFjdEFCSUZ1bmN0aW9uW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG4gICAgaW1hZ2VCYXNlNjQ6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAga2V5UGFpcjogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFscmVhZHlEZXBsb3llZDogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVVbmtub3duUnVuUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuUmVzdWx0ID0ge1xuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5rbm93blJ1blJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zID0ge1xuICAgIGZyb21BY2NvdW50OiBzdHJpbmcsXG4gICAgdG9BY2NvdW50OiBzdHJpbmcsXG4gICAgYW1vdW50OiBudW1iZXIsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIE9yZGluYXJ5OiB7XG4gICAgICAgICAgICBhYm9ydGVkOiBib29sZWFuLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveV9qcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bl9qcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bl9sb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucnVuX2xvY2FsX2pzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlX2RlcGxveV9tZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlX3J1bl9tZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRfZ3JhbXMocGFyYW1zOiBUT05Db250cmFjdFNlbmRHcmFtc1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVfc2VuZF9ncmFtc19tZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ2lkIHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeXsgYWJvcnRlZCB9IH0gfScsXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NvbnRyYWN0c1NlbmRHcmFtc0ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlbmQgR3JhbXMgRmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVfc2VuZF9ncmFtc19tZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RTZW5kR3JhbXNQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnNlbmQuZ3JhbXMubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVjb2RlX3J1bl9vdXRwdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNvZGVfdW5rbm93bl9ydW5faW5wdXQocGFyYW1zOiBUT05Db250cmFjdERlY29kZVVua25vd25SdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5rbm93blJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICByZXN1bHRGaWVsZHM6IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCB7IGNsaWVudFBsYXRmb3JtIH0gPSBUT05DbGllbnQ7XG4gICAgICAgIGlmICghY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ2xpZW50RG9lc05vdENvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUT04gQ2xpZW50IFNESyBkb2VzIG5vdCBjb25maWd1cmVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBmZXRjaCB9ID0gY2xpZW50UGxhdGZvcm07XG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29uZmlnLnJlcXVlc3RzVXJsKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGNhY2hlOiAnbm8tY2FjaGUnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgICAgICByZWZlcnJlcjogJ25vLXJlZmVycmVyJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICByZWNvcmRzOiBbeyBrZXk6IHBhcmFtcy5tZXNzYWdlSWRCYXNlNjQsIHZhbHVlOiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQgfV0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDb250cmFjdHNQb3N0TWVzc2FnZUZhaWxlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFBvc3QgbWVzc2FnZSBmYWlsZWQ6ICR7YXdhaXQgcmVzcG9uc2UudGV4dCgpfWAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5tZXNzYWdlSWQgfSxcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICB9LCByZXN1bHRGaWVsZHMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveV9uYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW5fbmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveV9qcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVfZGVwbG95X21lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kX2dyYW1zKHtcbiAgICAgICAgICAgIGZyb21BY2NvdW50OiAnJyxcbiAgICAgICAgICAgIHRvQWNjb3VudDogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYW1vdW50OiAxMDAwMDAwMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAnaWQgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5IHsgYWJvcnRlZCB9IH0gfScsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgICAgIGlmIChvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogMzA1MCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVwbG95IGZhaWxlZGAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuX2pzKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZV9ydW5fbWVzc2FnZShwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc19tZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdpZCBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9IG91dF9tc2dzJyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDQwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSdW4gZmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gYXdhaXQgUHJvbWlzZS5hbGwob3V0cHV0TWVzc2FnZUlkcy5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucXVlcmllcy5tZXNzYWdlcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogaWQgfSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgICAgIH0sICdib2R5IGhlYWRlciB7IC4uLm9uIE1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudCB7IEV4dE91dE1zZ0luZm8geyBjcmVhdGVkX2F0IH0gfSB9Jyk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgZXh0ZXJuYWxNZXNzYWdlID0gb3V0cHV0TWVzc2FnZXMuZmluZCgoeDogUU1lc3NhZ2UpID0+IHguaGVhZGVyICYmIHguaGVhZGVyLkV4dE91dE1zZ0luZm8pO1xuICAgICAgICBpZiAoIWV4dGVybmFsTWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlX3J1bl9vdXRwdXQoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgYm9keUJhc2U2NDogZXh0ZXJuYWxNZXNzYWdlLmJvZHksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bl9sb2NhbF9qcyhwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgVE9OQ2xpZW50LnNoYXJlZC5xdWVyaWVzLnNlbGVjdChcbiAgICAgICAgICAgIFwiUkVUVVJOIERPQ1VNRU5UKFxcXCJhY2NvdW50cy9cIiArIHBhcmFtcy5hZGRyZXNzICsgXCJcXFwiKVwiLCB7fSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG4iXX0=