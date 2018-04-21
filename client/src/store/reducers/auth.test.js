import auth from './auth';
import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_FAIL } from '../actions/actionTypes'

describe('Auth Reducer', () => {
  it('has a default state', () => {
    expect(auth(undefined, {})).toEqual({
			token: null,
			userData: null,
			error: null,
			errorType: {
				username: '',
				password: '',
				email: '',
			},
			isAuthenticating: true,
			authRedirectPath: '/',
		});
	})

	it('should handle AUTH_SUCCESS', () => {
		const authSuccess = {
			type: AUTH_SUCCESS,
			idToken: 'asdf',
			userData: {
					userId: 'asdf'
				},
			error: null,
			isAuthenticating: false
		}

		expect(auth({}, authSuccess)).toEqual({
			token: 'asdf',
			userData: {
				userId: 'asdf'
			},
			error: null,
			isAuthenticating: false
		});
	})

	it('should handle AUTH_FAIL', () => {
		const authFail = {
			type: AUTH_FAIL,
			error: true,
			message: 'Error message: AUTH_FAIL',
			isAuthenticating: false
		}

		expect(auth({}, authFail)).toEqual({
			error: true,
			message: 'Error message: AUTH_FAIL',
			isAuthenticating: false
		})
	})
	
	it('should handle AUTH_LOGOUT', () => {
		const authLogout = {
			type: AUTH_LOGOUT
		}

		expect(auth({}, authLogout)).toEqual({
			token: null,
			userData: null
		})
	})

})