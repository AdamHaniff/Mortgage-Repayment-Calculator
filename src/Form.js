import Input from "./Input";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./slice/formSlice";

function Form() {
  // VARIABLES
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  // HANDLER FUNCTIONS
  function handleChange(e) {
    let { name, value } = e.target;
    const numValue = parseFloat(value);

    // Allow only numbers and decimals (no letters)
    if (!/^\d*\.?\d*$/.test(value)) return;

    // Prevent more than 2 decimal places
    if (value.includes(".") && value.split(".")[1].length > 2) return;

    // Specific validation for mortgage amount
    if (name === "amount") {
      if (numValue > 10_000_000) return;
    }

    // Specific validation for mortgage term
    if (name === "term") {
      if (numValue > 50 || numValue < 1 || value.includes(".")) return;
    }

    // Specific validation for mortgage rate
    if (name === "rate") {
      if (numValue > 30 || numValue < 0.1) return;
    }

    dispatch(updateField({ name, value }));
  }

  return (
    <form className="inputs__form">
      <Input
        label="Mortgage Amount"
        name="amount"
        prefixSuffix="$"
        hasSuffix={false}
        value={formData.amount}
        onChange={handleChange}
      />
      <div className="inputs__term-rate">
        <Input
          label="Mortgage Term"
          name="term"
          prefixSuffix="years"
          hasSuffix={true}
          value={formData.term}
          onChange={handleChange}
        />
        <Input
          label="Interest Rate"
          name="rate"
          prefixSuffix="%"
          hasSuffix={true}
          value={formData.rate}
          onChange={handleChange}
        />
      </div>
      <Input
        label="Mortgage Type"
        name="type"
        hasSuffix={false}
        value={formData.type}
        onChange={handleChange}
      />
      <Button />
    </form>
  );
}

export default Form;
