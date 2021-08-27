import React from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  return (
    <div className={classes.home}>
      <Banner history={history} />
      <div className="sections">
        <HowItWorks />
        <Feedbacks />
      </div>
    </div>
  );
};

export default Home;
