"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _TONClient = _interopRequireDefault(require("../TONClient"));

var _TONModule2 = require("../TONModule");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var methods = {
  send: 'transaction.send'
};

var TONTransactionsModule =
/*#__PURE__*/
function (_TONModule) {
  (0, _inherits2["default"])(TONTransactionsModule, _TONModule);

  function TONTransactionsModule() {
    (0, _classCallCheck2["default"])(this, TONTransactionsModule);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TONTransactionsModule).apply(this, arguments));
  }

  (0, _createClass2["default"])(TONTransactionsModule, [{
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(params) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", this.requestLibrary(methods.send, params));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send(_x) {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "getTransactionsList",
    value: function () {
      var _getTransactionsList = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(address) {
        var list;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _TONClient["default"].shared.queries.select("\n            LET acc = @account\n            FOR tr IN transactions\n                // select only transactions for a given account\n                FILTER tr.account_addr == acc\n                // look inbound and outbound messages for transaction\n                LET ordinary = tr.description.Ordinary\n                FOR msg_id IN APPEND([tr.in_msg], tr.out_msgs)\n                    LET msg = DOCUMENT(messages, msg_id)\n                    // select only messages which transfer money\n                    LET intMsgInfo = msg.header.IntMsgInfo\n                    FILTER HAS(msg.header, \"IntMsgInfo\") && intMsgInfo.value.Grams != \"0\"\n                    // return only some required fields\n                    RETURN {\n                        id: msg._key,\n                        amount: intMsgInfo.value.Grams,\n                        fees: [{\n                            account: acc, // for this query we return fees only for this exact account!\n                            value: {\n                                gas: ordinary.compute_ph.Vm.gas_fees,\n                                forward: ordinary.action.total_fwd_fees,\n                                storage: ordinary.storage_ph.storage_fees_collected\n                            }\n                        }],\n                        from: intMsgInfo.src.AddrStd.address,\n                        to: intMsgInfo.dst.AddrStd.address,\n                        time: intMsgInfo.created_at,\n                        out: msg_id != tr.in_msg\n                    }\n        ", {
                  account: address
                });

              case 2:
                list = _context2.sent;
                return _context2.abrupt("return", list);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getTransactionsList(_x2) {
        return _getTransactionsList.apply(this, arguments);
      }

      return getTransactionsList;
    }()
  }, {
    key: "getTransactionByID",
    value: function () {
      var _getTransactionByID = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(transactionId) {
        var transactions, transaction;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _TONClient["default"].shared.queries.select("\n            LET msg = DOCUMENT(messages, @id)\n            FOR tr IN transactions\n                // find transaction with given message\n                FILTER tr.in_msg == msg._key || POSITION(tr.out_msgs, msg._key)\n                    LET ordinary = tr.description.Ordinary\n                    LET intMsgInfo = msg.header.IntMsgInfo\n                    RETURN {\n                        id: msg._key,\n                        amount: intMsgInfo.value.Grams,\n                        fees: [{\n                            account: tr.account_addr,\n                            value: {\n                                gas: ordinary.compute_ph.Vm.gas_fees,\n                                forward: ordinary.action.total_fwd_fees,\n                                storage: ordinary.storage_ph.storage_fees_collected\n                            }\n                        }],\n                        from: intMsgInfo.src.AddrStd.address,\n                        to: intMsgInfo.dst.AddrStd.address,\n                        time: intMsgInfo.created_at\n                    }\n        ", {
                  id: transactionId
                });

              case 2:
                transactions = _context3.sent;
                // Merge results into one transaction details object
                transaction = {};
                transactions.forEach(function (trx) {
                  // Collect fees for all sides
                  var fees = [].concat((0, _toConsumableArray2["default"])(transaction.fees || []), (0, _toConsumableArray2["default"])(trx.fees)); // Merge all transactions data

                  transaction = _objectSpread({}, transaction, {}, trx, {
                    fees: fees
                  });
                });
                return _context3.abrupt("return", transaction);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTransactionByID(_x3) {
        return _getTransactionByID.apply(this, arguments);
      }

      return getTransactionByID;
    }()
  }]);
  return TONTransactionsModule;
}(_TONModule2.TONModule);

exports["default"] = TONTransactionsModule;
TONTransactionsModule.moduleName = 'TONTransactionsModule';
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL1RPTlRyYW5zYWN0aW9uc01vZHVsZS5qcyJdLCJuYW1lcyI6WyJtZXRob2RzIiwic2VuZCIsIlRPTlRyYW5zYWN0aW9uc01vZHVsZSIsInBhcmFtcyIsInJlcXVlc3RMaWJyYXJ5IiwiYWRkcmVzcyIsIlRPTkNsaWVudCIsInNoYXJlZCIsInF1ZXJpZXMiLCJzZWxlY3QiLCJhY2NvdW50IiwibGlzdCIsInRyYW5zYWN0aW9uSWQiLCJpZCIsInRyYW5zYWN0aW9ucyIsInRyYW5zYWN0aW9uIiwiZm9yRWFjaCIsInRyeCIsImZlZXMiLCJUT05Nb2R1bGUiLCJtb2R1bGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7Ozs7O0FBdUJBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxFQUFBQSxJQUFJLEVBQUU7QUFETSxDQUFoQjs7SUFJcUJDLHFCOzs7Ozs7Ozs7Ozs7Ozs7b0RBQ05DLE07Ozs7O2lEQUNBLEtBQUtDLGNBQUwsQ0FBb0JKLE9BQU8sQ0FBQ0MsSUFBNUIsRUFBa0NFLE1BQWxDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFHZUUsTzs7Ozs7Ozt1QkFDSEMsc0JBQVVDLE1BQVYsQ0FBaUJDLE9BQWpCLENBQXlCQyxNQUF6Qiw4aERBNkJoQjtBQUFFQyxrQkFBQUEsT0FBTyxFQUFFTDtBQUFYLGlCQTdCZ0IsQzs7O0FBQWJNLGdCQUFBQSxJO2tEQThCQ0EsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FEQUdjQyxhOzs7Ozs7O3VCQUNPTixzQkFBVUMsTUFBVixDQUFpQkMsT0FBakIsQ0FBeUJDLE1BQXpCLDBrQ0FzQnpCO0FBQUVJLGtCQUFBQSxFQUFFLEVBQUVEO0FBQU4saUJBdEJ5QixDOzs7QUFBdEJFLGdCQUFBQSxZO0FBdUJOO0FBQ0lDLGdCQUFBQSxXLEdBQW1CLEU7QUFDdkJELGdCQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFTO0FBQzFCO0FBQ0Esc0JBQU1DLElBQUksaURBQU9ILFdBQVcsQ0FBQ0csSUFBWixJQUFvQixFQUEzQix1Q0FBa0NELEdBQUcsQ0FBQ0MsSUFBdEMsRUFBVixDQUYwQixDQUcxQjs7QUFDQUgsa0JBQUFBLFdBQVcscUJBQVFBLFdBQVIsTUFBd0JFLEdBQXhCO0FBQTZCQyxvQkFBQUEsSUFBSSxFQUFKQTtBQUE3QixvQkFBWDtBQUNILGlCQUxEO2tEQU1RSCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2RW1DSSxxQjs7O0FBMkVuRGpCLHFCQUFxQixDQUFDa0IsVUFBdEIsR0FBbUMsdUJBQW5DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBUT05DbGllbnQgZnJvbSAnLi4vVE9OQ2xpZW50JztcbmltcG9ydCB7IFRPTk1vZHVsZSB9IGZyb20gJy4uL1RPTk1vZHVsZSc7XG5cbnR5cGUgVE9OVHJhbnNhY3Rpb25TZW5kUGFyYW1zID0ge31cbnR5cGUgVE9OVHJhbnNhY3Rpb25TZW5kUmVzdWx0ID0ge31cbnR5cGUgVE9ORmVlT2JqZWN0ID0ge1xuICAgIGFjY291bnQ6IHN0cmluZywgLy8gVHJhbnNhY3Rpb24ncyBwYXJ0eSBhZGRyZXNzLCBhcyBhbGwgdHJhbnNhY3Rpb24gcGFydGllcyBzaG91bGQgcGF5IGZlZXMhXG4gICAgdmFsdWU6IHtcbiAgICAgICAgZ2FzOiA/c3RyaW5nLCAvLyBCaWdOdW1iZXJzIHByZXNlbnRlZCBhcyBzdHJpbmdzIVxuICAgICAgICBmb3J3YXJkOiA/c3RyaW5nLCAvLyBCaWdOdW1iZXJzIHByZXNlbnRlZCBhcyBzdHJpbmdzIVxuICAgICAgICBzdG9yYWdlOiA/c3RyaW5nLCAvLyBCaWdOdW1iZXJzIHByZXNlbnRlZCBhcyBzdHJpbmdzIVxuICAgIH1cbn07XG50eXBlIFRPTlRyYW5zYWN0aW9uID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgYW1vdW50OiBzdHJpbmcsIC8vIEJpZ051bWJlcnMgcHJlc2VudGVkIGFzIHN0cmluZ3MhXG4gICAgZmVlczogVE9ORmVlT2JqZWN0W10sXG4gICAgZnJvbTogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmcsXG4gICAgdGltZTogbnVtYmVyLFxuICAgIG91dD86IGJvb2xlYW4sXG59O1xudHlwZSBUT05UcmFuc2FjdGlvbnNMaXN0ID0gVE9OVHJhbnNhY3Rpb25bXTtcblxuY29uc3QgbWV0aG9kcyA9IHtcbiAgICBzZW5kOiAndHJhbnNhY3Rpb24uc2VuZCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUT05UcmFuc2FjdGlvbnNNb2R1bGUgZXh0ZW5kcyBUT05Nb2R1bGUge1xuICAgIGFzeW5jIHNlbmQocGFyYW1zOiBUT05UcmFuc2FjdGlvblNlbmRQYXJhbXMpOiBQcm9taXNlPFRPTlRyYW5zYWN0aW9uU2VuZFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0TGlicmFyeShtZXRob2RzLnNlbmQsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0VHJhbnNhY3Rpb25zTGlzdChhZGRyZXNzOiBzdHJpbmcpOiBQcm9taXNlPFRPTlRyYW5zYWN0aW9uc0xpc3Q+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGF3YWl0IFRPTkNsaWVudC5zaGFyZWQucXVlcmllcy5zZWxlY3QoYFxuICAgICAgICAgICAgTEVUIGFjYyA9IEBhY2NvdW50XG4gICAgICAgICAgICBGT1IgdHIgSU4gdHJhbnNhY3Rpb25zXG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IG9ubHkgdHJhbnNhY3Rpb25zIGZvciBhIGdpdmVuIGFjY291bnRcbiAgICAgICAgICAgICAgICBGSUxURVIgdHIuYWNjb3VudF9hZGRyID09IGFjY1xuICAgICAgICAgICAgICAgIC8vIGxvb2sgaW5ib3VuZCBhbmQgb3V0Ym91bmQgbWVzc2FnZXMgZm9yIHRyYW5zYWN0aW9uXG4gICAgICAgICAgICAgICAgTEVUIG9yZGluYXJ5ID0gdHIuZGVzY3JpcHRpb24uT3JkaW5hcnlcbiAgICAgICAgICAgICAgICBGT1IgbXNnX2lkIElOIEFQUEVORChbdHIuaW5fbXNnXSwgdHIub3V0X21zZ3MpXG4gICAgICAgICAgICAgICAgICAgIExFVCBtc2cgPSBET0NVTUVOVChtZXNzYWdlcywgbXNnX2lkKVxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxlY3Qgb25seSBtZXNzYWdlcyB3aGljaCB0cmFuc2ZlciBtb25leVxuICAgICAgICAgICAgICAgICAgICBMRVQgaW50TXNnSW5mbyA9IG1zZy5oZWFkZXIuSW50TXNnSW5mb1xuICAgICAgICAgICAgICAgICAgICBGSUxURVIgSEFTKG1zZy5oZWFkZXIsIFwiSW50TXNnSW5mb1wiKSAmJiBpbnRNc2dJbmZvLnZhbHVlLkdyYW1zICE9IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBvbmx5IHNvbWUgcmVxdWlyZWQgZmllbGRzXG4gICAgICAgICAgICAgICAgICAgIFJFVFVSTiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogbXNnLl9rZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IGludE1zZ0luZm8udmFsdWUuR3JhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnQ6IGFjYywgLy8gZm9yIHRoaXMgcXVlcnkgd2UgcmV0dXJuIGZlZXMgb25seSBmb3IgdGhpcyBleGFjdCBhY2NvdW50IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhczogb3JkaW5hcnkuY29tcHV0ZV9waC5WbS5nYXNfZmVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZDogb3JkaW5hcnkuYWN0aW9uLnRvdGFsX2Z3ZF9mZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlOiBvcmRpbmFyeS5zdG9yYWdlX3BoLnN0b3JhZ2VfZmVlc19jb2xsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGludE1zZ0luZm8uc3JjLkFkZHJTdGQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBpbnRNc2dJbmZvLmRzdC5BZGRyU3RkLmFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBpbnRNc2dJbmZvLmNyZWF0ZWRfYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXQ6IG1zZ19pZCAhPSB0ci5pbl9tc2dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBgLCB7IGFjY291bnQ6IGFkZHJlc3MgfSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRyYW5zYWN0aW9uQnlJRCh0cmFuc2FjdGlvbklkOiBzdHJpbmcpOiBQcm9taXNlPD9UT05UcmFuc2FjdGlvbj4ge1xuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSAoYXdhaXQgVE9OQ2xpZW50LnNoYXJlZC5xdWVyaWVzLnNlbGVjdChgXG4gICAgICAgICAgICBMRVQgbXNnID0gRE9DVU1FTlQobWVzc2FnZXMsIEBpZClcbiAgICAgICAgICAgIEZPUiB0ciBJTiB0cmFuc2FjdGlvbnNcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRyYW5zYWN0aW9uIHdpdGggZ2l2ZW4gbWVzc2FnZVxuICAgICAgICAgICAgICAgIEZJTFRFUiB0ci5pbl9tc2cgPT0gbXNnLl9rZXkgfHwgUE9TSVRJT04odHIub3V0X21zZ3MsIG1zZy5fa2V5KVxuICAgICAgICAgICAgICAgICAgICBMRVQgb3JkaW5hcnkgPSB0ci5kZXNjcmlwdGlvbi5PcmRpbmFyeVxuICAgICAgICAgICAgICAgICAgICBMRVQgaW50TXNnSW5mbyA9IG1zZy5oZWFkZXIuSW50TXNnSW5mb1xuICAgICAgICAgICAgICAgICAgICBSRVRVUk4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1zZy5fa2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50OiBpbnRNc2dJbmZvLnZhbHVlLkdyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmVlczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50OiB0ci5hY2NvdW50X2FkZHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FzOiBvcmRpbmFyeS5jb21wdXRlX3BoLlZtLmdhc19mZWVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkOiBvcmRpbmFyeS5hY3Rpb24udG90YWxfZndkX2ZlZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2U6IG9yZGluYXJ5LnN0b3JhZ2VfcGguc3RvcmFnZV9mZWVzX2NvbGxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogaW50TXNnSW5mby5zcmMuQWRkclN0ZC5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGludE1zZ0luZm8uZHN0LkFkZHJTdGQuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGludE1zZ0luZm8uY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIGAsIHsgaWQ6IHRyYW5zYWN0aW9uSWQgfSkpO1xuICAgICAgICAvLyBNZXJnZSByZXN1bHRzIGludG8gb25lIHRyYW5zYWN0aW9uIGRldGFpbHMgb2JqZWN0XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbjogYW55ID0ge307XG4gICAgICAgIHRyYW5zYWN0aW9ucy5mb3JFYWNoKCh0cngpID0+IHtcbiAgICAgICAgICAgIC8vIENvbGxlY3QgZmVlcyBmb3IgYWxsIHNpZGVzXG4gICAgICAgICAgICBjb25zdCBmZWVzID0gWy4uLnRyYW5zYWN0aW9uLmZlZXMgfHwgW10sIC4uLnRyeC5mZWVzXTtcbiAgICAgICAgICAgIC8vIE1lcmdlIGFsbCB0cmFuc2FjdGlvbnMgZGF0YVxuICAgICAgICAgICAgdHJhbnNhY3Rpb24gPSB7IC4uLnRyYW5zYWN0aW9uLCAuLi50cngsIGZlZXMgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAodHJhbnNhY3Rpb246IFRPTlRyYW5zYWN0aW9uKTtcbiAgICB9XG59XG5cblRPTlRyYW5zYWN0aW9uc01vZHVsZS5tb2R1bGVOYW1lID0gJ1RPTlRyYW5zYWN0aW9uc01vZHVsZSc7XG4iXX0=