import React, { useState } from "react";
import Button from "../components/Button";
import ErrorFeedback from "../components/ErrorFeedback";
import FormElement from "../components/FormElement";
import Input from "../components/Input";
import { useAuth } from "../auth";

const ConfirmationCodeForm = ({ email, setPendingConfirmationCode }) => {
  const auth = useAuth();
  const [confirmationCode, setConfirmationCode] = useState("");
  const [pendingConfirmSignUp, setPendingConfirmSignUp] = useState(false);
  const [
    pendingResendConfirmationCode,
    setPendingResendConfirmationCode,
  ] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleConfirmSignUp = (e) => {
    e.preventDefault();

    setHasError(false);
    setPendingConfirmSignUp(true);

    auth
      .confirmSignUp({ email, confirmationCode })
      .then(() => {
        setConfirmationCode("");
        setPendingConfirmSignUp(false);
        setPendingConfirmationCode(false);
      })
      .catch(() => {
        setHasError(true);
        setPendingConfirmSignUp(false);
      });
  };

  const handleResendConfirmationCode = () => {
    setHasError(false);
    setPendingResendConfirmationCode(true);

    auth
      .resendConfirmationCode({ email })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setPendingResendConfirmationCode(false);
      });
  };

  return (
    <form onSubmit={handleConfirmSignUp}>
      <FormElement label="Email">
        <Input
          type="text"
          placeholder="Confirmation code"
          value={confirmationCode}
          onChange={setConfirmationCode}
        />
      </FormElement>
      <div className="mt-8 w-full">
        <Button
          type="submit"
          state={pendingConfirmSignUp ? "pending" : "default"}
        >
          Confirm sign up
        </Button>
        <Button
          className="ml-4"
          state={pendingResendConfirmationCode ? "pending" : "default"}
          onClick={handleResendConfirmationCode}
        >
          Resend confirmation code
        </Button>
      </div>
      {hasError && <ErrorFeedback />}
    </form>
  );
};

export default ConfirmationCodeForm;
