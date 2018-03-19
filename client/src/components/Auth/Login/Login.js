import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Button from '../../../components/UI/Auth/Button/Button';
import styles from './Login.css';
import Input from '../../../components/UI/Auth/Input/Input';
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
					type: 'username'
				},
				name: 'USERNAME',
				value: '',
				validation: {
					minLength: 6,
					maxLength: 28
				},
				valid: false,
				touched: false,
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password'
				},
				name: 'PASSWORD',
				value: '',
				validation: {
					minLength: 6,
				},
				valid: false,
				touched: false,
			},
		},
		isValid: true
	};

	submitHandler = event => {
		event.preventDefault();
		if (!this.state.controls.username.valid || !this.state.controls.password.valid) {
			this.setState({ isValid: false });
		}
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
				<p className={styles.AuthFormText}>{formElement.config.name}</p>
			</div>
		));


		//Checks to see if we get an error message back from the server.
		let errorMessage = null;

		if (this.props.error) {
			errorMessage = <p className={styles.ErrorMessage}>Username or Password does not match</p>;
		}

		let invalidMessage = null;
		if (!this.state.isValid && this.props.error === null) {
			invalidMessage = <p className={styles.ErrorMessage}>Username does not exist</p>;
		}

		//If we become authenticated, it will redirect us to the main page.
		// let authRedirect = null;
		// if (this.props.isAuthenticated) {
		// 	authRedirect = <Redirect to="/"/>
		// }

		return <React.Fragment>
				<div className={styles.Login}>
					{/* {authRedirect} */}
					<form className={styles.LoginForm} onSubmit={this.submitHandler}>
						<p className={styles.AuthHeader}>SIGN IN</p>
						{errorMessage}
						{invalidMessage}
						{form}
						<Button btnType="Success">Continue</Button>
						<p className={styles.AuthInfo}>
							Need an account? <NavLink className={styles.AuthLink} to="/register">
								Register
							</NavLink>
						</p>
					</form>
				</div>
				<div className={styles.Logo}>
					<LogoAuth />
				</div>
			</React.Fragment>;
	}
}

const mapStateToProps = state => {
	console.log(state.auth);
	return {
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		authRedirectPath: state.authRedirectPath
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (password, username, isSignup) => dispatch(actions.login(password, username, isSignup)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
