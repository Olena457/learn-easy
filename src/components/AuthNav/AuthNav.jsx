import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './AuthNav.module.css';
import logoutIcon from '../../assets/icons/logout.svg';
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
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignUpOpen = () => setIsSignUpOpen(true);
  const handleSignInOpen = () => setIsSignInOpen(true);

  const handleSignUpClose = () => setIsSignUpOpen(false);
  const handleSignInClose = () => setIsSignInOpen(false);

  return (
    <>
      {!isLoggedIn && (
        <div className={styles.unWrapper}>
          <button
            type="button"
            onClick={handleSignInOpen}
            className={styles.loginButton}
            aria-label="log out"
          >
            <img
              role="button"
              src={logoutIcon}
              alt="Logout icon"
              className={styles.logoutIcon}
              inert="false"
            />
            <span className={styles.loginText}>Log in</span>
          </button>

          <button
            type="button"
            onClick={handleSignUpOpen}
            className={styles.buttonRegister}
            aria-label="registration"
          >
            Registration
          </button>
        </div>
      )}

      {isLoggedIn && (
        <div className={styles.sigWrapper}>
          <button
            type="button"
            onClick={() => dispatch(logoutUser())}
            className={styles.buttonLogin}
            aria-label="log out"
          >
            <img
              src={logoutIcon}
              alt="Logout icon"
              className={`logoutIcon ${styles.logoutIcon}`}
              role="button"
              inert="false"
            />
            <span className={styles.loginText}>Log out</span>
          </button>

          <div className={styles.buttonRegister}>{user?.name || 'User'}</div>
        </div>
      )}
      <>
        {isSignUpOpen && (
          <ModalWindow
            onCloseModal={handleSignUpClose}
            modalIsOpen={isSignUpOpen}
          >
            <SignUp modalClose={handleSignUpClose} />
          </ModalWindow>
        )}

        {isSignInOpen && (
          <ModalWindow
            onCloseModal={handleSignInClose}
            modalIsOpen={isSignInOpen}
          >
            <SignIn modalClose={handleSignInClose} />
          </ModalWindow>
        )}
      </>
    </>
  );
};

export default AuthNav;
