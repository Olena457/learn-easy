import styles from './FeatureItem.module.css';

const FeatureItem = ({ number, label, text }) => {
  return (
    <li className={styles.item}>
      <p className={styles.number} aria-label={label}>
        {number}
      </p>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default FeatureItem;
