import { Dispatch } from 'redux';

import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';
import removeSubscription from 'services/api/subscriptions/remove-subscription';
import { ISubscription } from 'interfaces/subscription.interface';

export const deleteSubscriptionAction = (subscription: ISubscription) => {
  return async (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.DELETE_SUBSCRIPTION, payload: subscription.uid});
      await removeSubscription(subscription);
    } catch (e) {

    }
  }
}
