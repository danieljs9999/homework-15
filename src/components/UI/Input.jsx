import React from "react";
import styled from "styled-components";

function Input({
  type,
  onChange,
  value,
  onBlur,
  style,
  backgroundColor,
  placeholder,
}) {
  return (
    <InputStyled
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      type={type}
      style={style}
      backgroundColor={backgroundColor}
      placeholder={placeholder}
    />
  );
}

export default Input;

const InputStyled = styled.input`
  width: 80%;
  outline: none;
  border: none;
  border-radius: 6px;
  font-size: 1.8rem;
  padding: 10px 14px;

  /* background-color: ${(props) =>
    props.backgroundColor ? "red" : "ffffff"}; */

  /* :focus {
    background-color: #f0f0f0;
  } */
`;
