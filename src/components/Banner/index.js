import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import Proptypes from "prop-types";
import image from "../../assets/images/2485381.png";

const useStyles = makeStyles(() => ({
  banner: {
    display: "flex"
  },
  left: {
    width: "50%",
    padding: 100
  },
  right: {
    padding: 100,
    width: "50%"
  },
  image: {
    height: "100%",
    width: "100%"
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    lineHeight: 1.2,
    fontWeight: "bold",
    textAlign: "left"
  },
  signin: {
    backgroundColor: "#3CB371",
    color: "#FFFFFF",
    width: 150,
    "&:hover": {
      backgroundColor: "#38a167"
    }
  }
}));

const Banner = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <div className={classes.left}>
        <Typography variant="h2" className={classes.text}>
          Make your college application better instantly
        </Typography>
        <Button
          variant="contained"
          className={classes.signin}
          onClick={() => history.push("/explore")}
        >
          {"Explore"}
        </Button>
      </div>
      <div className={classes.right}>
        <img src={image} className={classes.image} />
      </div>
    </div>
  );
};

Banner.propTypes = {
  history: Proptypes.object.isRequired
};

export default Banner;
