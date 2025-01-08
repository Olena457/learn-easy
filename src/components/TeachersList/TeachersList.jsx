import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme.js';
import {
  selectTeachersError,
  selectTeachersLoading,
} from '../../redux/teachers/selectorsTeachers.js';
import TeacherItem from '../TeacherItem/TeacherItem.jsx';
import styles from './TeachersList.module.css';
import Loader from '../Loader/Loader.jsx';

const PER_PAGE = 4;

const TeachersList = ({ teachers }) => {
  const { theme } = useTheme();
  const loading = useSelector(selectTeachersLoading);
  const error = useSelector(selectTeachersError);

  const [page, setPage] = useState(1);
  const [visibleTeachers, setVisibleTeachers] = useState(
    teachers.slice(0, page * PER_PAGE) || []
  );

  const isVisible = page * PER_PAGE < teachers.length || false;

  useEffect(() => {
    setVisibleTeachers(teachers.slice(0, page * PER_PAGE) || []);
  }, [teachers, page]);

  const handleShowMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <p role="alert">Error: {error}</p>}

      {!loading && teachers?.length > 0 && (
        <>
          <ul className={styles.list} aria-live="polite" aria-atomic="true">
            {visibleTeachers.map(teacher => (
              <TeacherItem key={teacher.id} teacher={teacher} />
            ))}
          </ul>
          {isVisible && (
            <button
              type="button"
              className={styles.moreBtn}
              onClick={handleShowMore}
              data-theme={theme}
              aria-label="Load more teachers"
            >
              Load more
            </button>
          )}
          {!loading && teachers?.length === 0 && (
            <p className={styles.message}>No teachers found.</p>
          )}
        </>
      )}
    </>
  );
};

export default TeachersList;
