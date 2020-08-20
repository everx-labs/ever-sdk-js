"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONModule = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _opentracing = require("opentracing");

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
    /**
     * Requests a core for specified method and parameters.
     * @param {string} method Method name
     * @param {Object} params Method parameters will be stringified into JSON
     * @return {Promise<Object>}
     */

  }, {
    key: "requestCore",
    value: function () {
      var _requestCore = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2(method, params) {
        var coreBridge;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.context.getCoreBridge();

              case 2:
                coreBridge = _context2.sent;

                if (coreBridge) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('TON Client Library isn\'t set up properly');

              case 5:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
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
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function requestCore(_x, _x2) {
        return _requestCore.apply(this, arguments);
      }

      return requestCore;
    }()
  }]);

  return TONModule;
}();

exports.TONModule = TONModule;

_defineProperty(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsImdldENvcmVCcmlkZ2UiLCJjb3JlQnJpZGdlIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7Ozs7Ozt3R0FNa0NDLE0sRUFBZ0JDLE07Ozs7Ozs7dUJBQ3JCLEtBQUtGLE9BQUwsQ0FBYUcsYUFBYixFOzs7QUFBbkJDLGdCQUFBQSxVOztvQkFDREEsVTs7Ozs7c0JBQ0ssSUFBSUMsS0FBSixDQUFVLDJDQUFWLEM7OztrREFFSCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUE0QkMsTUFBNUIsRUFBd0Q7QUFDdkVKLGtCQUFBQSxVQUFVLENBQUNLLE9BQVgsQ0FDSVIsTUFESixFQUVJQyxNQUFNLEtBQUtRLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixNQUFmLEtBQTBCLEVBQWxELEdBQXdELEVBRjVELEVBR0ksVUFBQ1csVUFBRCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3ZCLHdCQUFJQSxTQUFKLEVBQWU7QUFDWE4sc0JBQUFBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxLQUFMLENBQVdELFNBQVgsQ0FBRCxDQUFOO0FBQ0gscUJBRkQsTUFFTyxJQUFJRCxVQUFKLEVBQWdCO0FBQ25CTixzQkFBQUEsT0FBTyxDQUFDSSxJQUFJLENBQUNJLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxxQkFGTSxNQUVBO0FBQ0hOLHNCQUFBQSxPQUFPLENBQUUsRUFBRixDQUFQO0FBQ0g7QUFDSixtQkFYTDtBQWFILGlCQWRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXpDRlIsUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCBuby11bmRlZiAqL1xuXG4vLyBEZXByZWNhdGVkOiBUT05DbGllbnRDb3JlIHYwLjE3LjBcbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSAnb3BlbnRyYWNpbmcnO1xuXG4vKipcbiAqIFRPTkNsaWVudENvcmVCcmlkZ2VcbiAqIE1pbmltYWxpc3RpYyBsZWdhY3kgaW50ZXJmYWNlIHRvIGNvcmUgbGlicmFyeS5cbiAqIE9sZCBzdHlsZSBjb3JlcyBkaWQgcHJvdmlkZSBvbmx5IHRoaXMgQVBJLlxuICogRm9yIG5ldyBzdHlsZSBjb3JlcyBUT05DbGllbnQgY3JlYXRlcyBjb250ZXh0IGJvdW5kIHdyYXBwZXIgd2l0aCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEBwYXJhbSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIG9uUmVzdWx0XG4gICAgICovXG4gICAgcmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cbi8qKlxuICogVE9OIENsaWVudCBDb3JlIEFQSVxuICogQ2xpZW50IENvcmUgcGVyZm9ybXMgY2xpZW50IHRhc2tzIHRocm91Z2ggc2luZ2xlIEpTT04tYmFzZWQgdHVubmVsaW5nIG1ldGhvZCBjYWxsZWQgYGNvcmVSZXF1ZXN0YFxuICogRXZlcnkgY29yZSByZXF1ZXN0IGNhbiBiZSBwZXJmb3JtZWQgaW4gdHdvIHdheXM6XG4gKiAtIGFzeW5jIHJlcXVlc3Qgd2l0aCBgY29yZVJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY29yZUNyZWF0ZUNvbnRleHRgXG4gKiAtIGNvbmZpZ3VyZSBgY29udGV4dGAgd2l0aCBgY29uZmlnYCBpbnZvY2F0aW9uIG1ldGhvZFxuICogLSBwYXNzIGNvbnRleHQgaGFuZGxlIHRvIGBjb3JlUmVxdWVzdGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgY29yZURlc3Ryb3lDb250ZXh0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmVMaWJyYXJ5IGV4dGVuZHMgVE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29udGV4dFxuICAgICAqL1xuICAgIGNvcmVDcmVhdGVDb250ZXh0KG9uQ29udGV4dDogKGNvbnRleHQ6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGNvbnRleHQgd2l0aCBzcGVjaWZpZWQgaGFuZGxlXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0OiBudW1iZXIsIG9uQ29tcGxldGU6ICgpID0+IHZvaWQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUG9zdCBhc3luYyByZXF1ZXN0IHRvIGNvcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVzdWx0XG4gICAgICovXG4gICAgY29yZVJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cbi8qKlxuICogQ29udGV4dCBpbiB3aGljaCBtb2R1bGVzIGFyZSB3b3JraW5nXG4gKiBBbGwgbW9kdWxlIGluc3RhbmNlcyBhcmUgYm91bmQgdG8gc2luZ2xlIGNvbnRleHRcbiAqIGFuZCBjYW4gY29tbXVuaWNhdGUgd2l0aCBzaWJsaW5nIG1vZHVsZXMuXG4gKiBDb250ZXh0IHByb3ZpZGVzIGJvdW5kZWQgbW9kdWxlcyB3aXRoOlxuICogLSBhY2Nlc3MgdG8gY29tbW9uIGNsaWVudCBjb3JlIGFuZCBwcmVjb25maWd1cmVkIGNvcmUgY29udGV4dFxuICogLSBhY2Nlc3MgdG8gc2libGluZyBtb2R1bGVzICh1c2luZyBhIG1vZHVsZSBjbGFzcyBhcyBhbiBpZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBnZXRDb3JlQnJpZGdlKCk6IFByb21pc2U8P1RPTkNsaWVudENvcmVCcmlkZ2U+LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgc3RhcnRSb290U3Bhbih0cmFjZUlkOiBzdHJpbmcsIHNwYW5JZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBTcGFuLFxuXG4gICAgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+LFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBjb3JlIGZvciBzcGVjaWZpZWQgbWV0aG9kIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgTWV0aG9kIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE1ldGhvZCBwYXJhbWV0ZXJzIHdpbGwgYmUgc3RyaW5naWZpZWQgaW50byBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3RDb3JlPFBhcmFtcywgUmVzdWx0PihtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogUGFyYW1zKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgY29yZUJyaWRnZSA9IGF3YWl0IHRoaXMuY29udGV4dC5nZXRDb3JlQnJpZGdlKCk7XG4gICAgICAgIGlmICghY29yZUJyaWRnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT04gQ2xpZW50IExpYnJhcnkgaXNuXFwndCBzZXQgdXAgcHJvcGVybHknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlQnJpZGdlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==