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
      return this.context.getModule < T > ModuleClass;
    } // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(config) {
        var client;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                client = new TONClient();
                client.config.setData(config);
                _context3.next = 4;
                return client.setup();

              case 4:
                return _context3.abrupt("return", client);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function create(_x) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);
  return TONClient;
}();

exports.TONClient = TONClient;
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "library", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJzZGsiLCJ0dm0iLCJzdGRsaWIiLCJjb250cmFjdCIsIk1vZHVsZUNvbnRleHQiLCJtb2R1bGVzIiwiTWFwIiwiVE9OQ2xpZW50IiwibGlicmFyeSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsIm1vZHVsZSIsInNldCIsImNsaWVudFBsYXRmb3JtIiwiY29udGV4dCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsImNyeXB0byIsIlRPTkNyeXB0b01vZHVsZSIsImNvbnRyYWN0cyIsIlRPTkNvbnRyYWN0c01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsInNldHVwIiwiY2xvc2UiLCJUIiwiY2xpZW50Iiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQXhCQTs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQW1CTyxJQUFNQSxvQkFBb0IsR0FBRztBQUNoQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRDJCO0FBRWhDQyxFQUFBQSxHQUFHLEVBQUUsS0FGMkI7QUFHaENDLEVBQUFBLE1BQU0sRUFBRSxRQUh3QjtBQUloQ0MsRUFBQUEsUUFBUSxFQUFFO0FBSnNCLENBQTdCOzs7SUFPREMsYTs7O0FBSUYsMkJBQWM7QUFBQTtBQUFBO0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUlDLEdBQUosRUFBZjtBQUNIOzs7O3NDQUVvQztBQUNqQyxhQUFPQyxTQUFTLENBQUNDLE9BQWpCO0FBQ0g7Ozs4QkFFWUMsVyxFQUFrQztBQUMzQyxVQUFNQyxJQUFJLEdBQUdELFdBQVcsQ0FBQ0UsVUFBekI7QUFDQSxVQUFNQyxjQUFjLEdBQUcsS0FBS1AsT0FBTCxDQUFhUSxHQUFiLENBQWlCSCxJQUFqQixDQUF2Qjs7QUFDQSxVQUFJRSxjQUFKLEVBQW9CO0FBQ2hCLGVBQVFBLGNBQVI7QUFDSDs7QUFDRCxVQUFNRSxNQUFNLEdBQUcsSUFBSUwsV0FBSixDQUFnQixJQUFoQixDQUFmO0FBQ0EsV0FBS0osT0FBTCxDQUFhVSxHQUFiLENBQWlCTCxJQUFqQixFQUF1QkksTUFBdkI7QUFDQSxhQUFRQSxNQUFSO0FBQ0g7Ozs7O0lBVVFQLFM7Ozs7OytCQUNTUyxjLEVBQW1DO0FBQ2pEVCxNQUFBQSxTQUFTLENBQUNTLGNBQVYsR0FBMkJBLGNBQTNCO0FBQ0gsSyxDQUdEOzs7O0FBT0EsdUJBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSWIsYUFBSixFQUFmO0FBQ0EsU0FBS2MsTUFBTCxHQUFjLEtBQUtELE9BQUwsQ0FBYUUsU0FBYixDQUF1QkMsMkJBQXZCLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBS0osT0FBTCxDQUFhRSxTQUFiLENBQXVCRywyQkFBdkIsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS04sT0FBTCxDQUFhRSxTQUFiLENBQXVCSyw4QkFBdkIsQ0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS1IsT0FBTCxDQUFhRSxTQUFiLENBQXVCTyw0QkFBdkIsQ0FBZjtBQUNIOzs7Ozs7Ozs7Ozs7OztvQkFVUW5CLFNBQVMsQ0FBQ0MsTzs7Ozs7b0JBQ05ELFNBQVMsQ0FBQ1MsYzs7Ozs7Ozs7O3VCQUdXVCxTQUFTLENBQUNTLGNBQVYsQ0FBeUJXLGFBQXpCLEU7OztBQUExQnBCLGdCQUFBQSxTQUFTLENBQUNDLE87OztBQUVSSCxnQkFBQUEsTyx1Q0FBMkIsS0FBS1ksT0FBTCxDQUFhWixPQUFiLENBQXFCdUIsTUFBckIsRTs7Ozs7NEJBQ1p2QixPOzs7Ozs7OztBQUFWUyxnQkFBQUEsTzs7dUJBQ0RBLE9BQU0sQ0FBQ2UsS0FBUCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBS0osS0FBS0osT0FBTCxDQUFhSyxLQUFiLEU7Ozs7Ozs7Ozs7Ozs7OztRQUlWOzs7O21DQUNrQnJCLFcsRUFBa0M7QUFDaEQsYUFBTyxLQUFLUSxPQUFMLENBQWFFLFNBQWIsR0FBdUJZLENBQXZCLEdBQTBCdEIsV0FBakM7QUFDSCxLLENBR0Q7Ozs7Ozs7cURBL0JvQlMsTTs7Ozs7O0FBQ1ZjLGdCQUFBQSxNLEdBQVMsSUFBSXpCLFNBQUosRTtBQUNmeUIsZ0JBQUFBLE1BQU0sQ0FBQ2QsTUFBUCxDQUFjZSxPQUFkLENBQXNCZixNQUF0Qjs7dUJBQ01jLE1BQU0sQ0FBQ0gsS0FBUCxFOzs7a0RBQ0NHLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0F6QkZ6QixTLG9CQXFEbUMsSTtpQ0FyRG5DQSxTLGFBc0QyQixJIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgdHlwZSB7IFRPTkNvbmZpZ0RhdGEgfSBmcm9tIFwiLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZVwiO1xuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcblxuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OTW9kdWxlQ29udGV4dCxcbiAgICBUT05DbGllbnRMaWJyYXJ5LFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNsaWVudEVycm9yID0ge1xuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIGNvZGU6IG51bWJlcixcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRFcnJvclNvdXJjZSA9IHtcbiAgICBzZGs6ICdzZGsnLFxuICAgIHR2bTogJ3R2bScsXG4gICAgc3RkbGliOiAnc3RkbGliJyxcbiAgICBjb250cmFjdDogJ2NvbnRyYWN0J1xufTtcblxuY2xhc3MgTW9kdWxlQ29udGV4dCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb3B0aW9uYWxMaWJyYXJ5KCk6ID9UT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5saWJyYXJ5O1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cbn1cblxuXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIGZldGNoOiBhbnksXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRMaWJyYXJ5Pixcbn07XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQge1xuICAgIHN0YXRpYyBzZXRMaWJyYXJ5KGNsaWVudFBsYXRmb3JtOiBUT05DbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0gPSBjbGllbnRQbGF0Zm9ybTtcbiAgICB9XG5cblxuICAgIC8vIFB1YmxpY1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuICAgIGNyeXB0bzogVE9OQ3J5cHRvTW9kdWxlO1xuICAgIGNvbnRyYWN0czogVE9OQ29udHJhY3RzTW9kdWxlO1xuICAgIHF1ZXJpZXM6IFRPTlF1ZXJpZXNNb2R1bGU7XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgTW9kdWxlQ29udGV4dCgpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29uZmlnTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jcnlwdG8gPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db250cmFjdHNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBjcmVhdGUoY29uZmlnOiBUT05Db25maWdEYXRhKTogUHJvbWlzZTxUT05DbGllbnQ+IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFRPTkNsaWVudCgpO1xuICAgICAgICBjbGllbnQuY29uZmlnLnNldERhdGEoY29uZmlnKTtcbiAgICAgICAgYXdhaXQgY2xpZW50LnNldHVwKCk7XG4gICAgICAgIHJldHVybiBjbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghVE9OQ2xpZW50LmxpYnJhcnkpIHtcbiAgICAgICAgICAgIGlmICghVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmxpYnJhcnkgPSBhd2FpdCBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMuY29udGV4dC5tb2R1bGVzLnZhbHVlcygpXTtcbiAgICAgICAgZm9yIChjb25zdCBtb2R1bGUgb2YgbW9kdWxlcykge1xuICAgICAgICAgICAgYXdhaXQgbW9kdWxlLnNldHVwKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5xdWVyaWVzLmNsb3NlKCk7XG4gICAgfVxuXG5cbiAgICAvLyBNb2R1bGVzXG4gICAgcmVxdWlyZWRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBUIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5nZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3MpO1xuICAgIH1cblxuXG4gICAgLy8gSW50ZXJuYWxzXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBsaWJyYXJ5OiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBjb250ZXh0OiBNb2R1bGVDb250ZXh0O1xufVxuIl19