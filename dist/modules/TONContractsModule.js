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
import { Span, SpanContext } from 'opentracing';
import { TONClientError } from '../TONClient';
import { TONModule } from '../TONModule';
import TONConfigModule from './TONConfigModule';
import TONQueriesModule from './TONQueriesModule';
export var TONAddressStringVariant = {
  AccountId: 'AccountId',
  Hex: 'Hex',
  Base64: 'Base64'
};
export var TONClientTransactionPhase = {
  storage: 'storage',
  computeSkipped: 'computeSkipped',
  computeVm: 'computeVm',
  action: 'action',
  unknown: 'unknown'
};
export var TONClientComputeSkippedStatus = {
  noState: 0,
  badState: 1,
  noGas: 2
};
export var TONClientStorageStatus = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
export var QInMsgType = {
  external: 0,
  ihr: 1,
  immediately: 2,
  final: 3,
  transit: 4,
  discardedFinal: 5,
  discardedTransit: 6
};
export var QOutMsgType = {
  external: 0,
  immediately: 1,
  outMsgNew: 2,
  transit: 3,
  dequeueImmediately: 4,
  dequeue: 5,
  transitRequired: 6,
  none: -1
};
export var QMessageType = {
  internal: 0,
  extIn: 1,
  extOut: 2
};
export var QMessageProcessingStatus = {
  unknown: 0,
  queued: 1,
  processing: 2,
  preliminary: 3,
  proposed: 4,
  finalized: 5,
  refused: 6,
  transiting: 7
};
export var QBlockProcessingStatus = {
  unknown: 0,
  proposed: 1,
  finalized: 2,
  refused: 3
};
export var QSplitType = {
  none: 0,
  split: 2,
  merge: 3
};
export var QAccountType = {
  uninit: 0,
  active: 1,
  frozen: 2
};
export var QTransactionType = {
  ordinary: 0,
  storage: 1,
  tick: 2,
  tock: 3,
  splitPrepare: 4,
  splitInstall: 5,
  mergePrepare: 6,
  mergeInstall: 7
};
export var QTransactionProcessingStatus = {
  unknown: 0,
  preliminary: 1,
  proposed: 2,
  finalized: 3,
  refused: 4
};
export var QAccountStatus = {
  uninit: 0,
  active: 1,
  frozen: 2,
  nonExist: 3
};
export var QAccountStatusChange = {
  unchanged: 0,
  frozen: 1,
  deleted: 2
};
export var QComputeType = {
  skipped: 0,
  vm: 1
};
export var QSkipReason = {
  noState: 0,
  badState: 1,
  noGas: 2
};
export var QBounceType = {
  negFunds: 0,
  noFunds: 1,
  ok: 2
};
export function removeProps(obj, paths) {
  var result = obj;
  paths.forEach(function (path) {
    var dotPos = path.indexOf('.');

    if (dotPos < 0) {
      if (path in result) {
        result = { ...result
        };
        delete result[path];
      }
    } else {
      var name = path.substr(0, dotPos);
      var child = result[name];

      if (child) {
        var reducedChild = removeProps(child, [path.substr(dotPos + 1)]);

        if (reducedChild !== child) {
          result = { ...result,
            [name]: reducedChild
          };
        }
      }
    }
  });
  return result;
}

