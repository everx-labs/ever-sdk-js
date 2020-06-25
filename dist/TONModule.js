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
    value: function requestCore(method, params) {
      var coreBridge = this.context.getCoreBridge();

      if (!coreBridge) {
        throw new Error('TON Client Library doesn\'t set up properly');
      }

      return new Promise(function (resolve, reject) {
        coreBridge.request(method, params !== undefined ? JSON.stringify(params) || '' : '', function (resultJson, errorJson) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsImNvcmVCcmlkZ2UiLCJnZXRDb3JlQnJpZGdlIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7OztnQ0FNNEJDLE0sRUFBZ0JDLE0sRUFBa0M7QUFDMUUsVUFBTUMsVUFBVSxHQUFHLEtBQUtILE9BQUwsQ0FBYUksYUFBYixFQUFuQjs7QUFDQSxVQUFJLENBQUNELFVBQUwsRUFBaUI7QUFDYixjQUFNLElBQUlFLEtBQUosQ0FBVSw2Q0FBVixDQUFOO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUE0QkMsTUFBNUIsRUFBd0Q7QUFDdkVMLFFBQUFBLFVBQVUsQ0FBQ00sT0FBWCxDQUNJUixNQURKLEVBRUlDLE1BQU0sS0FBS1EsU0FBWCxHQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLE1BQWYsS0FBMEIsRUFBbEQsR0FBd0QsRUFGNUQsRUFHSSxVQUFDVyxVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDdkIsY0FBSUEsU0FBSixFQUFlO0FBQ1hOLFlBQUFBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxLQUFMLENBQVdELFNBQVgsQ0FBRCxDQUFOO0FBQ0gsV0FGRCxNQUVPLElBQUlELFVBQUosRUFBZ0I7QUFDbkJOLFlBQUFBLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDSSxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gsV0FGTSxNQUVBO0FBQ0hOLFlBQUFBLE9BQU8sQ0FBRSxFQUFGLENBQVA7QUFDSDtBQUNKLFNBWEw7QUFhSCxPQWRNLENBQVA7QUFlSDs7Ozs7Ozs7Z0JBdkRRUixTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5cbi8vIERlcHJlY2F0ZWQ6IFRPTkNsaWVudENvcmUgdjAuMTcuMFxuaW1wb3J0IHtTcGFuLCBTcGFuQ29udGV4dH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5cbi8qKlxuICogVE9OQ2xpZW50Q29yZUJyaWRnZVxuICogTWluaW1hbGlzdGljIGxlZ2FjeSBpbnRlcmZhY2UgdG8gY29yZSBsaWJyYXJ5LlxuICogT2xkIHN0eWxlIGNvcmVzIGRpZCBwcm92aWRlIG9ubHkgdGhpcyBBUEkuXG4gKiBGb3IgbmV3IHN0eWxlIGNvcmVzIFRPTkNsaWVudCBjcmVhdGVzIGNvbnRleHQgYm91bmQgd3JhcHBlciB3aXRoIHRoaXMgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgIC8qKlxuICAgICAqIEJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHBhcmFtIHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0gb25SZXN1bHRcbiAgICAgKi9cbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBUT04gQ2xpZW50IENvcmUgQVBJXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgY29yZVJlcXVlc3RgXG4gKiBFdmVyeSBjb3JlIHJlcXVlc3QgY2FuIGJlIHBlcmZvcm1lZCBpbiB0d28gd2F5czpcbiAqIC0gYXN5bmMgcmVxdWVzdCB3aXRoIGBjb3JlUmVxdWVzdGAgbWV0aG9kXG4gKiBDbGllbnQgaXMgYSBzdGF0ZWZ1bCBvYmplY3QuIEVhY2ggY2xpZW50IHN0YXRlIGNhbGxlZCBhIGBjb250ZXh0YC5cbiAqIFNvIHlvdSBtdXN0IHVzZSBmb2xsb3dpbmcgcnVsZXMgd2hlbiB3b3JraW5nIHdpdGggYSBjb3JlOlxuICogLSBjcmVhdGUgYSBjb250ZXh0IG9iamVjdCBhbmQgcmVjZWl2ZSBjb250ZXh0IGhhbmRsZSB3aXRoIGBjb3JlQ3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgdG8gYGNvcmVSZXF1ZXN0YFxuICogLSB3aGVuIHlvdSBkb24ndCBuZWVkIGNvbnRleHQgeW91IG11c3QgZGVzdHJveSBpdCB3aXRoIGBjb3JlRGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZUxpYnJhcnkgZXh0ZW5kcyBUT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IGNvbnRleHQgYW5kIHJldHVybnMgaGFuZGxlIHRvIGl0XG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Db250ZXh0XG4gICAgICovXG4gICAgY29yZUNyZWF0ZUNvbnRleHQob25Db250ZXh0OiAoY29udGV4dDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29udGV4dCB3aXRoIHNwZWNpZmllZCBoYW5kbGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqIEBwYXJhbSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgY29yZURlc3Ryb3lDb250ZXh0KGNvbnRleHQ6IG51bWJlciwgb25Db21wbGV0ZTogKCkgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQb3N0IGFzeW5jIHJlcXVlc3QgdG8gY29yZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25SZXN1bHRcbiAgICAgKi9cbiAgICBjb3JlUmVxdWVzdChcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmVCcmlkZ2UoKTogP1RPTkNsaWVudENvcmVCcmlkZ2UsXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPixcbn1cblxuLyoqXG4gKiBUT04gQ2xpZW50IG1vZHVsZVxuICogRWFjaCBtb2R1bGUgbXVzdCBwcm92aWRlcyBhIGNvbW1vbiBjb25zdHJ1Y3RvciBhbmQgYSBgc2V0dXBgIG1ldGhvZC5cbiAqIEFsc28gZWFjaCBzcGVjaWZpYyBtb2R1bGUgcHJvdmlkZXMgc3BlY2lmaWMgc2V0IG9mIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUT05Nb2R1bGUge1xuICAgIHN0YXRpYyBtb2R1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb250ZXh0IHRvIHdoaWNoIHRoaXMgbW9kdWxlIGlzIGJvdW5kXG4gICAgICovXG4gICAgY29udGV4dDogVE9OTW9kdWxlQ29udGV4dDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgbW9kdWxlIGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBtb2R1bGUgbXVzdCBub3QgZ2V0cyByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgaGVyZVxuICAgICAqIChmb3IgdGhpcyBwdXJwb3NlIHRoZXJlIGlzIGEgYHNldHVwYCBtZXRob2QpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxlXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBuZWNlc3Nhcnkgc2V0dXAgb2YgdGhpcyBtb2R1bGUuXG4gICAgICogVGhlIG1ldGhvZCBpcyBhIHNhZmUgcGxhY2UgdG8gZ2V0IGEgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGZyb20gdGhlIGBjb250ZXh0YC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGEgY29yZSBmb3Igc3BlY2lmaWVkIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIE1ldGhvZCBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBNZXRob2QgcGFyYW1ldGVycyB3aWxsIGJlIHN0cmluZ2lmaWVkIGludG8gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICByZXF1ZXN0Q29yZTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGNvcmVCcmlkZ2UgPSB0aGlzLmNvbnRleHQuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBpZiAoIWNvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVE9OIENsaWVudCBMaWJyYXJ5IGRvZXNuXFwndCBzZXQgdXAgcHJvcGVybHknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlQnJpZGdlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==