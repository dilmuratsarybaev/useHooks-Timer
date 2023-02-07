import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (num) => {
    setCount((prevState) => {
      return prevState + num;
    });
  };

  const decrementHandler = (num) => {
    setCount((prevState) => {
      if (prevState > 0) {
        return prevState - num;
      }
      return prevState;
    });
  };

  const resetHandler = () => {
    setCount(0);
  };

  return {
    count,
    incrementHandler,
    decrementHandler,
    resetHandler,
  };
};
