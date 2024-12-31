import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import { fetchFilterData } from '../../redux/filter/filterOperations.js';
import {
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
} from '../../redux/filter/filterSlice.js';
import {
  selectLanguages,
  selectLevels,
  selectPrices,
} from '../../redux/filter/filterSelectors.js';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  const dispatch = useDispatch();
  const languages = useSelector(selectLanguages);
  const levels = useSelector(selectLevels);
  const prices = useSelector(selectPrices);
  const status = useSelector(state => state.filters.status);
  const error = useSelector(state => state.filters.error);

  const languagesId = useId();
  const levelId = useId();
  const priceId = useId();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFilterData());
    }
  }, [dispatch, status]);

  const handleLanguageChange = e => {
    dispatch(setSelectedLanguage(e.target.value));
  };

  const handleLevelChange = e => {
    dispatch(setSelectedLevel(e.target.value));
  };

  const handlePriceChange = e => {
    dispatch(setSelectedPrice(e.target.value));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.wrapper}>
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
          >
            <option value="">Select Language</option>
            {languages.map(language => (
              <option key={language} value={language.toLowerCase()}>
                {language}
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
          >
            <option value="">Select Level</option>
            {levels.map(level => (
              <option key={level} value={level.toLowerCase().replace(' ', '-')}>
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
          >
            <option value="">Select Price</option>
            {prices.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
