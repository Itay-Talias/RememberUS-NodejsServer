import { React, useState } from "react";
import "./background-style.css";
import DataGrid1 from "./ComponentForHomePage/DataGrid1.js";

const UserPublicPage = (props) => {
    // get all public user
    return (
        <div className={props.display ? "continer" : "display-none"}>
            <DataGrid1></DataGrid1>
        </div>
    );
};

export default UserPublicPage;
