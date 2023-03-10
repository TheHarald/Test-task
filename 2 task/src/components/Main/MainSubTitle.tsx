import React from 'react';
import styled from 'styled-components';


type MainSubTitleProps = {
    title: string
}


const StyledMainSubTitle = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #E4E5EA;
    max-width: 275px;
    margin-top: 30px;
    @media screen and (min-width: 320px) and (max-width: 425px) {
        margin-top: 15px;
    }
`


function MainSubTitle(props: MainSubTitleProps) {
    return (
        <StyledMainSubTitle>
            {props.title}
        </StyledMainSubTitle>
    );
}

export default MainSubTitle;