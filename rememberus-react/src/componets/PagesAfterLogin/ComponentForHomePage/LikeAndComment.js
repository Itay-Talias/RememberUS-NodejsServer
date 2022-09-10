import React, { useState } from "react";
import "./LikeAndComment.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LikeAndComment = (props) => {
  //props.userInfo === logged user
  //props.user === user that have this floorplan
  const [isClicked, setIsClicked] = useState(false);
  const LikeClick = () => {
    setIsClicked(!isClicked);
    //send like to serevr
  };
  const CommentClick = () => {
    //send comment to server
  };
  return (
    <div className="continerOfLikeAndComment">
      <h4 className="title-like">
        {`${props.user.firstName} ${props.user.lastName} have ${props.user.forPlanArray[0].likes.length} likes`}
      </h4>
      <Button className="like-button" onClick={LikeClick}>
        <span className="likes-counter">{isClicked ? `unlike` : `like`}</span>
      </Button>
      <TextField id="outlined-basic" label="Your Comment" variant="outlined" />
      <Button className="comment-button" onClick={CommentClick}>
        <span>Send</span>
      </Button>
    </div>
  );
};

export default LikeAndComment;
