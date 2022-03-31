import styled from "styled-components";
import Nav from "../Nav/";

export const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <div className="container">
      {home && (
        <div>
          <Nav />
          <Main>{children}</Main>
        </div>
      )}
    </div>
  );
};

const Main = styled.main`
  /* padding: 0 clamp(1rem, 12%, 20rem); */

  /* & > * {
    max-width: 1200px;
  } */
`;
