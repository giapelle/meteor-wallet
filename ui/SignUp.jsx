import React from "react";

export default function SignUp() {
  const signUp = () => {
    console.log("sign-up");
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => signUp()}
      >
        Sign Up
      </button>
    </div>
  );
}
