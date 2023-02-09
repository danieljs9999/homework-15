import React from "react";
import styled from "styled-components";

function Button({ onClick, children, variant, variants, shadow, style }) {
  return (
    <StyleButton
      onClick={onClick}
      variant={variant}
      variants={variants}
      shadow={shadow}
      style={style}
    >
      {children}
    </StyleButton>
  );
}

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "default" ? "#ffffff" : "#0040ff";
};

const getBackgroundColorHover = (props) => {
  return props.variant === "default" ? "#f1f1f1" : "#0030bf";
};

const getBackgroundColorActive = (props) => {
  return props.variant === "default" ? "#d3d3d3" : "#0040ff";
};

const getColor = (props) => {
  return props.variant === "default" ? "#000000" : "#ffffff";
};

const getShadow = (props) => {
  return props.shadow ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : "none";
};

const StyleButton = styled.button`
  border: none;
  font-size: 2rem;
  background-color: ${getBackgroundColor};
  color: ${getColor};
  border-radius: 10px;
  padding: 8px 16px;
  box-shadow: ${getShadow};
  :hover {
    background-color: ${getBackgroundColorHover};
  }

  :active {
    background-color: ${getBackgroundColorActive};
  }
`;
