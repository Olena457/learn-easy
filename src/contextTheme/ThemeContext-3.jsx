// import { createContext, useState, useEffect, useMemo } from 'react';

// const ThemeContext = createContext();

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     () => localStorage.getItem('theme') || 'blue'
//   );

//   const toggleTheme = themeName => {
//     setTheme(themeName);
//     localStorage.setItem('theme', themeName);
//   };

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, [setTheme]);

//   const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

//   return (
//     <ThemeContext.Provider value={value}>
//       <div data-theme={theme}>{children}</div>
//     </ThemeContext.Provider>
//   );
// };

// export { ThemeContext, ThemeProvider };
