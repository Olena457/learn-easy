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
        aria-label="Switch to blue theme"
        role="button"
      ></button>
      <button
        type="button"
        className={`${styles.circle} ${styles.btnYellow}`}
        onClick={() => toggleTheme('yellow')}
        aria-label="Switch to yellow theme"
        role="button"
      ></button>
      <button
        type="button"
        className={`${styles.circle} ${styles.btnRed}`}
        onClick={() => toggleTheme('red')}
        aria-label="Switch to red theme"
        role="button"
      ></button>
    </div>
  );
};

export default ThemeSwitcher;