var TONContractsModule = /*#__PURE__*/function (_TONModule) {
  _inherits(TONContractsModule, _TONModule);

  function TONContractsModule(...args) {
    var _this;

    _classCallCheck(this, TONContractsModule);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TONContractsModule).call(this, ...args));

    _defineProperty(_assertThisInitialized(_this), "config", void 0);

    _defineProperty(_assertThisInitialized(_this), "queries", void 0);

    _defineProperty(_assertThisInitialized(_this), "bigBalance", '0x10000000000000');

    return _this;
  }

  _createClass(TONContractsModule, [{
    key: "setup",
    value: function () {
      var _setup = _asyncToGenerator(function* () {
        this.config = this.context.getModule(TONConfigModule);
        this.queries = this.context.getModule(TONQueriesModule);
      });

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(function* (params, parentSpan) {
        var accounts = yield this.queries.accounts.query({
          id: {
            eq: params.address
          }
        }, 'balance', undefined, undefined, undefined, parentSpan);

        if (accounts && accounts.length > 0) {
          return {
            id: params.address,
            balanceGrams: accounts[0].balance
          };
        }

        return {
          id: null,
          balanceGrams: null
        };
      });

      function load(_x, _x2) {
        return _load.apply(this, arguments);
      }

      return load;
    }() // Facade functions

  }, {
    key: "deploy",
    value: function () {
      var _deploy = _asyncToGenerator(function* (params, parentSpan) {
        var _this2 = this;

        return this.context.trace('contracts.deploy', /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(function* (span) {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return _this2.internalDeployJs(params, span);
          });

          return function (_x5) {
            return _ref.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function deploy(_x3, _x4) {
        return _deploy.apply(this, arguments);
      }

      return deploy;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = _asyncToGenerator(function* (params, parentSpan) {
        var _this3 = this;

        return this.context.trace('contracts.run', /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator(function* (span) {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return _this3.internalRunJs(params, span);
          });

          return function (_x8) {
            return _ref2.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function run(_x6, _x7) {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "runLocal",
    value: function () {
      var _runLocal = _asyncToGenerator(function* (params, parentSpan) {
        var _this4 = this;

        return this.context.trace('contracts.runLocal', /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator(function* (span) {
            span.setTag('params', removeProps(params, ['keyPair.secret']));
            return _this4.internalRunLocalJs(params, span);
          });

          return function (_x11) {
            return _ref3.apply(this, arguments);
          };
        }(), parentSpan);
      });

      function runLocal(_x9, _x10) {
        return _runLocal.apply(this, arguments);
      }

      return runLocal;
    }() // Message creation

  }, {
    key: "createDeployMessage",
    value: function () {
      var _createDeployMessage = _asyncToGenerator(function* (params, retryIndex) {
        this.config.log('createDeployMessage', params);
        var constructorHeader = this.makeExpireHeader(params.package.abi, params.constructorHeader, retryIndex);
        var message = yield this.requestCore('contracts.deploy.message', {
          abi: params.package.abi,
          constructorHeader,
          constructorParams: params.constructorParams,
          initParams: params.initParams,
          imageBase64: params.package.imageBase64,
          keyPair: params.keyPair,
          workchainId: params.workchainId
        });
        return {
          message: {
            messageId: message.messageId,
            messageBodyBase64: message.messageBodyBase64,
            expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
          },
          address: message.address
        };
      });

      function createDeployMessage(_x12, _x13) {
        return _createDeployMessage.apply(this, arguments);
      }

      return createDeployMessage;
    }()
  }, {
    key: "createRunMessage",
    value: function () {
      var _createRunMessage = _asyncToGenerator(function* (params, retryIndex) {
        this.config.log('createRunMessage', params);
        var header = this.makeExpireHeader(params.abi, params.header, retryIndex);
        var message = yield this.requestCore('contracts.run.message', {
          address: params.address,
          abi: params.abi,
          functionName: params.functionName,
          header,
          input: params.input,
          keyPair: params.keyPair
        });
        message.expire = header === null || header === void 0 ? void 0 : header.expire;
        return {
          address: params.address,
          abi: params.abi,
          functionName: params.functionName,
          message
        };
      });

      function createRunMessage(_x14, _x15) {
        return _createRunMessage.apply(this, arguments);
      }

      return createRunMessage;
    }()
  }, {
    key: "createUnsignedDeployMessage",
    value: function () {
      var _createUnsignedDeployMessage = _asyncToGenerator(function* (params, retryIndex) {
        var constructorHeader = this.makeExpireHeader(params.package.abi, params.constructorHeader, retryIndex);
        var result = yield this.requestCore('contracts.deploy.encode_unsigned_message', {
          abi: params.package.abi,
          constructorHeader,
          constructorParams: params.constructorParams,
          initParams: params.initParams,
          imageBase64: params.package.imageBase64,
          publicKeyHex: params.keyPair.public,
          workchainId: params.workchainId
        });
        return {
          address: result.addressHex,
          signParams: { ...result.encoded,
            abi: params.package.abi,
            expire: constructorHeader === null || constructorHeader === void 0 ? void 0 : constructorHeader.expire
          }
        };
      });

      function createUnsignedDeployMessage(_x16, _x17) {
        return _createUnsignedDeployMessage.apply(this, arguments);
      }

      return createUnsignedDeployMessage;
    }()
  }, {
    key: "createUnsignedRunMessage",
    value: function () {
      var _createUnsignedRunMessage = _asyncToGenerator(function* (params, retryIndex) {
        var header = this.makeExpireHeader(params.abi, params.header, retryIndex);
        var signParams = yield this.requestCore('contracts.run.encode_unsigned_message', {
          address: params.address,
          abi: params.abi,
          functionName: params.functionName,
          header,
          input: params.input
        });
        return {
          address: params.address,
          functionName: params.functionName,
          signParams: { ...signParams,
            abi: params.abi,
            expire: header === null || header === void 0 ? void 0 : header.expire
          }
        };
      });

      function createUnsignedRunMessage(_x18, _x19) {
        return _createUnsignedRunMessage.apply(this, arguments);
      }

      return createUnsignedRunMessage;
    }()
  }, {
    key: "createSignedMessage",
    value: function () {
      var _createSignedMessage = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.encode_message_with_sign', params);
      });

      function createSignedMessage(_x20) {
        return _createSignedMessage.apply(this, arguments);
      }

      return createSignedMessage;
    }()
  }, {
    key: "createSignedDeployMessage",
    value: function () {
      var _createSignedDeployMessage = _asyncToGenerator(function* (params) {
        var message = yield this.createSignedMessage({
          abi: params.unsignedMessage.signParams.abi,
          unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
          signBytesBase64: params.signBytesBase64,
          publicKeyHex: params.publicKeyHex
        });
        message.expire = params.unsignedMessage.signParams.expire;
        return {
          address: params.unsignedMessage.address,
          message
        };
      });

      function createSignedDeployMessage(_x21) {
        return _createSignedDeployMessage.apply(this, arguments);
      }

      return createSignedDeployMessage;
    }()
  }, {
    key: "createSignedRunMessage",
    value: function () {
      var _createSignedRunMessage = _asyncToGenerator(function* (params) {
        var message = yield this.createSignedMessage({
          abi: params.unsignedMessage.signParams.abi,
          unsignedBytesBase64: params.unsignedMessage.signParams.unsignedBytesBase64,
          signBytesBase64: params.signBytesBase64,
          publicKeyHex: params.publicKeyHex
        });
        message.expire = params.unsignedMessage.signParams.expire;
        return {
          address: params.unsignedMessage.address,
          abi: params.unsignedMessage.signParams.abi,
          functionName: params.unsignedMessage.functionName,
          message
        };
      });

      function createSignedRunMessage(_x22) {
        return _createSignedRunMessage.apply(this, arguments);
      }

      return createSignedRunMessage;
    }()
  }, {
    key: "getCodeFromImage",
    value: function () {
      var _getCodeFromImage = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.image.code', params);
      });

      function getCodeFromImage(_x23) {
        return _getCodeFromImage.apply(this, arguments);
      }

      return getCodeFromImage;
    }()
  }, {
    key: "getDeployData",
    value: function () {
      var _getDeployData = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.deploy.data', params);
      });

      function getDeployData(_x24) {
        return _getDeployData.apply(this, arguments);
      }

      return getDeployData;
    }()
  }, {
    key: "createRunBody",
    value: function () {
      var _createRunBody = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.run.body', params);
      });

      function createRunBody(_x25) {
        return _createRunBody.apply(this, arguments);
      }

      return createRunBody;
    }()
  }, {
    key: "getFunctionId",
    value: function () {
      var _getFunctionId = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.function.id', params);
      });

      function getFunctionId(_x26) {
        return _getFunctionId.apply(this, arguments);
      }

      return getFunctionId;
    }()
  }, {
    key: "getBocHash",
    value: function () {
      var _getBocHash = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.boc.hash', params);
      });

      function getBocHash(_x27) {
        return _getBocHash.apply(this, arguments);
      }

      return getBocHash;
    }()
  }, {
    key: "parseMessage",
    value: function () {
      var _parseMessage = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.parse.message', params);
      });

      function parseMessage(_x28) {
        return _parseMessage.apply(this, arguments);
      }

      return parseMessage;
    }() // Message parsing

  }, {
    key: "decodeRunOutput",
    value: function () {
      var _decodeRunOutput = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.run.output', params);
      });

      function decodeRunOutput(_x29) {
        return _decodeRunOutput.apply(this, arguments);
      }

      return decodeRunOutput;
    }()
  }, {
    key: "decodeInputMessageBody",
    value: function () {
      var _decodeInputMessageBody = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.run.unknown.input', params);
      });

      function decodeInputMessageBody(_x30) {
        return _decodeInputMessageBody.apply(this, arguments);
      }

      return decodeInputMessageBody;
    }()
  }, {
    key: "decodeOutputMessageBody",
    value: function () {
      var _decodeOutputMessageBody = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.run.unknown.output', params);
      });

      function decodeOutputMessageBody(_x31) {
        return _decodeOutputMessageBody.apply(this, arguments);
      }

      return decodeOutputMessageBody;
    }() // Message processing

  }, {
    key: "sendMessage",
    value: function () {
      var _sendMessage = _asyncToGenerator(function* (params, parentSpan) {
        var id = params.messageId || (yield this.getBocHash({
          bocBase64: params.messageBodyBase64
        })).hash;
        var idBase64 = Buffer.from(id, 'hex').toString('base64');
        yield this.queries.postRequests([{
          id: idBase64,
          body: params.messageBodyBase64
        }], parentSpan);
        this.config.log('sendMessage. Request posted');
        return id;
      });

      function sendMessage(_x32, _x33) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }, {
    key: "processMessage",
    value: function () {
      var _processMessage = _asyncToGenerator(function* (message, resultFields, parentSpan, retryIndex) {
        var _this5 = this;

        var config = this.config;
        var messageId = yield this.sendMessage(message, parentSpan);
        var processingTimeout = config.messageProcessingTimeout(retryIndex);
        var promises = [];
        var transactionFound = false;

        if (message.expire) {
          var expire = message.expire;

          if (Date.now() > expire * 1000) {
            throw TONClientError.sendNodeRequestFailed('Message already expired');
          } // calculate timeout according to `expire` value (in seconds)
          // add processing timeout as master block validation time


          processingTimeout = expire * 1000 - Date.now() + processingTimeout;

          var waitExpired = /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator(function* () {
              var _block$in_msg_descr$f;

              // wait for block, produced after `expire` to guarantee that message is rejected
              var block = yield _this5.queries.blocks.waitFor({
                filter: {
                  master: {
                    min_shard_gen_utime: {
                      ge: expire
                    }
                  }
                },
                result: 'in_msg_descr { transaction_id }',
                timeout: processingTimeout,
                parentSpan
              });

              if (transactionFound) {
                return {};
              }

              var transaction_id = block.in_msg_descr && ((_block$in_msg_descr$f = block.in_msg_descr.find(function (msg) {
                return !!msg.transaction_id;
              })) === null || _block$in_msg_descr$f === void 0 ? void 0 : _block$in_msg_descr$f.transaction_id);

              if (!transaction_id) {
                throw TONClientError.internalError('Invalid block received: no transaction ID');
              } // check that transactions collection is updated


              return _this5.queries.transactions.waitFor({
                filter: {
                  id: {
                    eq: transaction_id
                  }
                },
                result: 'id',
                timeout: processingTimeout,
                parentSpan
              });
            });

            return function waitExpired() {
              return _ref4.apply(this, arguments);
            };
          }();

          promises.push(waitExpired());
        } // wait for message processing transaction


        promises.push(new Promise(function (resolve, reject) {
          _asyncToGenerator(function* () {
            try {
              var tr = yield _this5.queries.transactions.waitFor({
                filter: {
                  in_msg: {
                    eq: messageId
                  },
                  status: {
                    eq: QTransactionProcessingStatus.finalized
                  }
                },
                result: resultFields,
                timeout: processingTimeout,
                parentSpan
              });
              transactionFound = true;
              resolve(tr);
            } catch (error) {
              reject(error);
            }
          })();
        }));
        var transaction = yield Promise.race(promises);

        if (!transactionFound) {
          throw TONClientError.messageExpired();
        }

        var transactionNow = transaction.now || 0;
        this.config.log('processMessage. transaction received', {
          id: transaction.id,
          block_id: transaction.block_id,
          now: `${new Date(transactionNow * 1000).toISOString()} (${transactionNow})`
        });
        return transaction;
      });

      function processMessage(_x34, _x35, _x36, _x37) {
        return _processMessage.apply(this, arguments);
      }

      return processMessage;
    }()
  }, {
    key: "processDeployMessage",
    value: function () {
      var _processDeployMessage = _asyncToGenerator(function* (params, parentSpan, retryIndex) {
        this.config.log('processDeployMessage', params); // check that account is already deployed

        var account = yield this.queries.accounts.query({
          filter: {
            id: {
              eq: params.address
            },
            acc_type: {
              eq: QAccountType.active
            }
          },
          result: 'id',
          parentSpan
        });

        if (account.length > 0) {
          return {
            address: params.address,
            alreadyDeployed: true
          };
        }

        var transaction = yield this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);
        yield checkTransaction(transaction);
        this.config.log('processDeployMessage. End');
        return {
          address: params.address,
          alreadyDeployed: false,
          transaction
        };
      });

      function processDeployMessage(_x38, _x39, _x40) {
        return _processDeployMessage.apply(this, arguments);
      }

      return processDeployMessage;
    }()
  }, {
    key: "processRunMessage",
    value: function () {
      var _processRunMessage = _asyncToGenerator(function* (params, parentSpan, retryIndex) {
        var _this6 = this;

        this.config.log('processRunMessage', params);
        var transaction = yield this.processMessage(params.message, transactionDetails, parentSpan, retryIndex);
        yield checkTransaction(transaction);
        var outputMessages = transaction.out_messages;

        if (!outputMessages || outputMessages.length === 0) {
          return {
            output: null,
            transaction
          };
        }

        var externalMessages = outputMessages.filter(function (x) {
          return x.msg_type === QMessageType.extOut;
        });
        this.config.log('processRunMessage. Before messages parse');
        var outputs = yield Promise.all(externalMessages.map(function (x) {
          return _this6.decodeOutputMessageBody({
            abi: params.abi,
            bodyBase64: x.body || ''
          });
        }));
        var resultOutput = outputs.find(function (x) {
          return x.function.toLowerCase() === params.functionName.toLowerCase();
        });
        this.config.log('processRunMessage. End');
        return {
          output: resultOutput ? resultOutput.output : null,
          transaction
        };
      });

      function processRunMessage(_x41, _x42, _x43) {
        return _processRunMessage.apply(this, arguments);
      }

      return processRunMessage;
    }()
  }, {
    key: "processRunMessageLocal",
    value: function () {
      var _processRunMessageLocal = _asyncToGenerator(function* (params, waitParams, parentSpan) {
        this.config.log('processRunMessageLocal', params);
        var account = yield this.getAccount(params.address, true, waitParams, parentSpan);
        return this.requestCore('contracts.run.local.msg', {
          address: params.address,
          account,
          abi: params.abi,
          functionName: params.functionName,
          messageBase64: params.message.messageBodyBase64
        });
      });

      function processRunMessageLocal(_x44, _x45, _x46) {
        return _processRunMessageLocal.apply(this, arguments);
      }

      return processRunMessageLocal;
    }() // Fee calculation

  }, {
    key: "calcRunFees",
    value: function () {
      var _calcRunFees = _asyncToGenerator(function* (params, parentSpan) {
        this.config.log('calcRunFees', params);
        var account = yield this.getAccount(params.address, true, params.waitParams, parentSpan);

        if (params.emulateBalance) {
          account.balance = this.bigBalance;
        }

        return this.requestCore('contracts.run.fee', {
          address: params.address,
          account,
          abi: params.abi,
          functionName: params.functionName,
          input: params.input,
          keyPair: params.keyPair
        });
      });

      function calcRunFees(_x47, _x48) {
        return _calcRunFees.apply(this, arguments);
      }

      return calcRunFees;
    }()
  }, {
    key: "calcDeployFees",
    value: function () {
      var _calcDeployFees = _asyncToGenerator(function* (params, parentSpan) {
        this.config.log('calcDeployFees', params);
        var message = yield this.createDeployMessage(params);
        return this.calcMsgProcessFees({
          address: message.address,
          message: message.message,
          emulateBalance: params.emulateBalance,
          newAccount: params.newAccount
        }, parentSpan);
      });

      function calcDeployFees(_x49, _x50) {
        return _calcDeployFees.apply(this, arguments);
      }

      return calcDeployFees;
    }()
  }, {
    key: "calcMsgProcessFees",
    value: function () {
      var _calcMsgProcessFees = _asyncToGenerator(function* (params, parentSpan) {
        this.config.log('calcMsgProcessFees', params);
        var account = {
          balance: this.bigBalance,
          id: params.address,
          last_paid: Math.floor(Date.now() / 1000)
        };

        if (!params.newAccount) {
          account = yield this.getAccount(params.address, false, params.waitParams, parentSpan);
        }

        if (params.emulateBalance) {
          account.balance = this.bigBalance;
        }

        return this.requestCore('contracts.run.fee.msg', {
          address: params.address,
          account,
          messageBase64: params.message.messageBodyBase64
        });
      });

      function calcMsgProcessFees(_x51, _x52) {
        return _calcMsgProcessFees.apply(this, arguments);
      }

      return calcMsgProcessFees;
    }() // Address processing

  }, {
    key: "convertAddress",
    value: function () {
      var _convertAddress = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.address.convert', params);
      });

      function convertAddress(_x53) {
        return _convertAddress.apply(this, arguments);
      }

      return convertAddress;
    }() // Internals

  }, {
    key: "internalDeployNative",
    value: function () {
      var _internalDeployNative = _asyncToGenerator(function* (params) {
        return this.requestCore('contracts.deploy', {
          abi: params.package.abi,
          constructorHeader: params.constructorHeader,
          constructorParams: params.constructorParams,
          initParams: params.initParams,
          imageBase64: params.package.imageBase64,
          keyPair: params.keyPair
        });
      });

      function internalDeployNative(_x54) {
        return _internalDeployNative.apply(this, arguments);
      }

      return internalDeployNative;
    }()
  }, {
    key: "internalRunNative",
    value: function () {
      var _internalRunNative = _asyncToGenerator(function* (params) {
        return yield this.requestCore('contracts.run', {
          address: params.address,
          abi: params.abi,
          functionName: params.functionName,
          header: params.header,
          input: params.input,
          keyPair: params.keyPair
        });
      });

      function internalRunNative(_x55) {
        return _internalRunNative.apply(this, arguments);
      }

      return internalRunNative;
    }()
  }, {
    key: "makeExpireHeader",
    value: function makeExpireHeader(abi, userHeader, retryIndex) {
      var timeout = this.config.messageExpirationTimeout(retryIndex);

      if (abi.header && abi.header.includes('expire') && !(userHeader === null || userHeader === void 0 ? void 0 : userHeader.expire)) {
        return { ...userHeader,
          expire: Math.floor((Date.now() + timeout) / 1000) + 1
        };
      } else {
        return userHeader;
      }
    }
  }, {
    key: "retryCall",
    value: function () {
      var _retryCall = _asyncToGenerator(function* (call) {
        var retriesCount = this.config.messageRetriesCount();

        for (var i = 0; i <= retriesCount; i++) {
          if (i > 0) {
            this.config.log(`Retry #${i}`);
          }

          try {
            return yield call(i);
          } catch (error) {
            if (!TONClientError.isMessageExpired(error)) {
              throw error;
            }
          }
        }

        throw TONClientError.messageExpired();
      });

      function retryCall(_x56) {
        return _retryCall.apply(this, arguments);
      }

      return retryCall;
    }()
  }, {
    key: "internalDeployJs",
    value: function () {
      var _internalDeployJs = _asyncToGenerator(function* (params, parentSpan) {
        var _this7 = this;

        this.config.log('Deploy start');
        return this.retryCall( /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(function* (retryIndex) {
            var message = yield _this7.createDeployMessage(params, retryIndex);
            return _this7.processDeployMessage(message, parentSpan, retryIndex);
          });

          return function (_x59) {
            return _ref6.apply(this, arguments);
          };
        }());
      });

      function internalDeployJs(_x57, _x58) {
        return _internalDeployJs.apply(this, arguments);
      }

      return internalDeployJs;
    }()
  }, {
    key: "internalRunJs",
    value: function () {
      var _internalRunJs = _asyncToGenerator(function* (params, parentSpan) {
        var _this8 = this;

        this.config.log('Run start');
        return this.retryCall( /*#__PURE__*/function () {
          var _ref7 = _asyncToGenerator(function* (retryIndex) {
            var message = yield _this8.createRunMessage(params, retryIndex);
            return _this8.processRunMessage(message, parentSpan, retryIndex);
          });

          return function (_x62) {
            return _ref7.apply(this, arguments);
          };
        }());
      });

      function internalRunJs(_x60, _x61) {
        return _internalRunJs.apply(this, arguments);
      }

      return internalRunJs;
    }()
  }, {
    key: "getAccount",
    value: function () {
      var _getAccount = _asyncToGenerator(function* (address, active, waitParams, parentSpan) {
        function removeTypeName(obj) {
          if (obj.__typename) {
            delete obj.__typename;
          }

          Object.values(obj).forEach(function (value) {
            if (!!value && typeof value === 'object') {
              removeTypeName(value);
            }
          });
        }

        var filter = {
          id: {
            eq: address
          }
        };

        if (waitParams && waitParams.transactionLt) {
          filter.last_trans_lt = {
            ge: waitParams.transactionLt
          };
        }

        if (active) {
          filter.acc_type = {
            eq: QAccountType.active
          };
        }

        this.config.log('getAccount. Filter', filter);
        var account = yield this.queries.accounts.waitFor(filter, 'id code data balance balance_other { currency value } last_paid', waitParams && waitParams.timeout, parentSpan);
        removeTypeName(account);
        this.config.log('getAccount. Account recieved', account);
        return account;
      });

      function getAccount(_x63, _x64, _x65, _x66) {
        return _getAccount.apply(this, arguments);
      }

      return getAccount;
    }()
  }, {
    key: "internalRunLocalJs",
    value: function () {
      var _internalRunLocalJs = _asyncToGenerator(function* (params, parentSpan) {
        var account = yield this.getAccount(params.address, true, params.waitParams, parentSpan);
        return this.requestCore('contracts.run.local', {
          address: params.address,
          account,
          abi: params.abi,
          functionName: params.functionName,
          input: params.input,
          keyPair: params.keyPair
        });
      });

      function internalRunLocalJs(_x67, _x68) {
        return _internalRunLocalJs.apply(this, arguments);
      }

      return internalRunLocalJs;
    }()
  }]);

  return TONContractsModule;
}(TONModule);

