import React from "react";
import { Banner } from "../../components";
import HowItWorks from "./components/HowItWorks";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="sections">
        <HowItWorks />
      </div>
    </div>
  );
};

export default Home;
