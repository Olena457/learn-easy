import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useId, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import * as yup from 'yup';
import styles from './SignUp.module.css';
import Icon from '../Icon/Icon.jsx';
import eyeIcon from '../../icons/eye.svg';
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
      <h2 className={styles.title}>Registration</h2>
      <p className={styles.text}>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.nameWrapper}>
          <input
            id={nameId}
            {...register('name')}
            placeholder="Name"
            className={clsx(styles.input, styles.name)}
          />
          <p className={styles.errorText}>{errors.name?.message}</p>
        </div>

        <div className={styles.emailWrapper}>
          <input
            id={emailId}
            {...register('email')}
            placeholder="Email"
            className={clsx(styles.input, styles.email)}
          />
          <p className={styles.errorText}>{errors.email?.message}</p>
        </div>

        <div className={styles.passwordWrapper}>
          <input
            id={passwordId}
            type={isPassword ? 'password' : 'text'}
            {...register('password', { required: true })}
            placeholder="Password"
            className={clsx(styles.input, styles.password)}
          />

          <button
            type="button"
            onClick={togglePassword}
            className={styles.eyeBtn}
          >
            {isPassword ? (
              <img src={eyeIcon} alt="eye" className="eye" aria-hidden="true" />
            ) : (
              <Icon
                id="eye"
                width={20}
                height={20}
                className={styles.eye}
                fillColor="#121417"
                ariaHidden="true"
              />
            )}
          </button>
          {errors.password && (
            <p className={styles.errorText}>{errors.password?.message}</p>
          )}
        </div>

        <button type="submit" className={styles.submitBtn}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default SignUp;
