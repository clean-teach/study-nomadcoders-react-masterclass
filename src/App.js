import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Circle = styled(Box)`
  border-radius: 100%;
`;

function App() {
  return (
    <Father>
      <Box bgColor='red' />
      <Circle bgColor='green' />
    </Father>
  );
}

export default App;
