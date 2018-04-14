import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import upload from 'superagent';

import styles from './Create.css';
import LeftArrow from 'react-icons/lib/io/android-arrow-back';
import ChooseCategory from '../ChooseCategory/ChooseCategory';
import * as actions from '../../../store/actions/index';

class Create extends Component {
	state = {
		files: [],
		showModal: false,
		podName: '',
		podNameError: {
			error: false,
			message: '',
		},
		category: '',
		categoryError: {
			error: false,
			message: '',
		},
		description: '',
		descriptionError: {
			error: false,
			message: '',
		},
		avatar: '',
		avatarError: {
			error: false,
			message: '',
		}
	};

	componentDidMount() {

	}

	onDrop = (files) => {
		this.setState({
			files: files,
			avatar: files[0].preview
		})
	}

	changeCategory = event => {
		this.setState({ category: event.target.value })
	}

	validate = () => {
		let isError = false;
		if (this.state.podName.length < 4) {
			isError = true;
			this.setState({
				podNameError: {
					error: true,
					message: 'Pod name needs to be at least 4 characters long',
				},
			});
		}

		if (this.state.podName.includes(' ')) {
			isError = true;
			this.setState({
				podNameError: {
					error: true,
					message: 'Pod name must not contain any spaces',
				},
			});
		}

		if (this.state.category === '') {
			isError = true;
			this.setState({
				categoryError: {
					error: true,
					message: 'Please select a category',
				},
			});
		}

		if (this.state.description.split(' ').length < 5) {
			isError = true;
			this.setState({
				descriptionError: {
					error: true,
					message: 'Description must be at least 5 words long.',
				},
			});
		}

		return isError;
	};

	onSubmit = event => {
		event.preventDefault();
		//check for errors
		this.setState({
			podNameError: {
				error: false,
				message: '',
			},
			categoryError: {
				error: false,
				message: '',
			},
			descriptionError: {
				error: false,
				message: '',
			},
		});
		const err = this.validate();
		if (err) {
			this.setState({
				podName: '',
				category: '',
				description: '',
			});
		} else {
			let image = this.state.files[0]
			let uploadedImage = null;

			if (this.state.avatar === '') {
				this.props.createPod(
					this.state.podName,
					this.state.category,
					this.state.description,
					this.state.avatar
				);
			} else {
				upload.post('/uploadPod')
				.attach('image', image)
				.end((err, res) => {
					if (err) console.log(err);
					uploadedImage = res.text;
					this.props.createPod(
						this.state.podName,
						this.state.category,
						this.state.description,
						uploadedImage
					);
				});
			}
			this.props.onRequestClose();
		}
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		if (this.state.showModal) {
			return <ChooseCategory chooseCategory={this.chooseCategory} />;
		}

		let category = 'Select a category';
		let avatar = '';
		if (this.state.category !== '') {
			category = this.state.category;
			let categoryAvatar = this.props.category.filter(avatar => {
				return category == avatar.id
			})
			avatar = <img className={styles.Image} src={categoryAvatar[0].default_category_avatar} alt="Pod Avatar" />;
		}

		let categories = this.props.categories.map(category => {
			return <option key={category.id} className={styles.DropdownValue} value={category.id}>{category.name}</option>;
		});

		return <form onSubmit={this.onSubmit} className={styles.Create}>
				<div className={styles.Header}>CREATE A POD</div>
				<div className={styles.PodInfo}>
					<div className={styles.PodLeft}>
						<div>
							<label>NAME</label>
							<div className={styles.PodForm}>
								<input className={styles.PodInputForm} type="text" autoFocus="autofocus" placeholder="Enter a pod name here" name="podName" value={this.state.podName} onChange={this.handleChange} />
								{this.state.podNameError.error ? <div className={styles.ErrorMessage}>
										{this.state.podNameError.message}
									</div> : null}
							</div>
						</div>
						<div>
							<label>CATEGORY</label>
							<div className={styles.PodCategoryContainer}>
								<select className={styles.PodCategory} onChange={this.changeCategory}>
									<option value="" disabled selected hidden>
										Select a category
									</option>
									{categories}
								</select>
							</div>
							{this.state.categoryError.error ? <div className={styles.ErrorMessage}>
									{this.state.categoryError.message}
								</div> : null}
						</div>
						<div>
							<label>DESCRIPTION</label>
							<input className={styles.DescriptionInputForm} type="text" placeholder="Enter a description here" name="description" value={this.state.description} onChange={this.handleChange} />
							{this.state.descriptionError.error ? <div className={styles.ErrorMessage}>
									{this.state.descriptionError.message}
								</div> : null}
						</div>
					</div>
					<div>
						<Dropzone accept="image/*" className={styles.Avatar} onDrop={this.onDrop.bind(this)}>
							{this.state.files.length > 0 ? <img className={styles.Image} src={this.state.files[0].preview} /> : avatar}
						</Dropzone>
						<div className={styles.UploadText}>Click to an upload image</div>
					</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.closeModal} className={styles.BackButton}>
						<LeftArrow className={styles.BackIcon} />
						Back
					</div>
					<button type="submit" className={styles.CreateButton}>
						Create
					</button>
				</div>
			</form>;
	}
}

const mapStateToProps = state => {
	return {
		category: state.chat.categories
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createPod: (podName, category, description, avatar) => dispatch(actions.createPod(podName, category, description, avatar)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
