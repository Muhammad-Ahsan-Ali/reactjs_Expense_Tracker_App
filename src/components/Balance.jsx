import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  let total = transactions
    .map((transaction) => transaction.amount)
    .reduce((acc, amount) => (acc += amount), 0);
  return (
    <div className="balance">
      <h1>Balance: </h1>
      <h1 className={total > 0 ? "pos_amount" : "neg_amount"}>
        ${Math.abs(total)}
      </h1>
    </div>
  );
}
