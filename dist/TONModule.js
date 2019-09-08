"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TONModule = exports.TONModuleContextHelper = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/*
 * Copyright 2018-2019 TON DEV SOLUTIONS LTD.
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
var TONModuleContextHelper = {
  requiredLibrary: function requiredLibrary(context) {
    var library = context.optionalLibrary();

    if (library) {
      return library;
    }

    var message = 'TON SDK JS Library doesn\'t set up';
    console.error(message);
    throw new Error(message);
  },
  requestLibrary: function requestLibrary(context, method, params) {
    var _native = TONModuleContextHelper.requiredLibrary(context);

    return new Promise(function (resolve, reject) {
      _native.request(method, params !== undefined ? JSON.stringify(params) || '' : '', function (resultJson, errorJson) {
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
};
exports.TONModuleContextHelper = TONModuleContextHelper;

var TONModule =
/*#__PURE__*/
function () {
  function TONModule(context) {
    (0, _classCallCheck2["default"])(this, TONModule);
    (0, _defineProperty2["default"])(this, "context", void 0);
    this.context = context;
  } // Module


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
  }, {
    key: "requestLibrary",
    value: function requestLibrary(method, params) {
      return TONModuleContextHelper.requestLibrary(this.context, method, params);
    }
  }]);
  return TONModule;
}();

exports.TONModule = TONModule;
(0, _defineProperty2["default"])(TONModule, "moduleName", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlQ29udGV4dEhlbHBlciIsInJlcXVpcmVkTGlicmFyeSIsImNvbnRleHQiLCJsaWJyYXJ5Iiwib3B0aW9uYWxMaWJyYXJ5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwicmVxdWVzdExpYnJhcnkiLCJtZXRob2QiLCJwYXJhbXMiLCJuYXRpdmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIiwiVE9OTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFlTyxJQUFNQSxzQkFBc0IsR0FBRztBQUNsQ0MsRUFBQUEsZUFEa0MsMkJBQ2xCQyxPQURrQixFQUMyQjtBQUN6RCxRQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsZUFBUixFQUFoQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDVCxhQUFPQSxPQUFQO0FBQ0g7O0FBQ0QsUUFBTUUsT0FBTyxHQUFHLG9DQUFoQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsT0FBZDtBQUNBLFVBQU0sSUFBSUcsS0FBSixDQUFVSCxPQUFWLENBQU47QUFDSCxHQVRpQztBQVdsQ0ksRUFBQUEsY0FYa0MsMEJBWTlCUCxPQVo4QixFQWE5QlEsTUFiOEIsRUFjOUJDLE1BZDhCLEVBZWY7QUFDZixRQUFNQyxPQUFNLEdBQUdaLHNCQUFzQixDQUFDQyxlQUF2QixDQUF1Q0MsT0FBdkMsQ0FBZjs7QUFDQSxXQUFPLElBQUlXLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUgsTUFBQUEsT0FBTSxDQUFDSSxPQUFQLENBQ0lOLE1BREosRUFFSUMsTUFBTSxLQUFLTSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNTLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixZQUFJQSxTQUFKLEVBQWU7QUFDWE4sVUFBQUEsTUFBTSxDQUFDRyxJQUFJLENBQUNJLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxTQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQk4sVUFBQUEsT0FBTyxDQUFDSSxJQUFJLENBQUNJLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxTQUZNLE1BRUE7QUFDSE4sVUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osT0FYTDtBQWFILEtBZE0sQ0FBUDtBQWVIO0FBaENpQyxDQUEvQjs7O0lBbUNNUyxTOzs7QUFLVCxxQkFBWXJCLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FLK0JRLE0sRUFBZ0JDLE0sRUFBa0M7QUFDN0UsYUFBT1gsc0JBQXNCLENBQUNTLGNBQXZCLENBQXNDLEtBQUtQLE9BQTNDLEVBQW9EUSxNQUFwRCxFQUE0REMsTUFBNUQsQ0FBUDtBQUNIOzs7Ozs7aUNBaEJRWSxTIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcywgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIG5vLXVuZGVmICovXG5leHBvcnQgaW50ZXJmYWNlIFRPTkNsaWVudExpYnJhcnkge1xuICAgIHJlcXVlc3Q6IChcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtc0pzb246IHN0cmluZyxcbiAgICAgICAgb25SZXN1bHQ6IChyZXN1bHRKc29uOiBzdHJpbmcsIGVycm9ySnNvbjogc3RyaW5nKSA9PiB2b2lkLFxuICAgICkgPT4gdm9pZCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUT05Nb2R1bGVDb250ZXh0IHtcbiAgICBvcHRpb25hbExpYnJhcnkoKTogP1RPTkNsaWVudExpYnJhcnksXG5cbiAgICBnZXRNb2R1bGU8VD4oTW9kdWxlQ2xhc3M6IHR5cGVvZiBUT05Nb2R1bGUpOiBULFxufVxuXG5leHBvcnQgY29uc3QgVE9OTW9kdWxlQ29udGV4dEhlbHBlciA9IHtcbiAgICByZXF1aXJlZExpYnJhcnkoY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCk6IFRPTkNsaWVudExpYnJhcnkge1xuICAgICAgICBjb25zdCBsaWJyYXJ5ID0gY29udGV4dC5vcHRpb25hbExpYnJhcnkoKTtcbiAgICAgICAgaWYgKGxpYnJhcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBsaWJyYXJ5O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnVE9OIFNESyBKUyBMaWJyYXJ5IGRvZXNuXFwndCBzZXQgdXAnO1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSxcblxuICAgIHJlcXVlc3RMaWJyYXJ5PFBhcmFtcywgUmVzdWx0PihcbiAgICAgICAgY29udGV4dDogVE9OTW9kdWxlQ29udGV4dCxcbiAgICAgICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgICAgIHBhcmFtcz86IFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICBjb25zdCBuYXRpdmUgPSBUT05Nb2R1bGVDb250ZXh0SGVscGVyLnJlcXVpcmVkTGlicmFyeShjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlOiAoUmVzdWx0KSA9PiB2b2lkLCByZWplY3Q6IChFcnJvcikgPT4gdm9pZCkgPT4ge1xuICAgICAgICAgICAgbmF0aXZlLnJlcXVlc3QoXG4gICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgIHBhcmFtcyAhPT0gdW5kZWZpbmVkID8gKEpTT04uc3RyaW5naWZ5KHBhcmFtcykgfHwgJycpIDogJycsXG4gICAgICAgICAgICAgICAgKHJlc3VsdEpzb24sIGVycm9ySnNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoSlNPTi5wYXJzZShlcnJvckpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHRKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKEpTT04ucGFyc2UocmVzdWx0SnNvbikpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgoe306IGFueSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5leHBvcnQgY2xhc3MgVE9OTW9kdWxlIHtcbiAgICBzdGF0aWMgbW9kdWxlTmFtZTogc3RyaW5nO1xuXG4gICAgY29udGV4dDogVE9OTW9kdWxlQ29udGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICAvLyBNb2R1bGVcbiAgICBhc3luYyBzZXR1cCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICByZXF1ZXN0TGlicmFyeTxQYXJhbXMsIFJlc3VsdD4obWV0aG9kOiBzdHJpbmcsIHBhcmFtcz86IFBhcmFtcyk6IFByb21pc2U8UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBUT05Nb2R1bGVDb250ZXh0SGVscGVyLnJlcXVlc3RMaWJyYXJ5KHRoaXMuY29udGV4dCwgbWV0aG9kLCBwYXJhbXMpO1xuICAgIH1cbn1cbiJdfQ==