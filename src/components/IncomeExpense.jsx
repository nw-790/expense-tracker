function IncomeExpense({ income, expense }) {
  return (
    <div>
      <div>
        <h4>Income</h4>
        <p style={{ color: "green" }}>+£{income.toFixed(2)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p style={{ color: "red" }}>-£{Math.abs(expense).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;