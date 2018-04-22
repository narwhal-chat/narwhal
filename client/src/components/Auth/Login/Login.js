import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Auth/Button/Button';
import styles from './Login.css';
import Input from '../../../components/UI/Auth/Input/Input';
import * as actions from '../../../store/actions/index';
import { NavLink } from 'react-router-dom';
import LogoAuth from '../LogoAuth/LogoAuth';

class Login extends Component {
	state = {
		// Form input fields
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

			this.props.onLogin(
				this.state.controls.password.value,
				this.state.controls.username.value,
				this.state.isSignup
			);
	};

	// Updating the form fields for each input form
	inputChangedHandler = (event, controlName) => {
		const updatedControl = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				touched: true,
			},
		};
		this.setState({ controls: updatedControl });
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
			<div key={formElement.id}>
				<p className={styles.AuthFormText}>{formElement.config.name}</p>
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
			</div>
		));

		// Checks to see if we get an error message back from the server
		let errorMessage = <br/>;

		if (this.props.error) {
			errorMessage = <p className={styles.ErrorMessage}>{this.props.errorMessage}</p>;
		}

		return (
			<div className={styles.Login}>
				<div className={styles.LoginContainer}>
					<form className={styles.LoginForm} onSubmit={this.submitHandler}>
						<p className={styles.AuthHeader}>SIGN IN</p>
						<span>
							<div className={styles.ErrorSpace}>{errorMessage}</div>
						</span>
						{form}
						<div style={{ marginBottom: '14px' }}></div>
						<Button btnType="Success">Continue</Button>
						<p className={styles.AuthInfo}>
							Join the community! <NavLink className={styles.AuthLink} to="/register">
								Register
							</NavLink>
						</p>
					</form>
				</div>
				<div className={styles.Logo}>
					<LogoAuth />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		error: state.auth.error,
		errorMessage: state.auth.message,
		isAuthenticated: state.auth.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (password, username) => dispatch(actions.login(password, username))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
