import { React, useState } from "react";
import "./background-style.css";

const UserEditPage = (props) => {
    return <div className={props.display ? "continer" : "display-none"}></div>;
};

export default UserEditPage;
