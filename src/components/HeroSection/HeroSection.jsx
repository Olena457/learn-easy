import { NavLink } from 'react-router-dom';
import styles from './HeroSection.module.styles';

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        Unlock your potential with the best{' '}
        <span className={styles.focus}> language</span> tutors
      </h1>
      <p className={styles.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <div className={styles.wrapperLink}>
        <NavLink to="/teachers" className={styles.link}>
          Get started
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
