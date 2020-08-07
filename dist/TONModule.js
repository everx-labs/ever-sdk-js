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
  }, {
    key: "getClientInfo",
    value: function () {
      var _getClientInfo = _asyncToGenerator( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.context.getClientInfo());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getClientInfo() {
        return _getClientInfo.apply(this, arguments);
      }

      return getClientInfo;
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

                throw new Error('TON Client Library isn\'t set up properly');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsImdldENsaWVudEluZm8iLCJtZXRob2QiLCJwYXJhbXMiLCJnZXRDb3JlQnJpZGdlIiwiY29yZUJyaWRnZSIsIkVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUdBOzs7OztJQUthQSxTO0FBR1Q7Ozs7QUFLQTs7Ozs7OztBQU9BLHFCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQVNXLEtBQUtBLE9BQUwsQ0FBYUMsYUFBYixFOzs7Ozs7Ozs7Ozs7Ozs7O0FBR1g7Ozs7Ozs7Ozs7d0dBTWtDQyxNLEVBQWdCQyxNOzs7Ozs7O3VCQUNyQixLQUFLSCxPQUFMLENBQWFJLGFBQWIsRTs7O0FBQW5CQyxnQkFBQUEsVTs7b0JBQ0RBLFU7Ozs7O3NCQUNLLElBQUlDLEtBQUosQ0FBVSwyQ0FBVixDOzs7a0RBRUgsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCLEVBQXdEO0FBQ3ZFSixrQkFBQUEsVUFBVSxDQUFDSyxPQUFYLENBQ0lSLE1BREosRUFFSUMsTUFBTSxLQUFLUSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNXLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2Qix3QkFBSUEsU0FBSixFQUFlO0FBQ1hOLHNCQUFBQSxNQUFNLENBQUNHLElBQUksQ0FBQ0ksS0FBTCxDQUFXRCxTQUFYLENBQUQsQ0FBTjtBQUNILHFCQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQk4sc0JBQUFBLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDSSxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gscUJBRk0sTUFFQTtBQUNITixzQkFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osbUJBWEw7QUFhSCxpQkFkTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE1Q0ZULFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5pbXBvcnQge1NwYW4sIFNwYW5Db250ZXh0fSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcblxuLyoqXG4gKiBUT05DbGllbnRDb3JlQnJpZGdlXG4gKiBNaW5pbWFsaXN0aWMgbGVnYWN5IGludGVyZmFjZSB0byBjb3JlIGxpYnJhcnkuXG4gKiBPbGQgc3R5bGUgY29yZXMgZGlkIHByb3ZpZGUgb25seSB0aGlzIEFQSS5cbiAqIEZvciBuZXcgc3R5bGUgY29yZXMgVE9OQ2xpZW50IGNyZWF0ZXMgY29udGV4dCBib3VuZCB3cmFwcGVyIHdpdGggdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgLyoqXG4gICAgICogQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcGFyYW0gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBBUElcbiAqIENsaWVudCBDb3JlIHBlcmZvcm1zIGNsaWVudCB0YXNrcyB0aHJvdWdoIHNpbmdsZSBKU09OLWJhc2VkIHR1bm5lbGluZyBtZXRob2QgY2FsbGVkIGBjb3JlUmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYGNvcmVSZXF1ZXN0YCBtZXRob2RcbiAqIENsaWVudCBpcyBhIHN0YXRlZnVsIG9iamVjdC4gRWFjaCBjbGllbnQgc3RhdGUgY2FsbGVkIGEgYGNvbnRleHRgLlxuICogU28geW91IG11c3QgdXNlIGZvbGxvd2luZyBydWxlcyB3aGVuIHdvcmtpbmcgd2l0aCBhIGNvcmU6XG4gKiAtIGNyZWF0ZSBhIGNvbnRleHQgb2JqZWN0IGFuZCByZWNlaXZlIGNvbnRleHQgaGFuZGxlIHdpdGggYGNvcmVDcmVhdGVDb250ZXh0YFxuICogLSBjb25maWd1cmUgYGNvbnRleHRgIHdpdGggYGNvbmZpZ2AgaW52b2NhdGlvbiBtZXRob2RcbiAqIC0gcGFzcyBjb250ZXh0IGhhbmRsZSB0byBgY29yZVJlcXVlc3RgXG4gKiAtIHdoZW4geW91IGRvbid0IG5lZWQgY29udGV4dCB5b3UgbXVzdCBkZXN0cm95IGl0IHdpdGggYGNvcmVEZXN0cm95Q29udGV4dGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlTGlicmFyeSBleHRlbmRzIFRPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dCBhbmQgcmV0dXJucyBoYW5kbGUgdG8gaXRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbnRleHRcbiAgICAgKi9cbiAgICBjb3JlQ3JlYXRlQ29udGV4dChvbkNvbnRleHQ6IChjb250ZXh0OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBjb3JlRGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyLCBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIGNvcmVSZXF1ZXN0KFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBUT05DbGllbnRJbmZvID0ge1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmcsXG4gICAgY29uZmlnU2VydmVyOiBzdHJpbmcsXG4gICAgcXVlcnlVcmw6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4sXG5cbiAgICBnZXRDbGllbnRJbmZvKCk6IFByb21pc2U8VE9OQ2xpZW50SW5mbz4sXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFNwYW4sXG5cbiAgICB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPixcbn1cblxuLyoqXG4gKiBUT04gQ2xpZW50IG1vZHVsZVxuICogRWFjaCBtb2R1bGUgbXVzdCBwcm92aWRlcyBhIGNvbW1vbiBjb25zdHJ1Y3RvciBhbmQgYSBgc2V0dXBgIG1ldGhvZC5cbiAqIEFsc28gZWFjaCBzcGVjaWZpYyBtb2R1bGUgcHJvdmlkZXMgc3BlY2lmaWMgc2V0IG9mIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUT05Nb2R1bGUge1xuICAgIHN0YXRpYyBtb2R1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb250ZXh0IHRvIHdoaWNoIHRoaXMgbW9kdWxlIGlzIGJvdW5kXG4gICAgICovXG4gICAgY29udGV4dDogVE9OTW9kdWxlQ29udGV4dDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgbW9kdWxlIGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBtb2R1bGUgbXVzdCBub3QgZ2V0cyByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgaGVyZVxuICAgICAqIChmb3IgdGhpcyBwdXJwb3NlIHRoZXJlIGlzIGEgYHNldHVwYCBtZXRob2QpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxlXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBuZWNlc3Nhcnkgc2V0dXAgb2YgdGhpcyBtb2R1bGUuXG4gICAgICogVGhlIG1ldGhvZCBpcyBhIHNhZmUgcGxhY2UgdG8gZ2V0IGEgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGZyb20gdGhlIGBjb250ZXh0YC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCkge1xuICAgIH1cblxuICAgIGFzeW5jIGdldENsaWVudEluZm8oKTogUHJvbWlzZTxUT05DbGllbnRJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuZ2V0Q2xpZW50SW5mbygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGEgY29yZSBmb3Igc3BlY2lmaWVkIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIE1ldGhvZCBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBNZXRob2QgcGFyYW1ldGVycyB3aWxsIGJlIHN0cmluZ2lmaWVkIGludG8gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0Q29yZTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGNvcmVCcmlkZ2UgPSBhd2FpdCB0aGlzLmNvbnRleHQuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBpZiAoIWNvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVE9OIENsaWVudCBMaWJyYXJ5IGlzblxcJ3Qgc2V0IHVwIHByb3Blcmx5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZUJyaWRnZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=