import React from 'react';
import styled from 'styled-components';

const StyledCopyrightTitle = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: #E4E5EA;
`


const StyledFooterCopyright = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-end;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        align-items: flex-start;
    }
`

const StyledPoliticsLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    text-decoration-line: underline;
    color: #E4E5EA;
`

function FooterCopyright() {

    const date = new Date()
    return (
        <StyledFooterCopyright>
            <StyledCopyrightTitle>
                {`©WELBEX ${date.getFullYear()}. Все права защищены.`}
            </StyledCopyrightTitle>
            <StyledPoliticsLink>
                Политика конфиденциальности
            </StyledPoliticsLink>
        </StyledFooterCopyright>
    );
}

export default FooterCopyright;