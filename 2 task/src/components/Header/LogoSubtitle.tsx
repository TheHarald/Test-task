import React from 'react';
import styled from 'styled-components';

const StyledLogoSubtitle = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    color: #E4E5EA;
    max-width: 140px;
`

type LogoSubtitleProps = {
    title: string
}

function LogoSubtitle(props: LogoSubtitleProps) {
    return (
        <StyledLogoSubtitle>
            {props.title}
        </StyledLogoSubtitle>
    );
}

export default LogoSubtitle;