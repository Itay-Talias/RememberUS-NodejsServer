import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import "./TitleBarPublic.css";

const TitleBarPublic = (props) => {
    let furnitureImages = [];

    return (
        <ImageList className="image-list-public">
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">
                    {furnitureImages.length} furnitures
                </ListSubheader>
                {furnitureImages.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={require(`../../../Images/furnituresImages/${item.title}.jpg`)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageListItem>
        </ImageList>
    );
};

export default TitleBarPublic;
