import { ISubscription } from 'interfaces/subscription.interface';
import { db } from 'services/firebaseSetup';
import getUid from 'services/api/user/get-user-uid';

export default async function getUserSubscriptions(): Promise<ISubscription[]> {
  try {
    const uid = await getUid();
    const subscriptions = await db.collection('subscriptions').doc(uid).get();
    return subscriptions.data()?.array as ISubscription[];
  } catch (e) {
    throw e;
  }
}
