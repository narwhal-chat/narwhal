import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput, { createFilter } from 'react-search-input';

import styles from './DiscoverContainer.css';
import DiscoverContainerHeader from './DiscoverContainerHeader/DiscoverContainerHeader';
import DiscoverSearch from './DiscoverSearch/DiscoverSearch'
import Results from './Results/Results';
import ResultsFound from './Results/ResultsFound/ResultsFound';
import * as actions from '../../../../store/actions/index';

const KEYS_TO_FILTER = ['reference_name', 'display_name', 'description'];

class DiscoverContainer extends Component {

	componentDidMount() {
		this.props.fetchPods();
		this.props.fetchDiscover();
		this.getResultsCount();
	}

	getResultsCount() {
		let count = null;
		if (this.props.search === '') {
			count = this.props.discover.filter(result => {
				if (this.props.activeCategory !== 'Trending') {
					return result.pod_category_name === this.props.activeCategory
				} else {
					return result;
				}
			})
		} else {
			count = this.props.searchResults
		}
		return count.length
	}

	joinPod(podId) {
		this.props.onJoinPod(podId)
	}

	changeSearch(search) {
		this.props.fetchDiscover();
		this.props.searchDiscover(search);
		const filteredResults = this.props.discover.filter(createFilter(this.props.search, KEYS_TO_FILTER));
		this.props.updateSearchResults(filteredResults);
	}

	render() {
		let searchResults = null;
		if (this.props.search === '') {
			searchResults = this.props.discover
		} else {
			searchResults = this.props.searchResults
		}

		return (
			<div className={styles.DiscoverContainer}>
				<DiscoverContainerHeader />
				<div></div>
				<DiscoverSearch results={this.props.discover} changeSearch={this.changeSearch.bind(this)}/>
				<div></div>
				<ResultsFound resultCount={this.getResultsCount.bind(this)}/>
				<Results activeCategory={this.props.activeCategory} joinPod={this.joinPod.bind(this)} currentPods={this.props.pods} results={searchResults} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		discover: state.chat.discover,
		activeCategory: state.chat.activeCategory,
		pods: state.chat.pods,
		search: state.chat.search,
		searchResults: state.chat.searchResults
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDiscover: () => dispatch(actions.fetchDiscover()),
		onJoinPod: (podId) => dispatch(actions.joinPod(podId)),
		fetchPods: () => dispatch(actions.fetchPods()),
		searchDiscover: (term) => dispatch(actions.searchDiscover(term)),
		updateSearchResults: (data) => dispatch(actions.updateSearchResults(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);