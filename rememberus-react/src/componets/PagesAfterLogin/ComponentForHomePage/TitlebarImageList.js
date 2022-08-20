import { React, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import ImageUploading from "react-images-uploading";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TitlebarImageList = () => {
  const [furnitureImages, setfurnitureImages] = useState([]);

  const onChangefurnitureImages = (newfurnitureImage) => {
    var temp = {
      img: undefined,
      key: undefined,
      file: undefined,
      title: undefined,
      flag: true,
    };
    temp.img = newfurnitureImage[newfurnitureImage.length - 1].img;
    temp.file = newfurnitureImage[newfurnitureImage.length - 1].file;
    temp.title = temp.file.name;
    temp.key = newfurnitureImage[newfurnitureImage.length - 1].img;
    newfurnitureImage.pop();
    newfurnitureImage.push(temp);
    setfurnitureImages(newfurnitureImage);
  };

  const RemoveAllImages = () => {
    setfurnitureImages([]);
  };

  const RemoveImage = (base64) => {
    var filtered = furnitureImages.filter(function (value, index, arr) {
      return value.img !== base64;
    });
    setfurnitureImages(filtered);
  };

  const ShowImage = (base64) => {
    const newArr = furnitureImages.map((obj) => {
      if (obj.img === base64) {
        return { ...obj, flag: !obj.flag };
      }
      return obj;
    });
    setfurnitureImages(newArr);
  };

  return (
    <div>
      <ImageList sx={{ width: 450, height: 800 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">
            {furnitureImages.length} furnitures
          </ListSubheader>
          {furnitureImages.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={
                  item.flag
                    ? require(`../../../Images/${item.title}`)
                    : `${item.img}`
                }
                alt={item.title}
                loading="lazy"
                onClick={() => {
                  ShowImage(item.img);
                }}
              />
              <ImageListItemBar
                title={
                  item.flag
                    ? `Click to see the original ${item.title}`
                    : `${item.title}`
                }
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    onClick={() => {
                      RemoveImage(item.img);
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
        value={furnitureImages}
        onChange={onChangefurnitureImages}
        dataURLKey="img"
        multiple
      >
        {({ onImageUpload }) => (
          <div>
            <Button onClick={onImageUpload}>Upload furniture image</Button>
            &nbsp;
            {furnitureImages.length !== 0 ? (
              <Button onClick={RemoveAllImages}>Remove all images</Button>
            ) : undefined}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default TitlebarImageList;
