import { useContext } from 'react';
import { ThemeContext } from './contextTheme/ThemeContext.js';

export const useTheme = () => {
  return useContext(ThemeContext);
};
