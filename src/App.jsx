import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize';
import './App.css';
import { auth } from './firebase/firebaseConfig.js';
import { refreshUser } from './redux/auth/operationsAuth.js';
import { selectIsRefreshing } from './redux/auth/selectorsAuth.js';
import { selectTeachers } from './redux/teachers/selectorsTeachers.js';
import AppBar from './components/AppBar/AppBar.jsx';
import Layout from './components/Layout/Layout.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Modal from 'react-modal';
import Loader from './components/Loader/Loader.jsx';
import { useTheme } from './hooks/use-theme.js';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const TeachersPage = lazy(() =>
  import('./pages/TeachersPage/TeachersPage.jsx')
);
const FilteredTeachersPage = lazy(() =>
  import('./pages/FilteredTeachersPage/FilteredTeachersPage.jsx')
);
const FavoritesTeachersPage = lazy(() =>
  import('./pages/FavoritesTeachersPage/FavoritesTeachersPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage/NotFoundPage.jsx')
);

Modal.setAppElement('#root');

function App() {
  const { theme, setTheme } = useTheme();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const teachers = useSelector(selectTeachers);

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
    <>
      <Suspense fallback={<Loader />}>
        <AppBar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<HomePage theme={theme} setTheme={setTheme} />}
            />
            <Route path="/teachers" element={<TeachersPage />} />
            {teachers.length > 0 && (
              <Route path="/filter" element={<FilteredTeachersPage />} />
            )}
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
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
