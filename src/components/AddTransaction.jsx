import { useContext } from "react";
import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [invalidInput, setInvalidInput] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    let transaction = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      amount: +amount,
    };
    amount !== 0 && amount !== "" && desc !== ""
      ? (addTransaction(transaction), setInvalidInput(null))
      : setInvalidInput(
          <h5 className="neg_amount">Both fields are necessary</h5>
        );
  }
  return (
    <div className="add_transaction">
      <h2>Add new transaction</h2>
      <hr />
      <h3>Description:</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <h3>Expense:</h3>
        <h6>(use -ve for expense & +ve for balance)</h6>
        <input
          type="number"
          name=""
          id=""
          placeholder="Expense"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {invalidInput}
        <button className="btn">Add Expense</button>
      </form>
    </div>
  );
}
