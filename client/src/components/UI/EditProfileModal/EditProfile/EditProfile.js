import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import upload from 'superagent';

import styles from './EditProfile.css';
import * as actions from '../../../../store/actions/index';

class EditProfile extends Component {
	state = {
		files: [],
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
		},
		avatar: ''
	};

	// componentDidMount() {
	// 	this.setState({
	// 		usernameError: {
	// 			error: false,
	// 			message: '',
	// 		},
	// 		emailError: {
	// 			error: false,
	// 			message: '',
	// 		},
	// 		passwordError: {
	// 			error: false,
	// 			message: ''
	// 		}
	// 	});
	// }

	componentWillReceiveProps(nextProps) {
		if (this.props.error !== nextProps.error) {
			if (nextProps.errorType === 'username') {
				this.setState({
					usernameError: {
						error: true,
						message: 'Username already exists'
					}
				})
			}
			if (nextProps.errorType === 'password') {
				this.setState({
					passwordError: {
						error: true,
						message: 'Incorrect password'
					}
				})
			}
			if (nextProps.errorType === 'email') {
				this.setState({
					emailError: {
						error: true,
						message: 'E-mail address already exists'
					}
				})
			}

			if (this.props.error === false) {
				this.props.closeModal();
			}
			// this.setState({
			// 	files: [],
			// 	username: '',
			// 	email: '',
			// 	password: '',
			// 	avatar: ''
			// })
		}
	}

	componentDidUpdate() {
		// console.log('hello');
		// if (this.props.error === false) {
		// 	this.props.closeModal();
		// }
	}

	onDrop = (files) => {
		this.setState({
			files: files,
			avatar: files[0].preview
		})
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

		let err = this.validate()

		if (err) {
			this.setState({
				password: ''
			})
		} else {
			let image = this.state.files[0];
			let uploadedImage = null;
			if (this.state.avatar === '') {
				this.props.editProfile(
					this.props.userData.username,
					this.state.username,
					this.state.email,
					this.props.userData.avatar,
					this.state.password
				);
			} else {
				upload.post('/uploadUser')
				.attach('image', image)
				.end((err, res) => {
					uploadedImage = res.text;
					console.log(uploadedImage);
					this.props.editProfile(
						this.props.userData.username,
						this.state.username,
						this.state.email,
						uploadedImage,
						this.state.password
					)
				})
			}
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
				</div>
				<div className={styles.Content}>
					<div className={styles.ProfileLeft}>
						<div>
							<label>USERNAME</label>
							<input className={styles.InputForm} type="text" autoFocus="autofocus" value={this.state.username} placeholder="" name="username" onChange={this.handleChange} />
							{this.state.usernameError.error ? <div className={styles.ErrorMessage}>
									{this.state.usernameError.message}
								</div> : null}
							{/* {this.props.errorType === 'username' ? <div className={styles.ErrorMessage}>
									{this.props.message}
								</div> : null} */}
						</div>
						<div>
							<label>EMAIL ADDRESS</label>
							<input className={styles.InputForm} type="email" value={this.state.email} placeholder="" name="email" onChange={this.handleChange} />
							{this.state.emailError.error ? <div className={styles.ErrorMessage}>
									{this.state.emailError.message}
								</div> : null}
							{/* {this.props.errorType === 'email' ? <div className={styles.ErrorMessage}>
									{this.props.message}
								</div> : null} */}
						</div>
						<div>
							<label>CURRENT PASSWORD</label>
							<input className={styles.InputForm} type="password" value={this.state.password} placeholder="" name="password" onChange={this.handleChange} />
							{this.state.passwordError.error ? <div className={styles.ErrorMessage}>
									{this.state.passwordError.message}
								</div> : null}
							{/* {this.props.errorType === 'password' ? <div className={styles.ErrorMessage}>
									{this.props.message}
								</div> : null} */}
						</div>
					</div>
					<div>
						<Dropzone accept="image/*" className={styles.Avatar} onDrop={this.onDrop.bind(this)}>
							{this.state.files.length > 0 ? <img className={styles.Image} src={this.state.files[0].preview} alt="Avatar" /> : <img className={styles.Image} src={this.props.userData.avatar} alt="Avatar" />}
						</Dropzone>
						<div className={styles.UploadText}>Click avatar to upload an image</div>
					</div>
				</div>
				<div className={styles.Footer}>
					<div className={styles.Logout}>
						<div className={styles.Link} onClick={this.logout}>
							Logout
						</div>
					</div>
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
		error: state.auth.error,
		message: state.auth.message,
		errorType: state.auth.errorType
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editProfile: (username, newUsername, email, avatar, password) => dispatch(actions.editProfile(username, newUsername, email, avatar, password)),
		authLogout: () => dispatch(actions.authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
