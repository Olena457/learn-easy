import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <ThemedImage />
      </div>
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
