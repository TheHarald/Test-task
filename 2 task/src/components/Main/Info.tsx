import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import InfoHeader from './InfoHeader';
import InfoOptions from './InfoOptions';

const StyledInfo = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        align-items: flex-start;
    }
`

function Info() {
    return (
        <StyledInfo>
            <InfoHeader />
            <InfoOptions />
            <Button text='Получить консультацию' />
        </StyledInfo>
    );
}

export default Info;