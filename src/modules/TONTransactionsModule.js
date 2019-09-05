// @flow
/* eslint-disable class-methods-use-this */
import TONClient from '../TONClient';
import { TONModule } from '../TONModule';

type TONTransactionSendParams = {}
type TONTransactionSendResult = {}
type TONFeeObject = {
    account: string, // Transaction's party address, as all transaction parties should pay fees!
    value: {
        gas: ?string, // BigNumbers presented as strings!
        forward: ?string, // BigNumbers presented as strings!
        storage: ?string, // BigNumbers presented as strings!
    }
};
type TONTransaction = {
    id: string,
    amount: string, // BigNumbers presented as strings!
    fees: TONFeeObject[],
    from: string,
    to: string,
    time: number,
    out?: boolean,
};
type TONTransactionsList = TONTransaction[];

const methods = {
    send: 'transaction.send',
};

export default class TONTransactionsModule extends TONModule {
    async send(params: TONTransactionSendParams): Promise<TONTransactionSendResult> {
        return this.requestLibrary(methods.send, params);
    }

    async getTransactionsList(address: string): Promise<TONTransactionsList> {
        const list = await TONClient.shared.queries.select(`
            LET acc = @account
            FOR tr IN transactions
                // select only transactions for a given account
                FILTER tr.account_addr == acc
                // look inbound and outbound messages for transaction
                LET ordinary = tr.description.Ordinary
                FOR msg_id IN APPEND([tr.in_msg], tr.out_msgs)
                    LET msg = DOCUMENT(messages, msg_id)
                    // select only messages which transfer money
                    LET intMsgInfo = msg.header.IntMsgInfo
                    FILTER HAS(msg.header, "IntMsgInfo") && intMsgInfo.value.Grams != "0"
                    // return only some required fields
                    RETURN {
                        id: msg._key,
                        amount: intMsgInfo.value.Grams,
                        fees: [{
                            account: acc, // for this query we return fees only for this exact account!
                            value: {
                                gas: ordinary.compute_ph.Vm.gas_fees,
                                forward: ordinary.action.total_fwd_fees,
                                storage: ordinary.storage_ph.storage_fees_collected
                            }
                        }],
                        from: intMsgInfo.src.AddrStd.address,
                        to: intMsgInfo.dst.AddrStd.address,
                        time: intMsgInfo.created_at,
                        out: msg_id != tr.in_msg
                    }
        `, { account: address });
        return list;
    }

    async getTransactionByID(transactionId: string): Promise<?TONTransaction> {
        const transactions = (await TONClient.shared.queries.select(`
            LET msg = DOCUMENT(messages, @id)
            FOR tr IN transactions
                // find transaction with given message
                FILTER tr.in_msg == msg._key || POSITION(tr.out_msgs, msg._key)
                    LET ordinary = tr.description.Ordinary
                    LET intMsgInfo = msg.header.IntMsgInfo
                    RETURN {
                        id: msg._key,
                        amount: intMsgInfo.value.Grams,
                        fees: [{
                            account: tr.account_addr,
                            value: {
                                gas: ordinary.compute_ph.Vm.gas_fees,
                                forward: ordinary.action.total_fwd_fees,
                                storage: ordinary.storage_ph.storage_fees_collected
                            }
                        }],
                        from: intMsgInfo.src.AddrStd.address,
                        to: intMsgInfo.dst.AddrStd.address,
                        time: intMsgInfo.created_at
                    }
        `, { id: transactionId }));
        // Merge results into one transaction details object
        let transaction: any = {};
        transactions.forEach((trx) => {
            // Collect fees for all sides
            const fees = [...transaction.fees || [], ...trx.fees];
            // Merge all transactions data
            transaction = { ...transaction, ...trx, fees };
        });
        return (transaction: TONTransaction);
    }
}

TONTransactionsModule.moduleName = 'TONTransactionsModule';
