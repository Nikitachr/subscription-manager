import { Dispatch } from 'redux';

import { UserAction, UserActionTypes } from 'store/actions/user-actions';
import { history } from 'App';

export const logoutUserAction = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      localStorage.clear();
      dispatch({ type: UserActionTypes.LOGOUT })
      history.push('/auth')
    } catch (e)  {
    }
  }
}
