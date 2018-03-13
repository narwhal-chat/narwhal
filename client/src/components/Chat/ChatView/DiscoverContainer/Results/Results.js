import React from 'react';

import styles from './Results.css';
import Result from './Result/Result';

const Results = () => {
  return <div className={styles.Results}>
			<Result />
			<Result />
			<Result />
			<Result />
		</div>;
}

export default Results;