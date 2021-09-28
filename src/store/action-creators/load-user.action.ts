import { Dispatch } from 'redux'
import { UserAction, UserActionTypes } from 'store/actions/user-actions'
import { isLoginUser } from 'services/api'

export const loadUserAction = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOAD_USER_DATA });
      const response = await isLoginUser();
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: response });
    } catch (e) {
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: null });
    }
  }
}

