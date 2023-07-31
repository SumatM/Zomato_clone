import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrentLocation = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    placeName: null,
    error: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const apiKey = import.meta.env.VITE_MAPAPI;
          const geocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

          axios
            .get(geocodingApiUrl)
            .then((response) => {
              if (response.data.results.length > 0) {
                const placeName = response.data.results[0].formatted;
                setLocation({
                  latitude,
                  longitude,
                  placeName,
                  error: null,
                });
              } else {
                setLocation((prevState) => ({
                  ...prevState,
                  error: "No results found.",
                }));
              }
            })
            .catch((error) => {
              setLocation((prevState) => ({
                ...prevState,
                error:  error.message,
              }));
            });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error:  error.message,
          }));
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation is not available in this system.",
      }));
    }
  }, []);

  return location;
};

export default useCurrentLocation;
