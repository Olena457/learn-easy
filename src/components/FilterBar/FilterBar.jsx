// import { useId } from 'react';
// import styles from './FilterBar.module.css';

// const FilterBar = () => {
//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>

//           <select name="language" id={languagesId} className={styles.select}>
//             <option value="french" aria-label="French">
//               French
//             </option>
//             <option value="english" aria-label="English">
//               English
//             </option>
//             <option value="ukrainian" aria-label="Ukrainian">
//               Ukrainian
//             </option>
//             <option value="polish" aria-label="Polish">
//               Polish
//             </option>
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>

//           <select name="level" id={levelId} className={styles.select}>
//             <option value="a1" aria-label="A1 Beginner">
//               A1 Beginner
//             </option>
//             <option value="a2" aria-label="A2 Elementary">
//               A2 Elementary
//             </option>
//             <option value="b1" aria-label="B1 Intermediate">
//               B1 Intermediate
//             </option>
//             <option value="b2" aria-label="B2 Upper-Intermediate">
//               B2 Upper-Intermediate
//             </option>
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>

//           <select name="price" id={priceId} className={styles.select}>
//             <option value="10" aria-label="10">
//               10
//             </option>
//             <option value="20" aria-label="20">
//               20
//             </option>
//             <option value="30" aria-label="30">
//               30
//             </option>
//             <option value="40" aria-label="40">
//               40
//             </option>
//           </select>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FilterBar;
// ______________________________________________________________
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchFilterData,
//   fetchFilteredTeachers,
// } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import styles from './FilterBar.module.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const handleSearch = () => {
//     dispatch(
//       fetchFilteredTeachers({ selectedLanguage, selectedLevel, selectedPrice })
//     );
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//           >
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//           >
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//           >
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button className={styles.buttonSearch} onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default FilterBar;
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchFilterData,
//   fetchFilteredTeachers,
// } from '../filters/filterOperations';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../filters/filterSlice';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../filters/selectors';
// import { selectTeachers, selectTeachersLoading } from '../teachers/selectors';
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const teachers = useSelector(selectTeachers);
//   const loading = useSelector(selectTeachersLoading);

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const handleSearch = () => {
//     dispatch(
//       fetchFilteredTeachers({ selectedLanguage, selectedLevel, selectedPrice })
//     )
//       .then(result => {
//         if (result.payload.teachers.length === 0) {
//           toast.info('No teachers found for the selected criteria.');
//         } else {
//           toast.success('Teachers found.');
//         }
//         setLanguage('');
//         setLevel('');
//         setPrice('');
//       })
//       .catch(() => {
//         toast.error('An error occurred while searching for teachers.');
//       });
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.button}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default FilterBar;
// філтрація тільки поціні________________________________
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchFilterData,
//   fetchFilteredTeachers,
// } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import { selectTeachersLoading } from '../../redux/teachers/selectorsTeachers.js';
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const loading = useSelector(selectTeachersLoading);

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const handleSearch = () => {
//     dispatch(
//       fetchFilteredTeachers({ selectedLanguage, selectedLevel, selectedPrice })
//     )
//       .then(result => {
//         if (result.payload.teachers.length === 0) {
//           toast.info('No teachers found for the selected criteria.');
//         } else {
//           toast.success('Teachers found.');
//         }
//         setLanguage('');
//         setLevel('');
//         setPrice('');
//       })
//       .catch(() => {
//         toast.error('An error occurred while searching for teachers.');
//       });
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.buttonSearch}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default FilterBar;
//__________________________________________________ цей код працює вірно !!!!!!
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFilterData } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import {
//   selectTeachersLoading,
//   selectTeachers,
// } from '../../redux/teachers/selectorsTeachers.js';
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const loading = useSelector(selectTeachersLoading);
//   const teachers = useSelector(selectTeachers); // Завантажені вчителі

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');
//   const [filteredTeachers, setFilteredTeachers] = useState([]); // Додаємо стан для фільтрованих вчителів

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const filterTeachers = (
//     teachers,
//     selectedLanguage,
//     selectedLevel,
//     selectedPrice
//   ) => {
//     return teachers.filter(teacher => {
//       const languageMatch = selectedLanguage
//         ? teacher.languages.includes(selectedLanguage)
//         : true;
//       const levelMatch = selectedLevel
//         ? teacher.levels.includes(selectedLevel)
//         : true;
//       const priceMatch = selectedPrice
//         ? teacher.price_per_hour === parseInt(selectedPrice)
//         : true;
//       return languageMatch && levelMatch && priceMatch;
//     });
//   };

//   const handleSearch = () => {
//     const filtered = filterTeachers(
//       teachers,
//       selectedLanguage,
//       selectedLevel,
//       selectedPrice
//     );
//     setFilteredTeachers(filtered); // Оновлюємо стан з фільтрованими вчителями

//     if (filtered.length === 0) {
//       toast.info('No teachers found for the selected criteria.');
//     } else {
//       toast.success('Teachers found.');
//       console.log('Filtered Teachers:', filtered); // Використовуйте фільтрованих вчителів далі у вашому коді
//     }

//     setLanguage('');
//     setLevel('');
//     setPrice('');
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.button}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />

//       {/* Додайте відображення фільтрованих вчителів */}
//       <div>
//         {filteredTeachers.map(teacher => (
//           <div key={teacher.id}>
//             <h3>
//               {teacher.name} {teacher.surname}
//             </h3>
//             <p>Languages: {teacher.languages.join(', ')}</p>
//             <p>Levels: {teacher.levels.join(', ')}</p>
//             <p>Price per hour: {teacher.price_per_hour}</p>
//             {/* Додайте іншу інформацію про вчителя */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
// код зверху працює вірно ______________________/////////////////////////////
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchFilterData } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import {
//   selectTeachersLoading,
//   selectTeachers,
// } from '../../redux/teachers/selectorsTeachers.js';
// import TeacherItem from '../TeacherItem/TeacherItem';
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const loading = useSelector(selectTeachersLoading);
//   const teachers = useSelector(selectTeachers); // Завантажені вчителі

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');
//   const [filteredTeachers, setFilteredTeachers] = useState([]); // Додаємо стан для фільтрованих вчителів

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const filterTeachers = (
//     teachers,
//     selectedLanguage,
//     selectedLevel,
//     selectedPrice
//   ) => {
//     return teachers.filter(teacher => {
//       const languageMatch = selectedLanguage
//         ? teacher.languages.includes(selectedLanguage)
//         : true;
//       const levelMatch = selectedLevel
//         ? teacher.levels.includes(selectedLevel)
//         : true;
//       const priceMatch = selectedPrice
//         ? teacher.price_per_hour === parseInt(selectedPrice)
//         : true;
//       return languageMatch && levelMatch && priceMatch;
//     });
//   };

//   const handleSearch = () => {
//     const filtered = filterTeachers(
//       teachers,
//       selectedLanguage,
//       selectedLevel,
//       selectedPrice
//     );
//     setFilteredTeachers(filtered); // Оновлюємо стан з фільтрованими вчителями

//     if (filtered.length === 0) {
//       toast.info('No teachers found for the selected criteria.');
//     } else {
//       toast.success('Teachers found.');
//       console.log('Filtered Teachers:', filtered); // Використовуйте фільтрованих вчителів далі у вашому коді
//     }

//     setLanguage('');
//     setLevel('');
//     setPrice('');
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.button}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />

//       <div className={styles.cardsContainer}>
//         {filteredTeachers.map(teacher => (
//           <TeacherItem key={teacher.id} teacher={teacher} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
// цей працює віірно __________________________________
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchFilterData } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import {
//   selectTeachersLoading,
//   selectTeachers,
// } from '../../redux/teachers/selectorsTeachers.js';
// import { setFilteredTeachers } from '../../redux/teachers/sliceTeachers.js'; // Вірний імпорт
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const loading = useSelector(selectTeachersLoading);
//   const teachers = useSelector(selectTeachers);

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const filterTeachers = (
//     teachers,
//     selectedLanguage,
//     selectedLevel,
//     selectedPrice
//   ) => {
//     return teachers.filter(teacher => {
//       const languageMatch = selectedLanguage
//         ? teacher.languages.includes(selectedLanguage)
//         : true;
//       const levelMatch = selectedLevel
//         ? teacher.levels.includes(selectedLevel)
//         : true;
//       const priceMatch = selectedPrice
//         ? teacher.price_per_hour === parseInt(selectedPrice)
//         : true;
//       return languageMatch && levelMatch && priceMatch;
//     });
//   };

//   const handleSearch = () => {
//     const filtered = filterTeachers(
//       teachers,
//       selectedLanguage,
//       selectedLevel,
//       selectedPrice
//     );
//     dispatch(setFilteredTeachers(filtered));

//     if (filtered.length === 0) {
//       toast.info('No teachers found for the selected criteria.');
//     } else {
//       toast.success('Teachers found.');
//     }

//     setLanguage('');
//     setLevel('');
//     setPrice('');
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.button}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default FilterBar;
// import { useEffect, useId, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { fetchFilterData } from '../../redux/filters/filterOperations.js';
// import {
//   setSelectedLanguage,
//   setSelectedLevel,
//   setSelectedPrice,
// } from '../../redux/filters/filterSlice.js';
// import {
//   selectLanguages,
//   selectLevels,
//   selectPrices,
// } from '../../redux/filters/filterSelectors.js';
// import {
//   selectTeachersLoading,
//   selectTeachers,
// } from '../../redux/teachers/selectorsTeachers.js';
// import { setFilteredTeachers } from '../../redux/teachers/sliceTeachers.js';
// import styles from './FilterBar.module.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const FilterBar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const languages = useSelector(selectLanguages);
//   const levels = useSelector(selectLevels);
//   const prices = useSelector(selectPrices);
//   const loading = useSelector(selectTeachersLoading);
//   const teachers = useSelector(selectTeachers); // Завантажені вчителі

//   const [selectedLanguage, setLanguage] = useState('');
//   const [selectedLevel, setLevel] = useState('');
//   const [selectedPrice, setPrice] = useState('');

//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   useEffect(() => {
//     dispatch(fetchFilterData());
//   }, [dispatch]);

//   const filterTeachers = (
//     teachers,
//     selectedLanguage,
//     selectedLevel,
//     selectedPrice
//   ) => {
//     return teachers.filter(teacher => {
//       const languageMatch = selectedLanguage
//         ? teacher.languages.includes(selectedLanguage)
//         : true;
//       const levelMatch = selectedLevel
//         ? teacher.levels.includes(selectedLevel)
//         : true;
//       const priceMatch = selectedPrice
//         ? teacher.price_per_hour === parseInt(selectedPrice)
//         : true;
//       return languageMatch && levelMatch && priceMatch;
//     });
//   };

//   const handleSearch = () => {
//     const filtered = filterTeachers(
//       teachers,
//       selectedLanguage,
//       selectedLevel,
//       selectedPrice
//     );
//     dispatch(setFilteredTeachers(filtered)); // Оновлюємо стан з фільтрованими вчителями

//     if (filtered.length === 0) {
//       toast.info('No teachers found for the selected criteria.');
//     } else {
//       toast.success('Teachers found.');
//       navigate('/filter'); // Переадресовуємо на нову сторінку
//     }

//     setLanguage('');
//     setLevel('');
//     setPrice('');
//   };

//   const handleLanguageChange = e => {
//     setLanguage(e.target.value);
//     dispatch(setSelectedLanguage(e.target.value));
//   };

//   const handleLevelChange = e => {
//     setLevel(e.target.value);
//     dispatch(setSelectedLevel(e.target.value));
//   };

//   const handlePriceChange = e => {
//     setPrice(e.target.value);
//     dispatch(setSelectedPrice(e.target.value));
//   };

//   return (
//     <div className={styles.wrapper} aria-labelledby="filter-bar-title">
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>
//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             onChange={handleLanguageChange}
//             value={selectedLanguage}
//           >
//             <option value="" aria-label="Select language">
//               Select language
//             </option>
//             {languages.map(lang => (
//               <option key={lang} value={lang} aria-label={lang}>
//                 {lang}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={levelId} className={styles.label}>
//             Level of knowledge
//           </label>
//           <select
//             name="level"
//             id={levelId}
//             className={styles.select}
//             onChange={handleLevelChange}
//             value={selectedLevel}
//           >
//             <option value="" aria-label="Select level">
//               Select level
//             </option>
//             {levels.map(level => (
//               <option key={level} value={level} aria-label={level}>
//                 {level}
//               </option>
//             ))}
//           </select>
//         </li>

//         <li className={styles.item}>
//           <label htmlFor={priceId} className={styles.label}>
//             Price
//           </label>
//           <select
//             name="price"
//             id={priceId}
//             className={styles.select}
//             onChange={handlePriceChange}
//             value={selectedPrice}
//           >
//             <option value="" aria-label="Select price">
//               Select price
//             </option>
//             {prices.map(price => (
//               <option key={price} value={price} aria-label={price}>
//                 {price}
//               </option>
//             ))}
//           </select>
//         </li>
//       </ul>
//       <button
//         className={styles.button}
//         onClick={handleSearch}
//         disabled={loading}
//       >
//         {loading ? 'Searching...' : 'Search'}
//       </button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default FilterBar;
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
  const teachers = useSelector(selectTeachers); // Завантажені вчителі

  const [selectedLanguage, setLanguage] = useState('');
  const [selectedLevel, setLevel] = useState('');
  const [selectedPrice, setPrice] = useState('');
  const [message, setMessage] = useState(''); // Додаємо стан для повідомлення

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
      {message && <p className={styles.message}>{message}</p>}{' '}
    </div>
  );
};

export default FilterBar;
