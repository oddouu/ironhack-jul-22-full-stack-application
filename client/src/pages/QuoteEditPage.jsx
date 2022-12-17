import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';
import { useAuthContext } from '../context/authentication';
import { quoteEdit, quoteLoadSingle } from '../services/quotes';

const QuoteEditPage = () => {
  const [quote, setQuote] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const { authToken } = useAuthContext();

  const handleQuoteEdit = () => {
    quoteEdit(id, quote, authToken).then(() => navigate(`/quotes/${id}`));
  };

  useEffect(() => {
    quoteLoadSingle(id).then((data) => setQuote(data.quote));
  }, [id]);

  return (
    <div>
      <h1>Edit Quote</h1>
      {quote && (
        <QuoteForm
          quote={quote}
          onQuoteChange={setQuote}
          onQuoteSubmit={handleQuoteEdit}
        />
      )}
    </div>
  );
};

export default QuoteEditPage;
