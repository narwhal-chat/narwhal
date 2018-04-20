import React, { Component } from 'react';
import firstBy from 'thenby';

import styles from './Results.css';
import Result from './Result/Result';

class Results extends Component {
	render() {
		let results = null;

		if (this.props.activeCategory === 'trending') {
			results = this.props.results
				.sort(
					firstBy((a, b) => b.user_count - a.user_count)
						.thenBy((a, b) => {
							return new Date(a.create_date) - new Date(b.create_date);
						})
				)
				.map(result => {
					return (
						<React.Fragment
							key={result.id}>
							<Result currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
							<div className={styles.ResultSeparator}></div>
						</React.Fragment>
					);
			});
		} else {
			results = this.props.results.filter(filterResults => {
				return filterResults.pod_category_name === this.props.activeCategory
			})
				.sort(
					firstBy((a, b) => b.user_count - a.user_count)
						.thenBy((a, b) => {
							return new Date(a.create_date) - new Date(b.create_date);
						})
				)
				.map(result => {
					return (
						<React.Fragment
							key={result.id}>
							<Result currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
							<div className={styles.ResultSeparator}></div>
						</React.Fragment>
					);
			});
		}

		return (
				<div className={styles.Results}>
					{results}
				</div>
		)
	}
}

export default Results;
