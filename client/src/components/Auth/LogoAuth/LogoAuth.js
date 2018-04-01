import React from 'react';
import styles from './LogoAuth.css';
import narwhalLogo from '../../../assets/images/narwhal.svg';

const LogoAuth = props => (

        <div className={styles.LogoContainer}>
            <img className={styles.LogoImageLrg} src={narwhalLogo} alt="Logo" />
            <div className={styles.AuthText}>
                <p className={styles.LogoText}>narwhal</p>
                <p>get to the point</p>
            </div>
        </div>

);

export default LogoAuth;
