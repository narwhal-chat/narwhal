import React, { Component } from 'react';

import styles from './DiscoverSearch.css';
import SearchInput, { createFilter } from 'react-search-input';
import * as actions from '../../../../../store/actions/index';


class DiscoverSearch extends Component {
  render() {
    return(
      <div className={styles.DiscoverSearch}>
        <SearchInput className={styles.SearchBar} onChange={this.props.changeSearch} placeholder="Find new pods"/>
      </div>
    )
  }
}

export default DiscoverSearch;
