import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import "./TitleBarComment.css";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`comment ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function TitleBarComment() {
  return (
    <Box className="comment-bar">
      <h2>Comments:</h2>
      <FixedSizeList
        height={400}
        width={200}
        itemSize={46}
        itemCount={5}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
