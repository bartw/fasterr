import React, { useState } from "react";
import Button from "../components/Button";
import ErrorFeedback from "../components/ErrorFeedback";
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
  const [pending, setPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setHasError(false);
    setPending(true);

    auth.signIn({ email, password }).catch(({ code }) => {
      if (code === "UserNotConfirmedException") {
        setPendingConfirmationCode(true);
        return;
      }
      setPending(false);
      setHasError(true);
    });
  };

  return (
    <Layout>
      <div className="sm:w-1/2 sm:mx-auto">
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
            <Button
              type="submit"
              state={pending ? "pending" : "default"}
              className="mt-8 w-full"
            >
              Sign in
            </Button>
            {hasError && <ErrorFeedback />}
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

export default SignIn;
