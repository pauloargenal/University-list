import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import notExist from "../../assets/images/404.png";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh"
  },
  home: {
    backgroundColor: "#3CB371",
    color: "#FFFFFF",
    marginTop: 50,
    width: 260,
    "&:hover": {
      backgroundColor: "#38a167"
    }
  }
});

const PageNotFound = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={notExist} />
      <Button
        variant="contained"
        className={classes.home}
        onClick={() => history.push("/")}
      >
        {"Go back to home page"}
      </Button>
    </div>
  );
};

export default PageNotFound;
