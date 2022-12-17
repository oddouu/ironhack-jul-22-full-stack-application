import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuoteDisplayAllPage from './pages/QuoteDisplayAllPage';
import QuoteCreatePage from './pages/QuoteCreatePage';
import QuoteDisplaySinglePage from './pages/QuoteDisplaySinglePage';
import QuoteEditPage from './pages/QuoteEditPage';
import Navbar from './components/Navbar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';
import AuthenticationRequiredErrorPage from './pages/AuthenticationRequiredErrorPage';
import { useAuthContext } from './context/authentication';

const App = () => {
  const { user } = useAuthContext();

  return (
    <div className="h-screen dark:bg-zinc-700 dark:text-white">
      <Navbar />
      <main className="container mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<QuoteDisplayAllPage />} />
          <Route
            path="/new-quote"
            element={
              (user && <QuoteCreatePage />) || (
                <AuthenticationRequiredErrorPage />
              )
            }
          />
          <Route
            path="/quotes/:id/edit"
            element={
              (user && <QuoteEditPage />) || <AuthenticationRequiredErrorPage />
            }
          />
          <Route path="/quotes/:id" element={<QuoteDisplaySinglePage />} />
          <Route
            path="/login"
            element={(!user && <LogIn />) || <ErrorPage />}
          />
          <Route
            path="/signup"
            element={(!user && <SignUp />) || <ErrorPage />}
          />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
