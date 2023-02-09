import styled from "styled-components";
import { useInput } from "../../hooks/useInput";
import Button from "../UI/Button";
import Input from "../UI/Input";

function InputEmail() {
  const { clear, type, value, onChan, email, valueError } = useInput("email");

  return (
    <div>
      {valueError === false ? (
        <>
          <Error>Tексте должен быть "@" !!!</Error>
          <Form>
            <Input
              backgroundColor={"backgroundColor"}
              type={type}
              onChange={onChan}
              value={value}
              onBlur={email}
            />
            <Button onClick={clear}>Email</Button>
          </Form>
        </>
      ) : (
        <Form>
          <Input value={value} onChange={onChan} type={type} onBlur={email} />
          <Button onClick={clear}>Email</Button>
        </Form>
      )}
    </div>
  );
}

export default InputEmail;

const Form = styled.form`
  display: flex;
  gap: 40px;
`;

const Error = styled.h2`
  color: red;
  margin: -20px 200px 20px 0px;
`;
