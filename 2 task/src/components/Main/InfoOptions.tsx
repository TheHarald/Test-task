import React from 'react';
import styled from 'styled-components';
import InfoOptionMobile from './InfoOptionMobile';

const StyledOptionTitle = styled.h3`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #E4E5EA;
`

const StyledOptionSubtitle = styled.span`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #E4E5EA;
`

const StyledOptionContainer = styled.article`
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: flex-end;
    max-width: 135px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }
`

const StyledInfoOptions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 40px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: none;
    }
`

const StyledInfoOptionsMobile = styled.div`
    display: none;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        display: grid;
        gap: 14px 10px;
        grid-template-columns: 1fr 1.1fr;
        margin-top: 20px;
        gap: 14px 10px;
    }
`

function InfoOptions() {

    return (
        <>
            <StyledInfoOptions>
                <StyledOptionContainer>
                    <StyledOptionTitle>
                        Виджеты
                    </StyledOptionTitle>
                    <StyledOptionSubtitle>
                        30 готовых решений
                    </StyledOptionSubtitle>
                </StyledOptionContainer>
                <StyledOptionContainer>
                    <StyledOptionTitle>
                        Dashboard
                    </StyledOptionTitle>
                    <StyledOptionSubtitle>
                        с показателями
                        вашего бизнеса
                    </StyledOptionSubtitle>
                </StyledOptionContainer>
                <StyledOptionContainer>
                    <StyledOptionTitle>
                        Skype Аудит
                    </StyledOptionTitle>
                    <StyledOptionSubtitle>
                        отдела продаж и CRM системы
                    </StyledOptionSubtitle>
                </StyledOptionContainer>
                <StyledOptionContainer>
                    <StyledOptionTitle>
                        35 дней
                    </StyledOptionTitle>
                    <StyledOptionSubtitle>
                        использования CRM
                    </StyledOptionSubtitle>
                </StyledOptionContainer>
            </StyledInfoOptions>

            <StyledInfoOptionsMobile>
                <InfoOptionMobile title='Skype аудит' />
                <InfoOptionMobile title='30 виджетов' />
                <InfoOptionMobile title='Dashboard' />
                <InfoOptionMobile title='Месяц аmoCRM' />
            </StyledInfoOptionsMobile>
        </>
    )




}

export default InfoOptions;