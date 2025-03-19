// HELPER FUNCTIONS

// prettier-ignore
function isNotValid(name, value, rawValue, numValue) {
  return (
    // Allow only numbers and decimals (no letters)
    !/^\d*\.?\d*$/.test(rawValue) ||

    // Prevent more than 2 decimal places
    (rawValue.includes(".") && rawValue.split(".")[1].length > 2) ||

    // Specific validation for mortgage amount
    (name === "amount" && numValue > 10_000_000) ||

    // Specific validation for mortgage term
    (name === "term" &&
      (numValue > 50 || numValue < 1 || value.includes("."))) ||
      
    // Specific validation for mortgage rate
    (name === "rate" && (numValue > 30 || numValue < 0.1))
  );
}

function formatMortgageAmount(formattedValue, rawValue, name) {
  if (name === "amount") {
    formattedValue = rawValue
      ? rawValue.includes(".")
        ? rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        : Number(rawValue).toLocaleString()
      : "";

    return formattedValue;
  }
}

export { isNotValid, formatMortgageAmount };
