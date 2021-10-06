import { db } from 'services/firebaseSetup';
import getUid from 'services/api/user/get-user-uid';
import firebase from 'firebase/compat';
import { ISubscription } from 'interfaces/subscription.interface';

export default async function removeSubscription(subscription: ISubscription): Promise<void> {
  try {
    const userUid = await getUid();
    await db.collection('subscriptions').doc(userUid).update({
      array: firebase.firestore.FieldValue.arrayRemove(subscription)
    })
  } catch (e) {
    throw e;
  }
}

