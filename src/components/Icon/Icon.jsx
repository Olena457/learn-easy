// import sprite from '../../sprite/sprite.svg';

// const Icon = ({
//   id,
//   width,
//   height,
//   className = '',
//   fillColor,
//   ariaHidden = true,
//   ...props
// }) => {
//   return (
//     <svg
//       className={`${className}`}
//       style={{ background: 'transparent' }}
//       width={width}
//       height={height}
//       aria-hidden={ariaHidden}
//       {...props}
//     >
//       <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
//     </svg>
//   );
// };

// export default Icon;

// const Icon = ({
//   id,
//   width,
//   height,
//   className = '',
//   fillColor,
//   role,
//   ...props
// }) => {
//   return (
//     <svg
//       className={`${className}`}
//       style={{ background: 'transparent' }}
//       width={width}
//       height={height}
//       aria-hidden={role === 'button' ? 'false' : 'true'}
//       role={role}
//       {...props}
//     >
//       <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
//     </svg>
//   );
// };

// export default Icon;
import sprite from '../../sprite/sprite.svg';
const Icon = ({
  id,
  width,
  height,
  className = '',
  fillColor,
  role,
  ariaHidden = role === 'button' ? 'false' : 'true',
  ...props
}) => {
  return (
    <svg
      className={`${className}`}
      style={{ background: 'transparent' }}
      width={width}
      height={height}
      aria-hidden={ariaHidden}
      role={role}
      {...props}
    >
      <use style={{ fill: `${fillColor}` }} href={`${sprite}#icon-${id}`}></use>
    </svg>
  );
};

export default Icon;
