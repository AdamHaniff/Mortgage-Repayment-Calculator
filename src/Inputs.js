import Input from "./Input";

function Inputs() {
  return (
    <div className="inputs">
      <div className="inputs__header-clear">
        <h1 className="inputs__header">Mortgage Calculator</h1>
        <span className="inputs__clear">Clear All</span>
      </div>

      <form className="inputs__form">
        <Input label="Mortgage Amount" name="amount" prefixSuffix="$" />
        <div className="inputs__term-rate">
          <Input label="Mortgage Term" name="term" prefixSuffix="years" />
          <Input label="Interest Rate" name="rate" prefixSuffix="%" />
        </div>
        {/* MORTGAGE TYPE GOES HERE */}
      </form>
    </div>
  );
}

export default Inputs;
