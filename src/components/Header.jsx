import {LOGO_URL} from "../utils/constants";
import React from 'react';

const Header = ()=>{
    const [buttonName, setButtonName] = React.useState('Login')
    const handleOnClickLogin = ()=>{
        setButtonName(buttonName==='Login'?'Logout':'Login')
    }
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className='loginButton' onClick={handleOnClickLogin}>{buttonName}</button>
                </ul>
            </div> 
        </div>
    )
}

export default Header