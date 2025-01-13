// import { useEffect } from 'react';
// import styles from './MobileNav.module.css';
// import clsx from 'clsx';
// import Modal from 'react-modal';
// import Icon from '../Icon/Icon.jsx';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
// import { NavLink } from 'react-router-dom';

// const MobileNav = ({ isOpen, closeModal }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   useEffect(() => {
//     document.body.classList.add(styles.modalOpen);

//     return () => {
//       document.body.classList.remove(styles.modalOpen);
//     };
//   }, []);

//   const buildLinkClass = ({ isActive }) => {
//     return clsx(styles.link, isActive && styles.active);
//   };

//   return (
//     <>
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={closeModal}
//         className={styles.modal}
//         overlayClassName={styles.overlay}
//         contentLabel="Mobile Menu"
//         ariaHideApp={false}
//       >
//         <button
//           type="button"
//           className={styles.closeBtn}
//           onClick={closeModal}
//           aria-label="Close menu"
//         >
//           <Icon id="close" width={32} height={32} role="button" inert="false" />
//         </button>

//         <nav className={styles.burgerNav}>
//           <ul className={styles.list}>
//             <li className={styles.item}>
//               <NavLink
//                 to="/"
//                 className={buildLinkClass}
//                 onClick={closeModal}
//                 aria-label="Home"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className={styles.item}>
//               <NavLink
//                 to="/teachers"
//                 className={buildLinkClass}
//                 onClick={closeModal}
//                 aria-label="Teachers"
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
//                   aria-label="Favorites"
//                 >
//                   Favorites
//                 </NavLink>
//               </li>
//             )}
//           </ul>
//         </nav>
//       </Modal>
//     </>
//   );
// };

// export default MobileNav;
import { useEffect } from 'react';
import styles from './MobileNav.module.css';
import clsx from 'clsx';
import Modal from 'react-modal';
import Icon from '../Icon/Icon.jsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectorsAuth.js';
import { selectTeachers } from '../../redux/teachers/selectorsTeachers.js'; // Імпорт селектора для вчителів
import { NavLink } from 'react-router-dom';

const MobileNav = ({ isOpen, closeModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const teachers = useSelector(selectTeachers); // Завантажені вчителі

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
        ariaHideApp={false}
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={closeModal}
          aria-label="Close menu"
        >
          <Icon id="close" width={32} height={32} role="button" inert="false" />
        </button>

        <nav className={styles.burgerNav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/"
                className={buildLinkClass}
                onClick={closeModal}
                aria-label="Home"
              >
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/teachers"
                className={buildLinkClass}
                onClick={closeModal}
                aria-label="Teachers"
              >
                Teachers
              </NavLink>
            </li>
            {teachers.length > 0 && (
              <li className={styles.item}>
                <NavLink
                  to="/filter"
                  className={buildLinkClass}
                  onClick={closeModal}
                  aria-label="Filtered Teachers"
                >
                  Filter
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li className={styles.item}>
                <NavLink
                  to="/favorites"
                  className={buildLinkClass}
                  onClick={closeModal}
                  aria-label="Favorites"
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
