// const SectionComponent = ({ children }) => {
//   return <div>{children}</div>;
// };
// export default SectionComponent;
// import styles from './SectionComponent.module.css';
// import PropTypes from 'prop-types';

// const SectionComponent = ({ children, theme, className }) => {
//   return (
//     <div
//       className={`${styles.section} ${theme ? styles[theme] : ''} ${className}`}
//     >
//       {children}
//     </div>
//   );
// };

// SectionComponent.propTypes = {
//   children: PropTypes.node.isRequired,
//   theme: PropTypes.string,
//   className: PropTypes.string,
// };

// export default SectionComponent;
import useTheme from '../../hooks/useTheme.js';
import styles from './SectionComponent.module.css';
const SectionComponent = () => {
  const { theme } = useTheme();
  return (
    <section className={styles.section} data-theme={theme}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.quantity}>32,000 +</p>
          <p className={styles.text}>Experienced tutors</p>
        </li>

        <li className={styles.item}>
          <p className={styles.quantity}>300,000 +</p>
          <p className={styles.text}>5-star tutor reviews</p>
        </li>

        <li className={styles.item}>
          <p className={styles.quantity}>120 +</p>
          <p className={styles.text}>Subjects taught</p>
        </li>

        <li className={styles.item}>
          <p className={styles.quantity}>200 +</p>
          <p className={styles.text}>Tutor nationalities</p>
        </li>
      </ul>
    </section>
  );
};

export default SectionComponent;
