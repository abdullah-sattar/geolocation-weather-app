import './App.scss';
import {React, useEffect, useState} from 'react'

const App = () => {
  const [latitude, setLatitude] = useState("")
  const [longitude, setlongitude] = useState("")

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude)
    setlongitude(position.coords.longitude)
  });
  return (
    <div>App</div>
  )
}

export default App
