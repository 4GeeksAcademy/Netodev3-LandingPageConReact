import React from "react";

//include components
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />,
        <div className="row d-flex justify-content-center">
          <Card />,
          <Card />,
          <Card />,
          <Card />,
        </div>
      </div>
    </div>
  );
};

export default Home;
