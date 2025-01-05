// import useTheme from '../../contextTheme/useTheme.js';
// import styles from './ThemeSwitcher.module.css';

// const ThemeSwitcher = () => {
//   const { toggleTheme } = useTheme();

//   return (
//     <div className={styles.themeSwitcher}>
//       <button
//         type="button"
//         className={`${styles.circle} ${styles.btnBlue}`}
//         onClick={() => toggleTheme('blue')}
//         aria-label="Switch to blue theme"
//         role="button"
//       ></button>
//       <button
//         type="button"
//         className={`${styles.circle} ${styles.btnYellow}`}
//         onClick={() => toggleTheme('yellow')}
//         aria-label="Switch to yellow theme"
//         role="button"
//       ></button>
//       <button
//         type="button"
//         className={`${styles.circle} ${styles.btnRed}`}
//         onClick={() => toggleTheme('red')}
//         aria-label="Switch to red theme"
//         role="button"
//       ></button>
//     </div>
//   );
// };

// export default ThemeSwitcher;
import useTheme from '../../hooks/useTheme.js';
import ThemeButton from '../ThemeButton/ThemeButton.jsx';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={styles.themeSwitcher}>
      <ThemeButton
        theme="blue"
        toggleTheme={toggleTheme}
        ariaLabel="Switch to blue theme"
      />
      <ThemeButton
        theme="yellow"
        toggleTheme={toggleTheme}
        ariaLabel="Switch to yellow theme"
      />
      <ThemeButton
        theme="red"
        toggleTheme={toggleTheme}
        ariaLabel="Switch to red theme"
      />
    </div>
  );
};

export default ThemeSwitcher;
