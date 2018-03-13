import React, { Component } from 'react';

import styles from './DiscoverContainer.css';
import DiscoverContainerHeader from './DiscoverContainerHeader/DiscoverContainerHeader';
import DiscoverSearch from './DiscoverSearch/DiscoverSearch'
import Results from './Results/Results';
import ResultsFound from './Results/ResultsFound/ResultsFound'

class DiscoverContainer extends Component {
	render() {
		return (
			<div className={styles.DiscoverContainer}>
				<DiscoverContainerHeader />
                <DiscoverSearch />
                <ResultsFound />
                <Results />
			</div>
		);
	}
}

export default DiscoverContainer;