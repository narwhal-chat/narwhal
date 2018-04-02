import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;
  console.log(props);
  inputElement = (
    <input
      type="text"
      autoFfdocus={props.elementConfig.type === "username" ? "autofocus" : null}
      className={styles.AuthInputForm}
      {...props.elementConfig}
      value={props.value}
      onChange={props.changed}
      required
    />
  );

  return (
    <div className={styles.AuthInput}>
      {inputElement}
    </div>
  );
};

export default input;
