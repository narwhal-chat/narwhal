import React from 'react';
import './Auth.css';
import Signup from './Signup/Signup'
import Login from './Login/Login'
import Logo from './LogoAuth/LogoAuth'


const Auth = props => (
	<div className="container">
		<div className="signup">
			<Signup />
		</div>
        <div className="logo">
			<Logo />
		</div>
	</div>
);

export default Auth;
