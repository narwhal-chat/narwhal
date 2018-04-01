import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './CreateTopic.css';
import ChooseCategory from '../ChooseCategory/ChooseCategory';
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
		if (err) {
			this.setState({
				topicName: ''
			});
		} else {
			this.setState({
				topicName: '',
				topicNameError: {
					error: false,
					message: '',
				}
			});

			this.props.onCreateTopic(this.state.topicName);
			this.props.closeModal();
		}
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
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
							placeholder="Enter topic name here"
							name="topicName"
							onChange={this.handleChange}
						/>
						<hr />
							{this.state.topicNameError.error ? (<div className={styles.ErrorMessage}>{this.state.topicNameError.message}</div>) : null}
					</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.closeModal} className={styles.BackButton}>
						BACK
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