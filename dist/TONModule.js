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
    value: function requestCore(method, params) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsImNvcmUiLCJnZXRDb3JlIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7QUF1REE7Ozs7Ozs7OztBQWNBOzs7OztJQUthQSxTOzs7QUFHVDs7OztBQUtBOzs7Ozs7O0FBT0EscUJBQVlDLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7OztnQ0FNNEJDLE0sRUFBZ0JDLE0sRUFBa0M7QUFDMUUsVUFBTUMsSUFBSSxHQUFHLEtBQUtILE9BQUwsQ0FBYUksT0FBYixFQUFiOztBQUNBLFVBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1AsY0FBTSxJQUFJRSxLQUFKLENBQVUsb0NBQVYsQ0FBTjtBQUNIOztBQUNELGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBNEJDLE1BQTVCLEVBQXdEO0FBQ3ZFTCxRQUFBQSxJQUFJLENBQUNNLE9BQUwsQ0FDSVIsTUFESixFQUVJQyxNQUFNLEtBQUtRLFNBQVgsR0FBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixNQUFmLEtBQTBCLEVBQWxELEdBQXdELEVBRjVELEVBR0ksVUFBQ1csVUFBRCxFQUFhQyxTQUFiLEVBQTJCO0FBQ3ZCLGNBQUlBLFNBQUosRUFBZTtBQUNYTixZQUFBQSxNQUFNLENBQUNHLElBQUksQ0FBQ0ksS0FBTCxDQUFXRCxTQUFYLENBQUQsQ0FBTjtBQUNILFdBRkQsTUFFTyxJQUFJRCxVQUFKLEVBQWdCO0FBQ25CTixZQUFBQSxPQUFPLENBQUNJLElBQUksQ0FBQ0ksS0FBTCxDQUFXRixVQUFYLENBQUQsQ0FBUDtBQUNILFdBRk0sTUFFQTtBQUNITixZQUFBQSxPQUFPLENBQUUsRUFBRixDQUFQO0FBQ0g7QUFDSixTQVhMO0FBYUgsT0FkTSxDQUFQO0FBZUg7Ozs7OztpQ0F2RFFSLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8vIEBmbG93XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzLCBuby11c2UtYmVmb3JlLWRlZmluZSwgbm8tdW5kZWYgKi9cblxuLy8gRGVwcmVjYXRlZDogVE9OQ2xpZW50Q29yZSB2MC4xNy4wXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudExpYnJhcnkge1xuICAgIHJlcXVlc3QoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xufVxuXG5cbi8qKlxuICogVE9OIENsaWVudCBDb3JlIHB1YmxpYyBpbnRlcmZhY2VcbiAqIENsaWVudCBDb3JlIHBlcmZvcm1zIGNsaWVudCB0YXNrcyB0aHJvdWdoIHNpbmdsZSBKU09OLWJhc2VkIHR1bm5lbGluZyBtZXRob2QgY2FsbGVkIGByZXF1ZXN0YFxuICogRXZlcnkgY29yZSByZXF1ZXN0IGNhbiBiZSBwZXJmb3JtZWQgaW4gdHdvIHdheXM6XG4gKiAtIHN5bmMgY2FsbCB3aXRoIGByZXF1ZXN0U3luY2AgbWV0aG9kXG4gKiAtIGFzeW5jIHJlcXVlc3Qgd2l0aCBgcmVxdWVzdGAgbWV0aG9kXG4gKiBDbGllbnQgaXMgYSBzdGF0ZWZ1bCBvYmplY3QuIEVhY2ggY2xpZW50IHN0YXRlIGNhbGxlZCBhIGBjb250ZXh0YC5cbiAqIFNvIHlvdSBtdXN0IHVzZSBmb2xsb3dpbmcgcnVsZXMgd2hlbiB3b3JraW5nIHdpdGggYSBjb3JlOlxuICogLSBjcmVhdGUgYSBjb250ZXh0IG9iamVjdCBhbmQgcmVjZWl2ZSBjb250ZXh0IGhhbmRsZSB3aXRoIGBjcmVhdGVDb250ZXh0YFxuICogLSBjb25maWd1cmUgYGNvbnRleHRgIHdpdGggYGNvbmZpZ2AgaW52b2NhdGlvbiBtZXRob2RcbiAqIC0gcGFzcyBjb250ZXh0IGhhbmRsZSBpbiBgcmVxdWVzdGAgYW5kIGBjYWxsYFxuICogLSB3aGVuIHlvdSBkb24ndCBuZWVkIGNvbnRleHQgeW91IG11c3QgZGVzdHJveSBpdCB3aXRoIGBkZXN0cm95Q29udGV4dGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRDb3JlIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IGNvbnRleHQgYW5kIHJldHVybnMgaGFuZGxlIHRvIGl0XG4gICAgICovXG4gICAgY3JlYXRlQ29udGV4dCgpOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGNvbnRleHQgd2l0aCBzcGVjaWZpZWQgaGFuZGxlXG4gICAgICogQHBhcmFtIGNvbnRleHRcbiAgICAgKi9cbiAgICBkZXN0cm95Q29udGV4dChjb250ZXh0OiBudW1iZXIpOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUG9zdCBhc3luYyByZXF1ZXN0IHRvIGNvcmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uUmVzdWx0XG4gICAgICovXG4gICAgcmVxdWVzdChcbiAgICAgICAgY29udGV4dDogbnVtYmVyLFxuICAgICAgICBtZXRob2Q6IHN0cmluZyxcbiAgICAgICAgcGFyYW1zSnNvbjogc3RyaW5nLFxuICAgICAgICBvblJlc3VsdDogKHJlc3VsdEpzb246IHN0cmluZywgZXJyb3JKc29uOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgKTogdm9pZDtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gc3luYyByZXF1ZXN0IHRvIGNvcmUgYW5kIHJldHVybiByZXN1bHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zSnNvblxuICAgICAqL1xuICAgIHJlcXVlc3RTeW5jKFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmdcbiAgICApOiB7XG4gICAgICAgIHJlc3VsdEpzb246IHN0cmluZyxcbiAgICAgICAgZXJyb3JKc29uOiBzdHJpbmdcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbnRleHQgaW4gd2hpY2ggbW9kdWxlcyBhcmUgd29ya2luZ1xuICogQWxsIG1vZHVsZSBpbnN0YW5jZXMgYXJlIGJvdW5kIHRvIHNpbmdsZSBjb250ZXh0XG4gKiBhbmQgY2FuIGNvbW11bmljYXRlIHdpdGggc2libGluZyBtb2R1bGVzLlxuICogQ29udGV4dCBwcm92aWRlcyBib3VuZGVkIG1vZHVsZXMgd2l0aDpcbiAqIC0gYWNjZXNzIHRvIGNvbW1vbiBjbGllbnQgY29yZSBhbmQgcHJlY29uZmlndXJlZCBjb3JlIGNvbnRleHRcbiAqIC0gYWNjZXNzIHRvIHNpYmxpbmcgbW9kdWxlcyAodXNpbmcgYSBtb2R1bGUgY2xhc3MgYXMgYW4gaWQpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgZ2V0Q29yZSgpOiA/VE9OQ2xpZW50TGlicmFyeSxcblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQsXG59XG5cbi8qKlxuICogVE9OIENsaWVudCBtb2R1bGVcbiAqIEVhY2ggbW9kdWxlIG11c3QgcHJvdmlkZXMgYSBjb21tb24gY29uc3RydWN0b3IgYW5kIGEgYHNldHVwYCBtZXRob2QuXG4gKiBBbHNvIGVhY2ggc3BlY2lmaWMgbW9kdWxlIHByb3ZpZGVzIHNwZWNpZmljIHNldCBvZiBtZXRob2RzLlxuICovXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGV4dCB0byB3aGljaCB0aGlzIG1vZHVsZSBpcyBib3VuZFxuICAgICAqL1xuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIG1vZHVsZSBpbnN0YW5jZS5cbiAgICAgKiBOb3RlIHRoYXQgbW9kdWxlIG11c3Qgbm90IGdldHMgcmVmZXJlbmNlcyB0byBvdGhlciBtb2R1bGVzIGhlcmVcbiAgICAgKiAoZm9yIHRoaXMgcHVycG9zZSB0aGVyZSBpcyBhIGBzZXR1cGAgbWV0aG9kKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb250ZXh0XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIC8vIE1vZHVsZVxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbmVjZXNzYXJ5IHNldHVwIG9mIHRoaXMgbW9kdWxlLlxuICAgICAqIFRoZSBtZXRob2QgaXMgYSBzYWZlIHBsYWNlIHRvIGdldCBhIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBmcm9tIHRoZSBgY29udGV4dGAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICAgKi9cbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0cyBhIGNvcmUgZm9yIHNwZWNpZmllZCBtZXRob2QgYW5kIHBhcmFtZXRlcnMuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZCBNZXRob2QgbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgTWV0aG9kIHBhcmFtZXRlcnMgd2lsbCBiZSBzdHJpbmdpZmllZCBpbnRvIEpTT05cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAgICovXG4gICAgcmVxdWVzdENvcmU8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBjb3JlID0gdGhpcy5jb250ZXh0LmdldENvcmUoKTtcbiAgICAgICAgaWYgKCFjb3JlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPTiBTREsgSlMgTGlicmFyeSBkb2VzblxcJ3Qgc2V0IHVwJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgY29yZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=