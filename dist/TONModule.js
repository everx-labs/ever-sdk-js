"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONModule = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/*
 * Copyright 2018-2020 TON DEV SOLUTIONS LTD.
 *
 * Licensed under the SOFTWARE EVALUATION License (the "License"); you may not use
 * this file except in compliance with the License.  You may obtain a copy of the
 * License at:
 *
 * http://www.ton.dev/licenses
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific TON DEV software governing permissions and
 * limitations under the License.
 */

/* eslint-disable class-methods-use-this, no-use-before-define, no-undef */
// Deprecated: TONClientCore v0.17.0

/**
 * TON Client Core public interface
 * Client Core performs client tasks through single JSON-based tunneling method called `request`
 * Every core request can be performed in two ways:
 * - sync call with `requestSync` method
 * - async request with `request` method
 * Client is a stateful object. Each client state called a `context`.
 * So you must use following rules when working with a core:
 * - create a context object and receive context handle with `createContext`
 * - configure `context` with `config` invocation method
 * - pass context handle in `request` and `call`
 * - when you don't need context you must destroy it with `destroyContext`
 */

/**
 * Context in which modules are working
 * All module instances are bound to single context
 * and can communicate with sibling modules.
 * Context provides bounded modules with:
 * - access to common client core and preconfigured core context
 * - access to sibling modules (using a module class as an id)
 */

/**
 * TON Client module
 * Each module must provides a common constructor and a `setup` method.
 * Also each specific module provides specific set of methods.
 */
var TONModule =
/*#__PURE__*/
function () {
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
    (0, _classCallCheck2["default"])(this, TONModule);
    (0, _defineProperty2["default"])(this, "context", void 0);
    this.context = context;
  } // Module

  /**
   * Performs necessary setup of this module.
   * The method is a safe place to get a references to other modules from the `context`.
   * @return {Promise<void>}
   */


  (0, _createClass2["default"])(TONModule, [{
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
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
    value: function requestCore(method, params, tracer) {
      var span = tracer.startSpan('TONModule.js:requestCore');
      span.log({
        event: 'core request',
        value: "Mehtod - ".concat(method, " \n Params - ").concat(params)
      });
      var core = this.context.getCore();

      if (!core) {
        span.finish();
        throw new Error('TON SDK JS Library doesn\'t set up');
      }

      var prom = new Promise(function (resolve, reject) {
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
      span.finish();
      return prom;
    }
  }]);
  return TONModule;
}();

exports.TONModule = TONModule;
(0, _defineProperty2["default"])(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInRyYWNlciIsInNwYW4iLCJzdGFydFNwYW4iLCJsb2ciLCJldmVudCIsInZhbHVlIiwiY29yZSIsImdldENvcmUiLCJmaW5pc2giLCJFcnJvciIsInByb20iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7QUF1REE7Ozs7Ozs7OztBQWNBOzs7OztJQUthQSxTOzs7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7OztnQ0FNNEJDLE0sRUFBZ0JDLE0sRUFBaUJDLE0sRUFBOEI7QUFDdkYsVUFBTUMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLFNBQVAsQ0FBaUIsMEJBQWpCLENBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxHQUFMLENBQVM7QUFDTEMsUUFBQUEsS0FBSyxFQUFFLGNBREY7QUFFTEMsUUFBQUEsS0FBSyxxQkFBY1AsTUFBZCwwQkFBb0NDLE1BQXBDO0FBRkEsT0FBVDtBQUlBLFVBQU1PLElBQUksR0FBRyxLQUFLVCxPQUFMLENBQWFVLE9BQWIsRUFBYjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNQTCxRQUFBQSxJQUFJLENBQUNPLE1BQUw7QUFDQSxjQUFNLElBQUlDLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUM3RVAsUUFBQUEsSUFBSSxDQUFDUSxPQUFMLENBQ0loQixNQURKLEVBRUlDLE1BQU0sS0FBS2dCLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbEIsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNtQixVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDdkIsY0FBSUEsU0FBSixFQUFlO0FBQ1hOLFlBQUFBLE1BQU0sQ0FBQ0csSUFBSSxDQUFDSSxLQUFMLENBQVdELFNBQVgsQ0FBRCxDQUFOO0FBQ0gsV0FGRCxNQUVPLElBQUlELFVBQUosRUFBZ0I7QUFDbkJOLFlBQUFBLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDSSxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gsV0FGTSxNQUVBO0FBQ0hOLFlBQUFBLE9BQU8sQ0FBRSxFQUFGLENBQVA7QUFDSDtBQUNKLFNBWEw7QUFhSCxPQWRZLENBQWI7QUFlQVgsTUFBQUEsSUFBSSxDQUFDTyxNQUFMO0FBQ0EsYUFBT0UsSUFBUDtBQUNIOzs7Ozs7aUNBL0RRZCxTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5cbi8vIERlcHJlY2F0ZWQ6IFRPTkNsaWVudENvcmUgdjAuMTcuMFxuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBwdWJsaWMgaW50ZXJmYWNlXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgcmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBzeW5jIGNhbGwgd2l0aCBgcmVxdWVzdFN5bmNgIG1ldGhvZFxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYHJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgaW4gYHJlcXVlc3RgIGFuZCBgY2FsbGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgZGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqL1xuICAgIGNyZWF0ZUNvbnRleHQoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgZGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHN5bmMgcmVxdWVzdCB0byBjb3JlIGFuZCByZXR1cm4gcmVzdWx0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKi9cbiAgICByZXF1ZXN0U3luYyhcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nXG4gICAgKToge1xuICAgICAgICByZXN1bHRKc29uOiBzdHJpbmcsXG4gICAgICAgIGVycm9ySnNvbjogc3RyaW5nXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmUoKTogP1RPTkNsaWVudExpYnJhcnksXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBjb3JlIGZvciBzcGVjaWZpZWQgbWV0aG9kIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgTWV0aG9kIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE1ldGhvZCBwYXJhbWV0ZXJzIHdpbGwgYmUgc3RyaW5naWZpZWQgaW50byBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIHJlcXVlc3RDb3JlPFBhcmFtcywgUmVzdWx0PihtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogUGFyYW1zLCB0cmFjZXI6IGFueSk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0cmFjZXIuc3RhcnRTcGFuKCdUT05Nb2R1bGUuanM6cmVxdWVzdENvcmUnKTtcbiAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgZXZlbnQ6ICdjb3JlIHJlcXVlc3QnLFxuICAgICAgICAgICAgdmFsdWU6IGBNZWh0b2QgLSAke21ldGhvZH0gXFxuIFBhcmFtcyAtICR7cGFyYW1zfWBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvcmUgPSB0aGlzLmNvbnRleHQuZ2V0Q29yZSgpO1xuICAgICAgICBpZiAoIWNvcmUpIHtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPTiBTREsgSlMgTGlicmFyeSBkb2VzblxcJ3Qgc2V0IHVwJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgc3Bhbi5maW5pc2goKTtcbiAgICAgICAgcmV0dXJuIHByb207XG4gICAgfVxufVxuIl19