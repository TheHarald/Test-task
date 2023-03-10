import React from 'react';
import styled from 'styled-components';
import { telegram, viber, whatsapp } from '../Icons';
import LinkButton from './LinkButton';
import Logo from './Logo';
import LogoSubtitle from './LogoSubtitle';
import Phone from '../Phone';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;

`


const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 11px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }
`

const StyledLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-left: 52px;
    margin-top: 15px; 
    @media screen and (min-width: 320px) and (max-width: 425px) {
        gap: 16px;
        margin: 0;
        padding: 20px 16px;
        width: 100%;
        background: #0E1014;
        & > :nth-child(5){
            display: none;
        }
    }
`

const StyledIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-left: 45px;
    margin-top: 14px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <StyledLogoContainer>
                <Logo />
                <LogoSubtitle title='крупный интегратор CRM в Росcии и ещё 8 странах' />
            </StyledLogoContainer>
            <StyledLinksContainer>
                <LinkButton title='Услуги' />
                <LinkButton title='Виджеты' />
                <LinkButton title='Интеграции' />
                <LinkButton title='Кейсы' />
                <LinkButton title='Сертификаты' />
            </StyledLinksContainer>
            <Phone phone='+7 555 555-55-55' />
            <StyledIconsContainer>
                {telegram}
                {viber}
                {whatsapp}
            </StyledIconsContainer>


        </HeaderContainer>
    );
}

export default Header;