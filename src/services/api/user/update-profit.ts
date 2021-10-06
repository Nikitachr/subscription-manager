import getUid from 'services/api/user/get-user-uid';
import { db } from 'services/firebaseSetup';

export default async function updateProfit(value: number): Promise<void> {
  try {
    const uid = await getUid();
    await db.collection('users').doc(uid).update({ profit: value });
  } catch (e) {
    throw 'Cant update user profit';
  }
}
