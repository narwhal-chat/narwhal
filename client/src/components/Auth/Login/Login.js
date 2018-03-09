import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import classes from './Login.css';
import Input from '../../../components/UI/Input/Input';
import * as actions from '../../../store/actions/index';
import { NavLink } from 'react-router-dom';
import LogoAuth from '../LogoAuth/LogoAuth';

class Login extends Component {
	state = {
		//Form input fields
		controls: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'username',
					placeholder: 'Username',
				},
				value: '',
				validation: {
					required: true,
				},
				valid: false,
				touched: false,
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
				},
				value: '',
				validation: {
					required: true,
					minLength: 6,
				},
				valid: false,
				touched: false,
			},
		},
		isSignup: true,
	};

	submitHandler = event => {
		event.preventDefault();
		this.props.onLogin(
			this.state.controls.password.value,
			this.state.controls.username.value,
			this.state.isSignup
		);
	};

	//updating the form fields for each input form.
	inputChangedHandler = (event, controlName) => {
		const updatedControl = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true,
			},
		};
		this.setState({ controls: updatedControl });
	};

	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return { isSignup: !prevState.isSignup };
		});
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
			<Input
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={event => this.inputChangedHandler(event, formElement.id)}
			/>
		));

		let errorMessage = null;

		if (this.props.error) {
			errorMessage = <p>{this.props.error.message}</p>;
		}

		return <div className="authContainer">
				<div className="signUp">
					{errorMessage}
					<form className="signupForm" onSubmit={this.submitHandler}>
						<p className="authHeader">SIGN IN</p>
						{form}
						<Button btnType="Success">Continue</Button>
						<p>
							Need an account? <NavLink to="/register">Register</NavLink>
						</p>
					</form>
					{/* <Button clicked={this.switchAuthModeHandler} btnType="Danger">
						SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}
					</Button> */}
				</div>
				<div className="logo">
					<LogoAuth />
				</div>
			</div>;
	}
}

const mapStateToProps = state => {
	return {
		error: state.auth.error,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (password, username, isSignup) => dispatch(actions.login(password, username, isSignup)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
