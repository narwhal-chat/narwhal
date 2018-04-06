import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './DiscoverContainer.css';
import DiscoverContainerHeader from './DiscoverContainerHeader/DiscoverContainerHeader';
import DiscoverSearch from './DiscoverSearch/DiscoverSearch'
import Results from './Results/Results';
import ResultsFound from './Results/ResultsFound/ResultsFound';
import * as actions from '../../../../store/actions/index';

class DiscoverContainer extends Component {
	componentDidMount() {
		this.props.fetchPods();
		this.props.fetchDiscover();
		this.getResultsCount();
	}

	getResultsCount() {
		const count = this.props.discover.filter(result => {
			if (this.props.activeCategory !== null) {
				return result.pod_category_name === this.props.activeCategory
			} else {
				return result;
			}
		})
		return count.length
	}

	joinPod(podId) {
		this.props.onJoinPod(podId)
	}

	render() {
		return (
			<div className={styles.DiscoverContainer}>
				<DiscoverContainerHeader />
					<DiscoverSearch />
					<ResultsFound resultCount={this.getResultsCount.bind(this)}/>
					<Results activeCategory={this.props.activeCategory} joinPod={this.joinPod.bind(this)} currentPods={this.props.pods} results={this.props.discover} />
			</div>
			
		);
	}
}

const mapStateToProps = state => {
	return {
		discover: state.chat.discover,
		activeCategory: state.chat.activeCategory,
		pods: state.chat.pods
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDiscover: () => dispatch(actions.fetchDiscover()),
		onJoinPod: (podId) => dispatch(actions.joinPod(podId)),
		fetchPods: () => dispatch(actions.fetchPods())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);