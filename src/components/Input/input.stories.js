import React, { useState } from "react";
import Input from ".";

export default {
  component: Input,
  title: "Input",
};

const Wrapper = ({ type }) => {
  const [value, setValue] = useState("");

  return (
    <Input type={type} placeholder={type} value={value} onChange={setValue} />
  );
};

export const text = () => <Wrapper type="text" />;

export const password = () => <Wrapper type="password" />;
