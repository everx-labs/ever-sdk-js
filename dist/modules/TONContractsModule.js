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
        var timeReport, totalStart, expire, msgId, address, stopTime, infiniteWait, processing, transaction, addTimeout, now, timeout, block, start, resolvedError, _iterator, _step, inMsg, messageId, transactionId, trStart;

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
                msgId = _context37.sent;
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
                    msgId: msgId,
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
                messageId = inMsg.msg_id;

                if (!messageId) {
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
                  msgId: msgId,
                  sendTime: processing.sentTime,
                  expire: stopTime,
                  blockTime: block.gen_utime,
                  blockId: processing.lastBlockId
                });

              case 63:
                throw _TONClient.TONClientError.transactionWaitTimeout({
                  msgId: msgId,
                  sendTime: processing.sentTime,
                  timeout: timeout,
                  state: processing
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
                                msgId: messageId,
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

                              throw _TONClient.TONClientError.transactionLag({
                                msgId: messageId,
                                blockId: block.id,
                                transactionId: transactionId,
                                timeout: BLOCK_TRANSACTION_WAITING_TIME
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
                                msgId: messageId,
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
                  msgId: messageId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJ0cmFuc2l0IiwiZGlzY2FyZGVkRmluYWwiLCJkaXNjYXJkZWRUcmFuc2l0IiwiUU91dE1zZ1R5cGUiLCJvdXRNc2dOZXciLCJkZXF1ZXVlSW1tZWRpYXRlbHkiLCJkZXF1ZXVlIiwidHJhbnNpdFJlcXVpcmVkIiwibm9uZSIsIlFNZXNzYWdlVHlwZSIsImludGVybmFsIiwiZXh0SW4iLCJleHRPdXQiLCJRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMiLCJxdWV1ZWQiLCJwcm9jZXNzaW5nIiwicHJlbGltaW5hcnkiLCJwcm9wb3NlZCIsImZpbmFsaXplZCIsInJlZnVzZWQiLCJ0cmFuc2l0aW5nIiwiUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyIsIlFTcGxpdFR5cGUiLCJzcGxpdCIsIm1lcmdlIiwiUUFjY291bnRUeXBlIiwidW5pbml0IiwiYWN0aXZlIiwiUVRyYW5zYWN0aW9uVHlwZSIsIm9yZGluYXJ5IiwidGljayIsInRvY2siLCJzcGxpdFByZXBhcmUiLCJzcGxpdEluc3RhbGwiLCJtZXJnZVByZXBhcmUiLCJtZXJnZUluc3RhbGwiLCJRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzIiwiUUFjY291bnRTdGF0dXMiLCJub25FeGlzdCIsIlFBY2NvdW50U3RhdHVzQ2hhbmdlIiwiUUNvbXB1dGVUeXBlIiwic2tpcHBlZCIsInZtIiwiUVNraXBSZWFzb24iLCJRQm91bmNlVHlwZSIsIm5lZ0Z1bmRzIiwibm9GdW5kcyIsIm9rIiwiTUFTVEVSQ0hBSU5fSUQiLCJFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUiLCJyZW1vdmVUeXBlTmFtZSIsIm9iaiIsIl9fdHlwZW5hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJyZW1vdmVQcm9wcyIsInBhdGhzIiwicmVzdWx0IiwicGF0aCIsImRvdFBvcyIsImluZGV4T2YiLCJuYW1lIiwic3Vic3RyIiwiY2hpbGQiLCJyZWR1Y2VkQ2hpbGQiLCJUT05Db250cmFjdHNNb2R1bGUiLCJjb25maWciLCJjb250ZXh0IiwiZ2V0TW9kdWxlIiwiVE9OQ29uZmlnTW9kdWxlIiwicXVlcmllcyIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJwYXJhbXMiLCJwYXJlbnRTcGFuIiwiYWNjb3VudHMiLCJxdWVyeSIsImZpbHRlciIsImlkIiwiZXEiLCJhZGRyZXNzIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsInRyYWNlIiwic3BhbiIsInNldFRhZyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwiaW50ZXJuYWxSdW5NZXNzYWdlTG9jYWxKcyIsImNvcmVQYXJhbXMiLCJjb2RlQmFzZTY0IiwiZGF0YUJhc2U2NCIsIlRPTkNsaWVudEVycm9yIiwiYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwiLCJnZXRBY2NvdW50IiwidGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiYWNjb3VudCIsImNvZGUiLCJhY2NvdW50Q29kZU1pc3NpbmciLCJkYXRhIiwicmVxdWVzdENvcmUiLCJjb25zIiwiaXRlbSIsImludmFsaWRDb25zIiwicHVzaCIsInJldHJ5SW5kZXgiLCJsb2ciLCJhYmkiLCJjb25zdHJ1Y3RvckhlYWRlciIsImNvbnN0cnVjdG9yUGFyYW1zIiwiaW5pdFBhcmFtcyIsImltYWdlQmFzZTY0Iiwia2V5UGFpciIsIndvcmtjaGFpbklkIiwibWVzc2FnZSIsImZ1bmN0aW9uTmFtZSIsImhlYWRlciIsInRyeUluZGV4IiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImV4cGlyZSIsIm1lc3NhZ2VJZCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJtZXNzYWdlQm9keUJhc2U2NCIsImhhc2giLCJEYXRlIiwibm93Iiwic2VuZE5vZGVSZXF1ZXN0RmFpbGVkIiwiTWF0aCIsInNlcnZlclRpbWVEZWx0YSIsImFicyIsIm91dE9mU3luY1RocmVzaG9sZCIsImRyb3BTZXJ2ZXJUaW1lRGVsdGEiLCJjbG9ja091dE9mU3luYyIsImZpbmRMYXN0U2hhcmRCbG9jayIsImxhc3RCbG9ja0lkIiwiZW5zdXJlTWVzc2FnZUlkIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJwb3N0UmVxdWVzdHMiLCJib2R5Iiwic2VudFRpbWUiLCJyb3VuZCIsInJlc3VsdEZpZWxkcyIsInNlbmRNZXNzYWdlIiwicHJvY2Vzc2luZ1N0YXRlIiwid2FpdEZvclRyYW5zYWN0aW9uIiwidHJhbnNhY3Rpb24iLCJjaGFpbiIsImFkZGl0aW9uYWxGaWx0ZXIiLCJibG9ja3MiLCJ3b3JrY2hhaW5faWQiLCJvcmRlckJ5IiwiZGlyZWN0aW9uIiwibGltaXQiLCJzaGFyZHMiLCJhZGRyZXNzUGFydHMiLCJ3b3JrY2hhaW4iLCJOdW1iZXIiLCJwYXJzZUludCIsImZpbmRMYXN0QmxvY2siLCJtYXN0ZXJjaGFpbkxhc3RCbG9jayIsIm5vQmxvY2tzIiwid29ya2NoYWluTGFzdEJsb2NrIiwiYWZ0ZXJfbWVyZ2UiLCJzaGFyZCIsImludmFsaWRCbG9ja2NoYWluIiwibWFzdGVyIiwic2hhcmRfaGFzaGVzIiwiZmluZE1hdGNoaW5nU2hhcmQiLCJzaGFyZEJsb2NrIiwicm9vdF9oYXNoIiwiZGVzY3IiLCJibG9jayIsImN1cnJlbnQiLCJ3YWl0Rm9yIiwicHJldl9yZWYiLCJCTE9DS19GSUVMRFMiLCJhZnRlcl9zcGxpdCIsImNoZWNrU2hhcmRNYXRjaCIsIm5lIiwidGltZVJlcG9ydCIsInRvdGFsU3RhcnQiLCJtc2dJZCIsInN0b3BUaW1lIiwibWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0IiwiaW5maW5pdGVXYWl0IiwiYWRkVGltZW91dCIsIm1heCIsInN0YXJ0Iiwid2FpdE5leHRCbG9jayIsInJlc29sdmVkRXJyb3IiLCJUT05FcnJvckNvZGUiLCJXQUlUX0ZPUl9USU1FT1VUIiwibmV0d29ya1NpbGVudCIsImJsb2NrSWQiLCJzdGF0ZSIsInNlbmRUaW1lIiwiaW5fbXNnX2Rlc2NyIiwiaW5Nc2ciLCJtc2dfaWQiLCJ0cmFuc2FjdGlvbklkIiwidHJhbnNhY3Rpb25faWQiLCJ0clN0YXJ0IiwidHJhbnNhY3Rpb25zIiwiVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZIiwiTUFYX1RJTUVPVVQiLCJnZW5fdXRpbWUiLCJtZXNzYWdlRXhwaXJlZCIsImJsb2NrVGltZSIsInRyYW5zYWN0aW9uV2FpdFRpbWVvdXQiLCJpbnRlcm5hbEVycm9yIiwiam9pbiIsInByb2Nlc3NUcmFuc2FjdGlvbiIsInByb2Nlc3NpbmdUaW1lb3V0IiwicHJvbWlzZXMiLCJnZXRTZXJ2ZXJJbmZvIiwic2VydmVySW5mbyIsIm9wZXJhdGlvbklkIiwic3VwcG9ydHNPcGVyYXRpb25JZCIsImdlbmVyYXRlT3BlcmF0aW9uSWQiLCJ1bmRlZmluZWQiLCJibG9ja1RpbWVvdXQiLCJ3YWl0RXhwaXJlZCIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsImlzV2FpdEZvclRpbWVvdXQiLCJmaW5kIiwibXNnIiwidHJhbnNhY3Rpb25MYWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImluX21zZyIsInN0YXR1cyIsInRyYW5zYWN0aW9uRGV0YWlscyIsInJhY2UiLCJmaW5pc2hPcGVyYXRpb25zIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiaXNNZXNzYWdlRXhwaXJlZCIsImlzQ2xpZW50RXJyb3IiLCJUUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQiLCJyZXNvbHZlRGV0YWlsZWRFcnJvciIsIm91dHB1dCIsImZlZXMiLCJhY2NvdW50TWlzc2luZyIsImlzQ29udHJhY3RFcnJvciIsIlRPTkNvbnRyYWN0RXhpdENvZGUiLCJOT19HQVMiLCJhY2NvdW50QmFsYW5jZVRvb0xvdyIsImVycm9yIiwibWVzc2FnZUJhc2U2NCIsInRpbWUiLCJtYWluRXJyb3IiLCJhY2NfdHlwZSIsImlzRGVwbG95ZWQiLCJhbHJlYWR5RGVwbG95ZWQiLCJ3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24iLCJkZXBsb3lNZXNzYWdlIiwicnVuTWVzc2FnZSIsIndhaXRGb3JSdW5UcmFuc2FjdGlvbiIsIndhaXRQYXJhbXMiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsImZsb29yIiwiY2FsbCIsInJldHJpZXNDb3VudCIsIm1lc3NhZ2VSZXRyaWVzQ291bnQiLCJpIiwidXNlUmV0cnkiLCJNRVNTQUdFX0VYUElSRUQiLCJSRVBMQVlfUFJPVEVDVElPTiIsInJldHJ5Q2FsbCIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJ0cmFuc2FjdGlvbkx0IiwibGFzdF90cmFuc19sdCIsImZ1bGxSdW4iLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBS0E7O0FBc0RBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7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MkIsK2VBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQge1NwYW4sIFNwYW5Db250ZXh0fSBmcm9tICdvcGVudHJhY2luZyc7XG5pbXBvcnQgdHlwZSB7XG4gICAgUUFjY291bnQsXG4gICAgUUJsb2NrLFxuICAgIFFNZXNzYWdlLFxuICAgIFFUcmFuc2FjdGlvbixcbiAgICBUT05Db250cmFjdEFCSSxcbiAgICBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdCxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCxcbiAgICBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZXBsb3lSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjRGVwbG95RmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Qm9jLFxuICAgIFRPTkNvbnRyYWN0R2V0Qm9jSGFzaFJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRDb2RlRnJvbUltYWdlUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldERlcGxveURhdGFSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdCxcbiAgICBUT05Db250cmFjdExvYWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RMb2FkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q2FsY1J1bkZlZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENhbGNGZWVSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjTXNnUHJvY2Vzc2luZ0ZlZXNQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0UnVuUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFVuc2lnbmVkUnVuTWVzc2FnZSxcbiAgICBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkdldFJlc3VsdCxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTldhaXRGb3JUcmFuc2FjdGlvblBhcmFtcyxcbiAgICBRU2hhcmRIYXNoLFxuICAgIFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG59IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0IHtUT05DbGllbnRFcnJvciwgVE9OQ29udHJhY3RFeGl0Q29kZSwgVE9ORXJyb3JDb2RlfSBmcm9tICcuLi9UT05DbGllbnQnO1xuaW1wb3J0IHtUT05Nb2R1bGV9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlLCB7TUFYX1RJTUVPVVR9IGZyb20gJy4vVE9OUXVlcmllc01vZHVsZSc7XG5cbmV4cG9ydCBjb25zdCBUT05BZGRyZXNzU3RyaW5nVmFyaWFudCA9IHtcbiAgICBBY2NvdW50SWQ6ICdBY2NvdW50SWQnLFxuICAgIEhleDogJ0hleCcsXG4gICAgQmFzZTY0OiAnQmFzZTY0Jyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06ICdjb21wdXRlVm0nLFxuICAgIGFjdGlvbjogJ2FjdGlvbicsXG4gICAgdW5rbm93bjogJ3Vua25vd24nLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudENvbXB1dGVTa2lwcGVkU3RhdHVzID0ge1xuICAgIG5vU3RhdGU6IDAsXG4gICAgYmFkU3RhdGU6IDEsXG4gICAgbm9HYXM6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUluTXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpaHI6IDEsXG4gICAgaW1tZWRpYXRlbHk6IDIsXG4gICAgZmluYWw6IDMsXG4gICAgdHJhbnNpdDogNCxcbiAgICBkaXNjYXJkZWRGaW5hbDogNSxcbiAgICBkaXNjYXJkZWRUcmFuc2l0OiA2LFxufTtcblxuZXhwb3J0IGNvbnN0IFFPdXRNc2dUeXBlID0ge1xuICAgIGV4dGVybmFsOiAwLFxuICAgIGltbWVkaWF0ZWx5OiAxLFxuICAgIG91dE1zZ05ldzogMixcbiAgICB0cmFuc2l0OiAzLFxuICAgIGRlcXVldWVJbW1lZGlhdGVseTogNCxcbiAgICBkZXF1ZXVlOiA1LFxuICAgIHRyYW5zaXRSZXF1aXJlZDogNixcbiAgICBub25lOiAtMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVR5cGUgPSB7XG4gICAgaW50ZXJuYWw6IDAsXG4gICAgZXh0SW46IDEsXG4gICAgZXh0T3V0OiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHF1ZXVlZDogMSxcbiAgICBwcm9jZXNzaW5nOiAyLFxuICAgIHByZWxpbWluYXJ5OiAzLFxuICAgIHByb3Bvc2VkOiA0LFxuICAgIGZpbmFsaXplZDogNSxcbiAgICByZWZ1c2VkOiA2LFxuICAgIHRyYW5zaXRpbmc6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUUJsb2NrUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByb3Bvc2VkOiAxLFxuICAgIGZpbmFsaXplZDogMixcbiAgICByZWZ1c2VkOiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFTcGxpdFR5cGUgPSB7XG4gICAgbm9uZTogMCxcbiAgICBzcGxpdDogMixcbiAgICBtZXJnZTogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFR5cGUgPSB7XG4gICAgdW5pbml0OiAwLFxuICAgIGFjdGl2ZTogMSxcbiAgICBmcm96ZW46IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uVHlwZSA9IHtcbiAgICBvcmRpbmFyeTogMCxcbiAgICBzdG9yYWdlOiAxLFxuICAgIHRpY2s6IDIsXG4gICAgdG9jazogMyxcbiAgICBzcGxpdFByZXBhcmU6IDQsXG4gICAgc3BsaXRJbnN0YWxsOiA1LFxuICAgIG1lcmdlUHJlcGFyZTogNixcbiAgICBtZXJnZUluc3RhbGw6IDcsXG59O1xuXG5leHBvcnQgY29uc3QgUVRyYW5zYWN0aW9uUHJvY2Vzc2luZ1N0YXR1cyA9IHtcbiAgICB1bmtub3duOiAwLFxuICAgIHByZWxpbWluYXJ5OiAxLFxuICAgIHByb3Bvc2VkOiAyLFxuICAgIGZpbmFsaXplZDogMyxcbiAgICByZWZ1c2VkOiA0LFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxuICAgIG5vbkV4aXN0OiAzLFxufTtcblxuZXhwb3J0IGNvbnN0IFFBY2NvdW50U3RhdHVzQ2hhbmdlID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQ29tcHV0ZVR5cGUgPSB7XG4gICAgc2tpcHBlZDogMCxcbiAgICB2bTogMSxcbn07XG5cbmV4cG9ydCBjb25zdCBRU2tpcFJlYXNvbiA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFCb3VuY2VUeXBlID0ge1xuICAgIG5lZ0Z1bmRzOiAwLFxuICAgIG5vRnVuZHM6IDEsXG4gICAgb2s6IDIsXG59O1xuXG5jb25zdCBNQVNURVJDSEFJTl9JRCA9IC0xO1xuXG5jb25zdCBFWFRSQV9UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUgPSAxMDAwMDtcbmNvbnN0IEJMT0NLX1RSQU5TQUNUSU9OX1dBSVRJTkdfVElNRSA9IDUwMDA7XG5cbmZ1bmN0aW9uIHJlbW92ZVR5cGVOYW1lKG9iajogYW55KSB7XG4gICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSBvYmouX190eXBlbmFtZTtcbiAgICB9XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQcm9wcyhvYmo6IHt9LCBwYXRoczogc3RyaW5nW10pOiB7fSB7XG4gICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICBwYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvdFBvcyA9IHBhdGguaW5kZXhPZignLicpO1xuICAgICAgICBpZiAoZG90UG9zIDwgMCkge1xuICAgICAgICAgICAgaWYgKHBhdGggaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0geyAuLi5yZXN1bHQgfTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0W3BhdGhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguc3Vic3RyKDAsIGRvdFBvcyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJlc3VsdFtuYW1lXTtcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZHVjZWRDaGlsZCA9IHJlbW92ZVByb3BzKGNoaWxkLCBbcGF0aC5zdWJzdHIoZG90UG9zICsgMSldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkdWNlZENoaWxkICE9PSBjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV06IHJlZHVjZWRDaGlsZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db250cmFjdHNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUgaW1wbGVtZW50cyBUT05Db250cmFjdHMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8Kj4ge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RMb2FkUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnRzOiBRQWNjb3VudFtdID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2JhbGFuY2UnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTG9jYWxSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLnJ1bkxvY2FsJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCByZW1vdmVQcm9wcyhwYXJhbXMsIFsna2V5UGFpci5zZWNyZXQnXSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxSdW5Mb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2VMb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdydW5NZXNzYWdlTG9jYWwnLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkdldChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuR2V0UmVzdWx0PiB7XG4gICAgICAgIGxldCBjb3JlUGFyYW1zOiBUT05Db250cmFjdFJ1bkdldFBhcmFtcyA9IHBhcmFtcztcbiAgICAgICAgaWYgKCFwYXJhbXMuY29kZUJhc2U2NCB8fCAhcGFyYW1zLmRhdGFCYXNlNjQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFkZHJlc3NSZXF1aXJlZEZvclJ1bkxvY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50OiBhbnkgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoYWRkcmVzcywgZmFsc2UsIHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLmNvbmZpZy53YWl0Rm9yVGltZW91dCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWFjY291bnQuY29kZSkge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCBhY2NvdW50LmJhbGFuY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjb3VudC5jb2RlQmFzZTY0ID0gYWNjb3VudC5jb2RlO1xuICAgICAgICAgICAgYWNjb3VudC5kYXRhQmFzZTY0ID0gYWNjb3VudC5kYXRhO1xuICAgICAgICAgICAgZGVsZXRlIGFjY291bnQuY29kZTtcbiAgICAgICAgICAgIGRlbGV0ZSBhY2NvdW50LmRhdGE7XG4gICAgICAgICAgICBjb3JlUGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIC4uLmFjY291bnQsXG4gICAgICAgICAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgndHZtLmdldCcsIGNvcmVQYXJhbXMpO1xuICAgIH1cblxuICAgIGFycmF5RnJvbUNPTlMoY29uczogYW55W10pOiBhbnlbXSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgaXRlbSA9IGNvbnM7XG4gICAgICAgIHdoaWxlIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZENvbnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW1bMF0pO1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cblxuICAgIC8vIE1lc3NhZ2UgY3JlYXRpb25cblxuICAgIGFzeW5jIGNyZWF0ZURlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjcmVhdGVEZXBsb3lNZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZTogVE9OQ29udHJhY3RNZXNzYWdlID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcjogcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlUnVuTWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcjogcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVVbnNpZ25lZERlcGxveU1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFVuc2lnbmVkRGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIHRyeUluZGV4OiByZXRyeUluZGV4LFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHBhcmFtcy5jb25zdHJ1Y3RvclBhcmFtcyxcbiAgICAgICAgICAgIGluaXRQYXJhbXM6IHBhcmFtcy5pbml0UGFyYW1zLFxuICAgICAgICAgICAgaW1hZ2VCYXNlNjQ6IHBhcmFtcy5wYWNrYWdlLmltYWdlQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMua2V5UGFpci5wdWJsaWMsXG4gICAgICAgICAgICB3b3JrY2hhaW5JZDogcGFyYW1zLndvcmtjaGFpbklkLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHJlc3VsdC5hZGRyZXNzSGV4LFxuICAgICAgICAgICAgc2lnblBhcmFtczoge1xuICAgICAgICAgICAgICAgIC4uLnJlc3VsdC5lbmNvZGVkLFxuICAgICAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IHNpZ25QYXJhbXMgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmVuY29kZV91bnNpZ25lZF9tZXNzYWdlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICB0cnlJbmRleDogcmV0cnlJbmRleCxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZE1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5lbmNvZGVfbWVzc2FnZV93aXRoX3NpZ24nLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENyZWF0ZVNpZ25lZERlcGxveU1lc3NhZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlU2lnbmVkTWVzc2FnZSh7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICB1bnNpZ25lZEJ5dGVzQmFzZTY0OiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMudW5zaWduZWRCeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHNpZ25CeXRlc0Jhc2U2NDogcGFyYW1zLnNpZ25CeXRlc0Jhc2U2NCxcbiAgICAgICAgICAgIHB1YmxpY0tleUhleDogcGFyYW1zLnB1YmxpY0tleUhleCxcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmV4cGlyZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRSdW5NZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkUnVuTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZUZyb21JbWFnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5pbWFnZS5jb2RlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXREZXBsb3lEYXRhKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5kYXRhJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBjcmVhdGVSdW5Cb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5ib2R5JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRGdW5jdGlvbklkKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0RnVuY3Rpb25JZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmZ1bmN0aW9uLmlkJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRCb2NIYXNoKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuYm9jLmhhc2gnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIHBhcnNlTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdEJvYyxcbiAgICApOiBQcm9taXNlPFFNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucGFyc2UubWVzc2FnZScsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gTWVzc2FnZSBwYXJzaW5nXG5cbiAgICBhc3luYyBkZWNvZGVSdW5PdXRwdXQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVSdW5PdXRwdXRQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlSW5wdXRNZXNzYWdlQm9keShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi51bmtub3duLmlucHV0JywgcGFyYW1zKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGRlY29kZU91dHB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24ub3V0cHV0JywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHByb2Nlc3NpbmdcblxuICAgIGFzeW5jIGVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gbWVzc2FnZS5tZXNzYWdlSWQgfHwgYXdhaXQgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gKGF3YWl0IHRoaXMuZ2V0Qm9jSGFzaCh7XG4gICAgICAgICAgICAgICAgYm9jQmFzZTY0OiBtZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSkpLmhhc2g7XG4gICAgICAgICAgICBtZXNzYWdlLm1lc3NhZ2VJZCA9IGlkO1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9KSgpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OTWVzc2FnZVByb2Nlc3NpbmdTdGF0ZT4ge1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMuZXhwaXJlO1xuICAgICAgICBpZiAoZXhwaXJlICYmIChEYXRlLm5vdygpID4gZXhwaXJlICogMTAwMCkpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLnNlbmROb2RlUmVxdWVzdEZhaWxlZCgnTWVzc2FnZSBhbHJlYWR5IGV4cGlyZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXJ2ZXJUaW1lRGVsdGEgPSBNYXRoLmFicyhhd2FpdCB0aGlzLnF1ZXJpZXMuc2VydmVyVGltZURlbHRhKHBhcmVudFNwYW4pKTtcbiAgICAgICAgaWYgKHNlcnZlclRpbWVEZWx0YSA+IHRoaXMuY29uZmlnLm91dE9mU3luY1RocmVzaG9sZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJpZXMuZHJvcFNlcnZlclRpbWVEZWx0YSgpO1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuY2xvY2tPdXRPZlN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGFzdEJsb2NrSWQgPSBhd2FpdCB0aGlzLmZpbmRMYXN0U2hhcmRCbG9jayhwYXJhbXMuYWRkcmVzcyk7XG4gICAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5lbnN1cmVNZXNzYWdlSWQocGFyYW1zKTtcbiAgICAgICAgY29uc3QgaWRCYXNlNjQgPSBCdWZmZXIuZnJvbShpZCwgJ2hleCcpXG4gICAgICAgICAgICAudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMucG9zdFJlcXVlc3RzKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogaWRCYXNlNjQsXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnc2VuZE1lc3NhZ2UuIFJlcXVlc3QgcG9zdGVkJywgaWQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFzdEJsb2NrSWQsXG4gICAgICAgICAgICBzZW50VGltZTogTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc01lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0TWVzc2FnZSxcbiAgICAgICAgcmVzdWx0RmllbGRzOiBzdHJpbmcsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICAgICAgYWRkcmVzcz86IHN0cmluZyxcbiAgICAgICAgYWJpPzogVE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZT86IHN0cmluZyxcbiAgICApOiBQcm9taXNlPFFUcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCB7IHRyYW5zYWN0aW9uIH0gPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgcHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbjtcbiAgICB9XG5cblxuICAgIGFzeW5jIGZpbmRMYXN0QmxvY2soY2hhaW46IG51bWJlciwgcmVzdWx0OiBzdHJpbmcsIGFkZGl0aW9uYWxGaWx0ZXI/OiBhbnkpOiBQcm9taXNlPD9hbnk+IHtcbiAgICAgICAgY29uc3QgYmxvY2tzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHsgd29ya2NoYWluX2lkOiB7IGVxOiBjaGFpbiB9LCAuLi4oYWRkaXRpb25hbEZpbHRlciB8fCB7fSkgfSxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9yZGVyQnk6IFtcbiAgICAgICAgICAgICAgICB7IHBhdGg6ICdzZXFfbm8nLCBkaXJlY3Rpb246IFwiREVTQ1wiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaW1pdDogMSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBibG9ja3MubGVuZ3RoID4gMCA/IGJsb2Nrc1swXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE1hdGNoaW5nU2hhcmQoc2hhcmRzOiBRU2hhcmRIYXNoW10sIGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8P1FTaGFyZEhhc2g+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5maW5kLnNoYXJkJywge1xuICAgICAgICAgICAgc2hhcmRzLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZExhc3RTaGFyZEJsb2NrKGFkZHJlc3M6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NQYXJ0cyA9IGFkZHJlc3Muc3BsaXQoJzonKTtcbiAgICAgICAgY29uc3Qgd29ya2NoYWluID0gYWRkcmVzc1BhcnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoYWRkcmVzc1BhcnRzWzBdKSA6IDA7XG5cblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyIGNoYWluIHRoZW4gc3RhcnRpbmcgcG9pbnQgaXMgbGFzdCBtYXN0ZXIgY2hhaW4gYmxvY2tcbiAgICAgICAgLy8gZ2VuZXJhdGVkIGJlZm9yZSBtZXNzYWdlIHdhcyBzZW50XG4gICAgICAgIGNvbnN0IG1hc3RlcmNoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKFxuICAgICAgICAgICAgTUFTVEVSQ0hBSU5fSUQsXG4gICAgICAgICAgICAnaWQgbWFzdGVyIHsgc2hhcmRfaGFzaGVzIHsgd29ya2NoYWluX2lkIHNoYXJkIGRlc2NyIHsgcm9vdF9oYXNoIH0gfSB9JyxcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBpZiBhY2NvdW50IHJlc2lkZXMgaW4gbWFzdGVyY2hhaW4gdGhlbiBzdGFydGluZyBwb2ludCBpcyBsYXN0IG1hc3RlcmNoYWluIGJsb2NrXG4gICAgICAgIGlmICh3b3JrY2hhaW4gPT09IE1BU1RFUkNIQUlOX0lEKSB7XG4gICAgICAgICAgICBpZiAoIW1hc3RlcmNoYWluTGFzdEJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hc3RlcmNoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgYWNjb3VudCBpcyBmcm9tIG90aGVyIGNoYWlucyB0aGVuIHN0YXJ0aW5nIHBvaW50IGlzIGxhc3QgYWNjb3VudCdzIHNoYXJkIGJsb2NrXG4gICAgICAgIC8vIFRvIG9idGFpbiBpdCB3ZSB0YWtlIG1hc3RlcmNoYWluIGJsb2NrIHRvIGdldCBzaGFyZHMgY29uZmlndXJhdGlvbiBhbmQgc2VsZWN0IG1hdGNoaW5nIHNoYXJkXG4gICAgICAgIGlmICghbWFzdGVyY2hhaW5MYXN0QmxvY2spIHtcblxuICAgICAgICAgICAgLy8gTm9kZSBTRSBjYXNlIC0gbm8gbWFzdGVyY2hhaW4sIG5vIHNoYXJkaW5nLiBDaGVjayB0aGF0IG9ubHkgb25lIHNoYXJkXG4gICAgICAgICAgICBsZXQgd29ya2NoYWluTGFzdEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTGFzdEJsb2NrKHdvcmtjaGFpbiwgJ2FmdGVyX21lcmdlIHNoYXJkJyk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5vQmxvY2tzKHdvcmtjaGFpbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHdvcmtjaGFpbiBpcyBzaGFyZGVkIHRoZW4gaXQgaXMgbm90IE5vZGUgU0UgYW5kIG1hc3RlcmNoYWluIGJsb2NrcyBtaXNzaW5nIGlzIGVycm9yXG4gICAgICAgICAgICBpZiAod29ya2NoYWluTGFzdEJsb2NrLmFmdGVyX21lcmdlIHx8IHdvcmtjaGFpbkxhc3RCbG9jay5zaGFyZCAhPT0gJzgwMDAwMDAwMDAwMDAwMDAnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iubm9CbG9ja3MoTUFTVEVSQ0hBSU5fSUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUYWtlIGxhc3QgYmxvY2sgYnkgc2VxX25vXG4gICAgICAgICAgICB3b3JrY2hhaW5MYXN0QmxvY2sgPSBhd2FpdCB0aGlzLmZpbmRMYXN0QmxvY2sod29ya2NoYWluLCAnaWQnLCB7XG4gICAgICAgICAgICAgICAgc2hhcmQ6IHsgZXE6ICc4MDAwMDAwMDAwMDAwMDAwJyB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXdvcmtjaGFpbkxhc3RCbG9jaykge1xuICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBzdGFydGluZyBOb2RlIFNFIGJsb2NrIGZvdW5kJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gd29ya2NoYWluTGFzdEJsb2NrLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhcmRzOiA/UVNoYXJkSGFzaFtdID0gbWFzdGVyY2hhaW5MYXN0QmxvY2s/Lm1hc3Rlcj8uc2hhcmRfaGFzaGVzO1xuICAgICAgICBpZiAoIXNoYXJkcyB8fCBzaGFyZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnZhbGlkQmxvY2tjaGFpbignTm8gYHNoYXJkX2hhc2hlc2AgZmllbGQgaW4gbWFzdGVyY2hhaW4gYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFyZEJsb2NrID0gYXdhaXQgdGhpcy5maW5kTWF0Y2hpbmdTaGFyZChzaGFyZHMsIGFkZHJlc3MpO1xuICAgICAgICBjb25zdCByb290X2hhc2ggPSBzaGFyZEJsb2NrPy5kZXNjcj8ucm9vdF9oYXNoO1xuICAgICAgICBpZiAoIXJvb3RfaGFzaCkge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW52YWxpZEJsb2NrY2hhaW4oJ05vIGByb290X2hhc2hgIGZpZWxkIGluIHNoYXJkIGRlc2NyJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3RfaGFzaDtcblxuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrU2hhcmRNYXRjaChibG9jazogUUJsb2NrLCBhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuICEhKGF3YWl0IHRoaXMuZmluZE1hdGNoaW5nU2hhcmQoW3tcbiAgICAgICAgICAgIHdvcmtjaGFpbl9pZDogYmxvY2sud29ya2NoYWluX2lkIHx8IDAsXG4gICAgICAgICAgICBzaGFyZDogYmxvY2suc2hhcmQgfHwgJycsXG4gICAgICAgIH1dLCBhZGRyZXNzKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd2FpdE5leHRCbG9jayhjdXJyZW50OiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8UUJsb2NrPiB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByZXZfcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGJsb2NrPy5hZnRlcl9zcGxpdCAmJiAhKGF3YWl0IHRoaXMuY2hlY2tTaGFyZE1hdGNoKGJsb2NrLCBhZGRyZXNzKSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXJpZXMuYmxvY2tzLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogeyBuZTogYmxvY2suaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJldl9yZWY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3RfaGFzaDogeyBlcTogY3VycmVudCB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc3VsdDogQkxPQ0tfRklFTERTLFxuICAgICAgICAgICAgICAgIHRpbWVvdXRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zOiBUT05XYWl0Rm9yVHJhbnNhY3Rpb25QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIC8vIGNvbnN0IGxlZ2FjeVN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sZWdhY3lXYWl0Rm9yVHJhbnNhY3Rpb24ocGFyYW1zKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz4+PicsIGBMZWdhY3kgd2FpdCBmb3IgYTogJHtEYXRlLm5vdygpIC0gbGVnYWN5U3RhcnR9IG1zYCk7XG4gICAgICAgIC8vIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgY29uc3QgdGltZVJlcG9ydCA9IFsnTW9kZXJuIHRpbWUgcmVwb3J0OiddO1xuXG4gICAgICAgIGNvbnN0IHRvdGFsU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBleHBpcmUgPSBwYXJhbXMubWVzc2FnZS5leHBpcmUgfHwgMDtcbiAgICAgICAgY29uc3QgbXNnSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChwYXJhbXMubWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMubWVzc2FnZS5hZGRyZXNzO1xuICAgICAgICBjb25zdCBzdG9wVGltZSA9IGV4cGlyZVxuICAgICAgICAgICAgfHwgTWF0aC5yb3VuZCgoRGF0ZS5ub3coKSArIHRoaXMuY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCgpKSAvIDEwMDApO1xuXG4gICAgICAgIGNvbnN0IGluZmluaXRlV2FpdCA9IHBhcmFtcy5pbmZpbml0ZVdhaXQgIT09IGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nID0geyAuLi5wYXJhbXMucHJvY2Vzc2luZ1N0YXRlIH07XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IG51bGw7XG4gICAgICAgIGxldCBhZGRUaW1lb3V0ID0gdGhpcy5jb25maWcubWVzc2FnZVByb2Nlc3NpbmdUaW1lb3V0KCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgdGltZW91dCA9IE1hdGgubWF4KHN0b3BUaW1lLCBub3cpIC0gbm93ICsgYWRkVGltZW91dDtcbiAgICAgICAgICAgIGxldCBibG9jazogUUJsb2NrO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgYmxvY2sgPSBhd2FpdCB0aGlzLndhaXROZXh0QmxvY2socHJvY2Vzc2luZy5sYXN0QmxvY2tJZCwgYWRkcmVzcywgdGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGBibG9jayByZWNlaXZlZCBmb3IgYTogJHtEYXRlLm5vdygpIC0gc3RhcnR9IG1zYCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChpbmZpbml0ZVdhaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCByZXNvbHZlZEVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5XQUlUX0ZPUl9USU1FT1VUKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkRXJyb3IgPSBUT05DbGllbnRFcnJvci5uZXR3b3JrU2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tJZDogcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUaW1lOiBwcm9jZXNzaW5nLnNlbnRUaW1lLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzb2x2ZWRFcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvY2Vzc2luZy5sYXN0QmxvY2tJZCA9IGJsb2NrLmlkIHx8ICcnO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGluTXNnIG9mIChibG9jay5pbl9tc2dfZGVzY3IgfHwgW10pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUlkID0gaW5Nc2cubXNnX2lkO1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25JZCA9IGluTXNnLnRyYW5zYWN0aW9uX2lkO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmludmFsaWRCbG9ja2NoYWluKCdObyBmaWVsZCBgdHJhbnNhY3Rpb25faWRgIGluIGJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogeyBpZDogeyBlcTogdHJhbnNhY3Rpb25JZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IFRSQU5TQUNUSU9OX0ZJRUxEU19PUkRJTkFSWSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IE1BWF9USU1FT1VULFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlcG9ydC5wdXNoKGB0cmFuc2FjdGlvbiByZWNlaXZlZCBmb3IgYTogJHtEYXRlLm5vdygpIC0gdHJTdGFydH0gbXNgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgoYmxvY2suZ2VuX3V0aW1lIHx8IDApID4gc3RvcFRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRpbWU6IHByb2Nlc3Npbmcuc2VudFRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcmU6IHN0b3BUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUaW1lOiBibG9jay5nZW5fdXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBwcm9jZXNzaW5nLmxhc3RCbG9ja0lkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dCh7XG4gICAgICAgICAgICAgICAgICAgIG1zZ0lkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kVGltZTogcHJvY2Vzc2luZy5zZW50VGltZSxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5pbnRlcm5hbEVycm9yKCdVbnJlYWNoYWJsZSBjb2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lUmVwb3J0LnB1c2goYHRvdGFsIHdhaXRpbmcgdGltZTogJHtEYXRlLm5vdygpIC0gdG90YWxTdGFydH0gbXNgKTtcblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2codGltZVJlcG9ydC5qb2luKCdcXG4nKSk7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUcmFuc2FjdGlvbihcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuZnVuY3Rpb25OYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgbGVnYWN5V2FpdEZvclRyYW5zYWN0aW9uKHBhcmFtczogVE9OV2FpdEZvclRyYW5zYWN0aW9uUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICBjb25zdCB7IG1lc3NhZ2UsIGFiaSwgZnVuY3Rpb25OYW1lLCBwYXJlbnRTcGFuIH0gPSBwYXJhbXM7XG4gICAgICAgIGNvbnN0IHJldHJ5SW5kZXggPSAxO1xuICAgICAgICBjb25zdCBtZXNzYWdlSWQgPSBhd2FpdCB0aGlzLmVuc3VyZU1lc3NhZ2VJZChtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgZnVuY3Rpb25OYW1lLCBtZXNzYWdlKTtcbiAgICAgICAgbGV0IHByb2Nlc3NpbmdUaW1lb3V0ID0gY29uZmlnLm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dChyZXRyeUluZGV4KTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IGF3YWl0IHRoaXMucXVlcmllcy5nZXRTZXJ2ZXJJbmZvKHBhcmVudFNwYW4pO1xuICAgICAgICBjb25zdCBvcGVyYXRpb25JZCA9IHNlcnZlckluZm8uc3VwcG9ydHNPcGVyYXRpb25JZFxuICAgICAgICAgICAgPyB0aGlzLnF1ZXJpZXMuZ2VuZXJhdGVPcGVyYXRpb25JZCgpXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uOiA/UVRyYW5zYWN0aW9uID0gbnVsbDtcbiAgICAgICAgbGV0IHNlbmRUaW1lID0gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGxldCBibG9ja1RpbWUgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhwaXJlID0gbWVzc2FnZS5leHBpcmU7XG4gICAgICAgICAgICBpZiAoZXhwaXJlKSB7XG4gICAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgICAgIC8vIGFkZCBwcm9jZXNzaW5nIHRpbWVvdXQgYXMgbWFzdGVyIGJsb2NrIHZhbGlkYXRpb24gdGltZVxuICAgICAgICAgICAgICAgIGxldCBibG9ja1RpbWVvdXQgPSBleHBpcmUgKiAxMDAwIC0gRGF0ZS5ub3coKSArIHByb2Nlc3NpbmdUaW1lb3V0O1xuICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIHRpbWVvdXQgbXVzdCBiZSBncmVhdGVyIHRoZW4gYmxvY2sgdGltZW91dFxuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lb3V0ID0gYmxvY2tUaW1lb3V0ICsgRVhUUkFfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB3YWl0RXhwaXJlZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2FpdCBmb3IgYmxvY2ssIHByb2R1Y2VkIGFmdGVyIGBleHBpcmVgIHRvIGd1YXJhbnRlZSB0aGF0IG1lc3NhZ2UgaXMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2NrOiA/UUJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gYXdhaXQgdGhpcy5xdWVyaWVzLmJsb2Nrcy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6ICdpZCBnZW5fdXRpbWUgaW5fbXNnX2Rlc2NyIHsgdHJhbnNhY3Rpb25faWQgfScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogYmxvY2tUaW1lb3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUT05DbGllbnRFcnJvci5pc1dhaXRGb3JUaW1lb3V0KGVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm5ldHdvcmtTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBibG9ja1RpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uSWQgPSBibG9jay5pbl9tc2dfZGVzY3JcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGJsb2NrLmluX21zZ19kZXNjci5maW5kKG1zZyA9PiAhIW1zZy50cmFuc2FjdGlvbl9pZCk/LnRyYW5zYWN0aW9uX2lkO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHRoYXQgdHJhbnNhY3Rpb25zIGNvbGxlY3Rpb24gaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHsgZXE6IHRyYW5zYWN0aW9uSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2lkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBCTE9DS19UUkFOU0FDVElPTl9XQUlUSU5HX1RJTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzV2FpdEZvclRpbWVvdXQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25MYWcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja0lkOiBibG9jay5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogQkxPQ0tfVFJBTlNBQ1RJT05fV0FJVElOR19USU1FXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJsb2NrVGltZSA9IGJsb2NrLmdlbl91dGltZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh3YWl0RXhwaXJlZCgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2FpdCBmb3IgbWVzc2FnZSBwcm9jZXNzaW5nIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnF1ZXJpZXMudHJhbnNhY3Rpb25zLndhaXRGb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbl9tc2c6IHsgZXE6IG1lc3NhZ2VJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHsgZXE6IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMuZmluYWxpemVkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNXYWl0Rm9yVGltZW91dChlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoVE9OQ2xpZW50RXJyb3IudHJhbnNhY3Rpb25XYWl0VGltZW91dCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0lkOiBtZXNzYWdlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA+IDEgJiYgb3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmZpbmlzaE9wZXJhdGlvbnMoW29wZXJhdGlvbklkXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IubWVzc2FnZUV4cGlyZWQoe1xuICAgICAgICAgICAgICAgICAgICBtc2dJZDogbWVzc2FnZUlkLFxuICAgICAgICAgICAgICAgICAgICBzZW5kVGltZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJlLFxuICAgICAgICAgICAgICAgICAgICBibG9ja1RpbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uTm93ID0gdHJhbnNhY3Rpb24ubm93IHx8IDA7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1t3YWl0Rm9yVHJhbnNhY3Rpb25dJywgJ1RSQU5TQUNUSU9OX1JFQ0VJVkVEJywge1xuICAgICAgICAgICAgICAgIGlkOiB0cmFuc2FjdGlvbi5pZCxcbiAgICAgICAgICAgICAgICBibG9ja0lkOiB0cmFuc2FjdGlvbi5ibG9ja19pZCxcbiAgICAgICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmxvZygnW3dhaXRGb3JUcmFuc2FjdGlvbl0nLCAnRkFJTEVEJywgZXJyb3IpO1xuICAgICAgICAgICAgaWYgKFRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpIHx8XG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5UUkFOU0FDVElPTl9XQUlUX1RJTUVPVVQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYXdhaXQgdGhpcy5yZXNvbHZlRGV0YWlsZWRFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICAgICAgICAgIERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgY29uc3QgeyBvdXRwdXQsIGZlZXMgfSA9IGF3YWl0IHRoaXMucHJvY2Vzc1RyYW5zYWN0aW9uKG1lc3NhZ2UuYWRkcmVzcywgdHJhbnNhY3Rpb24sIGFiaSwgZnVuY3Rpb25OYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgZmVlcyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBwcm9jZXNzVHJhbnNhY3Rpb24oXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgdHJhbnNhY3Rpb246IFFUcmFuc2FjdGlvbixcbiAgICAgICAgYWJpOiA/VE9OQ29udHJhY3RBQkksXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogP3N0cmluZyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucHJvY2Vzcy50cmFuc2FjdGlvbicsIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbixcbiAgICAgICAgICAgICAgICBhYmk6IGFiaSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbk5hbWU6IGZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgICAgICByZXN1bHQ6ICdhY2NfdHlwZSBiYWxhbmNlJyxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWNjb3VudE1pc3NpbmcoYWRkcmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLk5PX0dBUykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50QmFsYW5jZVRvb0xvdyhhZGRyZXNzLCBhY2NvdW50c1swXS5iYWxhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmVzb2x2ZURldGFpbGVkRXJyb3IoXG4gICAgICAgIGVycm9yOiBFcnJvcixcbiAgICAgICAgbWVzc2FnZUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB0aW1lOiBudW1iZXIsXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICApIHtcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgZmlsdGVyOiB7IGlkOiB7IGVxOiBhZGRyZXNzIH0gfSxcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGJhbGFuY2UgYmFsYW5jZV9vdGhlciB7IGN1cnJlbmN5IHZhbHVlIH0gY29kZSBkYXRhIGxhc3RfcGFpZCcsXG4gICAgICAgICAgICB0aW1lb3V0OiAxMDAwLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGFjY291bnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucmVzb2x2ZS5lcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICAgICAgbWVzc2FnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICB0aW1lOiBNYXRoLnJvdW5kKHRpbWUgLyAxMDAwKSxcbiAgICAgICAgICAgICAgICBtYWluRXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKHJlc29sdmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cblxuICAgIGFzeW5jIGlzRGVwbG95ZWQoYWRkcmVzczogc3RyaW5nLCBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPGJvb2w+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IHRoaXMucXVlcmllcy5hY2NvdW50cy5xdWVyeSh7XG4gICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogeyBlcTogYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhY2NvdW50Lmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc0RlcGxveU1lc3NhZ2UoXG4gICAgICAgIG1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzRGVwbG95TWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICBpZiAoYXdhaXQgdGhpcy5pc0RlcGxveWVkKG1lc3NhZ2UuYWRkcmVzcywgcGFyZW50U3BhbikpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgIGFscmVhZHlEZXBsb3llZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvY2Vzc2luZ1N0YXRlID0gYXdhaXQgdGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlLm1lc3NhZ2UsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24obWVzc2FnZSwgcHJvY2Vzc2luZ1N0YXRlLCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oXG4gICAgICAgIGRlcGxveU1lc3NhZ2U6IFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICAgICAgcHJvY2Vzc2luZ1N0YXRlOiBUT05NZXNzYWdlUHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIGluZmluaXRlV2FpdD86IGJvb2xlYW4sXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gZGVwbG95TWVzc2FnZS5tZXNzYWdlO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgcHJvY2Vzc2luZ1N0YXRlLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIGluZmluaXRlV2FpdCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5yZXN1bHQsXG4gICAgICAgICAgICBhZGRyZXNzOiBtZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhbHJlYWR5RGVwbG95ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHJ1bk1lc3NhZ2U6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZSxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZScsIHJ1bk1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKHJ1bk1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nU3RhdGUsIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHdhaXRGb3JSdW5UcmFuc2FjdGlvbihcbiAgICAgICAgcnVuTWVzc2FnZTogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwcm9jZXNzaW5nU3RhdGU6IFRPTk1lc3NhZ2VQcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgaW5maW5pdGVXYWl0PzogYm9vbGVhbixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JUcmFuc2FjdGlvbih7XG4gICAgICAgICAgICBtZXNzYWdlOiBydW5NZXNzYWdlLm1lc3NhZ2UsXG4gICAgICAgICAgICBwcm9jZXNzaW5nU3RhdGUsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgaW5maW5pdGVXYWl0LFxuICAgICAgICAgICAgYWJpOiBydW5NZXNzYWdlLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcnVuTWVzc2FnZS5mdW5jdGlvbk5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlcHJlY2F0ZWQuIFVzZSBgcnVuTWVzc2FnZUxvY2FsYCBpbnN0ZWFkLlxuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gd2FpdFBhcmFtc1xuICAgICAqIEBwYXJhbSBwYXJlbnRTcGFuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dW5rbm93bj59XG4gICAgICovXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1Jlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmFkZHJlc3MuY29udmVydCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJuYWxzXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveU5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXI6IHBhcmFtcy5jb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGludGVybmFsUnVuTmF0aXZlKHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VSZXRyeSA9IGVycm9yLmNvZGUgPT09IFRPTkVycm9yQ29kZS5NRVNTQUdFX0VYUElSRURcbiAgICAgICAgICAgICAgICAgICAgfHwgVE9OQ2xpZW50RXJyb3IuaXNDb250cmFjdEVycm9yKGVycm9yLCBUT05Db250cmFjdEV4aXRDb2RlLlJFUExBWV9QUk9URUNUSU9OKVxuICAgICAgICAgICAgICAgICAgICB8fCBUT05DbGllbnRFcnJvci5pc0NvbnRyYWN0RXJyb3IoZXJyb3IsIFRPTkNvbnRyYWN0RXhpdENvZGUuTUVTU0FHRV9FWFBJUkVEKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVzZVJldHJ5IHx8IGkgPT09IHJldHJpZXNDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcihcInJldHJ5Q2FsbDogdW5yZWFjaGFibGVcIik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbERlcGxveUpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlcGxveVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ0RlcGxveSBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGxveU1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZURlcGxveU1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmlzRGVwbG95ZWQoZGVwbG95TWVzc2FnZS5hZGRyZXNzLCBwYXJlbnRTcGFuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGRlcGxveU1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzaW5nU3RhdGUgPSBhd2FpdCB0aGlzLnNlbmRNZXNzYWdlKGRlcGxveU1lc3NhZ2UubWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy53YWl0Rm9yRGVwbG95VHJhbnNhY3Rpb24oZGVwbG95TWVzc2FnZSwgcHJvY2Vzc2luZ1N0YXRlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ1J1biBzdGFydCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXRyeUNhbGwoYXN5bmMgKHJldHJ5SW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bk1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVJ1bk1lc3NhZ2UocGFyYW1zLCByZXRyeUluZGV4KTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NpbmdTdGF0ZSA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UocnVuTWVzc2FnZS5tZXNzYWdlLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLndhaXRGb3JSdW5UcmFuc2FjdGlvbihydW5NZXNzYWdlLCBwcm9jZXNzaW5nU3RhdGUsIHBhcmVudFNwYW4pO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGdldEFjY291bnQoXG4gICAgICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICAgICAgYWN0aXZlOiBib29sZWFuLFxuICAgICAgICB3YWl0UGFyYW1zPzogVE9OQ29udHJhY3RBY2NvdW50V2FpdFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8UUFjY291bnQ+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdDogJ2lkIGFjY190eXBlIGNvZGUgZGF0YSBiYWxhbmNlIGJhbGFuY2Vfb3RoZXIgeyBjdXJyZW5jeSB2YWx1ZSB9IGxhc3RfcGFpZCcsXG4gICAgICAgICAgICAuLi4od2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQgPyB7IHRpbWVvdXQ6IHdhaXRQYXJhbXMudGltZW91dCB9IDoge30pLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRNaXNzaW5nKGFkZHJlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhY2NvdW50c1swXTtcbiAgICAgICAgcmVtb3ZlVHlwZU5hbWUoYWNjb3VudCk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnZ2V0QWNjb3VudC4gQWNjb3VudCByZWNlaXZlZCcsIGFjY291bnQpO1xuICAgICAgICByZXR1cm4gYWNjb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bkxvY2FsSnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5Mb2NhbFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBhZGRyZXNzID0gcGFyYW1zLmFkZHJlc3M7XG4gICAgICAgIGlmICghYWRkcmVzcykge1xuICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuYWRkcmVzc1JlcXVpcmVkRm9yUnVuTG9jYWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhY2NvdW50ID0gcGFyYW1zLmFjY291bnQgfHwgKGF3YWl0IHRoaXMuZ2V0QWNjb3VudChcbiAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFtcy53YWl0UGFyYW1zLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICghYWNjb3VudC5jb2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hY2NvdW50Q29kZU1pc3NpbmcoYWRkcmVzcywgKGFjY291bnQ6IGFueSkuYmFsYW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk1lc3NhZ2VMb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTWVzc2FnZUxvY2FsUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1bkxvY2FsUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwYXJhbXMuYWRkcmVzcztcbiAgICAgICAgaWYgKCFhZGRyZXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5hZGRyZXNzUmVxdWlyZWRGb3JSdW5Mb2NhbCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBwYXJhbXMuYWNjb3VudCB8fCAoYXdhaXQgdGhpcy5nZXRBY2NvdW50KFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgcGFyYW1zLndhaXRQYXJhbXMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKCFhY2NvdW50LmNvZGUpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmFjY291bnRDb2RlTWlzc2luZyhhZGRyZXNzLCAoYWNjb3VudDogYW55KS5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bi5sb2NhbC5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIGZ1bGxSdW46IHBhcmFtcy5mdWxsUnVuLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblRPTkNvbnRyYWN0c01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbnRyYWN0c01vZHVsZSc7XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgdG90YWxfZmVlc1xuICAgIHN0b3JhZ2Uge1xuICAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgIHN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICAgICAgdmFsdWVcbiAgICB9XG4gICBgO1xuXG5jb25zdCBCTE9DS19GSUVMRFMgPSBgXG4gICAgaWRcbiAgICBnZW5fdXRpbWVcbiAgICBhZnRlcl9zcGxpdFxuICAgIHdvcmtjaGFpbl9pZFxuICAgIHNoYXJkXG4gICAgaW5fbXNnX2Rlc2NyIHtcbiAgICAgICAgbXNnX2lkXG4gICAgICAgIHRyYW5zYWN0aW9uX2lkXG4gICAgfVxuYDtcblxuY29uc3QgVFJBTlNBQ1RJT05fRklFTERTX09SRElOQVJZID0gYFxuICAgIGlkXG4gICAgYWJvcnRlZFxuICAgIGNvbXB1dGUge1xuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBleGl0X2NvZGVcbiAgICAgICAgc3VjY2Vzc1xuICAgICAgICBnYXNfZmVlc1xuICAgIH1cbiAgICBzdG9yYWdlIHtcbiAgICAgICBzdGF0dXNfY2hhbmdlXG4gICAgICAgc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIHRvdGFsX2Z3ZF9mZWVzXG4gICAgICAgIHRvdGFsX2FjdGlvbl9mZWVzXG4gICAgfVxuICAgIGluX21zZ1xuICAgIG5vd1xuICAgIG91dF9tc2dzXG4gICAgb3V0X21lc3NhZ2VzIHtcbiAgICAgICAgaWRcbiAgICAgICAgYm9keVxuICAgICAgICBtc2dfdHlwZVxuICAgICAgICB2YWx1ZVxuICAgIH1cbiAgICBzdGF0dXNcbiAgICB0b3RhbF9mZWVzXG5gO1xuIl19