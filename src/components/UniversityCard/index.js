import React from "react";
import Proptypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 350,
    marginBottom: 20,
    marginRight: 20,
    flex: "20% 0 0"
  },
  media: {
    height: 140
  },
  cardBody: {
    height: 80,
    fontSize: 22,
    lineHeight: 1.5,
    marginBottom: 20
  },
  cardFooter: {
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    justifyContent: "space-between"
  }
});

const UniversityCard = ({ name, country, image, page }) => {
  const classes = useStyles();
  const handleClick = (page) => {
    window.location.href = `${page}`;
  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardBody}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Country: ${country}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardFooter}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={() => handleClick(page)}>
          Visit Website
        </Button>
      </CardActions>
    </Card>
  );
};

UniversityCard.propTypes = {
  name: Proptypes.string.isRequired,
  country: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  page: Proptypes.string.isRequired
};
export default UniversityCard;
