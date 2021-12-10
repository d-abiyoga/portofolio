import Nav from '../Nav/Nav';
import classes from './Layout.module.scss';

const Layout = (props: any) => {
  return (
    <div>
      <Nav />
      <main className={classes.main}>{props.children}</main>
    </div>
  )
}

export default Layout;
