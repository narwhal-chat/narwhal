import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './EditProfile.css';
import * as actions from '../../../../store/actions/index';

class EditProfile extends Component {
	state = {
		username: this.props.userData.username,
		usernameError: {
			error: false,
			message: ''
		},
		email: this.props.userData.email_address,
		emailError: {
			error: false,
			message: ''
		},
		password: '',
		passwordError: {
			error: false,
			message: ''
		},
		confirmpw: '',
		confirmpwError: {
			error: false,
			message: ''
		}
	};

	componentWillReceiveProps(nextProps) {
		if (this.props.error !== nextProps.error) {
			this.setState({
				username: '',
				email: '',
				password: '',
				confirmpw: ''
			})
		}
	}

	componentDidUpdate() {
		if (this.props.error === false) {
			this.props.closeModal();
		}
	}


	validate = () => {
		let isError = false;
		if (this.state.password.length < 1) {
			isError = true;
			this.setState({
				passwordError: {
					error: true,
					message: 'Password is required'
				}
			});
		}

		if (this.state.confirmpw !== this.state.password) {
			isError = true;
			this.setState({
				confirmpwError: {
					error: true,
					message: 'Password does not match'
				}
			});
		}

		// if (this.state.password.length > 1 && (this.state.confirmpw === this.state.password)) {
		// 	this.props.editProfile(this.props.userData.username, this.state.username, this.state.email, this.state.password, this.props.token);
		// }

		if (this.state.username.length >= 1) {
			if (this.state.username.length < 4 || this.state.username.length > 28) {
				isError = true;
				this.setState({
					usernameError: {
						error: true,
						message: 'Username needs to be 4-28 characters long',
					},
				});
			}

			if (this.state.username.includes(' ')) {
				isError = true;
				this.setState({
					topicNameError: {
						error: true,
						message: 'Username must not contain any spaces',
					},
				});
			}
		}

		if (this.state.email.length > 1) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			const isValid = pattern.test(this.state.email)
			if (!isValid) {
				isError = true;
				this.setState({
					emailError: {
						error: true,
						message: 'Not a valid e-mail address'
					}
				})
			}
		}

		return isError;
	};

	verifyOnSubmit = event => {
		event.preventDefault();
		this.setState({
			usernameError: {
				error: false,
				message: '',
			},
			emailError: {
				error: false,
				message: '',
			},
			passwordError: {
				error: false,
				message: ''
			},
			confirmpwError: {
				error: false,
				message: ''
			}
		});

		let err = this.validate()

		if (err) {
			this.setState({
				username: '',
				email: '',
				password: '',
				confirmpw: ''
			})
		} else {
			this.props.editProfile(this.props.userData.username, this.state.username, this.state.email, this.state.password, this.props.token);
		}
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	logout = event => {
		event.preventDefault();
		this.props.authLogout();
	}

	render() {
		return <form onSubmit={this.verifyOnSubmit} className={styles.EditProfile}>
				<div className={styles.Header}>
					<div className={styles.HeaderTitle}>EDIT PROFILE</div>
					<div className={styles.Logout}>
						<div className={styles.Link} onClick={this.logout}>
							Logout
						</div>
					</div>
				</div>
				<div className={styles.Content}>
					<div>
						<label>USERNAME</label>
						<input className={styles.InputForm} type="text" autoFocus="autofocus" value={this.state.username} placeholder="" name="username" onChange={this.handleChange} />
						{this.state.usernameError.error ? <div className={styles.ErrorMessage}>
								{this.state.usernameError.message}
							</div> : null}
						{this.props.errorType === 'username' ? <div className={styles.ErrorMessage}>
								{this.props.message}
							</div> : null}
					</div>
					<div>
						<label>EMAIL ADDRESS</label>
						<input className={styles.InputForm} type="email" value={this.state.email} placeholder="" name="email" onChange={this.handleChange} />
						{this.state.emailError.error ? <div className={styles.ErrorMessage}>
								{this.state.emailError.message}
							</div> : null}
						{this.props.errorType === 'email' ? <div className={styles.ErrorMessage}>
								{this.props.message}
							</div> : null}
					</div>
					<div>
						<label>CURRENT PASSWORD</label>
						<input className={styles.InputForm} type="password" value={this.state.password} placeholder="" name="password" onChange={this.handleChange} />
						{this.state.passwordError.error ? <div className={styles.ErrorMessage}>
								{this.state.passwordError.message}
							</div> : null}
						{this.props.errorType === 'password' ? <div className={styles.ErrorMessage}>
								{this.props.message}
							</div> : null}
					</div>
					{/* <div>
						<label>CONFIRM PASSWORD</label>
						<input className={styles.InputForm} type="password" value={this.state.confirmpw} placeholder="" name="confirmpw" onChange={this.handleChange} />
						{this.state.confirmpwError.error ? <div className={styles.ErrorMessage}>
								{this.state.confirmpwError.message}
							</div> : null}
					</div> */}
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.closeModal} className={styles.BackButton}>
						Cancel
					</div>
					<button type="submit" className={styles.CreateButton}>
						Update
					</button>
				</div>
			</form>;
	}
}

const mapStateToProps = state => {
	return {
		userData: state.auth.userData,
		token: state.auth.token,
		error: state.auth.error,
		message: state.auth.message,
		errorType: state.auth.errorType
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editProfile: (username, newUsername, email, password, token) => dispatch(actions.editProfile(username, newUsername, email, password, token)),
		authLogout: () => dispatch(actions.authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);