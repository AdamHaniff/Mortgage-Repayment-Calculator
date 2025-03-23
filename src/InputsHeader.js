import { useDispatch } from "react-redux";
import { resetForm } from "./slice/formSlice";

function InputsHeader() {
  // VARIABLES
  const dispatch = useDispatch();

  // HANDLER FUNCTIONS
  function handleClick() {
    dispatch(resetForm());
  }

  return (
    <div className="inputs__header-clear">
      <h1 className="inputs__header">Mortgage Calculator</h1>
      <span className="inputs__clear" onClick={handleClick} tabIndex={0}>
        Clear All
      </span>
    </div>
  );
}

export default InputsHeader;
