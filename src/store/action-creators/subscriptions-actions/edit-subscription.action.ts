import { ISubscription } from 'interfaces/subscription.interface';
import { Dispatch } from 'redux';
import { SubscriptionsAction, SubscriptionsActionTypes } from 'store/actions/subscriptions-actions';
import editSubscription from 'services/api/subscriptions/edit-subscription';
import alertsService from 'services/alerts.service';

export const editSubscriptionAction = (prevSubscription: ISubscription, subscription: ISubscription) => {
  return async (dispatch: Dispatch<SubscriptionsAction>) => {
    try {
      dispatch({ type: SubscriptionsActionTypes.EDIT_SUBSCRIPTION, payload: subscription });
      await editSubscription(prevSubscription, subscription);
    } catch (e) {
      alertsService.onError(e as string, 5000);
    }
  };
};
