import { useDispatch } from "react-redux";
import { resetForm } from "../slice/formSlice";

function InputsHeader({ setFormErrors }) {
  // VARIABLES
  const dispatch = useDispatch();

  // HANDLER FUNCTIONS
  function handleClearAll() {
    dispatch(resetForm());
    setFormErrors({});
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClearAll();
    }
  }

  return (
    <div className="inputs__header-clear">
      <h1 className="inputs__header">Mortgage Calculator</h1>
      <span
        className="inputs__clear"
        onClick={handleClearAll}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        Clear All
      </span>
    </div>
  );
}

export default InputsHeader;
