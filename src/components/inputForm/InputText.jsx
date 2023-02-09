import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import Button from "../UI/Button";
import Input from "../UI/Input";
import InputEmail from "./InputEmail";
import InputNumber from "./InputNumber";

function InputText() {
  const { clear, value, onChan, type, text, valueError } =
    useInput("text");

  return (
    <Conteiner>
      {valueError === false ? (
        <>
          <Error>Текст должен быть больше 6 символов !!!</Error>
          <Form>
            <Input onChange={onChan} value={value} type={type} onBlur={text} />
            <Button onClick={clear}>Text</Button>
          </Form>
        </>
      ) : (
        <Form>
          <Input onChange={onChan} value={value} type={type} onBlur={text} />
          <Button onClick={clear}>Text</Button>
        </Form>
      )}

      <InputEmail />
      <InputNumber />
    </Conteiner>
  );
}

export default InputText;

const Conteiner = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  margin-top: 40px;
  background-color: #1c1cff;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px 30px 30px;
  text-align: center;
  border-radius: 10px;
`;

const Error = styled.h2`
  color: red;
  margin: 0px 60px -10px 0px;
`;

const Form = styled.form`
  display: flex;
  gap: 40px;
`;
