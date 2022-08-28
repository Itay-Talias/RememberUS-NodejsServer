import { React, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import ImageUploading from "react-images-uploading";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Popup from "reactjs-popup";
import RadioControl from "./RadioControl.js";
import "reactjs-popup/dist/index.css";
import "./TitlebarImageList.css";

const TitlebarImageList = (props) => {
    const [furnitureImages, setfurnitureImages] = useState([]); //get the fernture array using props!!

    const onChangefurnitureImages = (newfurnitureImage) => {
        let temp = {
            img: newfurnitureImage[newfurnitureImage.length - 1].img,
            key: furnitureImages.length + 1,
            file: newfurnitureImage[newfurnitureImage.length - 1].file,
            title: undefined,
            flag: true,
        };
        temp.title = "sofa"; //send requst to pythonServerRouter.get("/send_photo_to_python_server" and get furniture
        newfurnitureImage.pop();
        newfurnitureImage.push(temp);
        // add temp furniture to array to server
        setfurnitureImages(newfurnitureImage);
    };

    const RemoveAllImages = () => {
        setfurnitureImages([]);
        //remove the furniture array from the server
    };

    const RemoveImage = (base64) => {
        let filtered = furnitureImages.filter(function (value) {
            return value.key !== base64;
        });
        //remove specific image from array
        setfurnitureImages(filtered);
    };

    const ShowImage = (key) => {
        const newArr = furnitureImages.map((obj) => {
            if (obj.key === key && obj.file) {
                return { ...obj, flag: !obj.flag };
            }
            return obj;
        });
        setfurnitureImages(newArr);
    };

    const updateFurnitureWithoutImage = (furnitureValue) => {
        let temp = {
            img: require(`../../../Images/furnituresImages/${furnitureValue}.jpg`),
            key: furnitureImages.length + 1,
            file: false,
            title: furnitureValue,
            flag: false,
        };
        const newfurnitureArr = [...furnitureImages, temp];
        // add temp furniture to array withoutimage
        setfurnitureImages(newfurnitureArr);
    };
    return (
        <div>
            <ImageList className="image-list">
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">
                        {furnitureImages.length} furnitures
                    </ListSubheader>
                    {furnitureImages.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={
                                    item.flag && item.file
                                        ? require(`../../../Images/furnituresImages/${item.title}.jpg`)
                                        : `${item.img}`
                                }
                                alt={item.title}
                                loading="lazy"
                                onClick={() => {
                                    ShowImage(item.key);
                                }}
                            />
                            {console.log("hoo")}
                            <ImageListItemBar
                                title={
                                    item.flag && item.file
                                        ? `Click to see the original ${item.title}`
                                        : `${item.title}`
                                }
                                actionIcon={
                                    <IconButton
                                        sx={{
                                            color: "rgba(255, 255, 255, 0.54)",
                                        }}
                                        onClick={() => {
                                            RemoveImage(item.key);
                                        }}
                                    >
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageListItem>
            </ImageList>
            <ImageUploading
                id="img-upl"
                value={furnitureImages}
                onChange={onChangefurnitureImages}
                dataURLKey="img"
                multiple
            >
                {({ onImageUpload }) => (
                    <div className="btn-UploadRemove">
                        <Button onClick={onImageUpload}>
                            Upload furniture image
                        </Button>
                        &nbsp;
                        {furnitureImages.length !== 0 ? (
                            <Button onClick={RemoveAllImages}>
                                Remove all images
                            </Button>
                        ) : undefined}
                        <Popup
                            trigger={
                                <Button className="uploadWithoutImage">
                                    Upload furniture
                                </Button>
                            }
                            position="top center"
                        >
                            <RadioControl
                                addFurnitureHandler={
                                    updateFurnitureWithoutImage
                                }
                            />
                        </Popup>
                    </div>
                )}
            </ImageUploading>
        </div>
    );
};

export default TitlebarImageList;
