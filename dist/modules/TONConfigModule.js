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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_logVerbose", void 0);
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
    key: "log",
    value: function log() {
      if (this._logVerbose) {
        var _console;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_console = console).log.apply(_console, ["[".concat(Date.now(), "]")].concat(args));
      }
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
                return _context.abrupt("return", this.requestCore('version'));

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
                return this.requestCore('setup', this.data);

              case 3:
                this._logVerbose = this.data && this.data.log_verbose || false;

              case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVVybCIsInVybCIsInByb3RvY29sU2VwYXJhdG9yUG9zIiwiaW5kZXhPZiIsInByb3RvY29sRW5kIiwicXVlc3Rpb25Qb3MiLCJxdWVyeVN0YXJ0IiwibGVuZ3RoIiwicGF0aEVuZCIsInBhdGhTZXBhcmF0b3JQb3MiLCJwYXRoU3RhcnQiLCJwcm90b2NvbCIsInN1YnN0cmluZyIsImhvc3QiLCJwYXRoIiwicXVlcnkiLCJjb21iaW5lVXJsIiwicGFydHMiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsImZpeFVybCIsImZpeFBhcnRzIiwicmVzb2x2ZVNlcnZlciIsImNvbmZpZ3VyZWQiLCJkZWYiLCJyZXBsYWNlUHJlZml4IiwicyIsInByZWZpeCIsIm5ld1ByZWZpeCIsInN1YnN0ciIsImFwcGVuZFBhdGgiLCJkZWZhdWx0U2VydmVyIiwiVE9OQ29uZmlnTW9kdWxlIiwiZGF0YSIsInNlcnZlcnMiLCJzZXJ2ZXIiLCJfcmVxdWVzdHNVcmwiLCJyZXF1ZXN0c1NlcnZlciIsIl9xdWVyaWVzSHR0cFVybCIsInF1ZXJpZXNTZXJ2ZXIiLCJxdWVyaWVzV3NTZXJ2ZXIiLCJfcXVlcmllc1dzVXJsIiwiX2xvZ1ZlcmJvc2UiLCJhcmdzIiwiY29uc29sZSIsImxvZyIsIkRhdGUiLCJub3ciLCJyZXF1ZXN0Q29yZSIsImxvZ192ZXJib3NlIiwiVE9OTW9kdWxlIiwibW9kdWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOztBQWpCQTs7Ozs7Ozs7Ozs7Ozs7O0FBbUNBLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXlDO0FBQ3JDLE1BQU1DLG9CQUFvQixHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxLQUFaLENBQTdCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRixvQkFBb0IsSUFBSSxDQUF4QixHQUE0QkEsb0JBQW9CLEdB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QUFBOztBQUNsQixvQkFBQUMsT0FBTyxFQUFDQyxHQUFSLDZCQUFnQkMsSUFBSSxDQUFDQyxHQUFMLEVBQWhCLGVBQWtDSixJQUFsQztBQUNIO0FBQ0o7OztrQ0FFcUI7QUFDbEIsYUFBTyxLQUFLUCxZQUFaO0FBQ0g7OztxQ0FFd0I7QUFDckIsYUFBTyxLQUFLRSxlQUFaO0FBQ0g7OzttQ0FFc0I7QUFDbkIsYUFBTyxLQUFLRyxhQUFaO0FBQ0g7Ozs7Ozs7Ozs7O2lEQUdVLEtBQUtPLFdBQUwsQ0FBaUIsU0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBS0gsS0FBS2YsSTs7Ozs7O3VCQUNDLEtBQUtlLFdBQUwsQ0FBaUIsT0FBakIsRUFBMEIsS0FBS2YsSUFBL0IsQzs7O0FBRVYscUJBQUtTLFdBQUwsR0FBb0IsS0FBS1QsSUFBTCxJQUFhLEtBQUtBLElBQUwsQ0FBVWdCLFdBQXhCLElBQXdDLEtBQTNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE5Q3FDQyxxQjs7O0FBdUQ3Q2xCLGVBQWUsQ0FBQ21CLFVBQWhCLEdBQTZCLGlCQUE3QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDE5IFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbmV4cG9ydCB0eXBlIFRPTkNvbmZpZ0RhdGEgPSB7XG4gICAgZGVmYXVsdFdvcmtjaGFpbjogP251bWJlcixcbiAgICBzZXJ2ZXJzOiBzdHJpbmdbXSxcbiAgICByZXF1ZXN0c1NlcnZlcj86IHN0cmluZyxcbiAgICBxdWVyaWVzU2VydmVyPzogc3RyaW5nLFxuICAgIHF1ZXJpZXNXc1NlcnZlcj86IHN0cmluZyxcbiAgICBsb2dfdmVyYm9zZT86IGJvb2xlYW4sXG59XG5cbnR5cGUgVVJMUGFydHMgPSB7XG4gICAgcHJvdG9jb2w6IHN0cmluZyxcbiAgICBob3N0OiBzdHJpbmcsXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIHF1ZXJ5OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gcGFyc2VVcmwodXJsOiBzdHJpbmcpOiBVUkxQYXJ0cyB7XG4gICAgY29uc3QgcHJvdG9jb2xTZXBhcmF0b3JQb3MgPSB1cmwuaW5kZXhPZignOi8vJyk7XG4gICAgY29uc3QgcHJvdG9jb2xFbmQgPSBwcm90b2NvbFNlcGFyYXRvclBvcyA+PSAwID8gcHJvdG9jb2xTZXBhcmF0b3JQb3MgKyAzIDogMDtcbiAgICBjb25zdCBxdWVzdGlvblBvcyA9IHVybC5pbmRleE9mKCc/JywgcHJvdG9jb2xFbmQpO1xuICAgIGNvbnN0IHF1ZXJ5U3RhcnQgPSBxdWVzdGlvblBvcyA+PSAwID8gcXVlc3Rpb25Qb3MgKyAxIDogdXJsLmxlbmd0aDtcbiAgICBjb25zdCBwYXRoRW5kID0gcXVlc3Rpb25Qb3MgPj0gMCA/IHF1ZXN0aW9uUG9zIDogdXJsLmxlbmd0aDtcbiAgICBjb25zdCBwYXRoU2VwYXJhdG9yUG9zID0gdXJsLmluZGV4T2YoJy8nLCBwcm90b2NvbEVuZCk7XG4gICAgY29uc3QgcGF0aFN0YXJ0ID0gcGF0aFNlcGFyYXRvclBvcyA+PSAwXG4gICAgICAgID8gKHBhdGhTZXBhcmF0b3JQb3MgPCBwYXRoRW5kID8gcGF0aFNlcGFyYXRvclBvcyA6IHBhdGhFbmQpXG4gICAgICAgIDogKHF1ZXN0aW9uUG9zID49IDAgPyBxdWVzdGlvblBvcyA6IHVybC5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3RvY29sOiB1cmwuc3Vic3RyaW5nKDAsIHByb3RvY29sRW5kKSxcbiAgICAgICAgaG9zdDogdXJsLnN1YnN0cmluZyhwcm90b2NvbEVuZCwgcGF0aFN0YXJ0KSxcbiAgICAgICAgcGF0aDogdXJsLnN1YnN0cmluZyhwYXRoU3RhcnQsIHBhdGhFbmQpLFxuICAgICAgICBxdWVyeTogdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0KSxcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVVcmwocGFydHM6IFVSTFBhcnRzKTogc3RyaW5nIHtcbiAgICBsZXQgcGF0aCA9IHBhcnRzLnBhdGg7XG4gICAgd2hpbGUgKHBhdGguaW5kZXhPZignLy8nKSA+PSAwKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoJy8vJywgJy8nKTtcbiAgICB9XG4gICAgaWYgKHBhdGggIT09ICcnICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3BhcnRzLnByb3RvY29sfSR7cGFydHMuaG9zdH0ke3BhdGh9JHtwYXJ0cy5xdWVyeSAhPT0gJycgPyAnPycgOiAnJ30ke3BhcnRzLnF1ZXJ5fWA7XG59XG5cbmZ1bmN0aW9uIGZpeFVybCh1cmwsIGZpeFBhcnRzKSB7XG4gICAgbGV0IHBhcnRzID0gcGFyc2VVcmwodXJsKTtcbiAgICBmaXhQYXJ0cyhwYXJ0cyk7XG4gICAgcmV0dXJuIGNvbWJpbmVVcmwocGFydHMpO1xufVxuXG5cbmZ1bmN0aW9uIHJlc29sdmVTZXJ2ZXIoY29uZmlndXJlZD86IHN0cmluZywgZGVmOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaXhVcmwoY29uZmlndXJlZCB8fCBkZWYsIChwYXJ0cykgPT4ge1xuICAgICAgICBpZiAocGFydHMucHJvdG9jb2wgPT09ICcnKSB7XG4gICAgICAgICAgICBwYXJ0cy5wcm90b2NvbCA9ICdodHRwczovLyc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVByZWZpeChzLCBwcmVmaXgsIG5ld1ByZWZpeCkge1xuICAgIHJldHVybiBgJHtuZXdQcmVmaXh9JHtzLnN1YnN0cihwcmVmaXgubGVuZ3RoKX1gO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRQYXRoKHVybCwgcGF0aCkge1xuICAgIHJldHVybiBmaXhVcmwodXJsLCAocGFydHMpID0+IHtcbiAgICAgICAgcGFydHMucGF0aCA9IGAke3BhcnRzLnBhdGh9LyR7cGF0aH1gO1xuICAgIH0pO1xufVxuXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ3NlcnZpY2VzLnRvbmxhYnMuaW8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05Db25maWdNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGRhdGE6ID9UT05Db25maWdEYXRhO1xuXG5cbiAgICBzZXREYXRhKGRhdGE6IFRPTkNvbmZpZ0RhdGEpIHtcblxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHtcbiAgICAgICAgICAgIHNlcnZlcnM6IFtkZWZhdWx0U2VydmVyXSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNlcnZlciA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5zZXJ2ZXJzWzBdLCBkZWZhdWx0U2VydmVyKTtcbiAgICAgICAgdGhpcy5fcmVxdWVzdHNVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucmVxdWVzdHNTZXJ2ZXIsIGFwcGVuZFBhdGgoc2VydmVyLCAnL3RvcGljcy9yZXF1ZXN0cycpKTtcbiAgICAgICAgdGhpcy5fcXVlcmllc0h0dHBVcmwgPSByZXNvbHZlU2VydmVyKGRhdGEucXVlcmllc1NlcnZlciwgYXBwZW5kUGF0aChzZXJ2ZXIsICcvZ3JhcGhxbCcpKTtcbiAgICAgICAgY29uc3QgcXVlcmllc1dzU2VydmVyID0gdGhpcy5fcXVlcmllc0h0dHBVcmwuc3RhcnRzV2l0aCgnaHR0cHM6Ly8nKVxuICAgICAgICAgICAgPyByZXBsYWNlUHJlZml4KHRoaXMuX3F1ZXJpZXNIdHRwVXJsLCBcImh0dHBzOi8vXCIsIFwid3NzOi8vXCIpXG4gICAgICAgICAgICA6IHJlcGxhY2VQcmVmaXgodGhpcy5fcXVlcmllc0h0dHBVcmwsIFwiaHR0cDovL1wiLCBcIndzOi8vXCIpO1xuXG4gICAgICAgIHRoaXMuX3F1ZXJpZXNXc1VybCA9IHJlc29sdmVTZXJ2ZXIoZGF0YS5xdWVyaWVzV3NTZXJ2ZXIsIHF1ZXJpZXNXc1NlcnZlcik7XG4gICAgfVxuXG4gICAgbG9nKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLl9sb2dWZXJib3NlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgWyR7RGF0ZS5ub3coKX1dYCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0c1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdHNVcmw7XG4gICAgfVxuXG4gICAgcXVlcmllc0h0dHBVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXJpZXNIdHRwVXJsO1xuICAgIH1cblxuICAgIHF1ZXJpZXNXc1VybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcmllc1dzVXJsO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ3ZlcnNpb24nKTtcbiAgICB9XG5cblxuICAgIGFzeW5jIHNldHVwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdzZXR1cCcsIHRoaXMuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nVmVyYm9zZSA9ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxvZ192ZXJib3NlKSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBfbG9nVmVyYm9zZTogYm9vbGVhbjtcbiAgICBfcmVxdWVzdHNVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc0h0dHBVcmw6IHN0cmluZztcbiAgICBfcXVlcmllc1dzVXJsOiBzdHJpbmc7XG59XG5cblRPTkNvbmZpZ01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTkNvbmZpZ01vZHVsZSc7XG4iXX0=