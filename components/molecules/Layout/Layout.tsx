import Nav from "../Nav/";
import classes from "./Layout.module.scss";

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
          <main className={classes.main}>{children}</main>
        </div>
      )}
    </div>
  );
};
