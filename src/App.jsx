import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import { useState, useEffect } from "react";

function App() { 
  
  // Define transactions state object. 
  // Load from localStorage OR fallback to starter data
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, text: "Groceries", amount: -20 },
          { id: 2, text: "Salary", amount: 500 },
          { id: 3, text: "Coffee", amount: -3 },
        ];
  });

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const amounts = transactions.map((transaction) => transaction.amount); //Create new array containing only the amounts
  
  //Combines "amounts" from array into one value based on rule set (acc + item)
  const total = amounts.reduce((acc, item) => acc + item, 0); //"acc" = running total. "item" current value in loop.

  //Filter amounts array by values greater than 0, then combine those to find total income. 
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => acc + item, 0);

  //Filter amounts array by values smaller than 0, then combine those to find total expenses.
    const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => acc + item, 0);

    const deleteTransaction = (id) => {
      setTransactions(transactions.filter((transaction) => transaction.id !== id));
    };

  const addTransaction = (newTransaction) => {
    setTransactions([newTransaction, ...transactions]);
  };

  return (
    <div className="container">
      <Header />
      <Balance total={total}/> 
      <IncomeExpense income={income} expense={expense} />
      <TransactionList 
        transactions={transactions}
        onDelete={deleteTransaction}
      />
      <AddTransaction onAdd={addTransaction}/>
    </div>
  );
}

export default App;
