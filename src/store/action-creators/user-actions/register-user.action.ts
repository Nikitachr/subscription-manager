import { Dispatch } from 'redux'

import { IRegister } from 'interfaces/register.interface'
import { UserAction, UserActionTypes } from 'store/actions/user-actions'
import registerUser from 'services/api/user/register-user';
import { history } from 'App';
import alertsService from 'services/alerts.service';

export const registerUserAction = (value: IRegister) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.REGISTER });
      const response = await registerUser(value)
      localStorage.setItem('uid', response.uid);
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: response })
      history.push('/main')
    } catch (e)  {
      dispatch({ type: UserActionTypes.REGISTER_ERROR, payload: e as string })
      alertsService.onError(e as string, 5000);
    }
  }
}
