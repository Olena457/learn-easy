import blueImage from '../../image/blue-theme.jpg';
import yellowImage from '../../image/yellow-theme.jpg';
import redImage from '../../image/red-theme.jpg';
import styles from './ThemeImageComponent.module.css';

const ThemeImageComponent = ({ theme }) => {
  const images = {
    blue: blueImage,
    yellow: yellowImage,
    red: redImage,
  };

  return (
    <div className={styles.imageContainer}>
      <img
        src={images[theme]}
        alt={`${theme} theme`}
        className={styles.themeImage}
      />
    </div>
  );
};

export default ThemeImageComponent;
