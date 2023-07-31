import { useState, useEffect } from "react";

const useGetCityName = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    placeName: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          const apiKey = import.meta.env.VITE_MAPAPI;
          const geocodingApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

          fetch(geocodingApiUrl)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.results.length > 0) {
                const placeName = data.results[0].formatted_address;
                setLocation({
                  latitude,
                  longitude,
                  placeName,
                  error: null,
                  loading: false,
                });
              } else {
                setLocation((prevState) => ({
                  ...prevState,
                  error: "No Place found.",
                  loading: false,
                }));
              }
            })
            .catch((error) => {
              setLocation((prevState) => ({
                ...prevState,
                error: error.message,
                loading: false,
              }));
            });
        },
        (error) => {
          setLocation((prevState) => ({
            ...prevState,
            error: error.message,
            loading: false,
          }));
        }
      );
    } else {
      setLocation((prevState) => ({
        ...prevState,
        error: "Geolocation is not available in this browser.",
        loading: false,
      }));
    }
  }, []);

  return location;
};

export default useGetCityName;
