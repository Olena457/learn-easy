import styles from './ThemeButton.module.css';

const ThemeButton = ({ theme, toggleTheme, ariaLabel }) => {
  return (
    <button
      type="button"
      className={`${styles.circle} ${
        styles[`btn${theme.charAt(0).toUpperCase() + theme.slice(1)}`]
      }`}
      onClick={() => toggleTheme(theme)}
      aria-label={ariaLabel}
    ></button>
  );
};

export default ThemeButton;
