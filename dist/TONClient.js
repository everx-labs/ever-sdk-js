"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONClient = exports.TONClientStorageStatus = exports.TONClientComputeSkippedStatus = exports.TONClientTransactionPhase = exports.TONClientErrorSource = void 0;

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
  client: 'client',
  node: 'node'
};
exports.TONClientErrorSource = TONClientErrorSource;
var TONClientTransactionPhase = {
  storage: 'storage',
  computeSkipped: 'computeSkipped',
  computeVm: "computeVm",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVE9OQ2xpZW50RXJyb3JTb3VyY2UiLCJjbGllbnQiLCJub2RlIiwiVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSIsInN0b3JhZ2UiLCJjb21wdXRlU2tpcHBlZCIsImNvbXB1dGVWbSIsImFjdGlvbiIsInVua25vd24iLCJUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyIsIm5vU3RhdGUiLCJiYWRTdGF0ZSIsIm5vR2FzIiwiVE9OQ2xpZW50U3RvcmFnZVN0YXR1cyIsInVuY2hhbmdlZCIsImZyb3plbiIsImRlbGV0ZWQiLCJNb2R1bGVDb250ZXh0IiwibW9kdWxlcyIsIk1hcCIsIlRPTkNsaWVudCIsImxpYnJhcnkiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJtb2R1bGUiLCJzZXQiLCJjbGllbnRQbGF0Zm9ybSIsImNvbnRleHQiLCJjb25maWciLCJnZXRNb2R1bGUiLCJUT05Db25maWdNb2R1bGUiLCJjcnlwdG8iLCJUT05DcnlwdG9Nb2R1bGUiLCJjb250cmFjdHMiLCJUT05Db250cmFjdHNNb2R1bGUiLCJxdWVyaWVzIiwiVE9OUXVlcmllc01vZHVsZSIsImNyZWF0ZUxpYnJhcnkiLCJ2YWx1ZXMiLCJzZXR1cCIsImNsb3NlIiwiVCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUF4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUF1Qk8sSUFBTUEsb0JBQW9CLEdBQUc7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxRQUR3QjtBQUVoQ0MsRUFBQUEsSUFBSSxFQUFFO0FBRjBCLENBQTdCOztBQUtBLElBQU1DLHlCQUF5QixHQUFHO0FBQ3JDQyxFQUFBQSxPQUFPLEVBQUUsU0FENEI7QUFFckNDLEVBQUFBLGNBQWMsRUFBRSxnQkFGcUI7QUFH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QkFxRG1DLEk7aUNBckRuQ0EsUyxhQXNEMkIsSSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBUT05Db25maWdEYXRhIH0gZnJvbSBcIi4vbW9kdWxlcy9UT05Db25maWdNb2R1bGVcIjtcbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IFRPTlF1ZXJpZXNNb2R1bGUgZnJvbSBcIi4vbW9kdWxlcy9UT05RdWVyaWVzTW9kdWxlXCI7XG5pbXBvcnQgVE9OQ29uZmlnTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db25maWdNb2R1bGUnO1xuaW1wb3J0IFRPTkNvbnRyYWN0c01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ29udHJhY3RzTW9kdWxlJztcbmltcG9ydCBUT05DcnlwdG9Nb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNyeXB0b01vZHVsZSc7XG5cbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4vVE9OTW9kdWxlJztcblxuaW1wb3J0IHR5cGUge1xuICAgIFRPTk1vZHVsZUNvbnRleHQsXG4gICAgVE9OQ2xpZW50TGlicmFyeSxcbn0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05DbGllbnRFcnJvciA9IHtcbiAgICBzb3VyY2U6IHN0cmluZyxcbiAgICBjb2RlOiBudW1iZXIsXG4gICAgbWVzc2FnZTogc3RyaW5nLCAgICBcbiAgICBkYXRhPzoge1xuICAgICAgICB0cnNhbnNhY3Rpb25JZDogbnVtYmVyLFxuICAgICAgICBwaGFzZTogc3RyaW5nXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50RXJyb3JTb3VyY2UgPSB7XG4gICAgY2xpZW50OiAnY2xpZW50JyxcbiAgICBub2RlOiAnbm9kZSdcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlID0ge1xuICAgIHN0b3JhZ2U6ICdzdG9yYWdlJyxcbiAgICBjb21wdXRlU2tpcHBlZDogJ2NvbXB1dGVTa2lwcGVkJyxcbiAgICBjb21wdXRlVm06IFwiY29tcHV0ZVZtXCIsXG4gICAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgICB1bmtub3duOiAndW5rbm93bidcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyXG59XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRTdG9yYWdlU3RhdHVzID0ge1xuICAgIHVuY2hhbmdlZDogMCxcbiAgICBmcm96ZW46IDEsXG4gICAgZGVsZXRlZDogMlxufVxuXG5jbGFzcyBNb2R1bGVDb250ZXh0IGltcGxlbWVudHMgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgbW9kdWxlczogTWFwPHN0cmluZywgVE9OTW9kdWxlPjtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBvcHRpb25hbExpYnJhcnkoKTogP1RPTkNsaWVudExpYnJhcnkge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50LmxpYnJhcnk7XG4gICAgfVxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBNb2R1bGVDbGFzcy5tb2R1bGVOYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ01vZHVsZSA9IHRoaXMubW9kdWxlcy5nZXQobmFtZSk7XG4gICAgICAgIGlmIChleGlzdGluZ01vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIChleGlzdGluZ01vZHVsZTogYW55KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlQ2xhc3ModGhpcyk7XG4gICAgICAgIHRoaXMubW9kdWxlcy5zZXQobmFtZSwgbW9kdWxlKTtcbiAgICAgICAgcmV0dXJuIChtb2R1bGU6IGFueSk7XG4gICAgfVxufVxuXG5cbnR5cGUgVE9OQ2xpZW50UGxhdGZvcm0gPSB7XG4gICAgZmV0Y2g6IGFueSxcbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICBjcmVhdGVMaWJyYXJ5OiAoKSA9PiBQcm9taXNlPFRPTkNsaWVudExpYnJhcnk+LFxufTtcblxuZXhwb3J0IGNsYXNzIFRPTkNsaWVudCB7XG4gICAgc3RhdGljIHNldExpYnJhcnkoY2xpZW50UGxhdGZvcm06IFRPTkNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgIFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybSA9IGNsaWVudFBsYXRmb3JtO1xuICAgIH1cblxuXG4gICAgLy8gUHVibGljXG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG4gICAgY3J5cHRvOiBUT05DcnlwdG9Nb2R1bGU7XG4gICAgY29udHJhY3RzOiBUT05Db250cmFjdHNNb2R1bGU7XG4gICAgcXVlcmllczogVE9OUXVlcmllc01vZHVsZTtcblxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBNb2R1bGVDb250ZXh0KCk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OQ3J5cHRvTW9kdWxlKTtcbiAgICAgICAgdGhpcy5jb250cmFjdHMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTkNvbnRyYWN0c01vZHVsZSk7XG4gICAgICAgIHRoaXMucXVlcmllcyA9IHRoaXMuY29udGV4dC5nZXRNb2R1bGUoVE9OUXVlcmllc01vZHVsZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKCFUT05DbGllbnQubGlicmFyeSkge1xuICAgICAgICAgICAgaWYgKCFUT05DbGllbnQuY2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBUT05DbGllbnQubGlicmFyeSA9IGF3YWl0IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybS5jcmVhdGVMaWJyYXJ5KCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlczogVE9OTW9kdWxlW10gPSBbLi4udGhpcy5jb250ZXh0Lm1vZHVsZXMudmFsdWVzKCldO1xuICAgICAgICBmb3IgKGNvbnN0IG1vZHVsZSBvZiBtb2R1bGVzKSB7XG4gICAgICAgICAgICBhd2FpdCBtb2R1bGUuc2V0dXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICB9XG5cblxuICAgIC8vIE1vZHVsZXNcbiAgICByZXF1aXJlZE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmdldE1vZHVsZTxUPihNb2R1bGVDbGFzcyk7XG4gICAgfVxuXG5cbiAgICAvLyBJbnRlcm5hbHNcbiAgICBzdGF0aWMgY2xpZW50UGxhdGZvcm06ID9UT05DbGllbnRQbGF0Zm9ybSA9IG51bGw7XG4gICAgc3RhdGljIGxpYnJhcnk6ID9UT05DbGllbnRMaWJyYXJ5ID0gbnVsbDtcblxuICAgIGNvbnRleHQ6IE1vZHVsZUNvbnRleHQ7XG59XG4iXX0=