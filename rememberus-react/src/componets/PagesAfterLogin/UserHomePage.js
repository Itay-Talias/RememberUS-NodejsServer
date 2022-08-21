import { React, useState } from "react";
import "./UserHomePage.css";
import LoggedInUserInfo from "./ComponentForHomePage/LoggedInUserInfo";
import AppBarMenu from "./ComponentForHomePage/AppBarMenu";
import { Button } from "@mui/material";
import logo from "../../Images/RememberUs-Logo.png";
import ImageUploading from "react-images-uploading";
import TitlebarImageList from "./ComponentForHomePage/TitlebarImageList";

const UserHomePage = (props) => {
    console.log(props.userInfo);

    const [floorPlanImage, setFloorPlanImage] = useState([]);
    const onChangeFoorPlan = (newFloorPlanImage) => {
        setFloorPlanImage(newFloorPlanImage);
    };
    return (
        <div className="conteiner">
            <AppBarMenu></AppBarMenu>
            <div className="Myform1">
                <LoggedInUserInfo
                    name={`${props.userInfo.lastName} ${props.userInfo.firstName}`}
                    street={props.userInfo.adress}
                    gender={props.userInfo.gender}
                />
                <div className="Logo-div">
                    <img src={logo} alt="Logo" className="Logo-pic" />
                </div>

                <div>
                    <ImageUploading
                        value={floorPlanImage}
                        onChange={onChangeFoorPlan}
                        dataURLKey="data_url"
                    >
                        {({ onImageUpload, onImageRemove }) => (
                            <div>
                                {floorPlanImage.length === 0 ? (
                                    <Button
                                        className="Uploadbtn"
                                        onClick={onImageUpload}
                                    >
                                        Upload floor plan
                                    </Button>
                                ) : undefined}
                                {floorPlanImage.map((image, index) => (
                                    <div
                                        key={index}
                                        className="image-item"
                                        style={{
                                            "margin-top": "10%",
                                            position: "relative",
                                            display: "inline-block",
                                        }}
                                    >
                                        <img
                                            className="floorPlan"
                                            src={image["data_url"]}
                                            alt="floorPlanPhoto"
                                        />
                                        <div>
                                            <Button
                                                className="Removebtn"
                                                onClick={() =>
                                                    onImageRemove(index)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>
                </div>
                <div className="Images-bar">
                    <TitlebarImageList />
                </div>
            </div>
        </div>
    );
};

export default UserHomePage;
