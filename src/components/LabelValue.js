function LabelValue({ label, value, isMonthly }) {
  return (
    <div className="card__label-value">
      <span className="card__label">{label}</span>
      <span className={isMonthly ? "card__monthly-value" : "card__term-value"}>
        ${value}
      </span>
    </div>
  );
}

export default LabelValue;
