import styles from './BookModal.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { bookTeacher } from '../../redux/teachers/operationsTeachers.js';
import { toast } from 'react-toastify';

const emailRegExp = /^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
const phoneNumberRegExp = /^\+?[\d\s-]{7,15}$/;

const bookSchema = yup.object({
  question: yup.string().required('Please select an option!'),
  fullname: yup.string().required('Name is required!'),
  email: yup
    .string()
    .required('Email is requred!')
    .matches(emailRegExp, 'Email is not valid.')
    .email('Email is not valid.'),
  phoneNumber: yup
    .string()
    .required('Phone number is required!')
    .matches(
      phoneNumberRegExp,
      'The phone number format +XX XXXXX XXXXX. Must contain hyphens and spaces.'
    ),
});

const BookModal = ({ modalClose, teacher }) => {
  const dispatch = useDispatch();

  const fullnameId = useId();
  const emailId = useId();
  const phoneNumberId = useId();
  const careerId = useId();
  const lessonId = useId();
  const abroadId = useId();
  const examsId = useId();
  const cultureId = useId();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookSchema),
    defaultValues: {
      fullname: '',
      email: '',
      phoneNumber: '',
      question: '',
    },
  });

  const onSubmit = data => {
    dispatch(bookTeacher({ ...data, teacherID: teacher.id }))
      .unwrap()
      .then(() =>
        toast.success('Booking request sent!', {
          position: 'top-center',
        })
      )
      .catch(() => {
        toast.error('Error. Try again later.', {
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
      <h3 className={styles.title} id="book-modal-title">
        Book trial lesson
      </h3>
      <p className={styles.text} id="book-modal-description">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>

      <div className={styles.imageWrapper}>
        <img
          src={teacher['avatar_url']}
          alt={`${teacher.name} ${teacher.surname}`}
          className={styles.image}
        />
        <div className={styles.imageTextWrapper}>
          <h6 className={styles.imageTitle}>Your teacher</h6>
          <p
            className={styles.imageText}
          >{`${teacher.name} ${teacher.surname}`}</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        aria-labelledby="book-modal-title"
        aria-describedby="book-modal-description"
      >
        <div className={styles.fieldsetWrapper}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              What is your main reason for learning English?
            </legend>

            <div className={styles.radioWrapper}>
              <>
                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="career"
                    id={careerId}
                    className={styles.radio}
                    aria-labelledby={`career-label`}
                  />
                  <label
                    htmlFor={careerId}
                    className={styles.label}
                    id={`career-label`}
                  >
                    Career and business
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="lesson"
                    id={lessonId}
                    className={styles.radio}
                    aria-labelledby={`lesson-label`}
                  />
                  <label
                    htmlFor={lessonId}
                    className={styles.label}
                    id={`lesson-label`}
                  >
                    Lesson for kids{' '}
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="abroad"
                    id={abroadId}
                    className={styles.radio}
                    aria-labelledby={`abroad-label`}
                  />
                  <label
                    htmlFor={abroadId}
                    className={styles.label}
                    id={`abroad-label`}
                  >
                    Living abroad{' '}
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="exams"
                    id={examsId}
                    className={styles.radio}
                    aria-labelledby={`exams-label`}
                  />
                  <label
                    htmlFor={examsId}
                    className={styles.label}
                    id={`exams-label`}
                  >
                    Exams and coursework{' '}
                  </label>
                </div>

                <div className={styles.inputWrapper}>
                  <input
                    {...register('question')}
                    type="radio"
                    value="culture"
                    id={cultureId}
                    className={styles.radio}
                    aria-labelledby={`culture-label`}
                  />
                  <label
                    htmlFor={cultureId}
                    className={styles.label}
                    id={`culture-label`}
                  >
                    Culture, travel or hobby{' '}
                  </label>
                </div>
              </>
            </div>
          </fieldset>

          <p className={styles.errorText}>{errors.question?.message}</p>
        </div>

        <div className={styles.userInfo}>
          <>
            <div className={styles.nameWrapper}>
              <label htmlFor={fullnameId} className={styles.label}>
                Full name
              </label>
              <input
                id={fullnameId}
                {...register('fullname')}
                className={styles.input}
                placeholder="Full name"
                aria-required="true"
              />
              <p className={styles.errorText}>{errors.fullname?.message}</p>
            </div>

            <div className={styles.emailWrapper}>
              <label htmlFor={emailId} className={styles.label}>
                Email
              </label>
              <input
                id={emailId}
                {...register('email')}
                className={styles.input}
                placeholder="Email"
                autoComplete="email"
                aria-required="true"
              />
              <p className={styles.errorText}>{errors.email?.message}</p>
            </div>

            <div className={styles.dateWrapper}>
              <label htmlFor={phoneNumberId} className={styles.label}>
                Phone number
              </label>
              <input
                id={phoneNumberId}
                {...register('phoneNumber')}
                className={styles.input}
                placeholder="Phone number"
                aria-required="true"
              />
              <p className={styles.errorText}>{errors.phoneNumber?.message}</p>
            </div>
          </>
        </div>

        <button type="submit" className={styles.submitBtn} aria-label="book">
          Book
        </button>
      </form>
    </div>
  );
};

export default BookModal;
