import { useContext } from 'react';
import { ThemeContext } from './ThemeContext.jsx';

const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
