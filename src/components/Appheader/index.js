import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Box,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SchoolIcon from "@material-ui/icons/School";
import ModalContext from "../../contexts/ModalContext";
import Signin from "../SigninForm";
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
  },
  userinfo: {
    display: "flex",
    alignItems: "center"
  },
  avatar: {
    textTransform: "capitalize",
    marginRight: 10
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
  const token = localStorage.getItem("accessToken");
  const user = localStorage.getItem("user");
  const info = JSON.parse(user);
  const [menu, setMenu] = useState(null);
  const { showModal } = useContext(ModalContext);

  const handleClick = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
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
          {token ? (
            <>
              <Button
                color="inherit"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <div className={classes.userinfo}>
                  <Avatar className={classes.avatar}>
                    {username.charAt(0)}
                  </Avatar>
                  <Typography variant="h6" className={classes.title}>
                    {info.username}
                  </Typography>
                </div>
              </Button>
              <StyledMenu
                id="customized-menu"
                anchorEl={menu}
                keepMounted
                open={Boolean(menu)}
                onClose={handleClose}
              >
                <StyledMenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary=" Sign out" />
                </StyledMenuItem>
              </StyledMenu>
            </>
          ) : (
            <>
              <Button
                className={classes.login}
                onClick={() =>
                  showModal({
                    content: Signin,
                    title: "Login"
                  })
                }
                data-testid="signIn"
              >
                {"Log in"}
              </Button>
              <Button
                variant="contained"
                className={classes.signin}
                label="Sign up"
                onClick={() =>
                  showModal({
                    content: Signin,
                    title: "Sign up"
                  })
                }
                data-testid="signIn"
              >
                {"Sign up"}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
