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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJjb21wbGV0ZUVycm9yRGF0YSIsIm1ldGhvZCIsInBhcmFtcyIsImdldENvcmVCcmlkZ2UiLCJjb3JlQnJpZGdlIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3R0E7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhHQVF3QkMsSTs7Ozs7a0RBQ2IsS0FBS0QsT0FBTCxDQUFhRSxpQkFBYixDQUErQkQsSUFBL0IsQzs7Ozs7Ozs7Ozs7Ozs7OztBQUdYOzs7Ozs7Ozs7O3dHQU1rQ0UsTSxFQUFnQkMsTTs7Ozs7Ozt1QkFDckIsS0FBS0osT0FBTCxDQUFhSyxhQUFiLEU7OztBQUFuQkMsZ0JBQUFBLFU7O29CQUNEQSxVOzs7OztzQkFDSyxJQUFJQyxLQUFKLENBQVUsMkNBQVYsQzs7O2tEQUVILElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUosa0JBQUFBLFVBQVUsQ0FBQ0ssT0FBWCxDQUNJUixNQURKLEVBRUlDLE1BQU0sS0FBS1EsU0FBWCxHQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLE1BQWYsS0FBMEIsRUFBbEQsR0FBd0QsRUFGNUQsRUFHSSxVQUFDVyxVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDdkIsd0JBQUlBLFNBQUosRUFBZTtBQUNYTixzQkFBQUEsTUFBTSxDQUFDRyxJQUFJLENBQUNJLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxxQkFGRCxNQUVPLElBQUlELFVBQUosRUFBZ0I7QUFDbkJOLHNCQUFBQSxPQUFPLENBQUNJLElBQUksQ0FBQ0ksS0FBTCxDQUFXRixVQUFYLENBQUQsQ0FBUDtBQUNILHFCQUZNLE1BRUE7QUFDSE4sc0JBQUFBLE9BQU8sQ0FBRSxFQUFGLENBQVA7QUFDSDtBQUNKLG1CQVhMO0FBYUgsaUJBZE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBNUNGVixTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5cbi8vIERlcHJlY2F0ZWQ6IFRPTkNsaWVudENvcmUgdjAuMTcuMFxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQgfSBmcm9tICdvcGVudHJhY2luZyc7XG5cbmV4cG9ydCB0eXBlIFRPTkVycm9yRGF0YSA9IHtcbiAgICBjb3JlX3ZlcnNpb246IHN0cmluZztcbiAgICBjb25maWdfc2VydmVyOiBzdHJpbmc7XG4gICAgcXVlcnlfdXJsOiBzdHJpbmc7XG4gICAgW3N0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBUT05DbGllbnRDb3JlQnJpZGdlXG4gKiBNaW5pbWFsaXN0aWMgbGVnYWN5IGludGVyZmFjZSB0byBjb3JlIGxpYnJhcnkuXG4gKiBPbGQgc3R5bGUgY29yZXMgZGlkIHByb3ZpZGUgb25seSB0aGlzIEFQSS5cbiAqIEZvciBuZXcgc3R5bGUgY29yZXMgVE9OQ2xpZW50IGNyZWF0ZXMgY29udGV4dCBib3VuZCB3cmFwcGVyIHdpdGggdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgLyoqXG4gICAgICogQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcGFyYW0gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBBUElcbiAqIENsaWVudCBDb3JlIHBlcmZvcm1zIGNsaWVudCB0YXNrcyB0aHJvdWdoIHNpbmdsZSBKU09OLWJhc2VkIHR1bm5lbGluZyBtZXRob2QgY2FsbGVkIGBjb3JlUmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYGNvcmVSZXF1ZXN0YCBtZXRob2RcbiAqIENsaWVudCBpcyBhIHN0YXRlZnVsIG9iamVjdC4gRWFjaCBjbGllbnQgc3RhdGUgY2FsbGVkIGEgYGNvbnRleHRgLlxuICogU28geW91IG11c3QgdXNlIGZvbGxvd2luZyBydWxlcyB3aGVuIHdvcmtpbmcgd2l0aCBhIGNvcmU6XG4gKiAtIGNyZWF0ZSBhIGNvbnRleHQgb2JqZWN0IGFuZCByZWNlaXZlIGNvbnRleHQgaGFuZGxlIHdpdGggYGNvcmVDcmVhdGVDb250ZXh0YFxuICogLSBjb25maWd1cmUgYGNvbnRleHRgIHdpdGggYGNvbmZpZ2AgaW52b2NhdGlvbiBtZXRob2RcbiAqIC0gcGFzcyBjb250ZXh0IGhhbmRsZSB0byBgY29yZVJlcXVlc3RgXG4gKiAtIHdoZW4geW91IGRvbid0IG5lZWQgY29udGV4dCB5b3UgbXVzdCBkZXN0cm95IGl0IHdpdGggYGNvcmVEZXN0cm95Q29udGV4dGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlTGlicmFyeSBleHRlbmRzIFRPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dCBhbmQgcmV0dXJucyBoYW5kbGUgdG8gaXRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbnRleHRcbiAgICAgKi9cbiAgICBjb3JlQ3JlYXRlQ29udGV4dChvbkNvbnRleHQ6IChjb250ZXh0OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBjb3JlRGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyLCBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIGNvcmVSZXF1ZXN0KFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG5leHBvcnQgdHlwZSBUT05DbGllbnRJbmZvID0ge1xuICAgIGNvcmVWZXJzaW9uOiBzdHJpbmcsXG4gICAgY29uZmlnU2VydmVyOiBzdHJpbmcsXG4gICAgcXVlcnlVcmw6IHN0cmluZyxcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmVCcmlkZ2UoKTogUHJvbWlzZTw/VE9OQ2xpZW50Q29yZUJyaWRnZT4sXG5cbiAgICBjb21wbGV0ZUVycm9yRGF0YShkYXRhPzogeyBbc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPFRPTkVycm9yRGF0YT4sXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzdGFydFJvb3RTcGFuKHRyYWNlSWQ6IHN0cmluZywgc3BhbklkOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFNwYW4sXG5cbiAgICB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VD4sXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICBhc3luYyBjb21wbGV0ZUVycm9yRGF0YShkYXRhPzogeyBbc3RyaW5nXTogYW55IH0pOiBQcm9taXNlPFRPTkVycm9yRGF0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmNvbXBsZXRlRXJyb3JEYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGEgY29yZSBmb3Igc3BlY2lmaWVkIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIE1ldGhvZCBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBNZXRob2QgcGFyYW1ldGVycyB3aWxsIGJlIHN0cmluZ2lmaWVkIGludG8gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyByZXF1ZXN0Q29yZTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGNvcmVCcmlkZ2UgPSBhd2FpdCB0aGlzLmNvbnRleHQuZ2V0Q29yZUJyaWRnZSgpO1xuICAgICAgICBpZiAoIWNvcmVCcmlkZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVE9OIENsaWVudCBMaWJyYXJ5IGlzblxcJ3Qgc2V0IHVwIHByb3Blcmx5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZUJyaWRnZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=