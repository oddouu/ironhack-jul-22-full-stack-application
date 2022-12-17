import React from 'react';
import { IKContext, IKUpload } from 'imagekitio-react';
import LocationInput from './LocationInput';

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
        placeholder="Message"
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
        placeholder="Author"
        onChange={(event) =>
          onQuoteChange({
            ...quote,
            author: event.target.value
          })
        }
        value={quote.author}
      />

      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          {quote.picture && (
            <img
              className="h-16 w-16 object-cover rounded-full"
              src={quote.picture}
              alt={quote.message}
            />
          )}
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
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
            <IKUpload
              onSuccess={onFileUploadSuccess}
              onError={onFileUploadError}
              className="file-picker-primary"
            />
          </IKContext>
        </label>
      </div>

      <LocationInput
        position={quote.position}
        onChangePosition={(position) => onQuoteChange({ ...quote, position })}
      />

      <button className="btn-primary">Submit quote</button>
    </form>
  );
};

export default QuoteForm;
