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
      return this.context.getModule(ModuleClass);
    } // Internals

  }]);
  return TONClient;
}();

exports.TONClient = TONClient;
(0, _defineProperty2["default"])(TONClient, "shared", new TONClient());
(0, _defineProperty2["default"])(TONClient, "clientPlatform", null);
(0, _defineProperty2["default"])(TONClient, "library", null);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJzZGsiLCJ0dm0iLCJzdGRsaWIiLCJjb250cmFjdCIsIk1vZHVsZUNvbnRleHQiLCJtb2R1bGVzIiwiTWFwIiwiVE9OQ2xpZW50IiwibGlicmFyeSIsIk1vZHVsZUNsYXNzIiwibmFtZSIsIm1vZHVsZU5hbWUiLCJleGlzdGluZ01vZHVsZSIsImdldCIsIm1vZHVsZSIsInNldCIsImNsaWVudFBsYXRmb3JtIiwiY29udGV4dCIsImNvbmZpZyIsImdldE1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsImNyeXB0byIsIlRPTkNyeXB0b01vZHVsZSIsImNvbnRyYWN0cyIsIlRPTkNvbnRyYWN0c01vZHVsZSIsInF1ZXJpZXMiLCJUT05RdWVyaWVzTW9kdWxlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsInNldHVwIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUF2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFtQk8sSUFBTUEsb0JBQW9CLEdBQUc7QUFDaENDLEVBQUFBLEdBQUcsRUFBRSxLQUQyQjtBQUVoQ0MsRUFBQUEsR0FBRyxFQUFFLEtBRjJCO0FBR2hDQyxFQUFBQSxNQUFNLEVBQUUsUUFId0I7QUFJaENDLEVBQUFBLFFBQVEsRUFBRTtBQUpzQixDQUE3Qjs7O0lBT0RDLGE7OztBQUlGLDJCQUFjO0FBQUE7QUFBQTtBQUNWLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxHQUFKLEVBQWY7QUFDSDs7OztzQ0FFb0M7QUFDakMsYUFBT0MsU0FBUyxDQUFDQyxPQUFqQjtBQUNIOzs7OEJBRVlDLFcsRUFBa0M7QUFDM0MsVUFBTUMsSUFBSSxHQUFHRCxXQUFXLENBQUNFLFVBQXpCO0FBQ0EsVUFBTUMsY0FBYyxHQUFHLEtBQUtQLE9BQUwsQ0FBYVEsR0FBYixDQUFpQkgsSUFBakIsQ0FBdkI7O0FBQ0EsVUFBSUUsY0FBSixFQUFvQjtBQUNoQixlQUFRQSxjQUFSO0FBQ0g7O0FBQ0QsVUFBTUUsTUFBTSxHQUFHLElBQUlMLFdBQUosQ0FBZ0IsSUFBaEIsQ0FBZjtBQUNBLFdBQUtKLE9BQUwsQ0FBYVUsR0FBYixDQUFpQkwsSUFBakIsRUFBdUJJLE1BQXZCO0FBQ0EsYUFBUUEsTUFBUjtBQUNIOzs7OztJQVVRUCxTOzs7OzsrQkFHU1MsYyxFQUFtQztBQUNqRFQsTUFBQUEsU0FBUyxDQUFDUyxjQUFWLEdBQTJCQSxjQUEzQjtBQUNILEssQ0FHRDs7OztBQU9BLHVCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1YsU0FBS0MsT0FBTCxHQUFlLElBQUliLGFBQUosRUFBZjtBQUNBLFNBQUtjLE1BQUwsR0FBYyxLQUFLRCxPQUFMLENBQWFFLFNBQWIsQ0FBdUJDLDJCQUF2QixDQUFkO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtKLE9BQUwsQ0FBYUUsU0FBYixDQUF1QkcsMkJBQXZCLENBQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEtBQUtOLE9BQUwsQ0FBYUUsU0FBYixDQUF1QkssOEJBQXZCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtSLE9BQUwsQ0FBYUUsU0FBYixDQUF1Qk8sNEJBQXZCLENBQWY7QUFDSDs7Ozs7Ozs7Ozs7Ozs7b0JBSVFuQixTQUFTLENBQUNDLE87Ozs7O29CQUNORCxTQUFTLENBQUNTLGM7Ozs7Ozs7Ozt1QkFHV1QsU0FBUyxDQUFDUyxjQUFWLENBQXlCVyxhQUF6QixFOzs7QUFBMUJwQixnQkFBQUEsU0FBUyxDQUFDQyxPOzs7QUFFUkgsZ0JBQUFBLE8sdUNBQTJCLEtBQUtZLE9BQUwsQ0FBYVosT0FBYixDQUFxQnVCLE1BQXJCLEU7Ozs7OzRCQUNadkIsTzs7Ozs7Ozs7QUFBVlMsZ0JBQUFBLE87O3VCQUNEQSxPQUFNLENBQUNlLEtBQVAsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtKLEtBQUtKLE9BQUwsQ0FBYUssS0FBYixFOzs7Ozs7Ozs7Ozs7Ozs7UUFJVjs7OzttQ0FDa0JyQixXLEVBQWtDO0FBQ2hELGFBQU8sS0FBS1EsT0FBTCxDQUFhRSxTQUFiLENBQTBCVixXQUExQixDQUFQO0FBQ0gsSyxDQUdEOzs7Ozs7O2lDQWhEU0YsUyxZQUNPLElBQUlBLFNBQUosRTtpQ0FEUEEsUyxvQkFpRG1DLEk7aUNBakRuQ0EsUyxhQWtEMkIsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcblxuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgVE9OTW9kdWxlQ29udGV4dCxcbiAgICBUT05DbGllbnRMaWJyYXJ5LFxufSBmcm9tICcuL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNsaWVudEVycm9yID0ge1xuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIGNvZGU6IG51bWJlcixcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRFcnJvclNvdXJjZSA9IHtcbiAgICBzZGs6ICdzZGsnLFxuICAgIHR2bTogJ3R2bScsXG4gICAgc3RkbGliOiAnc3RkbGliJyxcbiAgICBjb250cmFjdDogJ2NvbnRyYWN0J1xufTtcblxuY2xhc3MgTW9kdWxlQ29udGV4dCBpbXBsZW1lbnRzIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIG1vZHVsZXM6IE1hcDxzdHJpbmcsIFRPTk1vZHVsZT47XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgb3B0aW9uYWxMaWJyYXJ5KCk6ID9UT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5saWJyYXJ5O1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cbn1cblxuXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIGZldGNoOiBhbnksXG4gICAgV2ViU29ja2V0OiBhbnksXG4gICAgY3JlYXRlTGlicmFyeTogKCkgPT4gUHJvbWlzZTxUT05DbGllbnRMaWJyYXJ5Pixcbn07XG5cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQge1xuICAgIHN0YXRpYyBzaGFyZWQgPSBuZXcgVE9OQ2xpZW50KCk7XG5cbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0b01vZHVsZTtcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0c01vZHVsZTtcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IE1vZHVsZUNvbnRleHQoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbmZpZ01vZHVsZSk7XG4gICAgICAgIHRoaXMuY3J5cHRvID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05DcnlwdG9Nb2R1bGUpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0cyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5xdWVyaWVzID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05RdWVyaWVzTW9kdWxlKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIVRPTkNsaWVudC5saWJyYXJ5KSB7XG4gICAgICAgICAgICBpZiAoIVRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFRPTkNsaWVudC5saWJyYXJ5ID0gYXdhaXQgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtLmNyZWF0ZUxpYnJhcnkoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGVzOiBUT05Nb2R1bGVbXSA9IFsuLi50aGlzLmNvbnRleHQubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5jbG9zZSgpO1xuICAgIH1cblxuXG4gICAgLy8gTW9kdWxlc1xuICAgIHJlcXVpcmVkTW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzKTtcbiAgICB9XG5cblxuICAgIC8vIEludGVybmFsc1xuICAgIHN0YXRpYyBjbGllbnRQbGF0Zm9ybTogP1RPTkNsaWVudFBsYXRmb3JtID0gbnVsbDtcbiAgICBzdGF0aWMgbGlicmFyeTogP1RPTkNsaWVudExpYnJhcnkgPSBudWxsO1xuXG4gICAgY29udGV4dDogTW9kdWxlQ29udGV4dDtcbn1cbiJdfQ==