function RadioContainer({ name, value }) {
  return (
    <label className="input__radio-container">
      <input className="input__radio" type="radio" name={name} value={value} />
      <span className="input__radio-custom"></span>
      {value === "repayment" ? "Repayment" : "Interest Only"}
    </label>
  );
}

export default RadioContainer;
