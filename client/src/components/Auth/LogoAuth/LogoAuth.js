import React from 'react';
import styles from './LogoAuth.css';
import logo from './logo.png'

const LogoAuth = props => (

        <div className={styles.LogoContainer}>
            <img className={styles.LogoImageLrg} src={logo} alt="Logo" />
            <div className={styles.AuthText}>
                <p className={styles.LogoText}>narwhal</p>
                <p>get to the point</p>
            </div>
        </div>

);

export default LogoAuth;
