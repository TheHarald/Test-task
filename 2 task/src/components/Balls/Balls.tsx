import React from 'react';
import styled from 'styled-components';


const Ball = styled.div`
    border-radius: 50%;
    position: absolute;
`

const StyledBluredBall = styled(Ball)`
    background: #961A1A;
    opacity: 0.5;    
    filter: blur(196px);
    width: 311px;
    height: 311px;
    left: -102px;
    top: 251px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        
    }
`

const StyledBluredPurpleBall = styled(Ball)`
    width: 259px;
    height: 259px;
    left: 602px;
    top: -154px;
    background: #833AB4;
    opacity: 0.5;
    filter: blur(196px);
    @media screen and (min-width: 320px) and (max-width: 425px) {
        right: -100px;
    }
`


const StyledRedBall = styled(Ball)`
    width: 83px;
    height: 83px;
    left: 519px;
    top: 83px;
    background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
    backdrop-filter: blur(2px);
    
    @media screen and (min-width: 320px) and (max-width: 425px) {
        width: 43px;
        height: 43px;
        left: 29px;
        top: 442px;
        background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
        backdrop-filter: blur(2px);
    }

`

const StyledSmallRedBall = styled(Ball)`
    width: 28px;
    height: 28px;
    right: 51px;
    top: 547px;
    background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 3px 6px 27px -10px rgba(223, 125, 125, 0.25);
    filter: blur(2.5px);
    backdrop-filter: blur(2px);
    @media screen and (min-width: 320px) and (max-width: 425px) {
        right: 20px;
    }
`

const StyledSmallPurpleBall = styled(Ball)`
    width: 60px;
    height: 60px;
    left: 868px;
    top: -2px;
    background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
    filter: blur(5px);
    backdrop-filter: blur(2px);

    @media screen and (min-width: 320px) and (max-width: 425px) {
        left: 296px;
        top: 236px;
        width: 40px;
        height: 40px;
        background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
        box-shadow: 3px 6px 27px -10px rgba(177, 118, 217, 0.25);
        filter: blur(5px);
        backdrop-filter: blur(2px);
    }
`


function Balls() {
    return (
        <>
            <StyledBluredBall></StyledBluredBall>
            <StyledBluredPurpleBall></StyledBluredPurpleBall>
            <StyledRedBall></StyledRedBall>
            <StyledSmallRedBall></StyledSmallRedBall>
            <StyledSmallPurpleBall></StyledSmallPurpleBall>
        </>
    );
}

export default Balls;