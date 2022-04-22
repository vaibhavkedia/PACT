<<<<<<< HEAD
import React from "react";

// Components
import TopBar from "../components/TopBar/TopBar";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div>HomePage</div>
    </>
=======
import React, { useState } from "react";
import SimpleMap from "../components/SimpleMap";
const AnyReactComponent = ({ text }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <img
      src="/location.png"
      style={{
        height: "40px",
      }}
    />
    <div
      style={{
        color: "white",
        paddingTop: "5px",
        fontSize: "10px",
        fontWeight: "bold",
        width: "200px",
      }}
    >
      {text}
    </div>
  </div>
);
const HomePage = () => {
  const [position, setPosition] = useState({});

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);
    setPosition({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }

  getLocation();

  return (
    <SimpleMap center={position}>
      <AnyReactComponent lat={25.5940947} lng={85.1375645} text="My Marker 1" />
      <AnyReactComponent lat={25.6940947} lng={85.2375645} text="My Marker 2" />
    </SimpleMap>
>>>>>>> 0b38ad02356b5c0758ca2ca026c25eb0b7f5bb9c
  );
};

export default HomePage;
