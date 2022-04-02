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
        <>
          <Navbar />
          <Main>{children}</Main>
        </>
      )}
    </div>
  );
};

const Main = styled.main`
  z-index: 5;
`;
