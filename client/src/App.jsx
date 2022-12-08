import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuoteDisplayAllPage from './pages/QuoteDisplayAllPage';
import QuoteCreatePage from './pages/QuoteCreatePage';
import QuoteDisplaySinglePage from './pages/QuoteDisplaySinglePage';
import QuoteEditPage from './pages/QuoteEditPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quotes' element={<QuoteDisplayAllPage />} />
        <Route path='/new-quote' element={<QuoteCreatePage />} />
        <Route path='/quotes/:id/edit' element={<QuoteEditPage />} />
        <Route path='/quotes/:id' element={<QuoteDisplaySinglePage />} />
      </Routes>
    </div>
  );
};

export default App;
