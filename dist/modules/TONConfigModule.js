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

var _TONModule2 = require("../TONModule");

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
                return _context.abrupt("return", this.requestLibrary('version'));

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
                return this.requestLibrary('setup', this.data);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVVybCIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJwcm90b2NvbCIsInN1YnN0cmluZyIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJjb21iaW5lVXJsIiwicGFydHMiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsImZpeFVybCIsImZpeFBhcnRzIiwicmVzb2x2ZVNlcnZlciIsImNvbmZpZ3VyZWQiLCJkZWYiLCJyZXBsYWNlUHJlZml4IiwicyIsInByZWZpeCIsIm5ld1ByZWZpeCIsInN1YnN0ciIsImFwcGVuZFBhdGgiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsIl9xdWVyaWVzSHR0cFVybCIsInF1ZXJpZXNTZXJ2ZXIiLCJxdWVyaWVzV3NTZXJ2ZXIiLCJfcXVlcmllc1dzVXJsIiwicmVxdWVzdExpYnJhcnkiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBakJBOzs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBeUM7QUFDckMsTUFBTUMsb0JBQW9CLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEtBQVosQ0FBN0I7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLG9CQUFvQixJQUFJLENBQXhCLEdBQTRCQSxvQkFBb0IsR0FBRyxDQUFuRCxHQUF1RCxDQUEzRTtBQUNBLE1BQU1HLFdBQVcsR0FBR0osR0FBRyxDQUFDRSxPQUFKLENB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cEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBS0gsS0FBS1QsSTs7Ozs7O3VCQUNDLEtBQUtTLGNBQUwsQ0FBb0IsT0FBcEIsRUFBNkIsS0FBS1QsSUFBbEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdEMyQlUscUI7OztBQStDN0NYLGVBQWUsQ0FBQ1ksVUFBaEIsR0FBNkIsaUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAyMDE4LTIwMTkgVE9OIERFViBTT0xVVElPTlMgTFRELlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBTT0ZUV0FSRSBFVkFMVUFUSU9OIExpY2Vuc2UgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxuICogdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXG4gKiBMaWNlbnNlIGF0OlxuICpcbiAqIGh0dHA6Ly93d3cudG9uLmRldi9saWNlbnNlc1xuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgVE9OIERFViBzb2Z0d2FyZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vLyBAZmxvd1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcblxuZXhwb3J0IHR5cGUgVE9OQ29uZmlnRGF0YSA9IHtcbiAgICBkZWZhdWx0V29ya2NoYWluOiA/bnVtYmVyLFxuICAgIHNlcnZlcnM6IHN0cmluZ1tdLFxuICAgIHJlcXVlc3RzU2VydmVyPzogc3RyaW5nLFxuICAgIHF1ZXJpZXNTZXJ2ZXI/OiBzdHJpbmcsXG4gICAgcXVlcmllc1dzU2VydmVyPzogc3RyaW5nLFxuICAgIGxvZ192ZXJib3NlPzogYm9vbGVhbixcbn1cblxudHlwZSBVUkxQYXJ0cyA9IHtcbiAgICBwcm90b2NvbDogc3RyaW5nLFxuICAgIGhvc3Q6IHN0cmluZyxcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgcXVlcnk6IHN0cmluZ1xufVxuXG5mdW5jdGlvbiBwYXJzZVVybCh1cmw6IHN0cmluZyk6IFVSTFBhcnRzIHtcbiAgICBjb25zdCBwcm90b2NvbFNlcGFyYXRvclBvcyA9IHVybC5pbmRleE9mKCc6Ly8nKTtcbiAgICBjb25zdCBwcm90b2NvbEVuZCA9IHByb3RvY29sU2VwYXJhdG9yUG9zID49IDAgPyBwcm90b2NvbFNlcGFyYXRvclBvcyArIDMgOiAwO1xuICAgIGNvbnN0IHF1ZXN0aW9uUG9zID0gdXJsLmluZGV4T2YoJz8nLCBwcm90b2NvbEVuZCk7XG4gICAgY29uc3QgcXVlcnlTdGFydCA9IHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyArIDEgOiB1cmwubGVuZ3RoO1xuICAgIGNvbnN0IHBhdGhFbmQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgOiB1cmwubGVuZ3RoO1xuICAgIGNvbnN0IHBhdGhTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignLycsIHByb3RvY29sRW5kKTtcbiAgICBjb25zdCBwYXRoU3RhcnQgPSBwYXRoU2VwYXJhdG9yUG9zID49IDBcbiAgICAgICAgPyAocGF0aFNlcGFyYXRvclBvcyA8IHBhdGhFbmQgPyBwYXRoU2VwYXJhdG9yUG9zIDogcGF0aEVuZClcbiAgICAgICAgOiAocXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvdG9jb2w6IHVybC5zdWJzdHJpbmcoMCwgcHJvdG9jb2xFbmQpLFxuICAgICAgICBob3N0OiB1cmwuc3Vic3RyaW5nKHByb3RvY29sRW5kLCBwYXRoU3RhcnQpLFxuICAgICAgICBwYXRoOiB1cmwuc3Vic3RyaW5nKHBhdGhTdGFydCwgcGF0aEVuZCksXG4gICAgICAgIHF1ZXJ5OiB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQpLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gY29tYmluZVVybChwYXJ0czogVVJMUGFydHMpOiBzdHJpbmcge1xuICAgIGxldCBwYXRoID0gcGFydHMucGF0aDtcbiAgICB3aGlsZSAocGF0aC5pbmRleE9mKCcvLycpID49IDApIHtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgIH1cbiAgICBpZiAocGF0aCAhPT0gJycgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIHBhdGggPSBgLyR7cGF0aH1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7cGFydHMucHJvdG9jb2x9JHtwYXJ0cy5ob3N0fSR7cGF0aH0ke3BhcnRzLnF1ZXJ5ICE9PSAnJyA/ICc/JyA6ICcnfSR7cGFydHMucXVlcnl9YDtcbn1cblxuZnVuY3Rpb24gZml4VXJsKHVybCwgZml4UGFydHMpIHtcbiAgICBsZXQgcGFydHMgPSBwYXJzZVVybCh1cmwpO1xuICAgIGZpeFBhcnRzKHBhcnRzKTtcbiAgICByZXR1cm4gY29tYmluZVVybChwYXJ0cyk7XG59XG5cblxuZnVuY3Rpb24gcmVzb2x2ZVNlcnZlcihjb25maWd1cmVkPzogc3RyaW5nLCBkZWY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZpeFVybChjb25maWd1cmVkIHx8IGRlZiwgKHBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChwYXJ0cy5wcm90b2NvbCA9PT0gJycpIHtcbiAgICAgICAgICAgIHBhcnRzLnByb3RvY29sID0gJ2h0dHBzOi8vJztcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJlZml4KHMsIHByZWZpeCwgbmV3UHJlZml4KSB7XG4gICAgcmV0dXJuIGAke25ld1ByZWZpeH0ke3Muc3Vic3RyKHByZWZpeC5sZW5ndGgpfWA7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFBhdGgodXJsLCBwYXRoKSB7XG4gICAgcmV0dXJuIGZpeFVybCh1cmwsIChwYXJ0cykgPT4ge1xuICAgICAgICBwYXJ0cy5wYXRoID0gYCR7cGFydHMucGF0aH0vJHtwYXRofWA7XG4gICAgfSk7XG59XG5cbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnc2VydmljZXMudG9ubGFicy5pbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbmZpZ01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSB7XG4gICAgZGF0YTogP1RPTkNvbmZpZ0RhdGE7XG5cblxuICAgIHNldERhdGEoZGF0YTogVE9OQ29uZmlnRGF0YSkge1xuXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge1xuICAgICAgICAgICAgc2VydmVyczogW2RlZmF1bHRTZXJ2ZXJdLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgc2VydmVyID0gcmVzb2x2ZVNlcnZlcihkYXRhLnNlcnZlcnNbMF0sIGRlZmF1bHRTZXJ2ZXIpO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0c1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5yZXF1ZXN0c1NlcnZlciwgYXBwZW5kUGF0aChzZXJ2ZXIsICcvdG9waWNzL3JlcXVlc3RzJykpO1xuICAgICAgICB0aGlzLl9xdWVyaWVzSHR0cFVybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzU2VydmVyLCBhcHBlbmRQYXRoKHNlcnZlciwgJy9ncmFwaHFsJykpO1xuICAgICAgICBjb25zdCBxdWVyaWVzV3NTZXJ2ZXIgPSB0aGlzLl9xdWVyaWVzSHR0cFVybC5zdGFydHNXaXRoKCdodHRwczovLycpXG4gICAgICAgICAgICA/IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cHM6Ly9cIiwgXCJ3c3M6Ly9cIilcbiAgICAgICAgICAgIDogcmVwbGFjZVByZWZpeCh0aGlzLl9xdWVyaWVzSHR0cFVybCwgXCJodHRwOi8vXCIsIFwid3M6Ly9cIik7XG5cbiAgICAgICAgdGhpcy5fcXVlcmllc1dzVXJsID0gcmVzb2x2ZVNlcnZlcihkYXRhLnF1ZXJpZXNXc1NlcnZlciwgcXVlcmllc1dzU2VydmVyKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdHNVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc0h0dHBVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNIdHRwVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNXc1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1dzVXJsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdExpYnJhcnkoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RMaWJyYXJ5KCdzZXR1cCcsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=