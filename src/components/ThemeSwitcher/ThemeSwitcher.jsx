import useTheme from '../../contextTheme/useTheme.js';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <button
        type="button"
        className={`${styles.circle} ${styles.btnBlue}`}
        onClick={() => toggleTheme('blue')}
      ></button>
      <button
        type="button"
        className={`${styles.circle} ${styles.btnYellow}`}
        onClick={() => toggleTheme('yellow')}
      ></button>
      <button
        type="button"
        className={`${styles.circle} ${styles.btnRed}`}
        onClick={() => toggleTheme('red')}
      ></button>
    </div>
  );
};

export default ThemeSwitcher;
