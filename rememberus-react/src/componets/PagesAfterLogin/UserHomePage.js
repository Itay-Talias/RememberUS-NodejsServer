import { React, useState } from "react";
import UserPrivatePage from "./UserPrivatePage";
import UserPublicPage from "./UserPublicPage";
import UserEditPage from "./UserEditPage";
import "./UserHomePage.css";
import BarMenu from "./ComponentForHomePage/BarMenu";

const UserHomePage = (props) => {
  const [privatePage, setPrivatePage] = useState(true);
  const [publicPage, setPublicPage] = useState(false);
  const [editPage, setEditPage] = useState(false);

  const user_data_dump = {
    userName: "Elad Tennenholtz",
    password: "123456",
    email: "test@gmail.com",
    adress: "",
    gender: "",
    personPrivacy: "",
  };

  return (
    <div>
      <BarMenu
        nonePrivatePage={setPrivatePage}
        nonePublicPage={setPublicPage}
        noneEditPage={setEditPage}
      ></BarMenu>
      <UserPrivatePage
        userInfo={props.userInfo}
        display={privatePage}
      ></UserPrivatePage>
      <UserPublicPage
        userInfo={props.userInfo}
        display={publicPage}
      ></UserPublicPage>
      <UserEditPage
        userName={user_data_dump.userName}
        password={user_data_dump.password}
        display={editPage}
      ></UserEditPage>
    </div>
  );
};

export default UserHomePage;
