import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quoteAdd } from '../services/quotes';
import QuoteForm from '../components/QuoteForm';

const QuoteCreatePage = () => {
  const initialQuote = {
    message: '',
    author: '',
    picture: null
  };
  const [quote, setQuote] = useState(initialQuote);

  const navigate = useNavigate();

  const handleQuoteCreation = () => {
    quoteAdd(quote).then((data) => {
      const id = data.quote._id;
      navigate(`/quotes/${id}`);
    });
  };

  return (
    <div>
      <QuoteForm
        quote={quote}
        onQuoteChange={setQuote}
        onQuoteSubmit={handleQuoteCreation}
      />
    </div>
  );
};

export default QuoteCreatePage;
