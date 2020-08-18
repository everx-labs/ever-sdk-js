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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsImRhdGEiLCJjb21wbGV0ZUVycm9yRGF0YSIsIm1ldGhvZCIsInBhcmFtcyIsImdldENvcmVCcmlkZ2UiLCJjb3JlQnJpZGdlIiwiVE9OQ2xpZW50RXJyb3IiLCJjbGllbnRJc05vdFNldHVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidW5kZWZpbmVkIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBNEZBOzs7OztJQUthQSxTO0FBR1Q7Ozs7QUFLQTs7Ozs7OztBQU9BLHFCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4R0FRd0JDLEk7Ozs7O2tEQUNiLEtBQUtELE9BQUwsQ0FBYUUsaUJBQWIsQ0FBK0JELElBQS9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWDs7Ozs7Ozs7Ozt3R0FNa0NFLE0sRUFBZ0JDLE07Ozs7Ozs7dUJBQ3JCLEtBQUtKLE9BQUwsQ0FBYUssYUFBYixFOzs7QUFBbkJDLGdCQUFBQSxVOztvQkFDREEsVTs7Ozs7c0JBQ0tDLCtCQUFlQyxnQkFBZixFOzs7a0RBRUgsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCLEVBQXdEO0FBQ3ZFTCxrQkFBQUEsVUFBVSxDQUFDTSxPQUFYLENBQ0lULE1BREosRUFFSUMsTUFBTSxLQUFLUyxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVgsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNZLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2Qix3QkFBSUEsU0FBSixFQUFlO0FBQ1hOLHNCQUFBQSxNQUFNLENBQUNHLElBQUksQ0FBQ0ksS0FBTCxDQUFXRCxTQUFYLENBQUQsQ0FBTjtBQUNILHFCQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQk4sc0JBQUFBLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDSSxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gscUJBRk0sTUFFQTtBQUNITixzQkFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osbUJBWEw7QUFhSCxpQkFkTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE1Q0ZYLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB7IFRPTkNsaWVudEVycm9yIH0gZnJvbSAnLi9UT05DbGllbnRFcnJvcic7XG5pbXBvcnQgdHlwZSB7IFRPTkVycm9yRGF0YSB9IGZyb20gJy4vVE9OQ2xpZW50RXJyb3InO1xuXG4vKipcbiAqIFRPTkNsaWVudENvcmVCcmlkZ2VcbiAqIE1pbmltYWxpc3RpYyBsZWdhY3kgaW50ZXJmYWNlIHRvIGNvcmUgbGlicmFyeS5cbiAqIE9sZCBzdHlsZSBjb3JlcyBkaWQgcHJvdmlkZSBvbmx5IHRoaXMgQVBJLlxuICogRm9yIG5ldyBzdHlsZSBjb3JlcyBUT05DbGllbnQgY3JlYXRlcyBjb250ZXh0IGJvdW5kIHdyYXBwZXIgd2l0aCB0aGlzIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlQnJpZGdlIHtcbiAgICAvKipcbiAgICAgKiBCYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEBwYXJhbSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIG9uUmVzdWx0XG4gICAgICovXG4gICAgcmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cbi8qKlxuICogVE9OIENsaWVudCBDb3JlIEFQSVxuICogQ2xpZW50IENvcmUgcGVyZm9ybXMgY2xpZW50IHRhc2tzIHRocm91Z2ggc2luZ2xlIEpTT04tYmFzZWQgdHVubmVsaW5nIG1ldGhvZCBjYWxsZWQgYGNvcmVSZXF1ZXN0YFxuICogRXZlcnkgY29yZSByZXF1ZXN0IGNhbiBiZSBwZXJmb3JtZWQgaW4gdHdvIHdheXM6XG4gKiAtIGFzeW5jIHJlcXVlc3Qgd2l0aCBgY29yZVJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY29yZUNyZWF0ZUNvbnRleHRgXG4gKiAtIGNvbmZpZ3VyZSBgY29udGV4dGAgd2l0aCBgY29uZmlnYCBpbnZvY2F0aW9uIG1ldGhvZFxuICogLSBwYXNzIGNvbnRleHQgaGFuZGxlIHRvIGBjb3JlUmVxdWVzdGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgY29yZURlc3Ryb3lDb250ZXh0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmVMaWJyYXJ5IGV4dGVuZHMgVE9OQ2xpZW50Q29yZUJyaWRnZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29udGV4dFxuICAgICAqL1xuICAgIGNvcmVDcmVhdGVDb250ZXh0KG9uQ29udGV4dDogKGNvbnRleHQ6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGNvbnRleHQgd2l0aCBzcGVjaWZpZWQgaGFuZGxlXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKiBAcGFyYW0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGNvcmVEZXN0cm95Q29udGV4dChjb250ZXh0OiBudW1iZXIsIG9uQ29tcGxldGU6ICgpID0+IHZvaWQpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUG9zdCBhc3luYyByZXF1ZXN0IHRvIGNvcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVzdWx0XG4gICAgICovXG4gICAgY29yZVJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cbi8qKlxuICogQ29udGV4dCBpbiB3aGljaCBtb2R1bGVzIGFyZSB3b3JraW5nXG4gKiBBbGwgbW9kdWxlIGluc3RhbmNlcyBhcmUgYm91bmQgdG8gc2luZ2xlIGNvbnRleHRcbiAqIGFuZCBjYW4gY29tbXVuaWNhdGUgd2l0aCBzaWJsaW5nIG1vZHVsZXMuXG4gKiBDb250ZXh0IHByb3ZpZGVzIGJvdW5kZWQgbW9kdWxlcyB3aXRoOlxuICogLSBhY2Nlc3MgdG8gY29tbW9uIGNsaWVudCBjb3JlIGFuZCBwcmVjb25maWd1cmVkIGNvcmUgY29udGV4dFxuICogLSBhY2Nlc3MgdG8gc2libGluZyBtb2R1bGVzICh1c2luZyBhIG1vZHVsZSBjbGFzcyBhcyBhbiBpZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBnZXRDb3JlQnJpZGdlKCk6IFByb21pc2U8P1RPTkNsaWVudENvcmVCcmlkZ2U+LFxuXG4gICAgY29tcGxldGVFcnJvckRhdGEoZGF0YT86IHsgW3N0cmluZ106IGFueSB9KTogUHJvbWlzZTxUT05FcnJvckRhdGE+LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcblxuICAgIHNlcnZlclRpbWVEZWx0YSgpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICBzZXJ2ZXJOb3coKTogUHJvbWlzZTxudW1iZXI+LFxuXG4gICAgc3RhcnRSb290U3Bhbih0cmFjZUlkOiBzdHJpbmcsIHNwYW5JZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiBTcGFuLFxuXG4gICAgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFQ+LFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tcGxldGVFcnJvckRhdGEoZGF0YT86IHsgW3N0cmluZ106IGFueSB9KTogUHJvbWlzZTxUT05FcnJvckRhdGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5jb21wbGV0ZUVycm9yRGF0YShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhIGNvcmUgZm9yIHNwZWNpZmllZCBtZXRob2QgYW5kIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBNZXRob2QgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgTWV0aG9kIHBhcmFtZXRlcnMgd2lsbCBiZSBzdHJpbmdpZmllZCBpbnRvIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgYXN5bmMgcmVxdWVzdENvcmU8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBjb3JlQnJpZGdlID0gYXdhaXQgdGhpcy5jb250ZXh0LmdldENvcmVCcmlkZ2UoKTtcbiAgICAgICAgaWYgKCFjb3JlQnJpZGdlKSB7XG4gICAgICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5jbGllbnRJc05vdFNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZUJyaWRnZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=