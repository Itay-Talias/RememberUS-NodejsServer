import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppBarMenu() {
    return (
        <Box sx={{ flexGrow: 1 }} className="appBar">
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Pick your Chooice
                    </Typography>
                    <div className="Buttons">
                        <Button
                            variant="contained"
                            className="NewFloorPlanButton"
                        >
                            Upload new FloorPlan
                        </Button>
                        <div className="space"></div>
                        <Button variant="contained" className="Editing Details">
                            Edit My Details
                        </Button>
                        <Button variant="contained" className="Logout">
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
