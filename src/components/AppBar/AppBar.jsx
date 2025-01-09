import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import AuthNav from '../AuthNav/AuthNav.jsx';
import clsx from 'clsx';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import ukraine from '../../assets/icons/ukraine.svg';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import styles from './AppBar.module.css';
import HeaderContainer from '../HeaderContainer/HeaderContainer.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';

const AppBar = ({ setTheme }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildActiveClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <>
      <header className={styles.header} role="banner">
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
            <NavLink to="/" className={buildActiveClass} aria-label="Home">
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

          <ThemeSwitcher setTheme={setTheme} />
          <AuthNav />
        </HeaderContainer>
        <MobileMenu />
      </header>
    </>
  );
};

export default AppBar;
