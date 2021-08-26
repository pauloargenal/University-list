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
    maxWidth: 300
  },
  media: {
    height: 140
  }
});

const UniversityCard = ({ name, country, image, page }) => {
  const classes = useStyles();
  const handleClick = (page) => {
    console.log(page);
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
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Country: ${country}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={handleClick(page)}>
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
