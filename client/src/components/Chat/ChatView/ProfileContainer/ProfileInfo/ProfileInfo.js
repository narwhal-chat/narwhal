import React, { Component } from 'react';
import styles from './ProfileInfo.css';

class ProfileInfo extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmpw: ''
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.editProfile(this.state.username, this.state.email, this.state.password, this.state.confirmpw);
  }

  inputChangeHandler = (event) => {
    let formValues = this.state;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues});
  }

  render() {
  return(
          <form className={styles.Profile}>
            <div className={styles.ProfileInfo}>
              <div className={styles.ProfileText}>Username</div>
              <input type="text" name="username" value={this.state.username} onChange={(e) => this.inputChangeHandler(e)} className={styles.ProfileInput} />
            </div>
            <div className={styles.ProfileInfo}>
              <div className={styles.ProfileText}>E-mail Address</div>
              <input type="email" name="email" value={this.state.email} onChange={this.inputChangeHandler} className={styles.ProfileInput} />
            </div>
            <div className={styles.ProfileInfo}>
              <div className={styles.ProfileText}>Password</div>
              <input type="password" name="password" value={this.state.password} onChange={this.inputChangeHandler} className={styles.ProfileInput} />
            </div>
            <div className={styles.ProfileInfo}>
              <div className={styles.ProfileText}>Confirm Password</div>
              <input type="password" name="confirmpw" value={this.state.confirmpw} onChange={this.inputChangeHandler} className={styles.ProfileInput} />
            </div>
            <div className={styles.Buttons}>
              <button onClick={this.submitHandler} className={styles.ButtonUpdate}>Update</button>
              <button className={styles.ButtonCancel}>Cancel</button>
            </div>
          </form>
      )
  }
}

export default ProfileInfo;