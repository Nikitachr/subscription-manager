import { Dispatch } from 'redux';
import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';
import { ISubscription } from 'interfaces/subscription.interface';

export const addSubscriptionAction = (subscription: ISubscription) => {
  return (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.ADD_SUBSCRIPTION, payload: subscription});
    } catch (e) {
      console.log(e);
    }
  }
}
