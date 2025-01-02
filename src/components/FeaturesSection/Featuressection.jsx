import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.sectionFeatures}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.number}>32,000 +</p>
          <p className={styles.text}>Experienced tutors</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>300,000 +</p>
          <p className={styles.text}>5-star tutor reviews</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>120 +</p>
          <p className={styles.text}>Subjects taught</p>
        </li>
        <li className={styles.item}>
          <p className={styles.number}>200 +</p>
          <p className={styles.text}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default FeaturesSection;
