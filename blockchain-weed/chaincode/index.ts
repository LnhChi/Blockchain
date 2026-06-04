import 'reflect-metadata';
import { Context, Contract, Info, Returns, Transaction } from 'fabric-contract-api';

@Info({title: 'WeedDetectionContract', description: 'Smart Contract cho Hệ thống Phát hiện Cỏ dại'})
export class WeedDetectionContract extends Contract {

    @Transaction()
    public async RecordWeedDetection(ctx: Context, id: string, recordJsonString: string): Promise<string> {
        // 1. Parse JSON từ client gửi lên
        let record;
        try {
            record = JSON.parse(recordJsonString);
        } catch (err) {
            throw new Error(`Dữ liệu không phải là JSON hợp lệ: ${err}`);
        }

        // 2. Thêm docType để dễ truy vấn sau này
        record.docType = 'weed_detection';
        record.id = id;

        // 3. Chuyển JSON thành Buffer và lưu vào CouchDB (World State)
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(record)));
        console.log(`Đã lưu thành công dữ liệu quét cỏ cho: ${id}`);
        
        // Trả về transaction ID cho client
        return ctx.stub.getTxID();
    }

    @Transaction(false)
    @Returns('string')
    public async GetWeedHistory(ctx: Context, id: string): Promise<string> {
        // Dùng GetHistoryForKey lôi toàn bộ lịch sử từ Sổ cái (Ledger)
        const promiseOfIterator = ctx.stub.getHistoryForKey(id);
        const results = [];
        
        for await (const keyMod of promiseOfIterator) {
            const resp = {
                timestamp: keyMod.timestamp,
                txid: keyMod.txId,
                data: Buffer.from(keyMod.value).toString('utf8')
            };
            results.push(resp);
        }
        
        return JSON.stringify(results);
    }
}

export const contracts: Array<typeof Contract> = [WeedDetectionContract];