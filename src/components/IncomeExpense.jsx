import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  let amount = transactions.map((transaction) => transaction.amount);
  let income = amount
    .filter((transaction) => transaction > 0)
    .reduce((acc, amount) => (acc += amount), 0);
  let expenses = amount
    .filter((transaction) => transaction < 0)
    .reduce((acc, amount) => (acc += amount), 0);

  return (
    <div className="income_expense_box">
      <div className="container">
        Income: <div className="amount pos_amount">${income}</div>
      </div>
      <div className="container">
        Expense: <div className="amount neg_amount">${Math.abs(expenses)}</div>
      </div>
    </div>
  );
}
