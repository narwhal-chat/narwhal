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
				<div>
					<DiscoverContainerHeader />
				</div>
        <div>        
					<DiscoverSearch />
          <ResultsFound />
          <Results />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		discover: state.chat.discover
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchDiscover: () => dispatch(actions.fetchDiscover())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverContainer);