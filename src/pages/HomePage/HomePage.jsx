import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
// import SectionComponent from '../../components/SectionComponent/SectionComponent.jsx';
const HomePage = () => {
  return (
    <main className={styles.heroContainer}>
      <HeroSection />
      <ThemedImage />
      {/* <SectionComponent /> */}
    </main>
  );
};
export default HomePage;
