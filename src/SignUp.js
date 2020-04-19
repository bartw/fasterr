import React, { useState } from "react";
import { AlphaButton } from "./components/Button";
import FormElement from "./components/FormElement";
import Input from "./components/Input";
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
      <div className="flex justify-center">
        <form
          className="border-2 rounded-md border-beta p-8 w-full sm:w-1/2"
          onSubmit={handleSubmit}
        >
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
          <AlphaButton className="mt-8 w-full">Sign up for Fasterr</AlphaButton>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
