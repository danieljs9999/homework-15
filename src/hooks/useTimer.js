import { useEffect, useState } from "react";

export const useTimer = () => {
  const [value, setValue] = useState("");

  const timer = value * 60;

  const [timeLeft, setTimeLeft] = useState(timer);
  const [state, setState] = useState(false);

  const getPadTime = (time) => time.toString().padStart(2, "0");

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const second = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      state && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) setState(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, state]);

  const valueHandler = (event) => {
    setValue(+event.target.value);
  };

  const handelStart = () => {
    setState(true);
    if (timeLeft === 0) setTimeLeft(timer);
  };

  const handelStop = () => {
    setState(false);
  };

  const handelReset = (event) => {
    event.preventDefault();
    setState(false);
    setValue("");
    setTimeLeft("");
  };

  return {
    value,
    minutes,
    second,
    valueHandler,
    handelStart,
    handelStop,
    state,
    handelReset,
  };
};
