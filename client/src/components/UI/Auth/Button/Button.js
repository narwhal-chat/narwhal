import React from 'react';
import styles from './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className={styles.AuthBtn}
        onClick={props.clicked}>{props.children}</button>
);

export default button;