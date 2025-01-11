import { useState } from 'react';
import styles from './MobileMenu.module.css';
import AuthNav from '../AuthNav/AuthNav.jsx';
import MobileNav from '../MobileNav/MobileNav.jsx';
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
            aria-label="mobile menu"
          >
            <Icon
              id="burger"
              role="button"
              width="32"
              height="32"
              className={styles.iconBurger}
              fillColor="#121417"
              inert="falce"
            />
          </button>
          <AuthNav />
        </div>
        <div className={styles.themeWrapper}></div>
        {isOpen && <MobileNav isOpen={isOpen} closeModal={closeModal} />}
      </div>
    </>
  );
};

export default MobileMenu;
