import React, { useState } from "react";
import { PrimaryButton, Button } from "../components/Button";
import FormElement from "../components/FormElement";
import Input from "../components/Input";
import { useAuth } from "../auth";

const ConfirmationCodeForm = ({ email, setPendingConfirmationCode }) => {
  const auth = useAuth();
  const [confirmationCode, setConfirmationCode] = useState("");

  const handleConfirmSignUp = (e) => {
    e.preventDefault();

    auth.confirmSignUp({ email, confirmationCode }).then(() => {
      setConfirmationCode("");
      setPendingConfirmationCode(false);
    });
  };

  const handleResendConfirmationCode = () => {
    auth.resendConfirmationCode({ email });
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
        <PrimaryButton type="submit">Confirm sign up</PrimaryButton>
        <Button className="ml-4" onClick={handleResendConfirmationCode}>
          Resend confirmation code
        </Button>
      </div>
    </form>
  );
};

export default ConfirmationCodeForm;
