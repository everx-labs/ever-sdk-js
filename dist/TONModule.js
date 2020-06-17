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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUZBOzs7OztJQUthQSxTO0FBR1Q7Ozs7QUFLQTs7Ozs7OztBQU9BLHFCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Z0NBTTRCQyxNLEVBQWdCQyxNLEVBQWtDO0FBQzFFLFVBQU1DLENBQUMsR0FBR0QsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUFsRTtBQUNBLFVBQU1LLElBQUksR0FBRyxLQUFLUCxPQUFMLENBQWFRLE9BQWIsRUFBYjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNQLGNBQU0sSUFBSUUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDSDs7QUFDRCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUwsUUFBQUEsSUFBSSxDQUFDTSxPQUFMLENBQ0laLE1BREosRUFFSUMsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNZLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixjQUFJQSxTQUFKLEVBQWU7QUFDWEgsWUFBQUEsTUFBTSxDQUFDUCxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxXQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQkgsWUFBQUEsT0FBTyxDQUFDTixJQUFJLENBQUNXLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxXQUZNLE1BRUE7QUFDSEgsWUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osU0FYTDtBQWFILE9BZE0sQ0FBUDtBQWVIOzs7Ozs7OztnQkF4RFFaLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5pbXBvcnQge1NwYW4sIFNwYW5Db250ZXh0LCBTcGFuT3B0aW9ucywgVHJhY2VyfSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBwdWJsaWMgaW50ZXJmYWNlXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgcmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBzeW5jIGNhbGwgd2l0aCBgcmVxdWVzdFN5bmNgIG1ldGhvZFxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYHJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgaW4gYHJlcXVlc3RgIGFuZCBgY2FsbGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgZGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqL1xuICAgIGNvcmVDcmVhdGVDb250ZXh0KCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29udGV4dCB3aXRoIHNwZWNpZmllZCBoYW5kbGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0OiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUG9zdCBhc3luYyByZXF1ZXN0IHRvIGNvcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVzdWx0XG4gICAgICovXG4gICAgY29yZVJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEBwYXJhbSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIG9uUmVzdWx0XG4gICAgICovXG4gICAgcmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cbi8qKlxuICogQ29udGV4dCBpbiB3aGljaCBtb2R1bGVzIGFyZSB3b3JraW5nXG4gKiBBbGwgbW9kdWxlIGluc3RhbmNlcyBhcmUgYm91bmQgdG8gc2luZ2xlIGNvbnRleHRcbiAqIGFuZCBjYW4gY29tbXVuaWNhdGUgd2l0aCBzaWJsaW5nIG1vZHVsZXMuXG4gKiBDb250ZXh0IHByb3ZpZGVzIGJvdW5kZWQgbW9kdWxlcyB3aXRoOlxuICogLSBhY2Nlc3MgdG8gY29tbW9uIGNsaWVudCBjb3JlIGFuZCBwcmVjb25maWd1cmVkIGNvcmUgY29udGV4dFxuICogLSBhY2Nlc3MgdG8gc2libGluZyBtb2R1bGVzICh1c2luZyBhIG1vZHVsZSBjbGFzcyBhcyBhbiBpZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VD4sXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhIGNvcmUgZm9yIHNwZWNpZmllZCBtZXRob2QgYW5kIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBNZXRob2QgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgTWV0aG9kIHBhcmFtZXRlcnMgd2lsbCBiZSBzdHJpbmdpZmllZCBpbnRvIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgcmVxdWVzdENvcmU8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBwID0gcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJztcbiAgICAgICAgY29uc3QgY29yZSA9IHRoaXMuY29udGV4dC5nZXRDb3JlKCk7XG4gICAgICAgIGlmICghY29yZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT04gU0RLIEpTIExpYnJhcnkgZG9lc25cXCd0IHNldCB1cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKFJlc3VsdCkgPT4gdm9pZCwgcmVqZWN0OiAoRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgIGNvcmUucmVxdWVzdChcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJyxcbiAgICAgICAgICAgICAgICAocmVzdWx0SnNvbiwgZXJyb3JKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChKU09OLnBhcnNlKGVycm9ySnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdEpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHRKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCh7fTogYW55KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19