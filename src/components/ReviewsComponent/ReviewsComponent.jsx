import styles from './ReviewsComponents.module.css';
import useTheme from '../../hooks/useTheme.js';
const ReviewsComponent = () => {
  const { theme } = useTheme();
  // import './Statistics.css';

  // const Statistics = () => {
  const statisticsData = [
    { id: 1, value: '32,000 +', description: 'Experienced tutors' },
    { id: 2, value: '300,000 +', description: '5-star tutor reviews' },
    { id: 3, value: '120 +', description: 'Subjects taught' },
    { id: 4, value: '200 +', description: 'Tutor nationalities' },
  ];

  return (
    <section className={`${styles.section} ${styles[theme]}`}>
      <div className={styles.list}>
        {statisticsData.map(stat => (
          <div key={stat.id} className={styles.item}>
            <span className={styles.quantity}>{stat.value}</span>
            <span className={styles.text}>{stat.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// export default Statistics;

//   return (
//     <section className={`${styles.section} ${styles[theme]}`}>
//       <ul className={styles.list}>
//         <li className={styles.item}>
//           <p className={styles.quantity}>32,000 +</p>
//           <p className={styles.text}>Experienced tutors</p>
//         </li>
//         <li className={styles.item}>
//           <p className={styles.quantity}>300,000 +</p>
//           <p className={styles.text}>5-star tutor reviews</p>
//         </li>
//         <li className={styles.item}>
//           <p className={styles.quantity}>120 +</p>
//           <p className={styles.text}>Subjects taught</p>
//         </li>
//         <li className={styles.item}>
//           <p className={styles.quantity}>200 +</p>
//           <p className={styles.text}>Tutor nationalities</p>
//         </li>
//       </ul>
//     </section>
//   );
// };

export default ReviewsComponent;
