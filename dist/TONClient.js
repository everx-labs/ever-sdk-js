"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClient = exports.TONClientErrorSource = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _TONQueriesModule = _interopRequireDefault(require("./modules/TONQueriesModule"));

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
    (0, _defineProperty2["default"])(this, "queries", void 0);
    (0, _defineProperty2["default"])(this, "context", void 0);
    this.context = new ModuleContext();
    this.config = this.context.getModule(_TONConfigModule["default"]);
    this.crypto = this.context.getModule(_TONCryptoModule["default"]);
    this.contracts = this.context.getModule(_TONContractsModule["default"]);
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

exports.TONClient = TONClient;
(0, _defineProperty2["default"])(TONClient, "shared", new TONClient());
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "library", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJzZGsiLCJ0dm0iLCJzdGRsaWIiLCJjb250cmFjdCIsIk1vZHVsZUNvbnRleHQiLCJtb2R1bGVzIiwiTWFwIiwiVE9OQ2xpZW50IiwibGlicmFyeSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsIm1vZHVsZSIsInNldCIsImNsaWVudFBsYXRmb3JtIiwiY29udGV4dCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsImNyeXB0byIsIlRPTkNyeXB0b01vZHVsZSIsImNvbnRyYWN0cyIsIlRPTkNvbnRyYWN0c01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsInNldHVwIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU5BO0FBbUJPLElBQU1BLG9CQUFvQixHQUFHO0FBQ2hDQyxFQUFBQSxHQUFHLEVBQUUsS0FEMkI7QUFFaENDLEVBQUFBLEdBQUcsRUFBRSxLQUYyQjtBQUdoQ0MsRUFBQUEsTUFBTSxFQUFFLFFBSHdCO0FBSWhDQyxFQUFBQSxRQUFRLEVBQUU7QUFKc0IsQ0FBN0I7OztJQU9EQyxhOzs7QUFJRiwyQkFBYztBQUFBO0FBQUE7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0g7Ozs7c0NBRW9DO0FBQ2pDLGFBQU9DLFNBQVMsQ0FBQ0MsT0FBakI7QUFDSDs7OzhCQUVZQyxXLEVBQWtDO0FBQzNDLFVBQU1DLElBQUksR0FBR0QsV0FBVyxDQUFDRSxVQUF6QjtBQUNBLFVBQU1DLGNBQWMsR0FBRyxLQUFLUCxPQUFMLENBQWFRLEdBQWIsQ0FBaUJILElBQWpCLENBQXZCOztBQUNBLFVBQUlFLGNBQUosRUFBb0I7QUFDaEIsZUFBUUEsY0FBUjtBQUNIOztBQUNELFVBQU1FLE1BQU0sR0FBRyxJQUFJTCxXQUFKLENBQWdCLElBQWhCLENBQWY7QUFDQSxXQUFLSixPQUFMLENBQWFVLEdBQWIsQ0FBaUJMLElBQWpCLEVBQXVCSSxNQUF2QjtBQUNBLGFBQVFBLE1BQVI7QUFDSDs7Ozs7SUFVUVAsUzs7Ozs7K0JBR1NTLGMsRUFBbUM7QUFDakRULE1BQUFBLFNBQVMsQ0FBQ1MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLLENBR0Q7Ozs7QUFPQSx1QkFBYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJYixhQUFKLEVBQWY7QUFDQSxTQUFLYyxNQUFMLEdBQWMsS0FBS0QsT0FBTCxDQUFhRSxTQUFiLENBQXVCQywyQkFBdkIsQ0FBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyxLQUFLSixPQUFMLENBQWFFLFNBQWIsQ0FBdUJHLDJCQUF2QixDQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLTixPQUFMLENBQWFFLFNBQWIsQ0FBdUJLLDhCQUF2QixDQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLUixPQUFMLENBQWFFLFNBQWIsQ0FBdUJPLDRCQUF2QixDQUFmO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O29CQUlRbkIsU0FBUyxDQUFDQyxPOzs7OztvQkFDTkQsU0FBUyxDQUFDUyxjOzs7Ozs7Ozs7dUJBR1dULFNBQVMsQ0FBQ1MsY0FBVixDQUF5QlcsYUFBekIsRTs7O0FBQTFCcEIsZ0JBQUFBLFNBQVMsQ0FBQ0MsTzs7O0FBRVJILGdCQUFBQSxPLHVDQUEyQixLQUFLWSxPQUFMLENBQWFaLE9BQWIsQ0FBcUJ1QixNQUFyQixFOzs7Ozs0QkFDWnZCLE87Ozs7Ozs7O0FBQVZTLGdCQUFBQSxPOzt1QkFDREEsT0FBTSxDQUFDZSxLQUFQLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFLSixLQUFLSixPQUFMLENBQWFLLEtBQWIsRTs7Ozs7Ozs7Ozs7Ozs7O1FBSVY7Ozs7bUNBQ2tCckIsVyxFQUFrQztBQUNoRCxhQUFPLEtBQUtRLE9BQUwsQ0FBYUUsU0FBYixDQUEwQlYsV0FBMUIsQ0FBUDtBQUNILEssQ0FHRDs7Ozs7OztpQ0FoRFNGLFMsWUFDTyxJQUFJQSxTQUFKLEU7aUNBRFBBLFMsb0JBaURtQyxJO2lDQWpEbkNBLFMsYUFrRDJCLEkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCBUT05RdWVyaWVzTW9kdWxlIGZyb20gXCIuL21vZHVsZXMvVE9OUXVlcmllc01vZHVsZVwiO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29uZmlnTW9kdWxlJztcbmltcG9ydCBUT05Db250cmFjdHNNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZSc7XG5pbXBvcnQgVE9OQ3J5cHRvTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05DcnlwdG9Nb2R1bGUnO1xuXG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbmltcG9ydCB0eXBlIHtcbiAgICBUT05Nb2R1bGVDb250ZXh0LFxuICAgIFRPTkNsaWVudExpYnJhcnksXG59IGZyb20gJy4vVE9OTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ2xpZW50RXJyb3IgPSB7XG4gICAgc291cmNlOiBzdHJpbmcsXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudEVycm9yU291cmNlID0ge1xuICAgIHNkazogJ3NkaycsXG4gICAgdHZtOiAndHZtJyxcbiAgICBzdGRsaWI6ICdzdGRsaWInLFxuICAgIGNvbnRyYWN0OiAnY29udHJhY3QnXG59O1xuXG5jbGFzcyBNb2R1bGVDb250ZXh0IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvcHRpb25hbExpYnJhcnkoKTogP1RPTkNsaWVudExpYnJhcnkge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmxpYnJhcnk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxufVxuXG5cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudExpYnJhcnk+LFxufTtcblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNoYXJlZCA9IG5ldyBUT05DbGllbnQoKTtcblxuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvTW9kdWxlO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzTW9kdWxlO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgTW9kdWxlQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghVE9OQ2xpZW50LmxpYnJhcnkpIHtcbiAgICAgICAgICAgIGlmICghVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmxpYnJhcnkgPSBhd2FpdCBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMuY29udGV4dC5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgfVxuXG5cbiAgICAvLyBNb2R1bGVzXG4gICAgcmVxdWlyZWRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3MpO1xuICAgIH1cblxuXG4gICAgLy8gSW50ZXJuYWxzXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBsaWJyYXJ5OiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBjb250ZXh0OiBNb2R1bGVDb250ZXh0O1xufVxuIl19