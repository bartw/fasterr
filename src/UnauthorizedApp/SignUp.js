import React, { useState } from "react";
import Box from "../components/Box";
import { PrimaryButton } from "../components/Button";
import FormElement from "../components/FormElement";
import Input from "../components/Input";
import Layout from "./Layout";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <Layout>
      <Box className="sm:w-1/2 sm:mx-auto">
        <form onSubmit={handleSubmit}>
          <FormElement label="Email">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={setEmail}
            />
          </FormElement>
          <FormElement label="Password" className="mt-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={setPassword}
            />
          </FormElement>
          <PrimaryButton className="mt-8 w-full">Sign up for Fasterr</PrimaryButton>
        </form>
      </Box>
    </Layout>
  );
};

export default SignUp;
