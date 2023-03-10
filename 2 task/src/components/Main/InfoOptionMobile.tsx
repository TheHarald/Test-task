import React from 'react';
import styled from 'styled-components';


type InfoOptionMobileProps = {
    title: string
}

const StyledOptionContainer = styled.div`
    display: none;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: flex;
    }
`

const StyledMarker = styled.span`
    width: 10px;
    height: 1px;
    background: linear-gradient(90deg, #FCB045 36.99%, #FD1D1D 100%);
`

const StyledTitle = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #E4E5EA;
`

function InfoOptionMobile(props: InfoOptionMobileProps) {
    return (
        <StyledOptionContainer>
            <StyledMarker>
            </StyledMarker>
            <StyledTitle>
                {props.title}
            </StyledTitle>

        </StyledOptionContainer>
    );
}

export default InfoOptionMobile;