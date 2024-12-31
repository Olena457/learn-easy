import { useEffect } from 'react';
import styles from './MobileNav.module.css';
import clsx from 'clsx';
import Modal from 'react-modal';
import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { NavLink } from 'react-router-dom';

const MobileNav = ({ isOpen, closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    document.body.classList.add(styles.modalOpen);

    return () => {
      document.body.classList.remove(styles.modalOpen);
    };
  }, []);

  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Mobile Menu"
      >
        <button className={styles.closeBtn} onClick={closeModal}>
          <Icon id="close" width="32" height="32" />
        </button>

        <nav className={styles.burgerNav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink to="/" className={buildLinkClass} onClick={closeModal}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/teachers"
                className={buildLinkClass}
                onClick={closeModal}
              >
                Teachers
              </NavLink>
            </li>
            {isLoggedIn && (
              <li className={styles.item}>
                <NavLink
                  to="/favorites"
                  className={buildLinkClass}
                  onClick={closeModal}
                >
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Modal>
    </>
  );
};

export default MobileNav;
// __________________________________________________________________
// import { useLayoutEffect } from 'react';
// import styles from './MobileNav.module.css';
// import clsx from 'clsx';
// import Modal from 'react-modal';
// import Icon from '../Icon/Icon.jsx';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
// import { NavLink } from 'react-router-dom';

// const MobileNav = ({ isOpen, closeModal }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   useLayoutEffect(() => {
//     if (isOpen) {
//       document.body.classList.add(styles.modalOpen);
//       document.getElementById('root').setAttribute('aria-hidden', 'true');
//       document.getElementById('modal-content').focus();
//     } else {
//       document.body.classList.remove(styles.modalOpen);
//       document.getElementById('root').removeAttribute('aria-hidden');
//     }
//   }, [isOpen]);

//   const buildLinkClass = ({ isActive }) => {
//     return clsx(styles.link, isActive && styles.active);
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       className={styles.modal}
//       overlayClassName={styles.overlay}
//       contentLabel="Mobile Menu"
//     >
//       <div id="modal-content" tabIndex="-1" className={styles.modalContainer}>
//         <button type="button" onClick={closeModal} className={styles.closeBtn}>
//           <Icon id="close" width="32" height="32" />
//         </button>

//         <nav className={styles.burgerNav}>
//           <ul className={styles.list}>
//             <li className={styles.item}>
//               <NavLink to="/" className={buildLinkClass} onClick={closeModal}>
//                 Home
//               </NavLink>
//             </li>
//             <li className={styles.item}>
//               <NavLink
//                 to="/teachers"
//                 className={buildLinkClass}
//                 onClick={closeModal}
//               >
//                 Teachers
//               </NavLink>
//             </li>
//             {isLoggedIn && (
//               <li className={styles.item}>
//                 <NavLink
//                   to="/favorites"
//                   className={buildLinkClass}
//                   onClick={closeModal}
//                 >
//                   Favorites
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </div>
//     </Modal>
//   );
// };

// export default MobileNav;
