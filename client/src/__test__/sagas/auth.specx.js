import { testSaga } from 'redux-saga-test-plan';
import { authCheckState, authLogout, auth, login, editProfile } from '../../store/sagas/auth';

describe('Sagas Auth', () => {
  
  it('Checks state with token', () => {
    testSaga(authCheckState)
  })
})