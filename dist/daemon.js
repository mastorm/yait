"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ynab_1 = require("ynab");
const dotenv_1 = require("dotenv");
const process_1 = require("process");
dotenv_1.config();
const budgetId = process.env.YAIT_YNAB_BUDGET;
const apiKey = process.env.YAIT_YNAB_APIKEY;
const checkingAccountId = process.env.YAIT_YNAB_CHECKING;
if (!apiKey || !budgetId || !checkingAccountId) {
    process_1.exit();
}
(async function () {
    const ynab = new ynab_1.API(apiKey);
    try {
        await ynab.transactions.createTransaction(budgetId, {
            transaction: {
                account_id: checkingAccountId,
                amount: 13370,
                approved: false,
                date: ynab_1.utils.getCurrentDateInISOFormat(),
                cleared: ynab_1.SaveTransaction.ClearedEnum.Uncleared,
            },
        });
    }
    catch (error) {
        console.log(error);
    }
})();
