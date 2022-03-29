import Link from "next/link";
import Tag from "../Tag";
import Text from "../Text";
import styles from "./WorkItem.module.scss";

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
}

export const WorkItem = (props: Props) => {
  return (
    <Link href={props.link} passHref>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.projectNumber}>
            {props.projectNumber < 10
              ? `0${props.projectNumber + 1}`
              : `${props.projectNumber + 1}`}
          </p>
          <h3 className={styles.projectTitle}>{props.title}</h3>
        </div>
        <div id="project-info" className={styles.projectInfo}>
          <div>
            <h4>Technology</h4>
            {props.technology.map((item, index) => (
              <Tag key={item + index}>{item}</Tag>
            ))}
          </div>
          <div>
            <h4>Role</h4>
            {props.role.map((item, index) => (
              <Tag key={item + index}>{item}</Tag>
            ))}
          </div>
          <div>
            <p className={styles.projectInfoText}>{props.year}</p>
          </div>
        </div>

        <Text>{props.description}</Text>
        <p style={{ fontWeight: "700", fontSize: "1.2rem" }}>See detail</p>
        {props.repo && (
          <Link href={props.repo} passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className={styles.repoLink}
              href={props.repo}
            >
              Repo
            </a>
          </Link>
        )}
      </div>
    </Link>
  );
};
