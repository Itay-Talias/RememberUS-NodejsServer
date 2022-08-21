import { React, useState } from "react";
import "./background-style.css";

const UserPublicPage = (props) => {
    return <div className={props.display ? "continer" : "display-none"}></div>;
};

export default UserPublicPage;
