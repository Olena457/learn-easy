import useTheme from '../../contextTheme/useTheme.js';
import FeatureItem from '../FeatureItem/FeatureItem.jsx';
import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.sectionFeatures} data-theme={theme}>
      <ul className={styles.list}>
        <FeatureItem
          number={'\u0033\u0032\u002C\u0030\u0030\u0030 \u002B'}
          label="32,000 plus"
          text="Experienced tutors"
        />
        <FeatureItem
          number={'\u0033\u0030\u0030\u002C\u0030\u0030\u0030 \u002B'}
          label="300,000 plus"
          text="5-star tutor reviews"
        />
        <FeatureItem
          number={'\u0031\u0032\u0030 \u002B'}
          label="120 plus"
          text="Subjects taught"
        />
        <FeatureItem
          number={'\u0032\u0030\u0030 \u002B'}
          label="200 plus"
          text="Tutor nationalities"
        />
      </ul>
    </section>
  );
};

export default FeaturesSection;
