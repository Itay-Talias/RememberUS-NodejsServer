import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./UserEditPage.css";
import "./background-style.css";

const privacy = ["True", "False"];

const UserEditPage = (props) => {
    const [UserDetailsObj, setUserDetailsObj] = useState({
        userName: props.userName,
        password: props.password,
        email: props.email,
        address: props.address,
        gender: props.gender,
        privacy: props.privacy,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const name = e.target;
        const value = name.value;
        console.log(name, value);
        setUserDetailsObj((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const ChangeDetailsHandler = () => {
        console.log(UserDetailsObj);
    };
    return (
        <div className={props.display ? "continer" : "display-none"}>
            <form className="loginEditPage">
                <TextField
                    className="detaile"
                    placeholder="username"
                    name="userName"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.userName}
                />
                <TextField
                    className="detaile"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.password}
                />
                <TextField
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.email}
                />
                <TextField
                    className="detaile"
                    placeholder="address"
                    name="address"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.address}
                />
                <TextField
                    className="detaile"
                    placeholder="gender"
                    name="gender"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.gender}
                />
                <TextField
                    className="detaile"
                    id="select"
                    select
                    label="Privacy"
                    value={UserDetailsObj.privacy}
                    onChange={handleChange}
                >
                    {privacy.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <Button variant="contained" onClick={ChangeDetailsHandler}>
                    Change Details
                </Button>
            </form>
        </div>
    );
};
export default UserEditPage;
