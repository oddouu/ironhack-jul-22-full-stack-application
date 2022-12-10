import React from 'react';

const QuoteForm = ({ quote, onQuoteChange, onQuoteSubmit }) => {
  const handleQuoteFormSubmission = (event) => {
    event.preventDefault();
    onQuoteSubmit();
  };

  return (
    <form onSubmit={handleQuoteFormSubmission} className='flex flex-col'>
      <label htmlFor='message'>Quote</label>
      <input
        type='text'
        name='message'
        id='message'
        onChange={(event) =>
          onQuoteChange({
            ...quote,
            message: event.target.value
          })
        }
        value={quote.message}
      />
      <label htmlFor='author'>Author</label>
      <input
        type='text'
        name='author'
        id='author'
        onChange={(event) =>
          onQuoteChange({
            ...quote,
            author: event.target.value
          })
        }
        value={quote.author}
      />
      <button className='btn-primary'>Submit quote</button>
    </form>
  );
};

export default QuoteForm;
