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

const TitlebarImageList = () => {
    const [furnitureImages, setfurnitureImages] = useState([]);

    const onChangefurnitureImages = (newfurnitureImage) => {
        let temp = {
            img: undefined,
            key: furnitureImages.length + 1,
            file: undefined,
            title: undefined,
            flag: true,
        };
        temp.img = newfurnitureImage[newfurnitureImage.length - 1].img;
        temp.file = newfurnitureImage[newfurnitureImage.length - 1].file;
        temp.title = temp.file.name;
        newfurnitureImage.pop();
        newfurnitureImage.push(temp);
        setfurnitureImages(newfurnitureImage);
    };

    const RemoveAllImages = () => {
        setfurnitureImages([]);
    };

    const RemoveImage = (base64) => {
        let filtered = furnitureImages.filter(function (value) {
            return value.key !== base64;
        });
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
            img: undefined,
            key: furnitureImages.length + 1,
            file: undefined,
            title: undefined,
            flag: false,
        };
        temp.file = false;
        temp.img = require(`../../../Images/furnituresImages/${furnitureValue}.jpg`);
        temp.title = furnitureValue;
        const newfurnitureArr = [...furnitureImages, temp];
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
                                        ? require(`../../../Images/furnituresImages/${item.title}`)
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
