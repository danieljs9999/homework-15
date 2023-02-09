import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import Button from "../UI/Button";
import Input from "../UI/Input";

function InputNumber() {
  const { clear, value, onChan, type, number, valueError } = useInput("number");

  return (
    <>
      {valueError === false ? (
        <>
          <Error>Напишите более 2 цифр !!!</Error>
          <Form>
            <Input
              backgroundColor={"backgroundColor"}
              value={value}
              onChange={onChan}
              onBlur={number}
              type={type}
            />
            <Button onClick={clear}>Number</Button>
          </Form>
        </>
      ) : (
        <Form>
          <Input value={value} onChange={onChan} onBlur={number} type={type} />
          <Button onClick={clear}>Number</Button>
        </Form>
      )}
    </>
  );
}

export default InputNumber;

const Form = styled.form`
  display: flex;
  gap: 40px;
`;

const Error = styled.h2`
  color: red;
  margin: 0px 200px -10px 0px;
`;
