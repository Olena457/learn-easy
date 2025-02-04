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
