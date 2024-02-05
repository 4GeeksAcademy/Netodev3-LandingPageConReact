import React from "react";

//include components
import Navbar from "./navbar";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />,
      </div>
    </div>
  );
};

export default Home;
