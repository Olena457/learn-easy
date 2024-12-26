import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext.js';

export const useTheme = () => {
  return useContext(ThemeContext);
};
