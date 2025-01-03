// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import { ThemeProvider } from './contextTheme/ThemeContext.jsx';
import store from './redux/store.js';
import App from './App.jsx';
import './index.css';

Modal.setAppElement('#root');

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
