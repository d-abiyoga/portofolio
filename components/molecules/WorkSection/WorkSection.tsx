import { Heading } from "../../atom/Heading/Heading";
import Section from "../../atom/Section";
import WorkItem from "../../atom/WorkItem";
import styles from "./WorkSection.module.scss";

interface IWorkData {
  title: string;
  description: string;
  technology: string[];
  type: "client work" | "personal project" | "coding challenge";
  role: string[];
  year: number;
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
    },
    {
      title: "Fleet management",
      description:
        "Companies have a lot of cars and drivers to support their operational activities. It is difficult to track and verify gasoline filling to each cars and justify their operational cost. To embrace transparency and GCG, company need reporting system to keep history and tracking the gasoline filling. This web app is created to solve that particular issue.",
      technology: ["React", "Chakra UI", "Express", "mongodb"],
      type: "client work",
      role: ["Design", "Frontend", "Backend"],
      year: 2022,
    },
    {
      title: "Ecommerce product page",
      description:
        "This is part of frontendmentor challenge. In this challenge I implement challenge as ...",
      technology: ["React", "SCSS", "Express"],
      type: "coding challenge",
      role: ["Frontend"],
      year: 2021,
    },
  ];

  return (
    <Section id="work">
      <Heading level={2}>Works</Heading>
      <ul className={styles.projectList}>
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
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};
