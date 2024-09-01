import Transaction from "./Transaction";

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="transaction_list">
      <h1>History</h1>
      <hr className="row" />
      {transactions.length === 0 ? (
        <h2 className="empty_list_text">Add Expense in the list</h2>
      ) : (
        transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}
