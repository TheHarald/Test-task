import React from 'react';
import styled from 'styled-components';
import FooterAbout from './FooterAbout';
import FooterContacts from './FooterContacts';
import FooterCopyright from './FooterCopyright';
import FooterMenu from './FooterMenu';

const StyledFooter = styled.footer`
    margin-top: 70px;
    padding-top: 55px;
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        flex-direction: column;
        margin-top: 0px;
        padding-top: 0;
        gap: 30px;
    }
`

const StyledFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 33px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        background: #0E1014;
        padding: 40px 16px 60px 16px;
        gap: 50px;
    }
    
    
`

function Footer() {
    return (
        <StyledFooterContainer>
            <StyledFooter>
                <FooterAbout />
                <FooterMenu />
                <FooterContacts />
            </StyledFooter>
            <FooterCopyright />
        </StyledFooterContainer>
    );
}

export default Footer;