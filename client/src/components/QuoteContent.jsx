import React from 'react';
import AuthorLocationMap from './AuthorLocationMap';

const QuoteContent = ({ quote }) => {
  const { message, author, picture } = quote;
  return (
    <div className="p-8 m-8">
      {picture && (
        <img
          src={picture}
          alt={message}
          className="shadow-md rounded-xl max-w-xs"
        />
      )}
      <h1 className="text-3xl italic first-letter:text-7xl">{message}</h1>
      <h3 className="text-2xl">{author}</h3>

      <AuthorLocationMap />
    </div>
  );
};

export default QuoteContent;
