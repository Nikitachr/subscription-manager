import { ISubscription } from 'interfaces/subscription.interface';
import { db } from 'services/firebaseSetup';
import firebase from 'firebase/compat';
import getUid from 'services/api/user/get-user-uid';

export async function addSubscription(subscription: ISubscription): Promise<void> {
  try {
    const uid = await getUid();
    await db.collection('subscriptions').doc(uid).update({
      array: firebase.firestore.FieldValue.arrayUnion(subscription)
    })
  } catch (e) {
    throw 'Cant add subscription';
  }
}
