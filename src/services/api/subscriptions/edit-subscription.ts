import { ISubscription } from 'interfaces/subscription.interface';
import removeSubscription from 'services/api/subscriptions/remove-subscription';
import { addSubscription } from 'services/api/subscriptions/add-subscription';

export default async function editSubscription(prevSubscription: ISubscription, subscription: ISubscription): Promise<void> {
  try {
    await removeSubscription(prevSubscription)
    await addSubscription(subscription);
  } catch (e) {
    throw 'Cant update subscription';
  }
}
