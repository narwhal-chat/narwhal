import auth from '../../store/reducers/auth';
import * as actionTypes from '../../store/actions/actionTypes';

describe('Auth Reducer', () => {
  it('has a default state', () => {
    expect(auth(undefined, { type: 'unexpected'})).toEqual({
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
	
	it('should handle LOGOUT', () => {
		const authLogout = {
			type: actionTypes.authLogout
		}

		expect(auth(undefined, authLogout)).toEqual({
			token: null,
			userData: null,
			error: null,
			errorType: {
				username: '',
				password: '',
				email: '',
			},
			authRedirectPath: '/',
		})
	})

})