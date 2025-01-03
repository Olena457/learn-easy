import { useState } from 'react';
import styles from './MobileMenu.module.css';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.jsx';
import Icon from '../Icon/Icon.jsx';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className={styles.mobileWrapper}>
        <div className={styles.wrapper}>
          <button
            type="button"
            onClick={openModal}
            className={styles.burgerBtn}
          >
            <Icon
              id="burger"
              width="32"
              height="32"
              className={styles.icon}
              fillColor="#121417"
              role="button"
            />
          </button>
          <AuthNav />
        </div>
        <div className={styles.themeWrapper}>
          <ThemeSwitcher />
        </div>
        {isOpen && <MobileNav isOpen={isOpen} closeModal={closeModal} />}
      </div>
    </>
  );
};

export default MobileMenu;
