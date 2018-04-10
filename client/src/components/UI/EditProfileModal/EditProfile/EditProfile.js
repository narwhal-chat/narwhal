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

	// componentWillReceiveProps(nextProps) {
	// 	if (this.props.error !== nextProps.error) {
	// 		this.setState({
	// 			username: '',
	// 			email: '',
	// 			password: '',
	// 			confirmpw: ''
	// 		})
	// 	}
	// }

	// componentDidUpdate() {
	// 	if (this.props.error === false) {
	// 		this.props.closeModal();
	// 	}
	// }

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
			}
		});

		let err = this.validate()

		if (err) {
			console.log(err);
			this.setState({
				password: ''
			})
		} else {
			let image = this.state.files[0];
			console.log('image', image);
			let uploadedImage = null;
			if (this.state.avatar === '') {
				this.props.editProfile(
					this.props.userData.username,
					this.state.username,
					this.state.email,
					this.state.password
				);
			} else {
				upload.post('/uploadUser')
				.attach('image', image)
				.end((err, res) => {
					if (err) console.log(err);
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
			console.log(this.props)
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
		let avatar = this.props.userData.avatar;

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
					<div className={styles.ProfileLeft}>
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
					</div>
					<div>
						<Dropzone accept="image/*" className={styles.Avatar} onDrop={this.onDrop.bind(this)}>
							{this.state.files.length > 0 ? <img className={styles.Image} src={this.state.files[0].preview} /> : <img className={styles.Image} src={this.props.userData.avatar} />}
						</Dropzone>
						<br />
						<div className={styles.UploadText}>Click to upload image</div>
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
		error: state.auth.error,
		message: state.auth.message,
		errorType: state.auth.errorType
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editProfile: (username, newUsername, email, avatar, password, token) => dispatch(actions.editProfile(username, newUsername, email, avatar, password, token)),
		authLogout: () => dispatch(actions.authLogout())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);