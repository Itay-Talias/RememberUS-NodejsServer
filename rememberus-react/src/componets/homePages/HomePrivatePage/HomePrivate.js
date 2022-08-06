import { React, useState } from "react";
import "../backgroundHomePage.css";
import "./HomePrivate.css";
import InfoFloorPlan from "./InfoFloorPlan";
import { Button } from "@mui/material";
import logo from "../../RememberUs-Logo.png";
import ImageUploading from "react-images-uploading";
import TitlebarImageList from "./TitlebarImageList";

const HomePrivate = () => {
  const [floorPlanImage, setFloorPlanImage] = useState([]);
  const onChangeFoorPlan = (newFloorPlanImage) => {
    setFloorPlanImage(newFloorPlanImage);
  };

  return (
    <form className="Myform1">
      <img src={logo} alt="Logo" className="Logo1" />
      <InfoFloorPlan street={"Tamar 10"} floor={"5"} numberOfRooms={"3"} />
      <div>
        <div style={{ float: "left" }}>
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
                  <div
                    key={index}
                    className="image-item"
                    style={{ width: "1500px", height: "850px" }}
                  >
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
        <div style={{ float: "right" }}>
          <TitlebarImageList />
        </div>
      </div>
    </form>
  );
};

export default HomePrivate;
