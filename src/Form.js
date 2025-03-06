import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="inputs__form">
      <Input label="Mortgage Amount" name="amount" prefixSuffix="$" />
      <div className="inputs__term-rate">
        <Input label="Mortgage Term" name="term" prefixSuffix="years" />
        <Input label="Interest Rate" name="rate" prefixSuffix="%" />
      </div>
      <Input label="Mortgage Type" name="type" />
      <Button />
    </form>
  );
}

export default Form;
