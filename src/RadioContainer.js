function RadioContainer({ name, value, checked, onChange }) {
  return (
    <label className="input__radio-container">
      <input
        className="input__radio"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="input__radio-custom"></span>
      {value === "repayment" ? "Repayment" : "Interest Only"}
    </label>
  );
}

export default RadioContainer;
