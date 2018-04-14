import React, { Component } from 'react';
// import ScrollArea from 'react-scrollbar'

import styles from './Results.css';
import Result from './Result/Result';

class Results extends Component {

	render() {
		let results = null;

		if (this.props.activeCategory === 'trending') {
			results = this.props.results.sort((a, b) => b.user_count - a.user_count).map(result => {
				return (
					<React.Fragment>
						<Result key={result.id} currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
						<div className={styles.ResultSeparator}></div>
					</React.Fragment>
				)
			});
		} else {
			results = this.props.results.filter(filterResults => {
				return filterResults.pod_category_name === this.props.activeCategory
			}).sort((a, b) => b.user_count - a.user_count).map(result => {
				return (
					<React.Fragment>
						<Result key={result.id} currentPods={this.props.currentPods} result={result} joinPod={this.props.joinPod}/>
						<div className={styles.ResultSeparator}></div>
					</React.Fragment>
				)
			})
		}



		return(
				<div className={styles.Results}>
					{results}
				</div>
		)
	}
}

export default Results;
