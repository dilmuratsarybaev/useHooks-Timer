import { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState({ name: "", age: "", email: "" });

  const changeInputHandler = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  return {
    inputs,
    changeInputHandler,
  };
};
