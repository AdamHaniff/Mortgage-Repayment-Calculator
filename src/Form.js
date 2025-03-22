import Input from "./Input";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { updateField, setSubmitted } from "./slice/formSlice";
import { isNotValid, formatMortgageAmount } from "./js/helpers";
import { useState } from "react";

function Form() {
  // STATE
  const [formErrors, setFormErrors] = useState({});

  // VARIABLES
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form);

  // HANDLER FUNCTIONS
  function handleChange(e) {
    let { name, value } = e.target;

    // If the input is mortgage type, just update the store and exit early
    if (name === "type") {
      dispatch(updateField({ name, value }));
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    // For other inputs, process the value
    const rawValue = value.replace(/,/g, ""); // Remove commas for processing
    const numValue = parseFloat(rawValue);
    let formattedValue = rawValue;

    // If the input is not valid, don't update
    if (isNotValid(name, value, rawValue, numValue)) return;

    // Format the mortgage amount, but preserve decimals
    const mortgageValue = formatMortgageAmount(formattedValue, rawValue, name);

    // Update the store
    dispatch(
      updateField({
        name,
        value: name === "amount" ? mortgageValue : formattedValue,
      })
    );

    // Clear the error for this field if the user enters a valid value
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = {};
    const requiredFields = ["amount", "term", "rate", "type"];

    requiredFields.forEach((key) => {
      if (!formData[key]) {
        errors[key] = "This field is required";
      }
    });

    setFormErrors(errors); // Store errors locally

    // If there are no errors, set the submitted state to true
    if (Object.keys(errors).length === 0) {
      dispatch(setSubmitted(true));
    }
  }

  return (
    <form className="inputs__form" onSubmit={handleSubmit}>
      <Input
        label="Mortgage Amount"
        name="amount"
        prefixSuffix="$"
        hasSuffix={false}
        value={formData.amount}
        onChange={handleChange}
        error={formErrors.amount}
      />
      <div className="inputs__term-rate">
        <Input
          label="Mortgage Term"
          name="term"
          prefixSuffix="years"
          hasSuffix={true}
          value={formData.term}
          onChange={handleChange}
          error={formErrors.term}
        />
        <Input
          label="Interest Rate"
          name="rate"
          prefixSuffix="%"
          hasSuffix={true}
          value={formData.rate}
          onChange={handleChange}
          error={formErrors.rate}
        />
      </div>
      <Input
        label="Mortgage Type"
        name="type"
        hasSuffix={false}
        value={formData.type}
        onChange={handleChange}
        error={formErrors.type}
      />
      <Button />
    </form>
  );
}

export default Form;
