import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li>
        <h3 className="desc">{transaction.desc}:</h3>
        <h3 className={transaction.amount > 0 ? "pos_amount" : "neg_amount"}>
          ${Math.abs(transaction.amount)}
        </h3>
        <button
          className="delete_btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
}
