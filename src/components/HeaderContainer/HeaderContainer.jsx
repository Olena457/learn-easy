import styles from './HeaderContainer.module.css';

const HeaderContainer = ({ children }) => {
  return <div className={styles.mainWrapper}>{children}</div>;
};

export default HeaderContainer;
