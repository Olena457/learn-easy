import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useId, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';
import styles from './SignUp.module.css';
import Icon from '../Icon/Icon.jsx';
import eyeIcon from '../../assets/icons/eye.svg';
import { toast } from 'react-toastify';
import { registerUser } from '../../redux/auth/operationsAuth.js';
const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

const minPasswordLength = 7;
const maxPasswordLength = 22;

const signUpSchema = yup.object({
  name: yup.string().required('Name is required'),

  email: yup
    .string()
    .required('Email is required!')
    .matches(emailRegExp, 'Email address is not valid')
    .email('Please enter a valid email address!'),

  password: yup
    .string()
    .required('Password is required!')
    .min(minPasswordLength, 'Too short')
    .max(maxPasswordLength, 'Too long'),
});

const SignUp = ({ modalClose }) => {
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const togglePassword = () => setIsPassword(!isPassword);

  const onSubmit = async data => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() =>
        toast.success('User registered successfully!', {
          position: 'top-center',
        })
      )
      .catch(errMessage => {
        toast.error(errMessage, {
          position: 'top-center',
        });
      })
      .finally(() => {
        reset();
        modalClose();
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title} id="sign-up-title">
        Registration
      </h2>
      <p className={styles.text} id="sign-up-description">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-labelledby="sign-up-title"
        aria-describedby="sign-up-description"
      >
        <div className={styles.nameWrapper}>
          <label htmlFor={nameId} className={styles.label}>
            Name
          </label>
          <input
            id={nameId}
            {...register('name')}
            placeholder="Name"
            className={clsx(styles.input, styles.name)}
            aria-required="true"
          />
          <p className={styles.errorText}>{errors.name?.message}</p>
        </div>

        <div className={styles.emailWrapper}>
          <label htmlFor={emailId} className={styles.label}>
            Email
          </label>
          <input
            id={emailId}
            {...register('email')}
            placeholder="Email"
            className={clsx(styles.input, styles.email)}
            autoComplete="email"
            aria-required="true"
          />
          <p className={styles.errorText}>{errors.email?.message}</p>
        </div>

        <div className={styles.passwordWrapper}>
          <label htmlFor={passwordId} className={styles.label}>
            Password
          </label>
          <input
            id={passwordId}
            type={isPassword ? 'password' : 'text'}
            {...register('password', { required: true })}
            placeholder="Password"
            className={clsx(styles.input, styles.password)}
            autoComplete="current-password"
            aria-required="true"
          />
          <button
            type="button"
            onClick={togglePassword}
            className={styles.eyeBtn}
            aria-label={isPassword ? 'Show password' : 'Hide password'}
          >
            {isPassword ? (
              <img src={eyeIcon} alt="eye icon" className="eye" />
            ) : (
              <Icon
                id="eye"
                aria-label="Hide password"
                width={20}
                height={20}
                className={styles.eye}
                role="button"
                fillColor="#121417"
                inert="falce"
              />
            )}
          </button>
          {errors.password && (
            <p className={styles.errorText}>{errors.password?.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitBtn} aria-label="log in">
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
