// import { Suspense } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';
// import AppBar from '../AppBar/AppBar.jsx';

const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Outlet />
    </div>
  );
};

export default Layout;

{
  /* <Suspense fallback={null}>{children}</Suspense> */
}
{
  /* <ContainerComponent> */
}
{
  /* </ContainerComponent> */
}
// import ContainerComponent from '../ContainerComponent/ContainerComponent.jsx'
