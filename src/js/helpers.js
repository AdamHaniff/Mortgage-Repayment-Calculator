// HELPER FUNCTIONS
function isNotValid(name, value, rawValue, numValue) {
  // Allow only numbers and decimals (no letters)
  if (!/^\d*\.?\d*$/.test(rawValue)) return true;

  // Prevent more than 2 decimal places
  if (rawValue.includes(".") && rawValue.split(".")[1].length > 2) return true;

  // Specific validation for mortgage amount
  if (name === "amount") {
    if (numValue > 10_000_000) return true;
  }

  // Specific validation for mortgage term
  if (name === "term") {
    if (numValue > 50 || numValue < 1 || value.includes(".")) return true;
  }

  // Specific validation for mortgage rate
  if (name === "rate") {
    if (numValue > 30 || numValue < 0.1) return true;
  }
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
