import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import SectionComponent from '../../components/SectionComponent/SectionComponent.jsx';

import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
const HomePage = ({ theme }) => {
  return (
    <main className={styles.heroContainer}>
      <HeroSection />
      <ThemedImage theme={theme} />
      <SectionComponent />
    </main>
  );
};
export default HomePage;
