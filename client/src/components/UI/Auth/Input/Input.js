import React from 'react';

import styles from './Input.css';

const input = (props) => {
    let inputElement = null;


    inputElement = <input
        className={styles.AuthInputForm}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;

 
    return (
        <div className={styles.AuthInput}>
            {inputElement}
        </div>
    );

};

export default input;