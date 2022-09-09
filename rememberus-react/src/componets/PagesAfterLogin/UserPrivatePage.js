import { React, useState, useContext } from "react";
import "./UserPrivatePage.css";
import "./background-style.css";
import LoggedInUserInfo from "./ComponentForHomePage/LoggedInUserInfo";
import { Button } from "@mui/material";
import ImageUploading from "react-images-uploading";
import TitlebarImageList from "./ComponentForHomePage/TitlebarImageList";
import axios from "axios";
// import { UserContext } from "../../App.js";

const UserPrivatePage = (props) => {
  // const user = useContext(UserContext);
  // console.log(user);
  const [floorPlanImage, setFloorPlanImage] = useState(
    props?.userInfo?.forPlanArray[0]?.forPlanImangeBase64 || []
  );

  const onChangeFoorPlan = (newFloorPlanImage) => {
    setFloorPlanImage(newFloorPlanImage); //Show floorPlan
    if (newFloorPlanImage.length !== 0) {
      axios.post(`http://localhost:4000/api/v1/User/AddNewForPlanImage`, {
        userName: props.userInfo.userName,
        forPlanImageInBase64: newFloorPlanImage,
      });
    } else {
      console.log("hiii");
      axios.post(`http://localhost:4000/api/v1/User/DeleteForPlanByIndex`, {
        userName: props.userInfo.userName,
        forPlanIndex: 0,
      });
    }
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
                <Button className="Uploadbtn" onClick={onImageUpload}>
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
        <TitlebarImageList
          userInfo={props.userInfo}
          changeUserInfo={props.changeUserInfo}
        />
      </div>
    </div>
  );
};

export default UserPrivatePage;
