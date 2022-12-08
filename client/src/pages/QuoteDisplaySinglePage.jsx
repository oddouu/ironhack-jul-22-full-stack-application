import React from 'react';
import { useState, useEffect } from 'react';
import QuoteContent from '../components/QuoteContent';
import { useParams } from 'react-router-dom';
import { quoteLoadSingle } from '../services/quotes';

const QuoteDisplaySinglePage = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    quoteLoadSingle(id).then((data) => setQuote(data.quote));
  }, [id]);

  return <div>{quote && <QuoteContent quote={quote} />}</div>;
};

export default QuoteDisplaySinglePage;
