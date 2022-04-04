import { motion } from "framer-motion";
import styled from "styled-components";
import pagePadding from "../../../styles/utils/pagePadding.styled";
import { Heading } from "../../atom/Heading/Heading";
import WorkItem from "../../molecules/WorkItem";
import data from "./data.json";
import Text from "../../atom/Text";
import TextLink from "../../atom/TextLink";

export const WorkSection = () => {
  return (
    <SectionWrapper
      id="work"
      as={motion.section}
      transition={{ staggerChildren: 1 }}
    >
      <Heading level={2}>Works</Heading>
      <ProjectList>
        {data.map((work, index) => (
          <li key={index}>
            <WorkItem
              projectNumber={index}
              title={work.title}
              description={work.description}
              technology={work.technology}
              type={work.type}
              role={work.role}
              year={work.year}
              link={work.link}
              repo={work.repo}
              liveDemoLink={work.liveDemoLink}
              imgPath={work.imgPath}
            />
          </li>
        ))}
      </ProjectList>
      <Text>
        I&apos;ve been doing challenged from Frontentmentor.io to improve my
        skill.{" "}
        <TextLink href="https://www.frontendmentor.io/profile/d-abiyoga">
          See my work there
        </TextLink>
        .
      </Text>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${pagePadding};
  min-height: 100vh;
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
