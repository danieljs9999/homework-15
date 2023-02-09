import React from "react";
import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";

function Timer() {
  const {
    value,
    minutes,
    second,
    valueHandler,
    handelStart,
    handelStop,
    handelReset,
    state,
  } = useTimer();

  return (
    <Form>
      <InputTimer
        value={value}
        onChange={valueHandler}
        type="number"
        max={99}
        min={0}
      />
      <Text>
        <span>{minutes}</span>
        <span> : </span>
        <span>{second}</span>
      </Text>

      <ButtonTimerConteiner>
        {state ? (
          <ButtonPause onClick={handelStop}>PAUSE</ButtonPause>
        ) : (
          <ButtonStart onClick={handelStart}>START</ButtonStart>
        )}
        <ButtonReset onClick={handelReset}>RESET</ButtonReset>
      </ButtonTimerConteiner>
    </Form>
  );
}

export default Timer;

const Form = styled.form`
  background-color: #ba4949;
  padding: 20px 30px 30px;
  border-radius: 6px;
  width: 480px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 262px;
`;

const Text = styled.span`
  font-size: 120px;
  font-weight: bold;
  color: white;
`;

const ButtonTimerConteiner = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const InputTimer = styled.input`
  width: 80%;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1.4rem;
  padding: 10px 14px;
`;

const ButtonStart = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  box-shadow: rgb(235 235 235) 0px 6px 0px;
  font-family: ArialRounded;
  font-size: 22px;
  height: 55px;
  color: #ba4949;
  font-weight: bold;
  width: 200px;
  background-color: white;
  transition: color 0.5s ease-in-out 0s;
`;

const ButtonPause = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  font-family: ArialRounded;
  font-size: 22px;
  height: 55px;
  color: #ba4949;
  font-weight: bold;
  width: 200px;
  background-color: white;
  transform: translateY(6px);
  box-shadow: none;
  transition: color 0.5s ease-in-out 0s;
`;

const ButtonReset = styled.button`
  cursor: pointer;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  font-family: ArialRounded;
  font-size: 22px;
  height: 58px;
  color: #ba4949;
  font-weight: bold;
  width: 200px;
  background-color: white;
  transform: translateY(6px);
  box-shadow: none;
  transition: color 0.5s ease-in-out 0s;
  margin-top: -8px;
`;
