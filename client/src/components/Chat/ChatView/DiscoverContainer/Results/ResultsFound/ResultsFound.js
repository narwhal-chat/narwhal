import React from 'react';
import styles from './ResultsFound.css';

const resultsFound = (props) => {
  return(
    <div className={styles.ResultsFound}>{props.resultCount()} {props.resultCount() > 1 || props.resultCount() === 0 ? 'Pods Found': 'Pod Found'}</div>
  )
}

export default resultsFound;
