import React, { useRef, useContext, useState } from "react";
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/client";
import { login } from "../../api/mutation";
import ModalContext from "../../contexts/ModalContext";
import AuthContext from "../../contexts/AuthContext";
import Alert from "../../components/Errorhandler";

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

const Login = () => {
  const classes = useStyles();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { closeModal } = useContext(ModalContext);
  const { setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [loginFunc] = useMutation(login, {
    onError: (err) => {
      console.log(err);
      setMessage("Please include a valid email or password");
    },
    onCompleted: (data) => {
      setAuth(data.login);
      closeModal();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value && emailRef.current.value) {
      loginFunc({
        variables: {
          loginPassword: passwordRef.current.value,
          loginEmail: emailRef.current.value
        }
      });
    } else {
      setMessage("Please fill up the required fields below");
    }
  };

  const clearMessage = () => {
    setMessage("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper} data-testid="login-form">
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
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputProps={{ "data-testid": "email-field" }}
            inputRef={emailRef}
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
            inputProps={{ "data-testid": "password-field" }}
            inputRef={passwordRef}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            data-testid="signin-btn"
          >
            Log in
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

export default Login;
