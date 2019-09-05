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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05Nb2R1bGUuanMiXSwibmFtZXMiOlsiVE9OTW9kdWxlQ29udGV4dEhlbHBlciIsInJlcXVpcmVkTGlicmFyeSIsImNvbnRleHQiLCJsaWJyYXJ5Iiwib3B0aW9uYWxMaWJyYXJ5IiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwicmVxdWVzdExpYnJhcnkiLCJtZXRob2QiLCJwYXJhbXMiLCJuYXRpdmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJ1bmRlZmluZWQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0SnNvbiIsImVycm9ySnNvbiIsInBhcnNlIiwiVE9OTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFlTyxJQUFNQSxzQkFBc0IsR0FBRztBQUNsQ0MsRUFBQUEsZUFEa0MsMkJBQ2xCQyxPQURrQixFQUMyQjtBQUN6RCxRQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsZUFBUixFQUFoQjs7QUFDQSxRQUFJRCxPQUFKLEVBQWE7QUFDVCxhQUFPQSxPQUFQO0FBQ0g7O0FBQ0QsUUFBTUUsT0FBTyxHQUFHLG9DQUFoQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsT0FBZDtBQUNBLFVBQU0sSUFBSUcsS0FBSixDQUFVSCxPQUFWLENBQU47QUFDSCxHQVRpQztBQVdsQ0ksRUFBQUEsY0FYa0MsMEJBWTlCUCxPQVo4QixFQWE5QlEsTUFiOEIsRUFjOUJDLE1BZDhCLEVBZWY7QUFDZixRQUFNQyxPQUFNLEdBQUdaLHNCQUFzQixDQUFDQyxlQUF2QixDQUF1Q0MsT0FBdkMsQ0FBZjs7QUFDQSxXQUFPLElBQUlXLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQTRCQyxNQUE1QixFQUF3RDtBQUN2RUgsTUFBQUEsT0FBTSxDQUFDSSxPQUFQLENBQ0lOLE1BREosRUFFSUMsTUFBTSxLQUFLTSxTQUFYLEdBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsTUFBZixLQUEwQixFQUFsRCxHQUF3RCxFQUY1RCxFQUdJLFVBQUNTLFVBQUQsRUFBYUMsU0FBYixFQUEyQjtBQUN2QixZQUFJQSxTQUFKLEVBQWU7QUFDWE4sVUFBQUEsTUFBTSxDQUFDRyxJQUFJLENBQUNJLEtBQUwsQ0FBV0QsU0FBWCxDQUFELENBQU47QUFDSCxTQUZELE1BRU8sSUFBSUQsVUFBSixFQUFnQjtBQUNuQk4sVUFBQUEsT0FBTyxDQUFDSSxJQUFJLENBQUNJLEtBQUwsQ0FBV0YsVUFBWCxDQUFELENBQVA7QUFDSCxTQUZNLE1BRUE7QUFDSE4sVUFBQUEsT0FBTyxDQUFFLEVBQUYsQ0FBUDtBQUNIO0FBQ0osT0FYTDtBQWFILEtBZE0sQ0FBUDtBQWVIO0FBaENpQyxDQUEvQjs7O0lBbUNNUyxTOzs7QUFLVCxxQkFBWXJCLE9BQVosRUFBdUM7QUFBQTtBQUFBO0FBQ25DLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNILEcsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FLK0JRLE0sRUFBZ0JDLE0sRUFBa0M7QUFDN0UsYUFBT1gsc0JBQXNCLENBQUNTLGNBQXZCLENBQXNDLEtBQUtQLE9BQTNDLEVBQW9EUSxNQUFwRCxFQUE0REMsTUFBNUQsQ0FBUDtBQUNIOzs7Ozs7aUNBaEJRWSxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCBuby11bmRlZiAqL1xuZXhwb3J0IGludGVyZmFjZSBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICByZXF1ZXN0OiAoXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXNKc29uOiBzdHJpbmcsXG4gICAgICAgIG9uUmVzdWx0OiAocmVzdWx0SnNvbjogc3RyaW5nLCBlcnJvckpzb246IHN0cmluZykgPT4gdm9pZCxcbiAgICApID0+IHZvaWQsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVE9OTW9kdWxlQ29udGV4dCB7XG4gICAgb3B0aW9uYWxMaWJyYXJ5KCk6ID9UT05DbGllbnRMaWJyYXJ5LFxuXG4gICAgZ2V0TW9kdWxlPFQ+KE1vZHVsZUNsYXNzOiB0eXBlb2YgVE9OTW9kdWxlKTogVCxcbn1cblxuZXhwb3J0IGNvbnN0IFRPTk1vZHVsZUNvbnRleHRIZWxwZXIgPSB7XG4gICAgcmVxdWlyZWRMaWJyYXJ5KGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpOiBUT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgY29uc3QgbGlicmFyeSA9IGNvbnRleHQub3B0aW9uYWxMaWJyYXJ5KCk7XG4gICAgICAgIGlmIChsaWJyYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbGlicmFyeTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1RPTiBTREsgSlMgTGlicmFyeSBkb2VzblxcJ3Qgc2V0IHVwJztcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0sXG5cbiAgICByZXF1ZXN0TGlicmFyeTxQYXJhbXMsIFJlc3VsdD4oXG4gICAgICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQsXG4gICAgICAgIG1ldGhvZDogc3RyaW5nLFxuICAgICAgICBwYXJhbXM/OiBQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgbmF0aXZlID0gVE9OTW9kdWxlQ29udGV4dEhlbHBlci5yZXF1aXJlZExpYnJhcnkoY29udGV4dCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKFJlc3VsdCkgPT4gdm9pZCwgcmVqZWN0OiAoRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgICAgICAgIG5hdGl2ZS5yZXF1ZXN0KFxuICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXJhbXMgIT09IHVuZGVmaW5lZCA/IChKU09OLnN0cmluZ2lmeShwYXJhbXMpIHx8ICcnKSA6ICcnLFxuICAgICAgICAgICAgICAgIChyZXN1bHRKc29uLCBlcnJvckpzb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9ySnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KEpTT04ucGFyc2UoZXJyb3JKc29uKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0SnNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShKU09OLnBhcnNlKHJlc3VsdEpzb24pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKHt9OiBhbnkpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGNsYXNzIFRPTk1vZHVsZSB7XG4gICAgc3RhdGljIG1vZHVsZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0OiBUT05Nb2R1bGVDb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfVxuXG4gICAgLy8gTW9kdWxlXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIC8vXG4gICAgfVxuXG4gICAgcmVxdWVzdExpYnJhcnk8UGFyYW1zLCBSZXN1bHQ+KG1ldGhvZDogc3RyaW5nLCBwYXJhbXM/OiBQYXJhbXMpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gVE9OTW9kdWxlQ29udGV4dEhlbHBlci5yZXF1ZXN0TGlicmFyeSh0aGlzLmNvbnRleHQsIG1ldGhvZCwgcGFyYW1zKTtcbiAgICB9XG59XG4iXX0=