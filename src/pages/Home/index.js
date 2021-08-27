import React from "react";
import { Banner } from "../../components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import HowItWorks from "./components/HowItWorks";
import Feedbacks from "./components/Feedbacks";

const useStyles = makeStyles(() => ({
  home: {
    marginBottom: 100
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Banner />
      <div className="sections">
        <HowItWorks />
        <Feedbacks />
      </div>
    </div>
  );
};

export default Home;
