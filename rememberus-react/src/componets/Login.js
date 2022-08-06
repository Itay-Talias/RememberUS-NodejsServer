import { React, useState } from "react";
import "./Login.css";
import "./background.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import logo from "./RememberUs-Logo.png";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

const Login = () => {
  let navigate = useNavigate();

  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [needErrorMsgUserName, setNeedErrorMsgUserName] = useState(false);
  const [needErrorMsgPassword, setNeedErrorMsgPassword] = useState(false);

  const [enteredUserName, setEnteredUserName] = useState("");
  const UserNameChangeHandler = (event) => {
    if (enteredUserName.trim().length === 0) {
      setIsValidUserName(true);
      setNeedErrorMsgUserName(false);
    }
    setEnteredUserName(event.target.value);
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const PasswordChangeHandler = (event) => {
    if (enteredPassword.trim().length === 0) {
      setIsValidPassword(true);
      setNeedErrorMsgPassword(false);
    }
    setEnteredPassword(event.target.value);
  };

  const LoginHandler = async (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      setIsValidUserName(false);
      setNeedErrorMsgUserName(true);
    }
    if (enteredPassword.trim().length === 0) {
      setIsValidPassword(false);
      setNeedErrorMsgPassword(true);
    }
    if (enteredUserName === "itay")
      navigate("../HomePrivate", { replace: true });
  };

  return (
    <form className="Myform">
      <div>
        <img src={logo} alt="Logo" className="Logo" />
      </div>
      <div>
        <div>
          <TextField
            className={isValidUserName ? "valid" : "invalid"}
            name="username"
            type="username"
            placeholder="username"
            label="username"
            value={enteredUserName}
            onChange={UserNameChangeHandler}
          />
        </div>
        <div>
          <TextField
            className={isValidPassword ? "valid" : "invalid"}
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            value={enteredPassword}
            onChange={PasswordChangeHandler}
          />
        </div>
      </div>
      <div className="space"></div>
      <div>
        <Link to="/SignUp" style={{ textDecoration: "none" }}>
          {<Button variant="contained">Sign-up</Button>}
        </Link>
        <Button variant="contained" onClick={LoginHandler}>
          Log-in
        </Button>
      </div>
      <div>
        {needErrorMsgUserName ? (
          <Alert severity="error">The field UserName is empty</Alert>
        ) : null}
        {needErrorMsgPassword ? (
          <Alert severity="error">The field Password is empty</Alert>
        ) : null}
      </div>
    </form>
  );
};

export default Login;
