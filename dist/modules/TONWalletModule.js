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

var _TONModule2 = require("../TONModule");

var _TONContractsModule = _interopRequireDefault(require("./TONContractsModule"));

var _WalletContract = require("../contracts/WalletContract");

var methods = {
  "package": {
    get: 'wallet.package.get'
  }
};

var TONWalletModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONWalletModule, _TONModule);

  function TONWalletModule() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TONWalletModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TONWalletModule)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "package", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "contracts", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TONWalletModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this["package"] = _WalletContract.WalletContractPackage;
                this.contracts = this.context.getModule(_TONContractsModule["default"]);

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
    key: "packageGet",
    value: function () {
      var _packageGet = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.requestLibrary(methods["package"].get, {}));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function packageGet() {
        return _packageGet.apply(this, arguments);
      }

      return packageGet;
    }()
  }, {
    key: "deploy",
    value: function () {
      var _deploy = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(keys) {
        var _ref, address;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.contracts.deploy({
                  keyPair: keys,
                  constructorParams: {},
                  "package": this["package"]
                });

              case 2:
                _ref = _context3.sent;
                address = _ref.address;
                return _context3.abrupt("return", address);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function deploy(_x) {
        return _deploy.apply(this, arguments);
      }

      return deploy;
    }()
  }, {
    key: "isDeployed",
    value: function () {
      var _isDeployed = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(address) {
        var summary;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.contracts.load({
                  address: address,
                  includeImage: false
                });

              case 2:
                summary = _context4.sent;
                return _context4.abrupt("return", summary.id !== null);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function isDeployed(_x2) {
        return _isDeployed.apply(this, arguments);
      }

      return isDeployed;
    }()
  }, {
    key: "getGramBalance",
    value: function () {
      var _getGramBalance = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(address) {
        var summary;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.contracts.load({
                  address: address,
                  includeImage: false
                });

              case 2:
                summary = _context5.sent;
                return _context5.abrupt("return", summary.balanceGrams !== null ? Number.parseInt(summary.balanceGrams, 10) : null);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getGramBalance(_x3) {
        return _getGramBalance.apply(this, arguments);
      }

      return getGramBalance;
    }()
  }]);
  return TONWalletModule;
}(_TONModule2.TONModule);

