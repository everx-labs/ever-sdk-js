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
                  _key: {
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
                return this.process_message(message, '_key status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary{ aborted } } }');

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
                  _key: {
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
                return this.process_message(message, '_key status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } }');

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
                return this.process_message(message, '_key status description { ...on TransactionDescriptionOrdinaryVariant { Ordinary { aborted } } } out_msgs');

              case 5:
                transaction = _context16.sent;
                ordinary = transaction.description.Ordinary;

                if (!ordinary.aborted) {
                  _context16.next = 9;
                  break;
                }

                throw {
                  code: 'ContractsRunFailed',
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
                  console.log('>>>', id);
                  return _this2.queries.messages.waitFor({
                    _key: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiX2tleSIsImVxIiwiYWRkcmVzcyIsImxlbmd0aCIsImlkIiwiYmFsYW5jZUdyYW1zIiwic3RvcmFnZSIsImJhbGFuY2UiLCJHcmFtcyIsImltYWdlQmFzZTY0IiwiZGVwbG95X2pzIiwicnVuX2pzIiwicnVuX2xvY2FsX2pzIiwicmVxdWVzdExpYnJhcnkiLCJhYmkiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImtleVBhaXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsImNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UiLCJtZXNzYWdlIiwicHJvY2Vzc19tZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJkZXNjcmlwdGlvbiIsIk9yZGluYXJ5IiwiYWJvcnRlZCIsImNvZGUiLCJyZXN1bHRGaWVsZHMiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwibWVzc2FnZUlkQmFzZTY0IiwidmFsdWUiLCJtZXNzYWdlQm9keUJhc2U2NCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInRyYW5zYWN0aW9ucyIsIndhaXRGb3IiLCJtZXNzYWdlSWQiLCJjcmVhdGVfZGVwbG95X21lc3NhZ2UiLCJzZW5kX2dyYW1zIiwiZnJvbUFjY291bnQiLCJ0b0FjY291bnQiLCJhbW91bnQiLCJvcmRpbmFyeSIsImFscmVhZHlEZXBsb3llZCIsImNyZWF0ZV9ydW5fbWVzc2FnZSIsIm91dHB1dE1lc3NhZ2VJZHMiLCJvdXRfbXNncyIsIm91dHB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZXMiLCJvdXRwdXRNZXNzYWdlcyIsImV4dGVybmFsTWVzc2FnZSIsImZpbmQiLCJ4IiwiaGVhZGVyIiwiRXh0T3V0TXNnSW5mbyIsImRlY29kZV9ydW5fb3V0cHV0IiwiYm9keUJhc2U2NCIsInNoYXJlZCIsInNlbGVjdCIsImFjY291bnQiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7SUF3SXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0MsTTs7Ozs7Ozt1QkFPSyxLQUFLRixPQUFMLENBQWFHLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQ2hDQyxrQkFBQUEsSUFBSSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0s7QUFBYjtBQUQwQixpQkFBNUIsRUFFVCwrQkFGUyxDOzs7QUFOTkosZ0JBQUFBLFE7O3NCQVNGQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixDOzs7OztrREFDdkI7QUFDSEMsa0JBQUFBLEVBQUUsRUFBRVAsTUFBTSxDQUFDSyxPQURSO0FBRUhHLGtCQUFBQSxZQUFZLEVBQUVQLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVEsT0FBWixDQUFvQkMsT0FBcEIsQ0FBNEJDLEtBRnZDO0FBR0hDLGtCQUFBQSxXQUFXLEVBQUU7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RUFBRTtBQUFWLGlCOzs7bURBRUosS0FBS2EsaUJBQUwsQ0FBdUI7QUFDMUIvRCxrQkFBQUEsR0FBRyxFQUFFakIsTUFBTSxDQUFDaUIsR0FEYztBQUUxQkcsa0JBQUFBLFlBQVksRUFBRXBCLE1BQU0sQ0FBQ29CLFlBRks7QUFHMUI2RCxrQkFBQUEsVUFBVSxFQUFFTixlQUFlLENBQUNoQztBQUhGLGlCQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT1EzQyxNOzs7Ozs7O3VCQUNRZ0MscUJBQVVrRCxNQUFWLENBQWlCcEYsT0FBakIsQ0FBeUJxRixNQUF6QixDQUNsQixnQ0FBZ0NuRixNQUFNLENBQUNLLE9BQXZDLEdBQWlELEtBRC9CLEVBQ3NDLEVBRHRDLEM7OztBQUFqQkosZ0JBQUFBLFE7bURBR0MsS0FBS2UsY0FBTCxDQUFvQixxQkFBcEIsRUFBMkM7QUFDOUNYLGtCQUFBQSxPQUFPLEVBQUVMLE1BQU0sQ0FBQ0ssT0FEOEI7QUFFOUMrRSxrQkFBQUEsT0FBTyxFQUFFbkYsUUFBUSxDQUFDLENBQUQsQ0FGNkI7QUFHOUNnQixrQkFBQUEsR0FBRyxFQUFFakIsTUFBTSxDQUFDaUIsR0FIa0M7QUFJOUNHLGtCQUFBQSxZQUFZLEVBQUVwQixNQUFNLENBQUNvQixZQUp5QjtBQUs5Q0Msa0JBQUFBLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ3FCLEtBTGdDO0FBTTlDRixrQkFBQUEsT0FBTyxFQUFFbkIsTUFBTSxDQUFDbUI7QUFOOEIsaUJBQTNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFOaUNrRSxxQjs7O0FBcU9oRDVGLGtCQUFrQixDQUFDNkYsVUFBbkIsR0FBZ0Msb0JBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCB7VE9OQ2xpZW50fSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgdHlwZSB7IFRPTktleVBhaXJEYXRhIH0gZnJvbSAnLi9UT05DcnlwdG9Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCB0eXBlIFRPTkNvbnRyYWN0QUJJRnVuY3Rpb24gPSB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHNpZ25lZD86IGJvb2xlYW4sXG4gICAgaW5wdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxuICAgIG91dHB1dHM6IFRPTkNvbnRyYWN0QUJJUGFyYW1ldGVyW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSSA9IHtcbiAgICAnQUJJIHZlcnNpb24nOiBudW1iZXIsXG4gICAgZnVuY3Rpb25zOiBUT05Db250cmFjdEFCSUZ1bmN0aW9uW10sXG59O1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdFBhY2thZ2UgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBpbWFnZUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgaW5jbHVkZUltYWdlOiBib29sZWFuLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9hZFJlc3VsdCA9IHtcbiAgICBpZDogP3N0cmluZyxcbiAgICBiYWxhbmNlR3JhbXM6ID9zdHJpbmcsXG4gICAgaW1hZ2VCYXNlNjQ6ID9zdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMgPSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlLFxuICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBhbnksXG4gICAga2V5UGFpcjogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFscmVhZHlEZXBsb3llZDogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blBhcmFtcyA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBpbnB1dDogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyPzogVE9OS2V5UGFpckRhdGEsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMgPSB7XG4gICAgYWJpOiBUT05Db250cmFjdEFCSSxcbiAgICBmdW5jdGlvbk5hbWU6IHN0cmluZyxcbiAgICBib2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZWNvZGVVbmtub3duUnVuUGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0UnVuUmVzdWx0ID0ge1xuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0VW5rbm93blJ1blJlc3VsdCA9IHtcbiAgICBmdW5jdGlvbjogc3RyaW5nLFxuICAgIG91dHB1dDogYW55LFxufVxuXG50eXBlIFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zID0ge1xuICAgIGZyb21BY2NvdW50OiBzdHJpbmcsXG4gICAgdG9BY2NvdW50OiBzdHJpbmcsXG4gICAgYW1vdW50OiBudW1iZXIsXG59XG5cbnR5cGUgVE9OQ29udHJhY3RNZXNzYWdlID0ge1xuICAgIG1lc3NhZ2VJZDogc3RyaW5nLFxuICAgIG1lc3NhZ2VJZEJhc2U2NDogc3RyaW5nLFxuICAgIG1lc3NhZ2VCb2R5QmFzZTY0OiBzdHJpbmcsXG59XG5cbnR5cGUgVE9OQ29udHJhY3REZXBsb3lNZXNzYWdlID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFFUcmFuc2FjdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIE9yZGluYXJ5OiB7XG4gICAgICAgICAgICBhYm9ydGVkOiBib29sZWFuLFxuICAgICAgICB9XG4gICAgfSxcbiAgICBzdGF0dXM6IHN0cmluZyxcbiAgICBvdXRfbXNnczogc3RyaW5nW10sXG59XG5cbnR5cGUgUUFkZHJTdGQgPSB7XG4gICAgQWRkclN0ZDoge1xuICAgICAgICB3b3JrY2hhaW5faWQ6IG51bWJlcixcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgIH1cbn1cblxudHlwZSBRQWRkciA9ICdBZGRyTm9uZScgfCBRQWRkclN0ZFxuXG5cblxudHlwZSBRTWVzc2FnZSA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGhlYWRlcjoge1xuICAgICAgICBFeHRPdXRNc2dJbmZvPzoge1xuICAgICAgICAgICAgc3JjOiBRQWRkcixcbiAgICAgICAgICAgIGRzdDogUUFkZHIsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBudW1iZXIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBib2R5OiBzdHJpbmcsXG4gICAgc3RhdHVzOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQocGFyYW1zOiBUT05Db250cmFjdExvYWRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TG9hZFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogP3tcbiAgICAgICAgICAgIHN0b3JhZ2U6IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgIEdyYW1zOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1bXSA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgX2tleTogeyBlcTogcGFyYW1zLmFkZHJlc3MgfSxcbiAgICAgICAgfSwgJ3N0b3JhZ2UgeyBiYWxhbmNlIHsgR3JhbXMgfSB9Jyk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLnN0b3JhZ2UuYmFsYW5jZS5HcmFtcyxcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBudWxsLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZXBsb3kocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwbG95X2pzKHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4ocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnVuX2pzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuX2xvY2FsKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5ydW5fbG9jYWxfanMocGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVfZGVwbG95X21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Lm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVfcnVuX21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgc2VuZF9ncmFtcyhwYXJhbXM6IFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAnX2tleSBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnl7IGFib3J0ZWQgfSB9IH0nLFxuICAgICAgICApO1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDb250cmFjdHNTZW5kR3JhbXNGYWlsZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZW5kIEdyYW1zIEZhaWxlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlX3NlbmRfZ3JhbXNfbWVzc2FnZShwYXJhbXM6IFRPTkNvbnRyYWN0U2VuZEdyYW1zUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5zZW5kLmdyYW1zLm1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZV9ydW5fb3V0cHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZGVjb2RlX3Vua25vd25fcnVuX2lucHV0KHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVVbmtub3duUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFVua25vd25SdW5SZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5pbnB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc19tZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgeyBjbGllbnRQbGF0Zm9ybSB9ID0gVE9OQ2xpZW50O1xuICAgICAgICBpZiAoIWNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NsaWVudERvZXNOb3RDb25maWd1cmVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVE9OIENsaWVudCBTREsgZG9lcyBub3QgY29uZmlndXJlZCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgZmV0Y2ggfSA9IGNsaWVudFBsYXRmb3JtO1xuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmNvbmZpZy5yZXF1ZXN0c1VybCgpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBtb2RlOiAnY29ycycsXG4gICAgICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcmVjb3JkczogW3sga2V5OiBwYXJhbXMubWVzc2FnZUlkQmFzZTY0LCB2YWx1ZTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0IH1dLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ29udHJhY3RzUG9zdE1lc3NhZ2VGYWlsZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBQb3N0IG1lc3NhZ2UgZmFpbGVkOiAke2F3YWl0IHJlc3BvbnNlLnRleHQoKX1gLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgIF9rZXk6IHsgZXE6IHBhcmFtcy5tZXNzYWdlSWQgfSxcbiAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICB9LCByZXN1bHRGaWVsZHMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveV9uYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW5fbmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGRlcGxveV9qcyhwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVfZGVwbG95X21lc3NhZ2UocGFyYW1zKTtcbiAgICAgICAgYXdhaXQgdGhpcy5zZW5kX2dyYW1zKHtcbiAgICAgICAgICAgIGZyb21BY2NvdW50OiAnJyxcbiAgICAgICAgICAgIHRvQWNjb3VudDogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYW1vdW50OiAxMDAwMDAwMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAnX2tleSBzdGF0dXMgZGVzY3JpcHRpb24geyAuLi5vbiBUcmFuc2FjdGlvbkRlc2NyaXB0aW9uT3JkaW5hcnlWYXJpYW50IHsgT3JkaW5hcnkgeyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgb3JkaW5hcnkgPSB0cmFuc2FjdGlvbi5kZXNjcmlwdGlvbi5PcmRpbmFyeTtcbiAgICAgICAgaWYgKG9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAzMDUwLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBEZXBsb3kgZmFpbGVkYCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW5fanMocGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlX3J1bl9tZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ19rZXkgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5IHsgYWJvcnRlZCB9IH0gfSBvdXRfbXNncycsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgICAgIGlmIChvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NvbnRyYWN0c1J1bkZhaWxlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1J1biBmYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXRNZXNzYWdlSWRzID0gdHJhbnNhY3Rpb24ub3V0X21zZ3M7XG4gICAgICAgIGlmICghb3V0cHV0TWVzc2FnZUlkcyB8fCBvdXRwdXRNZXNzYWdlSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb3V0cHV0OiBudWxsIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZXM6IFFNZXNzYWdlW10gPSBhd2FpdCBQcm9taXNlLmFsbChvdXRwdXRNZXNzYWdlSWRzLm1hcChpZCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+JywgaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMubWVzc2FnZXMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIF9rZXk6IHsgZXE6IGlkIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBpbjogWydQcmVsaW1pbmFyeScsICdQcm9wb3NlZCcsICdGaW5hbGl6ZWQnXSB9LFxuICAgICAgICAgICAgICAgIH0sICdib2R5IGhlYWRlciB7IC4uLm9uIE1lc3NhZ2VIZWFkZXJFeHRPdXRNc2dJbmZvVmFyaWFudCB7IEV4dE91dE1zZ0luZm8geyBjcmVhdGVkX2F0IH0gfSB9Jyk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZSA9IG91dHB1dE1lc3NhZ2VzLmZpbmQoKHg6IFFNZXNzYWdlKSA9PiB4LmhlYWRlciAmJiB4LmhlYWRlci5FeHRPdXRNc2dJbmZvKTtcbiAgICAgICAgaWYgKCFleHRlcm5hbE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZV9ydW5fb3V0cHV0KHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGJvZHlCYXNlNjQ6IGV4dGVybmFsTWVzc2FnZS5ib2R5LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBydW5fbG9jYWxfanMocGFyYW1zOiBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IFRPTkNsaWVudC5zaGFyZWQucXVlcmllcy5zZWxlY3QoXG4gICAgICAgICAgICAgXCJSRVRVUk4gRE9DVU1FTlQoXFxcImFjY291bnRzL1wiICsgcGFyYW1zLmFkZHJlc3MgKyBcIlxcXCIpXCIsIHsgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnRzWzBdLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG4iXX0=