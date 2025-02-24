import React from 'react';
import styled from "styled-components";

type WorksPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=''></Image>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={'#'}>Demo</Link>
            <Link href={'#'}>Code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: #ffe896;
    max-width: 540px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Link = styled.a`

`

const Title = styled.h3`

`

const Text = styled.p`

`