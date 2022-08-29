import { React, useState } from "react";
import UserPrivatePage from "./UserPrivatePage";
import UserPublicPage from "./UserPublicPage";
import UserEditPage from "./UserEditPage";
import "./UserHomePage.css";
import { Link } from "react-router-dom";
import BarMenu from "./ComponentForHomePage/BarMenu";

const UserHomePage = (props) => {
  const [privatePage, setPrivatePage] = useState(true);
  const [publicPage, setPublicPage] = useState(false);
  const [editPage, setEditPage] = useState(false);
  //in react for changing object during running we need to "latof" the change state function in that function
  const [loggedInUser, setLoggedInUser] = useState(props.userInfo);
  const onLoggedUser = (userInfo) => {
    setLoggedInUser((prev) => {
      return userInfo;
    });
  };

  return (
    <div>
      <BarMenu
        nonePrivatePage={setPrivatePage}
        nonePublicPage={setPublicPage}
        noneEditPage={setEditPage}
        userInfo={loggedInUser}
      ></BarMenu>
      <UserPrivatePage
        userInfo={loggedInUser}
        changeUserInfo={onLoggedUser}
        display={privatePage}
      ></UserPrivatePage>
      <UserPublicPage
        userInfo={loggedInUser}
        changeUserInfo={onLoggedUser}
        display={publicPage}
      ></UserPublicPage>
      <UserEditPage
        userInfo={loggedInUser}
        changeUserInfo={onLoggedUser}
        display={editPage}
        nonePrivatePage={setPrivatePage}
        noneEditPage={setEditPage}
      ></UserEditPage>
    </div>
  );
};

export default UserHomePage;
