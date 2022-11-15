import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${props => props.theme.textColor};
  `;
  const Btn = styled.button`
    background-color: ${props => props.theme.btnColor};
  `;
  const [value, setValue] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    const {
      currentTarget: {value}
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submit", value);
  };

  return (
    <Container>
      <H1>Protected</H1>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder='user name' value={value} onChange={onChange} />
        <Btn>Log in</Btn>
      </form>
    </Container>
  );
}

export default App;
