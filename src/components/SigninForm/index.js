import React, { useRef, useContext, useState } from "react";
import { Button, TextField, Link, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import { signup } from "../../api/mutation";
import ModalContext from "../../contexts/ModalContext";
import AuthContext from "../../contexts/AuthContext";
import Alert from "../Errorhandler";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#6596F3"
  },
  label: {
    color: "#6596F3"
  }
}));

const Signin = () => {
  const classes = useStyles();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { closeModal } = useContext(ModalContext);
  const { setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [signupFunc] = useMutation(signup, {
    onError: (err) => {
      console.log(err);
      setMessage("Email already taken");
    },
    onCompleted: (data) => {
      setAuth(data.signup);
      closeModal();
    }
  });

  const clearMessage = () => {
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(emailRegEx.test(emailRef.current.value));

    if (emailRegEx.test(emailRef.current.value)) {
      if (
        passwordRef.current.value &&
        emailRef.current.value &&
        nameRef.current.value
      ) {
        signupFunc({
          variables: {
            signupPassword: passwordRef.current.value,
            signupEmail: emailRef.current.value,
            signupUsername: nameRef.current.value
          }
        });
      } else {
        setMessage("Please fill up the required fields below");
      }
    } else {
      setMessage("Please include a valid email address");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {message ? (
        <Alert
          data-testid="alert"
          className={classes.alert}
          message={message}
          clearMessage={clearMessage}
          severity="error"
        />
      ) : (
        ""
      )}
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="user name"
            autoComplete="username"
            inputProps={{ "data-testid": "user-field" }}
            inputRef={nameRef}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputRef={emailRef}
            inputProps={{ "data-testid": "email-field" }}
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={passwordRef}
            inputProps={{ "data-testid": "password-field" }}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            data-testid="signin-btn"
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" className="label">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signin;
