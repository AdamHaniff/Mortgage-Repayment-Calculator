import { useState } from "react";
import Form from "./Form";
import InputsHeader from "./InputsHeader";

function Inputs() {
  // STATE
  const [formErrors, setFormErrors] = useState({});

  return (
    <div className="inputs">
      <InputsHeader setFormErrors={setFormErrors} />
      <Form formErrors={formErrors} setFormErrors={setFormErrors} />
    </div>
  );
}

export default Inputs;
