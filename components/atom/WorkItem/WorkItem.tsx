import Tag from "../Tag";
import styles from "./WorkItem.module.scss";

interface Props {
  projectNumber: number;
  title: string;
  description: string;
  technology: string[];
  type: "client work" | "personal project" | "coding challenge";
  role: string[];
  year: number;
}

export const WorkItem = (props: Props) => {
  return (
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

      <p className={styles.projectDescription}>{props.description}</p>
    </div>
  );
};
