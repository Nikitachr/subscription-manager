import { Dispatch } from 'redux';

import { UserAction, UserActionTypes } from 'store/actions/user-actions';

export const updateUserProfitAction = (value: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.SET_USER_PROFIT, payload: value });
    } catch (e) {

    }
  };
};
