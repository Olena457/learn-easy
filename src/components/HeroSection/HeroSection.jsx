import { NavLink } from 'react-router-dom';
import useTheme from '../../contextTheme/useTheme.js';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section
      className={styles.section}
      data-theme={theme}
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
    >
      <h1 aria-label="Hero Title" className={styles.title}>
        Unlock your potential with the best{' '}
        <span className={styles.focus}>language</span> tutors
      </h1>
      <p aria-label="Hero Description" className={styles.text}>
        Embark on an Exciting Language Journey with Expert Language Tutors:
        Elevate your language proficiency to new heights by connecting with
        highly qualified and experienced tutors.
      </p>
      <div className={styles.wrapperLink}>
        <NavLink
          to="/teachers"
          className={styles.link}
          aria-label="Get started with language tutors"
        >
          Get started
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
