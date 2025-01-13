import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectTeachersError,
  selectTeachersLoading,
} from '../../redux/teachers/selectorsTeachers.js';
import TeacherItem from '../TeacherItem/TeacherItem.jsx';
import styles from './TeachersList.module.css';
import Loader from '../Loader/Loader.jsx';

const PER_PAGE = 4;

const TeachersList = ({ teachers }) => {
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
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   selectTeachersError,
//   selectTeachersLoading,
//   selectFilteredTeachers, // Додано для фільтрації
// } from '../../redux/teachers/selectorsTeachers.js';
// import TeacherItem from '../TeacherItem/TeacherItem.jsx';
// import styles from './TeachersList.module.css';
// import Loader from '../Loader/Loader.jsx';

// const PER_PAGE = 4;

// const TeachersList = ({ teachers }) => {
//   const loading = useSelector(selectTeachersLoading);
//   const error = useSelector(selectTeachersError);
//   const filteredTeachers = useSelector(selectFilteredTeachers); // Додано для фільтрації

//   const [page, setPage] = useState(1);
//   const [visibleTeachers, setVisibleTeachers] = useState(
//     teachers.slice(0, page * PER_PAGE) || []
//   );

//   const isVisible = page * PER_PAGE < teachers.length || false;

//   useEffect(() => {
//     const teachersToDisplay =
//       filteredTeachers.length > 0 ? filteredTeachers : teachers;
//     setVisibleTeachers(teachersToDisplay.slice(0, page * PER_PAGE) || []);
//   }, [teachers, filteredTeachers, page]);

//   const handleShowMore = () => {
//     setPage(prev => prev + 1);
//   };

//   return (
//     <>
//       {loading && <Loader />}
//       {error && <p role="alert">Error: {error}</p>}

//       {!loading && visibleTeachers.length > 0 && (
//         <>
//           <ul className={styles.list} aria-live="polite" aria-atomic="true">
//             {visibleTeachers.map(teacher => (
//               <TeacherItem key={teacher.id} teacher={teacher} />
//             ))}
//           </ul>
//           {isVisible && (
//             <button
//               type="button"
//               className={styles.moreBtn}
//               onClick={handleShowMore}
//               aria-label="Load more teachers"
//             >
//               Load more
//             </button>
//           )}
//           {!loading && visibleTeachers.length === 0 && (
//             <p className={styles.message}>No teachers found.</p>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default TeachersList;
