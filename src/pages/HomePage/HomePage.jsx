import styles from './HomePage.module.css';
import HeroSection from '../../components/HeroSection/HeroSection.jsx';
import ThemedImage from '../../components/ThemedImage/ThemedImage.jsx';
import ReviewsComponent from '../../components/ReviewsComponent/ReviewsComponent.jsx';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <>
        <div className={styles.heroContainer}>
          <>
            <HeroSection />
            <ThemedImage />
          </>
        </div>
        <ReviewsComponent />
      </>
    </main>
  );
};
export default HomePage;
