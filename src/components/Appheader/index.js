import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Box
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles(() => ({
  container: {
    flexGrow: 1
  },
  header: {
    background: "#fff",
    color: "#000",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.2)",
    paddingLeft: 100,
    paddingRight: 100,
    marginBottom: 20,
    "&:hover": {
      cursor: "pointer"
    }
  },
  title: {
    flexGrow: 1,
    fontSize: 28,
    fontWeight: 500
  },
  user: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: 5,
    fontSize: 40,
    color: "#5C8BE7"
  },
  signin: {
    backgroundColor: "#3CB371",
    color: "#FFFFFF",
    width: 90,
    "&:hover": {
      backgroundColor: "#38a167"
    }
  },
  login: {
    textTransform: "uppercase"
  }
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    color: "black"
  }
}))(MenuItem);

const AppHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const [menu, setMenu] = useState(null);

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <Box
              component="div"
              className={classes.user}
              onClick={() => history.push("/")}
            >
              <SchoolIcon className={classes.icon} />
              University Listings
            </Box>
          </Typography>
          <Button className={classes.login}>{"Log in"}</Button>
          <Button variant="contained" className={classes.signin}>
            {"Sign in"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
