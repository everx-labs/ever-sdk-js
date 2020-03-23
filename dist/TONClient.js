function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { Tags, Span, SpanContext } from "opentracing";
import TONConfigModule from './modules/TONConfigModule';
import TONContractsModule from './modules/TONContractsModule';
import TONCryptoModule from './modules/TONCryptoModule';
/* eslint-disable class-methods-use-this, no-use-before-define */

import TONQueriesModule from "./modules/TONQueriesModule";
import { TONModule } from './TONModule';
/**
 * JavaScript platform specific configuration
 */

/**
 * Main object provided functionality of the TON Client Library
 * Each instance of TONClient has own set of TON Client modules
 * and has own preconfigured client context
 */
export var TONClient = /*#__PURE__*/function () {
  _createClass(TONClient, null, [{
    key: "setLibrary",
    value: function setLibrary(clientPlatform) {
      TONClient.clientPlatform = clientPlatform;
    } // Public

  }]);

  function TONClient() {
    _classCallCheck(this, TONClient);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "crypto", void 0);

    _defineProperty(this, "contracts", void 0);

    _defineProperty(this, "queries", void 0);

    _defineProperty(this, "_queries", void 0);

    _defineProperty(this, "modules", void 0);

    this.modules = new Map();
    this.config = this.getModule(TONConfigModule);
    this.crypto = this.getModule(TONCryptoModule);
    this.contracts = this.getModule(TONContractsModule);
    this._queries = this.getModule(TONQueriesModule);
    this.queries = this._queries;
  }
  /**
   * Convenient way to create configured instance of the TON Client
   * @param {TONConfigData} config
   * @return {Promise<TONClient>}
   */


  _createClass(TONClient, [{
    key: "setup",

    /**
     * Set up the client instance
     * @return {Promise<void>}
     */
    value: function () {
      var _setup = _asyncToGenerator(function* () {
        if (!TONClient.core) {
          if (!TONClient.clientPlatform) {
            return;
          }

          TONClient.core = yield TONClient.clientPlatform.createLibrary();
        }

        var modules = [...this.modules.values()];

        for (var module of modules) {
          yield module.setup();
        }
      });

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
    /**
     * Tear down this client instance.
     * Note that after you have called this method all future use of this instance will fail
     * @return {Promise<void>}
     */

  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator(function* () {
        yield this.queries.close();
      });

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }() // TONModuleContext

  }, {
    key: "getCore",
    value: function getCore() {
      return TONClient.core;
    }
  }, {
    key: "getModule",
    value: function getModule(ModuleClass) {
      var name = ModuleClass.moduleName;
      var existingModule = this.modules.get(name);

      if (existingModule) {
        return existingModule;
      }

      var module = new ModuleClass(this);
      this.modules.set(name, module);
      return module;
    }
  }, {
    key: "getManagementAccessKey",
    value: function () {
      var _getManagementAccessKey = _asyncToGenerator(function* () {
        var result = yield this._queries.query('query{getManagementAccessKey}');
        return result.data.getManagementAccessKey;
      });

      function getManagementAccessKey() {
        return _getManagementAccessKey.apply(this, arguments);
      }

      return getManagementAccessKey;
    }()
  }, {
    key: "_resolveSignedManagementAccessKey",
    value: function () {
      var _resolveSignedManagementAccessKey2 = _asyncToGenerator(function* (params) {
        if (params.signedManagementAccessKey) {
          return params.signedManagementAccessKey;
        }

        var signKeys = params.accountKeys;

        if (signKeys) {
          var managementAccessKey = yield this.getManagementAccessKey();
          return this.crypto.naclSign({
            text: managementAccessKey
          }, `${signKeys.secret}${signKeys.public}`, 'Hex');
        }

        return '';
      });

      function _resolveSignedManagementAccessKey(_x) {
        return _resolveSignedManagementAccessKey2.apply(this, arguments);
      }

      return _resolveSignedManagementAccessKey;
    }()
  }, {
    key: "registerAccessKeys",
    value: function () {
      var _registerAccessKeys = _asyncToGenerator(function* (params) {
        var signedManagementAccessKey = yield this._resolveSignedManagementAccessKey(params);
        var result = yield this._queries.mutation(`mutation registerAccessKeys($account: String, $keys: [AccessKey], $signedManagementAccessKey: String) {
                    registerAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
          account: params.account,
          keys: params.keys,
          signedManagementAccessKey
        });
        return result.data.registerAccessKeys;
      });

      function registerAccessKeys(_x2) {
        return _registerAccessKeys.apply(this, arguments);
      }

      return registerAccessKeys;
    }()
  }, {
    key: "revokeAccessKeys",
    value: function () {
      var _revokeAccessKeys = _asyncToGenerator(function* (params) {
        var signedManagementAccessKey = yield this._resolveSignedManagementAccessKey(params);
        var result = yield this._queries.mutation(`mutation revokeAccessKeys($account: String, $keys: [String], $signedManagementAccessKey: String) {
                    revokeAccessKeys(account: $account, keys: $keys, signedManagementAccessKey: $signedManagementAccessKey)
                }`, {
          account: params.account,
          keys: params.keys,
          signedManagementAccessKey
        });
        return result.data.revokeAccessKeys;
      });

      function revokeAccessKeys(_x3) {
        return _revokeAccessKeys.apply(this, arguments);
      }

      return revokeAccessKeys;
    }()
  }, {
    key: "trace",
    value: function () {
      var _trace = _asyncToGenerator(function* (name, f, parentSpan) {
        var span = this.config.tracer.startSpan(name, {
          childOf: parentSpan
        });

        try {
          span.setTag(Tags.SPAN_KIND, 'client');
          var result = yield f(span);

          if (result !== undefined) {
            span.setTag('result', result);
          }

          span.finish();
          return result;
        } catch (error) {
          span.log({
            event: 'failed',
            payload: error
          });
          span.finish();
          throw error;
        }
      });

      function trace(_x4, _x5, _x6) {
        return _trace.apply(this, arguments);
      }

      return trace;
    }() // Internals

  }], [{
    key: "create",
    value: function () {
      var _create = _asyncToGenerator(function* (config) {
        var client = new TONClient();
        client.config.setData(config);
        yield client.setup();
        return client;
      });

      function create(_x7) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }]);

  return TONClient;
}();

_defineProperty(TONClient, "clientPlatform", null);

_defineProperty(TONClient, "core", null);

export var TONClientError = /*#__PURE__*/function () {
  function TONClientError(message, code, source, data) {
    _classCallCheck(this, TONClientError);

    _defineProperty(this, "message", void 0);

    _defineProperty(this, "source", void 0);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "data", void 0);

    this.message = message;
    this.code = code;
    this.source = source;
    this.data = data;
  }

  _createClass(TONClientError, null, [{
    key: "isClientError",
    value: function isClientError(error, code) {
      return error.source === TONClientError.source.CLIENT && error.code === code;
    }
  }, {
    key: "internalError",
    value: function internalError(message) {
      return new TONClientError(`Internal error: ${message}`, TONClientError.code.INTERNAL_ERROR, TONClientError.source.CLIENT);
    }
  }, {
    key: "clientDoesNotConfigured",
    value: function clientDoesNotConfigured() {
      return new TONClientError('TON Client does not configured', TONClientError.code.CLIENT_DOES_NOT_CONFIGURED, TONClientError.source.CLIENT);
    }
  }, {
    key: "sendNodeRequestFailed",
    value: function sendNodeRequestFailed(responseText) {
      return new TONClientError(`Send node request failed: ${responseText}`, TONClientError.code.SEND_NODE_REQUEST_FAILED, TONClientError.source.CLIENT);
    }
  }, {
    key: "runLocalAccountDoesNotExists",
    value: function runLocalAccountDoesNotExists(functionName, address) {
      return new TONClientError(`[${functionName}] run local failed: account [${address}] does not exists`, TONClientError.code.RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS, TONClientError.source.CLIENT);
    }
  }, {
    key: "waitForTimeout",
    value: function waitForTimeout() {
      return new TONClientError('Wait for operation rejected on timeout', TONClientError.code.WAIT_FOR_TIMEOUT, TONClientError.source.CLIENT);
    }
  }, {
    key: "queryFailed",
    value: function queryFailed(errors) {
      return new TONClientError(`Query failed: ${errors.map(function (x) {
        return x.message || x.toString();
      }).join('\n')}`, TONClientError.code.QUERY_FAILED, TONClientError.source.CLIENT);
    }
  }, {
    key: "messageExpired",
    value: function messageExpired() {
      return new TONClientError('Message expired', TONClientError.code.MESSAGE_EXPIRED, TONClientError.source.CLIENT);
    }
  }, {
    key: "isMessageExpired",
    value: function isMessageExpired(error) {
      return TONClientError.isClientError(error, TONClientError.code.MESSAGE_EXPIRED);
    }
  }]);

  return TONClientError;
}();

_defineProperty(TONClientError, "source", {
  CLIENT: 'client',
  NODE: 'node'
});

_defineProperty(TONClientError, "code", {
  CLIENT_DOES_NOT_CONFIGURED: 1000,
  SEND_NODE_REQUEST_FAILED: 1001,
  RUN_LOCAL_ACCOUNT_DOES_NOT_EXISTS: 1002,
  WAIT_FOR_TIMEOUT: 1003,
  INTERNAL_ERROR: 1004,
  QUERY_FAILED: 1005,
  MESSAGE_EXPIRED: 1006
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UT05DbGllbnQuanMiXSwibmFtZXMiOlsiVGFncyIsIlNwYW4iLCJTcGFuQ29udGV4dCIsIlRPTkNvbmZpZ01vZHVsZSIsIlRPTkNvbnRyYWN0c01vZHVsZSIsIlRPTkNyeXB0b01vZHVsZSIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJUT05Nb2R1bGUiLCJUT05DbGllbnQiLCJjbGllbnRQbGF0Zm9ybSIsIm1vZHVsZXMiLCJNYXAiLCJjb25maWciLCJnZXRNb2R1bGUiLCJjcnlwdG8iLCJjb250cmFjdHMiLCJfcXVlcmllcyIsInF1ZXJpZXMiLCJjb3JlIiwiY3JlYXRlTGlicmFyeSIsInZhbHVlcyIsIm1vZHVsZSIsInNldHVwIiwiY2xvc2UiLCJNb2R1bGVDbGFzcyIsIm5hbWUiLCJtb2R1bGVOYW1lIiwiZXhpc3RpbmdNb2R1bGUiLCJnZXQiLCJzZXQiLCJyZXN1bHQiLCJxdWVyeSIsImRhdGEiLCJnZXRNYW5hZ2VtZW50QWNjZXNzS2V5IiwicGFyYW1zIiwic2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSIsInNpZ25LZXlzIiwiYWNjb3VudEtleXMiLCJtYW5hZ2VtZW50QWNjZXNzS2V5IiwibmFjbFNpZ24iLCJ0ZXh0Iiwic2VjcmV0IiwicHVibGljIiwiX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5IiwibXV0YXRpb24iLCJhY2NvdW50Iiwia2V5cyIsInJlZ2lzdGVyQWNjZXNzS2V5cyIsInJldm9rZUFjY2Vzc0tleXMiLCJmIiwicGFyZW50U3BhbiIsInNwYW4iLCJ0cmFjZXIiLCJzdGFydFNwYW4iLCJjaGlsZE9mIiwic2V0VGFnIiwiU1BBTl9LSU5EIiwidW5kZWZpbmVkIiwiZmluaXNoIiwiZXJyb3IiLCJsb2ciLCJldmVudCIsInBheWxvYWQiLCJjbGllbnQiLCJzZXREYXRhIiwiVE9OQ2xpZW50RXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsInNvdXJjZSIsIkNMSUVOVCIsIklOVEVSTkFMX0VSUk9SIiwiQ0xJRU5UX0RPRVNfTk9UX0NPTkZJR1VSRUQiLCJyZXNwb25zZVRleHQiLCJTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQiLCJmdW5jdGlvbk5hbWUiLCJhZGRyZXNzIiwiUlVOX0xPQ0FMX0FDQ09VTlRfRE9FU19OT1RfRVhJU1RTIiwiV0FJVF9GT1JfVElNRU9VVCIsImVycm9ycyIsIm1hcCIsIngiLCJ0b1N0cmluZyIsImpvaW4iLCJRVUVSWV9GQUlMRUQiLCJNRVNTQUdFX0VYUElSRUQiLCJpc0NsaWVudEVycm9yIiwiTk9ERSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFTQSxJQUFULEVBQWVDLElBQWYsRUFBcUJDLFdBQXJCLFFBQXdDLGFBQXhDO0FBWUEsT0FBT0MsZUFBUCxNQUE0QiwyQkFBNUI7QUFDQSxPQUFPQyxrQkFBUCxNQUErQiw4QkFBL0I7QUFDQSxPQUFPQyxlQUFQLE1BQTRCLDJCQUE1QjtBQUNBOztBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLDRCQUE3QjtBQUdBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7QUFFQTs7OztBQW1CQTs7Ozs7QUFLQSxXQUFhQyxTQUFiO0FBQUE7QUFBQTtBQUFBLCtCQUNzQkMsY0FEdEIsRUFDeUQ7QUFDakRELE1BQUFBLFNBQVMsQ0FBQ0MsY0FBVixHQUEyQkEsY0FBM0I7QUFDSCxLQUhMLENBTUk7O0FBTko7O0FBYUksdUJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxPQUFMLEdBQWUsSUFBSUMsR0FBSixFQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLFNBQUwsQ0FBZVYsZUFBZixDQUFkO0FBQ0EsU0FBS1csTUFBTCxHQUFjLEtBQUtELFNBQUwsQ0FBZVIsZUFBZixDQUFkO0FBQ0EsU0FBS1UsU0FBTCxHQUFpQixLQUFLRixTQUFMLENBQWVULGtCQUFmLENBQWpCO0FBQ0EsU0FBS1ksUUFBTCxHQUFnQixLQUFLSCxTQUFMLENBQWVQLGdCQUFmLENB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QyxDQUFDQyxRQUFGLEVBQWpCO0FBQUEsT0FBWixFQUEyQ0MsSUFBM0MsQ0FBZ0QsSUFBaEQsQ0FBc0QsRUFEcEUsRUFFSGpCLGNBQWMsQ0FBQ0UsSUFBZixDQUFvQmdCLFlBRmpCLEVBR0hsQixjQUFjLENBQUNHLE1BQWYsQ0FBc0JDLE1BSG5CLENBQVA7QUFLSDtBQTlFTDtBQUFBO0FBQUEscUNBZ0Y0QjtBQUNwQixhQUFPLElBQUlKLGNBQUosQ0FDSCxpQkFERyxFQUVIQSxjQUFjLENBQUNFLElBQWYsQ0FBb0JpQixlQUZqQixFQUdIbkIsY0FBYyxDQUFDRyxNQUFmLENBQXNCQyxNQUhuQixDQUFQO0FBS0g7QUF0Rkw7QUFBQTtBQUFBLHFDQXdGNEJWLEtBeEY1QixFQXdGaUQ7QUFDekMsYUFBT00sY0FBYyxDQUFDb0IsYUFBZixDQUE2QjFCLEtBQTdCLEVBQW9DTSxjQUFjLENBQUNFLElBQWYsQ0FBb0JpQixlQUF4RCxDQUFQO0FBQ0g7QUExRkw7O0FBQUE7QUFBQTs7Z0JBQWFuQixjLFlBQ087QUFDWkksRUFBQUEsTUFBTSxFQUFFLFFBREk7QUFFWmlCLEVBQUFBLElBQUksRUFBRTtBQUZNLEM7O2dCQURQckIsYyxVQUtLO0FBQ1ZNLEVBQUFBLDBCQUEwQixFQUFFLElBRGxCO0FBRVZFLEVBQUFBLHdCQUF3QixFQUFFLElBRmhCO0FBR1ZHLEVBQUFBLGlDQUFpQyxFQUFFLElBSHpCO0FBSVZDLEVBQUFBLGdCQUFnQixFQUFFLElBSlI7QUFLVlAsRUFBQUEsY0FBYyxFQUFFLElBTE47QUFNVmEsRUFBQUEsWUFBWSxFQUFFLElBTko7QUFPVkMsRUFBQUEsZUFBZSxFQUFFO0FBUFAsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8vIEBmbG93XG5cbmltcG9ydCB7IFRhZ3MsIFNwYW4sIFNwYW5Db250ZXh0IH0gZnJvbSBcIm9wZW50cmFjaW5nXCI7XG5pbXBvcnQgdHlwZSB7XG4gICAgSVRPTkNsaWVudCxcbiAgICBUT05BY2Nlc3NLZXlzTWFuYWdlbWVudFBhcmFtcyxcbiAgICBUT05Db25maWdEYXRhLFxuICAgIFRPTkNvbnRyYWN0cyxcbiAgICBUT05DcnlwdG8sXG4gICAgVE9OUXVlcmllcyxcbiAgICBUT05SZWdpc3RlckFjY2Vzc0tleXNQYXJhbXMsXG4gICAgVE9OUmV2b2tlQWNjZXNzS2V5c1BhcmFtcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBUT05Db25maWdNb2R1bGUgZnJvbSAnLi9tb2R1bGVzL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OQ29udHJhY3RzTW9kdWxlIGZyb20gJy4vbW9kdWxlcy9UT05Db250cmFjdHNNb2R1bGUnO1xuaW1wb3J0IFRPTkNyeXB0b01vZHVsZSBmcm9tICcuL21vZHVsZXMvVE9OQ3J5cHRvTW9kdWxlJztcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMsIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tIFwiLi9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGVcIjtcblxuaW1wb3J0IHR5cGUgeyBUT05DbGllbnRMaWJyYXJ5LCBUT05Nb2R1bGVDb250ZXh0IH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi9UT05Nb2R1bGUnO1xuXG4vKipcbiAqIEphdmFTY3JpcHQgcGxhdGZvcm0gc3BlY2lmaWMgY29uZmlndXJhdGlvblxuICovXG50eXBlIFRPTkNsaWVudFBsYXRmb3JtID0ge1xuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBmZXRjaGAgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBmZXRjaDogYW55LFxuICAgIC8qKlxuICAgICAqIFBsYXRmb3JtIHNwZWNpZmljIGBXZWJTb2NrZXRgIGltcGxlbWVudGF0aW9uXG4gICAgICogVGhpcyBpbXBsZW1lbnRhdGlvbiBtdXN0IGNvbmZvcm1zIHRvIFczQyBXZWJTb2NrZXRcbiAgICAgKi9cbiAgICBXZWJTb2NrZXQ6IGFueSxcbiAgICAvKipcbiAgICAgKiBSZXF1ZXN0IGNyZWF0aW9uIG9mIHRoZSBjbGllbnQgY29yZVxuICAgICAqL1xuICAgIGNyZWF0ZUxpYnJhcnk6ICgpID0+IFByb21pc2U8VE9OQ2xpZW50TGlicmFyeT4sXG59O1xuXG4vKipcbiAqIE1haW4gb2JqZWN0IHByb3ZpZGVkIGZ1bmN0aW9uYWxpdHkgb2YgdGhlIFRPTiBDbGllbnQgTGlicmFyeVxuICogRWFjaCBpbnN0YW5jZSBvZiBUT05DbGllbnQgaGFzIG93biBzZXQgb2YgVE9OIENsaWVudCBtb2R1bGVzXG4gKiBhbmQgaGFzIG93biBwcmVjb25maWd1cmVkIGNsaWVudCBjb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBUT05DbGllbnQgaW1wbGVtZW50cyBUT05Nb2R1bGVDb250ZXh0LCBJVE9OQ2xpZW50IHtcbiAgICBzdGF0aWMgc2V0TGlicmFyeShjbGllbnRQbGF0Zm9ybTogVE9OQ2xpZW50UGxhdGZvcm0pIHtcbiAgICAgICAgVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtID0gY2xpZW50UGxhdGZvcm07XG4gICAgfVxuXG5cbiAgICAvLyBQdWJsaWNcbiAgICBjb25maWc6IFRPTkNvbmZpZ01vZHVsZTtcbiAgICBjcnlwdG86IFRPTkNyeXB0bztcbiAgICBjb250cmFjdHM6IFRPTkNvbnRyYWN0cztcbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzO1xuICAgIF9xdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubW9kdWxlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jb25maWcgPSB0aGlzLmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLmNyeXB0byA9IHRoaXMuZ2V0TW9kdWxlKFRPTkNyeXB0b01vZHVsZSk7XG4gICAgICAgIHRoaXMuY29udHJhY3RzID0gdGhpcy5nZXRNb2R1bGUoVE9OQ29udHJhY3RzTW9kdWxlKTtcbiAgICAgICAgdGhpcy5fcXVlcmllcyA9IHRoaXMuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLl9xdWVyaWVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbnQgd2F5IHRvIGNyZWF0ZSBjb25maWd1cmVkIGluc3RhbmNlIG9mIHRoZSBUT04gQ2xpZW50XG4gICAgICogQHBhcmFtIHtUT05Db25maWdEYXRhfSBjb25maWdcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFRPTkNsaWVudD59XG4gICAgICovXG4gICAgc3RhdGljIGFzeW5jIGNyZWF0ZShjb25maWc6IFRPTkNvbmZpZ0RhdGEpOiBQcm9taXNlPFRPTkNsaWVudD4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgVE9OQ2xpZW50KCk7XG4gICAgICAgIGNsaWVudC5jb25maWcuc2V0RGF0YShjb25maWcpO1xuICAgICAgICBhd2FpdCBjbGllbnQuc2V0dXAoKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdXAgdGhlIGNsaWVudCBpbnN0YW5jZVxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGlmICghVE9OQ2xpZW50LmNvcmUpIHtcbiAgICAgICAgICAgIGlmICghVE9OQ2xpZW50LmNsaWVudFBsYXRmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVE9OQ2xpZW50LmNvcmUgPSBhd2FpdCBUT05DbGllbnQuY2xpZW50UGxhdGZvcm0uY3JlYXRlTGlicmFyeSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZHVsZXM6IFRPTk1vZHVsZVtdID0gWy4uLnRoaXMubW9kdWxlcy52YWx1ZXMoKV07XG4gICAgICAgIGZvciAoY29uc3QgbW9kdWxlIG9mIG1vZHVsZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5zZXR1cCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVhciBkb3duIHRoaXMgY2xpZW50IGluc3RhbmNlLlxuICAgICAqIE5vdGUgdGhhdCBhZnRlciB5b3UgaGF2ZSBjYWxsZWQgdGhpcyBtZXRob2QgYWxsIGZ1dHVyZSB1c2Ugb2YgdGhpcyBpbnN0YW5jZSB3aWxsIGZhaWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIGFzeW5jIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnF1ZXJpZXMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBUT05Nb2R1bGVDb250ZXh0XG5cbiAgICBnZXRDb3JlKCk6ID9UT05DbGllbnRMaWJyYXJ5IHtcbiAgICAgICAgcmV0dXJuIFRPTkNsaWVudC5jb3JlO1xuICAgIH1cblxuICAgIGdldE1vZHVsZTxUPihNb2R1bGVDbGFzczogdHlwZW9mIFRPTk1vZHVsZSk6IFQge1xuICAgICAgICBjb25zdCBuYW1lID0gTW9kdWxlQ2xhc3MubW9kdWxlTmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdNb2R1bGUgPSB0aGlzLm1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdNb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiAoZXhpc3RpbmdNb2R1bGU6IGFueSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbW9kdWxlID0gbmV3IE1vZHVsZUNsYXNzKHRoaXMpO1xuICAgICAgICB0aGlzLm1vZHVsZXMuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiAobW9kdWxlOiBhbnkpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLnF1ZXJ5KCdxdWVyeXtnZXRNYW5hZ2VtZW50QWNjZXNzS2V5fScpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleTtcbiAgICB9XG5cblxuICAgIGFzeW5jIF9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXM6IFRPTkFjY2Vzc0tleXNNYW5hZ2VtZW50UGFyYW1zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHBhcmFtcy5zaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zLnNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2lnbktleXMgPSBwYXJhbXMuYWNjb3VudEtleXM7XG4gICAgICAgIGlmIChzaWduS2V5cykge1xuICAgICAgICAgICAgY29uc3QgbWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuZ2V0TWFuYWdlbWVudEFjY2Vzc0tleSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3J5cHRvLm5hY2xTaWduKFxuICAgICAgICAgICAgICAgIHsgdGV4dDogbWFuYWdlbWVudEFjY2Vzc0tleSB9LFxuICAgICAgICAgICAgICAgIGAke3NpZ25LZXlzLnNlY3JldH0ke3NpZ25LZXlzLnB1YmxpY31gLFxuICAgICAgICAgICAgICAgICdIZXgnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgYXN5bmMgcmVnaXN0ZXJBY2Nlc3NLZXlzKFxuICAgICAgICBwYXJhbXM6IFRPTlJlZ2lzdGVyQWNjZXNzS2V5c1BhcmFtc1xuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkgPSBhd2FpdCB0aGlzLl9yZXNvbHZlU2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleShwYXJhbXMpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLl9xdWVyaWVzLm11dGF0aW9uKFxuICAgICAgICAgICAgYG11dGF0aW9uIHJlZ2lzdGVyQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW0FjY2Vzc0tleV0sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJBY2Nlc3NLZXlzKGFjY291bnQ6ICRhY2NvdW50LCBrZXlzOiAka2V5cywgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleTogJHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXkpXG4gICAgICAgICAgICAgICAgfWAsIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiBwYXJhbXMuYWNjb3VudCxcbiAgICAgICAgICAgICAgICBrZXlzOiBwYXJhbXMua2V5cyxcbiAgICAgICAgICAgICAgICBzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5yZWdpc3RlckFjY2Vzc0tleXM7XG4gICAgfVxuXG4gICAgYXN5bmMgcmV2b2tlQWNjZXNzS2V5cyhcbiAgICAgICAgcGFyYW1zOiBUT05SZXZva2VBY2Nlc3NLZXlzUGFyYW1zXG4gICAgKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSA9IGF3YWl0IHRoaXMuX3Jlc29sdmVTaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3F1ZXJpZXMubXV0YXRpb24oXG4gICAgICAgICAgICBgbXV0YXRpb24gcmV2b2tlQWNjZXNzS2V5cygkYWNjb3VudDogU3RyaW5nLCAka2V5czogW1N0cmluZ10sICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5OiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV2b2tlQWNjZXNzS2V5cyhhY2NvdW50OiAkYWNjb3VudCwga2V5czogJGtleXMsIHNpZ25lZE1hbmFnZW1lbnRBY2Nlc3NLZXk6ICRzaWduZWRNYW5hZ2VtZW50QWNjZXNzS2V5KVxuICAgICAgICAgICAgICAgIH1gLCB7XG4gICAgICAgICAgICAgICAgYWNjb3VudDogcGFyYW1zLmFjY291bnQsXG4gICAgICAgICAgICAgICAga2V5czogcGFyYW1zLmtleXMsXG4gICAgICAgICAgICAgICAgc2lnbmVkTWFuYWdlbWVudEFjY2Vzc0tleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEucmV2b2tlQWNjZXNzS2V5cztcbiAgICB9XG5cbiAgICBhc3luYyB0cmFjZTxUPihcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBmOiAoc3BhbjogU3BhbikgPT4gUHJvbWlzZTxUPixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKG5hbWUsIHsgY2hpbGRPZjogcGFyZW50U3BhbiB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKFRhZ3MuU1BBTl9LSU5ELCAnY2xpZW50Jyk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmKHNwYW4pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3Jlc3VsdCcsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFuLmZpbmlzaCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNwYW4ubG9nKHsgZXZlbnQ6ICdmYWlsZWQnLCBwYXlsb2FkOiBlcnJvciB9KTtcbiAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgc3RhdGljIGNsaWVudFBsYXRmb3JtOiA/VE9OQ2xpZW50UGxhdGZvcm0gPSBudWxsO1xuICAgIHN0YXRpYyBjb3JlOiA/VE9OQ2xpZW50TGlicmFyeSA9IG51bGw7XG5cbiAgICBtb2R1bGVzOiBNYXA8c3RyaW5nLCBUT05Nb2R1bGU+O1xufVxuXG5leHBvcnQgY2xhc3MgVE9OQ2xpZW50RXJyb3Ige1xuICAgIHN0YXRpYyBzb3VyY2UgPSB7XG4gICAgICAgIENMSUVOVDogJ2NsaWVudCcsXG4gICAgICAgIE5PREU6ICdub2RlJ1xuICAgIH07XG4gICAgc3RhdGljIGNvZGUgPSB7XG4gICAgICAgIENMSUVOVF9ET0VTX05PVF9DT05GSUdVUkVEOiAxMDAwLFxuICAgICAgICBTRU5EX05PREVfUkVRVUVTVF9GQUlMRUQ6IDEwMDEsXG4gICAgICAgIFJVTl9MT0NBTF9BQ0NPVU5UX0RPRVNfTk9UX0VYSVNUUzogMTAwMixcbiAgICAgICAgV0FJVF9GT1JfVElNRU9VVDogMTAwMyxcbiAgICAgICAgSU5URVJOQUxfRVJST1I6IDEwMDQsXG4gICAgICAgIFFVRVJZX0ZBSUxFRDogMTAwNSxcbiAgICAgICAgTUVTU0FHRV9FWFBJUkVEOiAxMDA2XG4gICAgfTtcblxuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBjb2RlOiBudW1iZXI7XG4gICAgZGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nLCBkYXRhPzogYW55KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc0NsaWVudEVycm9yKGVycm9yOiBhbnksIGNvZGU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGVycm9yLnNvdXJjZSA9PT0gVE9OQ2xpZW50RXJyb3Iuc291cmNlLkNMSUVOVClcbiAgICAgICAgICAgICYmIChlcnJvci5jb2RlID09PSBjb2RlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJuYWxFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBUT05DbGllbnRFcnJvciB7XG4gICAgICAgIHJldHVybiBuZXcgVE9OQ2xpZW50RXJyb3IoXG4gICAgICAgICAgICBgSW50ZXJuYWwgZXJyb3I6ICR7bWVzc2FnZX1gLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5JTlRFUk5BTF9FUlJPUixcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsaWVudERvZXNOb3RDb25maWd1cmVkKCk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdUT04gQ2xpZW50IGRvZXMgbm90IGNvbmZpZ3VyZWQnLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5DTElFTlRfRE9FU19OT1RfQ09ORklHVVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNlbmROb2RlUmVxdWVzdEZhaWxlZChyZXNwb25zZVRleHQ6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBTZW5kIG5vZGUgcmVxdWVzdCBmYWlsZWQ6ICR7cmVzcG9uc2VUZXh0fWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlNFTkRfTk9ERV9SRVFVRVNUX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJ1bkxvY2FsQWNjb3VudERvZXNOb3RFeGlzdHMoZnVuY3Rpb25OYW1lOiBzdHJpbmcsIGFkZHJlc3M6IHN0cmluZyk6IFRPTkNsaWVudEVycm9yIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBbJHtmdW5jdGlvbk5hbWV9XSBydW4gbG9jYWwgZmFpbGVkOiBhY2NvdW50IFske2FkZHJlc3N9XSBkb2VzIG5vdCBleGlzdHNgLFxuICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3IuY29kZS5SVU5fTE9DQUxfQUNDT1VOVF9ET0VTX05PVF9FWElTVFMsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyB3YWl0Rm9yVGltZW91dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICdXYWl0IGZvciBvcGVyYXRpb24gcmVqZWN0ZWQgb24gdGltZW91dCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLldBSVRfRk9SX1RJTUVPVVQsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5zb3VyY2UuQ0xJRU5ULFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeUZhaWxlZChlcnJvcnM6IEVycm9yW10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgIGBRdWVyeSBmYWlsZWQ6ICR7ZXJyb3JzLm1hcCh4ID0+IHgubWVzc2FnZSB8fCB4LnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpfWAsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLlFVRVJZX0ZBSUxFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1lc3NhZ2VFeHBpcmVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFRPTkNsaWVudEVycm9yKFxuICAgICAgICAgICAgJ01lc3NhZ2UgZXhwaXJlZCcsXG4gICAgICAgICAgICBUT05DbGllbnRFcnJvci5jb2RlLk1FU1NBR0VfRVhQSVJFRCxcbiAgICAgICAgICAgIFRPTkNsaWVudEVycm9yLnNvdXJjZS5DTElFTlQsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzTWVzc2FnZUV4cGlyZWQoZXJyb3I6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gVE9OQ2xpZW50RXJyb3IuaXNDbGllbnRFcnJvcihlcnJvciwgVE9OQ2xpZW50RXJyb3IuY29kZS5NRVNTQUdFX0VYUElSRUQpO1xuICAgIH1cbn1cblxuIl19