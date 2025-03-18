import Input from "./Input";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { updateField } from "./slice/formSlice";
import { isNotValid, formatMortgageAmount } from "./js/helpers";

function Form() {
  // VARIABLES
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  // HANDLER FUNCTIONS
  function handleChange(e) {
    let { name, value } = e.target;
    const rawValue = value.replace(/,/g, ""); // Remove commas for processing
    const numValue = parseFloat(rawValue);
    let formattedValue = rawValue;

    // If the input is not valid, don't update
    if (isNotValid(name, value, rawValue, numValue)) return;

    // Format the mortgage amount, but preserve decimals
    const mortgageValue = formatMortgageAmount(formattedValue, rawValue, name);

    dispatch(
      updateField({
        name,
        value: name === "amount" ? mortgageValue : formattedValue,
      })
    );
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
