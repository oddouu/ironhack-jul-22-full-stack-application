import React from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';

const QuoteForm = ({ quote, onQuoteChange, onQuoteSubmit }) => {
  const handleQuoteFormSubmission = (event) => {
    event.preventDefault();
    onQuoteSubmit();
  };

  const onFileUploadSuccess = (value) => {
    const { url } = value;
    onQuoteChange({ ...quote, picture: url });
  };

  const onFileUploadError = (error) => {
    console.log('onFileUploadError', error);
  };

  return (
    <form onSubmit={handleQuoteFormSubmission} className="flex flex-col">
      <label htmlFor="message">Quote</label>
      <input
        type="text"
        name="message"
        id="message"
        onChange={(event) =>
          onQuoteChange({
            ...quote,
            message: event.target.value
          })
        }
        value={quote.message}
      />

      <label htmlFor="author">Author</label>
      <input
        type="text"
        name="author"
        id="author"
        onChange={(event) =>
          onQuoteChange({
            ...quote,
            author: event.target.value
          })
        }
        value={quote.author}
      />

      {quote.picture && (
        <img
          src={quote.picture}
          alt={quote.message}
          className="shadow-md rounded-xl max-w-xs"
        />
      )}

      <IKContext
        // Required for image displayed
        urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
        // Required for image upload
        publicKey={process.env.REACT_APP_IMAGEKIT_PUBLIC_KEY}
        authenticationEndpoint={
          process.env.REACT_APP_API_BASE_URL +
          process.env.REACT_APP_IMAGEKIT_AUTHENTICATION_ENDPOINT
        }
      >
        <IKUpload onSuccess={onFileUploadSuccess} onError={onFileUploadError} />
      </IKContext>

      <button className="btn-primary">Submit quote</button>
    </form>
  );
};

export default QuoteForm;
