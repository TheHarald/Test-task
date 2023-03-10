import React from 'react';
import styled from 'styled-components';


type PhoneProps = {
    phone: string,
}

const StyledFooterPhone = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #E4E5EA;
    text-decoration: none;
    margin-top: 10px;
`

function FooterPhone(props: PhoneProps) {
    return (
        <StyledFooterPhone>
            {props.phone}
        </StyledFooterPhone>
    );
}

export default FooterPhone;