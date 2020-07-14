"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeProps = removeProps;
exports["default"] = exports.QBounceType = exports.QSkipReason = exports.QComputeType = exports.QAccountStatusChange = exports.QAccountStatus = exports.QTransactionProcessingStatus = exports.QTransactionType = exports.QAccountType = exports.QSplitType = exports.QBlockProcessingStatus = exports.QMessageProcessingStatus = exports.QMessageType = exports.QOutMsgType = exports.QInMsgType = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONAddressStringVariant = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _opentracing = require("opentracing");

var _TONClient = require("../TONClient");

var _TONModule2 = require("../TONModule");

var _TONConfigModule = _interopRequireDefault(require("./TONConfigModule"));

var _TONQueriesModule = _interopRequireWildcard(require("./TONQueriesModule"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var TONAddressStringVariant = {
  AccountId: 'AccountId',
  Hex: 'Hex',
  Base64: 'Base64'
};
exports.TONAddressStringVariant = TONAddressStringVariant;
var TONClientTransactionPhase = {
  storage: 'storage',
  computeSkipped: 'computeSkipped',
  computeVm: 'computeVm',
  action: 'action',
  unknown: 'unknown'
};
exports.TONClientTransactionPhase = TONClientTransactionPhase;
var TONClientComputeSkippedStatus = {
  noState: 0,
  badState: 1,
  noGas: 2
};
exports.TONClientComputeSkippedStatus = TONClientComputeSkippedStatus;
var TONClientStorageStatus = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
exports.TONClientStorageStatus = TONClientStorageStatus;
var QInMsgType = {
  external: 0,
  ihr: 1,
  immediately: 2,
  "final": 3,
  transit: 4,
  discardedFinal: 5,
  discardedTransit: 6
};
exports.QInMsgType = QInMsgType;
var QOutMsgType = {
  external: 0,
  immediately: 1,
  outMsgNew: 2,
  transit: 3,
  dequeueImmediately: 4,
  dequeue: 5,
  transitRequired: 6,
  none: -1
};
exports.QOutMsgType = QOutMsgType;
var QMessageType = {
  internal: 0,
  extIn: 1,
  extOut: 2
};
exports.QMessageType = QMessageType;
var QMessageProcessingStatus = {
  unknown: 0,
  queued: 1,
  processing: 2,
  preliminary: 3,
  proposed: 4,
  finalized: 5,
  refused: 6,
  transiting: 7
};
exports.QMessageProcessingStatus = QMessageProcessingStatus;
var QBlockProcessingStatus = {
  unknown: 0,
  proposed: 1,
  finalized: 2,
  refused: 3
};
exports.QBlockProcessingStatus = QBlockProcessingStatus;
var QSplitType = {
  none: 0,
  split: 2,
  merge: 3
};
exports.QSplitType = QSplitType;
var QAccountType = {
  uninit: 0,
  active: 1,
  frozen: 2
};
exports.QAccountType = QAccountType;
var QTransactionType = {
  ordinary: 0,
  storage: 1,
  tick: 2,
  tock: 3,
  splitPrepare: 4,
  splitInstall: 5,
  mergePrepare: 6,
  mergeInstall: 7
};
exports.QTransactionType = QTransactionType;
var QTransactionProcessingStatus = {
  unknown: 0,
  preliminary: 1,
  proposed: 2,
  finalized: 3,
  refused: 4
};
exports.QTransactionProcessingStatus = QTransactionProcessingStatus;
var QAccountStatus = {
  uninit: 0,
  active: 1,
  frozen: 2,
  nonExist: 3
};
exports.QAccountStatus = QAccountStatus;
var QAccountStatusChange = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
exports.QAccountStatusChange = QAccountStatusChange;
var QComputeType = {
  skipped: 0,
  vm: 1
};
exports.QComputeType = QComputeType;
var QSkipReason = {
  noState: 0,
  badState: 1,
  noGas: 2
};
exports.QSkipReason = QSkipReason;
var QBounceType = {
  negFunds: 0,
  noFunds: 1,
  ok: 2
};
exports.QBounceType = QBounceType;
var MASTERCHAIN_ID = -1;
var EXTRA_TRANSACTION_WAITING_TIME = 10000;
var BLOCK_TRANSACTION_WAITING_TIME = 5000;

function removeTypeName(obj) {
  if (obj.__typename) {
    delete obj.__typename;
  }

  Object.values(obj).forEach(function (value) {
    if (!!value && _typeof(value) === 'object') {
      removeTypeName(value);
    }
  });
}

function removeProps(obj, paths) {
  var result = obj;
  paths.forEach(function (path) {
    var dotPos = path.indexOf('.');

    if (dotPos < 0) {
      if (path in result) {
        result = _objectSpread({}, result);
        delete result[path];
      }
    } else {
      var name = path.substr(0, dotPos);
      var child = result[name];

      if (child) {
        var reducedChild = removeProps(child, [path.substr(dotPos + 1)]);

        if (reducedChild !== child) {
          result = _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, reducedChild));
        }
      }
    }
  });
  return result;
}

var TONContractsModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONContractsModule, _TONModule);

  var _super = _createSuper(TONContractsModule);

  function TONContractsModule() {
    var _this;

    _classCallCheck(this, TONContractsModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "queries", void 0);

    _defineProperty(_assertThisInitialized(_this), "bigBalance", '0x10000000000000');

    return _this;
  }

  _createClass(TONContractsModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
      var _load = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(params, parentSpan) {
        var accounts;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: params.address
                    }
                  },
                  result: 'balance',
                  parentSpan: parentSpan
                });

              case 2:
                accounts = _context2.sent;

                if (!(accounts && accounts.length > 0)) {
                  _context2.next = 5;
                  break;
                }

                return _context2.abrupt("return", {
                  id: params.address,
                  balanceGrams: accounts[0].balance
                });

              case 5:
                return _context2.abrupt("return", {
                  id: null,
                  balanceGrams: null
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }

      return load;
    }() // Facade functions

  }, {
    key: "deploy",
    value: function () {
      var _deploy = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee4(params, parentSpan) {
        var _this2 = this;

        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.context.trace('contracts.deploy', /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(span) {
                    return _regenerator["default"].wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context3.abrupt("return", _this2.internalDeployJs(params, span));

                          case 2:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x5) {
                    return _ref.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function deploy(_x3, _x4) {
        return _deploy.apply(this, arguments);
      }

      return deploy;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee6(params, parentSpan) {
        var _this3 = this;

        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.context.trace('contracts.run', /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee5(span) {
                    return _regenerator["default"].wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context5.abrupt("return", _this3.internalRunJs(params, span));

                          case 2:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x8) {
                    return _ref2.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function run(_x6, _x7) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "runLocal",
    value: function () {
      var _runLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee8(params, parentSpan) {
        var _this4 = this;

        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.context.trace('contracts.runLocal', /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee7(span) {
                    return _regenerator["default"].wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context7.abrupt("return", _this4.internalRunLocalJs(params, span));

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function (_x11) {
                    return _ref3.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function runLocal(_x9, _x10) {
        return _runLocal.apply(this, arguments);
      }

      return runLocal;
    }()
  }, {
    key: "runMessageLocal",
    value: function () {
      var _runMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee10(params, parentSpan) {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.context.trace('runMessageLocal', /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee9(span) {
                    return _regenerator["default"].wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            span.setTag('params', removeProps(params, ['keyPair.secret']));
                            return _context9.abrupt("return", _this5.internalRunMessageLocalJs(params, span));

                          case 2:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x14) {
                    return _ref4.apply(this, arguments);
                  };
                }(), parentSpan));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function runMessageLocal(_x12, _x13) {
        return _runMessageLocal.apply(this, arguments);
      }

      return runMessageLocal;
    }()
  }, {
    key: "runGet",
    value: function () {
      var _runGet = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee11(params) {
        var coreParams, address, account;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                coreParams = params;

                if (!(!params.codeBase64 || !params.dataBase64)) {
                  _context11.next = 15;
                  break;
                }

                address = params.address;

                if (address) {
                  _context11.next = 5;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 5:
                _context11.next = 7;
                return this.getAccount(address, false, {
                  timeout: this.config.waitForTimeout()
                });

              case 7:
                account = _context11.sent;

                if (account.code) {
                  _context11.next = 10;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 10:
                account.codeBase64 = account.code;
                account.dataBase64 = account.data;
                delete account.code;
                delete account.data;
                coreParams = _objectSpread(_objectSpread({}, account), params);

              case 15:
                return _context11.abrupt("return", this.requestCore('tvm.get', coreParams));

              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function runGet(_x15) {
        return _runGet.apply(this, arguments);
      }

      return runGet;
    }()
  }, {
    key: "arrayFromCONS",
    value: function arrayFromCONS(cons) {
      var result = [];
      var item = cons;

      while (item) {
        if (!item.length === 2) {
          throw _TONClient.TONClientError.invalidCons();
        }

        result.push(item[0]);
        item = item[1];
      }

      return result;
    } // Message creation

  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee12(params, retryIndex) {
        var message;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.config.log('createDeployMessage', params);
                _context12.next = 3;
                return this.requestCore('contracts.deploy.message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair,
                  workchainId: params.workchainId
                });

              case 3:
                message = _context12.sent;
                return _context12.abrupt("return", {
                  message: message,
                  address: message.address
                });

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function createDeployMessage(_x16, _x17) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee13(params, retryIndex) {
        var message;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.config.log('createRunMessage', params);
                _context13.next = 3;
                return this.requestCore('contracts.run.message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  tryIndex: retryIndex,
                  input: params.input,
                  keyPair: params.keyPair
                });

              case 3:
                message = _context13.sent;
                return _context13.abrupt("return", {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createRunMessage(_x18, _x19) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee14(params, retryIndex) {
        var result;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.requestCore('contracts.deploy.encode_unsigned_message', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  tryIndex: retryIndex,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  publicKeyHex: params.keyPair["public"],
                  workchainId: params.workchainId
                });

              case 2:
                result = _context14.sent;
                return _context14.abrupt("return", {
                  address: result.addressHex,
                  signParams: _objectSpread(_objectSpread({}, result.encoded), {}, {
                    abi: params["package"].abi
                  })
                });

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createUnsignedDeployMessage(_x20, _x21) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee15(params, retryIndex) {
        var signParams;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.requestCore('contracts.run.encode_unsigned_message', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  tryIndex: retryIndex,
                  input: params.input
                });

              case 2:
                signParams = _context15.sent;
                return _context15.abrupt("return", {
                  address: params.address,
                  functionName: params.functionName,
                  signParams: _objectSpread(_objectSpread({}, signParams), {}, {
                    abi: params.abi
                  })
                });

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function createUnsignedRunMessage(_x22, _x23) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee16(params) {
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.requestCore('contracts.encode_message_with_sign', params));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function createSignedMessage(_x24) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee17(params) {
        var message;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context17.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context17.abrupt("return", {
                  address: params.unsignedMessage.address,
                  message: message
                });

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function createSignedDeployMessage(_x25) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee18(params) {
        var message;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.createSignedMessage({
                  abi: params.unsignedMessage.signParams.abi,
                  unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
                  signBytesBase64: params.signBytesBase64,
                  publicKeyHex: params.publicKeyHex
                });

              case 2:
                message = _context18.sent;
                message.expire = params.unsignedMessage.signParams.expire;
                return _context18.abrupt("return", {
                  address: params.unsignedMessage.address,
                  abi: params.unsignedMessage.signParams.abi,
                  functionName: params.unsignedMessage.functionName,
                  message: message
                });

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function createSignedRunMessage(_x26) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee19(params) {
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.requestCore('contracts.image.code', params));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getCodeFromImage(_x27) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee20(params) {
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.requestCore('contracts.deploy.data', params));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function getDeployData(_x28) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee21(params) {
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this.requestCore('contracts.run.body', params));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function createRunBody(_x29) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee22(params) {
        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", this.requestCore('contracts.function.id', params));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function getFunctionId(_x30) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee23(params) {
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", this.requestCore('contracts.boc.hash', params));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function getBocHash(_x31) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee24(params) {
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", this.requestCore('contracts.parse.message', params));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function parseMessage(_x32) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee25(params) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                return _context25.abrupt("return", this.requestCore('contracts.run.output', params));

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      function decodeRunOutput(_x33) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee26(params) {
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                return _context26.abrupt("return", this.requestCore('contracts.run.unknown.input', params));

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      function decodeInputMessageBody(_x34) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee27(params) {
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this.requestCore('contracts.run.unknown.output', params));

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      function decodeOutputMessageBody(_x35) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "ensureMessageId",
    value: function () {
      var _ensureMessageId = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee29(message) {
        var _this6 = this;

        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.t0 = message.messageId;

                if (_context29.t0) {
                  _context29.next = 5;
                  break;
                }

                _context29.next = 4;
                return _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee28() {
                  var id;
                  return _regenerator["default"].wrap(function _callee28$(_context28) {
                    while (1) {
                      switch (_context28.prev = _context28.next) {
                        case 0:
                          _context28.next = 2;
                          return _this6.getBocHash({
                            bocBase64: message.messageBodyBase64
                          });

                        case 2:
                          id = _context28.sent.hash;
                          message.messageId = id;
                          return _context28.abrupt("return", id);

                        case 5:
                        case "end":
                          return _context28.stop();
                      }
                    }
                  }, _callee28);
                }))();

              case 4:
                _context29.t0 = _context29.sent;

              case 5:
                return _context29.abrupt("return", _context29.t0);

              case 6:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }));

      function ensureMessageId(_x36) {
        return _ensureMessageId.apply(this, arguments);
      }

      return ensureMessageId;
    }()
  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee30(params, parentSpan) {
        var expire, serverTimeDelta, lastBlockId, id, idBase64;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                expire = params.expire;

                if (!(expire && Date.now() > expire * 1000)) {
                  _context30.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.sendNodeRequestFailed('Message already expired');

              case 3:
                _context30.t0 = Math;
                _context30.next = 6;
                return this.queries.serverTimeDelta(parentSpan);

              case 6:
                _context30.t1 = _context30.sent;
                serverTimeDelta = _context30.t0.abs.call(_context30.t0, _context30.t1);

                if (!(serverTimeDelta > this.config.outOfSyncThreshold())) {
                  _context30.next = 11;
                  break;
                }

                this.queries.dropServerTimeDelta();
                throw _TONClient.TONClientError.clockOutOfSync();

              case 11:
                _context30.next = 13;
                return this.findLastShardBlock(params.address);

              case 13:
                lastBlockId = _context30.sent;
                _context30.next = 16;
                return this.ensureMessageId(params);

              case 16:
                id = _context30.sent;
                idBase64 = Buffer.from(id, 'hex').toString('base64');
                _context30.next = 20;
                return this.queries.postRequests([{
                  id: idBase64,
                  body: params.messageBodyBase64
                }], parentSpan);

              case 20:
                this.config.log('sendMessage. Request posted', id);
                return _context30.abrupt("return", {
                  lastBlockId: lastBlockId,
                  sentTime: Math.round(Date.now() / 1000)
                });

              case 22:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function sendMessage(_x37, _x38) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee31(message, resultFields, parentSpan, retryIndex, address, abi, functionName) {
        var processingState, _yield$this$waitForTr, transaction;

        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return this.sendMessage(message, parentSpan);

              case 2:
                processingState = _context31.sent;
                _context31.next = 5;
                return this.waitForTransaction({
                  message: message,
                  processingState: processingState,
                  parentSpan: parentSpan,
                  abi: abi,
                  functionName: functionName
                });

              case 5:
                _yield$this$waitForTr = _context31.sent;
                transaction = _yield$this$waitForTr.transaction;
                return _context31.abrupt("return", transaction);

              case 8:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function processMessage(_x39, _x40, _x41, _x42, _x43, _x44, _x45) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "findLastBlock",
    value: function () {
      var _findLastBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee32(chain, result, additionalFilter) {
        var blocks;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return this.queries.blocks.query({
                  filter: _objectSpread({
                    workchain_id: {
                      eq: chain
                    }
                  }, additionalFilter || {}),
                  result: result,
                  orderBy: [{
                    path: 'seq_no',
                    direction: "DESC"
                  }],
                  limit: 1
                });

              case 2:
                blocks = _context32.sent;
                return _context32.abrupt("return", blocks.length > 0 ? blocks[0] : null);

              case 4:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function findLastBlock(_x46, _x47, _x48) {
        return _findLastBlock.apply(this, arguments);
      }

      return findLastBlock;
    }()
  }, {
    key: "findMatchingShard",
    value: function () {
      var _findMatchingShard = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee33(shards, address) {
        return _regenerator["default"].wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                return _context33.abrupt("return", this.requestCore('contracts.find.shard', {
                  shards: shards,
                  address: address
                }));

              case 1:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      function findMatchingShard(_x49, _x50) {
        return _findMatchingShard.apply(this, arguments);
      }

      return findMatchingShard;
    }()
  }, {
    key: "findLastShardBlock",
    value: function () {
      var _findLastShardBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee34(address) {
        var _masterchainLastBlock, _shardBlock$descr;

        var addressParts, workchain, masterchainLastBlock, workchainLastBlock, shards, shardBlock, root_hash;
        return _regenerator["default"].wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                addressParts = address.split(':');
                workchain = addressParts.length > 1 ? Number.parseInt(addressParts[0]) : 0; // if account resides in master chain then starting point is last master chain block
                // generated before message was sent

                _context34.next = 4;
                return this.findLastBlock(MASTERCHAIN_ID, 'id master { shard_hashes { workchain_id shard descr { root_hash } } }');

              case 4:
                masterchainLastBlock = _context34.sent;

                if (!(workchain === MASTERCHAIN_ID)) {
                  _context34.next = 9;
                  break;
                }

                if (masterchainLastBlock) {
                  _context34.next = 8;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(MASTERCHAIN_ID);

              case 8:
                return _context34.abrupt("return", masterchainLastBlock.id);

              case 9:
                if (masterchainLastBlock) {
                  _context34.next = 23;
                  break;
                }

                _context34.next = 12;
                return this.findLastBlock(workchain, 'after_merge shard');

              case 12:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 15;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(workchain);

              case 15:
                if (!(workchainLastBlock.after_merge || workchainLastBlock.shard !== '8000000000000000')) {
                  _context34.next = 17;
                  break;
                }

                throw _TONClient.TONClientError.noBlocks(MASTERCHAIN_ID);

              case 17:
                _context34.next = 19;
                return this.findLastBlock(workchain, 'id', {
                  shard: {
                    eq: '8000000000000000'
                  }
                });

              case 19:
                workchainLastBlock = _context34.sent;

                if (workchainLastBlock) {
                  _context34.next = 22;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No starting Node SE block found');

              case 22:
                return _context34.abrupt("return", workchainLastBlock.id);

              case 23:
                shards = masterchainLastBlock === null || masterchainLastBlock === void 0 ? void 0 : (_masterchainLastBlock = masterchainLastBlock.master) === null || _masterchainLastBlock === void 0 ? void 0 : _masterchainLastBlock.shard_hashes;

                if (!(!shards || shards.length === 0)) {
                  _context34.next = 26;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No `shard_hashes` field in masterchain block');

              case 26:
                _context34.next = 28;
                return this.findMatchingShard(shards, address);

              case 28:
                shardBlock = _context34.sent;
                root_hash = shardBlock === null || shardBlock === void 0 ? void 0 : (_shardBlock$descr = shardBlock.descr) === null || _shardBlock$descr === void 0 ? void 0 : _shardBlock$descr.root_hash;

                if (root_hash) {
                  _context34.next = 32;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No `root_hash` field in shard descr');

              case 32:
                return _context34.abrupt("return", root_hash);

              case 33:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      function findLastShardBlock(_x51) {
        return _findLastShardBlock.apply(this, arguments);
      }

      return findLastShardBlock;
    }()
  }, {
    key: "checkShardMatch",
    value: function () {
      var _checkShardMatch = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee35(block, address) {
        return _regenerator["default"].wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return this.findMatchingShard([{
                  workchain_id: block.workchain_id || 0,
                  shard: block.shard || ''
                }], address);

              case 2:
                return _context35.abrupt("return", !!_context35.sent);

              case 3:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      function checkShardMatch(_x52, _x53) {
        return _checkShardMatch.apply(this, arguments);
      }

      return checkShardMatch;
    }()
  }, {
    key: "waitNextBlock",
    value: function () {
      var _waitNextBlock = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee36(current, address, timeout) {
        var block;
        return _regenerator["default"].wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return this.queries.blocks.waitFor({
                  filter: {
                    prev_ref: {
                      root_hash: {
                        eq: current
                      }
                    }
                  },
                  result: BLOCK_FIELDS,
                  timeout: timeout
                });

              case 2:
                block = _context36.sent;
                _context36.t0 = block === null || block === void 0 ? void 0 : block.after_split;

                if (!_context36.t0) {
                  _context36.next = 8;
                  break;
                }

                _context36.next = 7;
                return this.checkShardMatch(block, address);

              case 7:
                _context36.t0 = !_context36.sent;

              case 8:
                if (!_context36.t0) {
                  _context36.next = 10;
                  break;
                }

                return _context36.abrupt("return", this.queries.blocks.waitFor({
                  filter: {
                    id: {
                      ne: block.id
                    },
                    prev_ref: {
                      root_hash: {
                        eq: current
                      }
                    }
                  },
                  result: BLOCK_FIELDS,
                  timeout: timeout
                }));

              case 10:
                return _context36.abrupt("return", block);

              case 11:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      function waitNextBlock(_x54, _x55, _x56) {
        return _waitNextBlock.apply(this, arguments);
      }

      return waitNextBlock;
    }()
  }, {
    key: "waitForTransaction",
    value: function () {
      var _waitForTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee37(params) {
        var timeReport, totalStart, expire, messageId, address, stopTime, infiniteWait, processing, transaction, addTimeout, now, timeout, block, start, resolvedError, _iterator, _step, inMsg, blockMessageId, transactionId, trStart;

        return _regenerator["default"].wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                // const legacyStart = Date.now();
                // const result = await this.legacyWaitForTransaction(params);
                // console.log('>>>', `Legacy wait for a: ${Date.now() - legacyStart} ms`);
                // return result;
                timeReport = ['Modern time report:'];
                totalStart = Date.now();
                expire = params.message.expire || 0;
                _context37.next = 5;
                return this.ensureMessageId(params.message);

              case 5:
                messageId = _context37.sent;
                address = params.message.address;
                stopTime = expire || Math.round((Date.now() + this.config.messageProcessingTimeout()) / 1000);
                infiniteWait = params.infiniteWait !== false;
                processing = _objectSpread({}, params.processingState);
                transaction = null;
                addTimeout = this.config.messageProcessingTimeout();

              case 12:
                if (!true) {
                  _context37.next = 66;
                  break;
                }

                now = Date.now();
                timeout = Math.max(stopTime, now) - now + addTimeout;
                block = void 0;
                _context37.prev = 16;
                start = Date.now();
                _context37.next = 20;
                return this.waitNextBlock(processing.lastBlockId, address, timeout);

              case 20:
                block = _context37.sent;
                timeReport.push("block received for a: ".concat(Date.now() - start, " ms"));
                _context37.next = 31;
                break;

              case 24:
                _context37.prev = 24;
                _context37.t0 = _context37["catch"](16);

                if (!infiniteWait) {
                  _context37.next = 28;
                  break;
                }

                return _context37.abrupt("continue", 12);

              case 28:
                resolvedError = _context37.t0;

                if (_context37.t0.code === _TONClient.TONErrorCode.WAIT_FOR_TIMEOUT) {
                  resolvedError = _TONClient.TONClientError.networkSilent({
                    messageId: messageId,
                    blockId: processing.lastBlockId,
                    timeout: timeout,
                    state: processing,
                    expire: expire,
                    sendTime: processing.sentTime
                  });
                }

                throw resolvedError;

              case 31:
                processing.lastBlockId = block.id || '';
                _iterator = _createForOfIteratorHelper(block.in_msg_descr || []);
                _context37.prev = 33;

                _iterator.s();

              case 35:
                if ((_step = _iterator.n()).done) {
                  _context37.next = 50;
                  break;
                }

                inMsg = _step.value;
                blockMessageId = inMsg.msg_id;

                if (!blockMessageId) {
                  _context37.next = 48;
                  break;
                }

                transactionId = inMsg.transaction_id;

                if (transactionId) {
                  _context37.next = 42;
                  break;
                }

                throw _TONClient.TONClientError.invalidBlockchain('No field `transaction_id` in block');

              case 42:
                trStart = Date.now();
                _context37.next = 45;
                return this.queries.transactions.waitFor({
                  filter: {
                    id: {
                      eq: transactionId
                    }
                  },
                  result: TRANSACTION_FIELDS_ORDINARY,
                  timeout: _TONQueriesModule.MAX_TIMEOUT
                });

              case 45:
                transaction = _context37.sent;
                timeReport.push("transaction received for a: ".concat(Date.now() - trStart, " ms"));
                return _context37.abrupt("break", 50);

              case 48:
                _context37.next = 35;
                break;

              case 50:
                _context37.next = 55;
                break;

              case 52:
                _context37.prev = 52;
                _context37.t1 = _context37["catch"](33);

                _iterator.e(_context37.t1);

              case 55:
                _context37.prev = 55;

                _iterator.f();

                return _context37.finish(55);

              case 58:
                if (!transaction) {
                  _context37.next = 60;
                  break;
                }

                return _context37.abrupt("break", 66);

              case 60:
                if (!((block.gen_utime || 0) > stopTime)) {
                  _context37.next = 64;
                  break;
                }

                if (!expire) {
                  _context37.next = 63;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired({
                  messageId: messageId,
                  sendTime: processing.sentTime,
                  expire: stopTime,
                  blockTime: block.gen_utime,
                  blockId: processing.lastBlockId
                });

              case 63:
                throw _TONClient.TONClientError.transactionWaitTimeout({
                  messageId: messageId,
                  sendTime: processing.sentTime,
                  timeout: timeout,
                  messageProcessingState: processing
                });

              case 64:
                _context37.next = 12;
                break;

              case 66:
                if (transaction) {
                  _context37.next = 68;
                  break;
                }

                throw _TONClient.TONClientError.internalError('Unreachable code');

              case 68:
                timeReport.push("total waiting time: ".concat(Date.now() - totalStart, " ms"));
                this.config.log(timeReport.join('\n'));
                return _context37.abrupt("return", this.processTransaction(address, transaction, params.abi, params.functionName));

              case 71:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this, [[16, 24], [33, 52, 55, 58]]);
      }));

      function waitForTransaction(_x57) {
        return _waitForTransaction.apply(this, arguments);
      }

      return waitForTransaction;
    }()
  }, {
    key: "legacyWaitForTransaction",
    value: function () {
      var _legacyWaitForTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee40(params) {
        var _this7 = this;

        var message, abi, functionName, parentSpan, retryIndex, messageId, config, processingTimeout, promises, serverInfo, operationId, transaction, sendTime, blockTime, expire, blockTimeout, waitExpired, transactionNow, _yield$this$processTr, output, fees;

        return _regenerator["default"].wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                message = params.message, abi = params.abi, functionName = params.functionName, parentSpan = params.parentSpan;
                retryIndex = 1;
                _context40.next = 4;
                return this.ensureMessageId(message);

              case 4:
                messageId = _context40.sent;
                config = this.config;
                config.log('[waitForTransaction]', functionName, message);
                processingTimeout = config.messageProcessingTimeout(retryIndex);
                promises = [];
                _context40.next = 11;
                return this.queries.getServerInfo(parentSpan);

              case 11:
                serverInfo = _context40.sent;
                operationId = serverInfo.supportsOperationId ? this.queries.generateOperationId() : undefined;
                transaction = null;
                sendTime = Math.round(Date.now() / 1000);
                blockTime = null;
                _context40.prev = 16;
                expire = message.expire;

                if (expire) {
                  // calculate timeout according to `expire` value (in seconds)
                  // add processing timeout as master block validation time
                  blockTimeout = expire * 1000 - Date.now() + processingTimeout; // transaction timeout must be greater then block timeout

                  processingTimeout = blockTimeout + EXTRA_TRANSACTION_WAITING_TIME;

                  waitExpired = /*#__PURE__*/function () {
                    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee38() {
                      var _block$in_msg_descr$f;

                      var block, transactionId;
                      return _regenerator["default"].wrap(function _callee38$(_context38) {
                        while (1) {
                          switch (_context38.prev = _context38.next) {
                            case 0:
                              // wait for block, produced after `expire` to guarantee that message is rejected
                              block = null;
                              _context38.prev = 1;
                              _context38.next = 4;
                              return _this7.queries.blocks.waitFor({
                                filter: {
                                  master: {
                                    min_shard_gen_utime: {
                                      ge: expire
                                    }
                                  }
                                },
                                result: 'id gen_utime in_msg_descr { transaction_id }',
                                timeout: blockTimeout,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 4:
                              block = _context38.sent;
                              _context38.next = 14;
                              break;

                            case 7:
                              _context38.prev = 7;
                              _context38.t0 = _context38["catch"](1);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t0)) {
                                _context38.next = 13;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent({
                                messageId: messageId,
                                sendTime: sendTime,
                                expire: expire,
                                timeout: blockTimeout
                              });

                            case 13:
                              throw _context38.t0;

                            case 14:
                              if (!transaction) {
                                _context38.next = 16;
                                break;
                              }

                              return _context38.abrupt("return");

                            case 16:
                              transactionId = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                                return !!msg.transaction_id;
                              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

                              if (transactionId) {
                                _context38.next = 19;
                                break;
                              }

                              throw _TONClient.TONClientError.internalError('Invalid block received: no transaction ID');

                            case 19:
                              _context38.prev = 19;
                              _context38.next = 22;
                              return _this7.queries.transactions.waitFor({
                                filter: {
                                  id: {
                                    eq: transactionId
                                  }
                                },
                                result: 'id',
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                parentSpan: parentSpan,
                                operationId: operationId
                              });

                            case 22:
                              _context38.next = 31;
                              break;

                            case 24:
                              _context38.prev = 24;
                              _context38.t1 = _context38["catch"](19);

                              if (!_TONClient.TONClientError.isWaitForTimeout(_context38.t1)) {
                                _context38.next = 30;
                                break;
                              }

                              throw _TONClient.TONClientError.networkSilent({
                                messageId: messageId,
                                blockId: block.id,
                                transactionId: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME,
                                sendTime: sendTime,
                                expire: expire
                              });

                            case 30:
                              throw _context38.t1;

                            case 31:
                              blockTime = block.gen_utime;

                            case 32:
                            case "end":
                              return _context38.stop();
                          }
                        }
                      }, _callee38, null, [[1, 7], [19, 24]]);
                    }));

                    return function waitExpired() {
                      return _ref6.apply(this, arguments);
                    };
                  }();

                  promises.push(waitExpired());
                } // wait for message processing transaction


                promises.push(new Promise(function (resolve, reject) {
                  _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee39() {
                    return _regenerator["default"].wrap(function _callee39$(_context39) {
                      while (1) {
                        switch (_context39.prev = _context39.next) {
                          case 0:
                            _context39.prev = 0;
                            _context39.next = 3;
                            return _this7.queries.transactions.waitFor({
                              filter: {
                                in_msg: {
                                  eq: messageId
                                },
                                status: {
                                  eq: QTransactionProcessingStatus.finalized
                                }
                              },
                              result: transactionDetails,
                              timeout: processingTimeout,
                              operationId: operationId,
                              parentSpan: parentSpan
                            });

                          case 3:
                            transaction = _context39.sent;
                            resolve();
                            _context39.next = 10;
                            break;

                          case 7:
                            _context39.prev = 7;
                            _context39.t0 = _context39["catch"](0);

                            if (_TONClient.TONClientError.isWaitForTimeout(_context39.t0)) {
                              reject(_TONClient.TONClientError.transactionWaitTimeout({
                                messageId: messageId,
                                sendTime: sendTime,
                                timeout: processingTimeout
                              }));
                            } else {
                              reject(_context39.t0);
                            }

                          case 10:
                          case "end":
                            return _context39.stop();
                        }
                      }
                    }, _callee39, null, [[0, 7]]);
                  }))();
                }));
                _context40.prev = 20;
                _context40.next = 23;
                return Promise.race(promises);

              case 23:
                _context40.prev = 23;

                if (!(promises.length > 1 && operationId)) {
                  _context40.next = 27;
                  break;
                }

                _context40.next = 27;
                return this.queries.finishOperations([operationId]);

              case 27:
                return _context40.finish(23);

              case 28:
                if (transaction) {
                  _context40.next = 30;
                  break;
                }

                throw _TONClient.TONClientError.messageExpired({
                  messageId: messageId,
                  sendTime: sendTime,
                  expire: expire,
                  blockTime: blockTime
                });

              case 30:
                transactionNow = transaction.now || 0;
                this.config.log('[waitForTransaction]', 'TRANSACTION_RECEIVED', {
                  id: transaction.id,
                  blockId: transaction.block_id,
                  now: "".concat(new Date(transactionNow * 1000).toISOString(), " (").concat(transactionNow, ")")
                });
                _context40.next = 44;
                break;

              case 34:
                _context40.prev = 34;
                _context40.t0 = _context40["catch"](16);
                this.config.log('[waitForTransaction]', 'FAILED', _context40.t0);

                if (!(_TONClient.TONClientError.isMessageExpired(_context40.t0) || _TONClient.TONClientError.isClientError(_context40.t0, _TONClient.TONClientError.code.TRANSACTION_WAIT_TIMEOUT))) {
                  _context40.next = 43;
                  break;
                }

                _context40.next = 40;
                return this.resolveDetailedError(_context40.t0, message.messageBodyBase64, Date.now(), message.address);

              case 40:
                throw _context40.sent;

              case 43:
                throw _context40.t0;

              case 44:
                removeTypeName(transaction);
                _context40.next = 47;
                return this.processTransaction(message.address, transaction, abi, functionName);

              case 47:
                _yield$this$processTr = _context40.sent;
                output = _yield$this$processTr.output;
                fees = _yield$this$processTr.fees;
                return _context40.abrupt("return", {
                  transaction: transaction,
                  output: output,
                  fees: fees
                });

              case 51:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this, [[16, 34], [20,, 23, 28]]);
      }));

      function legacyWaitForTransaction(_x58) {
        return _legacyWaitForTransaction.apply(this, arguments);
      }

      return legacyWaitForTransaction;
    }()
  }, {
    key: "processTransaction",
    value: function () {
      var _processTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee41(address, transaction, abi, functionName) {
        var result, accounts;
        return _regenerator["default"].wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.prev = 0;
                _context41.next = 3;
                return this.requestCore('contracts.process.transaction', {
                  transaction: transaction,
                  abi: abi,
                  functionName: functionName,
                  address: address
                });

              case 3:
                result = _context41.sent;
                return _context41.abrupt("return", _objectSpread({
                  transaction: transaction
                }, result));

              case 7:
                _context41.prev = 7;
                _context41.t0 = _context41["catch"](0);
                _context41.next = 11;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'acc_type balance',
                  timeout: 1000
                });

              case 11:
                accounts = _context41.sent;

                if (!(accounts.length === 0)) {
                  _context41.next = 14;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 14:
                if (!_TONClient.TONClientError.isContractError(_context41.t0, _TONClient.TONContractExitCode.NO_GAS)) {
                  _context41.next = 16;
                  break;
                }

                throw _TONClient.TONClientError.accountBalanceTooLow(address, accounts[0].balance);

              case 16:
                throw _context41.t0;

              case 17:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this, [[0, 7]]);
      }));

      function processTransaction(_x59, _x60, _x61, _x62) {
        return _processTransaction.apply(this, arguments);
      }

      return processTransaction;
    }()
  }, {
    key: "resolveDetailedError",
    value: function () {
      var _resolveDetailedError = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee42(error, messageBase64, time, address) {
        var accounts, account;
        return _regenerator["default"].wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    }
                  },
                  result: 'id acc_type balance balance_other { currency value } code data last_paid',
                  timeout: 1000
                });

              case 2:
                accounts = _context42.sent;

                if (!(accounts.length === 0)) {
                  _context42.next = 5;
                  break;
                }

                return _context42.abrupt("return", _TONClient.TONClientError.accountMissing(address));

              case 5:
                account = accounts[0];
                removeTypeName(account);
                _context42.prev = 7;
                _context42.next = 10;
                return this.requestCore('contracts.resolve.error', {
                  address: address,
                  account: account,
                  messageBase64: messageBase64,
                  time: Math.round(time / 1000),
                  mainError: error
                });

              case 10:
                _context42.next = 15;
                break;

              case 12:
                _context42.prev = 12;
                _context42.t0 = _context42["catch"](7);
                return _context42.abrupt("return", _context42.t0);

              case 15:
                return _context42.abrupt("return", error);

              case 16:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this, [[7, 12]]);
      }));

      function resolveDetailedError(_x63, _x64, _x65, _x66) {
        return _resolveDetailedError.apply(this, arguments);
      }

      return resolveDetailedError;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee43(address, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.queries.accounts.query({
                  filter: {
                    id: {
                      eq: address
                    },
                    acc_type: {
                      eq: QAccountType.active
                    }
                  },
                  result: 'id',
                  parentSpan: parentSpan
                });

              case 2:
                account = _context43.sent;
                return _context43.abrupt("return", account.length > 0);

              case 4:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      function isDeployed(_x67, _x68) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee44(message, parentSpan, retryIndex) {
        var processingState;
        return _regenerator["default"].wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                this.config.log('processDeployMessage', message);
                _context44.next = 3;
                return this.isDeployed(message.address, parentSpan);

              case 3:
                if (!_context44.sent) {
                  _context44.next = 5;
                  break;
                }

                return _context44.abrupt("return", {
                  address: message.address,
                  alreadyDeployed: true
                });

              case 5:
                _context44.next = 7;
                return this.sendMessage(message.message, parentSpan);

              case 7:
                processingState = _context44.sent;
                return _context44.abrupt("return", this.waitForDeployTransaction(message, processingState, parentSpan));

              case 9:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      function processDeployMessage(_x69, _x70, _x71) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "waitForDeployTransaction",
    value: function () {
      var _waitForDeployTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee45(deployMessage, processingState, parentSpan, infiniteWait) {
        var message, result;
        return _regenerator["default"].wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                message = deployMessage.message;
                _context45.next = 3;
                return this.waitForTransaction({
                  message: message,
                  processingState: processingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait
                });

              case 3:
                result = _context45.sent;
                return _context45.abrupt("return", _objectSpread(_objectSpread({}, result), {}, {
                  address: message.address,
                  alreadyDeployed: false
                }));

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      function waitForDeployTransaction(_x72, _x73, _x74, _x75) {
        return _waitForDeployTransaction.apply(this, arguments);
      }

      return waitForDeployTransaction;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee46(runMessage, parentSpan) {
        var processingState;
        return _regenerator["default"].wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                this.config.log('processRunMessage', runMessage);
                _context46.next = 3;
                return this.sendMessage(runMessage.message, parentSpan);

              case 3:
                processingState = _context46.sent;
                return _context46.abrupt("return", this.waitForRunTransaction(runMessage, processingState, parentSpan));

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      function processRunMessage(_x76, _x77) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "waitForRunTransaction",
    value: function () {
      var _waitForRunTransaction = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee47(runMessage, processingState, parentSpan, infiniteWait) {
        return _regenerator["default"].wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                return _context47.abrupt("return", this.waitForTransaction({
                  message: runMessage.message,
                  processingState: processingState,
                  parentSpan: parentSpan,
                  infiniteWait: infiniteWait,
                  abi: runMessage.abi,
                  functionName: runMessage.functionName
                }));

              case 1:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      function waitForRunTransaction(_x78, _x79, _x80, _x81) {
        return _waitForRunTransaction.apply(this, arguments);
      }

      return waitForRunTransaction;
    }()
    /**
     * Deprecated. Use `runMessageLocal` instead.
     * @param params
     * @param waitParams
     * @param parentSpan
     * @returns {Promise<unknown>}
     */

  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee48(params, waitParams, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                this.config.log('processRunMessageLocal', params);
                _context48.next = 3;
                return this.getAccount(params.address, true, waitParams, parentSpan);

              case 3:
                account = _context48.sent;
                return _context48.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 5:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      function processRunMessageLocal(_x82, _x83, _x84) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee49(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                this.config.log('calcRunFees', params);
                _context49.next = 3;
                return this.getAccount(params.address, true, params.waitParams, parentSpan);

              case 3:
                account = _context49.sent;

                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context49.abrupt("return", this.requestCore('contracts.run.fee', {
                  address: params.address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      function calcRunFees(_x85, _x86) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee50(params, parentSpan) {
        var message;
        return _regenerator["default"].wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                this.config.log('calcDeployFees', params);
                _context50.next = 3;
                return this.createDeployMessage(params);

              case 3:
                message = _context50.sent;
                return _context50.abrupt("return", this.calcMsgProcessFees({
                  address: message.address,
                  message: message.message,
                  emulateBalance: params.emulateBalance,
                  newAccount: params.newAccount
                }, parentSpan));

              case 5:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      function calcDeployFees(_x87, _x88) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee51(params, parentSpan) {
        var account;
        return _regenerator["default"].wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                this.config.log('calcMsgProcessFees', params);
                account = {
                  balance: this.bigBalance,
                  id: params.address,
                  last_paid: Math.floor(Date.now() / 1000)
                };

                if (params.newAccount) {
                  _context51.next = 6;
                  break;
                }

                _context51.next = 5;
                return this.getAccount(params.address, false, params.waitParams, parentSpan);

              case 5:
                account = _context51.sent;

              case 6:
                if (params.emulateBalance) {
                  account.balance = this.bigBalance;
                }

                return _context51.abrupt("return", this.requestCore('contracts.run.fee.msg', {
                  address: params.address,
                  account: account,
                  messageBase64: params.message.messageBodyBase64
                }));

              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      function calcMsgProcessFees(_x89, _x90) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee52(params) {
        return _regenerator["default"].wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                return _context52.abrupt("return", this.requestCore('contracts.address.convert', params));

              case 1:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      function convertAddress(_x91) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee53(params) {
        return _regenerator["default"].wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                return _context53.abrupt("return", this.requestCore('contracts.deploy', {
                  abi: params["package"].abi,
                  constructorHeader: params.constructorHeader,
                  constructorParams: params.constructorParams,
                  initParams: params.initParams,
                  imageBase64: params["package"].imageBase64,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      function internalDeployNative(_x92) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee54(params) {
        return _regenerator["default"].wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                return _context54.abrupt("return", this.requestCore('contracts.run', {
                  address: params.address,
                  abi: params.abi,
                  functionName: params.functionName,
                  header: params.header,
                  input: params.input,
                  keyPair: params.keyPair
                }));

              case 1:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      function internalRunNative(_x93) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee55(call) {
        var retriesCount, i, useRetry;
        return _regenerator["default"].wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                retriesCount = this.config.messageRetriesCount();
                i = 0;

              case 2:
                if (!(i <= retriesCount)) {
                  _context55.next = 18;
                  break;
                }

                if (i > 0) {
                  this.config.log("Retry #".concat(i));
                }

                _context55.prev = 4;
                _context55.next = 7;
                return call(i);

              case 7:
                return _context55.abrupt("return", _context55.sent);

              case 10:
                _context55.prev = 10;
                _context55.t0 = _context55["catch"](4);
                useRetry = _context55.t0.code === _TONClient.TONErrorCode.MESSAGE_EXPIRED || _TONClient.TONClientError.isContractError(_context55.t0, _TONClient.TONContractExitCode.REPLAY_PROTECTION) || _TONClient.TONClientError.isContractError(_context55.t0, _TONClient.TONContractExitCode.MESSAGE_EXPIRED);

                if (!(!useRetry || i === retriesCount)) {
                  _context55.next = 15;
                  break;
                }

                throw _context55.t0;

              case 15:
                i += 1;
                _context55.next = 2;
                break;

              case 18:
                throw _TONClient.TONClientError.internalError("retryCall: unreachable");

              case 19:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this, [[4, 10]]);
      }));

      function retryCall(_x94) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee57(params, parentSpan) {
        var _this8 = this;

        return _regenerator["default"].wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                this.config.log('Deploy start');
                return _context57.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee56(retryIndex) {
                    var deployMessage, processingState;
                    return _regenerator["default"].wrap(function _callee56$(_context56) {
                      while (1) {
                        switch (_context56.prev = _context56.next) {
                          case 0:
                            _context56.next = 2;
                            return _this8.createDeployMessage(params, retryIndex);

                          case 2:
                            deployMessage = _context56.sent;
                            _context56.next = 5;
                            return _this8.isDeployed(deployMessage.address, parentSpan);

                          case 5:
                            if (!_context56.sent) {
                              _context56.next = 7;
                              break;
                            }

                            return _context56.abrupt("return", {
                              address: deployMessage.address,
                              alreadyDeployed: true
                            });

                          case 7:
                            _context56.next = 9;
                            return _this8.sendMessage(deployMessage.message, parentSpan);

                          case 9:
                            processingState = _context56.sent;
                            return _context56.abrupt("return", _this8.waitForDeployTransaction(deployMessage, processingState, parentSpan));

                          case 11:
                          case "end":
                            return _context56.stop();
                        }
                      }
                    }, _callee56);
                  }));

                  return function (_x97) {
                    return _ref8.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      function internalDeployJs(_x95, _x96) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee59(params, parentSpan) {
        var _this9 = this;

        return _regenerator["default"].wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                this.config.log('Run start');
                return _context59.abrupt("return", this.retryCall( /*#__PURE__*/function () {
                  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee58(retryIndex) {
                    var runMessage, processingState;
                    return _regenerator["default"].wrap(function _callee58$(_context58) {
                      while (1) {
                        switch (_context58.prev = _context58.next) {
                          case 0:
                            _context58.next = 2;
                            return _this9.createRunMessage(params, retryIndex);

                          case 2:
                            runMessage = _context58.sent;
                            _context58.next = 5;
                            return _this9.sendMessage(runMessage.message, parentSpan);

                          case 5:
                            processingState = _context58.sent;
                            return _context58.abrupt("return", _this9.waitForRunTransaction(runMessage, processingState, parentSpan));

                          case 7:
                          case "end":
                            return _context58.stop();
                        }
                      }
                    }, _callee58);
                  }));

                  return function (_x100) {
                    return _ref9.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      function internalRunJs(_x98, _x99) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee60(address, active, waitParams, parentSpan) {
        var filter, accounts, account;
        return _regenerator["default"].wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                filter = {
                  id: {
                    eq: address
                  }
                };

                if (waitParams && waitParams.transactionLt) {
                  filter.last_trans_lt = {
                    ge: waitParams.transactionLt
                  };
                }

                if (active) {
                  filter.acc_type = {
                    eq: QAccountType.active
                  };
                }

                this.config.log('getAccount. Filter', filter);
                _context60.next = 6;
                return this.queries.accounts.query(_objectSpread(_objectSpread({
                  filter: filter,
                  result: 'id acc_type code data balance balance_other { currency value } last_paid'
                }, waitParams && waitParams.timeout ? {
                  timeout: waitParams.timeout
                } : {}), {}, {
                  parentSpan: parentSpan
                }));

              case 6:
                accounts = _context60.sent;

                if (!(accounts.length === 0)) {
                  _context60.next = 9;
                  break;
                }

                throw _TONClient.TONClientError.accountMissing(address);

              case 9:
                account = accounts[0];
                removeTypeName(account);
                this.config.log('getAccount. Account received', account);
                return _context60.abrupt("return", account);

              case 13:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      function getAccount(_x101, _x102, _x103, _x104) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee61(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context61.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context61.t0 = params.account;

                if (_context61.t0) {
                  _context61.next = 8;
                  break;
                }

                _context61.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context61.t0 = _context61.sent;

              case 8:
                account = _context61.t0;

                if (account.code) {
                  _context61.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context61.abrupt("return", this.requestCore('contracts.run.local', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  input: params.input,
                  keyPair: params.keyPair,
                  fullRun: params.fullRun
                }));

              case 12:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      function internalRunLocalJs(_x105, _x106) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }, {
    key: "internalRunMessageLocalJs",
    value: function () {
      var _internalRunMessageLocalJs = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee62(params, parentSpan) {
        var address, account;
        return _regenerator["default"].wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                address = params.address;

                if (address) {
                  _context62.next = 3;
                  break;
                }

                throw _TONClient.TONClientError.addressRequiredForRunLocal();

              case 3:
                _context62.t0 = params.account;

                if (_context62.t0) {
                  _context62.next = 8;
                  break;
                }

                _context62.next = 7;
                return this.getAccount(address, false, params.waitParams, parentSpan);

              case 7:
                _context62.t0 = _context62.sent;

              case 8:
                account = _context62.t0;

                if (account.code) {
                  _context62.next = 11;
                  break;
                }

                throw _TONClient.TONClientError.accountCodeMissing(address, account.balance);

              case 11:
                return _context62.abrupt("return", this.requestCore('contracts.run.local.msg', {
                  address: address,
                  account: account,
                  abi: params.abi,
                  functionName: params.functionName,
                  messageBase64: params.messageBodyBase64,
                  fullRun: params.fullRun
                }));

              case 12:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      function internalRunMessageLocalJs(_x107, _x108) {
        return _internalRunMessageLocalJs.apply(this, arguments);
      }

      return internalRunMessageLocalJs;
    }()
  }]);

  return TONContractsModule;
}(_TONModule2.TONModule);

exports["default"] = TONContractsModule;
TONContractsModule.moduleName = 'TONContractsModule';
var transactionDetails = "\n    id\n    in_msg\n    tr_type\n    status\n    in_msg\n    out_msgs\n    block_id\n    now\n    aborted\n    lt\n    total_fees\n    storage {\n        status_change\n        storage_fees_collected\n    }\n    compute {\n        compute_type\n        skipped_reason\n        success\n        exit_code\n        gas_fees\n        gas_used\n    }\n    action {\n        success\n        valid\n        result_code\n        no_funds\n        total_fwd_fees\n        total_action_fees\n    }\n    out_messages {\n        id\n        msg_type\n        body\n        value\n    }\n   ";
var BLOCK_FIELDS = "\n    id\n    gen_utime\n    after_split\n    workchain_id\n    shard\n    in_msg_descr {\n        msg_id\n        transaction_id\n    }\n";
var TRANSACTION_FIELDS_ORDINARY = "\n    id\n    aborted\n    compute {\n        skipped_reason\n        exit_code\n        success\n        gas_fees\n    }\n    storage {\n       status_change\n       storage_fees_collected\n    }\n    action {\n        success\n        valid\n        no_funds\n        result_code\n        total_fwd_fees\n        total_action_fees\n    }\n    in_msg\n    now\n    out_msgs\n    out_messages {\n        id\n        body\n        msg_type\n        value\n    }\n    status\n    total_fees\n";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJwYXJlbnRTcGFuIiwiYWNjb3VudHMiLCJxdWVyeSIsImZpbHRlciIsImlkIiwiZXEiLCJhZGRyZXNzIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsInRyYWNlIiwic3BhbiIsInNldFRhZyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwiaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyIsImNvcmVQYXJhbXMiLCJjb2RlQmFzZTY0IiwiZGF0YUJhc2U2NCIsIlRPTkNsaWVudEVycm9yIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGUiLCJhY2NvdW50Q29kZU1pc3NpbmciLCJkYXRhIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsIm1lc3NhZ2VJZCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJwb3N0UmVxdWVzdHMiLCJib2R5Iiwic2VudFRpbWUiLCJyb3VuZCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwicHJvY2Vzc2luZ1N0YXRlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJCTE9DS19GSUVMRFMiLCJhZnRlcl9zcGxpdCIsImNoZWNrU2hhcmRNYXRjaCIsIm5lIiwidGltZVJlcG9ydCIsInRvdGFsU3RhcnQiLCJzdG9wVGltZSIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsImluZmluaXRlV2FpdCIsImFkZFRpbWVvdXQiLCJtYXgiLCJzdGFydCIsIndhaXROZXh0QmxvY2siLCJyZXNvbHZlZEVycm9yIiwiVE9ORXJyb3JDb2RlIiwiV0FJVF9GT1JfVElNRU9VVCIsIm5ldHdvcmtTaWxlbnQiLCJibG9ja0lkIiwic3RhdGUiLCJzZW5kVGltZSIsImluX21zZ19kZXNjciIsImluTXNnIiwiYmxvY2tNZXNzYWdlSWQiLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJnZW5fdXRpbWUiLCJtZXNzYWdlRXhwaXJlZCIsImJsb2NrVGltZSIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlIiwiaW50ZXJuYWxFcnJvciIsImpvaW4iLCJwcm9jZXNzVHJhbnNhY3Rpb24iLCJwcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwiZ2V0U2VydmVySW5mbyIsInNlcnZlckluZm8iLCJvcGVyYXRpb25JZCIsInN1cHBvcnRzT3BlcmF0aW9uSWQiLCJnZW5lcmF0ZU9wZXJhdGlvbklkIiwidW5kZWZpbmVkIiwiYmxvY2tUaW1lb3V0Iiwid2FpdEV4cGlyZWQiLCJtaW5fc2hhcmRfZ2VuX3V0aW1lIiwiZ2UiLCJpc1dhaXRGb3JUaW1lb3V0IiwiZmluZCIsIm1zZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW5fbXNnIiwic3RhdHVzIiwidHJhbnNhY3Rpb25EZXRhaWxzIiwicmFjZSIsImZpbmlzaE9wZXJhdGlvbnMiLCJ0cmFuc2FjdGlvbk5vdyIsImJsb2NrX2lkIiwidG9JU09TdHJpbmciLCJpc01lc3NhZ2VFeHBpcmVkIiwiaXNDbGllbnRFcnJvciIsIlRSQU5TQUNUSU9OX1dBSVRfVElNRU9VVCIsInJlc29sdmVEZXRhaWxlZEVycm9yIiwib3V0cHV0IiwiZmVlcyIsImFjY291bnRNaXNzaW5nIiwiaXNDb250cmFjdEVycm9yIiwiVE9OQ29udHJhY3RFeGl0Q29kZSIsIk5PX0dBUyIsImFjY291bnRCYWxhbmNlVG9vTG93IiwiZXJyb3IiLCJtZXNzYWdlQmFzZTY0IiwidGltZSIsIm1haW5FcnJvciIsImFjY190eXBlIiwiaXNEZXBsb3llZCIsImFscmVhZHlEZXBsb3llZCIsIndhaXRGb3JEZXBsb3lUcmFuc2FjdGlvbiIsImRlcGxveU1lc3NhZ2UiLCJydW5NZXNzYWdlIiwid2FpdEZvclJ1blRyYW5zYWN0aW9uIiwid2FpdFBhcmFtcyIsImVtdWxhdGVCYWxhbmNlIiwiYmlnQmFsYW5jZSIsImNyZWF0ZURlcGxveU1lc3NhZ2UiLCJjYWxjTXNnUHJvY2Vzc0ZlZXMiLCJuZXdBY2NvdW50IiwibGFzdF9wYWlkIiwiZmxvb3IiLCJjYWxsIiwicmV0cmllc0NvdW50IiwibWVzc2FnZVJldHJpZXNDb3VudCIsImkiLCJ1c2VSZXRyeSIsIk1FU1NBR0VfRVhQSVJFRCIsIlJFUExBWV9QUk9URUNUSU9OIiwicmV0cnlDYWxsIiwiY3JlYXRlUnVuTWVzc2FnZSIsInRyYW5zYWN0aW9uTHQiLCJsYXN0X3RyYW5zX2x0IiwiZnVsbFJ1biIsIlRPTk1vZHVsZSIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFLQTs7QUFzREE7O0FBQ0E7O0FBQ0E7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R0FBZ0Msb0JBQWhDO0FBRUEsSUFBTWpELGtCQUFrQiwya0JBQXhCO0FBd0NBLElBQU0xRCxZQUFZLCtJQUFsQjtBQVlBLElBQU00QiwyQkFBMkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1NwYW4sIFNwYW5Db250ZXh0fSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHtUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHtUT05Nb2R1bGV9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlLCB7TUFYX1RJTUVPVVR9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuY29kZUJhc2U2NCB8fCAhcGFyYW1zLmRhdGFCYXNlNjQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW50VGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgcHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdzZXFfbm8nLCBkaXJlY3Rpb246IFwiREVTQ1wiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID4gMCA/IGJsb2Nrc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzOiBRU2hhcmRIYXNoW10sIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8P1FTaGFyZEhhc2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5maW5kLnNoYXJkJywge1xuICAgICAgICAgICAgc2hhcmRzLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZExhc3RTaGFyZEJsb2NrKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NQYXJ0cyA9IGFkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluID0gYWRkcmVzc1BhcnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoYWRkcmVzc1BhcnRzWzBdKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc3RlcmNoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCBpcyBmcm9tIG90aGVyIGNoYWlucyB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgYWNjb3VudCdzIHNoYXJkIGJsb2NrXG4gICAgICAgIC8vIFRvIG9idGFpbiBpdCB3ZSB0YWtlIG1hc3RlcmNoYWluIGJsb2NrIHRvIGdldCBzaGFyZHMgY29uZmlndXJhdGlvbiBhbmQgc2VsZWN0IG1hdGNoaW5nIHNoYXJkXG4gICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcblxuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nIGlzIGVycm9yXG4gICAgICAgICAgICBpZiAod29ya2NoYWluTGFzdEJsb2NrLmFmdGVyX21lcmdlIHx8IHdvcmtjaGFpbkxhc3RCbG9jay5zaGFyZCAhPT0gJzgwMDAwMDAwMDAwMDAwMDAnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIGxhc3QgYmxvY2sgYnkgc2VxX25vXG4gICAgICAgICAgICB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgc2hhcmQ6IHsgZXE6ICc4MDAwMDAwMDAwMDAwMDAwJyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd29ya2NoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhcmRzOiA/UVNoYXJkSGFzaFtdID0gbWFzdGVyY2hhaW5MYXN0QmxvY2s/Lm1hc3Rlcj8uc2hhcmRfaGFzaGVzO1xuICAgICAgICBpZiAoIXNoYXJkcyB8fCBzaGFyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gYHNoYXJkX2hhc2hlc2AgZmllbGQgaW4gbWFzdGVyY2hhaW4gYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFyZEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChzaGFyZHMsIGFkZHJlc3MpO1xuICAgICAgICBjb25zdCByb290X2hhc2ggPSBzaGFyZEJsb2NrPy5kZXNjcj8ucm9vdF9oYXNoO1xuICAgICAgICBpZiAoIXJvb3RfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGByb290X2hhc2hgIGZpZWxkIGluIHNoYXJkIGRlc2NyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3RfaGFzaDtcblxuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW3tcbiAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgIH1dLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFsnTW9kZXJuIHRpbWUgcmVwb3J0OiddO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zLm1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLm1lc3NhZ2UuYWRkcmVzcztcbiAgICAgICAgY29uc3Qgc3RvcFRpbWUgPSBleHBpcmVcbiAgICAgICAgICAgIHx8IE1hdGgucm91bmQoKERhdGUubm93KCkgKyB0aGlzLmNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQoKSkgLyAxMDAwKTtcblxuICAgICAgICBjb25zdCBpbmZpbml0ZVdhaXQgPSBwYXJhbXMuaW5maW5pdGVXYWl0ICE9PSBmYWxzZTtcbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZyA9IHsgLi4ucGFyYW1zLnByb2Nlc3NpbmdTdGF0ZSB9O1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBudWxsO1xuICAgICAgICBsZXQgYWRkVGltZW91dCA9IHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQgPSBNYXRoLm1heChzdG9wVGltZSwgbm93KSAtIG5vdyArIGFkZFRpbWVvdXQ7XG4gICAgICAgICAgICBsZXQgYmxvY2s6IFFCbG9jaztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy53YWl0TmV4dEJsb2NrKHByb2Nlc3NpbmcubGFzdEJsb2NrSWQsIGFkZHJlc3MsIHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRpbWVSZXBvcnQucHVzaChgYmxvY2sgcmVjZWl2ZWQgZm9yIGE6ICR7RGF0ZS5ub3coKSAtIHN0YXJ0fSBtc2ApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5maW5pdGVXYWl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgcmVzb2x2ZWRFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvci5jb2RlID09PSBUT05FcnJvckNvZGUuV0FJVF9GT1JfVElNRU9VVCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZEVycm9yID0gVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRpbWU6IHByb2Nlc3Npbmcuc2VudFRpbWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyByZXNvbHZlZEVycm9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkID0gYmxvY2suaWQgfHwgJyc7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5Nc2cgb2YgKGJsb2NrLmluX21zZ19kZXNjciB8fCBbXSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja01lc3NhZ2VJZCA9IGluTXNnLm1zZ19pZDtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tNZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGluTXNnLnRyYW5zYWN0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGB0cmFuc2FjdGlvbiByZWNlaXZlZCBmb3IgYTogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBwcm9jZXNzaW5nLnNlbnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlOiBzdG9wVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZTogYmxvY2suZ2VuX3V0aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnRyYW5zYWN0aW9uV2FpdFRpbWVvdXQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBwcm9jZXNzaW5nLnNlbnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlUHJvY2Vzc2luZ1N0YXRlOiBwcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignVW5yZWFjaGFibGUgY29kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZVJlcG9ydC5wdXNoKGB0b3RhbCB3YWl0aW5nIHRpbWU6ICR7RGF0ZS5ub3coKSAtIHRvdGFsU3RhcnR9IG1zYCk7XG5cbiAgICAgICAgdGhpcy5jb25maWcubG9nKHRpbWVSZXBvcnQuam9pbignXFxuJykpO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmZ1bmN0aW9uTmFtZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGFzeW5jIGxlZ2FjeVdhaXRGb3JUcmFuc2FjdGlvbihwYXJhbXM6IFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgeyBtZXNzYWdlLCBhYmksIGZ1bmN0aW9uTmFtZSwgcGFyZW50U3BhbiB9ID0gcGFyYW1zO1xuICAgICAgICBjb25zdCByZXRyeUluZGV4ID0gMTtcbiAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25maWcubG9nKCdbd2FpdEZvclRyYW5zYWN0aW9uXScsIGZ1bmN0aW9uTmFtZSwgbWVzc2FnZSk7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuZ2V0U2VydmVySW5mbyhwYXJlbnRTcGFuKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0aW9uSWQgPSBzZXJ2ZXJJbmZvLnN1cHBvcnRzT3BlcmF0aW9uSWRcbiAgICAgICAgICAgID8gdGhpcy5xdWVyaWVzLmdlbmVyYXRlT3BlcmF0aW9uSWQoKVxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogP1FUcmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCBzZW5kVGltZSA9IE1hdGgucm91bmQoRGF0ZS5ub3coKSAvIDEwMDApO1xuICAgICAgICBsZXQgYmxvY2tUaW1lID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKGV4cGlyZSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aW1lb3V0IGFjY29yZGluZyB0byBgZXhwaXJlYCB2YWx1ZSAoaW4gc2Vjb25kcylcbiAgICAgICAgICAgICAgICAvLyBhZGQgcHJvY2Vzc2luZyB0aW1lb3V0IGFzIG1hc3RlciBibG9jayB2YWxpZGF0aW9uIHRpbWVcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tUaW1lb3V0ID0gZXhwaXJlICogMTAwMCAtIERhdGUubm93KCkgKyBwcm9jZXNzaW5nVGltZW91dDtcbiAgICAgICAgICAgICAgICAvLyB0cmFuc2FjdGlvbiB0aW1lb3V0IG11c3QgYmUgZ3JlYXRlciB0aGVuIGJsb2NrIHRpbWVvdXRcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGJsb2NrVGltZW91dCArIEVYVFJBX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRTtcblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgd2FpdEV4cGlyZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9jazogP1FCbG9jayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3RlcjogeyBtaW5fc2hhcmRfZ2VuX3V0aW1lOiB7IGdlOiBleHBpcmUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQgZ2VuX3V0aW1lIGluX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IGJsb2NrVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBibG9jay5pbl9tc2dfZGVzY3JcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubmV0d29ya1NpbGVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogYmxvY2suaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lID0gYmxvY2suZ2VuX3V0aW1lO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHdhaXRFeHBpcmVkKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2gobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbiA9IGF3YWl0IHRoaXMucXVlcmllcy50cmFuc2FjdGlvbnMud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogeyBlcTogUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cy5maW5hbGl6ZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHByb2Nlc3NpbmdUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChUT05DbGllbnRFcnJvci50cmFuc2FjdGlvbldhaXRUaW1lb3V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmFjZShwcm9taXNlcyk7XG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPiAxICYmIG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5maW5pc2hPcGVyYXRpb25zKFtvcGVyYXRpb25JZF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ1RSQU5TQUNUSU9OX1JFQ0VJVkVEJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja0lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpIHx8XG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3QgeyBvdXRwdXQsIGZlZXMgfSA9IGF3YWl0IHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKG1lc3NhZ2UuYWRkcmVzcywgdHJhbnNhY3Rpb24sIGFiaSwgZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmk6IGFiaSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk5PX0dBUykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzLCBhY2NvdW50c1swXS5iYWxhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gY29kZSBkYXRhIGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lOiBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKG1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZ1N0YXRlID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24obWVzc2FnZSwgcHJvY2Vzc2luZ1N0YXRlLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVwbG95TWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgcHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nU3RhdGUsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBwcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZVJldHJ5IHx8IGkgPT09IHJldHJpZXNDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcInJldHJ5Q2FsbDogdW5yZWFjaGFibGVcIik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveU1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQoZGVwbG95TWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZ1N0YXRlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmdTdGF0ZSA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nU3RhdGUsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGNvZGUgZGF0YSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICAuLi4od2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQgPyB7IHRpbWVvdXQ6IHdhaXRQYXJhbXMudGltZW91dCB9IDoge30pLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19