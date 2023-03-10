import React from 'react';
import styled from 'styled-components';


type ColoredTitleProps = {
    title: string
}


const StyledColoredTitle = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    background: linear-gradient(92deg, #FCB045 27.14%, #FF3F78 121.36%), #E4E5EA;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 36px;
        line-height: 44px;
    }
`

function ColoredTitle(props: ColoredTitleProps) {
    return (
        <StyledColoredTitle>
            {props.title}
        </StyledColoredTitle>
    );
}

export default ColoredTitle;