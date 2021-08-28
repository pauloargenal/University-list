import React, { useRef, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { closeModal } = useContext(ModalContext);
  const { setAuth } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [loginFunc] = useMutation(login, {
    onError: (err) => {
      console.log(err);
      setMessage(err.message);
    },
    onCompleted: (data) => {
      setAuth(data.login);
      //history.push("/");
      closeModal();
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value || emailRef.current.value) {
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

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
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
