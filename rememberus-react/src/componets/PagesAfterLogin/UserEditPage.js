import { React, useState } from "react";
import Button from "@mui/material/Button";
import "./UserEditPage.css";
import "./background-style.css";

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
        <div
            className={
                props.display ? "continer continerEditPage" : "display-none"
            }
        >
            <form className="loginEditPage">
                <input
                    placeholder="username"
                    name="userName"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.userName}
                />
                <input
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.password}
                />
                <input
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.email}
                />
                <input
                    placeholder="address"
                    name="address"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.address}
                />
                <input
                    placeholder="gender"
                    name="gender"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.gender}
                />
                <input
                    placeholder="privacy"
                    name="privacy"
                    onChange={handleChange}
                    defaultValue={UserDetailsObj.privacy}
                />

                <Button variant="contained" onClick={ChangeDetailsHandler}>
                    Change Details
                </Button>
            </form>
        </div>
    );
};
export default UserEditPage;
