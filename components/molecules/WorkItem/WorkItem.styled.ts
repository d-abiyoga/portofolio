import styled from "styled-components";
import colors from "../../../styles/colors";
import breakpoints from "../../../styles/breakpoints";
import { RoleInfoColor, YearColor } from "../../../styles/theme";

export const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.primary.main};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: ${colors.primary.main} 0px 1px 20px -6px;
  }

  @media only screen and (max-width: ${breakpoints.md}) {
    flex-direction: column;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  min-height: clamp(220px, 80vw, 240px);
  min-width: 100px;
  position: relative;

  @media only screen and (min-width: ${breakpoints.sm}) {
    min-height: clamp(300px, 33vw, 380px);
    min-width: clamp(300px, 50%, 550px);
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: 1rem;
  @media only screen and (min-width: ${breakpoints.sm}) {
    min-width: 380px;
    width: 50%;
  }
`;

export const ProjectInfo = styled.p`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.8125rem;
`;

export const Year = styled.p`
  color: ${YearColor};
  line-height: 2rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: end;
  gap: 1.5rem;
`;

export const TextLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.25rem 0.4rem;
  border: 1px solid teal;
  color: ${colors.primary.main};
  svg {
    padding-top: 1px;
  }
`;

export const A = styled.a`
  color: ${colors.primary.main}

  &:hover {
    transform: scale(1.1);
  }
`;

export const Header = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: end;
  flex-wrap: no-warp;
`;

export const InfoDiv = styled.div`
  display: flex;
  alignitems: center;
  gap: 0.5rem;

  p {
    font-weight: 700;
    color: ${RoleInfoColor};
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
