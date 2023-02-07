import React from "react";
import styled from "styled-components";
export const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #aec616;
  color: #fff;
  padding: 0.5rem 1rem;
  font-weight: 900;
  border-radius: 0.8rem;
  border: none;
`;
