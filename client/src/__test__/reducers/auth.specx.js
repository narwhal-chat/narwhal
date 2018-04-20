import auth from '../../store/reducers/auth';
import { AUTH_LOGOUT, AUTH_SUCCESS, AUTH_FAIL } from '../../store/actions/actionTypes'

describe('Auth Reducer', () => {
	let defaultState = {
    token: null,
		userData: null,
		error: null,
		errorType: {
			username: '',
			password: '',
			email: ''
		},
    authRedirectPath: '/'
	};
  xit('has a default state', () => {
    expect(auth(undefined, {})).toEqual({
			token: null,
			userData: null,
			error: null,
			errorType: {
				username: '',
				password: '',
				email: '',
			},
			authRedirectPath: '/',
		});
	})

	xit('should handle AUTH_SUCCESS', () => {
		const authSuccess = {
			type: AUTH_SUCCESS,
			idToken: 'asdf',
			userData: {
					userId: 'asdf'
				},
			error: null
		}

		expect(auth({}, authSuccess)).toEqual({
			token: 'asdf',
			userData: {
				userId: 'asdf'
			},
			error: null
		});
	})

	xit('should handle AUTH_FAIL', () => {
		const authFail = {
			type: AUTH_FAIL,
			error: true,
			message: 'Error message: AUTH_FAIL'
		}

		expect(auth({}, authFail)).toEqual({
			error: true,
			message: 'Error message: AUTH_FAIL'
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