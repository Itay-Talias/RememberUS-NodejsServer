import { React, useState } from "react";
import "./background-style.css";
import UsersList from "./ComponentForHomePage/UsersList.js";
import PublicModal from "./ComponentForHomePage/PublicModal";

const UserPublicPage = (props) => {
    // console.log(props.listPublicUsers);
    const [user, setUser] = useState({});

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openModelWithUser = (userFromList) => {
        console.log(userFromList);
        handleOpen();
        setUser(userFromList);
    };
    return (
        <div className={props.display ? "continer" : "display-none"}>
            <UsersList
                onClickUser={openModelWithUser}
                listPublicUsers={props.listPublicUsers}
            ></UsersList>
            <PublicModal
                open={open}
                handelOpen={handleOpen}
                handleClose={handleClose}
                user={user}
            ></PublicModal>
        </div>
    );
};

export default UserPublicPage;
