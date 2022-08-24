import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./background-style.css";

const UserEditPage = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const UserNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
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
    };
    return (
        <div className={props.display ? "continer" : "display-none"}>
            <div>
                <TextField
                    className="Username"
                    label="Username"
                    value={enteredUserName}
                    onChange={UserNameChangeHandler}
                />
                <Button variant="contained" onClick={ChangeDetailsHandler}>
                    Change Details
                </Button>
            </div>
        </div>
    );
};

export default UserEditPage;
