import React from 'react';
import styled from 'styled-components';


type ButtonProps = {
    text: string
}


const StyledButton = styled.button`
    background: #4077F3;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #E4E5EA;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 35px;
    margin-top: 60px;
    outline: none;
    border: none;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }

`

function Button(props: ButtonProps) {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
}

export default Button;