import styled from "styled-components";
import pagePadding from "../../../styles/utils/pagePadding.styled";
import { Heading } from "../../atom/Heading/Heading";
import WorkItem from "../../molecules/WorkItem";

interface IWorkData {
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

export const WorkSection = () => {
  const workData: IWorkData[] = [
    {
      title: "IDX Stock App",
      description:
        "I am also an investor in Indonesia Stock Market (IDX). In order to help my investing activities, I make a web app to help my daily investing activities",
      technology: [
        "react",
        "styled-component",
        "storybook",
        "express",
        "mongodb",
      ],
      type: "personal project",
      role: ["Design", "Frontend", "Backend"],
      year: 2022,
      link: "/work/idx-stock-app",
      repo: "https://github.com/d-abiyoga/idx-stock-app",
    },
    {
      title: "Fleet management",
      description:
        "Companies have a lot of cars and drivers to support their operational activities. It is difficult to track and verify gasoline filling to each cars and justify their operational cost. To embrace transparency and GCG, company need reporting system to keep history and tracking the gasoline filling. This web app is created to solve that particular issue.",
      technology: ["React", "Chakra UI", "Express", "mongodb"],
      type: "client work",
      role: ["Design", "Frontend", "Backend"],
      year: 2022,
      link: "/work/fleet-management",
      imgPath: "../../../public/img/idx-stock-app-desktop.png",
    },
    {
      title: "Ecommerce product page",
      description:
        "This is part of frontendmentor challenge. In this challenge I implement challenge as ...",
      technology: ["React", "SCSS", "Express"],
      type: "coding challenge",
      role: ["Frontend"],
      year: 2021,
      link: "/work/ecommerce-product-page",
    },
    {
      title: "landing page",
      description:
        "This is part of frontendmentor challenge. In this challenge I implement challenge as ...",
      technology: ["HTML", "SCSS"],
      type: "coding challenge",
      role: ["Frontend"],
      year: 2021,
      link: "/work/ecommerce-product-page",
    },
  ];

  return (
    <SectionWrapper id="work">
      <Heading level={2}>Works</Heading>
      <ProjectList>
        {workData.map((work, index) => (
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
            />
          </li>
        ))}
      </ProjectList>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  ${pagePadding};
  min-height: 100vh;
  padding-top: 5rem;
`;

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
