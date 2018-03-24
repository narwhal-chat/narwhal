import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Create.css';
import ChooseCategory from '../ChooseCategory/ChooseCategory';
import * as actions from '../../../store/actions/index';

class Create extends Component {
	state = {
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
		}
	};

	categoryClick = () => {
		this.setState({ showModal: true });
	};

	chooseCategory = event => {
		this.setState({
			category: event.target.id,
			showModal: false,
		});
  };

  validate = () => {
    let isError = false;
    if (this.state.podName.length < 5) {
      isError = true;
      this.setState({
        podNameError: {
          error: true,
          message: 'Pod name needs to be at least 5 characters long'
        }
      })
    }

    if(this.state.podName.includes(' ')) {
      isError = true;
      this.setState({
        podNameError: {
          error: true,
          message: 'Pod name must not contain any spaces'
        }
      })
    }

    if (this.state.category === '') {
      isError = true;
      this.setState({
        categoryError: {
          error: true,
          message: 'Please select a category'
        }
      })
    }

    if (this.state.description.split(' ').length < 5) {
      isError = true;
      this.setState({
        descriptionError: {
          error: true,
          message: 'Description must be at least 5 words long.'
        }
      })
    }

    return isError;
  }
  
  onSubmit = event => {
    event.preventDefault();
    //check for errors
    this.setState({
        podNameError: {
          error: false,
          message: ''
        },
        categoryError: {
          error: false,
          message: ''
        },
        descriptionError: {
          error: false,
          message: ''
        },
    })
    console.log('i am submitting');
    const err = this.validate();
    console.log('i am err', err)
    if (err) {
      this.setState({
			podName: '',
			category: '',
			description: ''
		});
    } else {
      this.props.createPod(this.state.podName, this.state.category, this.state.description, this.state.podName.charAt(0));
      this.setState({
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
        }
      });
    }

  }

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		if (this.state.showModal) {
			return <ChooseCategory chooseCategory={this.chooseCategory} />;
		}

		let category = 'SELECT A CATEGORY';
		if (this.state.category !== '') {
			category = this.state.category;
		}

		let avatar = '';
		if (this.state.podName !== '') {
			avatar = this.state.podName.charAt(0);
		}

		return <div className={styles.Create}>
				<div className={styles.Header}>CREATE A POD</div>
				<div className={styles.PodInfo}>
					<div className={styles.PodLeft}>
						<div>
							<label>POD NAME</label>
							<div className={styles.PodForm}>
								<input className={styles.PodInputForm} type="text" placeholder="Enter pod name here" name="podName" value={this.state.podName} onChange={this.handleChange} />
								<hr />
                {this.state.podNameError.error ? <div className={styles.ErrorMessage}>{this.state.podNameError.message}</div> : null}
							</div>
						</div>
						<div>
							<label>POD CATEGORY</label>
								<button className={styles.CategoryButton} onClick={this.categoryClick}>
									{category}
								</button>
                {this.state.categoryError.error ? <div className={styles.ErrorMessage}>{this.state.categoryError.message}</div> : null}
						</div>
						<div>
							<label>POD DESCRIPTION</label>
							<input className={styles.DescriptionInputForm} type="text" placeholder="Enter description here" name="description" value={this.state.description} onChange={this.handleChange} />
							<hr />
              {this.state.descriptionError.error ? <div className={styles.ErrorMessage}>{this.state.descriptionError.message}</div> : null}
						</div>
					</div>
					<div className={styles.Avatar}>{avatar}</div>
				</div>
				<div className={styles.Footer}>
					<div onClick={this.props.onRequestClose} className={styles.BackButton}>
						BACK
					</div>
					<button onClick={this.onSubmit} className={styles.CreateButton}>
						Create
					</button>
				</div>
			</div>;
	}
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPod: (podname, category, description, avatar) => dispatch(actions.createPod(podname, category, description, avatar))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);