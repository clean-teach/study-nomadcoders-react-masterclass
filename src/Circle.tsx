import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: ${props => props.bgColor};
    border: 1px solie ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({bgColor, borderColor, text = 'default text'}: CircleProps) {
    const [value, setValue] = useState<string|number>("");
    setValue(1);
    setValue('hello');
    // setValue(false);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} >
            {text}
        </Container>
    );
}

export default Circle;