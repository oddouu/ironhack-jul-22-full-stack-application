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

const App = () => {
  return (
    <div className='h-screen dark:bg-zinc-700 dark:text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quotes' element={<QuoteDisplayAllPage />} />
        <Route path='/new-quote' element={<QuoteCreatePage />} />
        <Route path='/quotes/:id/edit' element={<QuoteEditPage />} />
        <Route path='/quotes/:id' element={<QuoteDisplaySinglePage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
