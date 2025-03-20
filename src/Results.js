import ResultsUnavailable from "./ResultsUnavailable";
import ResultsAvailable from "./ResultsAvailable";

import { useSelector } from "react-redux";

function Results() {
  const submitted = useSelector((state) => state.form.submitted);

  return (
    <div className="results">
      {submitted ? <ResultsAvailable /> : <ResultsUnavailable />}
    </div>
  );
}

export default Results;
