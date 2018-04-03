import React, { Component } from 'react';
// import ScrollArea from 'react-scrollbar'

import styles from './Results.css';
import Result from './Result/Result';

class Results extends Component {

	render() {
		let results = this.props.results.map(result => {
			return (
				<React.Fragment>
					<Result key={result.id} result={result} />
				</React.Fragment>
			)
		});

		return(
				<div className={styles.Results}>
					{results}
				</div>
		)
	}
}

export default Results;