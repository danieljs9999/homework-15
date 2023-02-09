import React from "react";
import styled from "styled-components";
import { useCounter } from "../hooks/useCounter";
import Button from "./UI/Button";

function Counter() {
  const { increment, count, decrement, clear } = useCounter(4);

  return (
    <Conteiner>
      <StyledDiv>
        <Button onClick={increment}>increment</Button>
        <CountText>{count}</CountText>
        <Button onClick={decrement}>decrement</Button>
      </StyledDiv>
      <Clear>
        <Button onClick={clear} variant="default" shadow="shadow">
          clear
        </Button>
      </Clear>
    </Conteiner>
  );
}

export default Counter;

const Conteiner = styled.div`
  margin-top: 60px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #f1f1f1;
  display: flex;
  padding: 10px 20px;
  border-radius: 10px;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  position: relative;
  align-items: flex-start;
  height: 200px;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const CountText = styled.p`
  text-align: center;
  margin: 0;
  font-size: 3rem;
  font-weight: bold;
  width: 80px;
`;

const Clear = styled.div`
  position: absolute;
  margin: 130px 0px 0px 0px;
`;
