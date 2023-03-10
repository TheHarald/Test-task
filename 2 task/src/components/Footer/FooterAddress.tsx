import React from 'react';
import styled from 'styled-components';


type FooterAddressProps = {
    address: string
}

const StyledFooterAddress = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #E4E5EA;
    text-decoration: none;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        font-size: 14px;
        line-height: 17px;
    }
`

function FooterAddress(props: FooterAddressProps) {
    return (
        <StyledFooterAddress href={`https://yandex.ru/maps/213/moscow/search/${props.address}`} rel='noreferrer' >
            {props.address}
        </StyledFooterAddress>
    );
}

export default FooterAddress;