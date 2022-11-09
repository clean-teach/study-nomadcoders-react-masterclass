import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as='div'>🤩</Emoji>
      </Box>
      <Emoji as='p'>🔥</Emoji>
    </Wrapper>
  );
}

export default App;
