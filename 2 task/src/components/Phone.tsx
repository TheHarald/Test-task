import React from 'react';
import styled from 'styled-components';


const StyledPhone = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #E4E5EA;
    text-decoration: none;
    margin-top: 15px;
    margin-left: 137px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }  
`

type PhoneProps = {
    phone: string,
}

function Phone(props: PhoneProps) {
    return (
        <StyledPhone href={`tel:${props.phone}`}>
            {props.phone}
        </StyledPhone>
    );
}

export default Phone;