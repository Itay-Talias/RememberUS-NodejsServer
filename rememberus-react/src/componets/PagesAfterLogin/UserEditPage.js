import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./UserEditPage.css";
import "./background-style.css";

const UserEditPage = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const UserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const PasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const ChangeDetailsHandler = () => {
    if (enteredUserName !== "") {
      const newUserName = {
        userName: "itay", //props.userInfo.userName,
        updateField: "userName",
        updateData: enteredUserName,
      };
      console.log(newUserName);
    }
    if (enteredPassword !== "") {
      const newPassword = {
        password: "123456", //props.userInfo.userName,
        updateField: "password",
        updateData: enteredPassword,
      };
      console.log(newPassword);
    }
  };
  return (
    <div className={props.display ? "continer" : "display-none"}>
      <div className="login">
        <TextField
          className="Username"
          label="Username"
          value={enteredUserName}
          onChange={UserNameChangeHandler}
        />
        <TextField
          className="Password"
          label="Password"
          value={enteredPassword}
          onChange={PasswordChangeHandler}
        />
        <TextField
          className="Password"
          label="Password"
          value={enteredPassword}
          onChange={PasswordChangeHandler}
        />

        <Button variant="contained" onClick={ChangeDetailsHandler}>
          Change Details
        </Button>
      </div>
    </div>
  );
};

export default UserEditPage;
