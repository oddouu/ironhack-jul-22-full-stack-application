import React from 'react';
import { Link } from 'react-router-dom';

const QuoteList = ({ quotes }) => {
  return (
    <div>
      {quotes.map((eachQuote) => {
        return (
          <div key={eachQuote._id}>
            <Link to={`/quotes/${eachQuote._id}`}>
              <h3>
                {eachQuote.message} ({eachQuote.author})
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default QuoteList;
