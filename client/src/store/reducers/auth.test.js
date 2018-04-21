import auth from './auth';

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

	it('should handle AUTH_START', () => {
		const authStart = {
			type: 'AUTH_START'
		}

		expect(auth({}, authStart)).toEqual({
			error: null,
			isAuthenticating: true
		})
	})

	it('should handle AUTH_SUCCESS', () => {
		const authSuccess = {
			type: 'AUTH_SUCCESS',
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
			type: 'AUTH_FAIL',
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

	it('should handle AUTH_CHECK_STATE_FINISHED', () => {
		const authCheckStateFinished = {
			type: 'AUTH_CHECK_STATE_FINISHED'
		}

		expect(auth({}, authCheckStateFinished)).toEqual({
			isAuthenticating: false
		})
	})
	
	it('should handle AUTH_LOGOUT', () => {
		const authLogout = {
			type: 'AUTH_LOGOUT'
		}

		expect(auth({}, authLogout)).toEqual({
			token: null,
			userData: null
		})
	})

	it('should handle EDIT_PROFILE_RESET', () => {
		const editProfileReset = {
			type: 'EDIT_PROFILE_RESET'
		}

		expect(auth({}, editProfileReset)).toEqual({
			error: null,
			errorType: {
				username: '',
				password: '',
				email: ''
			}
		})
	})

	it('should handle EDIT_PROFILE_SUCCESS', () => {
		const editProfileSuccess = {
			type: 'EDIT_PROFILE_SUCCESS',
			idToken: 'faketoken',
			userData: {
        id: 1,
        username: 'mockusername',
        email_address: 'mock@email.com',
        avatar: 'mock.jpg',
        password: 'mockPw',
        create_date: "2018-04-16T05:11:41.7642"
			}
		}

		expect(auth({}, editProfileSuccess)).toEqual({
			token: 'faketoken',
			userData: {
				id: 1,
				username: 'mockusername',
				email_address: 'mock@email.com',
				avatar: 'mock.jpg',
				password: 'mockPw',
				create_date: '2018-04-16T05:11:41.7642',
			},
			error: false,
			errorType: {
				username: '',
				password: '',
				email: ''
			}
		})
	})

	it('should handle EDIT_PROFILE_FAIL', () => {
		const editProfileFail = {
			type: 'EDIT_PROFILE_FAIL',
			error: true,
			errorType: {
				username: true,
				password: true,
				email: true
			}
		}

		expect(auth({}, editProfileFail)).toEqual({
			error: true,
			errorType: {
				username: true,
				password: true,
				email: true
			}
		})
	})
	

})