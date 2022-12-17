import React from 'react';
import { useState, useEffect } from 'react';
import QuoteContent from '../components/QuoteContent';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quoteDelete, quoteLoadSingle } from '../services/quotes';
import { useAuthContext } from '../context/authentication';

const QuoteDisplaySinglePage = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  const navigate = useNavigate();

  const { user, authToken } = useAuthContext();

  const handleQuoteDeleteFormSubmission = (event) => {
    event.preventDefault();
    quoteDelete(id, authToken).then(() => navigate('/quotes'));
  };

  useEffect(() => {
    quoteLoadSingle(id).then((data) => setQuote(data.quote));
  }, [id]);

  return (
    <div className="flex flex-col space-x-12">
      {quote && <QuoteContent quote={quote} />}
      <div className="">
        {user && (
          <Link className="btn-primary" to={`/quotes/${id}/edit`}>
            Edit
          </Link>
        )}
        {user && (
          <form onSubmit={handleQuoteDeleteFormSubmission}>
            <button className="btn-primary">Delete</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuoteDisplaySinglePage;
