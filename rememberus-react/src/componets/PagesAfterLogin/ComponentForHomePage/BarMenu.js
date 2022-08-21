import React from "react";
import "./BarMenu.css";
import { Link } from "react-router-dom"; //link to nevigate to spesic router from html and useNevigate to nevigate from code to another router from spesific
import logo from "../../../Images/RememberUs-Logo.png";

const BarMenu = (props) => {
    const onClickPrivatePage = () => {
        props.nonePrivatePage(true);
        props.nonePublicPage(false);
        props.noneEditPage(false);
    };
    const onClickPublicPage = () => {
        props.nonePublicPage(true);
        props.nonePrivatePage(false);
        props.noneEditPage(false);
    };
    const onClickEditPage = () => {
        props.nonePublicPage(false);
        props.noneEditPage(true);
        props.nonePrivatePage(false);
    };
    const onClickLogout = () => {
        console.log("logout user");
    };

    return (
        <div className="nav-container">
            <div className="main-items">
                <div className="nav-item" onClick={onClickPrivatePage}>
                    My FloorPlan
                </div>
                <div className="nav-item" onClick={onClickPublicPage}>
                    Other FloorPlan
                </div>
                <div className="nav-item" onClick={onClickEditPage}>
                    Edit My Details
                </div>
                <Link to="/Login" style={{ textDecoration: "none" }}>
                    {
                        <div className="nav-item" onClick={onClickLogout}>
                            Logout
                        </div>
                    }
                </Link>
            </div>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo-pic" />
            </div>
        </div>
    );
};

export default BarMenu;
