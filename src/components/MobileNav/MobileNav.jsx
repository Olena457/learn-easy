import { useEffect } from 'react';
import css from './MobileNav.module.css';
import ReactModal from 'react-modal';
import clsx from 'clsx';
import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { NavLink } from 'react-router-dom';
import useModal from '../../contextModal/useModal.js';

const MobileNav = ({ name }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { modals, closeModal } = useModal(); //contecst
  useEffect(() => {
    if (modals[name]) {
      document.body.classList.add(css.modalOpen);
    } else {
      document.body.classList.remove(css.modalOpen);
    }

    return () => {
      document.body.classList.remove(css.modalOpen);
    };
  }, [modals, name]);

  const buildActiveClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <ReactModal
      isOpen={modals[name]}
      onRequestClose={() => closeModal(name)}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Mobile Menu"
      ariaHideApp={false}
    >
      <button className={css.closeBtn} onClick={() => closeModal(name)}>
        <Icon id="close" width="32" height="32" ariaHidden={false} />
      </button>

      <nav className={css.burgerNav}>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink
              to="/"
              className={buildActiveClass}
              onClick={() => closeModal(name)}
            >
              Home
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink
              to="/teachers"
              className={buildActiveClass}
              onClick={() => closeModal(name)}
            >
              Teachers
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={css.item}>
              <NavLink
                to="/favorites"
                className={buildActiveClass}
                onClick={() => closeModal(name)}
              >
                Favorites
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </ReactModal>
  );
};

export default MobileNav;
