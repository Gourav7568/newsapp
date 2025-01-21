import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export function useSignupContext() {
  return useContext(SignupContext);
}

export default function SignupProvider({ children }) {
  const [signupCompleted, setSignupCompleted] = useState(false);

  // Other state variables and functions can be defined here if needed

  const value = {
    signupCompleted,
    setSignupCompleted,
    // Add other state variables and functions here if needed
  };

  return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>;
}
