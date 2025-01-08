// import { createContext, useState, useMemo, useEffect } from 'react';

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const getInitialTheme = () => {
//     const savedTheme = localStorage.getItem('theme');
//     return savedTheme || 'blue';
//   };

//   const [theme, setTheme] = useState(getInitialTheme);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = themeName => {
//     setTheme(themeName);
//   };

//   const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

//   return (
//     <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };
import { createContext, useState, useMemo, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'blue'; // Початкова тема "blue"
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = themeName => {
    setTheme(themeName);
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
