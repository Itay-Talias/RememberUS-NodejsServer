import { React, useState } from "react";
import "./Login.css";
import "./background.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import logo from "./RememberUs-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  let navigate = useNavigate();
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [needErrorMsg, setNeedErrorMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [enteredUserName, setEnteredUserName] = useState("");
  const UserNameChangeHandler = (event) => {
    if (enteredUserName.trim().length === 0) {
      setIsValidUserName(true);
    }
    setEnteredUserName(event.target.value);
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const PasswordChangeHandler = (event) => {
    if (enteredPassword.trim().length === 0) {
      setIsValidPassword(true);
    }
    setEnteredPassword(event.target.value);
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    setNeedErrorMsg(false);
    if (enteredUserName.trim().length === 0) {
      setIsValidUserName(false);
    }
    if (enteredPassword.trim().length === 0) {
      setIsValidPassword(false);
    }
    axios
      .post(`http://localhost:4000/api/v1/User/Login`, {
        userName: enteredUserName,
        password: enteredPassword,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.Status === "Login succssed") {
          props.onLoggedUser(res.data.userInfo);
          navigate("../HomePrivate", {
            replace: true,
          });
        } else {
          setNeedErrorMsg(true);
          setErrorMsg(res.data.Reason);
        }
      });
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
        {needErrorMsg ? <Alert severity="error">{errorMsg}</Alert> : null}
      </div>
    </form>
  );
};

export default Login;
