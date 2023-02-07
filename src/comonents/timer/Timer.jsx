import { useTimer } from "../../hooks/useTimer";
import { Button } from "../UI/Button";
import { getPadTime } from "./getPadTime";
import styled from "styled-components";
export const Timer = () => {
  const { counter, startClickHandler, stopClickHandler, restartClickHandler } =
    useTimer(2);
  const second = getPadTime(Math.floor(counter));
  return (
    <Container>
      <Title>Timer:{second}</Title>
      <Content>
        <Button onClick={startClickHandler} children="START" />
        <Button onClick={stopClickHandler} children="STOP" />
        <Button onClick={restartClickHandler} children="RESTART" />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #2f4040;
  padding: 2rem;
  font-size: 1.5rem;
  font-weight: 900;
  border-radius: 0.5rem;
  width: 35rem;
  margin: 0 auto;
`;
const Title = styled.p`
  color: #efe8e8;
  text-align: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;
