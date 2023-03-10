import React from 'react';
import styled from 'styled-components';


type LinkButtonProps = {
    title: string
}

const StyledLinkButton = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #E4E5EA;
    text-decoration: none;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 12px;
        line-height: 15px;
        text-transform: uppercase;
    }
`

function LinkButton(props: LinkButtonProps) {
    return (
        <StyledLinkButton href='https://github.com/TheHarald'>
            {props.title}
        </StyledLinkButton>
    );
}

export default LinkButton;