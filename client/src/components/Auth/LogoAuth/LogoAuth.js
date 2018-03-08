import React from 'react';
import './LogoAuth.css';
import logo from './logo.png'

const LogoAuth = props => (

        <div className="background">
            <img className="logoImage" src={logo} alt="Logo" />
            <div className="authText">
                <p className="logoText">narwhal</p>
                <p>get to the point</p>
            </div>
        </div>

);

export default LogoAuth;
