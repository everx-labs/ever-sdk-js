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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7O0FBMEZBOzs7OztJQUthQSxTO0FBR1Q7Ozs7QUFLQTs7Ozs7OztBQU9BLHFCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Z0NBTTRCQyxNLEVBQWdCQyxNLEVBQWtDO0FBQzFFLFVBQU1DLENBQUMsR0FBR0QsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUFsRTtBQUNBLFVBQU1LLElBQUksR0FBRyxLQUFLUCxPQUFMLENBQWFRLE9BQWIsRUFBYjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNQLGNBQU0sSUFBSUUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDSDs7QUFDRCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUwsUUFBQUEsSUFBSSxDQUFDTSxPQUFMLENBQ0laLE1BREosRUFFSUMsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNZLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixjQUFJQSxTQUFKLEVBQWU7QUFDWEgsWUFBQUEsTUFBTSxDQUFDUCxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxXQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQkgsWUFBQUEsT0FBTyxDQUFDTixJQUFJLENBQUNXLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxXQUZNLE1BRUE7QUFDSEgsWUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osU0FYTDtBQWFILE9BZE0sQ0FBUDtBQWVIOzs7Ozs7OztnQkF4RFFaLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCwgU3Bhbk9wdGlvbnMsIFRyYWNlciB9IGZyb20gXCJvcGVudHJhY2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudExpYnJhcnkge1xuICAgIHJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG5cbi8qKlxuICogVE9OIENsaWVudCBDb3JlIHB1YmxpYyBpbnRlcmZhY2VcbiAqIENsaWVudCBDb3JlIHBlcmZvcm1zIGNsaWVudCB0YXNrcyB0aHJvdWdoIHNpbmdsZSBKU09OLWJhc2VkIHR1bm5lbGluZyBtZXRob2QgY2FsbGVkIGByZXF1ZXN0YFxuICogRXZlcnkgY29yZSByZXF1ZXN0IGNhbiBiZSBwZXJmb3JtZWQgaW4gdHdvIHdheXM6XG4gKiAtIHN5bmMgY2FsbCB3aXRoIGByZXF1ZXN0U3luY2AgbWV0aG9kXG4gKiAtIGFzeW5jIHJlcXVlc3Qgd2l0aCBgcmVxdWVzdGAgbWV0aG9kXG4gKiBDbGllbnQgaXMgYSBzdGF0ZWZ1bCBvYmplY3QuIEVhY2ggY2xpZW50IHN0YXRlIGNhbGxlZCBhIGBjb250ZXh0YC5cbiAqIFNvIHlvdSBtdXN0IHVzZSBmb2xsb3dpbmcgcnVsZXMgd2hlbiB3b3JraW5nIHdpdGggYSBjb3JlOlxuICogLSBjcmVhdGUgYSBjb250ZXh0IG9iamVjdCBhbmQgcmVjZWl2ZSBjb250ZXh0IGhhbmRsZSB3aXRoIGBjcmVhdGVDb250ZXh0YFxuICogLSBjb25maWd1cmUgYGNvbnRleHRgIHdpdGggYGNvbmZpZ2AgaW52b2NhdGlvbiBtZXRob2RcbiAqIC0gcGFzcyBjb250ZXh0IGhhbmRsZSBpbiBgcmVxdWVzdGAgYW5kIGBjYWxsYFxuICogLSB3aGVuIHlvdSBkb24ndCBuZWVkIGNvbnRleHQgeW91IG11c3QgZGVzdHJveSBpdCB3aXRoIGBkZXN0cm95Q29udGV4dGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IGNvbnRleHQgYW5kIHJldHVybnMgaGFuZGxlIHRvIGl0XG4gICAgICovXG4gICAgY3JlYXRlQ29udGV4dCgpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGNvbnRleHQgd2l0aCBzcGVjaWZpZWQgaGFuZGxlXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBkZXN0cm95Q29udGV4dChjb250ZXh0OiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUG9zdCBhc3luYyByZXF1ZXN0IHRvIGNvcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVzdWx0XG4gICAgICovXG4gICAgcmVxdWVzdChcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gc3luYyByZXF1ZXN0IHRvIGNvcmUgYW5kIHJldHVybiByZXN1bHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqL1xuICAgIHJlcXVlc3RTeW5jKFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmdcbiAgICApOiB7XG4gICAgICAgIHJlc3VsdEpzb246IHN0cmluZyxcbiAgICAgICAgZXJyb3JKc29uOiBzdHJpbmdcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbnRleHQgaW4gd2hpY2ggbW9kdWxlcyBhcmUgd29ya2luZ1xuICogQWxsIG1vZHVsZSBpbnN0YW5jZXMgYXJlIGJvdW5kIHRvIHNpbmdsZSBjb250ZXh0XG4gKiBhbmQgY2FuIGNvbW11bmljYXRlIHdpdGggc2libGluZyBtb2R1bGVzLlxuICogQ29udGV4dCBwcm92aWRlcyBib3VuZGVkIG1vZHVsZXMgd2l0aDpcbiAqIC0gYWNjZXNzIHRvIGNvbW1vbiBjbGllbnQgY29yZSBhbmQgcHJlY29uZmlndXJlZCBjb3JlIGNvbnRleHRcbiAqIC0gYWNjZXNzIHRvIHNpYmxpbmcgbW9kdWxlcyAodXNpbmcgYSBtb2R1bGUgY2xhc3MgYXMgYW4gaWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgZ2V0Q29yZSgpOiA/VE9OQ2xpZW50TGlicmFyeSxcblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQsXG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFQ+LFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBjb3JlIGZvciBzcGVjaWZpZWQgbWV0aG9kIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgTWV0aG9kIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE1ldGhvZCBwYXJhbWV0ZXJzIHdpbGwgYmUgc3RyaW5naWZpZWQgaW50byBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIHJlcXVlc3RDb3JlPFBhcmFtcywgUmVzdWx0PihtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogUGFyYW1zKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcCA9IHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJyc7XG4gICAgICAgIGNvbnN0IGNvcmUgPSB0aGlzLmNvbnRleHQuZ2V0Q29yZSgpO1xuICAgICAgICBpZiAoIWNvcmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVE9OIFNESyBKUyBMaWJyYXJ5IGRvZXNuXFwndCBzZXQgdXAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==