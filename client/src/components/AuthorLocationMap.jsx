import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const AuthorLocationMap = ({ position }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={10}>
        <MarkerF position={position} />
      </GoogleMap>
    )
  );
};

export default AuthorLocationMap;
