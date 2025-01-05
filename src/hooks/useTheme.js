import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext/ThemeContext.jsx';

const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
