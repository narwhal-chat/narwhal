import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Create.css';
import ChooseCategory from '../ChooseCategory/ChooseCategory';
import { Form, Text } from 'react-form';
import * as actions from '../../../store/actions/index';

class Create extends Component {
	state = {
		showModal: false,
		podName: '',
		category: '',
    description: ''
	};

	componentDidMount() {
		console.log('this from create', this);
	}

	categoryClick = () => {
		this.setState({ showModal: true });
  };

  chooseCategory = (event) => {
    this.setState({ 
      category: event.target.id,
      showModal: false
     })
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

	render() {
		if (this.state.showModal) {
			return <ChooseCategory chooseCategory={this.chooseCategory} />;
    }

    let category = 'SELECT A CATEGORY';
    if (this.state.category !== '') {
      category = this.state.category
    }

    let avatar = '';
    if (this.state.podName !== '') {
      avatar = this.state.podName.charAt(0)
    }

		return (
			<div className={styles.Create}>
				<div className={styles.Header}>CREATE A POD</div>
				<div className={styles.PodInfo}>
					<div className={styles.PodLeft}>
						<div>
							<label>POD NAME</label>
							<form className={styles.PodForm}>
								<input
									className={styles.PodInputForm}
									type="text"
									placeholder="Enter pod name here"
                  name="podName"
                  value={this.state.podName}
                  onChange={this.handleChange}
								/>
								<hr />
							</form>
						</div>
						<div>
							<label>POD CATEGORY</label>
							<div>
								<button className={styles.CategoryButton} onClick={this.categoryClick}>
									{category}
								</button>
							</div>
						</div>
						<div>
							<label>POD DESCRIPTION</label>
							<input
								className={styles.DescriptionInputForm}
								type="text"
								placeholder="Enter description here"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
							/>
							<hr />
						</div>
					</div>
					<div className={styles.Avatar}>{avatar}</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.onRequestClose} className={styles.BackButton}>
						BACK
					</div>
					<button className={styles.CreateButton}>Create</button>
				</div>
			</div>
		);
	}
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);