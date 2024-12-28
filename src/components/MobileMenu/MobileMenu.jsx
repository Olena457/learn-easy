import Icon from '../Icon/Icon.jsx';
import css from './MobileMenu.module.css';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import useModal from '../../contextModal/useModal.js';

const MobileMenu = () => {
  const { openModal } = useModal(); // Використання контексту

  return (
    <div className={css.mobileWrapper}>
      <div className={css.wrapper}>
        <button
          type="button"
          onClick={() => openModal('mobileMenu')}
          className={css.burgerBtn}
        >
          <Icon
            id="burger"
            width="32"
            height="32"
            className={css.icon}
            fillColor="#121417"
            ariaHidden={false}
          />
        </button>
        <AuthNav />
      </div>
      <div className={css.themeWrapper}>
        <ThemeSwitcher />
      </div>
      <MobileNav name="mobileMenu" />
    </div>
  );
};

export default MobileMenu;
