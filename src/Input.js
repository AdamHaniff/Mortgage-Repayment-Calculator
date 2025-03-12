import InputError from "./InputError";
import RadioContainer from "./RadioContainer";

function Input({ label, name, prefixSuffix, hasSuffix }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      {name !== "type" ? (
        <div className="input__container">
          <div className={`input__prefix-suffix ${hasSuffix ? "suffix" : ""}`}>
            {prefixSuffix}
          </div>
          <input className="input__input" id={name} />
        </div>
      ) : (
        <div className="input__radios">
          <RadioContainer name={name} value="repayment" checked={false} />
          <RadioContainer name={name} value="interest-only" checked={false} />
        </div>
      )}
      {/* <InputError /> */}
    </div>
  );
}

export default Input;
