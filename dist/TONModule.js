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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlIiwiY29udGV4dCIsIm1ldGhvZCIsInBhcmFtcyIsInAiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29yZSIsImdldENvcmUiLCJFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInJlc3VsdEpzb24iLCJlcnJvckpzb24iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFFQTs7QUF1RkE7Ozs7O0lBS2FBLFM7OztBQUdUOzs7O0FBS0E7Ozs7Ozs7QUFPQSxxQkFBWUMsT0FBWixFQUF1QztBQUFBO0FBQUE7QUFDbkMsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0gsRyxDQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7O2dDQU00QkMsTSxFQUFnQkMsTSxFQUFrQztBQUMxRSxVQUFNQyxDQUFDLEdBQUdELE1BQU0sS0FBS0UsU0FBWCxHQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE1BQWYsS0FBMEIsRUFBbEQsR0FBd0QsRUFBbEU7QUFDQSxVQUFNSyxJQUFJLEdBQUcsS0FBS1AsT0FBTCxDQUFhUSxPQUFiLEVBQWI7O0FBQ0EsVUFBSSxDQUFDRCxJQUFMLEVBQVc7QUFDUCxjQUFNLElBQUlFLEtBQUosQ0FBVSxvQ0FBVixDQUFOO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUE0QkMsTUFBNUIsRUFBd0Q7QUFDdkVMLFFBQUFBLElBQUksQ0FBQ00sT0FBTCxDQUNJWixNQURKLEVBRUlDLE1BQU0sS0FBS0UsU0FBWCxHQUF3QkMsSUFBSSxDQUFDQyxTQUFMLENBQWVKLE1BQWYsS0FBMEIsRUFBbEQsR0FBd0QsRUFGNUQsRUFHSSxVQUFDWSxVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDdkIsY0FBSUEsU0FBSixFQUFlO0FBQ1hILFlBQUFBLE1BQU0sQ0FBQ1AsSUFBSSxDQUFDVyxLQUFMLENBQVdELFNBQVgsQ0FBRCxDQUFOO0FBQ0gsV0FGRCxNQUVPLElBQUlELFVBQUosRUFBZ0I7QUFDbkJILFlBQUFBLE9BQU8sQ0FBQ04sSUFBSSxDQUFDVyxLQUFMLENBQVdGLFVBQVgsQ0FBRCxDQUFQO0FBQ0gsV0FGTSxNQUVBO0FBQ0hILFlBQUFBLE9BQU8sQ0FBRSxFQUFGLENBQVA7QUFDSDtBQUNKLFNBWEw7QUFhSCxPQWRNLENBQVA7QUFlSDs7Ozs7O2lDQXhEUVosUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCBuby11bmRlZiAqL1xuXG4vLyBEZXByZWNhdGVkOiBUT05DbGllbnRDb3JlIHYwLjE3LjBcbmltcG9ydCB7IFNwYW4sIFNwYW5Db250ZXh0LCBTcGFuT3B0aW9ucywgVHJhY2VyIH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVE9OQ2xpZW50TGlicmFyeSB7XG4gICAgcmVxdWVzdChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICk6IHZvaWQ7XG59XG5cblxuLyoqXG4gKiBUT04gQ2xpZW50IENvcmUgcHVibGljIGludGVyZmFjZVxuICogQ2xpZW50IENvcmUgcGVyZm9ybXMgY2xpZW50IHRhc2tzIHRocm91Z2ggc2luZ2xlIEpTT04tYmFzZWQgdHVubmVsaW5nIG1ldGhvZCBjYWxsZWQgYHJlcXVlc3RgXG4gKiBFdmVyeSBjb3JlIHJlcXVlc3QgY2FuIGJlIHBlcmZvcm1lZCBpbiB0d28gd2F5czpcbiAqIC0gc3luYyBjYWxsIHdpdGggYHJlcXVlc3RTeW5jYCBtZXRob2RcbiAqIC0gYXN5bmMgcmVxdWVzdCB3aXRoIGByZXF1ZXN0YCBtZXRob2RcbiAqIENsaWVudCBpcyBhIHN0YXRlZnVsIG9iamVjdC4gRWFjaCBjbGllbnQgc3RhdGUgY2FsbGVkIGEgYGNvbnRleHRgLlxuICogU28geW91IG11c3QgdXNlIGZvbGxvd2luZyBydWxlcyB3aGVuIHdvcmtpbmcgd2l0aCBhIGNvcmU6XG4gKiAtIGNyZWF0ZSBhIGNvbnRleHQgb2JqZWN0IGFuZCByZWNlaXZlIGNvbnRleHQgaGFuZGxlIHdpdGggYGNyZWF0ZUNvbnRleHRgXG4gKiAtIGNvbmZpZ3VyZSBgY29udGV4dGAgd2l0aCBgY29uZmlnYCBpbnZvY2F0aW9uIG1ldGhvZFxuICogLSBwYXNzIGNvbnRleHQgaGFuZGxlIGluIGByZXF1ZXN0YCBhbmQgYGNhbGxgXG4gKiAtIHdoZW4geW91IGRvbid0IG5lZWQgY29udGV4dCB5b3UgbXVzdCBkZXN0cm95IGl0IHdpdGggYGRlc3Ryb3lDb250ZXh0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudENvcmUge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgY29udGV4dCBhbmQgcmV0dXJucyBoYW5kbGUgdG8gaXRcbiAgICAgKi9cbiAgICBjcmVhdGVDb250ZXh0KCk6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgY29udGV4dCB3aXRoIHNwZWNpZmllZCBoYW5kbGVcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGRlc3Ryb3lDb250ZXh0KGNvbnRleHQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBQb3N0IGFzeW5jIHJlcXVlc3QgdG8gY29yZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25SZXN1bHRcbiAgICAgKi9cbiAgICByZXF1ZXN0KFxuICAgICAgICBjb250ZXh0OiBudW1iZXIsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApOiB2b2lkO1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBzeW5jIHJlcXVlc3QgdG8gY29yZSBhbmQgcmV0dXJuIHJlc3VsdFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb250ZXh0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXNKc29uXG4gICAgICovXG4gICAgcmVxdWVzdFN5bmMoXG4gICAgICAgIGNvbnRleHQ6IG51bWJlcixcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZ1xuICAgICk6IHtcbiAgICAgICAgcmVzdWx0SnNvbjogc3RyaW5nLFxuICAgICAgICBlcnJvckpzb246IHN0cmluZ1xuICAgIH07XG59XG5cbi8qKlxuICogQ29udGV4dCBpbiB3aGljaCBtb2R1bGVzIGFyZSB3b3JraW5nXG4gKiBBbGwgbW9kdWxlIGluc3RhbmNlcyBhcmUgYm91bmQgdG8gc2luZ2xlIGNvbnRleHRcbiAqIGFuZCBjYW4gY29tbXVuaWNhdGUgd2l0aCBzaWJsaW5nIG1vZHVsZXMuXG4gKiBDb250ZXh0IHByb3ZpZGVzIGJvdW5kZWQgbW9kdWxlcyB3aXRoOlxuICogLSBhY2Nlc3MgdG8gY29tbW9uIGNsaWVudCBjb3JlIGFuZCBwcmVjb25maWd1cmVkIGNvcmUgY29udGV4dFxuICogLSBhY2Nlc3MgdG8gc2libGluZyBtb2R1bGVzICh1c2luZyBhIG1vZHVsZSBjbGFzcyBhcyBhbiBpZClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcblxuICAgIHRyYWNlPFQ+KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGY6IChzcGFuOiBTcGFuKSA9PiBQcm9taXNlPFQ+LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dClcbiAgICApOiBQcm9taXNlPFQ+LFxufVxuXG4vKipcbiAqIFRPTiBDbGllbnQgbW9kdWxlXG4gKiBFYWNoIG1vZHVsZSBtdXN0IHByb3ZpZGVzIGEgY29tbW9uIGNvbnN0cnVjdG9yIGFuZCBhIGBzZXR1cGAgbWV0aG9kLlxuICogQWxzbyBlYWNoIHNwZWNpZmljIG1vZHVsZSBwcm92aWRlcyBzcGVjaWZpYyBzZXQgb2YgbWV0aG9kcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRleHQgdG8gd2hpY2ggdGhpcyBtb2R1bGUgaXMgYm91bmRcbiAgICAgKi9cbiAgICBjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBtb2R1bGUgaW5zdGFuY2UuXG4gICAgICogTm90ZSB0aGF0IG1vZHVsZSBtdXN0IG5vdCBnZXRzIHJlZmVyZW5jZXMgdG8gb3RoZXIgbW9kdWxlcyBoZXJlXG4gICAgICogKGZvciB0aGlzIHB1cnBvc2UgdGhlcmUgaXMgYSBgc2V0dXBgIG1ldGhvZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udGV4dFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIG5lY2Vzc2FyeSBzZXR1cCBvZiB0aGlzIG1vZHVsZS5cbiAgICAgKiBUaGUgbWV0aG9kIGlzIGEgc2FmZSBwbGFjZSB0byBnZXQgYSByZWZlcmVuY2VzIHRvIG90aGVyIG1vZHVsZXMgZnJvbSB0aGUgYGNvbnRleHRgLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYSBjb3JlIGZvciBzcGVjaWZpZWQgbWV0aG9kIGFuZCBwYXJhbWV0ZXJzLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2QgTWV0aG9kIG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIE1ldGhvZCBwYXJhbWV0ZXJzIHdpbGwgYmUgc3RyaW5naWZpZWQgaW50byBKU09OXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgICAqL1xuICAgIHJlcXVlc3RDb3JlPFBhcmFtcywgUmVzdWx0PihtZXRob2Q6IHN0cmluZywgcGFyYW1zPzogUGFyYW1zKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcCA9IHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJyc7XG4gICAgICAgIGNvbnN0IGNvcmUgPSB0aGlzLmNvbnRleHQuZ2V0Q29yZSgpO1xuICAgICAgICBpZiAoIWNvcmUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVE9OIFNESyBKUyBMaWJyYXJ5IGRvZXNuXFwndCBzZXQgdXAnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmU6IChSZXN1bHQpID0+IHZvaWQsIHJlamVjdDogKEVycm9yKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb3JlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==