"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TONClientErrorSource = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TONQueriesModule = _interopRequireDefault(require("./modules/TONQueriesModule"));

var _TONTransactionsModule = _interopRequireDefault(require("./modules/TONTransactionsModule"));

var _TONWalletModule = _interopRequireDefault(require("./modules/TONWalletModule"));

var _TONConfigModule = _interopRequireDefault(require("./modules/TONConfigModule"));

var _TONContractsModule = _interopRequireDefault(require("./modules/TONContractsModule"));

var _TONCryptoModule = _interopRequireDefault(require("./modules/TONCryptoModule"));

var _TONModule = require("./TONModule");

/* eslint-disable class-methods-use-this, no-use-before-define */
var TONClientErrorSource = {
  sdk: 'sdk',
  tvm: 'tvm',
  stdlib: 'stdlib',
  contract: 'contract'
};
exports.TONClientErrorSource = TONClientErrorSource;

var ModuleContext =
/*#__PURE__*/
function () {
  function ModuleContext() {
    (0, _classCallCheck2["default"])(this, ModuleContext);
    (0, _defineProperty2["default"])(this, "modules", void 0);
    this.modules = new Map();
  }

  (0, _createClass2["default"])(ModuleContext, [{
    key: "optionalLibrary",
    value: function optionalLibrary() {
      return TONClient.library;
    }
  }, {
    key: "getModule",
    value: function getModule(ModuleClass) {
      var name = ModuleClass.moduleName;
      var existingModule = this.modules.get(name);

      if (existingModule) {
        return existingModule;
      }

      var module = new ModuleClass(this);
      this.modules.set(name, module);
      return module;
    }
  }]);
  return ModuleContext;
}();

var TONClient =
/*#__PURE__*/
function () {
  (0, _createClass2["default"])(TONClient, null, [{
    key: "setLibrary",
    value: function setLibrary(clientPlatform) {
      TONClient.clientPlatform = clientPlatform;
    } // Public

  }]);

  function TONClient() {
    (0, _classCallCheck2["default"])(this, TONClient);
    (0, _defineProperty2["default"])(this, "config", void 0);
    (0, _defineProperty2["default"])(this, "crypto", void 0);
    (0, _defineProperty2["default"])(this, "contracts", void 0);
    (0, _defineProperty2["default"])(this, "transactions", void 0);
    (0, _defineProperty2["default"])(this, "wallet", void 0);
    (0, _defineProperty2["default"])(this, "queries", void 0);
    (0, _defineProperty2["default"])(this, "context", void 0);
    this.context = new ModuleContext();
    this.config = this.context.getModule(_TONConfigModule["default"]);
    this.crypto = this.context.getModule(_TONCryptoModule["default"]);
    this.contracts = this.context.getModule(_TONContractsModule["default"]);
    this.transactions = this.context.getModule(_TONTransactionsModule["default"]);
    this.wallet = this.context.getModule(_TONWalletModule["default"]);
    this.queries = this.context.getModule(_TONQueriesModule["default"]);
  }

  (0, _createClass2["default"])(TONClient, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var modules, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _module;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (TONClient.library) {
                  _context.next = 6;
                  break;
                }

                if (TONClient.clientPlatform) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return TONClient.clientPlatform.createLibrary();

              case 5:
                TONClient.library = _context.sent;

              case 6:
                modules = (0, _toConsumableArray2["default"])(this.context.modules.values());
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 10;
                _iterator = modules[Symbol.iterator]();

              case 12:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 19;
                  break;
                }

                _module = _step.value;
                _context.next = 16;
                return _module.setup();

              case 16:
                _iteratorNormalCompletion = true;
                _context.next = 12;
                break;

              case 19:
                _context.next = 25;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](10);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 25:
                _context.prev = 25;
                _context.prev = 26;

                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }

              case 28:
                _context.prev = 28;

                if (!_didIteratorError) {
                  _context.next = 31;
                  break;
                }

                throw _iteratorError;

              case 31:
                return _context.finish(28);

              case 32:
                return _context.finish(25);

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 21, 25, 33], [26,, 28, 32]]);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.queries.close();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }() // Modules

  }, {
    key: "requiredModule",
    value: function requiredModule(ModuleClass) {
      return this.context.getModule(ModuleClass);
    } // Internals

  }]);
  return TONClient;
}();

