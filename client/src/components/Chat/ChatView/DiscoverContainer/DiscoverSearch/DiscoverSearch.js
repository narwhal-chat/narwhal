import React, { Component } from 'react';
import SearchInput from 'react-search-input';

import styles from './DiscoverSearch.css';
import searchIcon from '../../../../../assets/images/search-icon.svg';

class DiscoverSearch extends Component {
  render() {
    let searchIconStyling = {
      backgroundImage: `url('${searchIcon}')`
    };

    return(
      <div className={styles.DiscoverSearch}>
        <SearchInput
          className={styles.SearchBar}
          onChange={this.props.changeSearch}
          placeholder="Search for a pod or description"
        />
        <div className={styles.SearchIcon} style={searchIconStyling}></div>
      </div>
    )
  }
}

export default DiscoverSearch;
