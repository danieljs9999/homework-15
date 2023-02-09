import { useState } from "react";

export const useInput = (type) => {
  const [value, setValue] = useState("");
  const [valueError, setValueError] = useState();

  switch (type) {
    case "text":
      break;
    case "number":
      break;
    case "email":
      break;

    default:
      console.log("Error");
  }

  const email = () => {
    setValueError(value.includes("@"));
  };

  const number = () => {
    setValueError(value.length >= 2);
  };

  const text = () => {
    setValueError(value.length >= 6);
  };

  const onChan = (event) => {
    setValue(event.target.value);
  };

  const clear = (event) => {
    event.preventDefault();
    setValue("");
  };

  return {
    type,
    clear,
    value,
    email,
    valueError,
    onChan,
    text,
    number,
  };
};
