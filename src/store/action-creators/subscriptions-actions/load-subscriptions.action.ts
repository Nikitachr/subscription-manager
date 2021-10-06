import { Dispatch } from 'redux';
import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';
import getUserSubscriptions from 'services/api/subscriptions/get-user-subscriptions';

export const loadSubscriptionsAction = () => {
  return async (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.LOAD_DATA });
      const subscriptions = await getUserSubscriptions();
      dispatch({ type: SubscriptionsActionTypes.LOAD_DATA_SUCCESS, payload: subscriptions });
    } catch (e) {
      dispatch({ type: SubscriptionsActionTypes.LOAD_DATA_ERROR, payload: e as string });
    }
  }
}
