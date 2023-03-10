import React from 'react';
import styled from 'styled-components';
import { telegram, viber, whatsapp } from '../Icons';
import Phone from '../Phone';
import FooterAddress from './FooterAddress';
import FooterPhone from './FooterPhone';
import FooterTitle from './FooterTitle';

const StyledFooterContacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: flex-start  ;
    align-items: flex-end;
    margin-left: auto;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        align-items: flex-start;
        margin: 0;
        gap: 10px;
    }
`

const StyledIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

function FooterContacts() {
    return (
        <StyledFooterContacts>
            <FooterTitle title='Контакты' />
            <FooterPhone phone='+7 555 555-55-55' />
            <StyledIconsContainer>
                {telegram}
                {whatsapp}
                {viber}
            </StyledIconsContainer>
            <FooterAddress address='Москва, Путевой проезд 3с1, к 902' />

        </StyledFooterContacts>
    );
}

export default FooterContacts;