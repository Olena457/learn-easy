// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
//
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </StrictMode>
// );
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ModalProvider } from './contextModal/ModalContext.jsx';
import App from './App.jsx';
import store from './redux/store.js';
import './index.css';
import ReactModal from 'react-modal';
import { ThemeProvider } from './contextTheme/ThemeContext.jsx';

ReactModal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_normalizeFormMethod: true,
        v7_routerProviderHydration: true,
      }}
    >
      <Provider store={store}>
        <ThemeProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
