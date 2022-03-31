import styled from "styled-components";
import colors from "../../../styles/colors";
import pagePadding from "../../../styles/utils/pagePadding.styled";

export const Footer = () => {
  return (
    <StyledFooter>© 2022 Dimas Abiyoga. All Rights Reserved.</StyledFooter>
  );
};

const StyledFooter = styled.footer`
  ${pagePadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-block: 1.5rem;
  gap: 1rem;
  height: 4rem;
`;

const Divider = styled.hr`
  border: 1px solid ${colors.primary.main};
`;
