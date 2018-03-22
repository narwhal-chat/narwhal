import React, { Component } from 'react';
import styles from './Create.css';

class form extends Component {
  state = {
    showModal: false
  }

  render() {
    return(
      <div className={styles.Create}>
        <div className={styles.Header}>CREATE A POD</div>
        <div className={styles.PodInfo}>
          <div className={styles.PodLeft}>
            <div>
              <div>POD NAME</div>
              <form className={styles.PodForm}>
                <input className={styles.PodInputForm} type="text" placeholder="Enter pod name here" name="pod_name"/>
                <hr/>
              </form>
            </div>
            <div>
              <div>POD CATEGORY</div>
              <select className={styles.PodCategory}>
                <option value="" selected disabled hidden />
                <option className={styles.DropdownValue} value="technology">
                  Technology
                </option>
                <option className={styles.DropdownValue} value="business">
                  Business
                </option>
                <option className={styles.DropdownValue} value="gaming">
                  Gaming
                </option>
                <option className={styles.DropdownValue} value="television">
                  Television
                </option>
                <option className={styles.DropdownValue} value="design">
                  Design
                </option>
                <option className={styles.DropdownValue} value="movies">
                  Movies
                </option>
                <option className={styles.DropdownValue} value="music">
                  Music
                </option>
                <option className={styles.DropdownValue} value="social">
                  Social
                </option>
              </select>
            </div>
          </div>
        <div className={styles.Avatar}>Image Here</div>
        </div>
        <div className={styles.Footer}>
          <div className={styles.BackButton}>BACK</div>
          <button className={styles.CreateButton}>Create</button>
        </div>
      </div>
    )
  }
};

export default form;