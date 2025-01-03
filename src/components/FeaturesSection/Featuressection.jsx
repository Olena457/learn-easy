import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.sectionFeatures}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.number} aria-label="32,000 plus">
            {'\u0033\u0032\u002C\u0030\u0030\u0030 \u002B'}
          </p>
          <p className={styles.text}>Experienced tutors</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number} aria-label="300,000 plus">
            {'\u0033\u0030\u0030\u002C\u0030\u0030\u0030 \u002B'}
          </p>
          <p className={styles.text}>5-star tutor reviews</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number} aria-label="120 plus">
            {'\u0031\u0032\u0030 \u002B'}
          </p>
          <p className={styles.text}>Subjects taught</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number} aria-label="200 plus">
            {'\u0032\u0030\u0030 \u002B'}
          </p>
          <p className={styles.text}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
