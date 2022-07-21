import {React,useState} from "react";
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from "@mui/material/Alert";
import logo from "./RememberUs-Logo.png";

const Login = () =>{
    const [isValidUserName,setIsValidUserName] = useState(true);
    const [isValidPassword,setIsValidPassword] = useState(true);
    const errorMsg="itay";
    const [enteredUserName, setEnteredUserName] = useState('');
    const UserNameChangeHandler = (event) =>{
        if(enteredUserName.trim().length===0){
            setIsValidUserName(true);
        }
        setEnteredUserName(event.target.value);
        console.log(enteredUserName);
    };

    const [enteredPassword, setEnteredPassword] = useState('');
    const PasswordChangeHandler = (event) =>{
        if(enteredPassword.trim().length===0){
            setIsValidPassword(true);
        }
        setEnteredPassword(event.target.value);
        console.log(enteredPassword);
    };

    const LoginHandler = (event) =>{
        if(enteredUserName.trim().length===0){
            setIsValidUserName(false);
        }
        if(enteredPassword.trim().length===0){
            setIsValidPassword(false);
        }
        console.log("sdfsdf")

    };

    return (
        <form className="form">
            <div>
                <img src={logo} alt="Logo" className="Logo" />
            </div>
            <div>
               <div>
                    <TextField 
                    className={isValidUserName ? "valid" : "invalid"}
                    name="username"
                    type="username"
                    placeholder="username"
                    label="username" 
                    value={enteredUserName}
                    onChange={UserNameChangeHandler}/>
                </div> 
                <div>
                    <TextField
                    className={isValidPassword ? "valid" : "invalid"}
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                />
                </div>
            </div>
            <div className="space"></div>
            <div>
                <Button variant="contained" >Sign-up</Button>
                <Button variant="contained" onClick={LoginHandler}>Log-in</Button>
            </div>
            <div>
                <Alert severity="error">{errorMsg}</Alert>
            </div>
        </form>
    )
}

export default Login;
