import { Dispatch } from 'redux';

import { UserAction, UserActionTypes } from 'store/actions/user-actions';
import updateProfit from 'services/api/user/update-profit';
import alertsService from 'services/alerts.service';

export const updateUserProfitAction = (value: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.SET_USER_PROFIT, payload: value });
      await updateProfit(value);
    } catch (e) {
      alertsService.onError(e as string, 5000);
    }
  };
};
