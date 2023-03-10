import React from 'react';
import styled from 'styled-components';

type FooterTitleProps = {
    title: string
}

const StyledFooterTitle = styled.h5`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #656566;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 12px;
        line-height: 15px;
    }
`
function FooterTitle(props: FooterTitleProps) {
    return (
        <StyledFooterTitle>
            {props.title}
        </StyledFooterTitle>
    );
}

export default FooterTitle;