export { TONContractsModule as default };
TONContractsModule.moduleName = 'TONContractsModule';

function checkTransaction(_x69) {
  return _checkTransaction.apply(this, arguments);
}

function _checkTransaction() {
  _checkTransaction = _asyncToGenerator(function* (transaction) {
    if (!transaction.aborted) {
      return;
    }

    function nodeError(message, code, phase) {
      var REPLAY_PROTECTION = 52;
      var MESSAGE_EXPIRED = 57;
      var isNodeSEMessageExpired = phase === TONClientTransactionPhase.computeVm && (code === MESSAGE_EXPIRED || code === REPLAY_PROTECTION);
      return isNodeSEMessageExpired ? TONClientError.messageExpired() : new TONClientError(`${message} (${code}) at ${phase}`, code, TONClientError.source.NODE, {
        phase,
        transaction_id: transaction.id
      });
    }

    var storage = transaction.storage;

    if (storage) {
      var status = storage.status_change;

      if (status === QAccountStatusChange.frozen) {
        throw nodeError('Account was frozen due storage phase', TONClientStorageStatus.frozen, TONClientTransactionPhase.storage);
      }

      if (status === QAccountStatusChange.deleted) {
        throw nodeError('Account was deleted due storage phase', TONClientStorageStatus.deleted, TONClientTransactionPhase.storage);
      }
    }

    var compute = transaction.compute;

    if (compute) {
      if (compute.compute_type === QComputeType.skipped) {
        var reason = compute.skipped_reason;

        if (reason === QSkipReason.noState) {
          throw nodeError('Account has no code and data', TONClientComputeSkippedStatus.noState, TONClientTransactionPhase.computeSkipped);
        }

        if (reason === QSkipReason.badState) {
          throw nodeError('Account has bad state: frozen or deleted', TONClientComputeSkippedStatus.badState, TONClientTransactionPhase.computeSkipped);
        }

        if (reason === QSkipReason.noGas) {
          throw nodeError('No gas to execute VM', TONClientComputeSkippedStatus.noGas, TONClientTransactionPhase.computeSkipped);
        }

        throw nodeError('Compute phase skipped by unknown reason', -1, TONClientTransactionPhase.computeSkipped);
      }

      if (compute.compute_type === QComputeType.vm) {
        if (!compute.success) {
          throw nodeError('VM terminated with exception', compute.exit_code || 0, TONClientTransactionPhase.computeVm);
        }
      }
    }

    var action = transaction.action;

    if (action) {
      if (!action.success) {
        throw nodeError(action.no_funds ? 'Too low balance to send outbound message' : !action.valid ? 'Outbound message is invalid' : 'Action phase failed', action.result_code || 0, TONClientTransactionPhase.action);
      }
    }

    throw nodeError('Transaction aborted', -1, TONClientTransactionPhase.unknown);
  });
  return _checkTransaction.apply(this, arguments);
}

