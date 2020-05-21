"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONModule = void 0;

var _opentracing = require("opentracing");

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


  _createClass(TONModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
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
    value: function requestCore(method, params) {
      var p = params !== undefined ? JSON.stringify(params) || '' : '';
      var core = this.context.getCore();

      if (!core) {
        throw new Error('TON SDK JS Library doesn\'t set up');
      }

      return new Promise(function (resolve, reject) {
        core.request(method, params !== undefined ? JSON.stringify(params) || '' : '', function (resultJson, errorJson) {
          if (errorJson) {
            reject(JSON.parse(errorJson));
          } else if (resultJson) {
            resolve(JSON.parse(resultJson));
          } else {
            resolve({});
          }
        });
      });
    }
  }]);

  return TONModule;
}();

exports.TONModule = TONModule;

_defineProperty(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQW9CQTs7Ozs7Ozs7Ozs7Ozs7QUEwRkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7OztnQ0FNNEJDLE0sRUFBZ0JDLE0sRUFBa0M7QUFDMUUsVUFBTUMsQ0FBQyxHQUFHRCxNQUFNLEtBQUtFLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLEtBQTBCLEVBQWxELEdBQXdELEVBQWxFO0FBQ0EsVUFBTUssSUFBSSxHQUFHLEtBQUtQLE9BQUwsQ0FBYVEsT0FBYixFQUFiOztBQUNBLFVBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1AsY0FBTSxJQUFJRSxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNIOztBQUNELGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCLEVBQXdEO0FBQ3ZFTCxRQUFBQSxJQUFJLENBQUNNLE9BQUwsQ0FDSVosTUFESixFQUVJQyxNQUFNLEtBQUtFLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixNQUFmLEtBQTBCLEVBQWxELEdBQXdELEVBRjVELEVBR0ksVUFBQ1ksVUFBRCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3ZCLGNBQUlBLFNBQUosRUFBZTtBQUNYSCxZQUFBQSxNQUFNLENBQUNQLElBQUksQ0FBQ1csS0FBTCxDQUFXRCxTQUFYLENBQUQsQ0FBTjtBQUNILFdBRkQsTUFFTyxJQUFJRCxVQUFKLEVBQWdCO0FBQ25CSCxZQUFBQSxPQUFPLENBQUNOLElBQUksQ0FBQ1csS0FBTCxDQUFXRixVQUFYLENBQUQsQ0FBUDtBQUNILFdBRk0sTUFFQTtBQUNISCxZQUFBQSxPQUFPLENBQUUsRUFBRixDQUFQO0FBQ0g7QUFDSixTQVhMO0FBYUgsT0FkTSxDQUFQO0FBZUg7Ozs7Ozs7O2dCQXhEUVosUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCBuby11bmRlZiAqL1xuXG4vLyBEZXByZWNhdGVkOiBUT05DbGllbnRDb3JlIHYwLjE3LjBcbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0LCBTcGFuT3B0aW9ucywgVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50TGlicmFyeSB7XG4gICAgcmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cblxuLyoqXG4gKiBUT04gQ2xpZW50IENvcmUgcHVibGljIGludGVyZmFjZVxuICogQ2xpZW50IENvcmUgcGVyZm9ybXMgY2xpZW50IHRhc2tzIHRocm91Z2ggc2luZ2xlIEpTT04tYmFzZWQgdHVubmVsaW5nIG1ldGhvZCBjYWxsZWQgYHJlcXVlc3RgXG4gKiBFdmVyeSBjb3JlIHJlcXVlc3QgY2FuIGJlIHBlcmZvcm1lZCBpbiB0d28gd2F5czpcbiAqIC0gc3luYyBjYWxsIHdpdGggYHJlcXVlc3RTeW5jYCBtZXRob2RcbiAqIC0gYXN5bmMgcmVxdWVzdCB3aXRoIGByZXF1ZXN0YCBtZXRob2RcbiAqIENsaWVudCBpcyBhIHN0YXRlZnVsIG9iamVjdC4gRWFjaCBjbGllbnQgc3RhdGUgY2FsbGVkIGEgYGNvbnRleHRgLlxuICogU28geW91IG11c3QgdXNlIGZvbGxvd2luZyBydWxlcyB3aGVuIHdvcmtpbmcgd2l0aCBhIGNvcmU6XG4gKiAtIGNyZWF0ZSBhIGNvbnRleHQgb2JqZWN0IGFuZCByZWNlaXZlIGNvbnRleHQgaGFuZGxlIHdpdGggYGNyZWF0ZUNvbnRleHRgXG4gKiAtIGNvbmZpZ3VyZSBgY29udGV4dGAgd2l0aCBgY29uZmlnYCBpbnZvY2F0aW9uIG1ldGhvZFxuICogLSBwYXNzIGNvbnRleHQgaGFuZGxlIGluIGByZXF1ZXN0YCBhbmQgYGNhbGxgXG4gKiAtIHdoZW4geW91IGRvbid0IG5lZWQgY29udGV4dCB5b3UgbXVzdCBkZXN0cm95IGl0IHdpdGggYGRlc3Ryb3lDb250ZXh0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dCBhbmQgcmV0dXJucyBoYW5kbGUgdG8gaXRcbiAgICAgKi9cbiAgICBjcmVhdGVDb250ZXh0KCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29udGV4dCB3aXRoIHNwZWNpZmllZCBoYW5kbGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGRlc3Ryb3lDb250ZXh0KGNvbnRleHQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQb3N0IGFzeW5jIHJlcXVlc3QgdG8gY29yZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25SZXN1bHRcbiAgICAgKi9cbiAgICByZXF1ZXN0KFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBzeW5jIHJlcXVlc3QgdG8gY29yZSBhbmQgcmV0dXJuIHJlc3VsdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICovXG4gICAgcmVxdWVzdFN5bmMoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZ1xuICAgICk6IHtcbiAgICAgICAgcmVzdWx0SnNvbjogc3RyaW5nLFxuICAgICAgICBlcnJvckpzb246IHN0cmluZ1xuICAgIH07XG59XG5cbi8qKlxuICogQ29udGV4dCBpbiB3aGljaCBtb2R1bGVzIGFyZSB3b3JraW5nXG4gKiBBbGwgbW9kdWxlIGluc3RhbmNlcyBhcmUgYm91bmQgdG8gc2luZ2xlIGNvbnRleHRcbiAqIGFuZCBjYW4gY29tbXVuaWNhdGUgd2l0aCBzaWJsaW5nIG1vZHVsZXMuXG4gKiBDb250ZXh0IHByb3ZpZGVzIGJvdW5kZWQgbW9kdWxlcyB3aXRoOlxuICogLSBhY2Nlc3MgdG8gY29tbW9uIGNsaWVudCBjb3JlIGFuZCBwcmVjb25maWd1cmVkIGNvcmUgY29udGV4dFxuICogLSBhY2Nlc3MgdG8gc2libGluZyBtb2R1bGVzICh1c2luZyBhIG1vZHVsZSBjbGFzcyBhcyBhbiBpZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VD4sXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhIGNvcmUgZm9yIHNwZWNpZmllZCBtZXRob2QgYW5kIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBNZXRob2QgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgTWV0aG9kIHBhcmFtZXRlcnMgd2lsbCBiZSBzdHJpbmdpZmllZCBpbnRvIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgcmVxdWVzdENvcmU8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBwID0gcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJztcbiAgICAgICAgY29uc3QgY29yZSA9IHRoaXMuY29udGV4dC5nZXRDb3JlKCk7XG4gICAgICAgIGlmICghY29yZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT04gU0RLIEpTIExpYnJhcnkgZG9lc25cXCd0IHNldCB1cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKFJlc3VsdCkgPT4gdm9pZCwgcmVqZWN0OiAoRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgIGNvcmUucmVxdWVzdChcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJyxcbiAgICAgICAgICAgICAgICAocmVzdWx0SnNvbiwgZXJyb3JKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChKU09OLnBhcnNlKGVycm9ySnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdEpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHRKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCh7fTogYW55KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19