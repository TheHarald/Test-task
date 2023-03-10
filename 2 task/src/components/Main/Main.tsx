import React from 'react';
import styled from 'styled-components';
import Info from './Info';
import MainTitle from './MainTitle';


const StyledMain = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 90px;
    z-index: 1;

    @media screen and (min-width: 320px) and (max-width: 425px) {
        flex-direction: column;
        justify-content: flex-start;
        gap: 45px;
        margin-top: 0;
        padding: 40px 16px 60px 16px;
        position: relative;
        &::after{
            background: radial-gradient(238.53% 189.02% at 3.2% 3.49%, rgba(255, 246, 233, 0.1) 0%, rgba(26, 29, 35, 0.1) 26.62%, rgba(26, 29, 35, 0.1) 52.1%, rgba(26, 29, 35, 0.01) 70.17%, rgba(26, 29, 35, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
            backdrop-filter: blur(7.5px);
        }
    }
`

function Main() {
    return (
        <StyledMain>
            <MainTitle />
            <Info />
        </StyledMain>
    )
}

export default Main;