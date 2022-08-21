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
                display={editPage}
            ></UserPublicPage>
            <UserEditPage
                userInfo={props.userInfo}
                display={publicPage}
            ></UserEditPage>
        </div>
    );
};

export default UserHomePage;
