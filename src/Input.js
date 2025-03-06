import InputError from "./InputError";
import RadioContainer from "./RadioContainer";

function Input({ label, name, prefixSuffix }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      {name !== "type" ? (
        <div className="input__container">
          <div className="input__prefix-suffix">{prefixSuffix}</div>
          <input className="input__input" id={name} />
        </div>
      ) : (
        <div className="input__radios">
          <RadioContainer name={name} value="repayment" />
          <RadioContainer name={name} value="interest-only" />
        </div>
      )}
      <InputError />
    </div>
  );
}

export default Input;
