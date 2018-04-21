import * as actions from './auth';

describe('Auth Actions', () => {
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
})

