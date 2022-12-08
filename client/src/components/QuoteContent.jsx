import React from 'react';

const QuoteContent = ({ quote }) => {
  const { message, author } = quote;
  return (
    <div>
      <h1>{message}</h1>
      <h3>{author}</h3>
    </div>
  );
};

export default QuoteContent;
