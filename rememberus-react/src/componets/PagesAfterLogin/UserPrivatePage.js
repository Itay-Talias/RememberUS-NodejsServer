import { React, useState } from "react";
import "./UserPrivatePage.css";
import "./background-style.css";
import LoggedInUserInfo from "./ComponentForHomePage/LoggedInUserInfo";
import { Button } from "@mui/material";
import ImageUploading from "react-images-uploading";
import TitlebarImageList from "./ComponentForHomePage/TitlebarImageList";
import axios from "axios";

const UserPrivatePage = (props) => {
  console.log(props.userInfo);
  const [floorPlanImage, setFloorPlanImage] = useState([]);
  // if (props.userInfo.forPlanArray.length !== 0) {
  //   setFloorPlanImage(props.userInfo.forPlanArray[0].forPlanImageInBase64);
  // }

  const onChangeFoorPlan = (newFloorPlanImage) => {
    //console.log(props.userInfo.forPlanArray[0]);
    //let temp = [{ data_url: newFloorPlanImage[0].data_url }];
    setFloorPlanImage(newFloorPlanImage); //Show floorPlan
    //console.log("------------");
    // console.log(newFloorPlanImage[0].data_url);
    //console.log(floorPlanImage);
    axios
      .post(`http://localhost:4000/api/v1/User/AddNewForPlanImage`, {
        userName: props.userInfo.userName,
        forPlanImageInBase64: newFloorPlanImage,
      })
      .then((res) => {
        //props.changeUserInfo(res.data.info);
      });
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
