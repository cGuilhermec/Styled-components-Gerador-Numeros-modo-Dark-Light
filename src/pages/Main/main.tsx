import styled from "styled-components";
import Menu from "../../components/Menu/Menu";
import Button from "../../components/Button/Button";
import Ball from "../../components/Ball/Ball";

export default function Main() {
  return (
    <WrapperSld>
      <Menu>
        <Button>reset</Button>
        <Button>light</Button>
      </Menu>
      <LineSld>
        <Ball>33</Ball>
        <Ball>44</Ball>
      </LineSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #888;
  border-radius: 5px;

  padding: 10px;

  width: 300px;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
