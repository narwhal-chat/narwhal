import * as actions from './auth';

describe('Auth Actions', () => {
  it('should create an action on auth start', () => {
    expect(actions.authStart()).toEqual({ type: 'AUTH_START' })
  })

  it('should create an action on auth success', () => {
    const token = 'faketoken'
    const userData = {
      id: 1,
      username: 'mockusername',
      email_address: 'mock@email.com',
      avatar: 'mock.jpg',
      password: 'mockPw',
      create_date: "2018-04-16T05:11:41.7642"
    }
    const expectedAction = {
      type: 'AUTH_SUCCESS',
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
    
    expect(actions.authSuccess(token, userData)).toEqual(expectedAction)
  })

  it('should create an action on auth fail', () => {
    const error = true;
    const message = "Username or email already exists";

    const expectedAction = {
      type: 'AUTH_FAIL',
      error: true,
      message: "Username or email already exists"
    }

    expect(actions.authFail(error, message)).toEqual(expectedAction)
  })

  it('should create an action on auth', () => {
    const email = "test@gmail.com";
    const password = "testpw";
    const username = "testusername";

    const expectedAction = {
      type: 'AUTH',
      email: "test@gmail.com",
      password: "testpw",
      username: "testusername"
    }

    expect(actions.auth(email, password, username)).toEqual(expectedAction)
  })

  it('should create an action on auth check state', () => {
    const expectedAction = {
      type: 'AUTH_CHECK_STATE'
    }

    expect(actions.authCheckState()).toEqual(expectedAction);
  })

  it('should create an action on auth check state finished', () => {
    const expectedAction = {
      type: 'AUTH_CHECK_STATE_FINISHED'
    }

    expect(actions.authCheckStateFinished()).toEqual(expectedAction);
  })

  it('should create an action on login', () => {
    const password = "testpw";
    const username = "testusername";

    const expectedAction = {
      type: 'LOGIN',
      password: "testpw",
      username: "testusername"
    }

    expect(actions.login(password, username)).toEqual(expectedAction);
  })

  it('should create an action on edit profile reset', () => {
    const expectedAction = {
      type: 'EDIT_PROFILE_RESET'
    }

    expect(actions.editProfileReset()).toEqual(expectedAction)
  })

  it('should create an action on edit profile succes', () => {
    const token = "faketoken";
    const userData = {
        id: 1,
        username: 'mockusername',
        email_address: 'mock@email.com',
        avatar: 'mock.jpg',
        password: 'mockPw',
        create_date: "2018-04-16T05:11:41.7642"
      }
    
    const expectedAction = {
      type: 'EDIT_PROFILE_SUCCESS',
      idToken: "faketoken",
      userData: {
        id: 1,
        username: 'mockusername',
        email_address: 'mock@email.com',
        avatar: 'mock.jpg',
        password: 'mockPw',
        create_date: "2018-04-16T05:11:41.7642"
      }
    }

    expect(actions.editProfileSuccess(token, userData)).toEqual(expectedAction);
  })

  it('should create an action for edit profile fail', () => {
    const error = true;
    const errorType = {
                password: true,
                username: '',
                email: ''
            }
    const expectedAction = {
      type: 'EDIT_PROFILE_FAIL',
      error: true,
      errorType: {
                password: true,
                username: '',
                email: ''
            }
    }

    expect(actions.editProfileFail(error, errorType)).toEqual(expectedAction)
  })

  it('should create an action on edit profile', () => {
    const username = 'testuser';
    const newUsername = 'newUser';
    const email = 'testEmail@gmail.com';
    const avatar = 'img.png';
    const password = 'testpw';

    const expectedAction = {
      type: 'EDIT_PROFILE',
      username: 'testuser',
      newUsername: 'newUser',
      email: 'testEmail@gmail.com',
      avatar: 'img.png',
      password: 'testpw'
    }

    expect(actions.editProfile(username, newUsername, email, avatar, password)).toEqual(expectedAction)
  })
})

