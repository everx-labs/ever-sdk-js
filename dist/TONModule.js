"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONModule = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _opentracing = require("opentracing");

var _TONClientError = require("./TONClientError");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * TON Client module
 * Each module must provides a common constructor and a `setup` method.
 * Also each specific module provides specific set of methods.
 */
var TONModule = /*#__PURE__*/function () {
  /**
   * Context to which this module is bound
   */

  /**
   * Initialize module instance.
   * Note that module must not gets references to other modules here
   * (for this purpose there is a `setup` method).
   *
   * @param context
   */
  function TONModule(context) {
    _classCallCheck(this, TONModule);

    _defineProperty(this, "context", void 0);

    this.context = context;
  } // Module

  /**
   * Performs necessary setup of this module.
   * The method is a safe place to get a references to other modules from the `context`.
   * @return {Promise<void>}
   */
  // eslint-disable-next-line no-empty-function


  _createClass(TONModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "completeErrorData",
    value: function () {
      var _completeErrorData = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.context.completeErrorData(data));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function completeErrorData(_x) {
        return _completeErrorData.apply(this, arguments);
      }

      return completeErrorData;
    }()
    /**
     * Requests a core for specified method and parameters.
     * @param {string} method Method name
     * @param {Object} params Method parameters will be stringified into JSON
     * @return {Promise<Object>}
     */

  }, {
    key: "requestCore",
    value: function () {
      var _requestCore = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee3(method, params) {
        var coreBridge;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.context.getCoreBridge();

              case 2:
                coreBridge = _context3.sent;

                if (coreBridge) {
                  _context3.next = 5;
                  break;
                }

                throw _TONClientError.TONClientError.clientIsNotSetup();

              case 5:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  coreBridge.request(method, params !== undefined ? JSON.stringify(params) || '' : '', function (resultJson, errorJson) {
                    if (errorJson) {
                      reject(JSON.parse(errorJson));
                    } else if (resultJson) {
                      resolve(JSON.parse(resultJson));
                    } else {
                      resolve({});
                    }
                  });
                }));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function requestCore(_x2, _x3) {
        return _requestCore.apply(this, arguments);
      }

      return requestCore;
    }()
  }]);

  return TONModule;
}();

exports.TONModule = TONModule;

