import { Dispatch } from 'redux';

import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';

export const deleteSubscriptionAction = (id: string) => {
  return async (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.DELETE_SUBSCRIPTION, payload: id});
    } catch (e) {

    }
  }
}
