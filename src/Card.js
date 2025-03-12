import LabelValue from "./LabelValue";

function Card() {
  return (
    <div className="card">
      <LabelValue
        label="Your monthly repayments"
        value="$1,797.74"
        isMonthly={true}
      />
      <div className="card__separator"></div>
      <LabelValue
        label="Total you'll repay over the term"
        value="$539,322.94"
        isMonthly={false}
      />
    </div>
  );
}

export default Card;
