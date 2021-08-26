import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";
import WebIcon from "@material-ui/icons/Web";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles({
  howitworks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    marginBottom: 30
  },
  line: {
    color: "#000",
    background: "#000",
    border: "2px solid #000",
    width: 150,
    opacity: 0.8
  },
  cardTitle: {
    fontSize: 34,
    fontWeight: "bold"
  },
  cardText: {
    fontSize: 20
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  },
  icon: {
    fontSize: 54
  },
  cards: {
    display: "flex ",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 200,
    paddingRight: 200
  },
  card: {
    padding: 20,
    width: 300,
    height: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "justify",
    borderRadius: 8
  }
});

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <div className={classes.howitworks}>
      <div className={classes.title}>
        <Typography variant="h2" className={classes.text}>
          How it works
        </Typography>
        <hr className={classes.line} />
      </div>
      <div className={classes.cards}>
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.card}>
            <WebIcon className={classes.icon} />
            <Typography variant="h5" className={classes.cardTitle}>
              Search
            </Typography>
            <Typography variant="h6" className={classes.cardText}>
              Browse the universities that you like on our web application
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.card}>
            <EmailIcon className={classes.icon} />
            <Typography variant="h5" className={classes.cardTitle}>
              Apply
            </Typography>
            <Typography variant="h6" className={classes.cardText}>
              Browse the universities that you like on our web application
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.card}>
            <AssignmentIndIcon className={classes.icon} />
            <Typography variant="h5" className={classes.cardTitle}>
              Enroll
            </Typography>
            <Typography variant="h6" className={classes.cardText}>
              Browse the universities that you like on our web application
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
