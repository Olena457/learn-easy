import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import './App.css';

import Layout from './components/Layout/Layout.jsx';
import { auth } from './firebase/firebaseConfig.js';
import { refreshUser } from './redux/auth/operationsAuth.js';
import { selectIsRefreshing } from './redux/auth/selectorsAuth.js';
import AppBar from './components/AppBar/AppBar.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Modal from 'react-modal';
import Loader from './components/Loader/Loader.jsx';
import { ThemeProvider } from './ThemeContext/ThemeContext.jsx';
// import useTheme from './hooks/useTheme.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage/TeachersPage.jsx')
);
const FavoritesTeachersPage = lazy(() =>
  import('./pages/FavoritesTeachersPage/FavoritesTeachersPage.jsx')
);

const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

Modal.setAppElement('#modal-root');

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(refreshUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <AppBar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute
                redirectTo="/"
                component={<FavoritesTeachersPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
