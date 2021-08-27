import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import quote from "../../../../assets/images/6041174ae60be81bdc89d32b_quote.svg";

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
  cardTitle: {
    fontSize: 20,
    marginBottom: 10
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
    fontSize: 54,
    marginRight: 10
  },
  name: {
    fontSize: 14
  },
  school: {
    fontSize: 12
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  cards: {
    display: "flex ",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 150,
    paddingRight: 150
  },
  card: {
    border: "none",
    background: "none",
    width: 510,
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "justify",
    borderRadius: 8,
    marginRight: 20
  },
  quote: {
    position: "relative",
    left: -220,
    top: 50,
    minWidth: 70
  }
});

const Feedback = () => {
  const classes = useStyles();
  return (
    <div className={classes.howitworks}>
      <div className={classes.title}>
        <Typography variant="h2" className={classes.text}>
          Over 100,000 + students found our application helpful
        </Typography>
      </div>
      <div className={classes.cards}>
        <Card className={classes.card} variant="outlined">
          <img src={quote} className={classes.quote} />
          <CardContent className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
              {
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua."'
              }
            </Typography>
            <Box component="div" className={classes.footer}>
              <AccountCircleIcon className={classes.icon} />
              <Box component="div" className={classes.information}>
                <Typography variant="h6" className={classes.name}>
                  John Doe
                </Typography>
                <Typography variant="h6" className={classes.school}>
                  College of University
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card className={classes.card} variant="outlined">
          <img src={quote} className={classes.quote} />
          <CardContent className={classes.card}>
            <Typography variant="h6" className={classes.cardTitle}>
              {
                '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua."'
              }
            </Typography>
            <Box component="div" className={classes.footer}>
              <AccountCircleIcon className={classes.icon} />
              <Box component="div" className={classes.information}>
                <Typography variant="h6" className={classes.name}>
                  John Doe
                </Typography>
                <Typography variant="h6" className={classes.school}>
                  College of University
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
