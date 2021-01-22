import { API, SaveTransaction, TransactionsApiFactory, utils } from "ynab";
import {config} from "dotenv";
import { exit } from "process";
config();

const budgetId = process.env.YAIT_YNAB_BUDGET
const apiKey = process.env.YAIT_YNAB_APIKEY
const checkingAccountId = process.env.YAIT_YNAB_CHECKING;

if(!apiKey || !budgetId || !checkingAccountId) {
  exit();
}

(async function () {
  const ynab = new API(apiKey);

  try {
    await ynab.transactions.createTransaction(budgetId, {
      transaction: {
        account_id: checkingAccountId,
        amount: 13370,
        approved: false,
        date: utils.getCurrentDateInISOFormat(),
        cleared: SaveTransaction.ClearedEnum.Uncleared,
      },
    });
  } catch (error) {
    console.log(error);
  }
})();
