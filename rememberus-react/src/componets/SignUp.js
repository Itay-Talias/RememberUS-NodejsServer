import {React,useState} from "react";
import './SignUp.css';
import './background.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import logo from "./RememberUs-Logo.png";
import { MenuItem } from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

const currencies=["Male","Female"];


const SignUp = () =>{

    const [currency, setCurrency] = useState("");

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    return  (
        <div className="form">
             <div className="Logo">
                <img src={logo} alt="Logo" className="Logo" />
            </div>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <div>
                    <TextField
                    required
                    id="outlined-required"
                    label="First Name"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Last Name"
                    />
                    <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    />
                    <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
                    <TextField
                    id="outlined-required"
                    label="Email"
                    />
                    <TextField
                    id="outlined-select-currency"
                    select
                    label="Gender"
                    value={currency}
                    onChange={handleChange}
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option} value={option}>
                        {option}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
            </Box>
            <div>
                <Button variant="contained" >Sign-up</Button>
                <Link to="/">
                    {<Button variant="contained" >Log-in</Button>}
                </Link>
            </div>
        </div>
    )
}

export default SignUp;