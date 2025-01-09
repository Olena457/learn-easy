import styles from './ThemeButton.module.css';

const ThemeButton = ({ theme, setTheme, ariaLabel }) => {
  const handleClick = () => {
    setTheme(theme);
  };

  return (
    <button
      type="button"
      className={`${styles.circle} ${
        styles[`btn${theme.charAt(0).toUpperCase() + theme.slice(1)}`]
      }`}
      onClick={handleClick}
      aria-label={ariaLabel}
    ></button>
  );
};

export default ThemeButton;
