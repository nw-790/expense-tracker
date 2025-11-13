import { useState } from "react";

function AddTransaction({ onAdd }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop form refreshing the page

    if (!text || !amount) return; //Don't add if empty

    const newTransaction = {
      id: Date.now(),     // creates a unique ID using current time
      text: text,
      amount: Number(amount) // converts input string to number
    }

    onAdd(newTransaction); // send the new object to app.jsx

    setText(""); //Clear form
    setAmount("");
  }


  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>Text</label>
          <br />
          <input 
            type="text" 
            placeholder="Enter text..." 
            value={text}
            onChange={(e) => setText(e.target.value)} 
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Amount <br /> 
            <small>(negative - expense, positive - income)</small>
          </label>
          <br />
          <input 
            type="number" 
            placeholder="Enter amount..." 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        
        <button style={{ padding: "6px 12px", cursor: "pointer" }}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
