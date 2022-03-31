import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiChakraui,
  SiJest,
  SiMongodb,
  SiStorybook,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import styled from "styled-components";

import Heading from "../../atom/Heading";
import Text from "../../atom/Text";
import SkillList from "../../molecules/SkillList";
import { FC, cloneElement } from "react";
import stack from "../../../styles/utils/Stack.styled";
import pagePadding from "../../../styles/utils/pagePadding.styled";

export const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Heading level={2}>About</Heading>
      <Text>
        I am a self-taught Fullstack Developer focused on JavaScript /
        TypeScript and NodeJS. I love make things and learn how web technologies
        work.
      </Text>
      <Article>
        <h3>Skills & Tools</h3>
        <StyledUl>
          <SkillList category="Front End">
            <SkillItem name="HTML5" icon={<FaHtml5 />} />
            <SkillItem name="CSS3" icon={<FaCss3 />} />
            <SkillItem name="JavaScript" icon={<FaJs />} />
            <SkillItem name="TypeScript" icon={<SiTypescript />} />
            <SkillItem name="ReactJs" icon={<FaReact />} />
            <SkillItem name="Sass" icon={<FaSass />} />
            <SkillItem name="styled" icon={<SiStyledcomponents />} />
            <SkillItem name="Chakra-UI" icon={<SiChakraui />} />
            <SkillItem name="Storybook" icon={<SiStorybook />} />
          </SkillList>

          <SkillList category="Back End">
            <SkillItem name="NodeJs" icon={<FaNodeJs />} />
            <SkillItem name="Mongodb" icon={<SiMongodb />} />
          </SkillList>
          <SkillList category="Other Tools">
            <SkillItem name="Figma" icon={<FaFigma />} />
            <SkillItem name="Jest" icon={<SiJest />} />
          </SkillList>
        </StyledUl>
      </Article>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${stack};
  ${pagePadding};

  min-height: 100vh;
  padding-top: 5rem;
`;

const Article = styled.article`
  padding: 1rem 0;
`;

const StyledUl = styled.ul`
  ${stack}
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillItem: FC<any> = (props: { name: string; icon: any }) => {
  return (
    <Li>
      {cloneElement(props.icon, { size: 48 })}
      <p>{props.name}</p>
    </Li>
  );
};

const Li = styled.li`
  /* border: 1px solid red; */
  min-width: 5.75rem;
`;
