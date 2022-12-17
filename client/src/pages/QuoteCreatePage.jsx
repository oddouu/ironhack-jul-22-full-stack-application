import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quoteAdd } from '../services/quotes';
import QuoteForm from '../components/QuoteForm';
import { useAuthContext } from '../context/authentication';

const QuoteCreatePage = () => {
  const initialQuote = {
    message: '',
    author: '',
    picture: null,
    position: {
      lat: 0,
      lng: 0
    }
  };
  const [quote, setQuote] = useState(initialQuote);

  const navigate = useNavigate();

  const { authToken } = useAuthContext();

  const handleQuoteCreation = () => {
    quoteAdd(quote, authToken).then((data) => {
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
