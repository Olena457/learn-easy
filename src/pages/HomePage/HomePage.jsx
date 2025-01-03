import styles from './HomePage.module.css';
import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';

const HomePage = () => {
  return (
    <main>
      <div className={styles.heroContainer}>
        <HeroSection />
        <ThemedImage />
      </div>
      <FeaturesSection />
    </main>
  );
};
export default HomePage;

//         v7_normalizeFormMethod: true,
//         v7_routerProviderHydration: true,
