import React from 'react';
import Button from '@mui/material/Button';
import './StartPage.css';


const StartPage = () =>{
    return (
        <form>
            <div className="back-form button">
                <Button variant="contained" size="sm" >Log-in</Button>
                <div class="space"></div>
                <Button variant="contained" size="sm">Sign-up</Button>
            </div>
        </form>
    )
}

export default StartPage;