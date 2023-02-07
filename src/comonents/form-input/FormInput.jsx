import React from "react";
import styled from "styled-components";
import { useInput } from "../../hooks/useInput";

export const FormInput = () => {
  const { inputs, changeInputHandler } = useInput();
  return (
    <FormContainer>
      <Label htmlFor="name">
        Name:
        <TitleInput
          name="name"
          type="text"
          value={inputs.name}
          onChange={changeInputHandler}
        />
      </Label>
      <Label htmlFor="age">
        Age:
        <TitleInput
          name="age"
          type="number"
          value={inputs.age}
          onChange={changeInputHandler}
        />
      </Label>
      <Label htmlFor="email">
        Email:
        <TitleInput
          name="email"
          type="text"
          value={inputs.value}
          onChange={changeInputHandler}
        />
      </Label>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 30rem;
  margin: 3rem auto;
  background-color: #d0ceda;
  padding: 3rem;
  border-radius: 0.5rem;
`;
const TitleInput = styled.input`
  padding: 0.5rem;
  width: 20rem;
  font-size: 1.4rem;
  font-family: cursive;
  border-radius: 0.5rem;
  border: none;
`;
const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-family: cursive;
  font-size: 1.5rem;
  color: #01371f;
`;
