import React, { useState } from "react";
import Input from "../Input";
import FormElement from ".";

export default {
  component: FormElement,
  title: "FormElement",
};

const Wrapper = () => {
  const [value, setValue] = useState("");

  return (
    <FormElement label="Form element">
      <Input placeholder="input" value={value} onChange={setValue} />
    </FormElement>
  );
};

export const formElement = () => <Wrapper />;
