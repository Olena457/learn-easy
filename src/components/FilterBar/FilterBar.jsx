import { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterData } from '../../redux/filters/filterOperations.js';
import {
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
} from '../../redux/filters/filterSlice.js';
import {
  selectLanguages,
  selectLevels,
  selectPrices,
} from '../../redux/filters/filterSelectors.js';
import { selectTeachers } from '../../redux/teachers/selectorsTeachers.js';
import { setFilteredTeachers } from '../../redux/teachers/sliceTeachers.js';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const levels = useSelector(selectLevels);
  const prices = useSelector(selectPrices);
  const teachers = useSelector(selectTeachers);

  const [selectedLanguage, setLanguage] = useState('');
  const [selectedLevel, setLevel] = useState('');
  const [selectedPrice, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const languagesId = useId();
  const levelId = useId();
  const priceId = useId();

  useEffect(() => {
    dispatch(fetchFilterData());
  }, [dispatch]);

  const filterTeachers = (
    teachers,
    selectedLanguage,
    selectedLevel,
    selectedPrice
  ) => {
    return teachers.filter(teacher => {
      const languageMatch = selectedLanguage
        ? teacher.languages.includes(selectedLanguage)
        : true;
      const levelMatch = selectedLevel
        ? teacher.levels.includes(selectedLevel)
        : true;
      const priceMatch = selectedPrice
        ? teacher.price_per_hour === parseInt(selectedPrice)
        : true;
      return languageMatch && levelMatch && priceMatch;
    });
  };

  const handleSearch = () => {
    const filtered = filterTeachers(
      teachers,
      selectedLanguage,
      selectedLevel,
      selectedPrice
    );
    dispatch(setFilteredTeachers(filtered));

    if (filtered.length === 0) {
      setMessage('No selected found ...');
    } else {
      setMessage('');
    }
    setLanguage('');
    setLevel('');
    setPrice('');
  };

  const handleLanguageChange = e => {
    setLanguage(e.target.value);
    dispatch(setSelectedLanguage(e.target.value));
  };

  const handleLevelChange = e => {
    setLevel(e.target.value);
    dispatch(setSelectedLevel(e.target.value));
  };

  const handlePriceChange = e => {
    setPrice(e.target.value);
    dispatch(setSelectedPrice(e.target.value));
  };

  return (
    <div className={styles.wrapper} aria-labelledby="filter-bar-title">
      <ul className={styles.list}>
        <li className={styles.item}>
          <label htmlFor={languagesId} className={styles.label}>
            Languages
          </label>
          <select
            name="language"
            id={languagesId}
            className={styles.select}
            onChange={handleLanguageChange}
            value={selectedLanguage}
          >
            <option value="" aria-label="Select language">
              Select language
            </option>
            {languages.map(lang => (
              <option key={lang} value={lang} aria-label={lang}>
                {lang}
              </option>
            ))}
          </select>
        </li>

        <li className={styles.item}>
          <label htmlFor={levelId} className={styles.label}>
            Level of knowledge
          </label>
          <select
            name="level"
            id={levelId}
            className={styles.select}
            onChange={handleLevelChange}
            value={selectedLevel}
          >
            <option value="" aria-label="Select level">
              Select level
            </option>
            {levels.map(level => (
              <option key={level} value={level} aria-label={level}>
                {level}
              </option>
            ))}
          </select>
        </li>

        <li className={styles.item}>
          <label htmlFor={priceId} className={styles.label}>
            Price
          </label>
          <select
            name="price"
            id={priceId}
            className={styles.select}
            onChange={handlePriceChange}
            value={selectedPrice}
          >
            <option value="" aria-label="Select price">
              Select price
            </option>
            {prices.map(price => (
              <option key={price} value={price} aria-label={price}>
                {price}
              </option>
            ))}
          </select>
        </li>
      </ul>
      <button className={styles.buttonSearch} onClick={handleSearch}>
        Search
      </button>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

export default FilterBar;
