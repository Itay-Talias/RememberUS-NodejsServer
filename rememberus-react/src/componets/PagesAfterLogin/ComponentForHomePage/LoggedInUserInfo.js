import React from "react";
import "./LoggedInUserInfo.css";

const LoggedInUserInfo = (props) => {
  let userIsMale = false;
  if (props.gender === "Male") {
    userIsMale = true;
  }

  return (
    <div className="sectiontext">
      <h1>
        Hello, {userIsMale ? "Mr." : "Ms."} {props.name}
      </h1>
      <h1>Adress: {props.street}</h1>
    </div>
  );
};

export default LoggedInUserInfo;
