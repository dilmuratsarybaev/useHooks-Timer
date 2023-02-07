import React from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";
export const Counter = () => {
  const { count, incrementHandler, decrementHandler, resetHandler } =
    useCounter(0);
  return (
    <Container>
      <Title count={count}>Count : {count}</Title>
      <Content>
        <Button onClick={()=>incrementHandler(4)} children="INCREMENT" />
        <Button onClick={()=>decrementHandler(2)} children="DECREMENT" />
        <Button onClick={resetHandler} children="RESET" />
      </Content>
    </Container>
  );
};
const getColor = (props) => {
  return props.count ? "red" : "black";
};
const Title = styled.h1`
  text-align: center;
  font-family: cursive;
  color: ${getColor};
`;
const Container = styled.div`
  width: 20rem;
  background-color: #544b4b;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
