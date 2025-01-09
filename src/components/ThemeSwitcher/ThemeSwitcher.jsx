import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({ setTheme }) => {
  return (
    <div className={styles.themeSwitcher}>
      <ThemeButton
        theme="blue"
        setTheme={setTheme}
        ariaLabel="Switch to  blue"
      />
      <ThemeButton
        theme="yellow"
        setTheme={setTheme}
        ariaLabel="Switch to yellow theme"
      />
      <ThemeButton
        theme="red"
        setTheme={setTheme}
        ariaLabel="Switch to red theme"
      />
    </div>
  );
};

export default ThemeSwitcher;
