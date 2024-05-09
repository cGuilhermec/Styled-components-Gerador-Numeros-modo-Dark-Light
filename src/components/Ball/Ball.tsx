import styled from "styled-components";

export default function Ball({ children }: any) {
  return <BallSld>{children}</BallSld>;
}

export const BallSld = styled.button`
  display: flex;

  padding: 10px 20px;
  background-color: #007bff;

  border: none;
  border-radius: 20px;

  padding: 10px;

  font-size: 18px;
  font-weight: bold;

  color: #fff;
  margin-left: 5px;

  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  transition: background-color 0.3s ease;
`;
