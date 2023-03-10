import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';

const StyledFooterAbout = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const StyledLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

function FooterAbout() {
    return (
        <StyledFooterAbout>
            <FooterTitle title='О компании' />
            <StyledLinksContainer>
                <FooterLink text='Партнёрская программа' />
                <FooterLink text='Вакансии' />
            </StyledLinksContainer>
        </StyledFooterAbout>
    );
}

export default FooterAbout;