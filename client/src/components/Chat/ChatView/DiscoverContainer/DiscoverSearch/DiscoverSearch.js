import React, { Component } from 'react';
import styles from './DiscoverSearch.css';

class DiscoverSearch extends Component {
  render() {
    return(
      <div className={styles.DiscoverSearch}>
        <input className={styles.SearchBar} placeholder="Enter a name, reference name, or keyword"/>
        <button className={styles.Button}>Search</button>
      </div>
    )
  }
}

export default DiscoverSearch;