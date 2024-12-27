import { useDispatch, useSelector } from 'react-redux';
import useModal from '../../useModal.js';
import styles from './AuthNav.module.styles';
import logoutIcon from '../../icons/logout.svg';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/auth/selectorsAuth.js';
import { logoutUser } from '../../redux/auth/operationsAuth.js';

import ModalWindow from '../ModalWindow/ModalWindow.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import SignIn from '../SignIn/SignIn.jsx';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { modals, openModal, closeModal } = useModal();
  return (
    <div className={styles.container}>
      {!isLoggedIn && (
        <div className={styles.unsignWrapper}>
          <button
            type="button"
            onClick={() => openModal('signIn')}
            className={styles.buttonLogin}
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              className={styles.logoutIcon}
            />
            <span className={styles.loginText}>log in</span>
          </button>
          <button
            type="button"
            onClick={() => openModal('signUp')}
            className={styles.buttonRegister}
          >
            Registration
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className={styles.signWrapper}>
          <button
            type="button"
            onClick={() => dispatch(logoutUser())}
            className={styles.loginButton}
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              className={styles.logoutIcon}
            />
            <span className={styles.loginText}>Log out</span>
          </button>
          <div className={styles.buttonRegister}>{user?.name || 'User'}</div>
        </div>
      )}
      {modals.signUp && (
        <ModalWindow
          name="signUp"
          customClasses={{ overlay: styles.overlay, modal: styles.modal }}
        >
          <SignUp />
        </ModalWindow>
      )}
      {modals.signIn && (
        <ModalWindow
          name="signIn"
          customClasses={{ overlay: styles.overlay, modal: styles.modal }}
        >
          <SignIn />
        </ModalWindow>
      )}
    </div>
  );
};

export default AuthNav;
