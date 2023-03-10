import React from 'react';
import styled from 'styled-components';
import ColoredTitle from './ColoredTitle';
import MainSubTitle from './MainSubTitle';
import Title from './Title';

const StyledMainTitle = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 362px;

`

function MainTitle() {
    return (
        <StyledMainTitle>
            <Title title='Зарабатывайте больше' />
            <ColoredTitle title='с WELBEX' />
            <MainSubTitle title='Развиваем и контролируем продажи за вас' />
        </StyledMainTitle>
    );
}

export default MainTitle;