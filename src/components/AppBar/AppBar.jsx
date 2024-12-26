import styles from './AppBar.module.css';
import ukraine from '../../icons/ukraine.svg';
import { Link, NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <header className={styles.header}>
      <div className={styles.mainWrapper}>
        <Link to="/" className={styles.logoContainer}>
          <img src={ukraine} alt="Flag of Ukraine" className={styles.logo} />
          <span className={styles.logoName}>learnLingo</span>
        </Link>
        <nav className={styles.nav}>
          <NavLink to="/" className={buildActiveClass}>
            Home
          </NavLink>
          <NavLink to="/teachers" className={buildActiveClass}>
            Teachers
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/favorites" className={buildActiveClass}>
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