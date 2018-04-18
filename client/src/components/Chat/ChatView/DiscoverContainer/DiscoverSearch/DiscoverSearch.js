import React, { Component } from 'react';

import styles from './DiscoverSearch.css';
import SearchInput from 'react-search-input';


class DiscoverSearch extends Component {
  render() {
    return(
      <div className={styles.DiscoverSearch}>
        <SearchInput
          className={styles.SearchBar}
          onChange={this.props.changeSearch}
          placeholder="Search for a pod or description"
        />
      </div>
    )
  }
}

export default DiscoverSearch;
