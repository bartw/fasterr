import React, { useState } from "react";
import Button from "../components/Button";
import FormElement from "../components/FormElement";
import Input from "../components/Input";
import { useAuth } from "../auth";
import Layout from "./Layout";
import ConfirmationCodeForm from "./ConfirmationCodeForm";

const SignUp = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingConfirmationCode, setPendingConfirmationCode] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    auth.signUp({ email, password }).then(() => {
      setPendingConfirmationCode(true);
      setPassword("");
    });
  };

  return (
    <Layout>
      <div className="sm:w-1/2 sm:mx-auto">
        {!pendingConfirmationCode && (
          <form onSubmit={handleSignUp}>
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
              Sign up for Fasterr
            </Button>
          </form>
        )}
        {pendingConfirmationCode && (
          <ConfirmationCodeForm
            email={email}
            setPendingConfirmationCode={setPendingConfirmationCode}
          />
        )}
      </div>
    </Layout>
  );
};

export default SignUp;
