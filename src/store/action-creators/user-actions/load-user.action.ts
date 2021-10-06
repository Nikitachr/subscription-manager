import { Dispatch } from 'redux'

import { UserAction, UserActionTypes } from 'store/actions/user-actions'
import isUserAuthorised from 'services/api/user/is-user-auth';

export const loadUserAction = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.LOAD_USER_DATA });
      const response = await isUserAuthorised();
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: response });
    } catch (e) {
      dispatch({ type: UserActionTypes.SET_USER_DATA, payload: null });
    }
  }
}

