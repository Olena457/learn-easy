import FeatureItem from '../FeatureItem/FeatureItem.jsx';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <FeatureItem
          quantity="32,000 +"
          text="Experienced tutors"
          aria-label="32,000+ Experienced tutors"
        />
        <FeatureItem
          quantity="300,000 +"
          text="5-star tutor reviews"
          aria-label="300,000+ 5-star tutor reviews"
        />
        <FeatureItem
          quantity="120 +"
          text="Subjects taught"
          aria-label="120+ Subjects taught"
        />
        <FeatureItem
          quantity="200 +"
          text="Tutor nationalities"
          aria-label="200+ Tutor nationalities"
        />
      </ul>
    </section>
  );
};

export default FeaturesSection;
