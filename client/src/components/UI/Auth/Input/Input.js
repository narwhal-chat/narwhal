import React from 'react';

import './Input.css';

const input = (props) => {
    let inputElement = null;


    inputElement = <input
        className="authInputForm"
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;

 
    return (
        <div className="authInput">
            {inputElement}
        </div>
    );

};

export default input;