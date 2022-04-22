import React from "react";
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
  return (
    <SimpleMap>
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker 1" />
      <AnyReactComponent lat={59.955413} lng={30.45885} text="My Marker 2" />
    </SimpleMap>
  );
};

export default HomePage;
