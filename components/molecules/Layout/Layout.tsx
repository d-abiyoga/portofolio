import styled from "styled-components";
import Navbar from "../Navbar";

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
          <Navbar />
          <Main>{children}</Main>
        </div>
      )}
    </div>
  );
};

const Main = styled.main`
  z-index: 5;
  /* padding: 0 clamp(1rem, 12%, 20rem); */

  /* & > * {
    max-width: 1200px;
  } */
`;
