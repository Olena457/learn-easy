import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
import FeaturesSection from './../../components/FeaturesSection/FeaturesSection.jsx';

const HomePage = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <HeroSection />
        <ThemedImage />
      </div>
      <FeaturesSection />
    </>
  );
};
export default HomePage;
