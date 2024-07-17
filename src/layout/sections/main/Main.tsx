import React from 'react';
import photo from '../../../assets/images/partfolio-image.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi there</span>
                    <span>I am Svetlana Dyablo</span>
                    <h1>A Web Developer</h1>
                </div>

                <Photo src={photo} alt={'my picture'}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fff5e7;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`