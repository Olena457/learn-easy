import useTheme from '../../contextTheme/useTheme.js';
import ThemeImageComponent from '../ThemeImageComponent/ThemeImageComponent.jsx';
import styles from './ThemedImage.module.css';

const ThemedImage = () => {
  const { theme } = useTheme();

  return (
    <div className={styles.imageContainer}>
      <ThemeImageComponent theme={theme} />
    </div>
  );
};

export default ThemedImage;
