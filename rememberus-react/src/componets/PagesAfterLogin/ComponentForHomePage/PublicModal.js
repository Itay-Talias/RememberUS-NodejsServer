import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./PublicModal.css";
import TitleBarPublic from "./TitleBarPublic";

const PublicModal = (props) => {
    console.log(props.user.username);
    return (
        <div>
            <Modal open={props.open} onClose={props.handleClose}>
                <Box className="modal">
                    <img
                        className="img-model"
                        src={require(`../../../Images/furnituresImages/sofa.jpg`)}
                    />
                    <TitleBarPublic className="bar-model"></TitleBarPublic>
                </Box>
            </Modal>
        </div>
    );
};

export default PublicModal;
