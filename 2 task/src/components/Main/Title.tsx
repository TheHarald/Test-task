import React from 'react';
import styled from 'styled-components';


type TitleProps = {
    title: string
}


const StyledTitle = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    color: #E4E5EA;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 36px;
        line-height: 44px;
    }
`

function Title(props: TitleProps) {
    return (
        <StyledTitle>
            {props.title}
        </StyledTitle>)
}

export default Title;