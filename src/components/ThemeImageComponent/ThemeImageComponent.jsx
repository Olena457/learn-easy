import blueImage from '../../../public/image/blue-theme.jpg';
import yellowImage from '../../../public/image/yellow-theme.jpg';
import redImage from '../../../public/image/red-theme.jpg';
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
        alt={`User image`}
        className={styles.themeImage}
      />
    </div>
  );
};

export default ThemeImageComponent;
