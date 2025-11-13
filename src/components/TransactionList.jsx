function formatAmount(amount) {
  const sign = amount < 0 ? "-" : "+";
  const formatted = Math.abs(amount).toFixed(2);
  return `${sign}£${formatted}`;
}

function TransactionList({ transactions, onDelete }) {
  return (
    <div>
      <h3>History</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {transactions.map((transaction) => (
          <li 
            key={transaction.id}
            className={`transaction ${transaction.amount > 0 ? "income" : "expense"}`}
          >
            <span>
              {transaction.text} {formatAmount(transaction.amount)}
            </span>
            <button className="delete-btn" onClick={() => onDelete(transaction.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;