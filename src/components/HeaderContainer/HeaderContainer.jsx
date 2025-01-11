import styles from './HeaderContainer.module.css';

const HeaderContainer = ({ children }) => {
  return <div className={styles.mainWrapperContainer}>{children}</div>;
};

export default HeaderContainer;
