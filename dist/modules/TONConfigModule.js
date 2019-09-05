"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fragmentMatcherIntrospectionQuery = _interopRequireDefault(require("apollo-cache-inmemory/lib/fragmentMatcherIntrospectionQuery"));

var _TONModule2 = require("../TONModule");

var methods = {
  init: 'config.init',
  version: 'config.version'
};

function parseUrl(url) {
  var protocolSeparatorPos = url.indexOf('://');
  var protocolEnd = protocolSeparatorPos >= 0 ? protocolSeparatorPos + 3 : 0;
  var questionPos = url.indexOf('?', protocolEnd);
  var queryStart = questionPos >= 0 ? questionPos + 1 : url.length;
  var pathEnd = questionPos >= 0 ? questionPos : url.length;
  var pathSeparatorPos = url.indexOf('/', protocolEnd);
  var pathStart = pathSeparatorPos >= 0 ? pathSeparatorPos < pathEnd ? pathSeparatorPos : pathEnd : questionPos >= 0 ? questionPos : url.length;
  return {
    protocol: url.substring(0, protocolEnd),
    host: url.substring(protocolEnd, pathStart),
    path: url.substring(pathStart, pathEnd),
    query: url.substring(queryStart)
  };
}

function combineUrl(parts) {
  var path = parts.path;

  while (path.indexOf('//') >= 0) {
    path = path.replace('//', '/');
  }

  if (path !== '' && !path.startsWith('/')) {
    path = "/".concat(path);
  }

  return "".concat(parts.protocol).concat(parts.host).concat(path).concat(parts.query !== '' ? '?' : '').concat(parts.query);
}

function fixUrl(url, fixParts) {
  var parts = parseUrl(url);
  fixParts(parts);
  return combineUrl(parts);
}

function resolveServer(configured, def) {
  return fixUrl(configured || def, function (parts) {
    if (parts.protocol === '') {
      parts.protocol = 'https://';
    }
  });
}

function replacePrefix(s, prefix, newPrefix) {
  return "".concat(newPrefix).concat(s.substr(prefix.length));
}

function appendPath(url, path) {
  return fixUrl(url, function (parts) {
    parts.path = "".concat(parts.path, "/").concat(path);
  });
}

var defaultServer = 'services.tonlabs.io';

var TONConfigModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONConfigModule, _TONModule);

  function TONConfigModule() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, TONConfigModule);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(TONConfigModule)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "data", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_requestsUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_queriesHttpUrl", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_queriesWsUrl", void 0);
    return _this;
  }

  (0, _createClass2["default"])(TONConfigModule, [{
    key: "setData",
    value: function setData(data) {
      this.data = data || {
        servers: [defaultServer]
      };
      var server = resolveServer(data.servers[0], defaultServer);
      this._requestsUrl = resolveServer(data.requestsServer, appendPath(server, '/topics/requests'));
      this._queriesHttpUrl = resolveServer(data.queriesServer, appendPath(server, '/graphql'));
      var queriesWsServer = this._queriesHttpUrl.startsWith('https://') ? replacePrefix(this._queriesHttpUrl, "https://", "wss://") : replacePrefix(this._queriesHttpUrl, "http://", "ws://");
      this._queriesWsUrl = resolveServer(data.queriesWsServer, queriesWsServer);
    }
  }, {
    key: "requestsUrl",
    value: function requestsUrl() {
      return this._requestsUrl;
    }
  }, {
    key: "queriesHttpUrl",
    value: function queriesHttpUrl() {
      return this._queriesHttpUrl;
    }
  }, {
    key: "queriesWsUrl",
    value: function queriesWsUrl() {
      return this._queriesWsUrl;
    }
  }, {
    key: "getVersion",
    value: function () {
      var _getVersion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.requestLibrary(methods.version));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getVersion() {
        return _getVersion.apply(this, arguments);
      }

      return getVersion;
    }()
  }, {
    key: "setup",
    value: function () {
      var _setup = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.data) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.requestLibrary(methods.init, this.data);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }]);
  return TONConfigModule;
}(_TONModule2.TONModule);

