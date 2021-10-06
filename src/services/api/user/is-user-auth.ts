import { IUser } from 'interfaces/user.interface';
import { db } from 'services/firebaseSetup';
import getUid from 'services/api/user/get-user-uid';

export default async function isUserAuthorised(): Promise<IUser> {
  try {
    const uid = await getUid();
    const user = await db.collection('users').doc(uid).get()
    const data = await user.data()
    if (!data) {
      throw 'Unauthorized';
    }
    return data as IUser;
  } catch (e) {
    throw e;
  }
}
