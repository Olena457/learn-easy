import ThemeImageComponent from '../ThemeImageComponent/ThemeImageComponent.jsx';
import styles from './ThemedImage.module.css';

const ThemedImage = ({ theme }) => {
  return (
    <div className={styles.imageContainer}>
      <ThemeImageComponent theme={theme} />
    </div>
  );
};

export default ThemedImage;
