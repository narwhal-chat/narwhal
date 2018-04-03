import React, { Component } from 'react';
// import ScrollArea from 'react-scrollbar'

import styles from './Results.css';
import Result from './Result/Result';

class Results extends Component {

	render() {
		let results = null;

		if (this.props.activeCategory === null) {
			results = this.props.results.map(result => {
				return (
					<React.Fragment>
						<Result key={result.id} result={result} />
					</React.Fragment>
				)
			});
		} else {
			console.log('ACTIVE CATEGORY', this.props.activeCategory);
			results = this.props.results.filter(filterResults => {
				return filterResults.pod_category_name === this.props.activeCategory
			}).map(result => {
				return (
					<React.Fragment>
						<Result key={result.id} result={result} />
					</React.Fragment>
				)
			})
			console.log(results);
		}



		return(
				<div className={styles.Results}>
					{results}
				</div>
		)
	}
}

export default Results;