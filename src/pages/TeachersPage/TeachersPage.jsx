// import css from './TeachersPage.module.css';
// import FilterBar from '../../components/FilterBar/FilterBar.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectTeachers,
//   selectTeachersLoading,
// } from '../../redux/teachers/selectorsTeachers.js';
// import TeachersList from '../../components/TeachersList/TeachersList.jsx';
// import Loader from '../../components/Loader/Loader.jsx';
// import { useEffect } from 'react';
// import { fetchTeachers } from '../../redux/teachers/operationsTeachers.js';

// const TeachersPage = () => {
//   const teachers = useSelector(selectTeachers);
//   const isLoading = useSelector(selectTeachersLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTeachers());
//   }, [dispatch]);

//   return (
//     <main className={css.main}>
//       <>
//         <FilterBar />
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <TeachersList teachers={teachers} element={<TeachersPage />} />
//         )}
//       </>
//     </main>
//   );
// };

// export default TeachersPage;
// import css from './TeachersPage.module.css';
// // import FilterBar from '../../components/FilterBar/FilterBar.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   selectTeachers,
//   selectTeachersLoading,
//   // Додайте селектор для фільтрованих вчителів
// } from '../../redux/teachers/selectorsTeachers.js';
// import TeachersList from '../../components/TeachersList/TeachersList.jsx';
// import Loader from '../../components/Loader/Loader.jsx';
// import { useEffect } from 'react';
// import { fetchTeachers } from '../../redux/teachers/operationsTeachers.js';

// const TeachersPage = () => {
//   const teachers = useSelector(selectTeachers);
//   const isLoading = useSelector(selectTeachersLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchTeachers());
//   }, [dispatch]);

//   const displayedTeachers =
//     filteredTeachers.length > 0 ? filteredTeachers : teachers;

//   return (
//     <main className={css.main}>
//       <>
//         {/* <FilterBar /> */}
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <TeachersList
//             teachers={displayedTeachers}
//             element={<TeachersPage />}
//           />
//         )}
//       </>
//     </main>
//   );
// };

// export default TeachersPage;
import css from './TeachersPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTeachers,
  selectTeachersLoading,
} from '../../redux/teachers/selectorsTeachers.js';
import TeachersList from '../../components/TeachersList/TeachersList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchTeachers } from '../../redux/teachers/operationsTeachers.js';

const TeachersPage = () => {
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectTeachersLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  return (
    <main className={css.main}>
      {isLoading ? (
        <Loader />
      ) : (
        <TeachersList teachers={teachers} element={<TeachersPage />} />
      )}
    </main>
  );
};

export default TeachersPage;
