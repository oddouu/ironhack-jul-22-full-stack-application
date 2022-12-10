import React from 'react';

const QuoteContent = ({ quote }) => {
  const { message, author } = quote;
  return (
    <div className='p-8 m-8'>
      <h1 className='text-3xl italic first-letter:text-7xl'>{message}</h1>
      <h3 className='text-2xl'>{author}</h3>
    </div>
  );
};

export default QuoteContent;
