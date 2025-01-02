import styles from './HomePage.module.css';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ThemedImage from '../../components/ThemedImage/ThemedImage';
import HeroSection from '../../components/HeroSection/HeroSection';

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
//  future={{
//         v7_startTransition: true,
//         v7_relativeSplatPath: true,
//         v7_normalizeFormMethod: true,
//         v7_routerProviderHydration: true,
//       }}
