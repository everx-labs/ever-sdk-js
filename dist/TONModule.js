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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsImdldENvcmVCcmlkZ2UiLCJjb3JlQnJpZGdlIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTs7QUFBQTs7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7d0dBTWtDQyxNLEVBQWdCQyxNOzs7Ozs7O3VCQUNyQixLQUFLRixPQUFMLENBQWFHLGFBQWIsRTs7O0FBQW5CQyxnQkFBQUEsVTs7b0JBQ0RBLFU7Ozs7O3NCQUNLLElBQUlDLEtBQUosQ0FBVSwyQ0FBVixDOzs7a0RBRUgsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCLEVBQXdEO0FBQ3ZFSixrQkFBQUEsVUFBVSxDQUFDSyxPQUFYLENBQ0lSLE1BREosRUFFSUMsTUFBTSxLQUFLUSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVYsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNXLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2Qix3QkFBSUEsU0FBSixFQUFlO0FBQ1hOLHNCQUFBQSxNQUFNLENBQUNHLElBQUksQ0FBQ0ksS0FBTCxDQUFXRCxTQUFYLENBQUQsQ0FBTjtBQUNILHFCQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQk4sc0JBQUFBLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDSSxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gscUJBRk0sTUFFQTtBQUNITixzQkFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osbUJBWEw7QUFhSCxpQkFkTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkF4Q0ZSLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5pbXBvcnQge1NwYW4sIFNwYW5Db250ZXh0fSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcblxuLyoqXG4gKiBUT05DbGllbnRDb3JlQnJpZGdlXG4gKiBNaW5pbWFsaXN0aWMgbGVnYWN5IGludGVyZmFjZSB0byBjb3JlIGxpYnJhcnkuXG4gKiBPbGQgc3R5bGUgY29yZXMgZGlkIHByb3ZpZGUgb25seSB0aGlzIEFQSS5cbiAqIEZvciBuZXcgc3R5bGUgY29yZXMgVE9OQ2xpZW50IGNyZWF0ZXMgY29udGV4dCBib3VuZCB3cmFwcGVyIHdpdGggdGhpcyBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgLyoqXG4gICAgICogQmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcGFyYW0gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBBUElcbiAqIENsaWVudCBDb3JlIHBlcmZvcm1zIGNsaWVudCB0YXNrcyB0aHJvdWdoIHNpbmdsZSBKU09OLWJhc2VkIHR1bm5lbGluZyBtZXRob2QgY2FsbGVkIGBjb3JlUmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYGNvcmVSZXF1ZXN0YCBtZXRob2RcbiAqIENsaWVudCBpcyBhIHN0YXRlZnVsIG9iamVjdC4gRWFjaCBjbGllbnQgc3RhdGUgY2FsbGVkIGEgYGNvbnRleHRgLlxuICogU28geW91IG11c3QgdXNlIGZvbGxvd2luZyBydWxlcyB3aGVuIHdvcmtpbmcgd2l0aCBhIGNvcmU6XG4gKiAtIGNyZWF0ZSBhIGNvbnRleHQgb2JqZWN0IGFuZCByZWNlaXZlIGNvbnRleHQgaGFuZGxlIHdpdGggYGNvcmVDcmVhdGVDb250ZXh0YFxuICogLSBjb25maWd1cmUgYGNvbnRleHRgIHdpdGggYGNvbmZpZ2AgaW52b2NhdGlvbiBtZXRob2RcbiAqIC0gcGFzcyBjb250ZXh0IGhhbmRsZSB0byBgY29yZVJlcXVlc3RgXG4gKiAtIHdoZW4geW91IGRvbid0IG5lZWQgY29udGV4dCB5b3UgbXVzdCBkZXN0cm95IGl0IHdpdGggYGNvcmVEZXN0cm95Q29udGV4dGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlTGlicmFyeSBleHRlbmRzIFRPTkNsaWVudENvcmVCcmlkZ2Uge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dCBhbmQgcmV0dXJucyBoYW5kbGUgdG8gaXRcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbnRleHRcbiAgICAgKi9cbiAgICBjb3JlQ3JlYXRlQ29udGV4dChvbkNvbnRleHQ6IChjb250ZXh0OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICogQHBhcmFtIG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICBjb3JlRGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyLCBvbkNvbXBsZXRlOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIGNvcmVSZXF1ZXN0KFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG4vKipcbiAqIENvbnRleHQgaW4gd2hpY2ggbW9kdWxlcyBhcmUgd29ya2luZ1xuICogQWxsIG1vZHVsZSBpbnN0YW5jZXMgYXJlIGJvdW5kIHRvIHNpbmdsZSBjb250ZXh0XG4gKiBhbmQgY2FuIGNvbW11bmljYXRlIHdpdGggc2libGluZyBtb2R1bGVzLlxuICogQ29udGV4dCBwcm92aWRlcyBib3VuZGVkIG1vZHVsZXMgd2l0aDpcbiAqIC0gYWNjZXNzIHRvIGNvbW1vbiBjbGllbnQgY29yZSBhbmQgcHJlY29uZmlndXJlZCBjb3JlIGNvbnRleHRcbiAqIC0gYWNjZXNzIHRvIHNpYmxpbmcgbW9kdWxlcyAodXNpbmcgYSBtb2R1bGUgY2xhc3MgYXMgYW4gaWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgZ2V0Q29yZUJyaWRnZSgpOiBQcm9taXNlPD9UT05DbGllbnRDb3JlQnJpZGdlPixcblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQsXG5cbiAgICBzZXJ2ZXJUaW1lRGVsdGEoKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgc2VydmVyTm93KCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHN0YXJ0Um9vdFNwYW4odHJhY2VJZDogc3RyaW5nLCBzcGFuSWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKTogU3BhbixcblxuICAgIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFQ+LFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBjb3JlIGZvciBzcGVjaWZpZWQgbWV0aG9kIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgTWV0aG9kIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE1ldGhvZCBwYXJhbWV0ZXJzIHdpbGwgYmUgc3RyaW5naWZpZWQgaW50byBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIGFzeW5jIHJlcXVlc3RDb3JlPFBhcmFtcywgUmVzdWx0PihtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogUGFyYW1zKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgY29yZUJyaWRnZSA9IGF3YWl0IHRoaXMuY29udGV4dC5nZXRDb3JlQnJpZGdlKCk7XG4gICAgICAgIGlmICghY29yZUJyaWRnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT04gQ2xpZW50IExpYnJhcnkgaXNuXFwndCBzZXQgdXAgcHJvcGVybHknKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlQnJpZGdlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==