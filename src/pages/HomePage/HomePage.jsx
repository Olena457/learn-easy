import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import ThemeImage from '../../components/ThemeImage/ThemeImage.jsx';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <ThemeImage />
      </div>
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
