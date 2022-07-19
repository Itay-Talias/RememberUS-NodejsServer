import {React,useState} from "react";
import './Login.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () =>{
    const [enteredUserName, setEnteredUserName] = useState('');
    const UserNameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
        console.log(enteredUserName);
    };

    const [enteredPassword, setEnteredPassword] = useState('');
    const PasswordChangeHandler = (event) =>{
        setEnteredPassword(event.target.value);
        console.log(enteredPassword);
    };

    return (
        <form>
            <div>
               <div>
                    <TextField 
                    name="username"
                    type="username"
                    placeholder="username"
                    label="username" 
                    value={enteredUserName}
                    onChange={UserNameChangeHandler}/>
                </div> 
                <div>
                    <TextField
                    name="password"
                    type="password"
                    placeholder="password"
                    label="Password"
                    value={enteredPassword}
                    onChange={PasswordChangeHandler}
                />
                </div>
            </div>
            <div className="new-expense__actions">
            <Button variant="contained">Login</Button>
            </div>
        </form>
    )
}

export default Login;
