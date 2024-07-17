import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper>
                <Skill iconId='codeSvg' title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, numquam, obcaecati. Ad aperiam atque, beatae, consequatur cumque deleniti distinctio ea enim facere inventore itaque modi mollitia nulla quod ut, voluptatibus.'}/>
                <Skill iconId='css3Svg' title={'CSS3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto nam tempore? Adipisci eaque eum, ex, exercitationem expedita incidunt iure laborum maxime modi nisi quae reprehenderit soluta vel voluptas'}/>
                <Skill iconId='reactSvg' title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto nam tempore? Adipisci eaque eum, ex, exercitationem expedita incidunt iure laborum maxime modi nisi quae reprehenderit soluta vel voluptas'}/>
                <Skill iconId='figmaSvg' title={'Figma'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto nam tempore? Adipisci eaque eum, ex, exercitationem expedita incidunt iure laborum maxime modi nisi quae reprehenderit soluta vel voluptas'}/>
                <Skill iconId='typescriptSvg' title={'Typescript'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto nam tempore? Adipisci eaque eum, ex, exercitationem expedita incidunt iure laborum maxime modi nisi quae reprehenderit soluta vel voluptas'}/>
                <Skill iconId='styledComponentsSvg' title={'Styled Components'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto nam tempore? Adipisci eaque eum, ex, exercitationem expedita incidunt iure laborum maxime modi nisi quae reprehenderit soluta vel voluptas'}/>

            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #ffe5e4;
    min-height: 100vh;
`