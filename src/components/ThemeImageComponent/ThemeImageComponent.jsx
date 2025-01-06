import blueImage from '../../assets/image/blue-theme.jpg';
import yellowImage from '../../assets/image/yellow-theme.jpg';
import redImage from '../../assets/image/red-theme.jpg';
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
        alt={`Theme image`}
        className={styles.themeImage}
      />
    </div>
  );
};

export default ThemeImageComponent;
