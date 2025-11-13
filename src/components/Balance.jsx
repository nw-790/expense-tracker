function Balance({ total }) {
  const sign = total < 0 ? "-" : "";
  const formatted = Math.abs(total).toFixed(2);

  return (
    <div>
      <h4>Your Balance:</h4>
      <h1>{sign}£{formatted}</h1>
    </div>
  );
}

export default Balance;