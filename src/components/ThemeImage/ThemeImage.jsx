import useTheme from '../../contextTheme/useTheme.js';
import styles from './ThemeImage.module.css';

const ThemedImage = () => {
  const { theme } = useTheme();

  return <div data-theme={theme} className={styles.imageContainer}></div>;
};

export default ThemedImage;
