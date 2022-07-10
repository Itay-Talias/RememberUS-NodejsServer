import React from "react";
import './Login.css'

const Login = () =>{

    return (
        <form>
            <div classNmae="new-expense__controls">
               <div classNmae="new-expense__control">
                    <label>username</label>
                    <input type="text"/>
                </div> 
                <div classNmae="new-expense__control">
                    <label>password</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button>Login</button>
            </div>
        </form>
    )
}

export default Login;
