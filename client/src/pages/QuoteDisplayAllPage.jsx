import React from 'react';
import { useState, useEffect } from 'react';
import { quoteLoadAll } from '../services/quotes';
import QuoteList from '../components/QuoteList';

const QuoteDisplayAllPage = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    quoteLoadAll().then((data) => setQuotes(data.quotes));
  });

  // {data: quotes: [{message: '', author, ''}, ...]}
  return (
    <div>
      <QuoteList quotes={quotes} />
    </div>
  );
};

export default QuoteDisplayAllPage;
