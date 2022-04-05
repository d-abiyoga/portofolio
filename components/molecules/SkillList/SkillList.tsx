import { FC } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { SkillCategoryNameColor } from "../../../styles/theme";

interface Props {
  category: string;
}

export const SkillList: FC<Props> = (props) => {
  return (
    <li>
      <CategoryName>{props.category}</CategoryName>
      <StyledUl>{props.children}</StyledUl>
    </li>
  );
};

const CategoryName = styled.p`
  font-weight: 700;
  color: ${SkillCategoryNameColor};
  line-height: 2rem;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;
