import React from 'react';
import styled from 'styled-components';

const StyledInfoHeader = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #E4E5EA;
    max-width: 291px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        text-align: left;
        font-size: 18px;
    }
`


const StyledColorHeader = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background: linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        text-align: left;
        text-transform: lowercase;
        letter-spacing: normal;
    }
`

function InfoHeader() {
    return (
        <StyledInfoHeader>
            Вместе с <StyledColorHeader>бесплатной консультацией</StyledColorHeader> мы дарим:
        </StyledInfoHeader>
    );
}

export default InfoHeader;