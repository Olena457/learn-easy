import useTheme from '../../hooks/useTheme.js';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <>
        <ThemeButton
          theme="blue"
          currentTheme={theme}
          toggleTheme={toggleTheme}
          ariaLabel="Switch to blue theme"
        />
        <ThemeButton
          theme="yellow"
          currentTheme={theme}
          toggleTheme={toggleTheme}
          ariaLabel="Switch to yellow theme"
        />
        <ThemeButton
          theme="red"
          currentTheme={theme}
          toggleTheme={toggleTheme}
          ariaLabel="Switch to red theme"
        />
      </>
    </div>
  );
};

export default ThemeSwitcher;
