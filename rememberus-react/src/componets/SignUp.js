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

    const [isValidFirstName,setIsValidFirstName] = useState(true);
    const [isValidLastName,setIsValidLastName] = useState(true);
    const [isValidUserName,setIsValidUserName] = useState(true);
    const [isValidPassword,setIsValidPassword] = useState(true);
    const [isValidEmail,setIsValidEmail] = useState(true);
    const [isValidGender,setIsValidGender] = useState(true);


    const [enteredGender, setEnteredGender] = useState('');
    const GenderChangeHandler = (event) => {
        if(enteredFirstName.trim().length===0){
            setIsValidGender(true);
        }
        setEnteredGender(event.target.value);
    };

    const [enteredFirstName, setEnteredFirstName] = useState('');
    const FirstNameChangeHandler = (event) =>{
        if(enteredFirstName.trim().length===0){
            setIsValidFirstName(true);
        }
        setEnteredFirstName(event.target.value);
    };

    const [enteredLastName, setEnteredLastName] = useState('');
    const LastNameChangeHandler = (event) =>{
        if(enteredLastName.trim().length===0){
            setIsValidLastName(true);
        }
        setEnteredLastName(event.target.value);
    };

    const [enteredUserName, setEnteredUserName] = useState('');
    const UserNameChangeHandler = (event) =>{
        if(enteredUserName.trim().length===0){
            setIsValidUserName(true);
        }
        setEnteredUserName(event.target.value);
    };

    const [enteredPassword, setEnteredPassword] = useState('');
    const PasswordChangeHandler = (event) =>{
        if(enteredPassword.trim().length===0){
            setIsValidPassword(true);
        }
        setEnteredPassword(event.target.value);
    };

    const [enteredEmail, setEnteredEmail] = useState('');
    const EmailChangeHandler = (event) =>{
        if(enteredPassword.trim().length===0){
            setIsValidEmail(true);
        }
        setEnteredEmail(event.target.value);
    };

    const SignUpHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length===0){
            setIsValidUserName(false);
        }
        if(enteredPassword.trim().length===0){
            setIsValidPassword(false);
        }
        if(enteredFirstName.trim().length===0){
            setIsValidFirstName(false);
        }
        if(enteredLastName.trim().length===0){
            setIsValidLastName(false);
        }
        if(enteredEmail.trim().length===0){
            setIsValidEmail(false);
        }
        if(enteredGender.trim().length===0){
            setIsValidGender(false);
        }
    }

    return  (
        <div className="Myform">
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
                    className={isValidFirstName ? "valid" : "invalid"}
                    id="outlined-required-First-Name"
                    label="First Name"
                    value={enteredFirstName}
                    onChange={FirstNameChangeHandler}
                    />
                    <TextField
                    required
                    className={isValidLastName ? "valid" : "invalid"}
                    key="Last Name"
                    id="outlined-required-Last-Name"
                    label="Last Name"
                    value={enteredLastName}
                    onChange={LastNameChangeHandler}
                    />
                    <TextField
                    required
                    className={isValidUserName ? "valid" : "invalid"}
                    key="Username"
                    id="outlined-required-Username"
                    label="Username"
                    value={enteredUserName}
                    onChange={UserNameChangeHandler}
                    />
                    <TextField
                    required
                    className={isValidPassword ? "valid" : "invalid"}
                    key="Password"
                    id="outlined-password-input-Password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                    />
                    <TextField
                    required
                    className={isValidEmail ? "valid" : "invalid"}
                    id="outlined-required"
                    label="Email"
                    value={enteredEmail}
                    onChange={EmailChangeHandler}
                    />
                    <TextField
                    className={isValidGender ? "valid" : "invalid"}
                    id="outlined-select-currency"
                    required
                    select
                    label="Gender"
                    value={enteredGender}
                    onChange={GenderChangeHandler}
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
                <Button variant="contained"
                onClick={SignUpHandler}>
                Sign-up
                </Button>
                <Link to="/Login" style={{textDecoration: 'none'}}>
                    {<Button variant="contained" >Log-in</Button>}
                </Link>
            </div>
        </div>
    )
}

export default SignUp;