import LabelValue from "./LabelValue";

import { useSelector } from "react-redux";
import { calculateMortgage, formatPayment } from "./js/helpers.js";

function Card() {
  // VARIABLES
  const { amount, term, rate, type } = useSelector((state) => state.form);
  const formattedAmount = Number(amount.replace(/,/g, ""));
  const formattedTerm = Number(term);
  const formattedRate = Number(rate);
  const { monthlyPayment, totalRepayment } = calculateMortgage(
    formattedAmount,
    formattedRate,
    formattedTerm,
    type
  );
  const formattedMonthlyPayment = formatPayment(monthlyPayment);
  const formattedTotalRepayment = formatPayment(totalRepayment);

  return (
    <div className="card">
      <LabelValue
        label="Your monthly repayments"
        value={formattedMonthlyPayment}
        isMonthly={true}
      />
      <div className="card__separator"></div>
      <LabelValue
        label="Total you'll repay over the term"
        value={formattedTotalRepayment}
        isMonthly={false}
      />
    </div>
  );
}

export default Card;
