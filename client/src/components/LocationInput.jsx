import { useState } from 'react';

const getCurrentPosition = () =>
  new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );

const LocationInput = ({ position, onChangePosition }) => {
  const [locating, setLocating] = useState(false);

  const locateUser = () => {
    setLocating(true);
    getCurrentPosition()
      .then((result) => {
        const { latitude, longitude } = result.coords;
        onChangePosition({
          lat: latitude,
          lng: longitude
        });
        setLocating(false);
      })
      .catch((error) => {
        console.log(error);
        setLocating(false);
      });
  };

  return (
    <div>
      <button
        onClick={locateUser}
        type="button"
        className="btn-primary"
        disabled={locating}
      >
        {locating ? 'Locating you now...' : 'Locate Me!'}
      </button>
    </div>
  );
};

export default LocationInput;
