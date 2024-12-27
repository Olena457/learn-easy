import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection.jsx';
import ColorComponent from '../../components/ColorComponent/ColorComponent.jsx';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <HeroSection />
        <ColorComponent />
      </div>
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
