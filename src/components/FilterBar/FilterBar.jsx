// import { useId } from 'react';
// import styles from './FilterBar.module.css';

// const FilterBar = () => {
//   const languagesId = useId();
//   const levelId = useId();
//   const priceId = useId();

//   return (
//     <div
//       className={styles.wrapper}
//       // role="expand"
//       aria-labelledby="filter-bar-title"
//     >
//       <h3 id="filter-bar-title" className={styles.hidden}>
//         Filter Options
//       </h3>
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <label htmlFor={languagesId} className={styles.label}>
//             Languages
//           </label>

//           <select
//             name="language"
//             id={languagesId}
//             className={styles.select}
//             aria-labelledby="languages-label"
//           >
//             <option value="french">French</option>
//             <option value="english">English</option>
//             <option value="ukrainian">Ukrainian</option>
//             <option value="polish">Polish</option>
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
//             aria-labelledby="level-label"
//           >
//             <option value="a1">A1 Beginner</option>
//             <option value="a2">A2 Elementary</option>
//             <option value="b1">B1 Intermediate</option>
//             <option value="b2">B2 Upper-Intermediate</option>
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
//             aria-labelledby="price-label"
//           >
//             <option value="a1">10</option>
//             <option value="a2">20</option>
//             <option value="b1">30</option>
//             <option value="b2">40</option>
//           </select>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default FilterBar;
import { useId } from 'react';
import styles from './FilterBar.module.css';

const FilterBar = () => {
  const languagesId = useId();
  const levelId = useId();
  const priceId = useId();

  return (
    <div className={styles.wrapper} aria-labelledby="filter-bar-title">
      <h3 id="filter-bar-title" className={styles.hidden}>
        Filter Options
      </h3>
      <ul className={styles.list}>
        <li className={styles.item}>
          <label htmlFor={languagesId} className={styles.label}>
            Languages
          </label>

          <select name="language" id={languagesId} className={styles.select}>
            <option value="french" aria-label="French">
              French
            </option>
            <option value="english" aria-label="English">
              English
            </option>
            <option value="ukrainian" aria-label="Ukrainian">
              Ukrainian
            </option>
            <option value="polish" aria-label="Polish">
              Polish
            </option>
          </select>
        </li>

        <li className={styles.item}>
          <label htmlFor={levelId} className={styles.label}>
            Level of knowledge
          </label>

          <select name="level" id={levelId} className={styles.select}>
            <option value="a1" aria-label="A1 Beginner">
              A1 Beginner
            </option>
            <option value="a2" aria-label="A2 Elementary">
              A2 Elementary
            </option>
            <option value="b1" aria-label="B1 Intermediate">
              B1 Intermediate
            </option>
            <option value="b2" aria-label="B2 Upper-Intermediate">
              B2 Upper-Intermediate
            </option>
          </select>
        </li>

        <li className={styles.item}>
          <label htmlFor={priceId} className={styles.label}>
            Price
          </label>

          <select name="price" id={priceId} className={styles.select}>
            <option value="10" aria-label="10">
              10
            </option>
            <option value="20" aria-label="20">
              20
            </option>
            <option value="30" aria-label="30">
              30
            </option>
            <option value="40" aria-label="40">
              40
            </option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default FilterBar;
