function ResultsUnavailable() {
  return (
    <div className="unavailable">
      <img
        className="unavailable__illustration"
        src="./assets/images/illustration-empty.svg"
        alt="Calculate repayments illustration"
      />
      <span className="unavailable__results-text">Results shown here</span>
      <p className="unavailable__instructions">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}

export default ResultsUnavailable;
