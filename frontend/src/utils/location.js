export const getCurrentLocation = () => {
  if ("geolocation" in navigator) {
    let location = {};
    const data = navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      location = { latitude, longitude };
      console.log(location);
    });
    
  } else {
    return false;
  }
};
