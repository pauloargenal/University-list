import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card, CardContent, Typography, Avatar } from "@material-ui/core";
import quote from "../../../../assets/images/6041174ae60be81bdc89d32b_quote.svg";

const useStyles = makeStyles((theme) => ({
  howitworks: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    marginBottom: 15
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
    width: 50,
    height: 50,
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
    paddingLeft: 100,
    paddingRight: 100,
    [theme.breakpoints.down("md")]: {
      paddingLeft: 0,
      paddingRight: 0,
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center"
    }
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
}));

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
                '"With the use of their application i manage to find the universities that i really like with just one click. It is really hassle free!."'
              }
            </Typography>
            <Box component="div" className={classes.footer}>
              <Avatar
                alt="John Doe"
                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1048&q=80"
                className={classes.icon}
              />
              <Box component="div" className={classes.information}>
                <Typography variant="h6" className={classes.name}>
                  John Doe
                </Typography>
                <Typography variant="h6" className={classes.school}>
                  Computer Science student of Xavier University
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
                '"I like how the application lets me browse every school that is available all over the place. It is also convenient since we are surfing thru the internet"'
              }
            </Typography>
            <Box component="div" className={classes.footer}>
              <Avatar
                alt="John Doe"
                src="https://images.unsplash.com/photo-1596496356940-0a111ee799c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                className={classes.icon}
              />
              <Box component="div" className={classes.information}>
                <Typography variant="h6" className={classes.name}>
                  Doe John
                </Typography>
                <Typography variant="h6" className={classes.school}>
                  Civil Engineering student in Sullivan University
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
