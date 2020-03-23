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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTs7QUF1RkE7Ozs7O0lBS2FBLFM7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Z0NBTTRCQyxNLEVBQWdCQyxNLEVBQWtDO0FBQzFFLFVBQU1DLENBQUMsR0FBR0QsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUFsRTtBQUNBLFVBQU1LLElBQUksR0FBRyxLQUFLUCxPQUFMLENBQWFRLE9BQWIsRUFBYjs7QUFDQSxVQUFJLENBQUNELElBQUwsRUFBVztBQUNQLGNBQU0sSUFBSUUsS0FBSixDQUFVLG9DQUFWLENBQU47QUFDSDs7QUFDRCxhQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUwsUUFBQUEsSUFBSSxDQUFDTSxPQUFMLENBQ0laLE1BREosRUFFSUMsTUFBTSxLQUFLRSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUosTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNZLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixjQUFJQSxTQUFKLEVBQWU7QUFDWEgsWUFBQUEsTUFBTSxDQUFDUCxJQUFJLENBQUNXLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxXQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQkgsWUFBQUEsT0FBTyxDQUFDTixJQUFJLENBQUNXLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxXQUZNLE1BRUE7QUFDSEgsWUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osU0FYTDtBQWFILE9BZE0sQ0FBUDtBQWVIOzs7Ozs7aUNBeERRWixTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMjAgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5cbi8vIERlcHJlY2F0ZWQ6IFRPTkNsaWVudENvcmUgdjAuMTcuMFxuaW1wb3J0IHsgU3BhbiwgU3BhbkNvbnRleHQsIFNwYW5PcHRpb25zLCBUcmFjZXIgfSBmcm9tIFwib3BlbnRyYWNpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICByZXF1ZXN0KFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcbn1cblxuXG4vKipcbiAqIFRPTiBDbGllbnQgQ29yZSBwdWJsaWMgaW50ZXJmYWNlXG4gKiBDbGllbnQgQ29yZSBwZXJmb3JtcyBjbGllbnQgdGFza3MgdGhyb3VnaCBzaW5nbGUgSlNPTi1iYXNlZCB0dW5uZWxpbmcgbWV0aG9kIGNhbGxlZCBgcmVxdWVzdGBcbiAqIEV2ZXJ5IGNvcmUgcmVxdWVzdCBjYW4gYmUgcGVyZm9ybWVkIGluIHR3byB3YXlzOlxuICogLSBzeW5jIGNhbGwgd2l0aCBgcmVxdWVzdFN5bmNgIG1ldGhvZFxuICogLSBhc3luYyByZXF1ZXN0IHdpdGggYHJlcXVlc3RgIG1ldGhvZFxuICogQ2xpZW50IGlzIGEgc3RhdGVmdWwgb2JqZWN0LiBFYWNoIGNsaWVudCBzdGF0ZSBjYWxsZWQgYSBgY29udGV4dGAuXG4gKiBTbyB5b3UgbXVzdCB1c2UgZm9sbG93aW5nIHJ1bGVzIHdoZW4gd29ya2luZyB3aXRoIGEgY29yZTpcbiAqIC0gY3JlYXRlIGEgY29udGV4dCBvYmplY3QgYW5kIHJlY2VpdmUgY29udGV4dCBoYW5kbGUgd2l0aCBgY3JlYXRlQ29udGV4dGBcbiAqIC0gY29uZmlndXJlIGBjb250ZXh0YCB3aXRoIGBjb25maWdgIGludm9jYXRpb24gbWV0aG9kXG4gKiAtIHBhc3MgY29udGV4dCBoYW5kbGUgaW4gYHJlcXVlc3RgIGFuZCBgY2FsbGBcbiAqIC0gd2hlbiB5b3UgZG9uJ3QgbmVlZCBjb250ZXh0IHlvdSBtdXN0IGRlc3Ryb3kgaXQgd2l0aCBgZGVzdHJveUNvbnRleHRgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50Q29yZSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBjb250ZXh0IGFuZCByZXR1cm5zIGhhbmRsZSB0byBpdFxuICAgICAqL1xuICAgIGNyZWF0ZUNvbnRleHQoKTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSBjb250ZXh0IHdpdGggc3BlY2lmaWVkIGhhbmRsZVxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgZGVzdHJveUNvbnRleHQoY29udGV4dDogbnVtYmVyKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBvc3QgYXN5bmMgcmVxdWVzdCB0byBjb3JlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblJlc3VsdFxuICAgICAqL1xuICAgIHJlcXVlc3QoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHN5bmMgcmVxdWVzdCB0byBjb3JlIGFuZCByZXR1cm4gcmVzdWx0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRleHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtc0pzb25cbiAgICAgKi9cbiAgICByZXF1ZXN0U3luYyhcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nXG4gICAgKToge1xuICAgICAgICByZXN1bHRKc29uOiBzdHJpbmcsXG4gICAgICAgIGVycm9ySnNvbjogc3RyaW5nXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb250ZXh0IGluIHdoaWNoIG1vZHVsZXMgYXJlIHdvcmtpbmdcbiAqIEFsbCBtb2R1bGUgaW5zdGFuY2VzIGFyZSBib3VuZCB0byBzaW5nbGUgY29udGV4dFxuICogYW5kIGNhbiBjb21tdW5pY2F0ZSB3aXRoIHNpYmxpbmcgbW9kdWxlcy5cbiAqIENvbnRleHQgcHJvdmlkZXMgYm91bmRlZCBtb2R1bGVzIHdpdGg6XG4gKiAtIGFjY2VzcyB0byBjb21tb24gY2xpZW50IGNvcmUgYW5kIHByZWNvbmZpZ3VyZWQgY29yZSBjb250ZXh0XG4gKiAtIGFjY2VzcyB0byBzaWJsaW5nIG1vZHVsZXMgKHVzaW5nIGEgbW9kdWxlIGNsYXNzIGFzIGFuIGlkKVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTk1vZHVsZUNvbnRleHQge1xuICAgIGdldENvcmUoKTogP1RPTkNsaWVudExpYnJhcnksXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxuXG4gICAgdHJhY2U8VD4oXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZjogKHNwYW46IFNwYW4pID0+IFByb21pc2U8VD4sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICk6IFByb21pc2U8VD4sXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhIGNvcmUgZm9yIHNwZWNpZmllZCBtZXRob2QgYW5kIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBNZXRob2QgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgTWV0aG9kIHBhcmFtZXRlcnMgd2lsbCBiZSBzdHJpbmdpZmllZCBpbnRvIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgcmVxdWVzdENvcmU8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBwID0gcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJztcbiAgICAgICAgY29uc3QgY29yZSA9IHRoaXMuY29udGV4dC5nZXRDb3JlKCk7XG4gICAgICAgIGlmICghY29yZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUT04gU0RLIEpTIExpYnJhcnkgZG9lc25cXCd0IHNldCB1cCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKFJlc3VsdCkgPT4gdm9pZCwgcmVqZWN0OiAoRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgIGNvcmUucmVxdWVzdChcbiAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgcGFyYW1zICE9PSB1bmRlZmluZWQgPyAoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSB8fCAnJykgOiAnJyxcbiAgICAgICAgICAgICAgICAocmVzdWx0SnNvbiwgZXJyb3JKc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvckpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChKU09OLnBhcnNlKGVycm9ySnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdEpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShyZXN1bHRKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCh7fTogYW55KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19