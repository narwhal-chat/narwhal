import React, { Component } from 'react';

import styles from './DiscoverSearch.css';
import SearchIcon from 'react-icons/lib/io/android-search';
import SearchInput, { createFilter } from 'react-search-input';
import * as actions from '../../../../../store/actions/index';


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
