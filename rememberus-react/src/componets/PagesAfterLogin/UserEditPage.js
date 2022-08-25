import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./UserEditPage.css";
import "./background-style.css";

const UserEditPage = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [enteredPrivacy, setEnteredPrivacy] = useState("");

  const UserNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const PasswordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const AddressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };
  const GenderChangeHandler = (event) => {
    setEnteredGender(event.target.value);
  };
  const PrivacyChangeHandler = (event) => {
    setEnteredPrivacy(event.target.value);
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
        password: "123456",
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
          className="Email"
          label="Email"
          value={enteredEmail}
          onChange={EmailChangeHandler}
        />
        <TextField
          className="Address"
          label="Address"
          value={enteredAddress}
          onChange={AddressChangeHandler}
        />
        <TextField
          className="Gender"
          label="Gender"
          value={enteredGender}
          onChange={GenderChangeHandler}
        />
        <TextField
          className="Privacy"
          label="Privacy"
          value={enteredPrivacy}
          onChange={PrivacyChangeHandler}
        />

        <Button variant="contained" onClick={ChangeDetailsHandler}>
          Change Details
        </Button>
      </div>
    </div>
  );
};

export default UserEditPage;
