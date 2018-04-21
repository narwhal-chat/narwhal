import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './CreateTopic.css';
import * as actions from '../../../store/actions/index';

class CreateTopic extends Component {
	state = {
		topicName: '',
		topicNameError: {
			error: false,
			message: ''
		}
	};


	validate = () => {
		let isError = false;
		if (this.state.topicName.length < 3) {
			isError = true;
			this.setState({
				topicNameError: {
					error: true,
					message: 'Topic needs to be at least 3 characters',
				},
			});
		}

		if (this.state.topicName.includes(' ')) {
			isError = true;
			this.setState({
				topicNameError: {
					error: true,
					message: 'Topic must not contain any spaces',
				},
			});
		}

		return isError;
	};

	onSubmit = event => {
		event.preventDefault();
		//check for errors
		this.setState({
			topicNameError: {
				error: false,
				message: '',
			}
		});

		const err = this.validate();
		if (!err) {
			this.setState({
				topicName: '',
				topicNameError: {
					error: false,
					message: '',
				}
			});

			this.props.onCreateTopic(this.state.topicName[this.state.topicName.length - 1] === '-' ? this.state.topicName.substring(0, this.state.topicName.length - 1) : this.state.topicName,
		);
			this.props.closeModal();
		}
	};

	handleChange = event => {
		// Set the incoming string and make it lowercase
		let value = event.target.value.toLowerCase();

		// Remove all puncutation and special characters, excluding hyphens
		value = value.replace(/[^A-Za-z0-9/-]/g, '');

		// Return nothing if the first and only character is a space
		if (event.target.value[event.target.value.length - 1] === ' ' && event.target.value.length === 1) {
			return;
		// If the last character in the string is a space
		} else if (event.target.value[event.target.value.length - 1] === ' ') {
			// If the second to last character is a hyphen, remove the last character in the string
			if (event.target.value[event.target.value.length - 2] === '-') {
				value = event.target.value.substring(0, event.target.value.length - 1);
			// Else append a hyphen
			} else {
				value = event.target.value.substring(0, event.target.value.length - 1) + '-';
			}
		// Return nothing if the first and only character is a hyphen
		} else if (event.target.value[event.target.value.length - 1] === '-' && event.target.value.length === 1) {
			return;
		// Prevent repeating hyphens
		} else if (event.target.value[event.target.value.length - 1] === '-' && event.target.value[event.target.value.length - 2] === '-') {
			value = event.target.value.substring(0, event.target.value.length - 1);
		}

		// Restrict the name length to 20 characters
		if (value.length > 20) {
			value = value.substring(0, 20);
		}

		this.setState({ [event.target.name]: value });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}className={styles.CreateTopic}>
				<div className={styles.Header}>
					<div>CREATE A TOPIC</div>
				</div>
				<div className={styles.Content}>
					<div>
						<label>TOPIC NAME</label>
						<input
							className={styles.InputForm}
							type="text"
							autoFocus="autofocus"
							placeholder="Enter topic name here"
							name="topicName"
							value={this.state.topicName}
							onChange={this.handleChange}
						/>
						{this.state.topicNameError.error ? (<div className={styles.ErrorMessage}>{this.state.topicNameError.message}</div>) : null}
					</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.closeModal} className={styles.BackButton}>
						Cancel
					</div>
					<button type="submit" className={styles.CreateButton}>
						Create
					</button>
				</div>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		onCreateTopic: (topicName) => dispatch(actions.createTopic(topicName)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopic);