_defineProperty(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJjb21wbGV0ZUVycm9yRGF0YSIsIm1ldGhvZCIsInBhcmFtcyIsImdldENvcmVCcmlkZ2UiLCJjb3JlQnJpZGdlIiwiVE9OQ2xpZW50RXJyb3IiLCJjbGllbnRJc05vdFNldHVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBOzs7OztJQUthQSxTO0FBR1Q7Ozs7QUFLQTs7Ozs7OztBQU9BLHFCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhHQUl3QkMsSTs7Ozs7a0RBQ2IsS0FBS0QsT0FBTCxDQUFhRSxpQkFBYixDQUErQkQsSUFBL0IsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7O3dHQU1rQ0UsTSxFQUFnQkMsTTs7Ozs7Ozt1QkFDckIsS0FBS0osT0FBTCxDQUFhSyxhQUFiLEU7OztBQUFuQkMsZ0JBQUFBLFU7O29CQUNEQSxVOzs7OztzQkFDS0MsK0JBQWVDLGdCQUFmLEU7OztrREFFSCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUE0QkMsTUFBNUIsRUFBd0Q7QUFDdkVMLGtCQUFBQSxVQUFVLENBQUNNLE9BQVgsQ0FDSVQsTUFESixFQUVJQyxNQUFNLEtBQUtTLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxNQUFmLEtBQTBCLEVBQWxELEdBQXdELEVBRjVELEVBR0ksVUFBQ1ksVUFBRCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3ZCLHdCQUFJQSxTQUFKLEVBQWU7QUFDWE4sc0JBQUFBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxLQUFMLENBQVdELFNBQVgsQ0FBRCxDQUFOO0FBQ0gscUJBRkQsTUFFTyxJQUFJRCxVQUFKLEVBQWdCO0FBQ25CTixzQkFBQUEsT0FBTyxDQUFDSSxJQUFJLENBQUNJLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxxQkFGTSxNQUVBO0FBQ0hOLHNCQUFBQSxPQUFPLENBQUUsRUFBRixDQUFQO0FBQ0g7QUFDSixtQkFYTDtBQWFILGlCQWRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQTdDRlgsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCBuby11bmRlZiAqL1xuXG4vLyBEZXByZWNhdGVkOiBUT05DbGllbnRDb3JlIHYwLjE3LjBcbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuaW1wb3J0IHsgVE9OQ2xpZW50RXJyb3IgfSBmcm9tICcuL1RPTkNsaWVudEVycm9yJztcbmltcG9ydCB0eXBlIHsgVE9ORXJyb3JEYXRhIH0gZnJvbSAnLi9UT05DbGllbnRFcnJvcic7XG5cbi8qKlxuICogVE9OQ2xpZW50Q29yZUJyaWRnZVxuICogTWluaW1hbGlzdGljIGxlZ2FjeSBpbnRlcmZhY2UgdG8gY29yZSBsaWJyYXJ5LlxuICogT2xkIHN0eWxlIGNvcmVzIGRpZCBwcm92aWRlIG9ubHkgdGhpcyBBUEkuXG4gKiBGb3IgbmV3IHN0eWxlIGNvcmVzIFRPTkNsaWVudCBjcmVhdGVzIGNvbnRleHQgYm91bmQgd3JhcHBlciB3aXRoIHRoaXMgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHBhcmFtIHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0gb25SZXN1bHRcbiAgICAgKi9cbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUT04gQ2xpZW50IENvcmUgQVBJXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgY29yZVJlcXVlc3RgXG4gKiBFdmVyeSBjb3JlIHJlcXVlc3QgY2FuIGJlIHBlcmZvcm1lZCBpbiB0d28gd2F5czpcbiAqIC0gYXN5bmMgcmVxdWVzdCB3aXRoIGBjb3JlUmVxdWVzdGAgbWV0aG9kXG4gKiBDbGllbnQgaXMgYSBzdGF0ZWZ1bCBvYmplY3QuIEVhY2ggY2xpZW50IHN0YXRlIGNhbGxlZCBhIGBjb250ZXh0YC5cbiAqIFNvIHlvdSBtdXN0IHVzZSBmb2xsb3dpbmcgcnVsZXMgd2hlbiB3b3JraW5nIHdpdGggYSBjb3JlOlxuICogLSBjcmVhdGUgYSBjb250ZXh0IG9iamVjdCBhbmQgcmVjZWl2ZSBjb250ZXh0IGhhbmRsZSB3aXRoIGBjb3JlQ3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgdG8gYGNvcmVSZXF1ZXN0YFxuICogLSB3aGVuIHlvdSBkb24ndCBuZWVkIGNvbnRleHQgeW91IG11c3QgZGVzdHJveSBpdCB3aXRoIGBjb3JlRGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZUxpYnJhcnkgZXh0ZW5kcyBUT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IGNvbnRleHQgYW5kIHJldHVybnMgaGFuZGxlIHRvIGl0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Db250ZXh0XG4gICAgICovXG4gICAgY29yZUNyZWF0ZUNvbnRleHQob25Db250ZXh0OiAoY29udGV4dDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29udGV4dCB3aXRoIHNwZWNpZmllZCBoYW5kbGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQ6IG51bWJlciwgb25Db21wbGV0ZTogKCkgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQb3N0IGFzeW5jIHJlcXVlc3QgdG8gY29yZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25SZXN1bHRcbiAgICAgKi9cbiAgICBjb3JlUmVxdWVzdChcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4sXG5cbiAgICBjb21wbGV0ZUVycm9yRGF0YShkYXRhPzogeyBbc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPFRPTkVycm9yRGF0YT4sXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFNwYW4sXG5cbiAgICB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VD4sXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHktZnVuY3Rpb25cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wbGV0ZUVycm9yRGF0YShkYXRhPzogeyBbc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPFRPTkVycm9yRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNvbXBsZXRlRXJyb3JEYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGEgY29yZSBmb3Igc3BlY2lmaWVkIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIE1ldGhvZCBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBNZXRob2QgcGFyYW1ldGVycyB3aWxsIGJlIHN0cmluZ2lmaWVkIGludG8gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0Q29yZTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGNvcmVCcmlkZ2UgPSBhd2FpdCB0aGlzLmNvbnRleHQuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBpZiAoIWNvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLmNsaWVudElzTm90U2V0dXAoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlQnJpZGdlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==