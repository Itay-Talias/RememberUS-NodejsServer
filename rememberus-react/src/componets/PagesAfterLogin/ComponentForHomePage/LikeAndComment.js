import React, { useState } from "react";
import "./LikeAndComment.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const LikeAndComment = (props) => {
  //props.userInfo === logged user
  //props.user === user that we clicked done
  const [enterdComment, setEnterdComment] = useState("");

  //function tat go to server and checks if i like the floorplan
  //if yes --> true else false
  const [likeClicked, setIsClicked] = useState(false);
  //init the comment array
  const [commentArr, setCommentArr] = useState([]);

  const LikeClick = () => {
    //send click to serevr, if likeclick==false send server like
    //else send server dislike
    setIsClicked(!likeClicked);
  };
  const CommentChangeHandler = (event) => {
    setEnterdComment(event.target.value);
  };
  const CommentClick = () => {
    //send comment to server
    //send comment and user
    console.log(enterdComment);
  };
  return (
    <div className="continerOfLikeAndComment">
      <h4 className="title-like">
        {`${props.user.firstName} ${props.user.lastName} have ${props.user.forPlanArray[0].likes.length} likes`}
      </h4>
      <Button className="like-button" onClick={LikeClick}>
        <span className="likes-counter">{likeClicked ? `unlike` : `like`}</span>
      </Button>
      <TextField
        id="outlined-basic"
        label="Your Comment"
        variant="outlined"
        value={enterdComment}
        onChange={CommentChangeHandler}
      />
      <Button className="comment-button" onClick={CommentClick}>
        <span>Send</span>
      </Button>
    </div>
  );
};

export default LikeAndComment;
