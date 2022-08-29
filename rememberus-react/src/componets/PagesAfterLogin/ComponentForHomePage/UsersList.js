import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./UsersList.css";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "username",
        headerName: "Username",
        width: 150,
    },
    {
        field: "city",
        headerName: "City",
        width: 150,
    },
    {
        field: "address",
        headerName: "Address",
        width: 150,
    },
];

const rows = [
    { id: 1, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 2, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 3, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 4, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 5, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 6, username: "itayt", city: "Holon", address: "Tamar10" },
    { id: 7, username: "itayt", city: "Holon", address: "Tamar10" },
];

const UsersList = (props) => {
    const onRowClicked = (GridRowParams) => {
        props.onClickUser(GridRowParams.row);
    };

    return (
        <Box className="table">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                disableSelectionOnClick={true}
                onRowClick={onRowClicked}
            />
        </Box>
    );
};

export default UsersList;
