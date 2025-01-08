import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import ukraine from '../../assets/icons/ukraine.svg';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import useTheme from '../../hooks/useTheme.js';
import styles from './AppBar.module.css';
import HeaderContainer from '../HeaderContainer/HeaderContainer.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { theme, toggleTheme } = useTheme();

  const buildActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <header className={`${styles.header} ${styles[theme]}`} role="banner">
      <HeaderContainer className={styles.header} role="banner">
        <Link to="/" className={styles.logoContainer}>
          <img
            src={ukraine}
            alt="Flag of Ukraine"
            className={styles.logo}
            role="img"
          />
          <span className={styles.logoName}>learnLingo</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={buildActiveClass}
            aria-label="Home"
            data-theme={theme}
          >
            Home
          </NavLink>
          <NavLink
            to="/teachers"
            className={buildActiveClass}
            aria-label="Teachers"
            data-theme={theme}
          >
            Teachers
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/favorites"
              className={buildActiveClass}
              aria-label="Favorites"
              data-theme={theme}
            >
              Favorites
            </NavLink>
          )}
        </nav>

        <ThemeSwitcher toggleTheme={toggleTheme} />
        <AuthNav data-theme={theme} />
      </HeaderContainer>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
