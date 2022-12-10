import React from 'react';
import { useState, useEffect } from 'react';
import QuoteContent from '../components/QuoteContent';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { quoteDelete, quoteLoadSingle } from '../services/quotes';

const QuoteDisplaySinglePage = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  const navigate = useNavigate();
  const handleQuoteDeleteFormSubmission = (event) => {
    event.preventDefault();
    quoteDelete(id).then(() => navigate('/quotes'));
  };
  useEffect(() => {
    quoteLoadSingle(id).then((data) => setQuote(data.quote));
  }, [id]);

  return (
    <div className='flex flex-col space-x-12'>
      {quote && <QuoteContent quote={quote} />}
      <div className=''>
        <Link className='btn-primary' to={`/quotes/${id}/edit`}>
          Edit
        </Link>
        <form onSubmit={handleQuoteDeleteFormSubmission} className=''>
          <button className='bg-blue-500 text-white font-bold py-2 my-4 px-4 rounded'>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteDisplaySinglePage;
