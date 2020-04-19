import React, { useState } from "react";
import Box from "../components/Box";
import { Button } from "../components/Button";
import FormElement from "../components/FormElement";
import Input from "../components/Input";
import { useAuth } from "../auth";
import Layout from "./Layout";
import ConfirmationCodeForm from "./ConfirmationCodeForm";

const SignIn = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingConfirmationCode, setPendingConfirmationCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.signIn({ email, password }).catch(({ code }) => {
      console.log(code);
      if (code === "UserNotConfirmedException") {
        setPendingConfirmationCode(true);
      }
    });
  };

  return (
    <Layout>
      <Box className="sm:w-1/2 sm:mx-auto">
        {!pendingConfirmationCode && (
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
            <Button type="submit" className="mt-8 w-full">
              Sign in
            </Button>
          </form>
        )}
        {pendingConfirmationCode && (
          <ConfirmationCodeForm
            email={email}
            setPendingConfirmationCode={setPendingConfirmationCode}
          />
        )}
      </Box>
    </Layout>
  );
};

export default SignIn;
