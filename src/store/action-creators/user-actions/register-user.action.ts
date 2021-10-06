import { Dispatch } from 'redux'

import { IRegister } from 'interfaces/register.interface'
import { UserAction, UserActionTypes } from 'store/actions/user-actions'
import registerUser from 'services/api/user/register-user';

export const registerUserAction = (value: IRegister) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.REGISTER });
      const response = await registerUser(value)
      localStorage.setItem('uid', response.uid);
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: response })
    } catch (e)  {
      dispatch({ type: UserActionTypes.REGISTER_ERROR, payload: e as string })
    }
  }
}