exports["default"] = TONClient;
(0, _defineProperty2["default"])(TONClient, "shared", new TONClient());
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "library", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJzZGsiLCJ0dm0iLCJzdGRsaWIiLCJjb250cmFjdCIsIk1vZHVsZUNvbnRleHQiLCJtb2R1bGVzIiwiTWFwIiwiVE9OQ2xpZW50IiwibGlicmFyeSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsIm1vZHVsZSIsInNldCIsImNsaWVudFBsYXRmb3JtIiwiY29udGV4dCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsImNyeXB0byIsIlRPTkNyeXB0b01vZHVsZSIsImNvbnRyYWN0cyIsIlRPTkNvbnRyYWN0c01vZHVsZSIsInRyYW5zYWN0aW9ucyIsIlRPTlRyYW5zYWN0aW9uc01vZHVsZSIsIndhbGxldCIsIlRPTldhbGxldE1vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsInNldHVwIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQVJBO0FBcUJPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxFQUFBQSxHQUFHLEVBQUUsS0FEMkI7QUFFaENDLEVBQUFBLEdBQUcsRUFBRSxLQUYyQjtBQUdoQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSHdCO0FBSWhDQyxFQUFBQSxRQUFRLEVBQUU7QUFKc0IsQ0FBN0I7OztJQU9EQyxhOzs7QUFJRiwyQkFBYztBQUFBO0FBQUE7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0g7Ozs7c0NBRW9DO0FBQ2pDLGFBQU9DLFNBQVMsQ0FBQ0MsT0FBakI7QUFDSDs7OzhCQUVZQyxXLEVBQWtDO0FBQzNDLFVBQU1DLElBQUksR0FBR0QsV0FBVyxDQUFDRSxVQUF6QjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxLQUFLUCxPQUFMLENBQWFRLEdBQWIsQ0FBaUJILElBQWpCLENBQXZCOztBQUNBLFVBQUlFLGNBQUosRUFBb0I7QUFDaEIsZUFBUUEsY0FBUjtBQUNIOztBQUNELFVBQU1FLE1BQU0sR0FBRyxJQUFJTCxXQUFKLENBQWdCLElBQWhCLENBQWY7QUFDQSxXQUFLSixPQUFMLENBQWFVLEdBQWIsQ0FBaUJMLElBQWpCLEVBQXVCSSxNQUF2QjtBQUNBLGFBQVFBLE1BQVI7QUFDSDs7Ozs7SUFVZ0JQLFM7Ozs7OytCQUdDUyxjLEVBQW1DO0FBQ2pEVCxNQUFBQSxTQUFTLENBQUNTLGNBQVYsR0FBMkJBLGNBQTNCO0FBQ0gsSyxDQUdEOzs7O0FBU0EsdUJBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUliLGFBQUosRUFBZjtBQUNBLFNBQUtjLE1BQUwsR0FBYyxLQUFLRCxPQUFMLENBQWFFLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtKLE9BQUwsQ0FBYUUsU0FBYixDQUF1QkcsMkJBQXZCLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtOLE9BQUwsQ0FBYUUsU0FBYixDQUF1QkssOEJBQXZCLENBQWpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLUixPQUFMLENBQWFFLFNBQWIsQ0FBdUJPLGlDQUF2QixDQUFwQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLVixPQUFMLENBQWFFLFNBQWIsQ0FBdUJTLDJCQUF2QixDQUFkO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtaLE9BQUwsQ0FBYUUsU0FBYixDQUF1QlcsNEJBQXZCLENBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7b0JBSVF2QixTQUFTLENBQUNDLE87Ozs7O29CQUNORCxTQUFTLENBQUNTLGM7Ozs7Ozs7Ozt1QkFHV1QsU0FBUyxDQUFDUyxjQUFWLENBQXlCZSxhQUF6QixFOzs7QUFBMUJ4QixnQkFBQUEsU0FBUyxDQUFDQyxPOzs7QUFFUkgsZ0JBQUFBLE8sdUNBQTJCLEtBQUtZLE9BQUwsQ0FBYVosT0FBYixDQUFxQjJCLE1BQXJCLEU7Ozs7OzRCQUNaM0IsTzs7Ozs7Ozs7QUFBVlMsZ0JBQUFBLE87O3VCQUNEQSxPQUFNLENBQUNtQixLQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSixLQUFLSixPQUFMLENBQWFLLEtBQWIsRTs7Ozs7Ozs7Ozs7Ozs7O1FBSVY7Ozs7bUNBQ2tCekIsVyxFQUFrQztBQUNoRCxhQUFPLEtBQUtRLE9BQUwsQ0FBYUUsU0FBYixDQUEwQlYsV0FBMUIsQ0FBUDtBQUNILEssQ0FHRDs7Ozs7OztpQ0FwRGlCRixTLFlBQ0QsSUFBSUEsU0FBSixFO2lDQURDQSxTLG9CQXFEMkIsSTtpQ0FyRDNCQSxTLGFBc0RtQixJIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcbmltcG9ydCBUT05UcmFuc2FjdGlvbnNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTlRyYW5zYWN0aW9uc01vZHVsZSc7XG5pbXBvcnQgVE9OV2FsbGV0TW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05XYWxsZXRNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuXG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05Nb2R1bGVDb250ZXh0LFxuICAgIFRPTkNsaWVudExpYnJhcnksXG59IGZyb20gJy4vVE9OTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ2xpZW50RXJyb3IgPSB7XG4gICAgc291cmNlOiBzdHJpbmcsXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudEVycm9yU291cmNlID0ge1xuICAgIHNkazogJ3NkaycsXG4gICAgdHZtOiAndHZtJyxcbiAgICBzdGRsaWI6ICdzdGRsaWInLFxuICAgIGNvbnRyYWN0OiAnY29udHJhY3QnXG59O1xuXG5jbGFzcyBNb2R1bGVDb250ZXh0IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvcHRpb25hbExpYnJhcnkoKTogP1RPTkNsaWVudExpYnJhcnkge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmxpYnJhcnk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxufVxuXG5cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudExpYnJhcnk+LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2hhcmVkID0gbmV3IFRPTkNsaWVudCgpO1xuXG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG9Nb2R1bGU7XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHNNb2R1bGU7XG4gICAgdHJhbnNhY3Rpb25zOiBUT05UcmFuc2FjdGlvbnNNb2R1bGU7XG4gICAgd2FsbGV0OiBUT05XYWxsZXRNb2R1bGU7XG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBNb2R1bGVDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25zID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05UcmFuc2FjdGlvbnNNb2R1bGUpO1xuICAgICAgICB0aGlzLndhbGxldCA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OV2FsbGV0TW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5saWJyYXJ5KSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5saWJyYXJ5ID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLmNvbnRleHQubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgIH1cblxuXG4gICAgLy8gTW9kdWxlc1xuICAgIHJlcXVpcmVkTW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzKTtcbiAgICB9XG5cblxuICAgIC8vIEludGVybmFsc1xuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgbGlicmFyeTogP1RPTkNsaWVudExpYnJhcnkgPSBudWxsO1xuXG4gICAgY29udGV4dDogTW9kdWxlQ29udGV4dDtcbn1cbiJdfQ==