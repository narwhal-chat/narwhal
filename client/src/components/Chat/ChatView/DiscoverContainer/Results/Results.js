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
					<Result key={result.id} currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
				)
			});
		} else {
			results = this.props.results.filter(filterResults => {
				return filterResults.pod_category_name === this.props.activeCategory
			}).map(result => {
				return (
					<Result key={result.id} currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
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