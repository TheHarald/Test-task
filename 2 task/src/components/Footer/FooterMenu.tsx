import React from 'react';
import styled from 'styled-components';
import FooterLink from './FooterLink';
import FooterTitle from './FooterTitle';


const StyledFooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 98px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        margin-left: 0;
    }
`

const StyledLinksContainer = styled.div`
    display: grid;
    grid-template-columns: 144px 212px;
    gap: 10px 50px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        grid-template-columns: 100px 123px;
        gap: 10px 48px;
        margin-left: 0;
    }
`

function FooterMenu() {
    return (
        <StyledFooterMenu>
            <FooterTitle title='Меню' />
            <StyledLinksContainer>
                <FooterLink text='Расчёт стоимости' />
                <FooterLink text='Кейсы' />
                <FooterLink text='Услуги' />
                <FooterLink text='Благодарственные письма' />
                <FooterLink text='Виджеты' />
                <FooterLink text='Сертификаты' />
                <FooterLink text='Интеграции' />
                <FooterLink text='Блог на Youtube' />
                <FooterLink text='Наши клиенты' />
                <FooterLink text='Вопрос / Ответ' />
            </StyledLinksContainer>

        </StyledFooterMenu>
    );
}

export default FooterMenu;