import React, { useState, useEffect } from "react";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { emailValidator } from "../../Helpers/emailValidator";
import { passwordValidator } from "../../Helpers/passwordValidator";
import { withRouter, Link } from "react-router-dom";
import styles from "./signin.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(74, 74, 74)",
    },
    "& .MuiInputBase-input": {
      color: "#dbd8d8",
    },
    "& .MuiFormLabel-root": {
      color: "rgba(208, 208, 208, 0.54)",
    },
  },
}));

const Body = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const classes = useStyles();

  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isAuth === true) {
      props.history.push("/dashboard");
    } else {
      props.history.push("/");
    }
  }, [isAuth]);

  const signIn = () => {
    const emailError = emailValidator(email.value);
    const passError = passwordValidator(password.value);

    let status = emailError
      ? setEmail({ ...email, error: emailError })
      : passError
      ? setPassword({ ...password, error: passError })
      : dispatch(
          authActions.signInUser({
            email: email.value,
            password: password.value,
          })
        );
  };

  return (
    <div className={styles.main}>
      <div className={styles.area}>
        <div className={styles.login__body}>
          <div className={styles.login__form}>
            <h2 className={styles.login__form__heading}>Sign In</h2>
            <div className={styles.user__email}>
              <TextInput
                value={email.value}
                onChange={(event) =>
                  setEmail({ value: event.target.value, error: "" })
                }
                error={!!email.error}
                errorText={email.error}
                className={`textField ${classes.root}`}
                label="Enter your email"
                variant="filled"
              />
            </div>
            <div className={styles.user__password}>
              <TextInput
                value={password.value}
                onChange={(event) =>
                  setPassword({ value: event.target.value, error: "" })
                }
                error={!!password.error}
                errorText={password.error}
                label="Enter your password"
                variant="filled"
                className={`textField ${classes.root}`}
              />
            </div>
            <div className={styles.submit__btn}>
              <Button
                variant="contained"
                className={styles.btn__signin}
                color="secondary"
                buttontext="Sign In"
                onClick={signIn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Body);
