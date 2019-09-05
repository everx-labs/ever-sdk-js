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

var _TONClient = _interopRequireDefault(require("../TONClient"));

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
                clientPlatform = _TONClient["default"].clientPlatform;

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
                return _TONClient["default"].shared.queries.select("RETURN DOCUMENT(\"accounts/" + params.address + "\")", {});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJhY2NvdW50cyIsInF1ZXJ5IiwiX2tleSIsImVxIiwiYWRkcmVzcyIsImxlbmd0aCIsImlkIiwiYmFsYW5jZUdyYW1zIiwic3RvcmFnZSIsImJhbGFuY2UiLCJHcmFtcyIsImltYWdlQmFzZTY0IiwiZGVwbG95X2pzIiwicnVuX2pzIiwicnVuX2xvY2FsX2pzIiwicmVxdWVzdExpYnJhcnkiLCJhYmkiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImtleVBhaXIiLCJmdW5jdGlvbk5hbWUiLCJpbnB1dCIsImNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UiLCJtZXNzYWdlIiwicHJvY2Vzc19tZXNzYWdlIiwidHJhbnNhY3Rpb24iLCJkZXNjcmlwdGlvbiIsIk9yZGluYXJ5IiwiYWJvcnRlZCIsImNvZGUiLCJyZXN1bHRGaWVsZHMiLCJjbGllbnRQbGF0Zm9ybSIsIlRPTkNsaWVudCIsImZldGNoIiwidXJsIiwicmVxdWVzdHNVcmwiLCJtZXRob2QiLCJtb2RlIiwiY2FjaGUiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJyZWRpcmVjdCIsInJlZmVycmVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWNvcmRzIiwia2V5IiwibWVzc2FnZUlkQmFzZTY0IiwidmFsdWUiLCJtZXNzYWdlQm9keUJhc2U2NCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGV4dCIsInRyYW5zYWN0aW9ucyIsIndhaXRGb3IiLCJtZXNzYWdlSWQiLCJjcmVhdGVfZGVwbG95X21lc3NhZ2UiLCJzZW5kX2dyYW1zIiwiZnJvbUFjY291bnQiLCJ0b0FjY291bnQiLCJhbW91bnQiLCJvcmRpbmFyeSIsImFscmVhZHlEZXBsb3llZCIsImNyZWF0ZV9ydW5fbWVzc2FnZSIsIm91dHB1dE1lc3NhZ2VJZHMiLCJvdXRfbXNncyIsIm91dHB1dCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZXMiLCJvdXRwdXRNZXNzYWdlcyIsImV4dGVybmFsTWVzc2FnZSIsImZpbmQiLCJ4IiwiaGVhZGVyIiwiRXh0T3V0TXNnSW5mbyIsImRlY29kZV9ydW5fb3V0cHV0IiwiYm9keUJhc2U2NCIsInNoYXJlZCIsInNlbGVjdCIsImFjY291bnQiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7SUF3SXFCQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixxQkFBS0MsTUFBTCxHQUFjLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxxQkFBS0MsT0FBTCxHQUFlLEtBQUtILE9BQUwsQ0FBYUMsU0FBYixDQUF1QkcsNEJBQXZCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHT0MsTTs7Ozs7Ozt1QkFPSyxLQUFLRixPQUFMLENBQWFHLFFBQWIsQ0FBc0JDLEtBQXRCLENBQTRCO0FBQ2hDQyxrQkFBQUEsSUFBSSxFQUFFO0FBQUVDLG9CQUFBQSxFQUFFLEVBQUVKLE1BQU0sQ0FBQ0s7QUFBYjtBQUQwQixpQkFBNUIsRUFFVCwrQkFGUyxDOzs7QUFOTkosZ0JBQUFBLFE7O3NCQVNGQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixDOzs7OztrREFDdkI7QUFDSEMsa0JBQUFBLEVBQUUsRUFBRVAsTUFBTSxDQUFDSyxPQURSO0FBRUhHLGtCQUFBQSxZQUFZLEVBQUVQLFFBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWVEsT0FBWixDQUFvQkMsT0FBcEIsQ0FBNEJDLEtBRnZDO0FBR0hDLGtCQUFBQSxXQUFXLEVBQUU7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RUFBRTtBQUFWLGlCOzs7bURBRUosS0FBS2EsaUJBQUwsQ0FBdUI7QUFDMUIvRCxrQkFBQUEsR0FBRyxFQUFFakIsTUFBTSxDQUFDaUIsR0FEYztBQUUxQkcsa0JBQUFBLFlBQVksRUFBRXBCLE1BQU0sQ0FBQ29CLFlBRks7QUFHMUI2RCxrQkFBQUEsVUFBVSxFQUFFTixlQUFlLENBQUNoQztBQUhGLGlCQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBT1EzQyxNOzs7Ozs7O3VCQUNRZ0Msc0JBQVVrRCxNQUFWLENBQWlCcEYsT0FBakIsQ0FBeUJxRixNQUF6QixDQUNsQixnQ0FBZ0NuRixNQUFNLENBQUNLLE9BQXZDLEdBQWlELEtBRC9CLEVBQ3NDLEVBRHRDLEM7OztBQUFqQkosZ0JBQUFBLFE7bURBR0MsS0FBS2UsY0FBTCxDQUFvQixxQkFBcEIsRUFBMkM7QUFDOUNYLGtCQUFBQSxPQUFPLEVBQUVMLE1BQU0sQ0FBQ0ssT0FEOEI7QUFFOUMrRSxrQkFBQUEsT0FBTyxFQUFFbkYsUUFBUSxDQUFDLENBQUQsQ0FGNkI7QUFHOUNnQixrQkFBQUEsR0FBRyxFQUFFakIsTUFBTSxDQUFDaUIsR0FIa0M7QUFJOUNHLGtCQUFBQSxZQUFZLEVBQUVwQixNQUFNLENBQUNvQixZQUp5QjtBQUs5Q0Msa0JBQUFBLEtBQUssRUFBRXJCLE1BQU0sQ0FBQ3FCLEtBTGdDO0FBTTlDRixrQkFBQUEsT0FBTyxFQUFFbkIsTUFBTSxDQUFDbUI7QUFOOEIsaUJBQTNDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTFOaUNrRSxxQjs7O0FBcU9oRDVGLGtCQUFrQixDQUFDNkYsVUFBbkIsR0FBZ0Msb0JBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCBUT05DbGllbnQgZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IHR5cGUgeyBUT05LZXlQYWlyRGF0YSB9IGZyb20gJy4vVE9OQ3J5cHRvTW9kdWxlJztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSVBhcmFtZXRlciA9IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxufVxuXG5leHBvcnQgdHlwZSBUT05Db250cmFjdEFCSUZ1bmN0aW9uID0ge1xuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzaWduZWQ/OiBib29sZWFuLFxuICAgIGlucHV0czogVE9OQ29udHJhY3RBQklQYXJhbWV0ZXJbXSxcbiAgICBvdXRwdXRzOiBUT05Db250cmFjdEFCSVBhcmFtZXRlcltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RBQkkgPSB7XG4gICAgJ0FCSSB2ZXJzaW9uJzogbnVtYmVyLFxuICAgIGZ1bmN0aW9uczogVE9OQ29udHJhY3RBQklGdW5jdGlvbltdLFxufTtcblxuZXhwb3J0IHR5cGUgVE9OQ29udHJhY3RQYWNrYWdlID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgaW1hZ2VCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRQYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGluY2x1ZGVJbWFnZTogYm9vbGVhbixcbn1cblxudHlwZSBUT05Db250cmFjdExvYWRSZXN1bHQgPSB7XG4gICAgaWQ6ID9zdHJpbmcsXG4gICAgYmFsYW5jZUdyYW1zOiA/c3RyaW5nLFxuICAgIGltYWdlQmFzZTY0OiA/c3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zID0ge1xuICAgIHBhY2thZ2U6IFRPTkNvbnRyYWN0UGFja2FnZSxcbiAgICBjb25zdHJ1Y3RvclBhcmFtczogYW55LFxuICAgIGtleVBhaXI6IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0ID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhbHJlYWR5RGVwbG95ZWQ6IGJvb2xlYW4sXG59XG5cbnR5cGUgVE9OQ29udHJhY3RSdW5QYXJhbXMgPSB7XG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgaW5wdXQ6IGFueSxcbiAgICBrZXlQYWlyOiBUT05LZXlQYWlyRGF0YSxcbn1cblxudHlwZSBUT05Db250cmFjdExvY2FsUnVuUGFyYW1zID0ge1xuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxuICAgIGlucHV0OiBhbnksXG4gICAga2V5UGFpcj86IFRPTktleVBhaXJEYXRhLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zID0ge1xuICAgIGFiaTogVE9OQ29udHJhY3RBQkksXG4gICAgZnVuY3Rpb25OYW1lOiBzdHJpbmcsXG4gICAgYm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVjb2RlVW5rbm93blJ1blBhcmFtcyA9IHtcbiAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgIGJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBUT05Db250cmFjdFJ1blJlc3VsdCA9IHtcbiAgICBvdXRwdXQ6IGFueSxcbn1cblxudHlwZSBUT05Db250cmFjdFVua25vd25SdW5SZXN1bHQgPSB7XG4gICAgZnVuY3Rpb246IHN0cmluZyxcbiAgICBvdXRwdXQ6IGFueSxcbn1cblxudHlwZSBUT05Db250cmFjdFNlbmRHcmFtc1BhcmFtcyA9IHtcbiAgICBmcm9tQWNjb3VudDogc3RyaW5nLFxuICAgIHRvQWNjb3VudDogc3RyaW5nLFxuICAgIGFtb3VudDogbnVtYmVyLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0TWVzc2FnZSA9IHtcbiAgICBtZXNzYWdlSWQ6IHN0cmluZyxcbiAgICBtZXNzYWdlSWRCYXNlNjQ6IHN0cmluZyxcbiAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxufVxuXG50eXBlIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSA9IHtcbiAgICBhZGRyZXNzOiBzdHJpbmcsXG4gICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgbWVzc2FnZUlkQmFzZTY0OiBzdHJpbmcsXG4gICAgbWVzc2FnZUJvZHlCYXNlNjQ6IHN0cmluZyxcbn1cblxudHlwZSBRVHJhbnNhY3Rpb24gPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICBPcmRpbmFyeToge1xuICAgICAgICAgICAgYWJvcnRlZDogYm9vbGVhbixcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc3RhdHVzOiBzdHJpbmcsXG4gICAgb3V0X21zZ3M6IHN0cmluZ1tdLFxufVxuXG50eXBlIFFBZGRyU3RkID0ge1xuICAgIEFkZHJTdGQ6IHtcbiAgICAgICAgd29ya2NoYWluX2lkOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICB9XG59XG5cbnR5cGUgUUFkZHIgPSAnQWRkck5vbmUnIHwgUUFkZHJTdGRcblxuXG5cbnR5cGUgUU1lc3NhZ2UgPSB7XG4gICAgaWQ6IHN0cmluZyxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgRXh0T3V0TXNnSW5mbz86IHtcbiAgICAgICAgICAgIHNyYzogUUFkZHIsXG4gICAgICAgICAgICBkc3Q6IFFBZGRyLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbnVtYmVyLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYm9keTogc3RyaW5nLFxuICAgIHN0YXR1czogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6ID97XG4gICAgICAgICAgICBzdG9yYWdlOiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZToge1xuICAgICAgICAgICAgICAgICAgICBHcmFtczogc3RyaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgICAgIF9rZXk6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdzdG9yYWdlIHsgYmFsYW5jZSB7IEdyYW1zIH0gfScpO1xuICAgICAgICBpZiAoYWNjb3VudHMgJiYgYWNjb3VudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYmFsYW5jZUdyYW1zOiBhY2NvdW50c1swXS5zdG9yYWdlLmJhbGFuY2UuR3JhbXMsXG4gICAgICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBudWxsLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVwbG95KHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlcGxveV9qcyhwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bl9qcyhwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bl9sb2NhbChwYXJhbXM6IFRPTkNvbnRyYWN0TG9jYWxSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucnVuX2xvY2FsX2pzKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlX2RlcGxveV9tZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlX3J1bl9tZXNzYWdlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRfZ3JhbXMocGFyYW1zOiBUT05Db250cmFjdFNlbmRHcmFtc1BhcmFtcyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVfc2VuZF9ncmFtc19tZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ19rZXkgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5eyBhYm9ydGVkIH0gfSB9JyxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5LmFib3J0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBjb2RlOiAnQ29udHJhY3RzU2VuZEdyYW1zRmFpbGVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2VuZCBHcmFtcyBGYWlsZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZV9zZW5kX2dyYW1zX21lc3NhZ2UocGFyYW1zOiBUT05Db250cmFjdFNlbmRHcmFtc1BhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuc2VuZC5ncmFtcy5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWNvZGVfcnVuX291dHB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGRlY29kZV91bmtub3duX3J1bl9pbnB1dChwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlVW5rbm93blJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RVbmtub3duUnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NfbWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICk6IFByb21pc2U8UVRyYW5zYWN0aW9uPiB7XG4gICAgICAgIGNvbnN0IHsgY2xpZW50UGxhdGZvcm0gfSA9IFRPTkNsaWVudDtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDbGllbnREb2VzTm90Q29uZmlndXJlZCcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RPTiBDbGllbnQgU0RLIGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGZldGNoIH0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb25maWcucmVxdWVzdHNVcmwoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHJlY29yZHM6IFt7IGtleTogcGFyYW1zLm1lc3NhZ2VJZEJhc2U2NCwgdmFsdWU6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCB9XSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogJ0NvbnRyYWN0c1Bvc3RNZXNzYWdlRmFpbGVkJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgUG9zdCBtZXNzYWdlIGZhaWxlZDogJHthd2FpdCByZXNwb25zZS50ZXh0KCl9YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICBfa2V5OiB7IGVxOiBwYXJhbXMubWVzc2FnZUlkIH0sXG4gICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgfSwgcmVzdWx0RmllbGRzKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3lfbmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMuZGVwbG95Jywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuX25hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3lfanMocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlX2RlcGxveV9tZXNzYWdlKHBhcmFtcyk7XG4gICAgICAgIGF3YWl0IHRoaXMuc2VuZF9ncmFtcyh7XG4gICAgICAgICAgICBmcm9tQWNjb3VudDogJycsXG4gICAgICAgICAgICB0b0FjY291bnQ6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIGFtb3VudDogMTAwMDAwMDAwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzX21lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgJ19rZXkgc3RhdHVzIGRlc2NyaXB0aW9uIHsgLi4ub24gVHJhbnNhY3Rpb25EZXNjcmlwdGlvbk9yZGluYXJ5VmFyaWFudCB7IE9yZGluYXJ5IHsgYWJvcnRlZCB9IH0gfScsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG9yZGluYXJ5ID0gdHJhbnNhY3Rpb24uZGVzY3JpcHRpb24uT3JkaW5hcnk7XG4gICAgICAgIGlmIChvcmRpbmFyeS5hYm9ydGVkKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgY29kZTogMzA1MCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVwbG95IGZhaWxlZGAsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcnVuX2pzKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZV9ydW5fbWVzc2FnZShwYXJhbXMpO1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucHJvY2Vzc19tZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICdfa2V5IHN0YXR1cyBkZXNjcmlwdGlvbiB7IC4uLm9uIFRyYW5zYWN0aW9uRGVzY3JpcHRpb25PcmRpbmFyeVZhcmlhbnQgeyBPcmRpbmFyeSB7IGFib3J0ZWQgfSB9IH0gb3V0X21zZ3MnLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBvcmRpbmFyeSA9IHRyYW5zYWN0aW9uLmRlc2NyaXB0aW9uLk9yZGluYXJ5O1xuICAgICAgICBpZiAob3JkaW5hcnkuYWJvcnRlZCkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIGNvZGU6ICdDb250cmFjdHNSdW5GYWlsZWQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSdW4gZmFpbGVkJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0TWVzc2FnZUlkcyA9IHRyYW5zYWN0aW9uLm91dF9tc2dzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VJZHMgfHwgb3V0cHV0TWVzc2FnZUlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG91dHB1dDogbnVsbCB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzOiBRTWVzc2FnZVtdID0gYXdhaXQgUHJvbWlzZS5hbGwob3V0cHV0TWVzc2FnZUlkcy5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJz4+PicsIGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLm1lc3NhZ2VzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICBfa2V5OiB7IGVxOiBpZCB9LFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgaW46IFsnUHJlbGltaW5hcnknLCAnUHJvcG9zZWQnLCAnRmluYWxpemVkJ10gfSxcbiAgICAgICAgICAgICAgICB9LCAnYm9keSBoZWFkZXIgeyAuLi5vbiBNZXNzYWdlSGVhZGVyRXh0T3V0TXNnSW5mb1ZhcmlhbnQgeyBFeHRPdXRNc2dJbmZvIHsgY3JlYXRlZF9hdCB9IH0gfScpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBleHRlcm5hbE1lc3NhZ2UgPSBvdXRwdXRNZXNzYWdlcy5maW5kKCh4OiBRTWVzc2FnZSkgPT4geC5oZWFkZXIgJiYgeC5oZWFkZXIuRXh0T3V0TXNnSW5mbyk7XG4gICAgICAgIGlmICghZXh0ZXJuYWxNZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvdXRwdXQ6IG51bGwgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVfcnVuX291dHB1dCh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBib2R5QmFzZTY0OiBleHRlcm5hbE1lc3NhZ2UuYm9keSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcnVuX2xvY2FsX2pzKHBhcmFtczogVE9OQ29udHJhY3RMb2NhbFJ1blBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCBUT05DbGllbnQuc2hhcmVkLnF1ZXJpZXMuc2VsZWN0KFxuICAgICAgICAgICAgIFwiUkVUVVJOIERPQ1VNRU5UKFxcXCJhY2NvdW50cy9cIiArIHBhcmFtcy5hZGRyZXNzICsgXCJcXFwiKVwiLCB7IH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdjb250cmFjdHMucnVuLmxvY2FsJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50OiBhY2NvdW50c1swXSxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5UT05Db250cmFjdHNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05Db250cmFjdHNNb2R1bGUnO1xuIl19