exports["default"] = TONConfigModule;
TONConfigModule.moduleName = 'TONConfigModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwiaW5pdCIsInZlcnNpb24iLCJwYXJzZVVybCIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJwcm90b2NvbCIsInN1YnN0cmluZyIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJjb21iaW5lVXJsIiwicGFydHMiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsImZpeFVybCIsImZpeFBhcnRzIiwicmVzb2x2ZVNlcnZlciIsImNvbmZpZ3VyZWQiLCJkZWYiLCJyZXBsYWNlUHJlZml4IiwicyIsInByZWZpeCIsIm5ld1ByZWZpeCIsInN1YnN0ciIsImFwcGVuZFBhdGgiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsIl9xdWVyaWVzSHR0cFVybCIsInF1ZXJpZXNTZXJ2ZXIiLCJxdWVyaWVzV3NTZXJ2ZXIiLCJfcXVlcmllc1dzVXJsIiwicmVxdWVzdExpYnJhcnkiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFXQSxJQUFNQSxPQUFPLEdBQUc7QUFDWkMsRUFBQUEsSUFBSSxFQUFFLGFBRE07QUFFWkMsRUFBQUEsT0FBTyxFQUFFO0FBRkcsQ0FBaEI7O0FBWUEsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBeUM7QUFDckMsTUFBTUMsb0JBQW9CLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEtBQVosQ0FBN0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLG9C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YUFBTyxLQUFLRSxlQUFaO0FBQ0g7OzttQ0FFc0I7QUFDbkIsYUFBTyxLQUFLRyxhQUFaO0FBQ0g7Ozs7Ozs7Ozs7O2lEQUdVLEtBQUtDLGNBQUwsQ0FBb0I3QyxPQUFPLENBQUNFLE9BQTVCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUtILEtBQUtrQyxJOzs7Ozs7dUJBQ0MsS0FBS1MsY0FBTCxDQUFvQjdDLE9BQU8sQ0FBQ0MsSUFBNUIsRUFBa0MsS0FBS21DLElBQXZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRDMkJVLHFCOzs7QUErQzdDWCxlQUFlLENBQUNZLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgcXVlcnkgZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeS9saWIvZnJhZ21lbnRNYXRjaGVySW50cm9zcGVjdGlvblF1ZXJ5XCI7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuXG5leHBvcnQgdHlwZSBUT05Db25maWdEYXRhID0ge1xuICAgIGRlZmF1bHRXb3JrY2hhaW46ID9udW1iZXIsXG4gICAgc2VydmVyczogc3RyaW5nW10sXG4gICAgcmVxdWVzdHNTZXJ2ZXI/OiBzdHJpbmcsXG4gICAgcXVlcmllc1NlcnZlcj86IHN0cmluZyxcbiAgICBxdWVyaWVzV3NTZXJ2ZXI/OiBzdHJpbmcsXG4gICAgbG9nX3ZlcmJvc2U/OiBib29sZWFuLFxufVxuXG5jb25zdCBtZXRob2RzID0ge1xuICAgIGluaXQ6ICdjb25maWcuaW5pdCcsXG4gICAgdmVyc2lvbjogJ2NvbmZpZy52ZXJzaW9uJyxcbn07XG5cbnR5cGUgVVJMUGFydHMgPSB7XG4gICAgcHJvdG9jb2w6IHN0cmluZyxcbiAgICBob3N0OiBzdHJpbmcsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHF1ZXJ5OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcGFyc2VVcmwodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3RvY29sOiB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgaG9zdDogdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgcGF0aDogdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICBxdWVyeTogdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVVcmwocGFydHM6IFVSTFBhcnRzKTogc3RyaW5nIHtcbiAgICBsZXQgcGF0aCA9IHBhcnRzLnBhdGg7XG4gICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICB9XG4gICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3BhcnRzLnByb3RvY29sfSR7cGFydHMuaG9zdH0ke3BhdGh9JHtwYXJ0cy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3BhcnRzLnF1ZXJ5fWA7XG59XG5cbmZ1bmN0aW9uIGZpeFVybCh1cmwsIGZpeFBhcnRzKSB7XG4gICAgbGV0IHBhcnRzID0gcGFyc2VVcmwodXJsKTtcbiAgICBmaXhQYXJ0cyhwYXJ0cyk7XG4gICAgcmV0dXJuIGNvbWJpbmVVcmwocGFydHMpO1xufVxuXG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXIoY29uZmlndXJlZD86IHN0cmluZywgZGVmOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaXhVcmwoY29uZmlndXJlZCB8fCBkZWYsIChwYXJ0cykgPT4ge1xuICAgICAgICBpZiAocGFydHMucHJvdG9jb2wgPT09ICcnKSB7XG4gICAgICAgICAgICBwYXJ0cy5wcm90b2NvbCA9ICdodHRwczovLyc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVByZWZpeChzLCBwcmVmaXgsIG5ld1ByZWZpeCkge1xuICAgIHJldHVybiBgJHtuZXdQcmVmaXh9JHtzLnN1YnN0cihwcmVmaXgubGVuZ3RoKX1gO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRQYXRoKHVybCwgcGF0aCkge1xuICAgIHJldHVybiBmaXhVcmwodXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgcGFydHMucGF0aCA9IGAke3BhcnRzLnBhdGh9LyR7cGF0aH1gO1xuICAgIH0pO1xufVxuXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ3NlcnZpY2VzLnRvbmxhYnMuaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIGFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCBcImh0dHBzOi8vXCIsIFwid3NzOi8vXCIpXG4gICAgICAgICAgICA6IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cDovL1wiLCBcIndzOi8vXCIpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXJpZXNXc1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzV3NTZXJ2ZXIsIHF1ZXJpZXNXc1NlcnZlcik7XG4gICAgfVxuXG4gICAgcmVxdWVzdHNVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RzVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNIdHRwVXJsKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyaWVzSHR0cFVybDtcbiAgICB9XG5cbiAgICBxdWVyaWVzV3NVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNXc1VybDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RMaWJyYXJ5KG1ldGhvZHMudmVyc2lvbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBzZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXF1ZXN0TGlicmFyeShtZXRob2RzLmluaXQsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=