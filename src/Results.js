import ResultsUnavailable from "./ResultsUnavailable";
import ResultsAvailable from "./ResultsAvailable";

function Results() {
  return (
    <div className="results">
      <ResultsUnavailable />
      <ResultsAvailable />
    </div>
  );
}

export default Results;
