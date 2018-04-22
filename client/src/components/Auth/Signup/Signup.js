import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Auth/Button/Button'
import styles from './Signup.css'
import Input from '../../../components/UI/Auth/Input/Input'
import * as actions from '../../../store/actions/index'
import LogoAuth from '../LogoAuth/LogoAuth'
import { NavLink } from 'react-router-dom';

export class Signup extends Component {
	state = {
		//Form input fields
		controls: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'username'
				},
				name: 'USERNAME',
				value: '',
				validation: {
					required: true,
					minLength: 4,
					maxLength: 28
				},
				valid: false
			},
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email'
				},
				name: 'EMAIL',
				value: '',
				validation: {
					required: true,
					isEmail: true,
				},
				valid: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password'
				},
				name: 'PASSWORD',
				value: '',
				validation: {
					required: true,
					minLength: 6,
					maxLength: 48
				},
				valid: false
			},
		},
		errorMessages: null
	};

	submitHandler = event => {
		event.preventDefault();
		if (!this.checkErrorMessages()) {
			this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.controls.username.value);
		}
		// this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.controls.username.value);
		};
	
	checkErrorMessages = () => {
		let newErrorMessage = null;
		if (!this.state.controls.username.valid || !this.state.controls.email.valid || !this.state.controls.password.valid) {
			if (!this.state.controls.username.valid) {
				newErrorMessage = `Please make sure your username is 4-20 characters long`
			} else if (!this.state.controls.email.valid) {
				newErrorMessage = `Please make sure to input a valid e-mail address`
			} else if (!this.state.controls.password.valid) {
				newErrorMessage = `Please make sure your password is 6-20 characters long`
			}
			this.setState({ errorMessages: newErrorMessage });
			return true;
		} else {
			this.setState({ errorMessages: null });
			return false;
		}
	}
    
	//updating the form fields for each input form.
	inputChangedHandler = (event, controlName) => {
		const updatedControl = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation)
			},
		};
		this.setState({ controls: updatedControl });
    };

	//Making sure that the form has valid rules for username, password and email
	checkValidity = (value, rules) => {
		let isValid = true;
		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid;
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid;
		}

		if (rules.isEmail) {
			const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
			isValid = pattern.test(value) && isValid;
		}

		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid;
		}

		return isValid;
	};

	render() {
		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key],
			});
		}

		let form = formElementsArray.map(formElement => (
			<div>
				<p className={styles.AuthFormText}>{formElement.config.name}</p>
				<Input
					key={formElement.id}
					elementType={formElement.config.elementType}
					elementConfig={formElement.config.elementConfig}
					value={formElement.config.value}
					invalid={!formElement.config.valid}
					changed={event => this.inputChangedHandler(event, formElement.id)}
				/>
			</div>
		));

		let errorMessage = <br/>;
		if (this.state.errorMessages !== null) {
			errorMessage = <p className={styles.ErrorMessage}>{this.state.errorMessages}</p>;
		}
		if (this.props.error && this.state.controls.username.valid && this.state.controls.email.valid && this.state.controls.password.valid) {
			errorMessage = <p className={styles.ErrorMessage}>{this.props.error.message}</p>;
		}

		return (
			<React.Fragment>
				<div className={styles.SignUp}>
					<div className={styles.SignUpContainer}>
						<form className={styles.SignupForm} onSubmit={this.submitHandler}>
							<p className={styles.AuthHeader}>CREATE AN ACCOUNT</p>
							<span>
								<div className={styles.ErrorSpace}>{errorMessage}</div>
							</span>
							{form}
							<div style={{ marginBottom: '14px' }}></div>
							<Button btnType="Success">Continue</Button>
							<p className={styles.AuthInfo}>
								Already a Narwhaler? <NavLink className={styles.AuthLink} to="/login">
									Login
								</NavLink>
							</p>
						</form>
					</div>
					<div className={styles.Logo}>
						<LogoAuth />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
    return {
		error: state.auth.error,
		token: state.auth.token,
		isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, username) => dispatch(actions.auth(email, password, username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
