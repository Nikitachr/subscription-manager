import { Dispatch } from 'redux';
import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';
import { ISubscription } from 'interfaces/subscription.interface';
import { addSubscription } from 'services/api';
import alertsService from 'services/alerts.service';

export const addSubscriptionAction = (subscription: ISubscription) => {
  return async (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.ADD_SUBSCRIPTION, payload: subscription});
      await addSubscription(subscription);
    } catch (e) {
      alertsService.onError(e as string, 5000);
    }
  }
}
