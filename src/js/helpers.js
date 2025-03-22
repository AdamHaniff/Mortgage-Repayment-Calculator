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

function calculateInterestOnlyPayment(amount, rate) {
  const monthlyPayment = (amount * (rate / 100)) / 12;
  return monthlyPayment;
}

function totalInterestOnlyRepayment(amount, rate, term) {
  const monthlyPayment = calculateInterestOnlyPayment(amount, rate);
  return monthlyPayment * (term * 12);
}

function calculateRepaymentMortgage(amount, rate, term) {
  const monthlyRate = rate / 100 / 12;
  const numberOfPayments = term * 12;

  return (
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
  );
}

function totalRepayment(amount, rate, term) {
  const monthlyPayment = calculateRepaymentMortgage(amount, rate, term);
  return monthlyPayment * (term * 12);
}

function calculateMortgage(amount, rate, term, type) {
  if (type === "interest-only") {
    return {
      monthlyPayment: calculateInterestOnlyPayment(amount, rate),
      totalRepayment: totalInterestOnlyRepayment(amount, rate, term),
    };
  } else {
    return {
      monthlyPayment: calculateRepaymentMortgage(amount, rate, term),
      totalRepayment: totalRepayment(amount, rate, term),
    };
  }
}

function formatPayment(payment) {
  const rounded = Math.round(payment * 100) / 100;
  return rounded.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export { isNotValid, formatMortgageAmount, calculateMortgage, formatPayment };
