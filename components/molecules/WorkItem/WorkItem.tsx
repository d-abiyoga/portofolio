import Image from "next/image";
import Link from "next/link";
import Tag from "../../atom/Tag";
import Text from "../../atom/Text";
import colors from "../../../styles/colors";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Heading from "../../atom/Heading";
import {
  A,
  Header,
  InfoDiv,
  LeftDiv,
  Links,
  ProjectInfo,
  RightDiv,
  Tags,
  TextLink,
  Wrapper,
  Year,
} from "./WorkItem.styled";
import { WorkItemOverlayColor } from "../../../styles/theme";
import styled from "styled-components";

interface Props {
  projectNumber: number;
  title: string;
  description: string;
  technology: string[];
  type: string;
  role: string[];
  year: number;
  link: string;
  repo?: string;
  imgPath: string;
  imgAlt?: string;
  liveDemoLink?: string;
}

export const WorkItem = (props: Props) => {
  return (
    <Wrapper>
      <InViewAnimation />

      <LeftDiv>
        <Image
          src={props.imgPath}
          objectFit="cover"
          objectPosition="top center"
          layout="fill"
          alt={props.imgAlt}
        ></Image>
      </LeftDiv>
      <RightDiv as={motion.div} whileHover={{ scale: 0.95 }}>
        <ProjectInfo id="project-info">
          <Header>
            <Heading level={3}>{props.title}</Heading>
            <Year>{props.year}</Year>
          </Header>
          <InfoDiv>
            <p>Role</p>
            <Tags>
              {props.role.map((item, index) => (
                <Tag key={item + index}>{item}</Tag>
              ))}
            </Tags>
          </InfoDiv>
          <InfoDiv>
            <p>Tech</p>
            <Tags>
              {props.technology.map((item, index) => (
                <Tag key={item + index}>{item}</Tag>
              ))}
            </Tags>
          </InfoDiv>
        </ProjectInfo>
        <Text>{props.description}</Text>
        <Links>
          {props.liveDemoLink && (
            <Link href={props.liveDemoLink} passHref>
              <A
                target="_blank"
                rel="noreferrer"
                href={props.repo}
                aria-label="Go to live demo"
              >
                <FaExternalLinkAlt
                  size={20}
                  fill={colors.primary.main}
                  aria-hidden="true"
                />
              </A>
            </Link>
          )}
          {props.repo && (
            <Link href={props.repo} passHref>
              <A
                target="_blank"
                rel="noreferrer"
                href={props.repo}
                aria-label="Go to source code"
              >
                <FaCode
                  size={20}
                  fill={colors.primary.main}
                  aria-hidden="true"
                />
              </A>
            </Link>
          )}
          {/* <TextLink href={props.link} as={motion.a} whileHover={{ scale: 1.1 }}>
            Learn more
            <FaArrowRight size={14} />
          </TextLink> */}
        </Links>
      </RightDiv>
    </Wrapper>
  );
};

const StyledInViewAnimation = styled.div`
  background: ${WorkItemOverlayColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 5;
`;

const InViewAnimation = () => (
  <StyledInViewAnimation
    as={motion.div}
    initial={{ width: "100%" }}
    whileInView={{ width: "0" }}
    transition={{ type: "tween", delay: 0.3, staggerChildren: 0.1 }}
    viewport={{ once: true }}
  />
);
