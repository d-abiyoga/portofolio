import Image from "next/image";
import Link from "next/link";
import Tag from "../../atom/Tag";
import Text from "../../atom/Text";
import workImg from "../../../public/img/idx-stock-app-desktop.png";
import styled from "styled-components";
import colors from "../../../styles/colors";

interface Props {
  projectNumber: number;
  title: string;
  description: string;
  technology: string[];
  type: "client work" | "personal project" | "coding challenge";
  role: string[];
  year: number;
  link: string;
  repo?: string;
  imgPath?: string;
}

export const WorkItem = (props: Props) => {
  return (
    <Link href={props.link} passHref>
      <Wrapper>
        <LeftDiv>
          <Header>
            <ProjectNumber>
              {props.projectNumber < 10
                ? `0${props.projectNumber + 1}`
                : `${props.projectNumber + 1}`}
            </ProjectNumber>
            <H3>{props.title}</H3>
          </Header>
          <ProjectInfo id="project-info">
            <div>
              <h4>Role</h4>
              {props.role.map((item, index) => (
                <Tag key={item + index}>{item}</Tag>
              ))}
            </div>
            <div>
              <Year>{props.year}</Year>
            </div>
          </ProjectInfo>

          <Text>{props.description}</Text>
          <a
            href={props.link}
            style={{
              display: "block",
              fontWeight: "700",
              fontSize: "1.2rem",
            }}
          >
            See detail
          </a>
          {props.repo && (
            <Link href={props.repo} passHref>
              <RepoLink target="_blank" rel="noreferrer" href={props.repo}>
                Repo
              </RepoLink>
            </Link>
          )}
        </LeftDiv>
        <RightDiv>
          <Image src={workImg} layout="responsive"></Image>
        </RightDiv>

        <Overlay>
          <Header>
            <ProjectNumber>
              {props.projectNumber < 10
                ? `0${props.projectNumber + 1}`
                : `${props.projectNumber + 1}`}
            </ProjectNumber>
            <H3>{props.title}</H3>
          </Header>
          <div>
            <h4>Technology</h4>
            {props.technology.map((item, index) => (
              <Tag key={item + index}>{item}</Tag>
            ))}
          </div>
        </Overlay>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.primary.main};
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${colors.primary.main} 0px 1px 20px -6px;
  }
`;

const LeftDiv = styled.div`
  padding: 1rem 0 1rem 1rem;
  width: 66%;
`;
const RightDiv = styled.div`
  /* width: 100%; */
  /* min-width: calc(100vw - 2rem); */
  /* height: 100%; */
  max-height: 400px;
`;

const H3 = styled.h3`
  font-size: 1.75rem;
`;

const ProjectNumber = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.primary.main};
`;

const Header = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProjectInfo = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Year = styled.p`
  font-weight: 700;
`;

const RepoLink = styled.a`
  z-index: 2;

  &:hover {
    color: $primary;
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.dark.main};
  opacity: 0;
  z-index: 100;
  padding: 1rem;
  border-radius: 8px;

  transition: 500ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
