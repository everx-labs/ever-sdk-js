function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { setContext } from 'apollo-link-context';
import { FORMAT_TEXT_MAP, Tags, Span, SpanContext } from 'opentracing';
import { TONClient, TONClientError } from '../TONClient';
import { TONModule } from '../TONModule';
import TONConfigModule, { URLParts } from './TONConfigModule';
export var MAX_TIMEOUT = 2147483647;

function resolveParams(args, requiredParamName, resolveArgs) {
  return args.length === 1 && requiredParamName in args[0] ? args[0] : resolveArgs();
}

var TONQueriesModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONQueriesModule, _TONModule);

  function TONQueriesModule(context) {
    var _this;

    _classCallCheck(this, TONQueriesModule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TONQueriesModule).call(this, context));

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "overrideWsUrl", void 0);

    _defineProperty(_assertThisInitialized(_this), "transactions", void 0);

    _defineProperty(_assertThisInitialized(_this), "messages", void 0);

    _defineProperty(_assertThisInitialized(_this), "blocks", void 0);

    _defineProperty(_assertThisInitialized(_this), "accounts", void 0);

    _defineProperty(_assertThisInitialized(_this), "graphqlClient", void 0);

    _this.graphqlClient = null;
    _this.overrideWsUrl = null;
    return _this;
  }

  _createClass(TONQueriesModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(function* () {
        this.config = this.context.getModule(TONConfigModule);
        this.transactions = new TONQueriesModuleCollection(this, 'transactions');
        this.messages = new TONQueriesModuleCollection(this, 'messages');
        this.blocks = new TONQueriesModuleCollection(this, 'blocks');
        this.accounts = new TONQueriesModuleCollection(this, 'accounts');
      });

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "detectRedirect",
    value: function () {
      var _detectRedirect = _asyncToGenerator(function* (fetch, sourceUrl) {
        var response = yield fetch(sourceUrl);

        if (response.redirected === true) {
          return response.url;
        }

        if (response.redirected === false) {
          return '';
        }

        var sourceLocation = URLParts.parse(sourceUrl).fixQuery(function (_) {
          return '';
        }).toString().toLowerCase();
        var responseLocation = URLParts.parse(response.url).fixQuery(function (_) {
          return '';
        }).toString().toLowerCase();
        return responseLocation !== sourceLocation ? response.url : '';
      });

      function detectRedirect(_x, _x2) {
        return _detectRedirect.apply(this, arguments);
      }

      return detectRedirect;
    }()
  }, {
    key: "getClientConfig",
    value: function () {
      var _getClientConfig = _asyncToGenerator(function* () {
        var config = this.config;
        var clientPlatform = TONClient.clientPlatform;

        if (!clientPlatform) {
          throw Error('TON Client does not configured');
        }

        var fetch = clientPlatform.fetch;

        function getConfigForServer(server) {
          var httpParts = URLParts.parse(server).fixProtocol(function (x) {
            return x === 'http://' ? x : 'https://';
          }).fixPath(function (x) {
            return `${x}/graphql`;
          });
          var http = httpParts.toString();
          var ws = httpParts.fixProtocol(function (x) {
            return x === 'http://' ? 'ws://' : 'wss://';
          }).toString();
          return {
            httpUrl: http,
            wsUrl: ws,
            fetch: clientPlatform.fetch,
            WebSocket: clientPlatform.WebSocket
          };
        }

        for (var server of config.data.servers) {
          try {
            var clientConfig = getConfigForServer(server);
            var redirected = yield this.detectRedirect(fetch, `${clientConfig.httpUrl}?query=%7Binfo%7Bversion%7D%7D`);

            if (redirected !== '') {
              var httpParts = URLParts.parse(redirected).fixQuery(function (_) {
                return '';
              });
              clientConfig.httpUrl = httpParts.toString();
              clientConfig.wsUrl = httpParts.fixProtocol(function (x) {
                return x === 'http://' ? 'ws://' : 'wss://';
              }).toString();
            }

            return clientConfig;
          } catch (error) {
            console.log(`[getClientConfig] for server "${server}" failed`, error);
          }
        }

        return getConfigForServer(config.data.servers[0]);
      });

      function getClientConfig() {
        return _getClientConfig.apply(this, arguments);
      }

      return getClientConfig;
    }()
  }, {
    key: "getAccountsCount",
    value: function () {
      var _getAccountsCount = _asyncToGenerator(function* (parentSpan) {
        var result = yield this.query('query{getAccountsCount}', undefined, parentSpan);
        return result.data.getAccountsCount;
      });

      function getAccountsCount(_x3) {
        return _getAccountsCount.apply(this, arguments);
      }

      return getAccountsCount;
    }()
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _getTransactionsCount = _asyncToGenerator(function* (parentSpan) {
        var result = yield this.query('query{getTransactionsCount}', undefined, parentSpan);
        return result.data.getTransactionsCount;
      });

      function getTransactionsCount(_x4) {
        return _getTransactionsCount.apply(this, arguments);
      }

      return getTransactionsCount;
    }()
  }, {
    key: "getAccountsTotalBalance",
    value: function () {
      var _getAccountsTotalBalance = _asyncToGenerator(function* (parentSpan) {
        var result = yield this.query('query{getAccountsTotalBalance}', undefined, parentSpan);
        return result.data.getAccountsTotalBalance;
      });

      function getAccountsTotalBalance(_x5) {
        return _getAccountsTotalBalance.apply(this, arguments);
      }

      return getAccountsTotalBalance;
    }()
  }, {
    key: "postRequests",
    value: function () {
      var _postRequests = _asyncToGenerator(function* (requests, parentSpan) {
        var _this2 = this;

        return this.context.trace('queries.postRequests', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(function* (span) {
            return _this2.graphqlMutation(`mutation postRequests($requests: [Request]) {
                postRequests(requests: $requests)
            }`, {
              requests
            }, span);
          });

          return function (_x8) {
            return _ref.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function postRequests(_x6, _x7) {
        return _postRequests.apply(this, arguments);
      }

      return postRequests;
    }()
  }, {
    key: "mutation",
    value: function () {
      var _mutation = _asyncToGenerator(function* (ql, variables = {}, parentSpan) {
        var _this3 = this;

        return this.context.trace('queries.mutation', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(function* (span) {
            span.setTag('params', {
              mutation: ql,
              variables
            });
            return _this3.graphqlMutation(ql, variables, span);
          });

          return function (_x10) {
            return _ref2.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function mutation(_x9) {
        return _mutation.apply(this, arguments);
      }

      return mutation;
    }()
  }, {
    key: "query",
    value: function () {
      var _query = _asyncToGenerator(function* (ql, variables = {}, parentSpan) {
        var _this4 = this;

        return this.context.trace('queries.query', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(function* (span) {
            span.setTag('params', {
              query: ql,
              variables
            });
            return _this4.graphqlQuery(ql, variables, span);
          });

          return function (_x12) {
            return _ref3.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function query(_x11) {
        return _query.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "graphqlMutation",
    value: function () {
      var _graphqlMutation = _asyncToGenerator(function* (ql, variables = {}, span) {
        var mutation = gql([ql]);
        return this.graphQl(function (client) {
          return client.mutate({
            mutation,
            variables,
            context: {
              traceSpan: span
            }
          });
        });
      });

      function graphqlMutation(_x13) {
        return _graphqlMutation.apply(this, arguments);
      }

      return graphqlMutation;
    }()
  }, {
    key: "graphqlQuery",
    value: function () {
      var _graphqlQuery = _asyncToGenerator(function* (ql, variables = {}, span) {
        var query = gql([ql]);
        return this.graphQl(function (client) {
          return client.query({
            query,
            variables,
            context: {
              traceSpan: span
            }
          });
        }, span);
      });

      function graphqlQuery(_x14) {
        return _graphqlQuery.apply(this, arguments);
      }

      return graphqlQuery;
    }()
  }, {
    key: "graphQl",
    value: function () {
      var _graphQl = _asyncToGenerator(function* (request, span) {
        var client = yield this.graphqlClientRequired(span);

        try {
          return yield request(client);
        } catch (error) {
          var gqlErr = error.graphQLErrors && error.graphQLErrors[0];

          if (gqlErr) {
            var clientErr = new Error(gqlErr.message);
            var gqlExc = gqlErr.extensions && gqlErr.extensions.exception || {};
            clientErr.number = gqlExc.code || 0;
            clientErr.code = gqlExc.code || 0;
            clientErr.source = gqlExc.source || 'client';
            throw clientErr;
          }

          var errors = error && error.networkError && error.networkError.result && error.networkError.result.errors;

          if (errors) {
            throw TONClientError.queryFailed(errors);
          } else {
            throw error;
          }
        }
      });

      function graphQl(_x15, _x16) {
        return _graphQl.apply(this, arguments);
      }

      return graphQl;
    }()
  }, {
    key: "graphqlClientRequired",
    value: function () {
      var _graphqlClientRequired = _asyncToGenerator(function* (parentSpan) {
        var _this5 = this;

        if (this.graphqlClient) {
          return this.graphqlClient;
        }

        yield this.context.trace('setup client', /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(function* (span) {
            return _this5.createGraphqlClient(span);
          });

          return function (_x18) {
            return _ref4.apply(this, arguments);
          };
        }(), parentSpan);
        return this.graphqlClient;
      });

      function graphqlClientRequired(_x17) {
        return _graphqlClientRequired.apply(this, arguments);
      }

      return graphqlClientRequired;
    }()
  }, {
    key: "createGraphqlClient",
    value: function () {
      var _createGraphqlClient = _asyncToGenerator(function* (span) {
        var _this6 = this;

        var useHttp = !this.config.data.useWebSocketForQueries;
        var clientConfig = yield this.getClientConfig();
        var wsLink = null;
        var httpLink = null;
        var subsOptions = this.config.tracer.inject(span, FORMAT_TEXT_MAP, {});
        var subscriptionClient = new SubscriptionClient(clientConfig.wsUrl, {
          reconnect: true,
          connectionParams: function () {
            return {
              accessKey: _this6.config.data && _this6.config.data.accessKey,
              headers: subsOptions
            };
          }
        }, clientConfig.WebSocket);
        subscriptionClient.onReconnected(function () {
          console.log('[TONClient.queries]', 'WebSocket Reconnected');
        });
        var detectingRedirection = false;
        subscriptionClient.onError(function () {
          console.log('[TONClient.queries]', 'WebSocket Failed');

          if (detectingRedirection) {
            return;
          }

          _asyncToGenerator(function* () {
            detectingRedirection = true;

            try {
              var newConfig = yield _this6.getClientConfig();
              var configIsChanged = newConfig.httpUrl !== clientConfig.httpUrl || newConfig.wsUrl !== clientConfig.wsUrl;

              if (configIsChanged) {
                console.log('[TONClient.queries]', 'Client config changed');
                clientConfig = newConfig;
                subscriptionClient.url = newConfig.wsUrl;

                if (wsLink) {
                  wsLink.url = newConfig.wsUrl;
                }

                if (httpLink) {
                  httpLink.uri = newConfig.httpUrl;
                }
              }
            } catch (err) {
              console.log('[TONClient.queries] redirection detector failed', err);
            }

            detectingRedirection = false;
          })();
        });

        subscriptionClient.maxConnectTimeGenerator.duration = function () {
          return subscriptionClient.maxConnectTimeGenerator.max;
        };

        var tracerLink = yield setContext(function (_, req) {
          var resolvedSpan = req && req.traceSpan || span;
          req.headers = {};

          _this6.config.tracer.inject(resolvedSpan, FORMAT_TEXT_MAP, req.headers);

          var accessKey = _this6.config.data && _this6.config.data.accessKey;

          if (accessKey) {
            req.headers.accessKey = accessKey;
          }

          return {
            headers: req.headers
          };
        });

        var wrapLink = function (link) {
          return tracerLink.concat(link);
        };

        var isSubscription = function ({
          query
        }) {
          var definition = getMainDefinition(query);
          return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
        };

        wsLink = new WebSocketLink(subscriptionClient);
        httpLink = useHttp ? new HttpLink({
          uri: clientConfig.httpUrl,
          fetch: clientConfig.fetch
        }) : null;
        var link = httpLink ? split(isSubscription, wrapLink(wsLink), wrapLink(httpLink)) : wrapLink(wsLink);
        this.graphqlClient = new ApolloClient({
          cache: new InMemoryCache({}),
          link,
          defaultOptions: {
            watchQuery: {
              fetchPolicy: 'no-cache'
            },
            query: {
              fetchPolicy: 'no-cache'
            }
          }
        });
      });

      function createGraphqlClient(_x19) {
        return _createGraphqlClient.apply(this, arguments);
      }

      return createGraphqlClient;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator(function* () {
        if (this.graphqlClient) {
          var client = this.graphqlClient;
          this.graphqlClient = null;
          client.stop();
          yield client.clearStore();
        }
      });

      function close() {
        return _close.apply(this, arguments);
      }

      return close;
    }()
  }]);

  return TONQueriesModule;
}(TONModule);

export { TONQueriesModule as default };

var TONQueriesModuleCollection = /*#__PURE__*/function () {
  function TONQueriesModuleCollection(module, collectionName) {
    _classCallCheck(this, TONQueriesModuleCollection);

    _defineProperty(this, "module", void 0);

    _defineProperty(this, "collectionName", void 0);

    _defineProperty(this, "typeName", void 0);

    this.module = module;
    this.collectionName = collectionName;
    this.typeName = `${collectionName[0].toUpperCase()}${collectionName.slice(1, -1)}`;
  }

  _createClass(TONQueriesModuleCollection, [{
    key: "query",
    value: function () {
      var _query2 = _asyncToGenerator(function* (...args
      /*
          filterOrParams: any | TONQueryParams,
          result: string,
          orderBy?: OrderBy[],
          limit?: number,
          timeout?: number,
          parentSpan?: (Span | SpanContext)
       */
      ) {
        var _this7 = this;

        var {
          filter,
          result,
          orderBy,
          limit,
          timeout,
          parentSpan
        } = resolveParams(args, 'filter', function () {
          return {
            filter: args[0],
            result: args[1],
            orderBy: args[2],
            limit: args[3],
            timeout: args[4],
            parentSpan: args[5]
          };
        });
        return this.module.context.trace(`${this.collectionName}.query`, /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(function* (span) {
            span.setTag('params', {
              filter,
              result,
              orderBy,
              limit,
              timeout
            });
            var c = _this7.collectionName;
            var t = _this7.typeName;
            var ql = `query ${c}($filter: ${t}Filter, $orderBy: [QueryOrderBy], $limit: Int, $timeout: Float) {
                ${c}(filter: $filter, orderBy: $orderBy, limit: $limit, timeout: $timeout) { ${result} }
            }`;
            var variables = {
              filter,
              orderBy,
              limit
            };

            if (timeout) {
              variables.timeout = Math.min(MAX_TIMEOUT, timeout);
            }

            return (yield _this7.module.graphqlQuery(ql, variables, span)).data[c];
          });

          return function (_x20) {
            return _ref6.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "subscribe",
    value: function subscribe(...args
    /*
    filterOrParams: any | TONSubscribeParams,
    result?: string,
    onDocEvent?: DocEvent,
    onError?: (err: Error) => void
     */
    ) {
      var _this8 = this;

      var {
        filter,
        result,
        onDocEvent,
        onError
      } = resolveParams(args, 'filter', function () {
        return {
          filter: args[0],
          result: args[1],
          onDocEvent: args[2],
          onError: args[3]
        };
      });
      var span = this.module.config.tracer.startSpan('TONQueriesModule.js:subscribe ');
      span.setTag(Tags.SPAN_KIND, 'client');
      var text = `subscription ${this.collectionName}($filter: ${this.typeName}Filter) {
            ${this.collectionName}(filter: $filter) { ${result} }
        }`;
      var query = gql([text]);
      var subscription = null;

      _asyncToGenerator(function* () {
        try {
          var client = yield _this8.module.graphqlClientRequired(span);
          var observable = client.subscribe({
            query,
            variables: {
              filter
            }
          });
          subscription = observable.subscribe(function (message) {
            onDocEvent('insert/update', message.data[_this8.collectionName]);
          });
        } catch (error) {
          span.log({
            event: 'failed',
            payload: error
          });

          if (onError) {
            onError(error);
          } else {
            console.log('TON Client subscription error', error);
          }
        }
      })();

      return {
        unsubscribe: function () {
          if (subscription) {
            subscription.unsubscribe();
            span.finish();
          }
        }
      };
    }
  }, {
    key: "waitFor",
    value: function () {
      var _waitFor = _asyncToGenerator(function* (...args
      /*
      filterOrParams: any | TONWaitForParams,
      result: string,
      timeout?: number,
      parentSpan?: (Span | SpanContext)
       */
      ) {
        var {
          filter,
          result,
          timeout: paramsTimeout,
          parentSpan
        } = resolveParams(args, 'filter', function () {
          return {
            filter: args[0],
            result: args[1],
            timeout: args[2],
            parentSpan: args[3]
          };
        });
        var timeout = paramsTimeout || this.module.config.waitForTimeout();
        var docs = yield this.query({
          filter,
          result,
          timeout,
          parentSpan
        });

        if (docs.length > 0) {
          return docs[0];
        }

        throw TONClientError.waitForTimeout();
      });

      function waitFor() {
        return _waitFor.apply(this, arguments);
      }

      return waitFor;
    }()
  }]);

  return TONQueriesModuleCollection;
}();

TONQueriesModule.moduleName = 'TONQueriesModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlF1ZXJpZXNNb2R1bGUuanMiXSwibmFtZXMiOlsiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb0NsaWVudCIsIkFwb2xsb0xpbmsiLCJzcGxpdCIsIkh0dHBMaW5rIiwiV2ViU29ja2V0TGluayIsImdldE1haW5EZWZpbml0aW9uIiwiZ3FsIiwiU3Vic2NyaXB0aW9uQ2xpZW50Iiwic2V0Q29udGV4dCIsIkZPUk1BVF9URVhUX01BUCIsIlRhZ3MiLCJTcGFuIiwiU3BhbkNvbnRleHQiLCJUT05DbGllbnQiLCJUT05DbGllbnRFcnJvciIsIlRPTk1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsIlVSTFBhcnRzIiwiTUFYX1RJTUVPVVQiLCJyZXNvbHZlUGFyYW1zIiwiYXJncyIsInJlcXVpcmVkUGFyYW1OYW1lIiwicmVzb2x2ZUFyZ3MiLCJsZW5ndGgiLCJUT05RdWVyaWVzTW9kdWxlIiwiY29udGV4dCIsImdyYXBocWxDbGllbnQiLCJvdmVycmlkZVdzVXJsIiwiY29uZmlnIiwiZ2V0TW9kdWxlIiwidHJhbnNhY3Rpb25zIiwiVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24iLCJtZXNzYWdlcyIsImJsb2NrcyIsImFjY291bnRzIiwiZmV0Y2giLCJzb3VyY2VVcmwiLCJyZXNwb25zZSIsInJlZGlyZWN0ZWQiLCJ1cmwiLCJzb3VyY2VMb2NhdGlvbiIsInBhcnNlIiwiZml4UXVlcnkiLCJfIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlTG9jYXRpb24iLCJjbGllbnRQbGF0Zm9ybSIsIkVycm9yIiwiZ2V0Q29uZmlnRm9yU2VydmVyIiwic2VydmVyIiwiaHR0cFBhcnRzIiwiZml4UHJvdG9jb2wiLCJ4IiwiZml4UGF0aCIsImh0dHAiLCJ3cyIsImh0dHBVcmwiLCJ3c1VybCIsIldlYlNvY2tldCIsImRhdGEiLCJzZXJ2ZXJzIiwiY2xpZW50Q29uZmlnIiwiZGV0ZWN0UmVkaXJlY3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnRTcGFuIiwicmVzdWx0IiwicXVlcnkiLCJ1bmRlZmluZWQiLCJnZXRBY2NvdW50c0NvdW50IiwiZ2V0VHJhbnNhY3Rpb25zQ291bnQiLCJnZXRBY2NvdW50c1RvdGFsQmFsYW5jZSIsInJlcXVlc3RzIiwidHJhY2UiLCJzcGFuIiwiZ3JhcGhxbE11dGF0aW9uIiwicWwiLCJ2YXJpYWJsZXMiLCJzZXRUYWciLCJtdXRhdGlvbiIsImdyYXBocWxRdWVyeSIsImdyYXBoUWwiLCJjbGllbnQiLCJtdXRhdGUiLCJ0cmFjZVNwYW4iLCJyZXF1ZXN0IiwiZ3JhcGhxbENsaWVudFJlcXVpcmVkIiwiZ3FsRXJyIiwiZ3JhcGhRTEVycm9ycyIsImNsaWVudEVyciIsIm1lc3NhZ2UiLCJncWxFeGMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwibnVtYmVyIiwiY29kZSIsInNvdXJjZSIsImVycm9ycyIsIm5ldHdvcmtFcnJvciIsInF1ZXJ5RmFpbGVkIiwiY3JlYXRlR3JhcGhxbENsaWVudCIsInVzZUh0dHAiLCJ1c2VXZWJTb2NrZXRGb3JRdWVyaWVzIiwiZ2V0Q2xpZW50Q29uZmlnIiwid3NMaW5rIiwiaHR0cExpbmsiLCJzdWJzT3B0aW9ucyIsInRyYWNlciIsImluamVjdCIsInN1YnNjcmlwdGlvbkNsaWVudCIsInJlY29ubmVjdCIsImNvbm5lY3Rpb25QYXJhbXMiLCJhY2Nlc3NLZXkiLCJoZWFkZXJzIiwib25SZWNvbm5lY3RlZCIsImRldGVjdGluZ1JlZGlyZWN0aW9uIiwib25FcnJvciIsIm5ld0NvbmZpZyIsImNvbmZpZ0lzQ2hhbmdlZCIsInVyaSIsImVyciIsIm1heENvbm5lY3RUaW1lR2VuZXJhdG9yIiwiZHVyYXRpb24iLCJtYXgiLCJ0cmFjZXJMaW5rIiwicmVxIiwicmVzb2x2ZWRTcGFuIiwid3JhcExpbmsiLCJsaW5rIiwiY29uY2F0IiwiaXNTdWJzY3JpcHRpb24iLCJkZWZpbml0aW9uIiwia2luZCIsIm9wZXJhdGlvbiIsImNhY2hlIiwiZGVmYXVsdE9wdGlvbnMiLCJ3YXRjaFF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJzdG9wIiwiY2xlYXJTdG9yZSIsIm1vZHVsZSIsImNvbGxlY3Rpb25OYW1lIiwidHlwZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiZmlsdGVyIiwib3JkZXJCeSIsImxpbWl0IiwidGltZW91dCIsImMiLCJ0IiwiTWF0aCIsIm1pbiIsIm9uRG9jRXZlbnQiLCJzdGFydFNwYW4iLCJTUEFOX0tJTkQiLCJ0ZXh0Iiwic3Vic2NyaXB0aW9uIiwib2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsImV2ZW50IiwicGF5bG9hZCIsInVuc3Vic2NyaWJlIiwiZmluaXNoIiwicGFyYW1zVGltZW91dCIsIndhaXRGb3JUaW1lb3V0IiwiZG9jcyIsIm1vZHVsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBLFNBQVNBLGFBQVQsUUFBOEIsdUJBQTlCO0FBQ0EsU0FBU0MsWUFBVCxRQUE2QixlQUE3QjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLEtBQXJCLFFBQWtDLGFBQWxDO0FBQ0EsU0FBU0MsUUFBVCxRQUF5QixrQkFBekI7QUFDQSxTQUFTQyxhQUFULFFBQThCLGdCQUE5QjtBQUNBLFNBQVNDLGlCQUFULFFBQWtDLGtCQUFsQztBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsYUFBaEI7QUFDQSxTQUFTQyxrQkFBVCxRQUFtQyw0QkFBbkM7QUFDQSxTQUFTQyxVQUFULFFBQTJCLHFCQUEzQjtBQUNBLFNBQ0lDLGVBREosRUFDcUJDLElBRHJCLEVBQzJCQyxJQUQzQixFQUNpQ0MsV0FEakMsUUFFTyxhQUZQO0FBV0EsU0FBU0MsU0FBVCxFQUFvQkMsY0FBcEIsUUFBMEMsY0FBMUM7QUFFQSxTQUFTQyxTQUFULFFBQTBCLGNBQTFCO0FBQ0EsT0FBT0MsZUFBUCxJQUEwQkMsUUFBMUIsUUFBMEMsbUJBQTFDO0FBUUEsT0FBTyxJQUFNQyxXQUFXLEdBQUcsVUFBcEI7O0FBRVAsU0FBU0MsYUFBVCxDQUEwQkMsSUFBMUIsRUFBdUNDLGlCQUF2QyxFQUFrRUMsV0FBbEUsRUFBMkY7QUFDdkYsU0FBUUYsSUFBSSxDQUFDRyxNQUFMLEtBQWdCLENBQWpCLElBQXdCRixpQkFBaUIsSUFBSUQsSUFBSSxDQUFDLENBQUQsQ0FBakQsR0FBd0RBLElBQUksQ0FBQyxDQUFELENBQTVELEdBQWtFRSxXQUFXLEVBQXBGO0FBQ0g7O0lBRW9CRSxnQjs7O0FBS2pCLDRCQUFZQyxPQUFaLEVBQXVDO0FBQUE7O0FBQUE7O0FBQ25DLDBGQUFNQSxPQUFOOztBQURtQzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFFbkMsVUFBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFIbUM7QUFJdEM7Ozs7O2tEQUVhO0FBQ1YsYUFBS0MsTUFBTCxHQUFjLEtBQUtILE9BQUwsQ0FBYUksU0FBYixDQUF1QmIsZUFBdkIsQ0FBZDtBQUNBLGFBQUtjLFlBQUwsR0FBb0IsSUFBSUMsMEJBQUosQ0FBK0IsSUFBL0IsRUFBcUMsY0FBckMsQ0FBcEI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLElBQUlELDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFVBQXJDLENBQWhCO0FBQ0EsYUFBS0UsTUFBTCxHQUFjLElBQUlGLDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBQWQ7QUFDQSxhQUFLRyxRQUFMLEdBQWdCLElBQUlILDBCQUFKLENBQStCLElBQS9CLEVBQXFDLFVBQXJDLENBQWhCO0FBQ0gsTzs7Ozs7Ozs7Ozs7eURBRW9CSSxLLEVBQVlDLFMsRUFBb0M7QUFDakUsWUFBTUMsUUFBUSxTQUFTRixLQUFLLENBQUNDLFNBQUQsQ0FBNUI7O0FBQ0EsWUFBSUMsUUFBUSxDQUFDQyxVQUFULEtBQXdCLElBQTVCLEVBQWtDO0FBQzlCLGlCQUFPRCxRQUFRLENBQUNFLEdBQWhCO0FBQ0g7O0FBQ0QsWUFBSUYsUUFBUSxDQUFDQyxVQUFULEtBQXdCLEtBQTVCLEVBQW1DO0FBQy9CLGlCQUFPLEVBQVA7QUFDSDs7QUFDRCxZQUFNRSxjQUFjLEdBQUd2QixRQUFRLENBQUN3QixLQUFULENBQWVMLFNBQWYsRUFDbEJNLFFBRGtCLENBQ1QsVUFBQUMsQ0FBQztBQUFBLGlCQUFJLEVBQUo7QUFBQSxTQURRLEVBRWxCQyxRQUZrQixHQUdsQkMsV0FIa0IsRUFBdkI7QUFJQSxZQUFNQyxnQkFBZ0IsR0FBRzdCLFFBQVEsQ0FBQ3dCLEtBQVQsQ0FBZUosUUFBUSxDQUFDRSxHQUF4QixFQUNwQkcsUUFEb0IsQ0FDWCxVQUFBQyxDQUFDO0FBQUEsaUJBQUksRUFBSjtBQUFBLFNBRFUsRUFFcEJDLFFBRm9CLEdBR3BCQyxXQUhvQixFQUF6QjtBQUlBLGVBQU9DLGdCQUFnQixLQUFLTixjQUFyQixHQUFzQ0gsUUFBUSxDQUFDRSxHQUEvQyxHQUFxRCxFQUE1RDtBQUNILE87Ozs7Ozs7Ozs7OzREQUV1QjtBQUNwQixZQUFNWCxNQUFNLEdBQUcsS0FBS0EsTUFBcEI7QUFDQSxZQUFNbUIsY0FBYyxHQUFHbEMsU0FBUyxDQUFDa0MsY0FBakM7O0FBQ0EsWUFBSSxDQUFDQSxjQUFMLEVBQXFCO0FBQ2pCLGdCQUFNQyxLQUFLLENBQUMsZ0NBQUQsQ0FBWDtBQUNIOztBQUNELFlBQU1iLEtBQUssR0FBR1ksY0FBYyxDQUFDWixLQUE3Qjs7QUFFQSxpQkFBU2Msa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQTRDO0FBQ3hDLGNBQU1DLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ3dCLEtBQVQsQ0FBZVMsTUFBZixFQUNiRSxXQURhLENBQ0QsVUFBQUMsQ0FBQztBQUFBLG1CQUFJQSxDQUFDLEtBQUssU0FBTixHQUFrQkEsQ0FBbEIsR0FBc0IsVUFBMUI7QUFBQSxXQURBLEVBRWJDLE9BRmEsQ0FFTCxVQUFBRCxDQUFDO0FBQUEsbUJBQUssR0FBRUEsQ0FBRSxVQUFUO0FBQUEsV0FGSSxDQUFsQjtBQUdBLGNBQU1FLElBQUksR0FBR0osU0FBUyxDQUFDUCxRQUFWLEVBQWI7QUFDQSxjQUFNWSxFQUFFLEdBQUdMLFNBQVMsQ0FDZkMsV0FETSxDQUNNLFVBQUFDLENBQUM7QUFBQSxtQkFBSUEsQ0FBQyxLQUFLLFNBQU4sR0FBa0IsT0FBbEIsR0FBNEIsUUFBaEM7QUFBQSxXQURQLEVBRU5ULFFBRk0sRUFBWDtBQUdBLGlCQUFPO0FBQ0hhLFlBQUFBLE9BQU8sRUFBRUYsSUFETjtBQUVIRyxZQUFBQSxLQUFLLEVBQUVGLEVBRko7QUFHSHJCLFlBQUFBLEtBQUssRUFBRVksY0FBYyxDQUFDWixLQUhuQjtBQUlId0IsWUFBQUEsU0FBUyxFQUFFWixjQUFjLENBQUNZO0FBSnZCLFdBQVA7QUFNSDs7QUFFRCxhQUFLLElBQU1ULE1BQVgsSUFBcUJ0QixNQUFNLENBQUNnQyxJQUFQLENBQVlDLE9BQWpDLEVBQTBDO0FBQ3RDLGNBQUk7QUFDQSxnQkFBTUMsWUFBWSxHQUFHYixrQkFBa0IsQ0FBQ0MsTUFBRCxDQUF2QztBQUNBLGdCQUFNWixVQUFVLFNBQVMsS0FBS3lCLGNBQUwsQ0FDckI1QixLQURxQixFQUVwQixHQUFFMkIsWUFBWSxDQUFDTCxPQUFRLGdDQUZILENBQXpCOztBQUlBLGdCQUFJbkIsVUFBVSxLQUFLLEVBQW5CLEVBQXVCO0FBQ25CLGtCQUFNYSxTQUFTLEdBQUdsQyxRQUFRLENBQUN3QixLQUFULENBQWVILFVBQWYsRUFBMkJJLFFBQTNCLENBQW9DLFVBQUFDLENBQUM7QUFBQSx1QkFBSSxFQUFKO0FBQUEsZUFBckMsQ0FBbEI7QUFDQW1CLGNBQUFBLFlBQVksQ0FBQ0wsT0FBYixHQUF1Qk4sU0FBUyxDQUFDUCxRQUFWLEVBQXZCO0FBQ0FrQixjQUFBQSxZQUFZLENBQUNKLEtBQWIsR0FBcUJQLFNBQVMsQ0FDekJDLFdBRGdCLENBQ0osVUFBQUMsQ0FBQztBQUFBLHVCQUFJQSxDQUFDLEtBQUssU0FBTixHQUFrQixPQUFsQixHQUE0QixRQUFoQztBQUFBLGVBREcsRUFFaEJULFFBRmdCLEVBQXJCO0FBR0g7O0FBQ0QsbUJBQU9rQixZQUFQO0FBQ0gsV0FkRCxDQWNFLE9BQU9FLEtBQVAsRUFBYztBQUNaQyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxpQ0FBZ0NoQixNQUFPLFVBQXBELEVBQStEYyxLQUEvRDtBQUNIO0FBQ0o7O0FBQ0QsZUFBT2Ysa0JBQWtCLENBQUNyQixNQUFNLENBQUNnQyxJQUFQLENBQVlDLE9BQVosQ0FBb0IsQ0FBcEIsQ0FBRCxDQUF6QjtBQUNILE87Ozs7Ozs7Ozs7OzJEQUVzQk0sVSxFQUFvRDtBQUN2RSxZQUFNQyxNQUFNLFNBQVMsS0FBS0MsS0FBTCxDQUFXLHlCQUFYLEVBQXNDQyxTQUF0QyxFQUFpREgsVUFBakQsQ0FBckI7QUFDQSxlQUFPQyxNQUFNLENBQUNSLElBQVAsQ0FBWVcsZ0JBQW5CO0FBQ0gsTzs7Ozs7Ozs7Ozs7K0RBRTBCSixVLEVBQW9EO0FBQzNFLFlBQU1DLE1BQU0sU0FBUyxLQUFLQyxLQUFMLENBQVcsNkJBQVgsRUFBMENDLFNBQTFDLEVBQXFESCxVQUFyRCxDQUFyQjtBQUNBLGVBQU9DLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZWSxvQkFBbkI7QUFDSCxPOzs7Ozs7Ozs7OztrRUFFNkJMLFUsRUFBb0Q7QUFDOUUsWUFBTUMsTUFBTSxTQUFTLEtBQUtDLEtBQUwsQ0FBVyxnQ0FBWCxFQUE2Q0MsU0FBN0MsRUFBd0RILFVBQXhELENBQXJCO0FBQ0EsZUFBT0MsTUFBTSxDQUFDUixJQUFQLENBQVlhLHVCQUFuQjtBQUNILE87Ozs7Ozs7Ozs7O3VEQUVrQkMsUSxFQUFxQlAsVSxFQUFpRDtBQUFBOztBQUNyRixlQUFPLEtBQUsxQyxPQUFMLENBQWFrRCxLQUFiLENBQW1CLHNCQUFuQjtBQUFBLHVDQUEyQyxXQUFPQyxJQUFQLEVBQWdCO0FBQzlELG1CQUFPLE1BQUksQ0FBQ0MsZUFBTCxDQUFzQjs7Y0FBdEIsRUFFSDtBQUNBSCxjQUFBQTtBQURBLGFBRkcsRUFJSkUsSUFKSSxDQUFQO0FBS0gsV0FOTTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU1KVCxVQU5JLENBQVA7QUFPSCxPOzs7Ozs7Ozs7OzttREFHR1csRSxFQUNBQyxTQUE0QixHQUFHLEUsRUFDL0JaLFUsRUFDWTtBQUFBOztBQUNaLGVBQU8sS0FBSzFDLE9BQUwsQ0FBYWtELEtBQWIsQ0FBbUIsa0JBQW5CO0FBQUEsd0NBQXVDLFdBQU9DLElBQVAsRUFBc0I7QUFDaEVBLFlBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJDLGNBQUFBLFFBQVEsRUFBRUgsRUFEUTtBQUVsQkMsY0FBQUE7QUFGa0IsYUFBdEI7QUFJQSxtQkFBTyxNQUFJLENBQUNGLGVBQUwsQ0FBcUJDLEVBQXJCLEVBQXlCQyxTQUF6QixFQUFvQ0gsSUFBcEMsQ0FBUDtBQUNILFdBTk07O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFNSlQsVUFOSSxDQUFQO0FBT0gsTzs7Ozs7Ozs7Ozs7Z0RBR0dXLEUsRUFDQUMsU0FBNEIsR0FBRyxFLEVBQy9CWixVLEVBQ1k7QUFBQTs7QUFDWixlQUFPLEtBQUsxQyxPQUFMLENBQWFrRCxLQUFiLENBQW1CLGVBQW5CO0FBQUEsd0NBQW9DLFdBQU9DLElBQVAsRUFBc0I7QUFDN0RBLFlBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJYLGNBQUFBLEtBQUssRUFBRVMsRUFEVztBQUVsQkMsY0FBQUE7QUFGa0IsYUFBdEI7QUFJQSxtQkFBTyxNQUFJLENBQUNHLFlBQUwsQ0FBa0JKLEVBQWxCLEVBQXNCQyxTQUF0QixFQUFpQ0gsSUFBakMsQ0FBUDtBQUNILFdBTk07O0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFNSlQsVUFOSSxDQUFQO0FBT0gsTzs7Ozs7Ozs7Ozs7MERBRXFCVyxFLEVBQVlDLFNBQTRCLEdBQUcsRSxFQUFJSCxJLEVBQTBCO0FBQzNGLFlBQU1LLFFBQVEsR0FBRzNFLEdBQUcsQ0FBQyxDQUFDd0UsRUFBRCxDQUFELENBQXBCO0FBQ0EsZUFBTyxLQUFLSyxPQUFMLENBQWEsVUFBQ0MsTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUMxQ0osWUFBQUEsUUFEMEM7QUFFMUNGLFlBQUFBLFNBRjBDO0FBRzFDdEQsWUFBQUEsT0FBTyxFQUFFO0FBQ0w2RCxjQUFBQSxTQUFTLEVBQUVWO0FBRE47QUFIaUMsV0FBZCxDQUFaO0FBQUEsU0FBYixDQUFQO0FBT0gsTzs7Ozs7Ozs7Ozs7dURBRWtCRSxFLEVBQVlDLFNBQTRCLEdBQUcsRSxFQUFJSCxJLEVBQTBCO0FBQ3hGLFlBQU1QLEtBQUssR0FBRy9ELEdBQUcsQ0FBQyxDQUFDd0UsRUFBRCxDQUFELENBQWpCO0FBQ0EsZUFBTyxLQUFLSyxPQUFMLENBQWEsVUFBQ0MsTUFBRDtBQUFBLGlCQUFZQSxNQUFNLENBQUNmLEtBQVAsQ0FBYTtBQUN6Q0EsWUFBQUEsS0FEeUM7QUFFekNVLFlBQUFBLFNBRnlDO0FBR3pDdEQsWUFBQUEsT0FBTyxFQUFFO0FBQ0w2RCxjQUFBQSxTQUFTLEVBQUVWO0FBRE47QUFIZ0MsV0FBYixDQUFaO0FBQUEsU0FBYixFQU1IQSxJQU5HLENBQVA7QUFPSCxPOzs7Ozs7Ozs7OztrREFFYVcsTyxFQUFpRFgsSSxFQUEwQjtBQUNyRixZQUFNUSxNQUFNLFNBQVMsS0FBS0kscUJBQUwsQ0FBMkJaLElBQTNCLENBQXJCOztBQUNBLFlBQUk7QUFDQSx1QkFBYVcsT0FBTyxDQUFDSCxNQUFELENBQXBCO0FBQ0gsU0FGRCxDQUVFLE9BQU9wQixLQUFQLEVBQWM7QUFDWixjQUFNeUIsTUFBTSxHQUFHekIsS0FBSyxDQUFDMEIsYUFBTixJQUF1QjFCLEtBQUssQ0FBQzBCLGFBQU4sQ0FBb0IsQ0FBcEIsQ0FBdEM7O0FBQ0EsY0FBSUQsTUFBSixFQUFZO0FBQ1IsZ0JBQU1FLFNBQVMsR0FBRyxJQUFJM0MsS0FBSixDQUFVeUMsTUFBTSxDQUFDRyxPQUFqQixDQUFsQjtBQUNBLGdCQUFNQyxNQUFNLEdBQUlKLE1BQU0sQ0FBQ0ssVUFBUCxJQUFxQkwsTUFBTSxDQUFDSyxVQUFQLENBQWtCQyxTQUF4QyxJQUFzRCxFQUFyRTtBQUNDSixZQUFBQSxTQUFELENBQWlCSyxNQUFqQixHQUEwQkgsTUFBTSxDQUFDSSxJQUFQLElBQWUsQ0FBekM7QUFDQ04sWUFBQUEsU0FBRCxDQUFpQk0sSUFBakIsR0FBd0JKLE1BQU0sQ0FBQ0ksSUFBUCxJQUFlLENBQXZDO0FBQ0NOLFlBQUFBLFNBQUQsQ0FBaUJPLE1BQWpCLEdBQTBCTCxNQUFNLENBQUNLLE1BQVAsSUFBaUIsUUFBM0M7QUFDQSxrQkFBTVAsU0FBTjtBQUNIOztBQUNELGNBQU1RLE1BQU0sR0FBR25DLEtBQUssSUFDYkEsS0FBSyxDQUFDb0MsWUFERSxJQUVScEMsS0FBSyxDQUFDb0MsWUFBTixDQUFtQmhDLE1BRlgsSUFHUkosS0FBSyxDQUFDb0MsWUFBTixDQUFtQmhDLE1BQW5CLENBQTBCK0IsTUFIakM7O0FBSUEsY0FBSUEsTUFBSixFQUFZO0FBQ1Isa0JBQU1yRixjQUFjLENBQUN1RixXQUFmLENBQTJCRixNQUEzQixDQUFOO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsa0JBQU1uQyxLQUFOO0FBQ0g7QUFDSjtBQUNKLE87Ozs7Ozs7Ozs7O2dFQUUyQkcsVSxFQUF5QztBQUFBOztBQUNqRSxZQUFJLEtBQUt6QyxhQUFULEVBQXdCO0FBQ3BCLGlCQUFPLEtBQUtBLGFBQVo7QUFDSDs7QUFDRCxjQUFNLEtBQUtELE9BQUwsQ0FBYWtELEtBQWIsQ0FBbUIsY0FBbkI7QUFBQSx3Q0FBbUMsV0FBT0MsSUFBUCxFQUFnQjtBQUNyRCxtQkFBTyxNQUFJLENBQUMwQixtQkFBTCxDQUF5QjFCLElBQXpCLENBQVA7QUFDSCxXQUZLOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRUhULFVBRkcsQ0FBTjtBQUdBLGVBQU8sS0FBS3pDLGFBQVo7QUFDSCxPOzs7Ozs7Ozs7Ozs4REFFeUJrRCxJLEVBQTBCO0FBQUE7O0FBQ2hELFlBQU0yQixPQUFPLEdBQUcsQ0FBQyxLQUFLM0UsTUFBTCxDQUFZZ0MsSUFBWixDQUFpQjRDLHNCQUFsQztBQUNBLFlBQUkxQyxZQUFZLFNBQVMsS0FBSzJDLGVBQUwsRUFBekI7QUFDQSxZQUFJQyxNQUFzQixHQUFHLElBQTdCO0FBQ0EsWUFBSUMsUUFBbUIsR0FBRyxJQUExQjtBQUVBLFlBQU1DLFdBQVcsR0FBRyxLQUFLaEYsTUFBTCxDQUFZaUYsTUFBWixDQUFtQkMsTUFBbkIsQ0FBMEJsQyxJQUExQixFQUFnQ25FLGVBQWhDLEVBQWlELEVBQWpELENBQXBCO0FBQ0EsWUFBTXNHLGtCQUFrQixHQUFHLElBQUl4RyxrQkFBSixDQUN2QnVELFlBQVksQ0FBQ0osS0FEVSxFQUV2QjtBQUNJc0QsVUFBQUEsU0FBUyxFQUFFLElBRGY7QUFFSUMsVUFBQUEsZ0JBQWdCLEVBQUU7QUFBQSxtQkFBTztBQUNyQkMsY0FBQUEsU0FBUyxFQUFFLE1BQUksQ0FBQ3RGLE1BQUwsQ0FBWWdDLElBQVosSUFBb0IsTUFBSSxDQUFDaEMsTUFBTCxDQUFZZ0MsSUFBWixDQUFpQnNELFNBRDNCO0FBRXJCQyxjQUFBQSxPQUFPLEVBQUVQO0FBRlksYUFBUDtBQUFBO0FBRnRCLFNBRnVCLEVBU3ZCOUMsWUFBWSxDQUFDSCxTQVRVLENBQTNCO0FBV0FvRCxRQUFBQSxrQkFBa0IsQ0FBQ0ssYUFBbkIsQ0FBaUMsWUFBTTtBQUNuQ25ELFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLHVCQUFuQztBQUNILFNBRkQ7QUFHQSxZQUFJbUQsb0JBQW9CLEdBQUcsS0FBM0I7QUFDQU4sUUFBQUEsa0JBQWtCLENBQUNPLE9BQW5CLENBQTJCLFlBQU07QUFDN0JyRCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxrQkFBbkM7O0FBQ0EsY0FBSW1ELG9CQUFKLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsNEJBQUMsYUFBWTtBQUNUQSxZQUFBQSxvQkFBb0IsR0FBRyxJQUF2Qjs7QUFDQSxnQkFBSTtBQUNBLGtCQUFNRSxTQUFTLFNBQVMsTUFBSSxDQUFDZCxlQUFMLEVBQXhCO0FBQ0Esa0JBQU1lLGVBQWUsR0FBR0QsU0FBUyxDQUFDOUQsT0FBVixLQUFzQkssWUFBWSxDQUFDTCxPQUFuQyxJQUNqQjhELFNBQVMsQ0FBQzdELEtBQVYsS0FBb0JJLFlBQVksQ0FBQ0osS0FEeEM7O0FBRUEsa0JBQUk4RCxlQUFKLEVBQXFCO0FBQ2pCdkQsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DLHVCQUFuQztBQUNBSixnQkFBQUEsWUFBWSxHQUFHeUQsU0FBZjtBQUNBUixnQkFBQUEsa0JBQWtCLENBQUN4RSxHQUFuQixHQUF5QmdGLFNBQVMsQ0FBQzdELEtBQW5DOztBQUNBLG9CQUFJZ0QsTUFBSixFQUFZO0FBQ1JBLGtCQUFBQSxNQUFNLENBQUNuRSxHQUFQLEdBQWFnRixTQUFTLENBQUM3RCxLQUF2QjtBQUNIOztBQUNELG9CQUFJaUQsUUFBSixFQUFjO0FBQ1ZBLGtCQUFBQSxRQUFRLENBQUNjLEdBQVQsR0FBZUYsU0FBUyxDQUFDOUQsT0FBekI7QUFDSDtBQUNKO0FBQ0osYUFmRCxDQWVFLE9BQU9pRSxHQUFQLEVBQVk7QUFDVnpELGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlEQUFaLEVBQStEd0QsR0FBL0Q7QUFDSDs7QUFDREwsWUFBQUEsb0JBQW9CLEdBQUcsS0FBdkI7QUFDSCxXQXJCRDtBQXNCSCxTQTNCRDs7QUE0QkFOLFFBQUFBLGtCQUFrQixDQUFDWSx1QkFBbkIsQ0FBMkNDLFFBQTNDLEdBQXNELFlBQU07QUFDeEQsaUJBQU9iLGtCQUFrQixDQUFDWSx1QkFBbkIsQ0FBMkNFLEdBQWxEO0FBQ0gsU0FGRDs7QUFJQSxZQUFNQyxVQUFVLFNBQVN0SCxVQUFVLENBQUMsVUFBQ21DLENBQUQsRUFBSW9GLEdBQUosRUFBWTtBQUM1QyxjQUFNQyxZQUFZLEdBQUlELEdBQUcsSUFBSUEsR0FBRyxDQUFDekMsU0FBWixJQUEwQlYsSUFBL0M7QUFDQW1ELFVBQUFBLEdBQUcsQ0FBQ1osT0FBSixHQUFjLEVBQWQ7O0FBQ0EsVUFBQSxNQUFJLENBQUN2RixNQUFMLENBQVlpRixNQUFaLENBQW1CQyxNQUFuQixDQUEwQmtCLFlBQTFCLEVBQXdDdkgsZUFBeEMsRUFBeURzSCxHQUFHLENBQUNaLE9BQTdEOztBQUNBLGNBQU1ELFNBQVMsR0FBRyxNQUFJLENBQUN0RixNQUFMLENBQVlnQyxJQUFaLElBQW9CLE1BQUksQ0FBQ2hDLE1BQUwsQ0FBWWdDLElBQVosQ0FBaUJzRCxTQUF2RDs7QUFDQSxjQUFJQSxTQUFKLEVBQWU7QUFDWGEsWUFBQUEsR0FBRyxDQUFDWixPQUFKLENBQVlELFNBQVosR0FBd0JBLFNBQXhCO0FBQ0g7O0FBQ0QsaUJBQU87QUFDSEMsWUFBQUEsT0FBTyxFQUFFWSxHQUFHLENBQUNaO0FBRFYsV0FBUDtBQUdILFNBWGtDLENBQW5DOztBQVlBLFlBQU1jLFFBQVEsR0FBRyxVQUFDQyxJQUFEO0FBQUEsaUJBQWtDSixVQUFVLENBQUNLLE1BQVgsQ0FBa0JELElBQWxCLENBQWxDO0FBQUEsU0FBakI7O0FBQ0EsWUFBTUUsY0FBYyxHQUFHLFVBQUM7QUFBRS9ELFVBQUFBO0FBQUYsU0FBRCxFQUFlO0FBQ2xDLGNBQU1nRSxVQUFVLEdBQUdoSSxpQkFBaUIsQ0FBQ2dFLEtBQUQsQ0FBcEM7QUFDQSxpQkFDSWdFLFVBQVUsQ0FBQ0MsSUFBWCxLQUFvQixxQkFBcEIsSUFDR0QsVUFBVSxDQUFDRSxTQUFYLEtBQXlCLGNBRmhDO0FBSUgsU0FORDs7QUFPQTdCLFFBQUFBLE1BQU0sR0FBRyxJQUFJdEcsYUFBSixDQUFrQjJHLGtCQUFsQixDQUFUO0FBQ0FKLFFBQUFBLFFBQVEsR0FBR0osT0FBTyxHQUNaLElBQUlwRyxRQUFKLENBQWE7QUFDWHNILFVBQUFBLEdBQUcsRUFBRTNELFlBQVksQ0FBQ0wsT0FEUDtBQUVYdEIsVUFBQUEsS0FBSyxFQUFFMkIsWUFBWSxDQUFDM0I7QUFGVCxTQUFiLENBRFksR0FLWixJQUxOO0FBT0EsWUFBTStGLElBQUksR0FBR3ZCLFFBQVEsR0FDZnpHLEtBQUssQ0FBQ2tJLGNBQUQsRUFBaUJILFFBQVEsQ0FBQ3ZCLE1BQUQsQ0FBekIsRUFBbUN1QixRQUFRLENBQUN0QixRQUFELENBQTNDLENBRFUsR0FFZnNCLFFBQVEsQ0FBQ3ZCLE1BQUQsQ0FGZDtBQUdBLGFBQUtoRixhQUFMLEdBQXFCLElBQUkxQixZQUFKLENBQWlCO0FBQ2xDd0ksVUFBQUEsS0FBSyxFQUFFLElBQUl6SSxhQUFKLENBQWtCLEVBQWxCLENBRDJCO0FBRWxDbUksVUFBQUEsSUFGa0M7QUFHbENPLFVBQUFBLGNBQWMsRUFBRTtBQUNaQyxZQUFBQSxVQUFVLEVBQUU7QUFDUkMsY0FBQUEsV0FBVyxFQUFFO0FBREwsYUFEQTtBQUladEUsWUFBQUEsS0FBSyxFQUFFO0FBQ0hzRSxjQUFBQSxXQUFXLEVBQUU7QUFEVjtBQUpLO0FBSGtCLFNBQWpCLENBQXJCO0FBWUgsTzs7Ozs7Ozs7Ozs7a0RBRWE7QUFDVixZQUFJLEtBQUtqSCxhQUFULEVBQXdCO0FBQ3BCLGNBQU0wRCxNQUFNLEdBQUcsS0FBSzFELGFBQXBCO0FBQ0EsZUFBS0EsYUFBTCxHQUFxQixJQUFyQjtBQUNBMEQsVUFBQUEsTUFBTSxDQUFDd0QsSUFBUDtBQUNBLGdCQUFNeEQsTUFBTSxDQUFDeUQsVUFBUCxFQUFOO0FBQ0g7QUFDSixPOzs7Ozs7Ozs7OztFQTdTeUM5SCxTOztTQUF6QlMsZ0I7O0lBMlRmTywwQjtBQU9GLHNDQUFZK0csTUFBWixFQUFzQ0MsY0FBdEMsRUFBOEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDMUQsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWlCLEdBQUVELGNBQWMsQ0FBQyxDQUFELENBQWQsQ0FBa0JFLFdBQWxCLEVBQWdDLEdBQUVGLGNBQWMsQ0FBQ0csS0FBZixDQUFxQixDQUFyQixFQUF3QixDQUFDLENBQXpCLENBQTRCLEVBQWpGO0FBQ0g7Ozs7O2lEQUdHLEdBQUc5SDtBQUNIOzs7Ozs7OztRQVFZO0FBQUE7O0FBQ1osWUFBTTtBQUNGK0gsVUFBQUEsTUFERTtBQUVGL0UsVUFBQUEsTUFGRTtBQUdGZ0YsVUFBQUEsT0FIRTtBQUlGQyxVQUFBQSxLQUpFO0FBS0ZDLFVBQUFBLE9BTEU7QUFNRm5GLFVBQUFBO0FBTkUsWUFPRmhELGFBQWEsQ0FBaUJDLElBQWpCLEVBQXVCLFFBQXZCLEVBQWlDO0FBQUEsaUJBQU87QUFDckQrSCxZQUFBQSxNQUFNLEVBQUUvSCxJQUFJLENBQUMsQ0FBRCxDQUR5QztBQUVyRGdELFlBQUFBLE1BQU0sRUFBR2hELElBQUksQ0FBQyxDQUFELENBRndDO0FBR3JEZ0ksWUFBQUEsT0FBTyxFQUFHaEksSUFBSSxDQUFDLENBQUQsQ0FIdUM7QUFJckRpSSxZQUFBQSxLQUFLLEVBQUdqSSxJQUFJLENBQUMsQ0FBRCxDQUp5QztBQUtyRGtJLFlBQUFBLE9BQU8sRUFBR2xJLElBQUksQ0FBQyxDQUFELENBTHVDO0FBTXJEK0MsWUFBQUEsVUFBVSxFQUFFL0MsSUFBSSxDQUFDLENBQUQ7QUFOcUMsV0FBUDtBQUFBLFNBQWpDLENBUGpCO0FBZUEsZUFBTyxLQUFLMEgsTUFBTCxDQUFZckgsT0FBWixDQUFvQmtELEtBQXBCLENBQTJCLEdBQUUsS0FBS29FLGNBQWUsUUFBakQ7QUFBQSx3Q0FBMEQsV0FBT25FLElBQVAsRUFBZ0I7QUFDN0VBLFlBQUFBLElBQUksQ0FBQ0ksTUFBTCxDQUFZLFFBQVosRUFBc0I7QUFDbEJtRSxjQUFBQSxNQURrQjtBQUVsQi9FLGNBQUFBLE1BRmtCO0FBR2xCZ0YsY0FBQUEsT0FIa0I7QUFJbEJDLGNBQUFBLEtBSmtCO0FBS2xCQyxjQUFBQTtBQUxrQixhQUF0QjtBQU9BLGdCQUFNQyxDQUFDLEdBQUcsTUFBSSxDQUFDUixjQUFmO0FBQ0EsZ0JBQU1TLENBQUMsR0FBRyxNQUFJLENBQUNSLFFBQWY7QUFDQSxnQkFBTWxFLEVBQUUsR0FBSSxTQUFReUUsQ0FBRSxhQUFZQyxDQUFFO2tCQUM5QkQsQ0FBRSw0RUFBMkVuRixNQUFPO2NBRDFGO0FBR0EsZ0JBQU1XLFNBQTRCLEdBQUc7QUFDakNvRSxjQUFBQSxNQURpQztBQUVqQ0MsY0FBQUEsT0FGaUM7QUFHakNDLGNBQUFBO0FBSGlDLGFBQXJDOztBQUtBLGdCQUFJQyxPQUFKLEVBQWE7QUFDVHZFLGNBQUFBLFNBQVMsQ0FBQ3VFLE9BQVYsR0FBb0JHLElBQUksQ0FBQ0MsR0FBTCxDQUFTeEksV0FBVCxFQUFzQm9JLE9BQXRCLENBQXBCO0FBQ0g7O0FBQ0QsbUJBQU8sT0FBTyxNQUFJLENBQUNSLE1BQUwsQ0FBWTVELFlBQVosQ0FBeUJKLEVBQXpCLEVBQTZCQyxTQUE3QixFQUF3Q0gsSUFBeEMsQ0FBUCxFQUFzRGhCLElBQXRELENBQTJEMkYsQ0FBM0QsQ0FBUDtBQUNILFdBdEJNOztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBc0JKcEYsVUF0QkksQ0FBUDtBQXVCSCxPOzs7Ozs7Ozs7OzhCQUdHLEdBQUcvQztBQUNIOzs7Ozs7TUFNWTtBQUFBOztBQUNaLFVBQU07QUFDRitILFFBQUFBLE1BREU7QUFFRi9FLFFBQUFBLE1BRkU7QUFHRnVGLFFBQUFBLFVBSEU7QUFJRnJDLFFBQUFBO0FBSkUsVUFLRm5HLGFBQWEsQ0FBcUJDLElBQXJCLEVBQTJCLFFBQTNCLEVBQXFDO0FBQUEsZUFBTztBQUN6RCtILFVBQUFBLE1BQU0sRUFBRS9ILElBQUksQ0FBQyxDQUFELENBRDZDO0FBRXpEZ0QsVUFBQUEsTUFBTSxFQUFHaEQsSUFBSSxDQUFDLENBQUQsQ0FGNEM7QUFHekR1SSxVQUFBQSxVQUFVLEVBQUd2SSxJQUFJLENBQUMsQ0FBRCxDQUh3QztBQUl6RGtHLFVBQUFBLE9BQU8sRUFBR2xHLElBQUksQ0FBQyxDQUFEO0FBSjJDLFNBQVA7QUFBQSxPQUFyQyxDQUxqQjtBQVdBLFVBQU13RCxJQUFJLEdBQUcsS0FBS2tFLE1BQUwsQ0FBWWxILE1BQVosQ0FBbUJpRixNQUFuQixDQUEwQitDLFNBQTFCLENBQW9DLGdDQUFwQyxDQUFiO0FBQ0FoRixNQUFBQSxJQUFJLENBQUNJLE1BQUwsQ0FBWXRFLElBQUksQ0FBQ21KLFNBQWpCLEVBQTRCLFFBQTVCO0FBQ0EsVUFBTUMsSUFBSSxHQUFJLGdCQUFlLEtBQUtmLGNBQWUsYUFBWSxLQUFLQyxRQUFTO2NBQ3JFLEtBQUtELGNBQWUsdUJBQXNCM0UsTUFBTztVQUR2RDtBQUdBLFVBQU1DLEtBQUssR0FBRy9ELEdBQUcsQ0FBQyxDQUFDd0osSUFBRCxDQUFELENBQWpCO0FBQ0EsVUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUNBLHdCQUFDLGFBQVk7QUFDVCxZQUFJO0FBQ0EsY0FBTTNFLE1BQU0sU0FBUyxNQUFJLENBQUMwRCxNQUFMLENBQVl0RCxxQkFBWixDQUFrQ1osSUFBbEMsQ0FBckI7QUFDQSxjQUFNb0YsVUFBVSxHQUFHNUUsTUFBTSxDQUFDNkUsU0FBUCxDQUFpQjtBQUNoQzVGLFlBQUFBLEtBRGdDO0FBRWhDVSxZQUFBQSxTQUFTLEVBQUU7QUFDUG9FLGNBQUFBO0FBRE87QUFGcUIsV0FBakIsQ0FBbkI7QUFNQVksVUFBQUEsWUFBWSxHQUFHQyxVQUFVLENBQUNDLFNBQVgsQ0FBcUIsVUFBQ3JFLE9BQUQsRUFBYTtBQUM3QytELFlBQUFBLFVBQVUsQ0FBQyxlQUFELEVBQWtCL0QsT0FBTyxDQUFDaEMsSUFBUixDQUFhLE1BQUksQ0FBQ21GLGNBQWxCLENBQWxCLENBQVY7QUFDSCxXQUZjLENBQWY7QUFHSCxTQVhELENBV0UsT0FBTy9FLEtBQVAsRUFBYztBQUNaWSxVQUFBQSxJQUFJLENBQUNWLEdBQUwsQ0FBUztBQUNMZ0csWUFBQUEsS0FBSyxFQUFFLFFBREY7QUFFTEMsWUFBQUEsT0FBTyxFQUFFbkc7QUFGSixXQUFUOztBQUlBLGNBQUlzRCxPQUFKLEVBQWE7QUFDVEEsWUFBQUEsT0FBTyxDQUFDdEQsS0FBRCxDQUFQO0FBQ0gsV0FGRCxNQUVPO0FBQ0hDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaLEVBQTZDRixLQUE3QztBQUNIO0FBQ0o7QUFDSixPQXZCRDs7QUF3QkEsYUFBTztBQUNIb0csUUFBQUEsV0FBVyxFQUFFLFlBQU07QUFDZixjQUFJTCxZQUFKLEVBQWtCO0FBQ2RBLFlBQUFBLFlBQVksQ0FBQ0ssV0FBYjtBQUNBeEYsWUFBQUEsSUFBSSxDQUFDeUYsTUFBTDtBQUNIO0FBQ0o7QUFORSxPQUFQO0FBUUg7Ozs7a0RBR0csR0FBR2pKO0FBQ0g7Ozs7OztRQU1ZO0FBQ1osWUFBTTtBQUNGK0gsVUFBQUEsTUFERTtBQUVGL0UsVUFBQUEsTUFGRTtBQUdGa0YsVUFBQUEsT0FBTyxFQUFFZ0IsYUFIUDtBQUlGbkcsVUFBQUE7QUFKRSxZQUtGaEQsYUFBYSxDQUFtQkMsSUFBbkIsRUFBeUIsUUFBekIsRUFBbUM7QUFBQSxpQkFBTztBQUN2RCtILFlBQUFBLE1BQU0sRUFBRS9ILElBQUksQ0FBQyxDQUFELENBRDJDO0FBRXZEZ0QsWUFBQUEsTUFBTSxFQUFHaEQsSUFBSSxDQUFDLENBQUQsQ0FGMEM7QUFHdkRrSSxZQUFBQSxPQUFPLEVBQUdsSSxJQUFJLENBQUMsQ0FBRCxDQUh5QztBQUl2RCtDLFlBQUFBLFVBQVUsRUFBRS9DLElBQUksQ0FBQyxDQUFEO0FBSnVDLFdBQVA7QUFBQSxTQUFuQyxDQUxqQjtBQVdBLFlBQU1rSSxPQUFPLEdBQUdnQixhQUFhLElBQUksS0FBS3hCLE1BQUwsQ0FBWWxILE1BQVosQ0FBbUIySSxjQUFuQixFQUFqQztBQUNBLFlBQU1DLElBQUksU0FBUyxLQUFLbkcsS0FBTCxDQUFXO0FBQzFCOEUsVUFBQUEsTUFEMEI7QUFFMUIvRSxVQUFBQSxNQUYwQjtBQUcxQmtGLFVBQUFBLE9BSDBCO0FBSTFCbkYsVUFBQUE7QUFKMEIsU0FBWCxDQUFuQjs7QUFNQSxZQUFJcUcsSUFBSSxDQUFDakosTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCLGlCQUFPaUosSUFBSSxDQUFDLENBQUQsQ0FBWDtBQUNIOztBQUNELGNBQU0xSixjQUFjLENBQUN5SixjQUFmLEVBQU47QUFDSCxPOzs7Ozs7Ozs7Ozs7O0FBR0wvSSxnQkFBZ0IsQ0FBQ2lKLFVBQWpCLEdBQThCLGtCQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxOC0yMDIwIFRPTiBERVYgU09MVVRJT05TIExURC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgU09GVFdBUkUgRVZBTFVBVElPTiBMaWNlbnNlICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcbiAqIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxuICogTGljZW5zZSBhdDpcbiAqXG4gKiBodHRwOi8vd3d3LnRvbi5kZXYvbGljZW5zZXNcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIFRPTiBERVYgc29mdHdhcmUgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLy8gQGZsb3dcblxuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0xpbmssIHNwbGl0IH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IFdlYlNvY2tldExpbmsgfSBmcm9tICdhcG9sbG8tbGluay13cyc7XG5pbXBvcnQgeyBnZXRNYWluRGVmaW5pdGlvbiB9IGZyb20gJ2Fwb2xsby11dGlsaXRpZXMnO1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb25DbGllbnQgfSBmcm9tICdzdWJzY3JpcHRpb25zLXRyYW5zcG9ydC13cyc7XG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSAnYXBvbGxvLWxpbmstY29udGV4dCc7XG5pbXBvcnQge1xuICAgIEZPUk1BVF9URVhUX01BUCwgVGFncywgU3BhbiwgU3BhbkNvbnRleHQsXG59IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBUT05RdWVyaWVzLFxuICAgIFRPTlFDb2xsZWN0aW9uLFxuICAgIFN1YnNjcmlwdGlvbixcbiAgICBUT05RdWVyeVBhcmFtcyxcbiAgICBUT05TdWJzY3JpYmVQYXJhbXMsXG4gICAgVE9OV2FpdEZvclBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVE9OQ2xpZW50LCBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgdHlwZSB7IFRPTk1vZHVsZUNvbnRleHQgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IHsgVE9OTW9kdWxlIH0gZnJvbSAnLi4vVE9OTW9kdWxlJztcbmltcG9ydCBUT05Db25maWdNb2R1bGUsIHsgVVJMUGFydHMgfSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5cblxuZXhwb3J0IHR5cGUgUmVxdWVzdCA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIGJvZHk6IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IE1BWF9USU1FT1VUID0gMjE0NzQ4MzY0NztcblxuZnVuY3Rpb24gcmVzb2x2ZVBhcmFtczxUPihhcmdzOiBhbnlbXSwgcmVxdWlyZWRQYXJhbU5hbWU6IHN0cmluZywgcmVzb2x2ZUFyZ3M6ICgpID0+IFQpOiBUIHtcbiAgICByZXR1cm4gKGFyZ3MubGVuZ3RoID09PSAxKSAmJiAocmVxdWlyZWRQYXJhbU5hbWUgaW4gYXJnc1swXSkgPyBhcmdzWzBdIDogcmVzb2x2ZUFyZ3MoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9OUXVlcmllc01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTlF1ZXJpZXMge1xuICAgIGNvbmZpZzogVE9OQ29uZmlnTW9kdWxlO1xuXG4gICAgb3ZlcnJpZGVXc1VybDogP3N0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQ6IFRPTk1vZHVsZUNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVXc1VybCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0dXAoKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAndHJhbnNhY3Rpb25zJyk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBuZXcgVE9OUXVlcmllc01vZHVsZUNvbGxlY3Rpb24odGhpcywgJ21lc3NhZ2VzJyk7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gbmV3IFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uKHRoaXMsICdibG9ja3MnKTtcbiAgICAgICAgdGhpcy5hY2NvdW50cyA9IG5ldyBUT05RdWVyaWVzTW9kdWxlQ29sbGVjdGlvbih0aGlzLCAnYWNjb3VudHMnKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZXRlY3RSZWRpcmVjdChmZXRjaDogYW55LCBzb3VyY2VVcmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goc291cmNlVXJsKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3BvbnNlLnJlZGlyZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc291cmNlTG9jYXRpb24gPSBVUkxQYXJ0cy5wYXJzZShzb3VyY2VVcmwpXG4gICAgICAgICAgICAuZml4UXVlcnkoXyA9PiAnJylcbiAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VMb2NhdGlvbiA9IFVSTFBhcnRzLnBhcnNlKHJlc3BvbnNlLnVybClcbiAgICAgICAgICAgIC5maXhRdWVyeShfID0+ICcnKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VMb2NhdGlvbiAhPT0gc291cmNlTG9jYXRpb24gPyByZXNwb25zZS51cmwgOiAnJztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDbGllbnRDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICBjb25zdCBjbGllbnRQbGF0Zm9ybSA9IFRPTkNsaWVudC5jbGllbnRQbGF0Zm9ybTtcbiAgICAgICAgaWYgKCFjbGllbnRQbGF0Zm9ybSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1RPTiBDbGllbnQgZG9lcyBub3QgY29uZmlndXJlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZldGNoID0gY2xpZW50UGxhdGZvcm0uZmV0Y2g7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29uZmlnRm9yU2VydmVyKHNlcnZlcjogc3RyaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBodHRwUGFydHMgPSBVUkxQYXJ0cy5wYXJzZShzZXJ2ZXIpXG4gICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCA9PT0gJ2h0dHA6Ly8nID8geCA6ICdodHRwczovLycpXG4gICAgICAgICAgICAgICAgLmZpeFBhdGgoeCA9PiBgJHt4fS9ncmFwaHFsYCk7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3cyA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgIC5maXhQcm90b2NvbCh4ID0+IHggPT09ICdodHRwOi8vJyA/ICd3czovLycgOiAnd3NzOi8vJylcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHR0cFVybDogaHR0cCxcbiAgICAgICAgICAgICAgICB3c1VybDogd3MsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudFBsYXRmb3JtLmZldGNoLFxuICAgICAgICAgICAgICAgIFdlYlNvY2tldDogY2xpZW50UGxhdGZvcm0uV2ViU29ja2V0LFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZXJ2ZXIgb2YgY29uZmlnLmRhdGEuc2VydmVycykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbGllbnRDb25maWcgPSBnZXRDb25maWdGb3JTZXJ2ZXIoc2VydmVyKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZWRpcmVjdGVkID0gYXdhaXQgdGhpcy5kZXRlY3RSZWRpcmVjdChcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2gsXG4gICAgICAgICAgICAgICAgICAgIGAke2NsaWVudENvbmZpZy5odHRwVXJsfT9xdWVyeT0lN0JpbmZvJTdCdmVyc2lvbiU3RCU3RGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAocmVkaXJlY3RlZCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHR0cFBhcnRzID0gVVJMUGFydHMucGFyc2UocmVkaXJlY3RlZCkuZml4UXVlcnkoXyA9PiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy5odHRwVXJsID0gaHR0cFBhcnRzLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudENvbmZpZy53c1VybCA9IGh0dHBQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpeFByb3RvY29sKHggPT4geCA9PT0gJ2h0dHA6Ly8nID8gJ3dzOi8vJyA6ICd3c3M6Ly8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjbGllbnRDb25maWc7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBbZ2V0Q2xpZW50Q29uZmlnXSBmb3Igc2VydmVyIFwiJHtzZXJ2ZXJ9XCIgZmFpbGVkYCwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnZXRDb25maWdGb3JTZXJ2ZXIoY29uZmlnLmRhdGEuc2VydmVyc1swXSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudHNDb3VudChwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRBY2NvdW50c0NvdW50O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uc0NvdW50KHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnkoJ3F1ZXJ5e2dldFRyYW5zYWN0aW9uc0NvdW50fScsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiByZXN1bHQuZGF0YS5nZXRUcmFuc2FjdGlvbnNDb3VudDtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRBY2NvdW50c1RvdGFsQmFsYW5jZShwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCkpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5KCdxdWVyeXtnZXRBY2NvdW50c1RvdGFsQmFsYW5jZX0nLCB1bmRlZmluZWQsIHBhcmVudFNwYW4pO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGEuZ2V0QWNjb3VudHNUb3RhbEJhbGFuY2U7XG4gICAgfVxuXG4gICAgYXN5bmMgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiBSZXF1ZXN0W10sIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ3F1ZXJpZXMucG9zdFJlcXVlc3RzJywgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxNdXRhdGlvbihgbXV0YXRpb24gcG9zdFJlcXVlc3RzKCRyZXF1ZXN0czogW1JlcXVlc3RdKSB7XG4gICAgICAgICAgICAgICAgcG9zdFJlcXVlc3RzKHJlcXVlc3RzOiAkcmVxdWVzdHMpXG4gICAgICAgICAgICB9YCwge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RzLFxuICAgICAgICAgICAgfSwgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIG11dGF0aW9uKFxuICAgICAgICBxbDogc3RyaW5nLFxuICAgICAgICB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnRyYWNlKCdxdWVyaWVzLm11dGF0aW9uJywgYXN5bmMgKHNwYW46IFNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb246IHFsLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhxbE11dGF0aW9uKHFsLCB2YXJpYWJsZXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICBhc3luYyBxdWVyeShcbiAgICAgICAgcWw6IHN0cmluZyxcbiAgICAgICAgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHt9LFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgncXVlcmllcy5xdWVyeScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywge1xuICAgICAgICAgICAgICAgIHF1ZXJ5OiBxbCxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxRdWVyeShxbCwgdmFyaWFibGVzLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgZ3JhcGhxbE11dGF0aW9uKHFsOiBzdHJpbmcsIHZhcmlhYmxlczogeyBbc3RyaW5nXTogYW55IH0gPSB7fSwgc3BhbjogU3Bhbik6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IG11dGF0aW9uID0gZ3FsKFtxbF0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncmFwaFFsKChjbGllbnQpID0+IGNsaWVudC5tdXRhdGUoe1xuICAgICAgICAgICAgbXV0YXRpb24sXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBocWxRdWVyeShxbDogc3RyaW5nLCB2YXJpYWJsZXM6IHsgW3N0cmluZ106IGFueSB9ID0ge30sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGdxbChbcWxdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JhcGhRbCgoY2xpZW50KSA9PiBjbGllbnQucXVlcnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdHJhY2VTcGFuOiBzcGFuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksIHNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIGdyYXBoUWwocmVxdWVzdDogKGNsaWVudDogQXBvbGxvQ2xpZW50KSA9PiBQcm9taXNlPGFueT4sIHNwYW46IFNwYW4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KGNsaWVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCBncWxFcnIgPSBlcnJvci5ncmFwaFFMRXJyb3JzICYmIGVycm9yLmdyYXBoUUxFcnJvcnNbMF07XG4gICAgICAgICAgICBpZiAoZ3FsRXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpZW50RXJyID0gbmV3IEVycm9yKGdxbEVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncWxFeGMgPSAoZ3FsRXJyLmV4dGVuc2lvbnMgJiYgZ3FsRXJyLmV4dGVuc2lvbnMuZXhjZXB0aW9uKSB8fCB7fTtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLm51bWJlciA9IGdxbEV4Yy5jb2RlIHx8IDA7XG4gICAgICAgICAgICAgICAgKGNsaWVudEVycjogYW55KS5jb2RlID0gZ3FsRXhjLmNvZGUgfHwgMDtcbiAgICAgICAgICAgICAgICAoY2xpZW50RXJyOiBhbnkpLnNvdXJjZSA9IGdxbEV4Yy5zb3VyY2UgfHwgJ2NsaWVudCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgY2xpZW50RXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gZXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3JcbiAgICAgICAgICAgICAgICAmJiBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0XG4gICAgICAgICAgICAgICAgJiYgZXJyb3IubmV0d29ya0Vycm9yLnJlc3VsdC5lcnJvcnM7XG4gICAgICAgICAgICBpZiAoZXJyb3JzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IucXVlcnlGYWlsZWQoZXJyb3JzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyBncmFwaHFsQ2xpZW50UmVxdWlyZWQocGFyZW50U3BhbjogU3Bhbik6IFByb21pc2U8QXBvbGxvQ2xpZW50PiB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5jb250ZXh0LnRyYWNlKCdzZXR1cCBjbGllbnQnLCBhc3luYyAoc3BhbikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlR3JhcGhxbENsaWVudChzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgICAgIHJldHVybiB0aGlzLmdyYXBocWxDbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlR3JhcGhxbENsaWVudChzcGFuOiBTcGFuIHwgU3BhbkNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgdXNlSHR0cCA9ICF0aGlzLmNvbmZpZy5kYXRhLnVzZVdlYlNvY2tldEZvclF1ZXJpZXM7XG4gICAgICAgIGxldCBjbGllbnRDb25maWcgPSBhd2FpdCB0aGlzLmdldENsaWVudENvbmZpZygpO1xuICAgICAgICBsZXQgd3NMaW5rOiA/V2ViU29ja2V0TGluayA9IG51bGw7XG4gICAgICAgIGxldCBodHRwTGluazogP0h0dHBMaW5rID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzdWJzT3B0aW9ucyA9IHRoaXMuY29uZmlnLnRyYWNlci5pbmplY3Qoc3BhbiwgRk9STUFUX1RFWFRfTUFQLCB7fSk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQoXG4gICAgICAgICAgICBjbGllbnRDb25maWcud3NVcmwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbm5lY3Rpb25QYXJhbXM6ICgpID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogdGhpcy5jb25maWcuZGF0YSAmJiB0aGlzLmNvbmZpZy5kYXRhLmFjY2Vzc0tleSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogc3Vic09wdGlvbnMsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpZW50Q29uZmlnLldlYlNvY2tldCxcbiAgICAgICAgKTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uUmVjb25uZWN0ZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IFJlY29ubmVjdGVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgZGV0ZWN0aW5nUmVkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgc3Vic2NyaXB0aW9uQ2xpZW50Lm9uRXJyb3IoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnV2ViU29ja2V0IEZhaWxlZCcpO1xuICAgICAgICAgICAgaWYgKGRldGVjdGluZ1JlZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gYXdhaXQgdGhpcy5nZXRDbGllbnRDb25maWcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlnSXNDaGFuZ2VkID0gbmV3Q29uZmlnLmh0dHBVcmwgIT09IGNsaWVudENvbmZpZy5odHRwVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBuZXdDb25maWcud3NVcmwgIT09IGNsaWVudENvbmZpZy53c1VybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0lzQ2hhbmdlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tUT05DbGllbnQucXVlcmllc10nLCAnQ2xpZW50IGNvbmZpZyBjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRDb25maWcgPSBuZXdDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25DbGllbnQudXJsID0gbmV3Q29uZmlnLndzVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdzTGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdzTGluay51cmwgPSBuZXdDb25maWcud3NVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaHR0cExpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwTGluay51cmkgPSBuZXdDb25maWcuaHR0cFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW1RPTkNsaWVudC5xdWVyaWVzXSByZWRpcmVjdGlvbiBkZXRlY3RvciBmYWlsZWQnLCBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZXRlY3RpbmdSZWRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1YnNjcmlwdGlvbkNsaWVudC5tYXhDb25uZWN0VGltZUdlbmVyYXRvci5kdXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBzdWJzY3JpcHRpb25DbGllbnQubWF4Q29ubmVjdFRpbWVHZW5lcmF0b3IubWF4O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRyYWNlckxpbmsgPSBhd2FpdCBzZXRDb250ZXh0KChfLCByZXEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkU3BhbiA9IChyZXEgJiYgcmVxLnRyYWNlU3BhbikgfHwgc3BhbjtcbiAgICAgICAgICAgIHJlcS5oZWFkZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLmNvbmZpZy50cmFjZXIuaW5qZWN0KHJlc29sdmVkU3BhbiwgRk9STUFUX1RFWFRfTUFQLCByZXEuaGVhZGVycyk7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NLZXkgPSB0aGlzLmNvbmZpZy5kYXRhICYmIHRoaXMuY29uZmlnLmRhdGEuYWNjZXNzS2V5O1xuICAgICAgICAgICAgaWYgKGFjY2Vzc0tleSkge1xuICAgICAgICAgICAgICAgIHJlcS5oZWFkZXJzLmFjY2Vzc0tleSA9IGFjY2Vzc0tleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd3JhcExpbmsgPSAobGluazogQXBvbGxvTGluayk6IEFwb2xsb0xpbmsgPT4gdHJhY2VyTGluay5jb25jYXQobGluayk7XG4gICAgICAgIGNvbnN0IGlzU3Vic2NyaXB0aW9uID0gKHsgcXVlcnkgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IGdldE1haW5EZWZpbml0aW9uKHF1ZXJ5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbidcbiAgICAgICAgICAgICAgICAmJiBkZWZpbml0aW9uLm9wZXJhdGlvbiA9PT0gJ3N1YnNjcmlwdGlvbidcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHdzTGluayA9IG5ldyBXZWJTb2NrZXRMaW5rKHN1YnNjcmlwdGlvbkNsaWVudCk7XG4gICAgICAgIGh0dHBMaW5rID0gdXNlSHR0cFxuICAgICAgICAgICAgPyBuZXcgSHR0cExpbmsoe1xuICAgICAgICAgICAgICAgIHVyaTogY2xpZW50Q29uZmlnLmh0dHBVcmwsXG4gICAgICAgICAgICAgICAgZmV0Y2g6IGNsaWVudENvbmZpZy5mZXRjaCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgY29uc3QgbGluayA9IGh0dHBMaW5rXG4gICAgICAgICAgICA/IHNwbGl0KGlzU3Vic2NyaXB0aW9uLCB3cmFwTGluayh3c0xpbmspLCB3cmFwTGluayhodHRwTGluaykpXG4gICAgICAgICAgICA6IHdyYXBMaW5rKHdzTGluayk7XG4gICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHt9KSxcbiAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdhdGNoUXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2xvc2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyYXBocWxDbGllbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZ3JhcGhxbENsaWVudDtcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhxbENsaWVudCA9IG51bGw7XG4gICAgICAgICAgICBjbGllbnQuc3RvcCgpO1xuICAgICAgICAgICAgYXdhaXQgY2xpZW50LmNsZWFyU3RvcmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRyYW5zYWN0aW9uczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBtZXNzYWdlczogVE9OUUNvbGxlY3Rpb247XG5cbiAgICBibG9ja3M6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgYWNjb3VudHM6IFRPTlFDb2xsZWN0aW9uO1xuXG4gICAgZ3JhcGhxbENsaWVudDogQXBvbGxvQ2xpZW50O1xufVxuXG5cbmNsYXNzIFRPTlF1ZXJpZXNNb2R1bGVDb2xsZWN0aW9uIGltcGxlbWVudHMgVE9OUUNvbGxlY3Rpb24ge1xuICAgIG1vZHVsZTogVE9OUXVlcmllc01vZHVsZTtcblxuICAgIGNvbGxlY3Rpb25OYW1lOiBzdHJpbmc7XG5cbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IobW9kdWxlOiBUT05RdWVyaWVzTW9kdWxlLCBjb2xsZWN0aW9uTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubW9kdWxlID0gbW9kdWxlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25OYW1lID0gY29sbGVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBgJHtjb2xsZWN0aW9uTmFtZVswXS50b1VwcGVyQ2FzZSgpfSR7Y29sbGVjdGlvbk5hbWUuc2xpY2UoMSwgLTEpfWA7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnkoXG4gICAgICAgIC4uLmFyZ3NcbiAgICAgICAgLypcbiAgICAgICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05RdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIHJlc3VsdDogc3RyaW5nLFxuICAgICAgICAgICAgb3JkZXJCeT86IE9yZGVyQnlbXSxcbiAgICAgICAgICAgIGxpbWl0PzogbnVtYmVyLFxuICAgICAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KVxuICAgICAgICAgKi9cbiAgICApOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSA9IHJlc29sdmVQYXJhbXM8VE9OUXVlcnlQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9yZGVyQnk6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgbGltaXQ6IChhcmdzWzNdOiBhbnkpLFxuICAgICAgICAgICAgdGltZW91dDogKGFyZ3NbNF06IGFueSksXG4gICAgICAgICAgICBwYXJlbnRTcGFuOiBhcmdzWzVdLFxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZS5jb250ZXh0LnRyYWNlKGAke3RoaXMuY29sbGVjdGlvbk5hbWV9LnF1ZXJ5YCwgYXN5bmMgKHNwYW4pID0+IHtcbiAgICAgICAgICAgIHNwYW4uc2V0VGFnKCdwYXJhbXMnLCB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgICAgICBvcmRlckJ5LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbGxlY3Rpb25OYW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMudHlwZU5hbWU7XG4gICAgICAgICAgICBjb25zdCBxbCA9IGBxdWVyeSAke2N9KCRmaWx0ZXI6ICR7dH1GaWx0ZXIsICRvcmRlckJ5OiBbUXVlcnlPcmRlckJ5XSwgJGxpbWl0OiBJbnQsICR0aW1lb3V0OiBGbG9hdCkge1xuICAgICAgICAgICAgICAgICR7Y30oZmlsdGVyOiAkZmlsdGVyLCBvcmRlckJ5OiAkb3JkZXJCeSwgbGltaXQ6ICRsaW1pdCwgdGltZW91dDogJHRpbWVvdXQpIHsgJHtyZXN1bHR9IH1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgb3JkZXJCeSxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlcy50aW1lb3V0ID0gTWF0aC5taW4oTUFYX1RJTUVPVVQsIHRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLm1vZHVsZS5ncmFwaHFsUXVlcnkocWwsIHZhcmlhYmxlcywgc3BhbikpLmRhdGFbY107XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZShcbiAgICAgICAgLi4uYXJnc1xuICAgICAgICAvKlxuICAgICAgICBmaWx0ZXJPclBhcmFtczogYW55IHwgVE9OU3Vic2NyaWJlUGFyYW1zLFxuICAgICAgICByZXN1bHQ/OiBzdHJpbmcsXG4gICAgICAgIG9uRG9jRXZlbnQ/OiBEb2NFdmVudCxcbiAgICAgICAgb25FcnJvcj86IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICAgICAgICAqL1xuICAgICk6IFN1YnNjcmlwdGlvbiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQsXG4gICAgICAgICAgICBvbkVycm9yLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05TdWJzY3JpYmVQYXJhbXM+KGFyZ3MsICdmaWx0ZXInLCAoKSA9PiAoe1xuICAgICAgICAgICAgZmlsdGVyOiBhcmdzWzBdLFxuICAgICAgICAgICAgcmVzdWx0OiAoYXJnc1sxXTogYW55KSxcbiAgICAgICAgICAgIG9uRG9jRXZlbnQ6IChhcmdzWzJdOiBhbnkpLFxuICAgICAgICAgICAgb25FcnJvcjogKGFyZ3NbM106IGFueSksXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHRoaXMubW9kdWxlLmNvbmZpZy50cmFjZXIuc3RhcnRTcGFuKCdUT05RdWVyaWVzTW9kdWxlLmpzOnN1YnNjcmliZSAnKTtcbiAgICAgICAgc3Bhbi5zZXRUYWcoVGFncy5TUEFOX0tJTkQsICdjbGllbnQnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGBzdWJzY3JpcHRpb24gJHt0aGlzLmNvbGxlY3Rpb25OYW1lfSgkZmlsdGVyOiAke3RoaXMudHlwZU5hbWV9RmlsdGVyKSB7XG4gICAgICAgICAgICAke3RoaXMuY29sbGVjdGlvbk5hbWV9KGZpbHRlcjogJGZpbHRlcikgeyAke3Jlc3VsdH0gfVxuICAgICAgICB9YDtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBncWwoW3RleHRdKTtcbiAgICAgICAgbGV0IHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMubW9kdWxlLmdyYXBocWxDbGllbnRSZXF1aXJlZChzcGFuKTtcbiAgICAgICAgICAgICAgICBjb25zdCBvYnNlcnZhYmxlID0gY2xpZW50LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBvYnNlcnZhYmxlLnN1YnNjcmliZSgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkRvY0V2ZW50KCdpbnNlcnQvdXBkYXRlJywgbWVzc2FnZS5kYXRhW3RoaXMuY29sbGVjdGlvbk5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi5sb2coe1xuICAgICAgICAgICAgICAgICAgICBldmVudDogJ2ZhaWxlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChvbkVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUT04gQ2xpZW50IHN1YnNjcmlwdGlvbiBlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyB3YWl0Rm9yKFxuICAgICAgICAuLi5hcmdzXG4gICAgICAgIC8qXG4gICAgICAgIGZpbHRlck9yUGFyYW1zOiBhbnkgfCBUT05XYWl0Rm9yUGFyYW1zLFxuICAgICAgICByZXN1bHQ6IHN0cmluZyxcbiAgICAgICAgdGltZW91dD86IG51bWJlcixcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpXG4gICAgICAgICAqL1xuICAgICk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHBhcmFtc1RpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9ID0gcmVzb2x2ZVBhcmFtczxUT05XYWl0Rm9yUGFyYW1zPihhcmdzLCAnZmlsdGVyJywgKCkgPT4gKHtcbiAgICAgICAgICAgIGZpbHRlcjogYXJnc1swXSxcbiAgICAgICAgICAgIHJlc3VsdDogKGFyZ3NbMV06IGFueSksXG4gICAgICAgICAgICB0aW1lb3V0OiAoYXJnc1syXTogYW55KSxcbiAgICAgICAgICAgIHBhcmVudFNwYW46IGFyZ3NbM10sXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHBhcmFtc1RpbWVvdXQgfHwgdGhpcy5tb2R1bGUuY29uZmlnLndhaXRGb3JUaW1lb3V0KCk7XG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCB0aGlzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRvY3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvY3NbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iud2FpdEZvclRpbWVvdXQoKTtcbiAgICB9XG59XG5cblRPTlF1ZXJpZXNNb2R1bGUubW9kdWxlTmFtZSA9ICdUT05RdWVyaWVzTW9kdWxlJztcbiJdfQ==