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
		this.props.fetchDiscover();
	}

	render() {
		return (
			<div className={styles.DiscoverContainer}>
				<DiscoverContainerHeader />
					<DiscoverSearch />
					<ResultsFound />
					<Results activeCategory={this.props.activeCategory} results={this.props.discover} />
			</div>
			
		);
	}
}

const mapStateToProps = state => {
	return {
		discover: state.chat.discover,
		activeCategory: state.chat.activeCategory
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDiscover: () => dispatch(actions.fetchDiscover())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);