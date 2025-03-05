import InputError from "./InputError";

function Input({ label, name, prefixSuffix }) {
  return (
    <div className="input">
      <label className="input__label" htmlFor={name}>
        {label}
      </label>
      <div className="input__container">
        <div className="input__prefix-suffix">{prefixSuffix}</div>
        <input className="input__input" id={name} />
        <InputError />
      </div>
    </div>
  );
}

export default Input;
