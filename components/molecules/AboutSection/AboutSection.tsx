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
import styles from "./AboutSection.module.scss";
import { Heading } from "../../atom/Heading/Heading";

import Section from "../../atom/Section";
import Text from "../../atom/Text";

export const AboutSection = () => {
  return (
    <Section id="about">
      <Heading level={2}>About</Heading>
      <Text>
        I am a self-taught Fullstack Developer focused on JavaScript /
        TypeScript and NodeJS. I love make things and learn how web technologies
        work.
      </Text>
      <Text>
        I am a self-taught Fullstack Developer focused on JavaScript /
        TypeScript and NodeJS. I love make things and learn how web technologies
        work.
      </Text>
      <article className={styles.skills}>
        <h3>Skills & Tools</h3>
        <ul className={styles.skillList}>
          <li>
            <p className={styles.categoryName}>Front End</p>
            <ul className={styles.skillCategoryList}>
              <li>
                <FaHtml5 size={48} />
                <p>HTML5</p>
              </li>
              <li>
                <FaCss3 size={48} />
                <p>CSS3</p>
              </li>
              <li>
                <FaJs size={48} />
                <p>JavaScript</p>
              </li>
              <li>
                <SiTypescript size={48} />
                <p>TypeScript</p>
              </li>
              <li>
                <FaReact size={48} />
                <p>ReactJS</p>
              </li>
              <li>
                <FaSass size={48} />
                <p>Sass</p>
              </li>
              <li>
                <SiStyledcomponents size={48} />
                <p>
                  styled-
                  <br />
                  component
                </p>
              </li>
              <li>
                <SiChakraui size={48} />
                <p>ChakraUI</p>
              </li>
              <li>
                <SiStorybook size={48} />
                <p>Storybook</p>
              </li>
            </ul>
          </li>

          <li>
            <p className={styles.categoryName}>Back End</p>
            <ul className={styles.skillCategoryList}>
              <li>
                <FaNodeJs size={48} />
                <p>NodeJS</p>
              </li>
              <li>
                <SiMongodb size={48} />
                <p>Mongodb</p>
              </li>
            </ul>
          </li>
          <li>
            <p className={styles.categoryName}>Other Tools</p>
            <ul className={styles.skillCategoryList}>
              <li>
                <FaFigma size={48} />
                <p>Figma</p>
              </li>
              <li>
                <SiJest size={48} />
                <p>Jest</p>
              </li>
            </ul>
          </li>
        </ul>
      </article>
    </Section>
  );
};
