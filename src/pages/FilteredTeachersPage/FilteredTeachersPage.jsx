import { useSelector } from 'react-redux';
import { selectFilteredTeachers } from '../../redux/teachers/selectorsTeachers.js';
import FilterBar from '../../components/FilterBar/FilterBar.jsx';
import TeacherItem from '../../components/TeacherItem/TeacherItem.jsx';
import styles from './FilteredTeachersPage.module.css';

const FilteredTeachersPage = () => {
  const filteredTeachers = useSelector(selectFilteredTeachers);

  return (
    <main className={styles.main}>
      <FilterBar />
      <div className={styles.cardsContainer}>
        {filteredTeachers.length > 0 &&
          filteredTeachers.map(teacher => (
            <TeacherItem key={teacher.id} teacher={teacher} />
          ))}
      </div>
    </main>
  );
};

export default FilteredTeachersPage;
