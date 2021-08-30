import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField, Typography } from "@material-ui/core";
import CopyrightIcon from "@material-ui/icons/Copyright";
import { useMutation } from "@apollo/client";
import { subscription } from "../../api/mutation";
const useStyles = makeStyles(() => ({
  footer: {
    height: 350,
    backgroundColor: "#6596F3",
    padding: 100,
    position: "relative"
  },
  footerContent: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold"
  },
  message: {
    color: "#b54928",
    fontSize: 18
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    width: 300,
    border: "none",
    "&::before": {
      borderBottom: "none"
    },
    "& .MuiFilledInput-underline:after": {
      outline: "none",
      borderBottom: "none"
    }
  },
  submit: {
    backgroundColor: "#3CB371",
    color: "#FFFFFF",
    width: 90,
    height: 57,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    position: "relative",
    left: -90,
    "&:hover": {
      backgroundColor: "#38a167"
    },
    boxShadow: "none"
  },
  line: {
    marginTop: 30,
    width: "100%"
  },
  copyright: {
    marginLeft: 10
  },
  footerText: {
    color: "#ffff",
    display: "flex",
    width: 400
  }
}));
const Footer = () => {
  const classes = useStyles();
  const input = useRef();
  const [message, setMessage] = useState(null);
  const [subscribeFunc] = useMutation(subscription, {
    onCompleted: (data) => {
      console.log("data", data);
    },
    onError: (err) => {
      console.log(err.message);
      setMessage("Email Already Taken!");
    }
  });
  const handleSubscribe = (e) => {
    e.preventDefault();
    let emailRegEx = /\S+@\S+\.\S+/;
    let validate = emailRegEx.test(input.current.value);
    if (validate) {
      subscribeFunc({
        variables: {
          subscriptionEmail: input.current.value
        }
      });
      setMessage("Thank you for subscribing!");
    } else {
      setMessage("Please enter a valid email!");
    }
  };
  return (
    <div className={classes.footer}>
      <footer className={classes.footerContent}>
        <Typography className={classes.title} variant="p">
          Subscribe to our news letter
        </Typography>
        {message ? (
          <Typography className={classes.message} variant="p">
            {message}
          </Typography>
        ) : (
          ""
        )}
        <div className={classes.subsribe}>
          <TextField
            id="outlined-basic"
            label="Suscribe"
            variant="filled"
            className={classes.input}
            inputRef={input}
          />
          <Button
            variant="contained"
            className={classes.submit}
            onClick={handleSubscribe}
          >
            {"Submit"}
          </Button>
        </div>
        <hr className={classes.line} />
        <div className={classes.footerText}>
          <CopyrightIcon />
          <Typography className={classes.copyright} variant="p">
            copyright university listings 2021
          </Typography>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
