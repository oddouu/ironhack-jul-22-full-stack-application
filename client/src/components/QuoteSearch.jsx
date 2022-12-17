import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { quoteSearch } from '../services/quotes';

const QuoteSearch = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleSearchTermChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    if (term) {
      quoteSearch(term)
        .then((result) => {
          const { quotes } = result;
          setResults(quotes);
          setDisplay(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setResults([]);
    }
  }, [term, setResults, setDisplay]);

  const handleBlur = () => {
    setTimeout(() => {
      setDisplay(false);
    }, 200);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write anything..."
        value={term}
        onChange={handleSearchTermChange}
        onBlur={handleBlur}
      />
      {display && (
        <div className="bg-white absolute border border-blue">
          <ul>
            {results.map((quote) => (
              <li key={quote._id}>
                <Link to={`/quotes/${quote._id}`} className="flex px-4 py-2">
                  {quote.message.slice(0, 20)}... - {quote.author}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuoteSearch;
