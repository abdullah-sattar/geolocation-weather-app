import "./App.scss";
import { React, useEffect, useState } from "react";
import Weather from "./components/Weather/Weather";

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setlongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  console.log(latitude)
  console.log(longitude)

  return <div>
    {longitude && <Weather latitude={latitude} longitude={longitude} />}
  </div>;
};

export default App;
