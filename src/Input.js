import InputError from "./InputError";
import RadioContainer from "./RadioContainer";

function Input({
  label,
  name,
  prefixSuffix,
  hasSuffix,
  value,
  onChange,
  error,
}) {
  return (
    <div className="input">
      <label
        className="input__label"
        {...(name !== "type" && { htmlFor: name })}
      >
        {label}
      </label>
      {name !== "type" ? (
        <div className="input__container">
          <div className={`input__prefix-suffix ${hasSuffix ? "suffix" : ""}`}>
            {prefixSuffix}
          </div>
          <input
            className="input__input"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="input__radios">
          <RadioContainer
            name={name}
            value="repayment"
            checked={value === "repayment"}
            onChange={onChange}
          />
          <RadioContainer
            name={name}
            value="interest-only"
            checked={value === "interest-only"}
            onChange={onChange}
          />
        </div>
      )}
      {error && <InputError message={error} />}
    </div>
  );
}

export default Input;
