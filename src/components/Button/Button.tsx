import styled from "styled-components";

export default function Button({ children }: any) {
  return <ButtonSld>{children}</ButtonSld>;
}

const ButtonSld = styled.button`
  display: flex;

  padding: 10px 20px;
  background-color: #007bff;

  border: none;
  border-radius: 5px;

  color: #fff;
  margin-left: 5px;

  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  transition: background-color 0.3s ease;
`;
