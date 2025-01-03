import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import ukraine from '../../icons/ukraine.svg';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <header className={styles.header} role="banner">
      <div className={styles.mainWrapper}>
        <Link to="/" className={styles.logoContainer} aria-label="Home">
          <img src={ukraine} alt="Flag of Ukraine" className={styles.logo} />
          <span className={styles.logoName}>learnLingo</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" className={buildActiveClass}>
            Home
          </NavLink>
          <NavLink
            to="/teachers"
            className={buildActiveClass}
            aria-label="Teachers"
          >
            Teachers
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/favorites"
              className={buildActiveClass}
              aria-label="Favorites"
            >
              Favorites
            </NavLink>
          )}
        </nav>
        <ThemeSwitcher />
        <AuthNav />
      </div>
      <MobileMenu />
    </header>
  );
};

export default AppBar;