var transactionDetails = `
    id
    in_msg
    tr_type
    status
    in_msg
    out_msgs
    block_id
    now
    aborted
    lt
    storage {
        status_change
    }
    compute {
        compute_type
        skipped_reason
        success
        exit_code
        gas_fees
        gas_used
    }
    action {
        success
        valid
        result_code
        no_funds
    }
    out_messages {
        id
        msg_type
        body
    }
   `;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTkNvbnRyYWN0c01vZHVsZS5qcyJdLCJuYW1lcyI6WyJTcGFuIiwiU3BhbkNvbnRleHQiLCJUT05DbGllbnRFcnJvciIsIlRPTk1vZHVsZSIsIlRPTkNvbmZpZ01vZHVsZSIsIlRPTlF1ZXJpZXNNb2R1bGUiLCJUT05BZGRyZXNzU3RyaW5nVmFyaWFudCIsIkFjY291bnRJZCIsIkhleCIsIkJhc2U2NCIsIlRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UiLCJzdG9yYWdlIiwiY29tcHV0ZVNraXBwZWQiLCJjb21wdXRlVm0iLCJhY3Rpb24iLCJ1bmtub3duIiwiVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMiLCJub1N0YXRlIiwiYmFkU3RhdGUiLCJub0dhcyIsIlRPTkNsaWVudFN0b3JhZ2VTdGF0dXMiLCJ1bmNoYW5nZWQiLCJmcm96ZW4iLCJkZWxldGVkIiwiUUluTXNnVHlwZSIsImV4dGVybmFsIiwiaWhyIiwiaW1tZWRpYXRlbHkiLCJmaW5hbCIsInRyYW5zaXQiLCJkaXNjYXJkZWRGaW5hbCIsImRpc2NhcmRlZFRyYW5zaXQiLCJRT3V0TXNnVHlwZSIsIm91dE1zZ05ldyIsImRlcXVldWVJbW1lZGlhdGVseSIsImRlcXVldWUiLCJ0cmFuc2l0UmVxdWlyZWQiLCJub25lIiwiUU1lc3NhZ2VUeXBlIiwiaW50ZXJuYWwiLCJleHRJbiIsImV4dE91dCIsIlFNZXNzYWdlUHJvY2Vzc2luZ1N0YXR1cyIsInF1ZXVlZCIsInByb2Nlc3NpbmciLCJwcmVsaW1pbmFyeSIsInByb3Bvc2VkIiwiZmluYWxpemVkIiwicmVmdXNlZCIsInRyYW5zaXRpbmciLCJRQmxvY2tQcm9jZXNzaW5nU3RhdHVzIiwiUVNwbGl0VHlwZSIsInNwbGl0IiwibWVyZ2UiLCJRQWNjb3VudFR5cGUiLCJ1bmluaXQiLCJhY3RpdmUiLCJRVHJhbnNhY3Rpb25UeXBlIiwib3JkaW5hcnkiLCJ0aWNrIiwidG9jayIsInNwbGl0UHJlcGFyZSIsInNwbGl0SW5zdGFsbCIsIm1lcmdlUHJlcGFyZSIsIm1lcmdlSW5zdGFsbCIsIlFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMiLCJRQWNjb3VudFN0YXR1cyIsIm5vbkV4aXN0IiwiUUFjY291bnRTdGF0dXNDaGFuZ2UiLCJRQ29tcHV0ZVR5cGUiLCJza2lwcGVkIiwidm0iLCJRU2tpcFJlYXNvbiIsIlFCb3VuY2VUeXBlIiwibmVnRnVuZHMiLCJub0Z1bmRzIiwib2siLCJyZW1vdmVQcm9wcyIsIm9iaiIsInBhdGhzIiwicmVzdWx0IiwiZm9yRWFjaCIsInBhdGgiLCJkb3RQb3MiLCJpbmRleE9mIiwibmFtZSIsInN1YnN0ciIsImNoaWxkIiwicmVkdWNlZENoaWxkIiwiVE9OQ29udHJhY3RzTW9kdWxlIiwiY29uZmlnIiwiY29udGV4dCIsImdldE1vZHVsZSIsInF1ZXJpZXMiLCJwYXJhbXMiLCJwYXJlbnRTcGFuIiwiYWNjb3VudHMiLCJxdWVyeSIsImlkIiwiZXEiLCJhZGRyZXNzIiwidW5kZWZpbmVkIiwibGVuZ3RoIiwiYmFsYW5jZUdyYW1zIiwiYmFsYW5jZSIsInRyYWNlIiwic3BhbiIsInNldFRhZyIsImludGVybmFsRGVwbG95SnMiLCJpbnRlcm5hbFJ1bkpzIiwiaW50ZXJuYWxSdW5Mb2NhbEpzIiwicmV0cnlJbmRleCIsImxvZyIsImNvbnN0cnVjdG9ySGVhZGVyIiwibWFrZUV4cGlyZUhlYWRlciIsInBhY2thZ2UiLCJhYmkiLCJtZXNzYWdlIiwicmVxdWVzdENvcmUiLCJjb25zdHJ1Y3RvclBhcmFtcyIsImluaXRQYXJhbXMiLCJpbWFnZUJhc2U2NCIsImtleVBhaXIiLCJ3b3JrY2hhaW5JZCIsIm1lc3NhZ2VJZCIsIm1lc3NhZ2VCb2R5QmFzZTY0IiwiZXhwaXJlIiwiaGVhZGVyIiwiZnVuY3Rpb25OYW1lIiwiaW5wdXQiLCJwdWJsaWNLZXlIZXgiLCJwdWJsaWMiLCJhZGRyZXNzSGV4Iiwic2lnblBhcmFtcyIsImVuY29kZWQiLCJjcmVhdGVTaWduZWRNZXNzYWdlIiwidW5zaWduZWRNZXNzYWdlIiwidW5zaWduZWRCeXRlc0Jhc2U2NCIsInNpZ25CeXRlc0Jhc2U2NCIsImdldEJvY0hhc2giLCJib2NCYXNlNjQiLCJoYXNoIiwiaWRCYXNlNjQiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJwb3N0UmVxdWVzdHMiLCJib2R5IiwicmVzdWx0RmllbGRzIiwic2VuZE1lc3NhZ2UiLCJwcm9jZXNzaW5nVGltZW91dCIsIm1lc3NhZ2VQcm9jZXNzaW5nVGltZW91dCIsInByb21pc2VzIiwidHJhbnNhY3Rpb25Gb3VuZCIsIkRhdGUiLCJub3ciLCJzZW5kTm9kZVJlcXVlc3RGYWlsZWQiLCJ3YWl0RXhwaXJlZCIsImJsb2NrIiwiYmxvY2tzIiwid2FpdEZvciIsImZpbHRlciIsIm1hc3RlciIsIm1pbl9zaGFyZF9nZW5fdXRpbWUiLCJnZSIsInRpbWVvdXQiLCJ0cmFuc2FjdGlvbl9pZCIsImluX21zZ19kZXNjciIsImZpbmQiLCJtc2ciLCJpbnRlcm5hbEVycm9yIiwidHJhbnNhY3Rpb25zIiwicHVzaCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidHIiLCJpbl9tc2ciLCJzdGF0dXMiLCJlcnJvciIsInRyYW5zYWN0aW9uIiwicmFjZSIsIm1lc3NhZ2VFeHBpcmVkIiwidHJhbnNhY3Rpb25Ob3ciLCJibG9ja19pZCIsInRvSVNPU3RyaW5nIiwiYWNjb3VudCIsImFjY190eXBlIiwiYWxyZWFkeURlcGxveWVkIiwicHJvY2Vzc01lc3NhZ2UiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJjaGVja1RyYW5zYWN0aW9uIiwib3V0cHV0TWVzc2FnZXMiLCJvdXRfbWVzc2FnZXMiLCJvdXRwdXQiLCJleHRlcm5hbE1lc3NhZ2VzIiwieCIsIm1zZ190eXBlIiwib3V0cHV0cyIsImFsbCIsIm1hcCIsImRlY29kZU91dHB1dE1lc3NhZ2VCb2R5IiwiYm9keUJhc2U2NCIsInJlc3VsdE91dHB1dCIsImZ1bmN0aW9uIiwidG9Mb3dlckNhc2UiLCJ3YWl0UGFyYW1zIiwiZ2V0QWNjb3VudCIsIm1lc3NhZ2VCYXNlNjQiLCJlbXVsYXRlQmFsYW5jZSIsImJpZ0JhbGFuY2UiLCJjcmVhdGVEZXBsb3lNZXNzYWdlIiwiY2FsY01zZ1Byb2Nlc3NGZWVzIiwibmV3QWNjb3VudCIsImxhc3RfcGFpZCIsIk1hdGgiLCJmbG9vciIsInVzZXJIZWFkZXIiLCJtZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQiLCJpbmNsdWRlcyIsImNhbGwiLCJyZXRyaWVzQ291bnQiLCJtZXNzYWdlUmV0cmllc0NvdW50IiwiaSIsImlzTWVzc2FnZUV4cGlyZWQiLCJyZXRyeUNhbGwiLCJwcm9jZXNzRGVwbG95TWVzc2FnZSIsImNyZWF0ZVJ1bk1lc3NhZ2UiLCJwcm9jZXNzUnVuTWVzc2FnZSIsInJlbW92ZVR5cGVOYW1lIiwiX190eXBlbmFtZSIsIk9iamVjdCIsInZhbHVlcyIsInZhbHVlIiwidHJhbnNhY3Rpb25MdCIsImxhc3RfdHJhbnNfbHQiLCJtb2R1bGVOYW1lIiwiYWJvcnRlZCIsIm5vZGVFcnJvciIsImNvZGUiLCJwaGFzZSIsIlJFUExBWV9QUk9URUNUSU9OIiwiTUVTU0FHRV9FWFBJUkVEIiwiaXNOb2RlU0VNZXNzYWdlRXhwaXJlZCIsInNvdXJjZSIsIk5PREUiLCJzdGF0dXNfY2hhbmdlIiwiY29tcHV0ZSIsImNvbXB1dGVfdHlwZSIsInJlYXNvbiIsInNraXBwZWRfcmVhc29uIiwic3VjY2VzcyIsImV4aXRfY29kZSIsIm5vX2Z1bmRzIiwidmFsaWQiLCJyZXN1bHRfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsU0FBU0EsSUFBVCxFQUFlQyxXQUFmLFFBQWtDLGFBQWxDO0FBOENBLFNBQVNDLGNBQVQsUUFBK0IsY0FBL0I7QUFDQSxTQUFTQyxTQUFULFFBQTBCLGNBQTFCO0FBQ0EsT0FBT0MsZUFBUCxNQUE0QixtQkFBNUI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixvQkFBN0I7QUFFQSxPQUFPLElBQU1DLHVCQUF1QixHQUFH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QUFLSCxHOzs7O0FBRUQsSUFBTStLLGtCQUFrQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBNUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTgtMjAyMCBUT04gREVWIFNPTFVUSU9OUyBMVEQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFNPRlRXQVJFIEVWQUxVQVRJT04gTGljZW5zZSAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXG4gKiB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbiAqIExpY2Vuc2UgYXQ6XG4gKlxuICogaHR0cDovL3d3dy50b24uZGV2L2xpY2Vuc2VzXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBUT04gREVWIHNvZnR3YXJlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgeyBTcGFuLCBTcGFuQ29udGV4dCB9IGZyb20gJ29wZW50cmFjaW5nJztcbmltcG9ydCB0eXBlIHtcbiAgICBRQWNjb3VudCxcbiAgICBRQmxvY2ssXG4gICAgUU1lc3NhZ2UsXG4gICAgUVRyYW5zYWN0aW9uLFxuICAgIFRPTkNvbnRyYWN0QUJJLFxuICAgIFRPTkNvbnRyYWN0QWNjb3VudFdhaXRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RDb252ZXJ0QWRkcmVzc1BhcmFtcyxcbiAgICBUT05Db250cmFjdENvbnZlcnRBZGRyZXNzUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlUnVuQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVJ1bkJvZHlSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdENyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2VQYXJhbXMsXG4gICAgVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0RGVjb2RlUnVuT3V0cHV0UGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZSxcbiAgICBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICBUT05Db250cmFjdERlcGxveVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RCb2MsXG4gICAgVE9OQ29udHJhY3RHZXRCb2NIYXNoUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICBUT05Db250cmFjdEdldENvZGVGcm9tSW1hZ2VSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0R2V0RGVwbG95RGF0YVJlc3VsdCxcbiAgICBUT05Db250cmFjdEdldEZ1bmN0aW9uSWRQYXJhbXMsXG4gICAgVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0LFxuICAgIFRPTkNvbnRyYWN0TG9hZFBhcmFtcyxcbiAgICBUT05Db250cmFjdExvYWRSZXN1bHQsXG4gICAgVE9OQ29udHJhY3RDYWxjUnVuRmVlUGFyYW1zLFxuICAgIFRPTkNvbnRyYWN0VHJhbnNhY3Rpb25GZWVzLFxuICAgIFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdCxcbiAgICBUT05Db250cmFjdENhbGNNc2dQcm9jZXNzaW5nRmVlc1BhcmFtcyxcbiAgICBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5Mb2NhbFBhcmFtcyxcbiAgICBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgVE9OQ29udHJhY3RSdW5SZXN1bHQsXG4gICAgVE9OQ29udHJhY3RzLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWREZXBsb3lNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgIFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlLFxufSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUT05DbGllbnRFcnJvciB9IGZyb20gJy4uL1RPTkNsaWVudCc7XG5pbXBvcnQgeyBUT05Nb2R1bGUgfSBmcm9tICcuLi9UT05Nb2R1bGUnO1xuaW1wb3J0IFRPTkNvbmZpZ01vZHVsZSBmcm9tICcuL1RPTkNvbmZpZ01vZHVsZSc7XG5pbXBvcnQgVE9OUXVlcmllc01vZHVsZSBmcm9tICcuL1RPTlF1ZXJpZXNNb2R1bGUnO1xuXG5leHBvcnQgY29uc3QgVE9OQWRkcmVzc1N0cmluZ1ZhcmlhbnQgPSB7XG4gICAgQWNjb3VudElkOiAnQWNjb3VudElkJyxcbiAgICBIZXg6ICdIZXgnLFxuICAgIEJhc2U2NDogJ0Jhc2U2NCcsXG59O1xuXG5leHBvcnQgY29uc3QgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZSA9IHtcbiAgICBzdG9yYWdlOiAnc3RvcmFnZScsXG4gICAgY29tcHV0ZVNraXBwZWQ6ICdjb21wdXRlU2tpcHBlZCcsXG4gICAgY29tcHV0ZVZtOiAnY29tcHV0ZVZtJyxcbiAgICBhY3Rpb246ICdhY3Rpb24nLFxuICAgIHVua25vd246ICd1bmtub3duJyxcbn07XG5cbmV4cG9ydCBjb25zdCBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cyA9IHtcbiAgICBub1N0YXRlOiAwLFxuICAgIGJhZFN0YXRlOiAxLFxuICAgIG5vR2FzOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMgPSB7XG4gICAgdW5jaGFuZ2VkOiAwLFxuICAgIGZyb3plbjogMSxcbiAgICBkZWxldGVkOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFJbk1zZ1R5cGUgPSB7XG4gICAgZXh0ZXJuYWw6IDAsXG4gICAgaWhyOiAxLFxuICAgIGltbWVkaWF0ZWx5OiAyLFxuICAgIGZpbmFsOiAzLFxuICAgIHRyYW5zaXQ6IDQsXG4gICAgZGlzY2FyZGVkRmluYWw6IDUsXG4gICAgZGlzY2FyZGVkVHJhbnNpdDogNixcbn07XG5cbmV4cG9ydCBjb25zdCBRT3V0TXNnVHlwZSA9IHtcbiAgICBleHRlcm5hbDogMCxcbiAgICBpbW1lZGlhdGVseTogMSxcbiAgICBvdXRNc2dOZXc6IDIsXG4gICAgdHJhbnNpdDogMyxcbiAgICBkZXF1ZXVlSW1tZWRpYXRlbHk6IDQsXG4gICAgZGVxdWV1ZTogNSxcbiAgICB0cmFuc2l0UmVxdWlyZWQ6IDYsXG4gICAgbm9uZTogLTEsXG59O1xuXG5leHBvcnQgY29uc3QgUU1lc3NhZ2VUeXBlID0ge1xuICAgIGludGVybmFsOiAwLFxuICAgIGV4dEluOiAxLFxuICAgIGV4dE91dDogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRTWVzc2FnZVByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBxdWV1ZWQ6IDEsXG4gICAgcHJvY2Vzc2luZzogMixcbiAgICBwcmVsaW1pbmFyeTogMyxcbiAgICBwcm9wb3NlZDogNCxcbiAgICBmaW5hbGl6ZWQ6IDUsXG4gICAgcmVmdXNlZDogNixcbiAgICB0cmFuc2l0aW5nOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFCbG9ja1Byb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcm9wb3NlZDogMSxcbiAgICBmaW5hbGl6ZWQ6IDIsXG4gICAgcmVmdXNlZDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRU3BsaXRUeXBlID0ge1xuICAgIG5vbmU6IDAsXG4gICAgc3BsaXQ6IDIsXG4gICAgbWVyZ2U6IDMsXG59O1xuXG5leHBvcnQgY29uc3QgUUFjY291bnRUeXBlID0ge1xuICAgIHVuaW5pdDogMCxcbiAgICBhY3RpdmU6IDEsXG4gICAgZnJvemVuOiAyLFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblR5cGUgPSB7XG4gICAgb3JkaW5hcnk6IDAsXG4gICAgc3RvcmFnZTogMSxcbiAgICB0aWNrOiAyLFxuICAgIHRvY2s6IDMsXG4gICAgc3BsaXRQcmVwYXJlOiA0LFxuICAgIHNwbGl0SW5zdGFsbDogNSxcbiAgICBtZXJnZVByZXBhcmU6IDYsXG4gICAgbWVyZ2VJbnN0YWxsOiA3LFxufTtcblxuZXhwb3J0IGNvbnN0IFFUcmFuc2FjdGlvblByb2Nlc3NpbmdTdGF0dXMgPSB7XG4gICAgdW5rbm93bjogMCxcbiAgICBwcmVsaW1pbmFyeTogMSxcbiAgICBwcm9wb3NlZDogMixcbiAgICBmaW5hbGl6ZWQ6IDMsXG4gICAgcmVmdXNlZDogNCxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1cyA9IHtcbiAgICB1bmluaXQ6IDAsXG4gICAgYWN0aXZlOiAxLFxuICAgIGZyb3plbjogMixcbiAgICBub25FeGlzdDogMyxcbn07XG5cbmV4cG9ydCBjb25zdCBRQWNjb3VudFN0YXR1c0NoYW5nZSA9IHtcbiAgICB1bmNoYW5nZWQ6IDAsXG4gICAgZnJvemVuOiAxLFxuICAgIGRlbGV0ZWQ6IDIsXG59O1xuXG5leHBvcnQgY29uc3QgUUNvbXB1dGVUeXBlID0ge1xuICAgIHNraXBwZWQ6IDAsXG4gICAgdm06IDEsXG59O1xuXG5leHBvcnQgY29uc3QgUVNraXBSZWFzb24gPSB7XG4gICAgbm9TdGF0ZTogMCxcbiAgICBiYWRTdGF0ZTogMSxcbiAgICBub0dhczogMixcbn07XG5cbmV4cG9ydCBjb25zdCBRQm91bmNlVHlwZSA9IHtcbiAgICBuZWdGdW5kczogMCxcbiAgICBub0Z1bmRzOiAxLFxuICAgIG9rOiAyLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVByb3BzKG9iajoge30sIHBhdGhzOiBzdHJpbmdbXSk6IHt9IHtcbiAgICBsZXQgcmVzdWx0ID0gb2JqO1xuICAgIHBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgICAgY29uc3QgZG90UG9zID0gcGF0aC5pbmRleE9mKCcuJyk7XG4gICAgICAgIGlmIChkb3RQb3MgPCAwKSB7XG4gICAgICAgICAgICBpZiAocGF0aCBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCB9O1xuICAgICAgICAgICAgICAgIGRlbGV0ZSByZXN1bHRbcGF0aF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gcGF0aC5zdWJzdHIoMCwgZG90UG9zKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gcmVzdWx0W25hbWVdO1xuICAgICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVkdWNlZENoaWxkID0gcmVtb3ZlUHJvcHMoY2hpbGQsIFtwYXRoLnN1YnN0cihkb3RQb3MgKyAxKV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZWR1Y2VkQ2hpbGQgIT09IGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXTogcmVkdWNlZENoaWxkLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRPTkNvbnRyYWN0c01vZHVsZSBleHRlbmRzIFRPTk1vZHVsZSBpbXBsZW1lbnRzIFRPTkNvbnRyYWN0cyB7XG4gICAgY29uZmlnOiBUT05Db25maWdNb2R1bGU7XG5cbiAgICBxdWVyaWVzOiBUT05RdWVyaWVzTW9kdWxlO1xuXG4gICAgYXN5bmMgc2V0dXAoKTogUHJvbWlzZTwqPiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb250ZXh0LmdldE1vZHVsZShUT05Db25maWdNb2R1bGUpO1xuICAgICAgICB0aGlzLnF1ZXJpZXMgPSB0aGlzLmNvbnRleHQuZ2V0TW9kdWxlKFRPTlF1ZXJpZXNNb2R1bGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGxvYWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RMb2FkUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdExvYWRSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgYWNjb3VudHM6IFFBY2NvdW50W10gPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMucXVlcnkoe1xuICAgICAgICAgICAgaWQ6IHsgZXE6IHBhcmFtcy5hZGRyZXNzIH0sXG4gICAgICAgIH0sICdiYWxhbmNlJywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgcGFyZW50U3Bhbik7XG4gICAgICAgIGlmIChhY2NvdW50cyAmJiBhY2NvdW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICBiYWxhbmNlR3JhbXM6IGFjY291bnRzWzBdLmJhbGFuY2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgIGJhbGFuY2VHcmFtczogbnVsbCxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIC8vIEZhY2FkZSBmdW5jdGlvbnNcblxuICAgIGFzeW5jIGRlcGxveShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC50cmFjZSgnY29udHJhY3RzLmRlcGxveScsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsRGVwbG95SnMocGFyYW1zLCBzcGFuKTtcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG5cbiAgICBhc3luYyBydW4oXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5QYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW4nLCBhc3luYyAoc3BhbjogU3BhbikgPT4ge1xuICAgICAgICAgICAgc3Bhbi5zZXRUYWcoJ3BhcmFtcycsIHJlbW92ZVByb3BzKHBhcmFtcywgWydrZXlQYWlyLnNlY3JldCddKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnRlcm5hbFJ1bkpzKHBhcmFtcywgc3Bhbik7XG4gICAgICAgIH0sIHBhcmVudFNwYW4pO1xuICAgIH1cblxuICAgIGFzeW5jIHJ1bkxvY2FsKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQudHJhY2UoJ2NvbnRyYWN0cy5ydW5Mb2NhbCcsIGFzeW5jIChzcGFuOiBTcGFuKSA9PiB7XG4gICAgICAgICAgICBzcGFuLnNldFRhZygncGFyYW1zJywgcmVtb3ZlUHJvcHMocGFyYW1zLCBbJ2tleVBhaXIuc2VjcmV0J10pKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmludGVybmFsUnVuTG9jYWxKcyhwYXJhbXMsIHNwYW4pO1xuICAgICAgICB9LCBwYXJlbnRTcGFuKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIGNyZWF0aW9uXG5cbiAgICBhc3luYyBjcmVhdGVEZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lNZXNzYWdlPiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnY3JlYXRlRGVwbG95TWVzc2FnZScsIHBhcmFtcyk7XG4gICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySGVhZGVyID0gdGhpcy5tYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICAgICAgcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmNvbnN0cnVjdG9ySGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZToge1xuICAgICAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICAgICAgbWVzc2FnZUlkOiBzdHJpbmcsXG4gICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5tZXNzYWdlJywge1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckhlYWRlcixcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yUGFyYW1zOiBwYXJhbXMuY29uc3RydWN0b3JQYXJhbXMsXG4gICAgICAgICAgICBpbml0UGFyYW1zOiBwYXJhbXMuaW5pdFBhcmFtcyxcbiAgICAgICAgICAgIGltYWdlQmFzZTY0OiBwYXJhbXMucGFja2FnZS5pbWFnZUJhc2U2NCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICAgICAgd29ya2NoYWluSWQ6IHBhcmFtcy53b3JrY2hhaW5JZCxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUlkOiBtZXNzYWdlLm1lc3NhZ2VJZCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlQm9keUJhc2U2NDogbWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgICAgICBleHBpcmU6IGNvbnN0cnVjdG9ySGVhZGVyPy5leHBpcmUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczogbWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgY3JlYXRlUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuTWVzc2FnZT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NyZWF0ZVJ1bk1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgcGFyYW1zLmhlYWRlcixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm1lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgICAgIG1lc3NhZ2UuZXhwaXJlID0gaGVhZGVyPy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgY3JlYXRlVW5zaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVwbG95UGFyYW1zLFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RVbnNpZ25lZERlcGxveU1lc3NhZ2U+IHtcbiAgICAgICAgY29uc3QgY29uc3RydWN0b3JIZWFkZXIgPSB0aGlzLm1ha2VFeHBpcmVIZWFkZXIoXG4gICAgICAgICAgICBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICByZXRyeUluZGV4LFxuICAgICAgICApO1xuICAgICAgICBjb25zdCByZXN1bHQ6IHtcbiAgICAgICAgICAgIGVuY29kZWQ6IFRPTkNvbnRyYWN0VW5zaWduZWRNZXNzYWdlLFxuICAgICAgICAgICAgYWRkcmVzc0hleDogc3RyaW5nLFxuICAgICAgICB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmRlcGxveS5lbmNvZGVfdW5zaWduZWRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnBhY2thZ2UuYWJpLFxuICAgICAgICAgICAgY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5rZXlQYWlyLnB1YmxpYyxcbiAgICAgICAgICAgIHdvcmtjaGFpbklkOiBwYXJhbXMud29ya2NoYWluSWQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcmVzdWx0LmFkZHJlc3NIZXgsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4ucmVzdWx0LmVuY29kZWQsXG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMucGFja2FnZS5hYmksXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBjb25zdHJ1Y3RvckhlYWRlcj8uZXhwaXJlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVVuc2lnbmVkUnVuTWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0VW5zaWduZWRSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMubWFrZUV4cGlyZUhlYWRlcihcbiAgICAgICAgICAgIHBhcmFtcy5hYmksXG4gICAgICAgICAgICBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3Qgc2lnblBhcmFtcyA9IGF3YWl0IHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZW5jb2RlX3Vuc2lnbmVkX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIGhlYWRlcixcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMuaW5wdXQsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBzaWduUGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgLi4uc2lnblBhcmFtcyxcbiAgICAgICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICAgICAgZXhwaXJlOiBoZWFkZXI/LmV4cGlyZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWRNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkTWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0TWVzc2FnZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmVuY29kZV9tZXNzYWdlX3dpdGhfc2lnbicsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBjcmVhdGVTaWduZWREZXBsb3lNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q3JlYXRlU2lnbmVkRGVwbG95TWVzc2FnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95TWVzc2FnZT4ge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVTaWduZWRNZXNzYWdlKHtcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLmFiaSxcbiAgICAgICAgICAgIHVuc2lnbmVkQnl0ZXNCYXNlNjQ6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy51bnNpZ25lZEJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgc2lnbkJ5dGVzQmFzZTY0OiBwYXJhbXMuc2lnbkJ5dGVzQmFzZTY0LFxuICAgICAgICAgICAgcHVibGljS2V5SGV4OiBwYXJhbXMucHVibGljS2V5SGV4LFxuICAgICAgICB9KTtcbiAgICAgICAgbWVzc2FnZS5leHBpcmUgPSBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuZXhwaXJlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5hZGRyZXNzLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cblxuICAgIGFzeW5jIGNyZWF0ZVNpZ25lZFJ1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVTaWduZWRSdW5NZXNzYWdlUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5NZXNzYWdlPiB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVNpZ25lZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgYWJpOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLnNpZ25QYXJhbXMuYWJpLFxuICAgICAgICAgICAgdW5zaWduZWRCeXRlc0Jhc2U2NDogcGFyYW1zLnVuc2lnbmVkTWVzc2FnZS5zaWduUGFyYW1zLnVuc2lnbmVkQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBzaWduQnl0ZXNCYXNlNjQ6IHBhcmFtcy5zaWduQnl0ZXNCYXNlNjQsXG4gICAgICAgICAgICBwdWJsaWNLZXlIZXg6IHBhcmFtcy5wdWJsaWNLZXlIZXgsXG4gICAgICAgIH0pO1xuICAgICAgICBtZXNzYWdlLmV4cGlyZSA9IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5leHBpcmU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMudW5zaWduZWRNZXNzYWdlLmFkZHJlc3MsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2Uuc2lnblBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy51bnNpZ25lZE1lc3NhZ2UuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlRnJvbUltYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0R2V0Q29kZUZyb21JbWFnZVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLmltYWdlLmNvZGUnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldERlcGxveURhdGEoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXREZXBsb3lEYXRhUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZGVwbG95LmRhdGEnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZVJ1bkJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RDcmVhdGVSdW5Cb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmJvZHknLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEZ1bmN0aW9uSWQoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUGFyYW1zLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RHZXRGdW5jdGlvbklkUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMuZnVuY3Rpb24uaWQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJvY0hhc2goXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RCb2MsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdEdldEJvY0hhc2hSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ib2MuaGFzaCcsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgcGFyc2VNZXNzYWdlKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Qm9jLFxuICAgICk6IFByb21pc2U8UU1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5wYXJzZS5tZXNzYWdlJywgcGFyYW1zKTtcbiAgICB9XG5cbiAgICAvLyBNZXNzYWdlIHBhcnNpbmdcblxuICAgIGFzeW5jIGRlY29kZVJ1bk91dHB1dChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlY29kZVJ1bk91dHB1dFBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLm91dHB1dCcsIHBhcmFtcyk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBkZWNvZGVJbnB1dE1lc3NhZ2VCb2R5KFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlQYXJhbXMsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdERlY29kZU1lc3NhZ2VCb2R5UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLnVua25vd24uaW5wdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuXG4gICAgYXN5bmMgZGVjb2RlT3V0cHV0TWVzc2FnZUJvZHkoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVBhcmFtcyxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVjb2RlTWVzc2FnZUJvZHlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4udW5rbm93bi5vdXRwdXQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIE1lc3NhZ2UgcHJvY2Vzc2luZ1xuXG4gICAgYXN5bmMgc2VuZE1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RNZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJhbXMubWVzc2FnZUlkIHx8XG4gICAgICAgICAgICAoYXdhaXQgdGhpcy5nZXRCb2NIYXNoKHtcbiAgICAgICAgICAgICAgICBib2NCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgICAgIH0pKS5oYXNoO1xuICAgICAgICBjb25zdCBpZEJhc2U2NCA9IEJ1ZmZlci5mcm9tKGlkLCAnaGV4JylcbiAgICAgICAgICAgIC50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgICAgIGF3YWl0IHRoaXMucXVlcmllcy5wb3N0UmVxdWVzdHMoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBpZEJhc2U2NCxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMubWVzc2FnZUJvZHlCYXNlNjQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdzZW5kTWVzc2FnZS4gUmVxdWVzdCBwb3N0ZWQnKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIGFzeW5jIHByb2Nlc3NNZXNzYWdlKFxuICAgICAgICBtZXNzYWdlOiBUT05Db250cmFjdE1lc3NhZ2UsXG4gICAgICAgIHJlc3VsdEZpZWxkczogc3RyaW5nLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxRVHJhbnNhY3Rpb24+IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VJZCA9IGF3YWl0IHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3Bhbik7XG4gICAgICAgIGxldCBwcm9jZXNzaW5nVGltZW91dCA9IGNvbmZpZy5tZXNzYWdlUHJvY2Vzc2luZ1RpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb25Gb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAobWVzc2FnZS5leHBpcmUpIHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZSA9IG1lc3NhZ2UuZXhwaXJlO1xuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgPiBleHBpcmUgKiAxMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3Iuc2VuZE5vZGVSZXF1ZXN0RmFpbGVkKCdNZXNzYWdlIGFscmVhZHkgZXhwaXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRpbWVvdXQgYWNjb3JkaW5nIHRvIGBleHBpcmVgIHZhbHVlIChpbiBzZWNvbmRzKVxuICAgICAgICAgICAgLy8gYWRkIHByb2Nlc3NpbmcgdGltZW91dCBhcyBtYXN0ZXIgYmxvY2sgdmFsaWRhdGlvbiB0aW1lXG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZW91dCA9IGV4cGlyZSAqIDEwMDAgLSBEYXRlLm5vdygpICsgcHJvY2Vzc2luZ1RpbWVvdXQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHdhaXRFeHBpcmVkID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIGJsb2NrLCBwcm9kdWNlZCBhZnRlciBgZXhwaXJlYCB0byBndWFyYW50ZWUgdGhhdCBtZXNzYWdlIGlzIHJlamVjdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2s6IFFCbG9jayA9IGF3YWl0IHRoaXMucXVlcmllcy5ibG9ja3Mud2FpdEZvcih7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFzdGVyOiB7IG1pbl9zaGFyZF9nZW5fdXRpbWU6IHsgZ2U6IGV4cGlyZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogJ2luX21zZ19kZXNjciB7IHRyYW5zYWN0aW9uX2lkIH0nLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2FjdGlvbkZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbl9pZCA9IGJsb2NrLmluX21zZ19kZXNjclxuICAgICAgICAgICAgICAgICAgICAmJiBibG9jay5pbl9tc2dfZGVzY3IuZmluZChtc2cgPT4gISFtc2cudHJhbnNhY3Rpb25faWQpPy50cmFuc2FjdGlvbl9pZDtcblxuICAgICAgICAgICAgICAgIGlmICghdHJhbnNhY3Rpb25faWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgVE9OQ2xpZW50RXJyb3IuaW50ZXJuYWxFcnJvcignSW52YWxpZCBibG9jayByZWNlaXZlZDogbm8gdHJhbnNhY3Rpb24gSUQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayB0aGF0IHRyYW5zYWN0aW9ucyBjb2xsZWN0aW9uIGlzIHVwZGF0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogeyBlcTogdHJhbnNhY3Rpb25faWQgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBwcm9jZXNzaW5nVGltZW91dCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHByb21pc2VzLnB1c2god2FpdEV4cGlyZWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3YWl0IGZvciBtZXNzYWdlIHByb2Nlc3NpbmcgdHJhbnNhY3Rpb25cbiAgICAgICAgcHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyID0gYXdhaXQgdGhpcy5xdWVyaWVzLnRyYW5zYWN0aW9ucy53YWl0Rm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluX21zZzogeyBlcTogbWVzc2FnZUlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB7IGVxOiBRVHJhbnNhY3Rpb25Qcm9jZXNzaW5nU3RhdHVzLmZpbmFsaXplZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0RmllbGRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogcHJvY2Vzc2luZ1RpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25Gb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcblxuICAgICAgICBpZiAoIXRyYW5zYWN0aW9uRm91bmQpIHtcbiAgICAgICAgICAgIHRocm93IFRPTkNsaWVudEVycm9yLm1lc3NhZ2VFeHBpcmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Ob3cgPSB0cmFuc2FjdGlvbi5ub3cgfHwgMDtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzTWVzc2FnZS4gdHJhbnNhY3Rpb24gcmVjZWl2ZWQnLCB7XG4gICAgICAgICAgICBpZDogdHJhbnNhY3Rpb24uaWQsXG4gICAgICAgICAgICBibG9ja19pZDogdHJhbnNhY3Rpb24uYmxvY2tfaWQsXG4gICAgICAgICAgICBub3c6IGAke25ldyBEYXRlKHRyYW5zYWN0aW9uTm93ICogMTAwMCkudG9JU09TdHJpbmcoKX0gKCR7dHJhbnNhY3Rpb25Ob3d9KWAsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb247XG4gICAgfVxuXG5cbiAgICBhc3luYyBwcm9jZXNzRGVwbG95TWVzc2FnZShcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdERlcGxveU1lc3NhZ2UsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICAgICAgcmV0cnlJbmRleD86IG51bWJlcixcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc0RlcGxveU1lc3NhZ2UnLCBwYXJhbXMpO1xuICAgICAgICAvLyBjaGVjayB0aGF0IGFjY291bnQgaXMgYWxyZWFkeSBkZXBsb3llZFxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5xdWVyaWVzLmFjY291bnRzLnF1ZXJ5KHtcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGlkOiB7IGVxOiBwYXJhbXMuYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIGFjY190eXBlOiB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdWx0OiAnaWQnLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChhY2NvdW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgdGhpcy5wcm9jZXNzTWVzc2FnZShcbiAgICAgICAgICAgIHBhcmFtcy5tZXNzYWdlLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICAgICAgcGFyZW50U3BhbixcbiAgICAgICAgICAgIHJldHJ5SW5kZXgsXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGNoZWNrVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NEZXBsb3lNZXNzYWdlLiBFbmQnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWxyZWFkeURlcGxveWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLFxuICAgICAgICB9O1xuICAgIH1cblxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2UoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3RSdW5NZXNzYWdlLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgICAgIHJldHJ5SW5kZXg/OiBudW1iZXIsXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlJywgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCB0aGlzLnByb2Nlc3NNZXNzYWdlKFxuICAgICAgICAgICAgcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgICAgICB0cmFuc2FjdGlvbkRldGFpbHMsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICAgICAgcmV0cnlJbmRleCxcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGNvbnN0IG91dHB1dE1lc3NhZ2VzID0gdHJhbnNhY3Rpb24ub3V0X21lc3NhZ2VzO1xuICAgICAgICBpZiAoIW91dHB1dE1lc3NhZ2VzIHx8IG91dHB1dE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvdXRwdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4dGVybmFsTWVzc2FnZXM6IFFNZXNzYWdlW10gPSBvdXRwdXRNZXNzYWdlcy5maWx0ZXIoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geC5tc2dfdHlwZSA9PT0gUU1lc3NhZ2VUeXBlLmV4dE91dDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygncHJvY2Vzc1J1bk1lc3NhZ2UuIEJlZm9yZSBtZXNzYWdlcyBwYXJzZScpO1xuICAgICAgICBjb25zdCBvdXRwdXRzID0gYXdhaXQgUHJvbWlzZS5hbGwoZXh0ZXJuYWxNZXNzYWdlcy5tYXAoKHg6IFFNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVPdXRwdXRNZXNzYWdlQm9keSh7XG4gICAgICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgICAgIGJvZHlCYXNlNjQ6IHguYm9keSB8fCAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdE91dHB1dCA9IG91dHB1dHMuZmluZCgoeDogVE9OQ29udHJhY3REZWNvZGVNZXNzYWdlQm9keVJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHguZnVuY3Rpb24udG9Mb3dlckNhc2UoKSA9PT0gcGFyYW1zLmZ1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdwcm9jZXNzUnVuTWVzc2FnZS4gRW5kJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvdXRwdXQ6IHJlc3VsdE91dHB1dCA/IHJlc3VsdE91dHB1dC5vdXRwdXQgOiBudWxsLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb24sXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYXN5bmMgcHJvY2Vzc1J1bk1lc3NhZ2VMb2NhbChcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1bk1lc3NhZ2UsXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ3Byb2Nlc3NSdW5NZXNzYWdlTG9jYWwnLCBwYXJhbXMpO1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQocGFyYW1zLmFkZHJlc3MsIHRydWUsIHdhaXRQYXJhbXMsIHBhcmVudFNwYW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmxvY2FsLm1zZycsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWNjb3VudCxcbiAgICAgICAgICAgIGFiaTogcGFyYW1zLmFiaSxcbiAgICAgICAgICAgIGZ1bmN0aW9uTmFtZTogcGFyYW1zLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VCYXNlNjQ6IHBhcmFtcy5tZXNzYWdlLm1lc3NhZ2VCb2R5QmFzZTY0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGZWUgY2FsY3VsYXRpb25cblxuICAgIGJpZ0JhbGFuY2UgPSAnMHgxMDAwMDAwMDAwMDAwMCc7XG5cbiAgICBhc3luYyBjYWxjUnVuRmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNSdW5GZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNSdW5GZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgdGhpcy5nZXRBY2NvdW50KHBhcmFtcy5hZGRyZXNzLCB0cnVlLCBwYXJhbXMud2FpdFBhcmFtcywgcGFyZW50U3Bhbik7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5lbXVsYXRlQmFsYW5jZSkge1xuICAgICAgICAgICAgYWNjb3VudC5iYWxhbmNlID0gdGhpcy5iaWdCYWxhbmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4uZmVlJywge1xuICAgICAgICAgICAgYWRkcmVzczogcGFyYW1zLmFkZHJlc3MsXG4gICAgICAgICAgICBhY2NvdW50LFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBjYWxjRGVwbG95RmVlcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdENhbGNEZXBsb3lGZWVQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0Q2FsY0ZlZVJlc3VsdD4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2NhbGNEZXBsb3lGZWVzJywgcGFyYW1zKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVEZXBsb3lNZXNzYWdlKHBhcmFtcyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsY01zZ1Byb2Nlc3NGZWVzKHtcbiAgICAgICAgICAgIGFkZHJlc3M6IG1lc3NhZ2UuYWRkcmVzcyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICAgICAgIGVtdWxhdGVCYWxhbmNlOiBwYXJhbXMuZW11bGF0ZUJhbGFuY2UsXG4gICAgICAgICAgICBuZXdBY2NvdW50OiBwYXJhbXMubmV3QWNjb3VudCxcbiAgICAgICAgfSwgcGFyZW50U3Bhbik7XG4gICAgfVxuXG4gICAgYXN5bmMgY2FsY01zZ1Byb2Nlc3NGZWVzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0Q2FsY01zZ1Byb2Nlc3NpbmdGZWVzUGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxUT05Db250cmFjdENhbGNGZWVSZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdjYWxjTXNnUHJvY2Vzc0ZlZXMnLCBwYXJhbXMpO1xuXG4gICAgICAgIGxldCBhY2NvdW50OiBRQWNjb3VudCA9IHtcbiAgICAgICAgICAgIGJhbGFuY2U6IHRoaXMuYmlnQmFsYW5jZSxcbiAgICAgICAgICAgIGlkOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGxhc3RfcGFpZDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFwYXJhbXMubmV3QWNjb3VudCkge1xuICAgICAgICAgICAgYWNjb3VudCA9IGF3YWl0IHRoaXMuZ2V0QWNjb3VudChwYXJhbXMuYWRkcmVzcywgZmFsc2UsIHBhcmFtcy53YWl0UGFyYW1zLCBwYXJlbnRTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZW11bGF0ZUJhbGFuY2UpIHtcbiAgICAgICAgICAgIGFjY291bnQuYmFsYW5jZSA9IHRoaXMuYmlnQmFsYW5jZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3RDb3JlKCdjb250cmFjdHMucnVuLmZlZS5tc2cnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBtZXNzYWdlQmFzZTY0OiBwYXJhbXMubWVzc2FnZS5tZXNzYWdlQm9keUJhc2U2NCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkcmVzcyBwcm9jZXNzaW5nXG5cbiAgICBhc3luYyBjb252ZXJ0QWRkcmVzcyhwYXJhbXM6IFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NQYXJhbXMpOiBQcm9taXNlPFRPTkNvbnRyYWN0Q29udmVydEFkZHJlc3NSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5hZGRyZXNzLmNvbnZlcnQnLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIEludGVybmFsc1xuXG4gICAgYXN5bmMgaW50ZXJuYWxEZXBsb3lOYXRpdmUocGFyYW1zOiBUT05Db250cmFjdERlcGxveVBhcmFtcyk6IFByb21pc2U8VE9OQ29udHJhY3REZXBsb3lSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5kZXBsb3knLCB7XG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5wYWNrYWdlLmFiaSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ySGVhZGVyOiBwYXJhbXMuY29uc3RydWN0b3JIZWFkZXIsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvclBhcmFtczogcGFyYW1zLmNvbnN0cnVjdG9yUGFyYW1zLFxuICAgICAgICAgICAgaW5pdFBhcmFtczogcGFyYW1zLmluaXRQYXJhbXMsXG4gICAgICAgICAgICBpbWFnZUJhc2U2NDogcGFyYW1zLnBhY2thZ2UuaW1hZ2VCYXNlNjQsXG4gICAgICAgICAgICBrZXlQYWlyOiBwYXJhbXMua2V5UGFpcixcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBhc3luYyBpbnRlcm5hbFJ1bk5hdGl2ZShwYXJhbXM6IFRPTkNvbnRyYWN0UnVuUGFyYW1zKTogUHJvbWlzZTxUT05Db250cmFjdFJ1blJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0Q29yZSgnY29udHJhY3RzLnJ1bicsIHtcbiAgICAgICAgICAgIGFkZHJlc3M6IHBhcmFtcy5hZGRyZXNzLFxuICAgICAgICAgICAgYWJpOiBwYXJhbXMuYWJpLFxuICAgICAgICAgICAgZnVuY3Rpb25OYW1lOiBwYXJhbXMuZnVuY3Rpb25OYW1lLFxuICAgICAgICAgICAgaGVhZGVyOiBwYXJhbXMuaGVhZGVyLFxuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5pbnB1dCxcbiAgICAgICAgICAgIGtleVBhaXI6IHBhcmFtcy5rZXlQYWlyLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBtYWtlRXhwaXJlSGVhZGVyKFxuICAgICAgICBhYmk6IFRPTkNvbnRyYWN0QUJJLFxuICAgICAgICB1c2VySGVhZGVyPzogYW55LFxuICAgICAgICByZXRyeUluZGV4PzogbnVtYmVyLFxuICAgICk6IGFueSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlRXhwaXJhdGlvblRpbWVvdXQocmV0cnlJbmRleCk7XG4gICAgICAgIGlmIChhYmkuaGVhZGVyICYmIGFiaS5oZWFkZXIuaW5jbHVkZXMoJ2V4cGlyZScpICYmICF1c2VySGVhZGVyPy5leHBpcmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udXNlckhlYWRlcixcbiAgICAgICAgICAgICAgICBleHBpcmU6IE1hdGguZmxvb3IoKERhdGUubm93KCkgKyB0aW1lb3V0KSAvIDEwMDApICsgMVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VySGVhZGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgcmV0cnlDYWxsKGNhbGw6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCByZXRyaWVzQ291bnQgPSB0aGlzLmNvbmZpZy5tZXNzYWdlUmV0cmllc0NvdW50KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHJldHJpZXNDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5sb2coYFJldHJ5ICMke2l9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBjYWxsKGkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoIVRPTkNsaWVudEVycm9yLmlzTWVzc2FnZUV4cGlyZWQoZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGludGVybmFsRGVwbG95SnMoXG4gICAgICAgIHBhcmFtczogVE9OQ29udHJhY3REZXBsb3lQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0RGVwbG95UmVzdWx0PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmxvZygnRGVwbG95IHN0YXJ0Jyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJldHJ5Q2FsbChhc3luYyAocmV0cnlJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHRoaXMuY3JlYXRlRGVwbG95TWVzc2FnZShwYXJhbXMsIHJldHJ5SW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0RlcGxveU1lc3NhZ2UobWVzc2FnZSwgcGFyZW50U3BhbiwgcmV0cnlJbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5KcyhcbiAgICAgICAgcGFyYW1zOiBUT05Db250cmFjdFJ1blBhcmFtcyxcbiAgICAgICAgcGFyZW50U3Bhbj86IChTcGFuIHwgU3BhbkNvbnRleHQpLFxuICAgICk6IFByb21pc2U8VE9OQ29udHJhY3RSdW5SZXN1bHQ+IHtcbiAgICAgICAgdGhpcy5jb25maWcubG9nKCdSdW4gc3RhcnQnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0cnlDYWxsKGFzeW5jIChyZXRyeUluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5jcmVhdGVSdW5NZXNzYWdlKHBhcmFtcywgcmV0cnlJbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzUnVuTWVzc2FnZShtZXNzYWdlLCBwYXJlbnRTcGFuLCByZXRyeUluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QWNjb3VudChcbiAgICAgICAgYWRkcmVzczogc3RyaW5nLFxuICAgICAgICBhY3RpdmU6IGJvb2xlYW4sXG4gICAgICAgIHdhaXRQYXJhbXM/OiBUT05Db250cmFjdEFjY291bnRXYWl0UGFyYW1zLFxuICAgICAgICBwYXJlbnRTcGFuPzogKFNwYW4gfCBTcGFuQ29udGV4dCksXG4gICAgKTogUHJvbWlzZTxRQWNjb3VudD4ge1xuICAgICAgICBmdW5jdGlvbiByZW1vdmVUeXBlTmFtZShvYmo6IGFueSkge1xuICAgICAgICAgICAgaWYgKG9iai5fX3R5cGVuYW1lKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5fX3R5cGVuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVR5cGVOYW1lKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZmlsdGVyOiB7IFtzdHJpbmddOiBhbnkgfSA9IHtcbiAgICAgICAgICAgIGlkOiB7IGVxOiBhZGRyZXNzIH0sXG4gICAgICAgIH07XG4gICAgICAgIGlmICh3YWl0UGFyYW1zICYmIHdhaXRQYXJhbXMudHJhbnNhY3Rpb25MdCkge1xuICAgICAgICAgICAgZmlsdGVyLmxhc3RfdHJhbnNfbHQgPSB7IGdlOiB3YWl0UGFyYW1zLnRyYW5zYWN0aW9uTHQgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBmaWx0ZXIuYWNjX3R5cGUgPSB7IGVxOiBRQWNjb3VudFR5cGUuYWN0aXZlIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEZpbHRlcicsIGZpbHRlcik7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLnF1ZXJpZXMuYWNjb3VudHMud2FpdEZvcihcbiAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICdpZCBjb2RlIGRhdGEgYmFsYW5jZSBiYWxhbmNlX290aGVyIHsgY3VycmVuY3kgdmFsdWUgfSBsYXN0X3BhaWQnLFxuICAgICAgICAgICAgd2FpdFBhcmFtcyAmJiB3YWl0UGFyYW1zLnRpbWVvdXQsXG4gICAgICAgICAgICBwYXJlbnRTcGFuLFxuICAgICAgICApO1xuXG4gICAgICAgIHJlbW92ZVR5cGVOYW1lKGFjY291bnQpO1xuICAgICAgICB0aGlzLmNvbmZpZy5sb2coJ2dldEFjY291bnQuIEFjY291bnQgcmVjaWV2ZWQnLCBhY2NvdW50KTtcbiAgICAgICAgcmV0dXJuIGFjY291bnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgaW50ZXJuYWxSdW5Mb2NhbEpzKFxuICAgICAgICBwYXJhbXM6IFRPTkNvbnRyYWN0UnVuTG9jYWxQYXJhbXMsXG4gICAgICAgIHBhcmVudFNwYW4/OiAoU3BhbiB8IFNwYW5Db250ZXh0KSxcbiAgICApOiBQcm9taXNlPFRPTkNvbnRyYWN0UnVuUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB0aGlzLmdldEFjY291bnQoXG4gICAgICAgICAgICBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBwYXJhbXMud2FpdFBhcmFtcyxcbiAgICAgICAgICAgIHBhcmVudFNwYW4sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdENvcmUoJ2NvbnRyYWN0cy5ydW4ubG9jYWwnLCB7XG4gICAgICAgICAgICBhZGRyZXNzOiBwYXJhbXMuYWRkcmVzcyxcbiAgICAgICAgICAgIGFjY291bnQsXG4gICAgICAgICAgICBhYmk6IHBhcmFtcy5hYmksXG4gICAgICAgICAgICBmdW5jdGlvbk5hbWU6IHBhcmFtcy5mdW5jdGlvbk5hbWUsXG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLmlucHV0LFxuICAgICAgICAgICAga2V5UGFpcjogcGFyYW1zLmtleVBhaXIsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuVE9OQ29udHJhY3RzTW9kdWxlLm1vZHVsZU5hbWUgPSAnVE9OQ29udHJhY3RzTW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogUVRyYW5zYWN0aW9uKSB7XG4gICAgaWYgKCF0cmFuc2FjdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBub2RlRXJyb3IobWVzc2FnZTogc3RyaW5nLCBjb2RlOiBudW1iZXIsIHBoYXNlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgUkVQTEFZX1BST1RFQ1RJT04gPSA1MjtcbiAgICAgICAgY29uc3QgTUVTU0FHRV9FWFBJUkVEID0gNTc7XG4gICAgICAgIGNvbnN0IGlzTm9kZVNFTWVzc2FnZUV4cGlyZWQgPSBwaGFzZSA9PT0gVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlVm1cbiAgICAgICAgICAgICYmIChjb2RlID09PSBNRVNTQUdFX0VYUElSRUQgfHwgY29kZSA9PT0gUkVQTEFZX1BST1RFQ1RJT04pO1xuICAgICAgICByZXR1cm4gaXNOb2RlU0VNZXNzYWdlRXhwaXJlZFxuICAgICAgICAgICAgPyBUT05DbGllbnRFcnJvci5tZXNzYWdlRXhwaXJlZCgpXG4gICAgICAgICAgICA6IG5ldyBUT05DbGllbnRFcnJvcihcbiAgICAgICAgICAgICAgICBgJHttZXNzYWdlfSAoJHtjb2RlfSkgYXQgJHtwaGFzZX1gLFxuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50RXJyb3Iuc291cmNlLk5PREUsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwaGFzZSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25faWQ6IHRyYW5zYWN0aW9uLmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JhZ2UgPSB0cmFuc2FjdGlvbi5zdG9yYWdlO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHN0b3JhZ2Uuc3RhdHVzX2NoYW5nZTtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gUUFjY291bnRTdGF0dXNDaGFuZ2UuZnJvemVuKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGZyb3plbiBkdWUgc3RvcmFnZSBwaGFzZScsXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50U3RvcmFnZVN0YXR1cy5mcm96ZW4sXG4gICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5zdG9yYWdlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdHVzID09PSBRQWNjb3VudFN0YXR1c0NoYW5nZS5kZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgJ0FjY291bnQgd2FzIGRlbGV0ZWQgZHVlIHN0b3JhZ2UgcGhhc2UnLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFN0b3JhZ2VTdGF0dXMuZGVsZXRlZCxcbiAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLnN0b3JhZ2UsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZSA9IHRyYW5zYWN0aW9uLmNvbXB1dGU7XG4gICAgaWYgKGNvbXB1dGUpIHtcbiAgICAgICAgaWYgKGNvbXB1dGUuY29tcHV0ZV90eXBlID09PSBRQ29tcHV0ZVR5cGUuc2tpcHBlZCkge1xuICAgICAgICAgICAgY29uc3QgcmVhc29uID0gY29tcHV0ZS5za2lwcGVkX3JlYXNvbjtcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBubyBjb2RlIGFuZCBkYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMubm9TdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlYXNvbiA9PT0gUVNraXBSZWFzb24uYmFkU3RhdGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBub2RlRXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICdBY2NvdW50IGhhcyBiYWQgc3RhdGU6IGZyb3plbiBvciBkZWxldGVkJyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50Q29tcHV0ZVNraXBwZWRTdGF0dXMuYmFkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09IFFTa2lwUmVhc29uLm5vR2FzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnTm8gZ2FzIHRvIGV4ZWN1dGUgVk0nLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRDb21wdXRlU2tpcHBlZFN0YXR1cy5ub0dhcyxcbiAgICAgICAgICAgICAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS5jb21wdXRlU2tpcHBlZCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgICdDb21wdXRlIHBoYXNlIHNraXBwZWQgYnkgdW5rbm93biByZWFzb24nLFxuICAgICAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuY29tcHV0ZVNraXBwZWQsXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb21wdXRlLmNvbXB1dGVfdHlwZSA9PT0gUUNvbXB1dGVUeXBlLnZtKSB7XG4gICAgICAgICAgICBpZiAoIWNvbXB1dGUuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgJ1ZNIHRlcm1pbmF0ZWQgd2l0aCBleGNlcHRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjb21wdXRlLmV4aXRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgICAgICBUT05DbGllbnRUcmFuc2FjdGlvblBoYXNlLmNvbXB1dGVWbSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9uID0gdHJhbnNhY3Rpb24uYWN0aW9uO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgaWYgKCFhY3Rpb24uc3VjY2Vzcykge1xuICAgICAgICAgICAgdGhyb3cgbm9kZUVycm9yKFxuICAgICAgICAgICAgICAgIGFjdGlvbi5ub19mdW5kc1xuICAgICAgICAgICAgICAgICAgICA/ICdUb28gbG93IGJhbGFuY2UgdG8gc2VuZCBvdXRib3VuZCBtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICA6ICghYWN0aW9uLnZhbGlkID8gJ091dGJvdW5kIG1lc3NhZ2UgaXMgaW52YWxpZCcgOiAnQWN0aW9uIHBoYXNlIGZhaWxlZCcpLFxuICAgICAgICAgICAgICAgIGFjdGlvbi5yZXN1bHRfY29kZSB8fCAwLFxuICAgICAgICAgICAgICAgIFRPTkNsaWVudFRyYW5zYWN0aW9uUGhhc2UuYWN0aW9uLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRocm93IG5vZGVFcnJvcihcbiAgICAgICAgJ1RyYW5zYWN0aW9uIGFib3J0ZWQnLFxuICAgICAgICAtMSxcbiAgICAgICAgVE9OQ2xpZW50VHJhbnNhY3Rpb25QaGFzZS51bmtub3duLFxuICAgICk7XG59XG5cbmNvbnN0IHRyYW5zYWN0aW9uRGV0YWlscyA9IGBcbiAgICBpZFxuICAgIGluX21zZ1xuICAgIHRyX3R5cGVcbiAgICBzdGF0dXNcbiAgICBpbl9tc2dcbiAgICBvdXRfbXNnc1xuICAgIGJsb2NrX2lkXG4gICAgbm93XG4gICAgYWJvcnRlZFxuICAgIGx0XG4gICAgc3RvcmFnZSB7XG4gICAgICAgIHN0YXR1c19jaGFuZ2VcbiAgICB9XG4gICAgY29tcHV0ZSB7XG4gICAgICAgIGNvbXB1dGVfdHlwZVxuICAgICAgICBza2lwcGVkX3JlYXNvblxuICAgICAgICBzdWNjZXNzXG4gICAgICAgIGV4aXRfY29kZVxuICAgICAgICBnYXNfZmVlc1xuICAgICAgICBnYXNfdXNlZFxuICAgIH1cbiAgICBhY3Rpb24ge1xuICAgICAgICBzdWNjZXNzXG4gICAgICAgIHZhbGlkXG4gICAgICAgIHJlc3VsdF9jb2RlXG4gICAgICAgIG5vX2Z1bmRzXG4gICAgfVxuICAgIG91dF9tZXNzYWdlcyB7XG4gICAgICAgIGlkXG4gICAgICAgIG1zZ190eXBlXG4gICAgICAgIGJvZHlcbiAgICB9XG4gICBgO1xuIl19