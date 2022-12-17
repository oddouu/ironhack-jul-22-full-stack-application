import React from 'react';
import { quoteLoadRandom } from '../services/quotes';
import { useEffect, useState } from 'react';
import QuoteContent from '../components/QuoteContent';

const HomePage = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    quoteLoadRandom().then((data) => setQuote(data.quote));
  }, []);

  return <div>{quote && <QuoteContent quote={quote} />}</div>;
};

export default HomePage;
