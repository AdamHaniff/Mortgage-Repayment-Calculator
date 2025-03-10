import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <form className="inputs__form">
      <Input
        label="Mortgage Amount"
        name="amount"
        prefixSuffix="$"
        hasSuffix={false}
      />
      <div className="inputs__term-rate">
        <Input
          label="Mortgage Term"
          name="term"
          prefixSuffix="years"
          hasSuffix={true}
        />
        <Input
          label="Interest Rate"
          name="rate"
          prefixSuffix="%"
          hasSuffix={true}
        />
      </div>
      <Input label="Mortgage Type" name="type" hasSuffix={false} />
      <Button />
    </form>
  );
}

export default Form;
