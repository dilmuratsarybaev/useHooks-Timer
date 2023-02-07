import { useEffect, useState } from "react";

export const useTimer = (number) => {
  const initialstate = Math.floor(number * 60);
  const [counter, setCounter] = useState(initialstate);
  const [isConting, setIsCounting] = useState(false);

  useEffect(() => {
    const interval =
      isConting &&
      setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [counter, isConting]);

  const startClickHandler = () => {
    setIsCounting(true);
  };
  const stopClickHandler = () => {
    setIsCounting(false);
  };
  const restartClickHandler = () => {
    setIsCounting(false);
    setCounter(initialstate);
  };
  return {
    counter,
    startClickHandler,
    stopClickHandler,
    restartClickHandler,
  };
};
