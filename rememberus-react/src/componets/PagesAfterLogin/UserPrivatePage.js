import { React, useState } from "react";
import "./UserPrivatePage.css";
import "./background-style.css";
import LoggedInUserInfo from "./ComponentForHomePage/LoggedInUserInfo";
import { Button } from "@mui/material";
import ImageUploading from "react-images-uploading";
import TitlebarImageList from "./ComponentForHomePage/TitlebarImageList";
import axios from "axios";

const UserPrivatePage = (props) => {
    // console.log(props.userInfo);

    const [floorPlanImage, setFloorPlanImage] = useState([]); //get floor plan from props!!
    const onChangeFoorPlan = (newFloorPlanImage) => {
        // if (floorPlanImage.length === 0) {
        //     axios
        //         .post(`http://localhost:4000/api/v1/User/AddForPlanImage`, {
        //             userName: props.userInfo.userName,
        //             forPlanImageInBase64: newFloorPlanImage,
        //         })
        //         .then((res) => {
        //             console.log(res);
        //             console.log(res.data);
        //         });
        // } else {
        //     axios
        //         .post(
        //             `http://localhost:4000/api/v1/User/DeleteForPlanByIndex`,
        //             {
        //                 userName: props.userInfo.userName,
        //                 forPlanIndex: 0,
        //             }
        //         )
        //         .then((res) => {
        //             console.log(res);
        //             console.log(res.data);
        //         });
        // }
        setFloorPlanImage(newFloorPlanImage);
        //set the floorplan of the user in server
    };
    return (
        <div className={props.display ? "continer" : "display-none"}>
            <LoggedInUserInfo
                name={`${props.userInfo.lastName} ${props.userInfo.firstName}`}
                street={props.userInfo.adress}
                gender={props.userInfo.gender}
            />
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
                                <div key={index} className="image-item">
                                    <img
                                        className="floorPlan"
                                        src={image["data_url"]}
                                        alt="floorPlanPhoto"
                                    />
                                    <div>
                                        <Button
                                            className="Removebtn"
                                            onClick={() => onImageRemove(index)}
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
    );
};

export default UserPrivatePage;
