import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './EditProfile.css';
// import { Link } from 'react-router-dom';
import * as actions from '../../../../store/actions/index';

class EditProfile extends Component {
	state = {
		username: '',
		usernameError: {
			error: false,
			message: ''
		},
		email: '',
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


	validate = () => {
		let isError = false;
		if(this.state.password.length < 1) {
			isError = true;
			this.setState({
				passwordError: {
					error: true,
					message: 'Password is required'
				}
			})
		}

		if(this.state.confirmpw !== this.state.password) {
			isError = true;
			this.setState({
				confirmpwError: {
					error: true,
					message: 'Password does not match'
				}
			})
		}

		if (this.state.password.length > 1 && (this.state.confirmpw === this.state.password)) {
			this.props.editProfile(this.props.userData.username, this.state.username, this.state.email, this.state.password, this.props.token);
		}

		if(this.state.username.length >= 1) {
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
			isError = pattern.test(this.state.email)
			this.setState({
				emailError: {
					error: true,
					message: 'Not a valid e-mail address'
				}
			})
		}

		return isError;
	};

	onSubmit = event => {
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

		if(err) {
			this.setState({
				username: '',
				email: '',
				password: '',
				confirmpw: ''
			})
		} else {
			console.log('there was an error');
			// if (this.props.error) {
			// 	this.setState({
			// 		username: '',
			// 		email: '',
			// 		password: '',
			// 		confirmpw: ''
			// 	})
			}
			// this.setState({
			// 	usernameError: {
			// 		error: false,
			// 		message: '',
			// 	},
			// 	emailError: {
			// 		error: false,
			// 		message: '',
			// 	},
			// 	passwordError: {
			// 		error: false,
			// 		message: '',
			// 	},
			// 	confirmpwError: {
			// 		error: false,
			// 		message: '',
			// 	},
			// });
		// }
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	};

	logout = event => {
		event.preventDefault();
		this.props.authLogout();
	}

	render() {

		return <div className={styles.EditProfile}>
				<div className={styles.Header}>
					<div className={styles.HeaderTitle}>EDIT PROFILE</div>
					<div className={styles.Logout}>
						<div className={styles.Link} onClick={this.logout}>
							LOGOUT
						</div>
					</div>
				</div>
				<div className={styles.Content}>
					<div>
						<label>Username</label>
						<input className={styles.InputForm} type="text" value={this.state.username} placeholder="Edit your username (optional)" name="username" onChange={this.handleChange} />
						<hr />
						{this.state.usernameError.error ? <div className={styles.ErrorMessage}>
								{this.state.usernameError.message}
							</div> : null}
					</div>
					<div>
						<label>E-mail Address</label>
						<input className={styles.InputForm} type="email" value={this.state.email} placeholder="Edit your e-mail address (optional)" name="email" onChange={this.handleChange} />
						<hr />
						{this.state.emailError.error ? <div className={styles.ErrorMessage}>
								{this.state.emailError.message}
							</div> : null}
					</div>
					<div>
						<label>Password</label>
						<input className={styles.InputForm} type="password" value={this.state.password} placeholder="Enter your current password" name="password" onChange={this.handleChange} />
						<hr />
						{this.state.passwordError.error ? <div className={styles.ErrorMessage}>
								{this.state.passwordError.message}
							</div> : null}
						{this.props.error ? <div className={styles.ErrorMessage}>
								{this.props.message}
							</div> : null}
					</div>
					<div>
						<label>Confirm Password</label>
						<input className={styles.InputForm} type="password" value={this.state.confirmpw} placeholder="Confirm your password" name="confirmpw" onChange={this.handleChange} />
						<hr />
						{this.state.confirmpwError.error ? <div className={styles.ErrorMessage}>
								{this.state.confirmpwError.message}
							</div> : null}
					</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.closeModal} className={styles.BackButton}>
						BACK
					</div>
					<button onClick={this.onSubmit} className={styles.CreateButton}>
						Update
					</button>
				</div>
			</div>;
	}
}

const mapStateToProps = state => {
	return {
		userData: state.auth.userData,
		token: state.auth.token,
		error: state.auth.error,
		message: state.auth.message
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editProfile: (username, newUsername, email, password, token) => dispatch(actions.editProfile(username, newUsername, email, password, token)),
		authLogout: () => dispatch(actions.authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);