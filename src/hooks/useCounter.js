import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCoun] = useState(0);

  const increment = () => {
    setCoun(count + initialState);
  };

  const clear = () => {
    setCoun(0);
  };

  const decrement = () => {
    if (count > 0) {
      setCoun(count - initialState);
    }
  };

  return {
    count,
    clear,
    increment,
    decrement,
  };
};
