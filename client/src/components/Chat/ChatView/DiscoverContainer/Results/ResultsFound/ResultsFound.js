import React from 'react';
import styles from './ResultsFound.css';

const resultsFound = (props) => {
  return(
    <div className={styles.ResultsFound}>{props.resultCount()} Pods Found</div>
  )
}

export default resultsFound;
