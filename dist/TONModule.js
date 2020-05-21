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

var _opentracing = require("opentracing");

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
      var _setup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
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
(0, _defineProperty2["default"])(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTs7QUEyRkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Z0NBTTRCQyxNLEVBQWdCQyxNLEVBQWtDO0FBQzFFLFVBQU1DLENBQUMsR0FBR0QsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUFsRTtBQUNBLFVBQU1LLElBQUksR0FBRyxLQUFLUCxPQUFMLENBQWFRLE9BQWIsRUFBYjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNQLGNBQU0sSUFBSUUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDSDs7QUFDRCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUwsUUFBQUEsSUFBSSxDQUFDTSxPQUFMLENBQ0laLE1BREosRUFFSUMsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNZLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixjQUFJQSxTQUFKLEVBQWU7QUFDWEgsWUFBQUEsTUFBTSxDQUFDUCxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxXQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQkgsWUFBQUEsT0FBTyxDQUFDTixJQUFJLENBQUNXLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxXQUZNLE1BRUE7QUFDSEgsWUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osU0FYTDtBQWFILE9BZE0sQ0FBUDtBQWVIOzs7Ozs7aUNBeERRWixTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5cbi8vIERlcHJlY2F0ZWQ6IFRPTkNsaWVudENvcmUgdjAuMTcuMFxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQsIFNwYW5PcHRpb25zLCBUcmFjZXIgfSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBwdWJsaWMgaW50ZXJmYWNlXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgcmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBzeW5jIGNhbGwgd2l0aCBgcmVxdWVzdFN5bmNgIG1ldGhvZFxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYHJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgaW4gYHJlcXVlc3RgIGFuZCBgY2FsbGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgZGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqL1xuICAgIGNyZWF0ZUNvbnRleHQoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgZGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHN5bmMgcmVxdWVzdCB0byBjb3JlIGFuZCByZXR1cm4gcmVzdWx0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKi9cbiAgICByZXF1ZXN0U3luYyhcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nXG4gICAgKToge1xuICAgICAgICByZXN1bHRKc29uOiBzdHJpbmcsXG4gICAgICAgIGVycm9ySnNvbjogc3RyaW5nXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmUoKTogP1RPTkNsaWVudExpYnJhcnksXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgc2VydmVyVGltZURlbHRhKCk6IFByb21pc2U8bnVtYmVyPixcblxuICAgIHNlcnZlck5vdygpOiBQcm9taXNlPG51bWJlcj4sXG5cbiAgICB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPixcbn1cblxuLyoqXG4gKiBUT04gQ2xpZW50IG1vZHVsZVxuICogRWFjaCBtb2R1bGUgbXVzdCBwcm92aWRlcyBhIGNvbW1vbiBjb25zdHJ1Y3RvciBhbmQgYSBgc2V0dXBgIG1ldGhvZC5cbiAqIEFsc28gZWFjaCBzcGVjaWZpYyBtb2R1bGUgcHJvdmlkZXMgc3BlY2lmaWMgc2V0IG9mIG1ldGhvZHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUT05Nb2R1bGUge1xuICAgIHN0YXRpYyBtb2R1bGVOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb250ZXh0IHRvIHdoaWNoIHRoaXMgbW9kdWxlIGlzIGJvdW5kXG4gICAgICovXG4gICAgY29udGV4dDogVE9OTW9kdWxlQ29udGV4dDtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgbW9kdWxlIGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBtb2R1bGUgbXVzdCBub3QgZ2V0cyByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgaGVyZVxuICAgICAqIChmb3IgdGhpcyBwdXJwb3NlIHRoZXJlIGlzIGEgYHNldHVwYCBtZXRob2QpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxlXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBuZWNlc3Nhcnkgc2V0dXAgb2YgdGhpcyBtb2R1bGUuXG4gICAgICogVGhlIG1ldGhvZCBpcyBhIHNhZmUgcGxhY2UgdG8gZ2V0IGEgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGZyb20gdGhlIGBjb250ZXh0YC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIHNldHVwKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGEgY29yZSBmb3Igc3BlY2lmaWVkIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIE1ldGhvZCBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyBNZXRob2QgcGFyYW1ldGVycyB3aWxsIGJlIHN0cmluZ2lmaWVkIGludG8gSlNPTlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICAgKi9cbiAgICByZXF1ZXN0Q29yZTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHAgPSBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnO1xuICAgICAgICBjb25zdCBjb3JlID0gdGhpcy5jb250ZXh0LmdldENvcmUoKTtcbiAgICAgICAgaWYgKCFjb3JlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPTiBTREsgSlMgTGlicmFyeSBkb2VzblxcJ3Qgc2V0IHVwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=