exports["default"] = TONWalletModule;
TONWalletModule.moduleName = 'TONWalletModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTldhbGxldE1vZHVsZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiZ2V0IiwiVE9OV2FsbGV0TW9kdWxlIiwiV2FsbGV0Q29udHJhY3RQYWNrYWdlIiwiY29udHJhY3RzIiwiY29udGV4dCIsImdldE1vZHVsZSIsIlRPTkNvbnRyYWN0c01vZHVsZSIsInJlcXVlc3RMaWJyYXJ5Iiwia2V5cyIsImRlcGxveSIsImtleVBhaXIiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImFkZHJlc3MiLCJsb2FkIiwiaW5jbHVkZUltYWdlIiwic3VtbWFyeSIsImlkIiwiYmFsYW5jZUdyYW1zIiwiTnVtYmVyIiwicGFyc2VJbnQiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFHQTs7QUFPQSxJQUFNQSxPQUFPLEdBQUc7QUFDWixhQUFTO0FBQ0xDLElBQUFBLEdBQUcsRUFBRTtBQURBO0FBREcsQ0FBaEI7O0lBTXFCQyxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iLGtDQUFlQyxxQ0FBZjtBQUNBLHFCQUFLQyxTQUFMLEdBQWlCLEtBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QkMsOEJBQXZCLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFJTyxLQUFLQyxjQUFMLENBQW9CUixPQUFPLFdBQVAsQ0FBZ0JDLEdBQXBDLEVBQXlDLEVBQXpDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHRVEsSTs7Ozs7Ozs7dUJBQ2lCLEtBQUtMLFNBQUwsQ0FBZU0sTUFBZixDQUFzQjtBQUM1Q0Msa0JBQUFBLE9BQU8sRUFBRUYsSUFEbUM7QUFFNUNHLGtCQUFBQSxpQkFBaUIsRUFBRSxFQUZ5QjtBQUc1Qyw2QkFBUztBQUhtQyxpQkFBdEIsQzs7OztBQUFsQkMsZ0JBQUFBLE8sUUFBQUEsTztrREFLREEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUdNQSxPOzs7Ozs7O3VCQUNTLEtBQUtULFNBQUwsQ0FBZVUsSUFBZixDQUFvQjtBQUN0Q0Qsa0JBQUFBLE9BQU8sRUFBUEEsT0FEc0M7QUFFdENFLGtCQUFBQSxZQUFZLEVBQUU7QUFGd0IsaUJBQXBCLEM7OztBQUFoQkMsZ0JBQUFBLE87a0RBSUNBLE9BQU8sQ0FBQ0MsRUFBUixLQUFlLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHTEosTzs7Ozs7Ozt1QkFDVSxLQUFLVCxTQUFMLENBQWVVLElBQWYsQ0FBb0I7QUFDM0NELGtCQUFBQSxPQUFPLEVBQVBBLE9BRDJDO0FBRTNDRSxrQkFBQUEsWUFBWSxFQUFFO0FBRjZCLGlCQUFwQixDOzs7QUFBckJDLGdCQUFBQSxPO2tEQUlDQSxPQUFPLENBQUNFLFlBQVIsS0FBeUIsSUFBekIsR0FBZ0NDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkosT0FBTyxDQUFDRSxZQUF4QixFQUFzQyxFQUF0QyxDQUFoQyxHQUE0RSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFwQzlDRyxxQjs7O0FBd0M3Q25CLGVBQWUsQ0FBQ29CLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuXG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vVE9OQ29udHJhY3RzTW9kdWxlJztcblxuaW1wb3J0IHR5cGUgeyBUT05Db250cmFjdFBhY2thZ2UgfSBmcm9tICcuL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgeyBXYWxsZXRDb250cmFjdFBhY2thZ2UgfSBmcm9tICcuLi9jb250cmFjdHMvV2FsbGV0Q29udHJhY3QnO1xuXG5leHBvcnQgdHlwZSBUT05LZXlQYWlyRGF0YSA9IHtcbiAgICBzZWNyZXQ6IHN0cmluZyxcbiAgICBwdWJsaWM6IHN0cmluZyxcbn1cblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgICBwYWNrYWdlOiB7XG4gICAgICAgIGdldDogJ3dhbGxldC5wYWNrYWdlLmdldCcsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTldhbGxldE1vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgcGFja2FnZTogVE9OQ29udHJhY3RQYWNrYWdlO1xuXG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHNNb2R1bGU7XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPCo+IHtcbiAgICAgICAgdGhpcy5wYWNrYWdlID0gV2FsbGV0Q29udHJhY3RQYWNrYWdlO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICB9XG5cbiAgICBhc3luYyBwYWNrYWdlR2V0KCk6IFByb21pc2U8VE9OQ29udHJhY3RQYWNrYWdlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KG1ldGhvZHMucGFja2FnZS5nZXQsIHt9KTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXBsb3koa2V5czogVE9OS2V5UGFpckRhdGEpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCB7IGFkZHJlc3MgfSA9IGF3YWl0IHRoaXMuY29udHJhY3RzLmRlcGxveSh7XG4gICAgICAgICAgICBrZXlQYWlyOiBrZXlzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JQYXJhbXM6IHt9LFxuICAgICAgICAgICAgcGFja2FnZTogdGhpcy5wYWNrYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFkZHJlc3M7XG4gICAgfVxuXG4gICAgYXN5bmMgaXNEZXBsb3llZChhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IHRoaXMuY29udHJhY3RzLmxvYWQoe1xuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIGluY2x1ZGVJbWFnZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3VtbWFyeS5pZCAhPT0gbnVsbDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRHcmFtQmFsYW5jZShhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPD9udW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc3VtbWFyeTogYW55ID0gYXdhaXQgdGhpcy5jb250cmFjdHMubG9hZCh7XG4gICAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICAgICAgaW5jbHVkZUltYWdlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdW1tYXJ5LmJhbGFuY2VHcmFtcyAhPT0gbnVsbCA/IE51bWJlci5wYXJzZUludChzdW1tYXJ5LmJhbGFuY2VHcmFtcywgMTApIDogbnVsbDtcbiAgICB9XG59XG5cblRPTldhbGxldE1vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTldhbGxldE1vZHVsZSc7XG4iXX0=