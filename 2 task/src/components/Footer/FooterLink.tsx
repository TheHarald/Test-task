import React from 'react';
import styled from 'styled-components';

type FooterLinkProps = {
    text: string
}


const StyledFooterLink = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #E4E5EA;
    text-decoration: none;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 14px;
        line-height: 17px;
    }
    
`

function FooterLink(props: FooterLinkProps) {
    return (
        <StyledFooterLink href='https://github.com/TheHarald'>
            {props.text}
        </StyledFooterLink>
    );
}

export default FooterLink;