import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialNetworkImg from './../../../assets/images/social-network-img.webp'
import timerImg from './../../../assets/images/timer.webp'


const worksItems = ['All', 'Landing Page', 'React', 'SPA']

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work
                    src={socialNetworkImg}
                    title={'Social Network'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias commodi consequuntur, deleniti deserunt eius incidunt minus nostrum nulla odio placeat, quo quos reprehenderit repudiandae sapiente tempora tenetur vel vitae.'}/>

                <Work
                    src={timerImg}
                    title={'Timer'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores earum nemo placeat suscipit tenetur. Accusantium consequuntur dolores et exercitationem hic impedit iure labore nostrum odio perspiciatis quae quam quidem, quis?'}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`
